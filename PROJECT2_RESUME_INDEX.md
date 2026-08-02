# Project 2 · Resume Index

Last updated: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Read these first

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
4. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
5. PROJECT2_CSS_MAINTENANCE_POLICY.md
6. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
7. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
8. project2-progress/STEP_4F_LIVE_CHECKOUT_BOUNDED_RECONSTRUCTION_PLAN.md
9. project2-progress/STEP_4F_R0_BASELINE_CAPTURE_AND_ROLLBACK.md
10. project2-progress/STEP_4F_R0_CONFIGURATION_SNAPSHOT.md
11. project2-progress/STEP_4F_R0_FUNCTIONAL_SMOKE_TEST.md
12. project2-progress/STEP_4F_R1_LIVE_STEP01_03_RECONSTRUCTION.md
13. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
```

## Binary page status

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Not done
```

## Locked Checkout flow

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Step 04 is WooCommerce-owned result truth. It is never Review and never requests payment again.

## Current live ownership truth

```text
WooCommerce Checkout page: ID 623
Checkout URL: /checkout-2-2/
Page content: [woocommerce_checkout]
CartFlows: active, no Flow exists
WPCode: no Checkout/payment/Crypto owner
Crypto: Spatial Flow Crypto Pay Trial V0.2.5
```

Current child-theme owners:

```text
woocommerce/checkout/form-checkout.php
woocommerce/checkout/thankyou.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
```

## R0 — completed and closed

Completed evidence:

```text
- exact file bytes, line counts and SHA256
- PHP/JS syntax validation
- CSS parser, brace and comment validation
- external rollback package
- saved Checkout/Order Received theme-mod export
- gateway order and runtime gateway export
- normal test order baseline
- Crypto V0.2.5 Sandbox baseline
```

Rollback package:

```text
project2-checkout-r0-baseline-20260802.zip
SHA256: 5eb98b952a19a7de000cfc870f3750cb15b3237e543e93dea284e78e7a36f45c
```

Confirmed runtime defect carried to R4:

```text
on-hold orders still display preparation, fulfillment-queue and On The Way language
```

## Locked implementation-delivery policy

Project 2 live changes must use manual anchored replacement:

```text
exact file
→ exact old code
→ expected match count
→ exact replacement code
→ expected byte/line delta
→ manual save
→ actual byte/line/hash check
→ syntax/parser validation
→ stop
```

Prohibited unless explicitly requested by the user:

```text
- replacement ZIP deployment
- complete-file overwrite
- unanchored broad replacement
- skipping before/after file-size review
- routine append-only CSS patching
```

Authoritative policy:

```text
PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
```

## R1 current audit status

R1 is authorized, but no runtime file has been changed.

R0 baseline:

| File | Bytes | Lines |
|---|---:|---:|
| `form-checkout.php` | 9,140 | 278 |
| `checkout-safe5.js` | 24,463 | 780 |
| `checkout-safe5.css` | 20,936 | 599 |

The first internally generated complete candidate was audited:

| File | Byte delta | Line delta | Decision |
|---|---:|---:|---|
| `form-checkout.php` | -33 | -9 | requires anchored decomposition |
| `checkout-safe5.js` | -453 | -156 | requires function-by-function audit |
| `checkout-safe5.css` | +13,657 (+65.23%) | +387 (+64.61%) | blocked |

The artifact:

```text
project2-checkout-r1-candidate-20260802.zip
```

is withdrawn as a deployment method. Do not apply it.

## R1 manual sequence

```text
R1-A: template navigation and Review DOM removal
R1-B: JavaScript three-step conversion and Review/Place-Order relocation removal
R1-C: minimal CSS four-column → three-column functional conversion
R1-D: approved static visual migration in bounded selector groups
```

Each part must state expected size/line change before editing and verify actual size/line/hash after saving.

## Current exact stop point

```text
R0: closed
R1 authorization: recorded
Manual replacement and file-size policy: locked
First complete R1 candidate: blocked from deployment
Runtime source modification: none
Next action: prepare R1-A exact manual replacement instructions
R2: blocked
Checkout: Not done
```

## Hard boundaries

```text
- preserve WooCommerce order/payment authority
- preserve backend editability
- no browser-authoritative payment success
- no Review/fifth Checkout input step
- no duplicate order or invoice
- no blind whole-file overwrite
- no replacement package deployment
- mandatory before/after file-size audit
- no append-only CSS patch pile
- V0.2.6.1/Workspace integration remains deferred
- one bounded part at a time
- Checkout remains Not done
```
