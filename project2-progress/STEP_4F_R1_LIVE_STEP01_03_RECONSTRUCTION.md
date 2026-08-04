# Step 4F · R1 Live Checkout Reconstruction

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Current authority

```text
R0: completed and closed
R1-A/B/C functional reconstruction: installed and runtime-validated
R1-D strict V2 visual migration: in progress
Checkout: Not done
```

R1 runtime scope remains limited to:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

Excluded from R1 runtime changes:

```text
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
woocommerce/checkout/thankyou.php
WPCode
CartFlows
WooCommerce page assignment / URL / shortcode
Spatial Flow Crypto Pay Trial V0.2.5
gateway configuration
```

## 2. Locked operation flow

```text
01 Address
→ 02 Shipping
→ 03 Payment
→ 04 Confirmed / WooCommerce result
```

Only Steps 01–03 are interactive Checkout views. Step 04 is the server-owned WooCommerce order result. No Review input page and no fourth client submit page may return.

All final operation and visual presentation must match the accepted Project 2 V2 repository references strictly.

## 3. Functional runtime gates already passed

```text
Step 01 render
malformed-email blocking
Step 02 render and current worldwide $8.99 flat rate
BACK TO ADDRESS copy and navigation
Step 03 dynamic gateways and one native Place Order
Step-03 trust-card collapse correction
Terms rejection and Step-03 error routing
normal test order route (#3575)
visible duplicate-order check
Crypto /crypto-pay/ redirect (#3576)
```

The current `On hold` result page still uses success/fulfilment language. That defect remains assigned to R4 server-authoritative result-state mapping.

## 4. Visual authority

Accepted references:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-context-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
project2-progress/STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
```

Implementation rules:

```text
bounded selector/DOM groups only
manual anchored replacement by default
exact before/after bytes, lines and SHA256
no broad whole-file rewrite
no routine bottom append
preserve WooCommerce ownership and validated submit paths
validate desktop and mobile after every visual group
```

## 5. R1-D1 status

Closed and passed:

```text
desktop two-column editorial Intro
mobile single-column Intro
large low-weight serif title
italic explanatory copy
flat 01 / 02 / 03 / 04 progression
Address active and Confirmed non-interactive
all four stages retained at 390px and 360px
no visible horizontal overflow
accepted mobile Intro/progress gutter
```

## 6. R1-D2A status

Closed and passed:

```text
mobile order: Intro → Address → actions → Order Summary
primary Continue before secondary Return
square navigation-control foundation
accepted mobile body gutter
Address panel, actions and summary aligned to same gutter
no visible horizontal overflow
```

Confirmed former gutter root cause:

```text
assets/css/spatial-flow.css contained a higher-specificity mobile wildcard rule:
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > *

It forced width/max-width 100% and zero side margins with !important.
A stronger narrow selector for the direct SAFE5 shell child corrected it.
```

## 7. R1-D2B1 source and DOM evidence

Authoritative records:

```text
project2-progress/STEP_4F_R1D2B_STEP01_NATIVE_FIELD_DOM_AUDIT.md
project2-progress/STEP_4F_R1D2B_NATIVE_FIELD_DOM_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1D2B1_STEP01_NATIVE_PANEL_RECOMPOSITION.md
project2-progress/STEP_4F_R1D2B1_EXPECTED_SIZE_CORRECTION_AND_UPLOADED_FILE_AUDIT.md
project2-progress/STEP_4F_R1D2B1_360PX_RUNTIME_EVIDENCE_AND_ORPHAN_SURFACE_DEFECT.md
project2-progress/STEP_4F_R1D2B1_OPTIONAL_NOTE_ORPHAN_WRAPPER_ROOT_CAUSE_AND_FIX.md
project2-progress/STEP_4F_R1D2B1_OPTIONAL_NOTE_FIX_RUNTIME_ACCEPTANCE.md
```

Live DOM evidence confirms:

```text
every inspected Billing field exists exactly once
.woocommerce-shipping-fields exists exactly once
hidden .shipping_address exists exactly once
.woocommerce-additional-fields / #order_comments_field exists exactly once
all inspected customer nodes belong to Step 01
no duplicate operational IDs
```

Locked D2B1 method:

```text
create Contact / Delivery address / Optional note mounts
move existing native nodes only; never clone fields
retain WooCommerce IDs, names, values, validation classes and listeners
move unknown/plugin-added billing rows to the end of Delivery
rerun placement idempotently on init, updated_checkout and country_to_state_changed
```

## 8. D2B1 source audit correction

Verified pre-change baseline:

| File | Bytes / lines | SHA256 |
|---|---:|---|
| `form-checkout.php` | 7,925 / 240 | `14e58b22966d1c3cb6c713157e5475eb43de102bc271a4e620ddfe14a4da17ec` |
| `checkout-safe5.js` | 20,744 / 671 | `7b2906a3be0823cc5055db409fe20cc498878d71d479809c7e812174530ae0df` |
| `checkout-safe5.css` | 24,022 / 688 | `5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b` |

The originally issued post-change size targets were incorrect and were revoked. The uploaded user files were reconstructed against the exact baselines and passed replacement-integrity and syntax checks.

Audited uploaded D2B1 state before the Optional-note fix:

| File | Bytes / lines | SHA256 |
|---|---:|---|
| `form-checkout.php` | 9,847 / 287 | `81e81fb9d35e0aa41311686c51d0bae276bfc017f042d5b633ad41724c82bfa2` |
| `checkout-safe5.js` | 24,682 / 819 | `7dc849b92771b2dc3092f4faea77022b4dd558b9695df59edd59b521b75b9dde` |
| `checkout-safe5.css` | 26,979 / 817 | `42e45a5fe4ecfd78b976c43efef47dd974a3c8e7b2f67b2a70001ccb586c3b1c` |

## 9. D2B1 runtime visual result

The `360px` runtime screenshot confirms:

```text
Contact panel present
Delivery address panel present
Optional note panel present
native Billing fields visibly recomposed
native Order notes textarea visible
form remains before Order Summary
Continue remains before Return to cart
mobile outer gutter remains intact
no visible horizontal overflow
```

The first runtime screenshot exposed an empty white rounded surface above Order notes. Read-only DOM evidence proved that repeated `recomposeAddressFields()` execution moved `#order_comments_field` out of `.woocommerce-additional-fields`, leaving an empty legacy-styled wrapper.

The audited idempotency correction and scoped wrapper normalization were applied. The latest `360px` screenshot confirms:

```text
blank white wrapper surface: gone
Optional note sequence: heading → copy → Order notes label → textarea
Contact and Delivery panels: preserved
Order Summary and outer gutter: preserved
```

Classification:

```text
D2B1 panel composition: visually passed
D2B1 Optional-note orphan-wrapper defect: closed
D2B1 functional regression: pending
D2B1 overall: not closed
```

The screenshot does not independently prove the final JS/CSS byte hashes after the Optional-note correction. Those hashes remain source expectations until the corrected files are uploaded or otherwise measured.

## 10. Current stop point

```text
R1-D1: closed
R1-D2A: closed
R1-D2B1 source replacement: audited
R1-D2B1 360px visual composition: passed
R1-D2B1 Optional-note defect: closed
Next bounded gate: Step-01 native-field functional regression
Required checks: one field instance after updates, country/state behavior, shipping-address toggle, malformed email, Step 01 → Step 02
R1-D2B2: blocked pending D2B1 functional acceptance
R2: blocked
Checkout: Not done
```
