# Step 4F · Crypto Plugin Step 2A · V0.2.7 Authorization and Implementation Prompt

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Status

```text
Current installed plugin: Spatial Flow Crypto Pay Trial V0.2.6.1
V0.2.6.1 compatibility regression: FINAL PASS
sf_crypto_workspace_token_epoch: 1
Legacy /crypto-pay/ path: PASS
Plugin Step 1 skeleton: CLOSED
Plugin Step 2: AUTHORIZED
Current bounded group: Step 2A only
Project 2 live Step-03 modification: NOT AUTHORIZED in this group
```

This record authorizes real plugin code development for Step 2A only.

## 2. Why Step 2 is split

The real Step-03 Crypto Workspace requires several security-sensitive systems:

```text
order-pay eligibility
Workspace authorization
server-rendered Workspace bootstrap
REST operations
invoice create/reuse
transaction verification
settlement concurrency
Sandbox
recovery
Project-2 visual integration
```

They must not land in one unreviewable batch.

Plugin Step 2 is therefore decomposed as:

```text
Step 2A — Order eligibility + Workspace Token + feature-epoch invalidation
Step 2B — order-pay Workspace entry/bootstrap + feature-flag redirect
Step 3  — shared Invoice service + Create/Reuse REST
Step 4  — shared Payment service + Submit Hash + verification states + rate limiting
Step 5  — status/Sandbox/recovery REST + settlement locking completion
Step 6  — Project-2 S5/S6 visual Workspace integration and responsive/runtime acceptance
```

Only Step 2A is authorized now.

## 3. Step 2A output version

Input authoritative package:

```text
Spatial Flow Crypto Pay Trial V0.2.6.1
ZIP SHA256:
bddceb858a5314cf679b5c00929d22ff8972cb22e32c7d87a4395c3acb8aa8b2
```

Authorized output version:

```text
0.2.7
```

Plugin name, directory, Gateway class and Gateway ID remain unchanged:

```text
Spatial Flow Crypto Pay Trial
spatial-flow-crypto-pay/
SF_Crypto_Pay_Gateway
spatial_flow_crypto
```

## 4. Exact allowed source scope

Allowed to modify:

```text
spatial-flow-crypto-pay.php
includes/class-sf-crypto-pay-order-guard.php
includes/class-sf-crypto-pay-workspace-token.php
includes/class-sf-crypto-pay-workspace.php
```

Allowed only if a very small shared constant/helper is objectively required:

```text
includes/class-sf-crypto-pay-response.php
```

Must remain functionally untouched in Step 2A:

```text
includes/class-sf-crypto-pay-invoice-service.php
includes/class-sf-crypto-pay-payment-service.php
includes/class-sf-crypto-pay-rest-controller.php
templates/crypto-pay-page.php
assets/crypto-pay.js
assets/crypto-pay.css
```

The legacy global functions below must not be refactored yet:

```text
sf_crypto_pay_generate_invoice()
sf_crypto_pay_submit_tx()
sf_crypto_pay_sandbox_success()
sf_crypto_pay_verify_tron_usdt_payment()
sf_crypto_pay_verify_tron_usdt_payment_from_txinfo()
```

## 5. Step 2A objective

Implement the server-side security foundation needed before any Workspace URL or REST route can be activated:

```text
A. exact Crypto-order eligibility rules
B. a scoped WooCommerce payable-status filter for on-hold recovery
C. a real short-lived Workspace Token implementation
D. actor/order/gateway/status/epoch binding
E. feature-flag epoch invalidation when the flag value actually changes
F. safe in-request order-pay context primitives for the later Step 2B bootstrap
```

Do NOT yet make customers enter a new Workspace.

## 6. Order Guard requirements

Implement `SF_Crypto_Pay_Order_Guard` as the single future Workspace eligibility owner.

Required checks must include:

```text
order exists and is WC_Order
payment_method === spatial_flow_crypto
order is not paid
order status is in the first-phase allowed set
order is not cancelled / refunded / completed / trash
Project-2 Workspace Feature Flag is enabled for Workspace-only operations
```

First-phase unpaid statuses authorized for Workspace operations:

```text
on-hold
pending only for documented recovery/transition compatibility
```

Do not authorize `failed` in Step 2A.

Do not rely on generic `needs_payment()` as the sole eligibility rule, because WooCommerce normally does not treat on-hold as payable.

### Scoped WooCommerce payable-status filter

Implement the previously approved scoped filter for WooCommerce order-pay validation.

Requirements:

```text
- only affects orders whose payment method is spatial_flow_crypto
- only applies while project2_workspace_enabled = yes
- adds on-hold to the valid statuses for payment/order-pay
- preserves WooCommerce's existing statuses rather than replacing them wholesale
- does not affect any other Gateway
- does not make paid/cancelled/refunded/completed orders payable
```

Use the exact WooCommerce filter signature established by the approved S4B plan. Document priority and accepted argument count in code comments.

## 7. Workspace Token scheme B — mandatory implementation

Implement the locked first-phase scheme B in `SF_Crypto_Pay_Workspace_Token`.

The browser-facing Token must be:

```text
short-lived
cryptographically random
opaque with respect to order secrets
HMAC-SHA256 authenticated
sent later through X-SF-Workspace-Token
never contain the raw WooCommerce Order Key
```

### Recommended token construction

Use a truly opaque server-record-backed token rather than exposing a readable JSON payload.

A valid design is:

```text
random token identifier generated by random_bytes()
+
HMAC-SHA256 authentication tag using WordPress server secret and plugin-specific context
```

Store the authorization payload server-side in a short-lived transient keyed by a one-way digest of the token identifier.

Do not store the raw browser Token in WordPress options, transients, logs or order notes.

### Required server-side token record

The server-side record must bind at least:

```text
version
jti
blog_id
order_id
gateway_id = spatial_flow_crypto
non-reversible digest of the WooCommerce Order Key
order_customer_id
actor_user_id
auth_context = guest / customer / manager
issued_at
expires_at
feature_epoch
```

The raw Order Key may be used only while creating/validating the server-side binding and must never be stored in the token record.

### HMAC key

Use a WordPress server secret such as `wp_salt('auth')` with an explicit plugin-specific HMAC context string.

Do not invent a database-stored secret and do not hardcode a secret.

### Token lifetime

```text
30 minutes
```

### Token validation must reject

```text
malformed token
bad HMAC
missing/expired server record
blog mismatch
order mismatch
gateway mismatch
Order Key digest mismatch when the server has an approved Order Key context
actor mismatch
feature epoch mismatch
Feature Flag disabled
paid order
cancelled order
refunded order
completed order
trash/deleted order
non-Crypto order
```

Validation must use constant-time comparison for HMAC/digest equality where appropriate.

## 8. Actor binding

Token issuance must support the future contexts already locked by the integration contract:

```text
guest
customer
manager
```

Rules:

### Guest

```text
actor_user_id = 0
order_customer_id may be 0
must only be issued from a WooCommerce-validated order-pay context in Step 2B
```

Step 2A may implement the issuance API, but must not create a separate public endpoint to issue Guest tokens.

### Customer

```text
logged-in user must correspond to the order customer unless a manager privilege path is intentionally used
```

### Manager

```text
must require manage_woocommerce
```

A manager token must not silently weaken ordinary customer/guest permission rules.

## 9. Feature epoch behavior becomes active in Step 2A

The option already exists:

```text
sf_crypto_workspace_token_epoch
```

Current expected value before Step 2A:

```text
1
```

Now that Workspace Tokens are real, implement safe automatic epoch invalidation.

When the saved value of:

```text
project2_workspace_enabled
```

actually changes:

```text
no → yes
or
yes → no
```

increment the epoch exactly once.

Requirements:

```text
- saving unrelated Gateway settings must not increment it
- saving the same flag value again must not increment it
- page refresh must not increment it
- plugin activation/upgrade must not reset it to 1 if it already exists
- integer increment must be monotonic
- disabling the Feature Flag invalidates all previously issued Tokens through epoch mismatch
```

Prefer a narrowly scoped `SF_Crypto_Pay_Gateway::process_admin_options()` override or equivalently bounded mechanism. Do not rewrite WooCommerce settings persistence broadly.

## 10. Workspace class scope in Step 2A

`SF_Crypto_Pay_Workspace` may become active only as an internal hook/context coordinator needed for the Order Guard and future Token issuance.

Allowed:

```text
register the scoped payable-status filter
provide safe helper(s) for detecting the current approved order-pay request context
prepare internal interfaces that Step 2B will use
```

Not allowed yet:

```text
no process_payment() redirect change
no checkout/form-pay.php replacement
no woocommerce_locate_template replacement
no customer-visible Workspace markup
no Workspace JS/CSS
no REST route
no browser Token bootstrap
```

If `before_woocommerce_pay_form` is registered in Step 2A, it may only establish an in-request verified context for later use and must not print a token or customer-visible content. If it is not objectively testable/useful yet, defer the hook itself to Step 2B and keep only the safe helper contract.

## 11. Explicitly forbidden in Step 2A

Do not implement:

```text
process_payment() order-pay redirect
form-pay template replacement
REST API routes
Create/Reuse Invoice service
Submit Transaction Hash REST
Payment Status REST
Sandbox REST
MySQL advisory lock
new transaction rate limiter
Project-2 S5/S6 markup
new frontend JS or CSS
QR
countdown
expired/replacement Invoice
automatic monitoring
Cron/Worker/Webhook
multi-asset/multi-network support
Step 04 changes
Project-2 theme changes
```

Do not change the current legacy rejection semantics in `sf_crypto_pay_submit_tx()` yet; that correction belongs to the shared Payment Service step where both legacy and REST paths can be changed atomically.

## 12. Legacy behavior that must remain identical

With Feature Flag OFF, all current V0.2.6.1 behavior must remain:

```text
Checkout Gateway renders
one Crypto order created
order becomes on-hold
process_payment() redirects to legacy /crypto-pay/
legacy Generate Invoice works
legacy transaction-hash submit works
legacy TronGrid verification works
legacy negative cases work as before
Sandbox works
payment_complete() works
processing result works
order notes work
```

Even with Feature Flag ON during Step 2A, `process_payment()` must STILL use legacy `/crypto-pay/`, because Step 2B is not implemented yet.

## 13. Static/source verification required from the plugin-development window

The delivery report must prove:

```text
- version is exactly 0.2.7
- only authorized files changed
- all PHP files pass php -l
- no register_rest_route exists
- no process_payment redirect change exists
- no checkout/form-pay template replacement exists
- no Workspace JS/CSS added
- no raw Order Key occurs in Token payload/storage/logging code
- Token lifetime is 30 minutes
- HMAC-SHA256 is used
- random_bytes() or equivalent CSPRNG is used
- server-side Token record stores only an Order Key digest
- Feature Flag change increments epoch exactly once
- same-value save does not increment epoch
- Order Guard filter is gateway-scoped
- no other WooCommerce Gateway statuses are modified
- legacy hooks/shortcode/admin-post actions remain present
```

## 14. Automated/security tests required from the plugin-development window

Where the environment permits, add or run bounded tests/mocks for at least:

```text
Token issue → validate success
Token tamper → reject
Token expiry → reject
wrong order → reject
wrong gateway → reject
wrong epoch → reject
Feature Flag disabled → reject
paid/cancelled/refunded order → reject
on-hold Crypto order → eligible
on-hold non-Crypto order → unchanged/not eligible
same flag save → no epoch increment
flag transition → one epoch increment
```

If the plugin-development environment cannot execute WordPress/WooCommerce integration tests, it must state that explicitly rather than claiming PASS.

## 15. Required output package

Generate:

```text
spatial-flow-crypto-pay-trial-v0.2.7.zip
```

ZIP root must remain:

```text
spatial-flow-crypto-pay/
```

Also output:

# Spatial Flow Crypto Pay Trial V0.2.7 · Plugin Step 2A Delivery Report

with exactly these sections:

```text
1. Input Baseline and SHA256
2. Output Version
3. Exact Changed Files
4. Order Guard Implementation
5. WooCommerce Payable-Status Scope
6. Workspace Token Construction
7. Server-Side Token Record
8. Actor Binding
9. Feature Epoch Invalidation
10. Explicit Non-Changes
11. Static/Syntax Checks
12. Automated/Security Checks
13. Local Manual Regression Required
14. Rollback
15. ZIP SHA256
16. Stop Point
```

## 16. Local manual acceptance required after delivery

Project 2 will independently inspect the returned ZIP before installation.

Only after source acceptance will the user install it locally and check:

```text
- no Fatal
- version 0.2.7
- Gateway settings preserved
- existing Feature Flag preserved
- legacy Crypto order still creates once
- on-hold still works
- /crypto-pay/ still opens
- Invoice still works
- Sandbox still works
- Feature Flag OFF legacy path works
- Feature Flag ON still legacy path in Step 2A
- epoch increases once when flag changes
- epoch does not increase when saving unchanged settings
```

No real Workspace page is expected in Step 2A.

## 17. Stop point

After generating V0.2.7 ZIP and the Step 2A report, STOP.

Do not start Step 2B.
Do not modify Project 2 Checkout.
Do not generate order-pay Workspace UI.
Do not add REST/Invoice/Hash logic.

Return the ZIP and report to the Project-2 window for source review and local regression.
