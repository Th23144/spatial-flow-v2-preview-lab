# Project 2 · Checkout S4B First-Phase Implementation-Plan Review and Step-1 Authorization

Date: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Review result

```text
Submitted implementation plan: substantial and directionally correct
Plan status: approved only with the mandatory corrections in this document
Full first-phase plugin implementation: not authorized as one batch
Bounded plugin Step 1: authorized
Project 2 Checkout page modification: not authorized
Checkout status: Not done
```

Reviewed plan:

```text
Spatial Flow Crypto Pay · Project 2 First-Phase Implementation Plan
Baseline: Spatial Flow Crypto Pay Trial 0.2.5
Gateway: SF_Crypto_Pay_Gateway / spatial_flow_crypto
```

The submitted plan correctly decomposes the work into a Gateway-compatible order-pay workspace, shared services, REST operations, rollback compatibility and bounded development groups. It must not be implemented verbatim. This document is authoritative wherever it corrects or narrows that plan.

## 2. Verified WooCommerce order-pay boundary

WooCommerce order-pay performs, in order:

```text
Order ID / Order Key validation
customer permission validation
needs_payment() validation
stock validation where applicable
guest email verification where required
before_woocommerce_pay_form
checkout/form-pay.php rendering
```

Therefore the following plan direction is approved:

```text
- use a spatial_flow_crypto-scoped woocommerce_valid_order_statuses_for_payment filter to admit on-hold
- preserve WooCommerce order, user, stock and guest-email validation
- use before_woocommerce_pay_form only after WooCommerce validation
- replace checkout/form-pay.php only for the approved Crypto order-pay workspace
- leave all other gateways and ordinary order-pay pages unchanged
```

The default WC_Order::needs_payment() valid statuses are pending and failed, so on-hold must be added only for unpaid spatial_flow_crypto orders while the Workspace feature is enabled.

## 3. Mandatory correction: use Workspace Token scheme B, not Cookie scheme A

The submitted implementation plan selected:

```text
A. HttpOnly Workspace Cookie + separate CSRF token
```

That choice is not approved for the first integration revision.

Reason:

```text
before_woocommerce_pay_form is reached during pay-page rendering.
It is a valid post-validation context hook, but it is not a reliable universal point for sending a new Set-Cookie header because page output may already have begun.
```

Approved first-phase mechanism:

```text
B. a short-lived signed opaque Workspace Token rendered into the server-approved Step-03 bootstrap and sent in a dedicated request header
```

Required header:

```text
X-SF-Workspace-Token
```

Required Token properties remain:

```text
version
jti
blog_id
order_id
gateway_id = spatial_flow_crypto
non-reversible Order Key digest
order_customer_id
actor_user_id
auth_context = guest / customer / manager
issued_at
expires_at
feature_epoch
```

Required security properties:

```text
- HMAC-SHA256 signing with a WordPress server secret and plugin-specific context
- raw Order Key is used only by WooCommerce/server-side order-pay validation
- raw Order Key is never placed inside the Token
- Token lifetime: 30 minutes
- Token invalid after payment, cancellation, refund, completion, trash, Gateway change, feature disable or epoch change
- same-origin requests only
- Cache-Control: no-store, private
- Token never logged and never sent to analytics
- normal business JSON never echoes the Token
```

Because the Token is not automatically attached by the browser like a Cookie, the first-phase Guest write-request defense is:

```text
valid X-SF-Workspace-Token
AND Content-Type: application/json
AND same-origin Origin, with Referer fallback only when Origin is absent
AND exact order / gateway / actor / state binding
```

A separate Guest CSRF token is not required in this scheme. Administrator Sandbox still requires:

```text
valid Workspace Token
logged-in WordPress session
X-WP-Nonce
manage_woocommerce
sandbox_mode = yes
order / invoice relationship validation
```

## 4. Mandatory correction: hook responsibilities

Approved responsibilities:

```text
before_woocommerce_pay_form:
- receives the already validated WC_Order
- establishes an in-request Workspace context
- signs the short-lived opaque Workspace Token
- does not print content
- does not send a Cookie

woocommerce_locate_template:
- accepts the documented filter arguments
- returns an absolute plugin template path
- replaces checkout/form-pay.php only when the current validated context is spatial_flow_crypto + feature enabled + unpaid approved state
- otherwise returns the original located template unchanged
```

The implementation must specify filter priority and accepted-argument count in code comments and tests.

## 5. Mandatory correction: recovery-link leakage boundary

The WooCommerce order-pay recovery URL contains the raw Order Key by design.

Approved handling:

```text
- server renders it only in the dedicated recovery anchor
- it is not included in REST JSON
- it is not included in window-level bootstrap objects
- it is not logged
- it is not passed to analytics
- Workspace response sends Referrer-Policy: no-referrer
- no third-party scripts or third-party assets are loaded on the Workspace page
```

The Copy recovery link control may read that dedicated anchor value because the customer already possesses the order-pay URL. It must not reuse the key as REST authorization.

## 6. Mandatory correction: one order-scoped write lock

The plan defines an Invoice creation lock but does not fully lock concurrent settlement.

Approved first-phase rule:

```text
Use one documented MySQL advisory-lock family for all order-mutating Crypto operations.
```

Lock key:

```text
sfcp:order:{blog_id}:{order_id}
```

Use a bounded hashed representation if necessary for MySQL key-length compatibility.

Required behavior:

```text
- GET_LOCK timeout: 5 seconds
- GET_LOCK must return 1; otherwise fail closed with retryable conflict
- release in finally
- different orders may proceed concurrently
- same-order Create Invoice / Sandbox / final settlement are serialized
- lock support must be checked in the deployment environment
```

TRON network verification must not hold the order lock during the external HTTP request.

Approved Submit Hash sequence:

```text
validate request and current invoice
→ query TronGrid outside the advisory lock
→ acquire order-scoped lock
→ re-read order, invoice and duplicate-transaction state
→ return existing success if already paid
→ enforce transaction unique constraint
→ persist transaction and settlement exactly once
→ call payment_complete() at most once
→ release lock
```

The existing unique `(chain_code, tx_hash)` constraint remains the final cross-order duplicate guard. Duplicate-key conflicts must be translated into a safe `duplicate_tx` result, not a raw SQL error.

## 7. Mandatory correction: rejection state semantics

Do not mutate Invoice/Order state for every bad request.

Approved classification:

```text
invalid tx-hash format:
- HTTP 400
- no Invoice status mutation
- no customer-facing order note

TronGrid temporary error or transaction not yet confirmed:
- retryable response
- preserve the current Invoice state
- do not create a deterministic rejection record

confirmed deterministic mismatch:
- receiver mismatch
- old transaction
- wrong token
- amount too low
- no qualifying token transfer
- duplicate transaction
→ verification_failed where applicable
→ on-hold remains
→ customer-safe error + internal note/log
```

A later successful Hash clears prior rejection Meta.

`manual_review` remains limited to partial-write inconsistency, unresolved ownership conflict, state divergence or explicit administrator intervention.

## 8. Mandatory correction: transaction-verification rate limit

The submitted plan lists HTTP 429 but does not define a mechanism.

Before the Submit Transaction Hash REST route is authorized, the plugin workstream must lock and document a bounded rate limiter that is:

```text
- scoped primarily by order_id + Workspace Token jti
- supplemented by a privacy-preserving client-network digest where practical
- stored without raw IP logging
- able to return retry_after
- bypassable only by manage_woocommerce where explicitly intended
- not applied to ordinary read/status routes
```

No route may advertise HTTP 429 until the limiter exists and is tested.

The exact threshold is deferred to the bounded Submit-Hash development group, not to Step 1.

## 9. Approved order eligibility

Approved first-phase Workspace statuses:

```text
on-hold
pending, only for documented recovery/transition compatibility
```

Not approved in the first Workspace revision:

```text
failed retry
cancelled
refunded
completed
trash
```

Paid/processing/completed orders enter or redirect to canonical Step 04. Cancelled, refunded and trash orders receive no Workspace Token and no payment operation.

The custom service guard must not rely on generic needs_payment() as its sole rule. The WooCommerce filter must remain scoped to this Gateway and feature flag only.

## 10. Approved first-phase state and feature boundaries

Operational first-phase states:

```text
waiting_payment
verification_failed
manual_review
cancelled
paid_confirmed
```

Deferred:

```text
expired
payment_detected
confirming
partially_paid
overpaid
late_paid
```

Still prohibited in the first integration revision:

```text
QR code
live countdown
operational invoice expiry
replacement Invoice after elapsed time
automatic chain monitoring
periodic polling presented as monitoring
Worker / Cron / Webhook
multi-asset or customer-selectable networks
real quote/rate-lock system
```

## 11. Approved rollback architecture

Approved:

```text
Gateway setting: project2_workspace_enabled
Default: no
Feature epoch option: sf_crypto_workspace_token_epoch
Feature disabled: current V0.2.5 /crypto-pay/ redirect remains authoritative
Feature enabled: process_payment() may redirect to server-generated order-pay URL
REST routes may remain registered but fail closed while disabled
Existing shortcode, template and admin-post actions remain operational
No database rollback is required to disable the Workspace
```

Changing the feature flag must invalidate all previously issued Workspace Tokens through the epoch value.

## 12. Repository/local-source audit boundary

A repository search found no Project 2 source reference to:

```text
checkout/form-pay.php
woocommerce_locate_template
before_woocommerce_pay_form
```

That does not prove the local WordPress installation has no theme or plugin override, because the preview repository is not the full live local installation.

Before the feature flag is enabled locally, the actual active child theme and plugin set must be checked for:

```text
woocommerce/checkout/form-pay.php
woocommerce_locate_template filters
before_woocommerce_pay_form handlers
order-pay customizations
```

Any conflict must be resolved before Workspace activation, not by increasing filter priority blindly.

## 13. Bounded Step-1 authorization

Only this plugin development group is authorized now:

```text
Plugin revision: 0.2.6
Purpose: module skeleton + disabled Feature Flag + compatibility baseline
```

Allowed Step-1 work:

```text
- update plugin version from 0.2.5 to 0.2.6
- add the planned includes/ class-file skeletons with safe loading
- add project2_workspace_enabled to the existing Gateway settings
- default project2_workspace_enabled = no
- add sf_crypto_workspace_token_epoch option with an initial value
- increment epoch only when the Feature Flag value actually changes
- add constants/helpers required for later modules without activating routes or redirects
- add a short internal architecture comment identifying Token scheme B as the locked future mechanism
- preserve all current V0.2.5 payment, Sandbox, TRON verification, template and admin-post behavior
```

Forbidden in Step 1:

```text
- no process_payment() redirect change
- no order-pay template replacement
- no REST routes
- no Workspace Token generation
- no Invoice service refactor
- no transaction service refactor
- no CSS/JS Workspace
- no QR/countdown/expiry/monitoring
- no Project 2 Checkout source changes
```

Required Step-1 evidence:

```text
- exact file list and diff summary
- PHP syntax check for every PHP file
- plugin activation without fatal error
- Gateway still appears
- old Checkout creates on-hold Crypto order
- old /crypto-pay/ flow still opens
- old Invoice creation still works
- existing Sandbox success still reaches processing and Thank You
- Feature Flag default is off
- changing the Flag only updates the setting/epoch; it does not activate a new route yet
- rollback is replacement with the V0.2.5 package
```

## 14. Current stop point

```text
S4A plugin-agnostic reference: accepted and closed
S4B capability alignment: complete
S4B corrected integration contract: complete
First-phase implementation plan: reviewed and approved with mandatory corrections
Plugin Step 1 (0.2.6 skeleton/flag): authorized
Later plugin steps: not authorized
S4A gateway-specific static adaptation: not started
S5 static Invoice / Waiting shell: not started
Live Checkout modification: not started
Checkout: Not done
```
