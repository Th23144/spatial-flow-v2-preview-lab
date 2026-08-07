# Step 4F · R1 Batch-5 Order Summary / Coupon / Trust Read-only Audit

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user authorized the next bounded Checkout group after full closure of R1 Step-03 Payment V2.

This audit is read-only. No runtime source is changed here.

## Current status entering Batch 5

```text
R1 Step 01: completed and closed
R1 Step 02 Shipping V2: completed and closed
R1 Step 03 Payment V2: completed and closed
Batch 4: completed
Next manual acceptance: Batch 5
Checkout: Not done
```

## Current installed source unit

The active source unit entering this audit is the Step-03 accepted installation:

```text
functions.php
580,074 bytes
10,966 lines
SHA256: 978b9cc033e5ab241127bde5d77e843d4b85dd08722148a703fbf2cf3d105c58

woocommerce/checkout/form-checkout.php
19,685 bytes
381 lines
SHA256: 5b285cd74e4f0aacca5339d8a9095ab23a1be1b5c4f248d5bedc83ed2b146572

assets/js/checkout-safe5.js
32,655 bytes
1,024 lines
SHA256: 66479f8cc357f7c9cda1ffd92cc45a6c908a589c27395d96efbd21d5d5683d9c

assets/css/checkout-safe5.css
73,900 bytes
2,360 lines
SHA256: a3a83cd5f8ac3c76d1c333fd05debe338176fb1ea76604e0c8a4e0f94595ad39
```

## Accepted authority and required reconciliation

The original S3 static artifacts remain the visual-language authority:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
```

However, the static Order Summary contains prototype-only strings such as preview disclaimers and fake line-item values. Those strings must never replace live WooCommerce commerce truth.

The later live ownership matrix and R3 backend-copy work explicitly require the real Checkout to preserve:

```text
- WooCommerce-native line items, quantity, subtotal, shipping, tax/total truth
- server-backed coupon validity and total refresh
- current SAFE5 coupon presentation copy
- current backend-editable Summary label/title
- current backend-editable Trust titles/descriptions
```

Therefore Batch 5 uses this reconciliation rule:

```text
S3 static references -> visual grammar / geometry / hierarchy
WooCommerce -> products, quantity, prices, shipping, taxes, totals, coupon truth
SAFE5/R3 -> live presentation copy for Summary / Coupon / Trust
```

Do not copy static fake products, fake prices, fake tax text, preview-only trust text or browser-authored totals.

## Runtime visual baseline already available

The immediately preceding Step-03 desktop / 390 / 360 screenshots already contain the complete current Order Summary surface, so no additional pre-change screenshot is required.

Observed live baseline:

```text
Desktop:
- white rounded Summary card
- ORDER SUMMARY kicker + Your Order heading
- rounded promo-code control
- real product thumbnails / product text / quantity / prices
- real Subtotal / Shipping / Total
- three separate rounded white Trust cards

390 / 360:
- warm square outer Summary surface already exists
- promo control remains rounded/pill-like
- product rows remain driven by historical Checkout row hotfixes
- Trust remains three rounded white cards
- no visible horizontal overflow in the accepted Step-03 screenshot batch
```

## Current ownership audit

### Template

`form-checkout.php` already preserves the correct live source-of-truth structure:

```text
.sf-safe5-summary-card
  -> editable Summary kicker/title
  -> SAFE5 coupon control
  -> native #order_review / woocommerce_order_review()
  -> editable SAFE5 Trust group
```

No duplicate browser-authored totals exist in the template.

Decision:

```text
Keep current Summary DOM for Batch 5.
No PHP/template rewrite is required for the first migration pass.
```

### Coupon JavaScript

`checkout-safe5.js` already:

```text
- opens/closes the SAFE5 coupon panel
- calls WooCommerce wc-ajax apply_coupon
- uses WooCommerce apply_coupon_nonce
- triggers update_checkout after response
- leaves total calculation to WooCommerce
```

WooCommerce remains the server authority for valid/invalid/expired coupon state and refreshed totals.

Decision:

```text
Keep current coupon JavaScript for the first migration pass.
Do not create browser-only discount calculations.
Do not change notice/error ownership here; R2 still owns the wider notice presentation defect.
```

### Product-line context

`functions.php` currently adds two Checkout-safe presentation enrichments while leaving commerce truth native:

```text
- product context/meta via woocommerce_cart_item_name priority 20
- real product thumbnail wrapper via woocommerce_cart_item_name priority 35
```

Decision:

```text
Keep both filters.
No functions.php change is required for the first migration pass.
```

### CSS ownership conflict

`checkout-safe5.css` currently neutralizes the outer `#order_review` wrapper but does not fully own native product-row/tfoot presentation.

Historical `assets/css/spatial-flow.css` contains many successive Checkout summary generations and hotfixes, including repeated selectors for:

```text
#order_review
shop_table / cart_item
product-name / product-total
sf-checkout-order-product / thumbnail / meta / quantity
subtotal / shipping / total
legacy Checkout trust
```

Those historical blocks are intentionally not removed in Batch 5 because bounded shared-CSS cleanup belongs to R5.

Batch 5 must instead establish a strong, narrow `.sf-safe5-summary-card` presentation owner in `checkout-safe5.css`; R5 will later remove the superseded shared blocks.

## Confirmed Batch-5 visual deltas

### A. Desktop outer Summary surface

Current:

```text
rounded white card
30px radius inherited from generic SAFE5 card foundation
```

Accepted editorial direction:

```text
flat/square warm Summary surface
no floating white-card treatment
no decorative shadow dependency
```

### B. Product rows

Current rows are visibly acceptable but are still produced through a long historical hotfix cascade in shared CSS.

Batch 5 must give the SAFE5 summary one clear local layout owner for:

```text
thumbnail
product title/context
native quantity
line price
row divider
long-title wrapping
variation/meta content
```

WooCommerce values remain untouched.

### C. Totals

Current values are real and correct; only hierarchy is being migrated.

Required:

```text
labels and values remain native WooCommerce output
Subtotal / Shipping / tax/discount rows when actually present remain dynamic
Order total receives clear editorial hierarchy
coupon-generated discount rows must remain visible
no fake tax row is inserted when WooCommerce does not output one
```

### D. Coupon surface

Current coupon interaction is functional but visually belongs to the older rounded/pill language.

Batch 5 owns visual integration only:

```text
flat editorial toggle/panel treatment
square input/action surfaces
server-backed result text retained
no coupon-validity logic change
```

Coupon/global error-message beautification outside this bounded control remains R2.

### E. Trust surface

Current live Trust content is safe, backend-editable and must remain.

Current visual:

```text
three separate rounded white cards
```

Target visual direction:

```text
flatter integrated Summary reassurance block
no nested floating-card stack
retain all three editable title/description pairs
```

Do not import static-preview disclaimers such as “No real payment...” into live Checkout.

### F. Responsive/sticky behavior

The current Step-03 screenshot batch shows no overflow. Batch 5 must preserve:

```text
1366 desktop sticky behavior without Header/Footer collision
390 / 360 Summary after the active form/context flow
accepted 22px phone gutter
no horizontal overflow
long product/gateway/cart text wrapping safely
```

## Minimal first implementation scope

The first Batch-5 migration should be CSS-only:

```text
assets/css/checkout-safe5.css
```

Expected bounded region:

```text
START: /* Summary */
END: immediately before /* Step 02 Shipping V2: editorial panel, dynamic methods, and address context. */
```

The existing Airwallex currency-switch suppression inside that region must be preserved unless separately proven obsolete.

No first-pass change is authorized to:

```text
functions.php
form-checkout.php
checkout-safe5.js
spatial-flow.css
spatial-flow.js
thankyou.php
Crypto plugin
gateway settings
WooCommerce product/tax/shipping/coupon records
```

If Batch-5 functional testing later exposes a real coupon-remove or update issue, stop and repair the smallest owner then; do not preemptively rewrite JavaScript.

## Batch-5 acceptance after CSS migration

One combined user batch will cover:

```text
1. 1366 Summary full surface and sticky scroll state
2. 390 Summary full surface
3. 360 Summary full surface
4. real product image/title/context/quantity/price readability
5. subtotal + shipping + total remain correct
6. coupon open
7. empty coupon error
8. invalid coupon server error
9. valid coupon when a safe test coupon exists
10. remove applied coupon through the available WooCommerce flow
11. totals restore after removal
12. no duplicate coupon control/notice
13. Trust content remains correct and backend-owned
14. no clipping or horizontal overflow
```

A valid coupon is optional only if no safe test coupon currently exists; empty/invalid behavior still must be tested.

## Stop point

```text
Batch-5 read-only audit: complete
Additional pre-change screenshots: not required
First implementation owner: checkout-safe5.css only
Runtime source change: not yet performed
Next action: build and source-audit one bounded Summary/Coupon/Trust CSS replacement
Batch 5 manual acceptance: not started
Checkout: Not done
```
