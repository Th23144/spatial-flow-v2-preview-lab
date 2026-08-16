# Project 2 · Resume Index

Last updated: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Read these first

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_STEP_RECORDING_POLICY.md
3. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
4. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
5. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
6. PROJECT2_CSS_MAINTENANCE_POLICY.md
7. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
8. project2-progress/STEP_4F_FULL_REPOSITORY_DOCUMENT_INHERITANCE_COMPLETE_20260816.md
9. project2-progress/STEP_4F_SELECTED_PAYMENT_THEME_ROLLBACK_VALIDATION_20260816.md
10. project2-progress/PAYMENT_WINDOW_STANDALONE_HANDOFF_V030_20260816.md
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

The later expanded **full payment-system / Crypto Workspace** scope remains open; this does not erase the bounded Batch-6 Step-03 closure.

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

## Step 03 architecture after rollback

The rejected theme-side `Selected Payment` experiment has been completely rolled back and byte-exact validated.

Current Step 03 theme architecture is again:

```text
real eligible WooCommerce gateway list
→ native selected gateway + payment_box
→ native gateway fields / iframe / nonce
→ native Terms/privacy
→ exactly one native Place Order
```

The Project-2 theme must remain gateway-agnostic and must not become a second payment gateway registry.

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

## Crypto backend / plugin state

### V0.2.9

```text
BIG BATCH A backend/security: FINAL ACCEPTED / CLOSED
ZIP SHA256:
d85028a0bfc92cd15aec5ace8892119f3cd9ff35083e65c3c70990de56cdf56a
```

Accepted backend includes Workspace Token, REST, Create/Reuse Invoice, server-authoritative fixed USDT/TRON invoice truth, advisory locking, transaction-hash verification, rate limiting, duplicate protection, manual-review/retryable states, `payment_complete()` at-most-once settlement boundary, Sandbox authorization, recovery, and Feature Flag rollback.

Production quote/rate-lock for arbitrary non-USD shop currency remains unresolved.

### V0.3.0 / BIG BATCH B

```text
V0.3.0 customer Workspace candidate: KEEP
V0.3.0 static/source integration: BUILT / VALIDATED
V0.3.0 BIG BATCH B customer runtime: NOT YET FINAL ACCEPTED
Project 2 Crypto Workspace feature flag: OFF until controlled runtime enable step
Legacy /crypto-pay/ rollback path: KEEP
```

Do **not** roll back the plugin to V0.2.9 because the theme Selected-Payment experiment was rejected.

Do **not** independently rewrite the V0.3.0 Workspace files while Project-2 BIG BATCH B runtime acceptance is pending.

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

Current standalone handoff:

```text
project2-progress/PAYMENT_WINDOW_STANDALONE_HANDOFF_V030_20260816.md
```

## Current exact stop point

```text
Full documentation inheritance: COMPLETE
Selected-Payment theme experiment: REJECTED / CLOSED
Four-file manual rollback: BYTE-EXACT VALIDATED
V0.3.0 plugin candidate: KEEP
Project 2 Crypto Workspace: OFF
V0.3.0 BIG BATCH B customer runtime acceptance: NOT YET CLOSED
Checkout binary page status: Not done
```

## Exact next action

```text
Open the consolidated Spatial Flow Crypto Pay Trial V0.3.0
Project-2 Crypto Workspace BIG BATCH B controlled runtime acceptance cycle.
```

The runtime cycle must explicitly control when the feature flag is enabled, test the accepted V0.3.0 Workspace states/recovery paths, re-check Feature Flag OFF rollback, record the result in GitHub, and only then decide whether BIG BATCH B is accepted or rejected.

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
- V0.2.9 backend/security remains accepted
- V0.3.0 plugin is not rolled back by the theme correction
- Checkout remains Not done until the complete system scope closes
```
