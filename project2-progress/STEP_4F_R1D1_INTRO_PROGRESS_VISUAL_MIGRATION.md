# Step 4F · R1-D1 Intro and Progress Visual Migration

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization

User instruction:

```text
开始
```

Decision:

```text
R1-D strict V2 visual migration: started
First bounded group: Intro + four-stage progress
Checkout: Not done
```

## 2. Authoritative accepted references

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
project2-progress/STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
```

Locked visible progression:

```text
01 Address → 02 Shipping → 03 Payment → 04 Confirmed
```

Accepted reference characteristics for this group:

```text
- warm editorial page background
- two-column Checkout intro at desktop
- large low-weight serif Checkout title
- serif italic explanatory copy
- four flat progress items with 01 / 02 / 03 / 04 numbering
- no rounded progress cards
- active number uses the clay accent
- completed stages keep their number and show a trailing check mark
- Confirmed remains visible and non-interactive
- mobile retains all four labels and allows horizontal containment when required
```

## 3. Exact scope

Runtime files touched by this bounded group:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

Not touched:

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

## 4. Verified pre-edit live baseline

| File | Bytes | Lines | SHA256 |
|---|---:|---:|---|
| `form-checkout.php` | 7,783 | 237 | `7a5d620a6f5526b76a83877f2ee8abb55e6f28f66595609e51dd695935adee2f` |
| `checkout-safe5.js` | 20,659 | 668 | `48feecd27d3da5a921b822734b48b6885e3ce1fe8b0a195b5ef9af81bc999f04` |
| `checkout-safe5.css` | 21,238 | 609 | `adcd779a7e41676096fc40ae75cf67174ee038d156f853c5873c5528807d5d73` |

The PHP baseline includes the accepted `BACK TO ADDRESS` correction. The CSS baseline includes the accepted Step-03 Place Order/trust-width correction.

## 5. Audited installed candidate

| File | Candidate bytes / lines | Delta | Candidate SHA256 |
|---|---:|---:|---|
| `form-checkout.php` | 7,925 / 240 | +142 bytes / +3 lines | `14e58b22966d1c3cb6c713157e5475eb43de102bc271a4e620ddfe14a4da17ec` |
| `checkout-safe5.js` | 20,744 / 671 | +85 bytes / +3 lines | `7b2906a3be0823cc5055db409fe20cc498878d71d479809c7e812174530ae0df` |
| `checkout-safe5.css` | 22,543 / 654 | +1,305 bytes / +45 lines | `e005cf24b4ced7140627aa04b20ed3cbe2e54583fcfca02dd9864e2e2b489195` |

Growth review:

```text
PHP: +1.82%
JavaScript: +0.41%
CSS: +6.14%
```

All are below the Project 2 material-growth trigger. The CSS increase is explained by replacing the former rounded-card Hero/progress rules with the accepted desktop/mobile editorial Intro rules; it is not a bottom append.

## 6. Exact behavior changes

Template:

```text
- groups title/copy/progress inside one Intro section
- keeps existing neutral Checkout title and existing explanatory copy
- changes visible stage numbers to 01 / 02 / 03 / 04
- keeps Confirmed disabled and non-interactive
```

JavaScript:

```text
- preserves 01 / 02 / 03 stage numbers instead of replacing completed numbers with a standalone check
- updates the visible kicker to Step 01 / 02 / 03 of 04
- keeps all navigation and validation behavior unchanged
```

CSS:

```text
- warm V2 background and accepted color tokens
- desktop two-column Intro geometry
- accepted serif/mono typography hierarchy
- flat four-stage progress treatment
- completed trailing check mark
- mobile single-column Intro and four visible progress labels
```

## 7. Static validation

```text
form-checkout.php: php -l pass
checkout-safe5.js: node --check pass
checkout-safe5.css: tinycss2 errors = 0
CSS braces: 89 / 89
CSS comments: 12 / 12
CRLF preserved in all three files
```

## 8. Runtime desktop evidence

User supplied a live Step-01 desktop screenshot after applying all coupled replacements.

Observed:

```text
- Checkout page loads without PHP white screen
- warm editorial Checkout surface is present
- Intro is split into left title and right explanatory/progress columns
- large low-weight serif Checkout title renders
- explanatory copy renders in serif italic styling
- progress is flat, not four rounded cards
- visible labels are 01 Address / 02 Shipping / 03 Payment / 04 Confirmed
- Address is active
- Confirmed remains visible and non-interactive
- a divider separates Intro from the Checkout body
- existing Step-01 fields and Order Summary still render
```

The lower form panels, field styling and Order Summary remain visibly close to the prior SAFE5 implementation. This is expected because they are outside R1-D1 and must not be misclassified as an R1-D1 failure.

Classification:

```text
R1-D1 desktop application: passed
R1-D1 desktop visual intent: passed
```

## 9. Runtime 390px evidence

Authoritative evidence record:

```text
project2-progress/STEP_4F_R1D1_390PX_RUNTIME_EVIDENCE.md
```

The live 390px screenshot confirms:

```text
- Intro collapses to one mobile column
- kicker remains visible as Step 01 of 04
- Checkout title and explanatory copy remain readable
- 01 Address / 02 Shipping / 03 Payment / 04 Confirmed all remain visible
- no label clipping is visible
- no former rounded progress cards return
- no visible horizontal page overflow appears in the supplied screenshot
```

Classification:

```text
R1-D1 390px Intro/progress: passed
R1-D1 360px: pending
```

## 10. Strict-V2 body-order mismatch discovered

The 390px screenshot also exposes a mismatch outside D1 scope:

```text
Current live mobile order:
Intro → Order Summary → Address form

Accepted V2 Step-01 order:
Intro → Address form → Order Summary
```

The current reversal comes from the existing responsive `.sf-safe5-summary { order: -1; }` rule. It was not introduced by D1, so it does not invalidate D1, but it must be corrected in R1-D2.

Additional D2-open surfaces visible in the screenshot:

```text
- rounded Order Summary container/trust cards
- rounded Address/contact panels
- existing field surfaces
- current mobile action-button treatment
```

## 11. Current stop point

```text
R1-D1 desktop: passed
R1-D1 390px: passed
R1-D1 360px: pending
R1-D2: blocked until 360px D1 check
R1-D2 must restore form-before-Order-Summary mobile order
Checkout: Not done
```
