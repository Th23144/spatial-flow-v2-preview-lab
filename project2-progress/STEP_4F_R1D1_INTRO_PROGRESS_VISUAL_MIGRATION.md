# Step 4F · R1-D1 Intro and Progress Visual Migration

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authority

```text
R1-D strict V2 visual migration: started
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

Static validation:

```text
PHP syntax: passed
JavaScript syntax: passed
CSS parse errors: 0
CSS braces: 89 / 89
CSS comments: 12 / 12
CRLF preserved
```

## 4. Runtime desktop evidence

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
- fields and Order Summary still render
```

Classification:

```text
R1-D1 desktop: passed
```

## 5. Runtime mobile evidence

Evidence records:

```text
project2-progress/STEP_4F_R1D1_390PX_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1D1_360PX_AND_MOBILE_GUTTER_DEFECT.md
```

Both 390px and 360px screenshots confirm:

```text
- Intro collapses to one column
- title and explanatory copy remain readable
- 01 / 02 / 03 / 04 all remain visible
- no progress-label clipping
- no obvious horizontal overflow
```

These points establish structural containment only.

## 6. Confirmed mobile strict-V2 defect

The user correctly identified that the live mobile content is too close to the viewport edges compared with the accepted 390px and 360px references.

Accepted reference mobile gutter:

```text
22px class of outer spacing
```

Current D1 mobile Intro rule:

```css
width: min(100% - 32px, 1180px);
```

which provides only 16px nominal space per side before other live cascade effects.

Visible mismatch:

```text
- Intro/progress gutter is narrower than the accepted reference
- Order Summary appears flush or nearly flush to the viewport edge
- Address/form card appears flush or nearly flush to the viewport edge
- accepted references retain a clear consistent gutter
```

Correct classification:

```text
390px structural containment: passed
390px strict visual 1:1: failed/pending gutter correction
360px structural containment: passed
360px strict visual 1:1: failed/pending gutter correction
```

The prior unqualified `R1-D1 390px: passed` classification is superseded.

## 7. Related R1-D2 body defects

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
- body outer gutter
- rounded form/panel treatment
- rounded Order Summary/trust cards
- field surfaces and spacing
- mobile action-button treatment
```

## 8. Current stop point

```text
R1-D1 desktop: passed
R1-D1 mobile structural containment: passed
R1-D1 mobile strict visual acceptance: pending gutter correction
R1-D2: not started
Next: bounded mobile gutter/layout-foundation correction before D2
Checkout: Not done
```
