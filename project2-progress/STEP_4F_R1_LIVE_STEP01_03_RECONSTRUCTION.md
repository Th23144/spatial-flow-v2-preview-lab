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

R1 does not modify:

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

## 2. Locked V2 operation flow

```text
01 Address
→ 02 Shipping
→ 03 Payment
→ 04 Confirmed
```

Only Address, Shipping and Payment are interactive Checkout views. Confirmed is visible but non-interactive. The WooCommerce order-received/result page is the real server-owned Step 04. No client Review or Step-04 input page may exist.

All live operation experience and final visual presentation must match the accepted Project 2 V2 repository references strictly.

## 3. Functional runtime results completed

```text
Step 01 render: passed
malformed-email blocking: passed
Step 02 render and $8.99 global flat rate: passed
BACK TO ADDRESS label and return behavior: passed
Step 03 gateways and single native Place Order: passed
Step-03 trust-card collapse: corrected and passed
Terms rejection and Step-03 error routing: passed
normal test order route: passed (#3575)
visible duplicate-order check: passed
Crypto /crypto-pay/ redirect: passed (#3576)
```

Global flat-rate amount-change and single-rate persistence tests are not R1 blockers because the current business configuration exposes one worldwide `$8.99` method. Multi-rate/address-driven regression remains assigned to R7.

## 4. Result-page defect retained for R4

The normal `On hold` order still receives preparation/fulfilment/shipping language on the result page.

```text
Owner: R4 server-authoritative result-state mapping
```

## 5. R1-D visual authority

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
- bounded selector/DOM groups only
- manual anchored replacement by default
- exact before/after bytes, lines and SHA256
- no broad whole-file rewrite
- no bottom append as routine method
- preserve WooCommerce authority and all validated submit paths
- validate desktop and mobile after each visual group
```

## 6. R1-D1 closed result

Authoritative records:

```text
project2-progress/STEP_4F_R1D1_INTRO_PROGRESS_VISUAL_MIGRATION.md
project2-progress/STEP_4F_R1D1_390PX_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1D1_360PX_AND_MOBILE_GUTTER_DEFECT.md
project2-progress/STEP_4F_R1D1_MOBILE_GUTTER_CORRECTION.md
```

Passed scope:

```text
- desktop two-column editorial Intro
- mobile single-column Intro
- large low-weight serif title
- italic explanatory copy
- flat 01 / 02 / 03 / 04 progression
- Address active and Confirmed non-interactive
- all four stage labels retained at 390px and 360px
- no visible horizontal overflow
- corrected mobile Intro/progress outer gutter
```

Classification:

```text
R1-D1 desktop: passed
R1-D1 390px Intro/progress: passed
R1-D1 360px Intro/progress: passed
R1-D1: closed
```

## 7. R1-D2 full scope

R1-D2 must:

```text
- restore form-before-Order-Summary mobile order
- establish accepted mobile body outer gutter
- migrate form/panel surfaces
- migrate field surfaces and spacing
- migrate action buttons
- migrate Order Summary and trust surfaces
- align desktop body geometry to the accepted reference
```

R1-D2 must preserve all completed functional gates and must not alter WooCommerce ownership, gateway rendering, Place Order or Crypto redirect behavior.

## 8. R1-D2A closed result

Authoritative records:

```text
project2-progress/STEP_4F_R1D2A_MOBILE_BODY_ORDER_AND_SURFACE_FOUNDATION.md
project2-progress/STEP_4F_R1D2A_360PX_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1D2A_BOX_SIZING_GUTTER_CORRECTION.md
project2-progress/STEP_4F_R1D2A_BOX_SIZING_RUNTIME_FAILURE.md
project2-progress/STEP_4F_R1D2A_RUNTIME_GEOMETRY_EVIDENCE.md
project2-progress/STEP_4F_R1D2A_SHELL_CASCADE_SPECIFICITY_ROOT_CAUSE_AND_CORRECTION.md
project2-progress/STEP_4F_R1D2A_360PX_GUTTER_RUNTIME_ACCEPTANCE.md
```

Installed CSS state:

```text
assets/css/checkout-safe5.css
24,022 bytes / 688 lines
SHA256: 5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b
```

Passed D2A scope:

```text
- mobile order is Intro → Address form → actions → Order Summary
- primary Continue appears before secondary Return to cart
- old pill-radius is removed from the two navigation controls
- Address/form warm panel sits inside the accepted mobile gutter
- Continue and Return actions align to that gutter
- Order Summary aligns to that gutter
- no visible horizontal overflow is introduced
- R1-D1 Intro/progress remains intact
```

Confirmed root cause of the former full-width shell:

```text
assets/css/spatial-flow.css contained a higher-specificity mobile selector:
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > *

It forced width/max-width 100% and zero side margins with !important.
A stronger narrow selector for the direct SAFE5 shell child successfully overrode it.
```

Classification:

```text
R1-D2A body order: passed
R1-D2A action order: passed
R1-D2A mobile body gutter: passed
R1-D2A: closed
```

## 9. Active subgroup: R1-D2B1

Authoritative records:

```text
project2-progress/STEP_4F_R1D2B_STEP01_NATIVE_FIELD_DOM_AUDIT.md
project2-progress/STEP_4F_R1D2B_NATIVE_FIELD_DOM_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1D2B1_STEP01_NATIVE_PANEL_RECOMPOSITION.md
```

The live DOM evidence confirms:

```text
- every inspected billing field exists exactly once
- .woocommerce-shipping-fields exists exactly once
- hidden .shipping_address exists exactly once
- .woocommerce-additional-fields / #order_comments_field exists exactly once
- all inspected customer nodes currently belong to Step 01
- there are no duplicate operational IDs
```

Safe implementation boundary:

```text
- create Contact / Delivery address / Optional note mounts
- move the existing native nodes; never clone fields
- retain WooCommerce IDs, names, values, validation classes and listeners
- move unknown/plugin-added billing rows to the end of Delivery
- rerun placement idempotently on initialization, updated_checkout and country_to_state_changed
```

Verified current source baseline:

| File | Bytes / lines | SHA256 |
|---|---:|---|
| `form-checkout.php` | 7,925 / 240 | `14e58b22966d1c3cb6c713157e5475eb43de102bc271a4e620ddfe14a4da17ec` |
| `checkout-safe5.js` | 20,744 / 671 | `7b2906a3be0823cc5055db409fe20cc498878d71d479809c7e812174530ae0df` |
| `checkout-safe5.css` | 24,022 / 688 | `5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b` |

Audited D2B1 target:

| File | Target bytes / lines | Target SHA256 |
|---|---:|---|
| `form-checkout.php` | 9,667 / 266 | `5fdfd2d3904bd21cb2cc3a5a81aba33ec1bf708b25d6f22e11125b619ae4e1c8` |
| `checkout-safe5.js` | 23,834 / 757 | `0a05082d62cffccdac93ffecff4c5eb3f266faf6c409cf70e5f94339f57a6ab7` |
| `checkout-safe5.css` | 26,921 / 809 | `e08ec831ee0f1d80ddb963dd10c7a8b56c2575e16ae1d24ebe174f23a1175608` |

Static validation:

```text
PHP syntax: passed
JavaScript syntax: passed
CSS parse errors: 0
CSS braces: 112 / 112
CSS comments: 13 / 13
bottom append: no
new breakpoint: no
```

D2B1 deliberately stops before field SVG icons and final field-surface pixel tuning. Those remain D2B2 after the native panel structure is runtime-validated.

## 10. Current stop point

```text
R1-D1: closed
R1-D2A: closed
R1-D2B runtime DOM evidence: passed
R1-D2B1 source design and static audit: passed
Next bounded action: apply three exact manual replacements for D2B1
Next evidence: 360px Step-01 panel composition and native-field behavior
R1-D2B2: blocked pending D2B1 runtime acceptance
Still open after D2B: Order Summary internals, trust surfaces and desktop body geometry
R2: blocked
Checkout: Not done
```
