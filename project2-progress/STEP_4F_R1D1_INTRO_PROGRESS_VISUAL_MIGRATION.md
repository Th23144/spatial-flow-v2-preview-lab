# Step 4F · R1-D1 Intro and Progress Visual Migration

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authority

```text
R1-D strict V2 visual migration: in progress
R1-D1 scope: Intro + four-stage progress
Checkout: Not done
```

Authoritative accepted references:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
project2-progress/STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
```

Locked progression:

```text
01 Address → 02 Shipping → 03 Payment → 04 Confirmed
```

## 2. Scope

Runtime files changed in this group:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

Not changed:

```text
billing/shipping field order
WooCommerce hooks
Order Summary markup
Coupon behavior
shipping mirror
payment gateway markup
Place Order ownership
Terms handling
normal/Crypto submit paths
shared spatial-flow.css / spatial-flow.js
functions.php
thankyou.php
Crypto plugin
```

## 3. Installed audited state

Pre-edit baseline:

| File | Bytes / lines | SHA256 |
|---|---:|---|
| `form-checkout.php` | 7,783 / 237 | `7a5d620a6f5526b76a83877f2ee8abb55e6f28f66595609e51dd695935adee2f` |
| `checkout-safe5.js` | 20,659 / 668 | `48feecd27d3da5a921b822734b48b6885e3ce1fe8b0a195b5ef9af81bc999f04` |
| `checkout-safe5.css` | 21,238 / 609 | `adcd779a7e41676096fc40ae75cf67174ee038d156f853c5873c5528807d5d73` |

Installed D1 candidate:

| File | Bytes / lines | Delta | SHA256 |
|---|---:|---:|---|
| `form-checkout.php` | 7,925 / 240 | +142 / +3 | `14e58b22966d1c3cb6c713157e5475eb43de102bc271a4e620ddfe14a4da17ec` |
| `checkout-safe5.js` | 20,744 / 671 | +85 / +3 | `7b2906a3be0823cc5055db409fe20cc498878d71d479809c7e812174530ae0df` |
| `checkout-safe5.css` | 22,543 / 654 | +1,305 / +45 | `e005cf24b4ced7140627aa04b20ed3cbe2e54583fcfca02dd9864e2e2b489195` |

Post-D1 mobile gutter correction audit target:

```text
checkout-safe5.css
Expected bytes: 22,595
Expected lines: 655
Expected SHA256: 290f5185d23382d02ecdbd679fcdd021d996df25ee1c8cff58ed323d1068eacc
```

A fresh source upload/hash was not supplied after the final gutter edit; the expected value remains the audit target.

Static validation before runtime application:

```text
PHP syntax: passed
JavaScript syntax: passed
CSS parse errors: 0
CSS braces: balanced
CSS comments: balanced
CRLF preserved
```

## 4. Desktop result

The live Step-01 desktop screenshot confirms:

```text
- warm editorial Checkout surface
- two-column Intro composition
- large low-weight serif Checkout title
- italic explanatory copy
- flat 01 / 02 / 03 / 04 progression
- Address active
- Confirmed visible and non-interactive
- no rounded progress cards
```

Classification:

```text
R1-D1 desktop: passed
```

## 5. Mobile result

Evidence records:

```text
project2-progress/STEP_4F_R1D1_390PX_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1D1_360PX_AND_MOBILE_GUTTER_DEFECT.md
project2-progress/STEP_4F_R1D1_MOBILE_GUTTER_CORRECTION.md
```

The 390px and 360px screenshots confirm:

```text
- Intro collapses to one column
- title and explanatory copy remain readable
- 01 / 02 / 03 / 04 all remain visible
- no progress-label clipping
- no obvious horizontal overflow
```

After the bounded gutter correction, the latest 360px screenshot confirms the Intro/progress block now preserves a visible outer gutter materially closer to the accepted V2 reference.

Classification:

```text
R1-D1 390px Intro/progress: passed
R1-D1 360px Intro/progress: passed
R1-D1 mobile visual scope: accepted
```

## 6. Separate R1-D2 defects

The latest screenshot still shows body surfaces touching or nearly touching the viewport edges:

```text
- Order Summary outer card
- Address/form outer card
- bottom action surfaces
```

These are not controlled by the D1 Intro/progress visual group. Their exact selector/width cascade must be audited and corrected in D2.

Current mobile body order:

```text
Intro → Order Summary → Address form
```

Accepted V2 order:

```text
Intro → Address form → Order Summary
```

R1-D2 also owns:

```text
- form/panel surface migration
- field surface and spacing migration
- Order Summary migration
- mobile action-button migration
- body outer gutter
```

## 7. Closure

```text
R1-D1 desktop: passed
R1-D1 390px: passed for Intro/progress scope
R1-D1 360px: passed for Intro/progress scope
R1-D1: closed
R1-D2: next active bounded group
Checkout: Not done
```
