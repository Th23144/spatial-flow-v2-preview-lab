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

## 8. Active subgroup: R1-D2A

Authoritative records:

```text
project2-progress/STEP_4F_R1D2A_MOBILE_BODY_ORDER_AND_SURFACE_FOUNDATION.md
project2-progress/STEP_4F_R1D2A_360PX_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1D2A_BOX_SIZING_GUTTER_CORRECTION.md
project2-progress/STEP_4F_R1D2A_BOX_SIZING_RUNTIME_FAILURE.md
project2-progress/STEP_4F_R1D2A_RUNTIME_GEOMETRY_EVIDENCE.md
project2-progress/STEP_4F_R1D2A_SHELL_CASCADE_SPECIFICITY_ROOT_CAUSE_AND_CORRECTION.md
```

Current CSS baseline:

```text
assets/css/checkout-safe5.css
23,816 bytes / 682 lines
SHA256: 395ccd6d3b07e6c03e8f43eb2e812e5f942889f40fa3543f84ded1419cc77fba
```

Runtime evidence already confirms:

```text
- mobile order is Intro → Address form → actions → Order Summary
- primary Continue appears before secondary Return to cart
- old pill-radius is removed from the two navigation controls
- no visible horizontal overflow was introduced
- R1-D1 Intro/progress remains intact
```

The read-only cascade enumeration identifies the winning rules in:

```text
assets/css/spatial-flow.css
@media (max-width: 767px)
```

Legacy selector:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > *
```

Winning declarations:

```css
width: 100% !important;
max-width: 100% !important;
margin-left: 0 !important;
margin-right: 0 !important;
```

All competing rules are `!important`, but the legacy wildcard selector is more specific than the existing SAFE5 `.sf-safe5-shell` selector. Therefore it wins despite `checkout-safe5.css` loading later.

Confirmed root cause:

```text
legacy shared mobile Checkout rule in spatial-flow.css
+ higher selector specificity
+ !important
```

R1 ownership decision:

```text
- do not edit the large shared spatial-flow.css during R1-D2A
- retain shared-rule removal for the later bounded shared-CSS cleanup phase
- override only the direct SAFE5 shell child with a stronger narrow selector in checkout-safe5.css
```

Audited correction target:

```text
assets/css/checkout-safe5.css
24,022 bytes / 688 lines
SHA256: 5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b
Delta: +206 bytes / +6 lines / +0.86%
```

Expected `360px` geometry after application:

```text
.sf-safe5-shell width: approximately 316px
left/right gutter: approximately 22px
margin-left/right: auto
```

Correct classification:

```text
D2A mobile body order: passed
D2A mobile action order: passed
D2A body outer gutter root cause: confirmed
D2A specificity correction: source-audited, runtime pending
D2A overall: partial, not closed
```

Nested Billing Details rounding, field surfaces, summary internals, trust cards and final button styling remain planned later D2 work.

## 9. Current stop point

```text
R1-D1: closed
R1-D2A body order: passed
R1-D2A action order: passed
R1-D2A shell specificity root cause: confirmed
Next bounded action: apply the one audited checkout-safe5.css selector replacement
Next evidence: 360px screenshot and shell geometry after refresh
R1-D2B: blocked
R2: blocked
Checkout: Not done
```
