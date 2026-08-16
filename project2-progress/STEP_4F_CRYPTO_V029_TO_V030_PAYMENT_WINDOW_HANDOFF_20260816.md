# Step 4F · Crypto V0.2.9 → V0.3.0 Payment-Window Handoff

Date: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Why this file exists

The separate payment-development window is the long-term owner of **all payment-method integration and payment-plugin evolution**, not only the original Crypto plugin build.

Project 2 BIG BATCH B had to complete part of that window's normal responsibility in order to integrate Crypto into the accepted Step-03 Checkout system. This handoff prevents the payment-development workflow from resuming from stale V0.2.9 assumptions.

## Incoming accepted baseline

```text
Spatial Flow Crypto Pay Trial V0.2.9
BIG BATCH A — Crypto Workspace Backend Complete
ZIP SHA256:
d85028a0bfc92cd15aec5ace8892119f3cd9ff35083e65c3c70990de56cdf56a
```

V0.2.9 is the accepted backend/security contract. It already owns:

```text
WooCommerce order-pay Workspace boundary
short-lived opaque Workspace Token
Order/actor/Gateway/feature-epoch authorization
same-origin write protection
REST Workspace read
Create/Reuse Invoice
fixed server-authoritative USDT/TRON invoice data
order-scoped advisory lock
transaction-hash verification service
verification_failed / retryable / manual_review states
rate limiting
duplicate transaction protection
payment_complete() at-most-once boundary
success/note idempotency
Payment Status without chain polling
manager-only Sandbox backend
refresh/reopen/multi-tab recovery contract
legacy /crypto-pay/ compatibility
Feature Flag immediate rollback
```

The V0.2.9 backend contract remains the authority under V0.3.0.

## V0.3.0 candidate identity

```text
Plugin: Spatial Flow Crypto Pay Trial
Version: 0.3.0
Gateway ID: spatial_flow_crypto
ZIP: spatial-flow-crypto-pay-trial-v0.3.0.zip
ZIP size: 61,253 bytes
ZIP SHA256:
d7227f52ddd4f1949b1860348b56a956f47723f3d64d5c052f34a2c1ab58fdb9
```

V0.3.0 was created by the Project-2 integration window solely because BIG BATCH B required the customer-facing Step-03 Crypto Workspace to sit on top of the accepted V0.2.9 backend.

## What V0.3.0 changes

### 1. Main plugin bootstrap

`spatial-flow-crypto-pay.php`

Changes:

```text
Version header / SF_CRYPTO_PAY_VERSION -> 0.3.0
BIG BATCH B scope comment
conditional enqueue of Project-2 Workspace CSS/JS
```

The new assets load only when all of the following are true:

```text
Project 2 Crypto Workspace flag = ON
WooCommerce endpoint = order-pay
order exists
order belongs to spatial_flow_crypto
```

They do not load on normal Checkout, the legacy `/crypto-pay/` page, or another gateway's order-pay page.

### 2. Order-pay Workspace template

`templates/crypto-order-pay-workspace.php`

The V0.2.9 intentionally minimal backend-ready shell is replaced by the real customer-facing Project-2 Step-03 Crypto Workspace presentation.

The template now renders real WooCommerce order context:

```text
order number/status
line items
subtotal
shipping
tax when present
WooCommerce fees, including Product Packaging fee truth
order total
```

The browser still does not author payment truth.

### 3. New Project-2 Workspace assets

Added:

```text
assets/project2-crypto-workspace.css
assets/project2-crypto-workspace.js
```

Current V0.3.0 file SHA256 values:

```text
project2-crypto-workspace.css
269a9f60dbf285afef9cb8d6f39df11d4676854692e5010ca4a61b4ea538a8fe

project2-crypto-workspace.js
95272796a655a017a03bae8244b3caf657407171d6f63224f2bb3c0b5a9b9ca7

crypto-order-pay-workspace.php
677d1bcf059853cf08d18dd2639f71b9a798cc4ae8bc0244741961d6f1ee37cd

spatial-flow-crypto-pay.php
51bdd7de3efeea7934aa7c21665652933d2990a658bc2069cc00b490a494e19a
```

## V0.3.0 customer-facing state flow

The Workspace JS consumes the V0.2.9 bootstrap/REST contract instead of inventing browser state.

```text
order-pay bootstrap
→ GET Workspace
→ if no active Invoice: POST Create/Reuse Invoice
→ Waiting for payment
```

Waiting state exposes only server-returned payment truth:

```text
USDT
TRON / TRC20
server amount
server receiver address
copy amount/address
manual transaction-hash workflow
```

Hash flow:

```text
customer expands hash form
→ client format guard only
→ POST real transaction hash to V0.2.9 REST
→ render server response
```

Supported presentation mappings include:

```text
waiting_payment
verification_failed
retryable / temporary service failure
manual_review
cancelled / terminal order
paid_confirmed
```

Recovery/status interaction points:

```text
initial page/bootstrap
Invoice creation result
Hash submission result
explicit Refresh status
window focus recovery
manager Sandbox result
```

There is **no timed polling loop**.

After server-confirmed payment, V0.3.0 schedules a reload of the canonical WooCommerce order-pay/result route; the browser does not manufacture Step 04 success.

## Backend/security contract intentionally unchanged

V0.3.0 is a presentation/integration release on top of V0.2.9.

The Project-2 window did not authorize a redesign of:

```text
Workspace Token model
REST authorization
same-origin protection
Order Guard
Invoice service semantics
transaction verification semantics
TronGrid verifier core
settlement/payment_complete boundary
rate limiting
duplicate transaction protection
manager Sandbox authorization
legacy admin-post compatibility
Feature Flag rollback
```

Future payment-window work must preserve these accepted V0.2.9 invariants unless a later task explicitly reopens them.

## Legacy rollback remains mandatory

Feature Flag OFF remains the immediate runtime rollback:

```text
Crypto Checkout
→ exactly one WooCommerce order
→ on-hold
→ legacy /crypto-pay/
```

An existing unpaid Crypto order-pay URL also bridges back to the same legacy order while OFF.

Do not delete order/Invoice/Transaction/Log data and do not reset feature epoch as a routine rollback.

## Still not implemented by V0.3.0

```text
QR code
operational countdown
Invoice expiry enforcement
replacement Invoice lifecycle
automatic chain/address monitoring
Cron / Worker / Webhook
WalletConnect / wallet connection
multi-asset customer selection
multi-network customer selection
real-time fiat → USDT quote/rate lock
Step 04 order-result matrix
```

The inherited prototype limitation remains: the current backend uses the WooCommerce numeric order total as the USDT numeric amount. Production currency/quote policy is still unresolved for arbitrary non-USD shop currency.

## Current acceptance boundary

```text
V0.2.9 backend/security: ACCEPTED / CLOSED
V0.3.0 source package: BUILT / STATICALLY VALIDATED
V0.3.0 BIG BATCH B customer runtime: NOT YET FINAL ACCEPTED
```

Until Project 2 finishes the BIG BATCH B runtime cycle, keep:

```text
Project 2 Crypto Workspace = OFF
```

The payment-development window must **not** restart from V0.2.9 or overwrite V0.3.0 with a branch that does not contain this Workspace integration.

After V0.3.0 runtime acceptance, V0.3.0 becomes the payment window's next plugin baseline.

## Ownership after this handoff

The separate payment-development window resumes responsibility for:

```text
all future payment gateways
all future Crypto plugin versions
future asset/network expansion
wallet/payment-provider integrations
quote/rate policy implementation
payment security/regression work
future production payment rollout decisions
```

Project 2 retains responsibility only for the visual/system integration of those payment capabilities into the accepted storefront Checkout contract.

If Project 2 must again modify payment-plugin code to unblock storefront integration, it must create another explicit cross-window handoff before proceeding further.