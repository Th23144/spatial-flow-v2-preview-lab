# Step 4F · R1 Live Checkout Reconstruction

Date: 2026-08-03  
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

## 7. R1-D2 confirmed starting defects

The latest 360px screenshot proves the D1 Intro/progress correction is active, while separate body surfaces remain edge-touching or nearly edge-touching:

```text
- Order Summary outer card
- Address/form outer card
- bottom action surfaces
```

The exact responsive selector/width/margin cascade must be audited in D2 before issuing a correction.

Current mobile body order:

```text
Intro → Order Summary → Address form
```

Accepted V2 order:

```text
Intro → Address form → Order Summary
```

R1-D2 scope:

```text
- restore form-before-Order-Summary mobile order
- establish accepted mobile body outer gutter
- migrate form/panel surfaces
- migrate field surfaces and spacing
- migrate action buttons
- migrate Order Summary and trust surfaces
```

R1-D2 must preserve all completed functional gates and must not alter WooCommerce ownership, gateway rendering, Place Order or Crypto redirect behavior.

## 8. Current stop point

```text
R1-D1: closed
R1-D2: next active bounded group
R1-D2 source audit: not started
R2: blocked
Checkout: Not done
```
