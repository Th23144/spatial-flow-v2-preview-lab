# Spatial Flow Payment Window · Standalone Continuation Handoff

Date: 2026-08-16  
Subsystem owner: Dedicated payment-development window  
Prepared by: Project 2 storefront-integration window

> This document is intentionally self-contained. The payment-development window does **not** need to broadly read or monitor the Project-2 repository in order to resume. Treat this file as the normal continuation input. Repository references at the end are optional audit evidence only.

---

## 1. Executive continuation state

```text
Incoming accepted Crypto backend/security baseline: V0.2.9 — ACCEPTED / CLOSED
Current plugin candidate: V0.3.0 — BUILT + STATICALLY VALIDATED
V0.3.0 Project-2 customer runtime acceptance: NOT YET CLOSED
Installed/candidate plugin direction: KEEP V0.3.0
Project 2 Crypto Workspace feature flag: KEEP OFF for now
Legacy /crypto-pay/ rollback path: MUST REMAIN INTACT
Main Checkout Step 03 native WooCommerce architecture: CLOSED / DO NOT REOPEN
Theme-side Selected Payment panel experiment: REJECTED / ROLLBACK REQUIRED IN PROJECT 2
Payment-window long-term ownership: RETAINED BY PAYMENT WINDOW
```

The payment window must **not** restart from V0.2.9 and overwrite the V0.3.0 Workspace integration. It must also not interpret the rejected Project-2 theme panel as a reason to roll the Crypto plugin back from V0.3.0.

Until Project 2 reports BIG BATCH B runtime acceptance, preserve V0.3.0 as the candidate baseline and avoid independently changing the same V0.3.0 Workspace files in a way that would invalidate that acceptance cycle.

---

## 2. Incoming accepted baseline — V0.2.9

```text
Plugin: Spatial Flow Crypto Pay Trial
Version: 0.2.9
Accepted scope: BIG BATCH A — Crypto Workspace Backend Complete
ZIP SHA256:
d85028a0bfc92cd15aec5ace8892119f3cd9ff35083e65c3c70990de56cdf56a
```

V0.2.9 is the accepted backend/security authority. It already owns:

```text
WooCommerce order-pay Workspace boundary
short-lived opaque Workspace Token
Order / actor / Gateway / feature-epoch authorization
same-origin write protection
REST Workspace read
Create / Reuse Invoice
server-authoritative USDT / TRON invoice data
order-scoped advisory lock
transaction-hash verification service
verification_failed / retryable / manual_review states
rate limiting
duplicate transaction protection
payment_complete() at-most-once settlement boundary
success/note idempotency
Payment Status without timed chain polling
manager-only Sandbox backend
refresh / reopen / multi-tab recovery contract
legacy /crypto-pay/ compatibility
Feature Flag immediate rollback
```

These accepted V0.2.9 contracts were **not redesigned** by V0.3.0.

---

## 3. Current candidate — V0.3.0

```text
Plugin: Spatial Flow Crypto Pay Trial
Version: 0.3.0
Gateway ID: spatial_flow_crypto
ZIP: spatial-flow-crypto-pay-trial-v0.3.0.zip
ZIP size: 61,253 bytes
ZIP SHA256:
d7227f52ddd4f1949b1860348b56a956f47723f3d64d5c052f34a2c1ab58fdb9
```

V0.3.0 was created during Project-2 BIG BATCH B because the storefront integration needed a real customer-facing Crypto order-pay Workspace on top of the accepted V0.2.9 backend.

### V0.3.0 changed files / assets

```text
spatial-flow-crypto-pay.php
SHA256 51bdd7de3efeea7934aa7c21665652933d2990a658bc2069cc00b490a494e19a

templates/crypto-order-pay-workspace.php
SHA256 677d1bcf059853cf08d18dd2639f71b9a798cc4ae8bc0244741961d6f1ee37cd

assets/project2-crypto-workspace.css
SHA256 269a9f60dbf285afef9cb8d6f39df11d4676854692e5010ca4a61b4ea538a8fe

assets/project2-crypto-workspace.js
SHA256 95272796a655a017a03bae8244b3caf657407171d6f63224f2bb3c0b5a9b9ca7
```

### What V0.3.0 adds

`spatial-flow-crypto-pay.php`:

```text
version -> 0.3.0
conditional Project-2 Workspace CSS/JS enqueue
```

The Project-2 Workspace assets load only when all of these are true:

```text
Project 2 Crypto Workspace flag = ON
WooCommerce endpoint = order-pay
order exists
order belongs to spatial_flow_crypto
```

They are not intended to load on normal Checkout, the legacy `/crypto-pay/` page, or another gateway's order-pay page.

`templates/crypto-order-pay-workspace.php` now presents real WooCommerce order context including:

```text
order number/status
line items
subtotal
shipping
tax when present
WooCommerce fees — including Product Packaging fee truth
order total
```

The browser does not author payment truth.

---

## 4. V0.3.0 customer-facing state flow

The Workspace UI consumes the accepted V0.2.9 bootstrap/REST contract:

```text
order-pay bootstrap
→ GET Workspace
→ if no active Invoice: POST Create/Reuse Invoice
→ Waiting for payment
```

Waiting state exposes server-returned truth only:

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
customer opens hash form
→ client format guard only
→ POST real transaction hash to V0.2.9 REST
→ render server response
```

Presentation mappings include:

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

After server-confirmed payment, the UI reloads/navigates through the canonical WooCommerce result path. The browser does not manufacture a Project-2 Step 04 success state.

---

## 5. Backend/security behavior deliberately unchanged

Do not reinterpret V0.3.0 as permission to redesign:

```text
Workspace Token model
REST authorization
same-origin protection
Order Guard
Invoice service semantics
transaction verification semantics
TronGrid verifier core
settlement / payment_complete boundary
rate limiting
duplicate transaction protection
manager Sandbox authorization
legacy admin-post compatibility
Feature Flag rollback
```

These remain V0.2.9 accepted invariants until the payment-development window explicitly opens a later payment-plugin task.

---

## 6. Critical Project-2 correction after V0.3.0 build

Project 2 briefly added a second theme-side `Selected Payment` presentation layer to the main Checkout Step 03.

That theme delta was later source-audited and **rejected**.

Reason:

```text
1. Real WooCommerce `.payment_box` already performs the live selected-gateway-content role.
2. The theme delta hardcoded knowledge of `spatial_flow_crypto` and Crypto-specific copy.
3. Project-2 theme architecture is required to remain gateway-agnostic.
4. The new panel was appended after `woocommerce_checkout_payment()`, while native Terms and Place Order already live inside the Woo `#payment` output.
5. Forcing the panel into the intended position would reopen previously removed Place Order relocation risk.
```

Therefore Project 2 is rolling back only that four-file theme experiment to its previously accepted Step-03 baseline.

**This does not roll back V0.3.0.**

The correct architecture remains:

```text
Main Project-2 Step 03
→ WooCommerce dynamically owns available gateways
→ selected gateway owns native payment_box / fields / nonce / iframe content
→ Terms/privacy remain native
→ exactly one native Place Order
→ Woo creates order
→ Crypto orders enter plugin-owned V0.3.0 order-pay Workspace
→ server-confirmed result enters Woo / Project-2 Step 04 result handling
```

The payment plugin should not depend on a theme-side Crypto descriptor card.

---

## 7. Current feature-flag and rollback contract

Until Project 2 begins/finishes BIG BATCH B runtime acceptance:

```text
Project 2 Crypto Workspace = OFF
```

Feature Flag OFF remains the immediate runtime rollback:

```text
Crypto Checkout
→ exactly one WooCommerce order
→ on-hold
→ legacy /crypto-pay/
```

An existing unpaid Crypto order-pay URL must also be able to bridge back to the same legacy order while the feature is OFF.

Do not delete order / Invoice / Transaction / Log data and do not reset feature epoch as a routine rollback.

---

## 8. Validation state

### Already accepted / passed

```text
V0.2.9 backend/security contract
V0.2.9 full local regression / BIG BATCH A closure
V0.3.0 package build
V0.3.0 static/source validation
V0.3.0 frontend Workspace wired to accepted backend contract
Theme-side duplicate Selected Payment layer identified and rejected before runtime acceptance
```

### Still pending in Project 2

```text
restore four Project-2 theme files to the accepted pre-experiment identity
verify their exact SHA/syntax
turn Project 2 Crypto Workspace ON for the controlled BIG BATCH B runtime cycle
exercise the real V0.3.0 customer Workspace states and recovery paths
validate Feature Flag OFF rollback after ON-path testing
final BIG BATCH B acceptance / rejection record
```

The payment window should treat V0.3.0 as **candidate/frozen for this acceptance cycle**, not as a fully production-accepted release yet.

---

## 9. Not implemented by V0.3.0

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
full Project-2 Step 04 order-result matrix
```

The inherited prototype limitation also remains: the backend currently uses the WooCommerce numeric order total as the USDT numeric amount. Production currency/quote policy for arbitrary non-USD shop currency remains unresolved.

Do not present these deferred features as already supported.

---

## 10. Payment-window ownership after Project-2 runtime closure

The dedicated payment-development window remains long-term owner of:

```text
all future payment methods
all future Crypto plugin versions
future asset/network expansion
wallet/payment-provider integrations
quote/rate policy implementation
payment security/regression
production payment rollout decisions
```

Project 2 owns only storefront integration/composition and compatibility with its accepted Checkout system.

### Exact resume/freeze point

For now:

```text
Preserve V0.3.0 candidate exactly.
Do not revert it to V0.2.9.
Do not independently overwrite the four V0.3.0 Workspace files while Project 2 runtime acceptance is pending.
Wait for the user's next payment-window handoff/delta containing BIG BATCH B runtime acceptance state before treating V0.3.0 as the new accepted plugin baseline.
```

After Project 2 accepts V0.3.0 runtime, the payment-development window should resume future payment work **from V0.3.0**, not V0.2.9.

---

## 11. Optional audit references only

These are provided only if a later forensic check is needed. Routine continuation does not require reading them.

```text
Original V0.2.9 → V0.3.0 handoff record:
project2-progress/STEP_4F_CRYPTO_V029_TO_V030_PAYMENT_WINDOW_HANDOFF_20260816.md

Later theme audit/correction:
project2-progress/STEP_4F_BIG_BATCH_B_THEME_POST_INSTALL_AUDIT_20260816.md

Cross-window policy:
PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
```

Relevant historical commits:

```text
a4793c25cd7e2174b27c3cfb645080dc6939ac85
936f793cfb88a4605106d50c934c5b7242a9574d
53527e20591d28f3005856c9285d70626b9a5292
```

Again: **the payment window does not need to read the Project-2 repository to continue from this handoff.**
