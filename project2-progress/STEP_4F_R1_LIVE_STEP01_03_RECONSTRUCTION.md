# Step 4F · R1 Live Checkout Reconstruction

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Current authority

```text
R0: completed and closed
R1-A/B/C functional reconstruction: installed and runtime-validated
R1-D strict V2 visual migration: started
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

## 3. Installed functional source state

Installed package:

```text
project2-checkout-r1-v2-flow-audited-20260802.zip
SHA256: c2a7cfce51fd8e404ede7f9854df178169167f55fe666d97b9c0df59bb2c27f4
```

Post-install accepted corrections:

```text
checkout-safe5.css
→ 21,238 bytes / 609 lines
→ Step-03 native place-order/trust host normalization only

form-checkout.php
→ 7,783 bytes / 237 lines
→ BACK TO INFORMATION changed to BACK TO ADDRESS
```

Current verified pre-R1-D baseline:

| File | Bytes | Lines | SHA256 |
|---|---:|---:|---|
| `form-checkout.php` | 7,783 | 237 | `7a5d620a6f5526b76a83877f2ee8abb55e6f28f66595609e51dd695935adee2f` |
| `checkout-safe5.js` | 20,659 | 668 | `48feecd27d3da5a921b822734b48b6885e3ce1fe8b0a195b5ef9af81bc999f04` |
| `checkout-safe5.css` | 21,238 | 609 | `adcd779a7e41676096fc40ae75cf67174ee038d156f853c5873c5528807d5d73` |

## 4. Functional runtime results completed

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

## 5. Result-page defect retained for R4

The normal `On hold` order still receives preparation/fulfilment/shipping language on the result page.

```text
Owner: R4 server-authoritative result-state mapping
```

## 6. R1-D visual authority

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

## 7. Active visual group

Authoritative record:

```text
project2-progress/STEP_4F_R1D1_INTRO_PROGRESS_VISUAL_MIGRATION.md
```

R1-D1 scope:

```text
- warm editorial Checkout background
- two-column desktop Intro
- V2 typography hierarchy
- flat 01 / 02 / 03 / 04 progress treatment
- active clay number
- completed trailing check mark
- all four mobile labels retained
```

Not included in R1-D1:

```text
field-grid redesign
section/panel redesign
Order Summary redesign
Shipping option redesign
Payment host redesign
Coupon redesign
result-page changes
```

## 8. Current stop point

```text
R1-D1 candidate: source-audited and issued for manual application
Runtime application: pending
Next evidence: Step-01 desktop screenshot after all three coupled replacements
R1-D2 and later visual groups: blocked until R1-D1 passes
R2: blocked
Checkout: Not done
```
