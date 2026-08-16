# Project 2 · Resume Index

Last updated: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Read these first

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_STEP_RECORDING_POLICY.md
3. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
4. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
5. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
6. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
7. PROJECT2_CSS_MAINTENANCE_POLICY.md
8. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
9. project2-progress/STEP_4F_FULL_REPOSITORY_DOCUMENT_INHERITANCE_COMPLETE_20260816.md
10. project2-progress/STEP_4F_SELECTED_PAYMENT_THEME_ROLLBACK_VALIDATION_20260816.md
11. project2-progress/STEP_4F_CRYPTO_V030_BIG_BATCH_B_FINAL_ACCEPTED_20260816.md
12. project2-progress/PAYMENT_WINDOW_STANDALONE_HANDOFF_V030_FINAL_ACCEPTED_20260816.md
13. project2-progress/STEP_4F_STEP04_ORDER_RESULT_FULL_AUDIT_AND_IMPLEMENTATION_GATE_20260816.md
```

Older `PROJECT2_CURRENT_STATE.md`, `PROJECT2_DOCS_INDEX.md`, historical `PROGRESS_LOG.md`, and earlier Step 4F records remain evidence/history. When they conflict with later dated explicit correction/acceptance records, use the precedence below.

## Historical conflict precedence

```text
1. later explicit correction / rejection / rollback
2. later formal source/runtime/user acceptance or closure
3. standing policy unless explicitly superseded
4. older candidate / plan / current-state snapshot as historical evidence only
```

## Mandatory execution rule

```text
meaningful Project-2 action
→ record start/state/result in GitHub
→ only then advance to the next meaningful action
```

Do not rely on conversation memory as the execution ledger.

## Runtime-test delivery preference

For one coherent acceptance batch, give the user the full safe checklist at once instead of unnecessarily splitting it into multiple feedback rounds.

Split only when a real safety/destructive dependency requires it. The GitHub recording rule still applies internally between meaningful actions.

## Binary page status

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Not done
```

`Checkout: Not done` remains the binary page label until the complete accepted Checkout/payment/result scope is formally closed. Bounded sub-contracts inside Checkout may already be closed and must not be reopened without evidence.

## Locked Checkout progression

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Step 04 is server/WooCommerce order-result truth. It is never a fifth input/Review step and browser state may not manufacture paid/pending/failed/cancelled/refunded truth.

## Current accepted Checkout sub-contracts

### Normal WooCommerce R1 / Batch 6

```text
Step 01 Address: accepted in bounded R1 scope
Step 02 Shipping: accepted in bounded R1 scope
Product Packaging: FINAL ACCEPTED / CLOSED
Step 03 native Woo payment structure/function: CLOSED in Batch-6 bounded scope
Order Summary / Coupon / Trust normal flow: accepted
normal non-Crypto order creation: accepted
Crypto legacy one-order/on-hold redirect regression: accepted
1366 / 390 / 360 normal flow regression: accepted
```

### Expanded Crypto Workspace / BIG BATCH B

```text
Spatial Flow Crypto Pay Trial V0.3.0: FINAL ACCEPTED
V0.2.9 backend/security contract: FINAL ACCEPTED / retained
V0.3.0 customer order-pay Workspace: FINAL ACCEPTED
Feature Flag rollback to legacy /crypto-pay/: PASS
normal non-Crypto gateway isolation/regression: PASS
Project 2 Crypto Workspace final local state: OFF
```

The accepted Step-03 payment system must not be reopened without a concrete regression or later explicit requirement.

## Product Packaging locked state

```text
FINAL ACCEPTED / CLOSED
```

Do not reopen absent a concrete regression or contract violation.

Locked rules include:

```text
original item-centric B direction accepted
B2 over-compressed mobile direction rejected
one unit belongs to exactly one package
reassignment transfers, never duplicates
only non-empty packages count
Standard = free
Gift fee = per non-empty Gift package
Woo totals/session/order metadata remain authoritative
```

## Step 03 architecture after rollback + BIG BATCH B acceptance

The rejected theme-side `Selected Payment` experiment has been completely rolled back and byte-exact validated.

Final accepted main Step 03 theme architecture is:

```text
real eligible WooCommerce gateway list
→ native selected gateway + payment_box
→ native gateway fields / iframe / nonce
→ native Terms/privacy
→ exactly one native Place Order
```

The Project-2 theme remains gateway-agnostic and is not a second payment gateway registry.

Crypto-specific customer UX begins only after WooCommerce creates the order:

```text
native Step 03 Place Order
→ one Woo order
→ official WooCommerce order-pay boundary
→ plugin-owned V0.3.0 Crypto Workspace
```

### Restored theme baseline

```text
functions.php
609,465 bytes
11,657 logical lines
SPATIAL_FLOW_CHILD_VERSION 2.7.13
SHA256 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631

woocommerce/checkout/form-checkout.php
37,981 bytes
674 logical lines
SHA256 c7af24d516ff9ca90c6cabddc546b709362a27dd91548201e58e4258f7d68f9e

assets/js/checkout-safe5.js
59,007 bytes
1,768 logical lines
SHA256 b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0

assets/css/checkout-safe5.css
148,983 bytes
4,855 logical lines
SHA256 c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a
```

Rollback validation record:

```text
project2-progress/STEP_4F_SELECTED_PAYMENT_THEME_ROLLBACK_VALIDATION_20260816.md
```

Result:

```text
bytes / lines / SHA: PASS for all four files
functions.php php -l: PASS
form-checkout.php php -l: PASS
checkout-safe5.js node --check: PASS
rejected Selected-Payment markers: 0
spatial_flow_crypto in four theme files: 0
```

## Crypto plugin state

### V0.2.9 backend/security baseline

```text
BIG BATCH A backend/security: FINAL ACCEPTED / CLOSED
ZIP SHA256:
d85028a0bfc92cd15aec5ace8892119f3cd9ff35083e65c3c70990de56cdf56a
```

Accepted backend includes Workspace Token, REST, Create/Reuse Invoice, server-authoritative fixed USDT/TRON invoice truth, advisory locking, transaction-hash verification, rate limiting, duplicate protection, manual-review/retryable states, `payment_complete()` at-most-once settlement boundary, Sandbox authorization, recovery, and Feature Flag rollback.

### V0.3.0 / BIG BATCH B

```text
Plugin: Spatial Flow Crypto Pay Trial V0.3.0
ZIP SHA256: d7227f52ddd4f1949b1860348b56a956f47723f3d64d5c052f34a2c1ab58fdb9
BIG BATCH B source/static: PASS
B1 Waiting/recovery/responsive: PASS
B2 malformed Hash + Sandbox settlement: PASS
B3 Feature Flag rollback + normal gateway regression: PASS
FINAL STATUS: ACCEPTED / CLOSED
Project 2 Crypto Workspace: OFF after local acceptance
```

Runtime evidence includes:

```text
#3618 — V0.3.0 Waiting + Sandbox -> Processing -> canonical result
#3619 — unpaid Workspace order -> Feature Flag OFF -> same legacy Crypto order/path
#3620 — non-Crypto Test Payment gateway -> provider-owned settlement -> canonical Thank You
```

Do not roll back to V0.2.9 merely because the final local feature-flag state is OFF. V0.3.0 is the accepted plugin baseline; OFF is runtime exposure control.

Production quote/rate-lock for arbitrary non-USD shop currency remains unresolved.

## Step 04 production Order Result audit

```text
Audit: COMPLETE
Implementation contract: LOCKED
Historical S7 static confirmed/pending reference: retained as semantic/visual evidence only
Live owner: woocommerce/checkout/thankyou.php
Editable-copy owner: functions.php sf_order_received_* Customizer controls
Visual owner: assets/css/spatial-flow.css .sf-order-received-* layer
```

Confirmed production gap:

```text
historical live template distinguishes failed vs all non-failed
pending/on-hold therefore inherit success/fulfilment-oriented copy
cancelled/refunded are also not given dedicated truthful semantics
```

Locked production matrix:

```text
processing/completed -> confirmed/fulfilment family
pending/on-hold -> pending/unconfirmed family
failed -> retry/support family
cancelled -> cancelled family
refunded -> refunded family
custom/unknown -> neutral server-status fallback
```

Do not redesign the mature live Result page from scratch. Preserve its current Project-2 information architecture and real Woo order data; make the presentation status-aware and server-authoritative.

Implementation gate record:

```text
project2-progress/STEP_4F_STEP04_ORDER_RESULT_FULL_AUDIT_AND_IMPLEMENTATION_GATE_20260816.md
```

## Cross-window payment ownership

Dedicated payment-development window remains long-term owner of payment-plugin evolution, future methods, provider/wallet integration, quote/rate policy, payment security/regression, and production rollout.

Project 2 owns storefront/Checkout integration and compatibility with the accepted 01/02/03/04 composition.

Normal handoff model:

```text
Project 2 records subsystem overlap internally
→ Project 2 creates one self-contained standalone handoff
→ user downloads/forwards that file
→ payment window resumes from that handoff
```

The payment window is not expected to broadly read or continuously monitor this repository.

Current authoritative standalone handoff:

```text
project2-progress/PAYMENT_WINDOW_STANDALONE_HANDOFF_V030_FINAL_ACCEPTED_20260816.md
```

## Current exact stop point

```text
Full documentation inheritance: COMPLETE
Selected-Payment theme experiment: REJECTED / CLOSED
Four-file manual rollback: BYTE-EXACT VALIDATED
V0.3.0 BIG BATCH B: FINAL ACCEPTED / CLOSED
Project 2 Crypto Workspace final local state: OFF
Checkout Step 03 payment system: accepted in current scope
Step 04 production audit: COMPLETE
Step 04 implementation contract: LOCKED
Current functions.php: AVAILABLE / VERIFIED at 2.7.13 baseline
Current thankyou.php: fresh live copy required
Current spatial-flow.css: fresh live copy required
Checkout binary page status: Not done
```

## Exact next action

```text
User supplies fresh current copies of:
- woocommerce/checkout/thankyou.php
- assets/css/spatial-flow.css

Project 2 fingerprints both files and confirms they match the actual live theme.
Then build/review one consolidated three-file Step-04 implementation using:
- thankyou.php
- functions.php
- spatial-flow.css
```

The candidate theme cache version should move from 2.7.13 to 2.7.15 rather than reusing rejected/previously-exposed 2.7.14.

After source acceptance, provide one consolidated safe runtime status-matrix checklist wherever dependencies permit.

## Hard boundaries

```text
- preserve WooCommerce order/payment authority
- preserve backend editability
- no browser-authoritative payment success
- no Review/fifth Checkout input step
- no duplicate order or invoice
- no theme-side hardcoded Crypto gateway registry
- exactly one native Place Order in main Checkout Step 03
- no blind whole-file overwrite
- no replacement-package deployment by default
- mandatory before/after file-size/SHA audit for manual source edits
- no append-only CSS patch pile
- Product Packaging remains closed unless evidence reopens it
- V0.2.9 backend/security invariants remain accepted
- V0.3.0 is the accepted payment-plugin baseline
- final local Crypto Workspace flag state OFF does not mean plugin rejection
- Step 03 must not be reopened for Step 04 visual work
- Step 04 state truth must come from WooCommerce/server order status
- Checkout remains Not done until the complete Step 04/result scope closes
```
