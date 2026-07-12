# Step 4E-B2-R3-FIX3 · Mobile Duplicate Unit Price Removal

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Native Cart functional regression：Passed by user confirmation.
Mobile visual audit：Reopened.
Observed defect：each mobile Cart item displays both unit price and subtotal, producing duplicate-looking prices when quantity is 1.
Severity：bounded visual defect.
Desktop impact：None intended.
Cart page status：Not done.
```

## Root cause

The accepted R2 layer already contains:

```css
body.woocommerce-cart form.woocommerce-cart-form td.product-price {
  display: none !important;
}
```

However, an older mobile rule uses the more specific selector:

```css
body.woocommerce-cart table.shop_table.cart td.product-price
```

and re-enables the cell with `display: flex !important`.

The desktop-only FIX2 already solved the same ownership conflict with a stronger selector, but that rule is scoped to `min-width: 1101px`. Therefore mobile still shows:

```text
unit price
subtotal
```

When quantity is 1 the two values match, which appears as a duplicated price. This is not duplicate WooCommerce data; it is one native unit-price cell plus one native subtotal cell being shown together.

## Exact baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(9).css
Size: 813,392 bytes
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8
Braces: 4,125 / 4,125
Comments: 403 / 403
CSS parser errors: 0
```

Unchanged PHP:

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

## Scope

```text
Modify: assets/css/spatial-flow.css only.
Do not modify: functions.php, spatial-flow.js, WooCommerce templates, version number.
Do not delete: R2, FIX1, FIX2, old Cart CSS, Cart Notice.
Desktop rules: unchanged.
Mobile behavior: hide only td.product-price; retain td.product-subtotal.
```

## Exact snippet

Copy the complete contents of:

```text
project2-progress/snippets/STEP_4E_B2_R3_FIX3_MOBILE_DUPLICATE_PRICE.css
```

Snippet metrics:

```text
Size: 494 bytes
Logical lines: 10
SHA256: dc4dd64373940b089fa96294d8a61ab5f5a2abf8686b3f8a74f8f1a2fe081d62
Braces: 2 / 2
Comments: 2 / 2
CSS parser errors: 0
```

## Exact insertion point

Search the current stylesheet for:

```css
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

It must occur once.

Place the cursor immediately before the first `/` of that marker. Paste the entire FIX3 snippet and keep one blank line between the FIX3 END marker and the main R2 END marker.

The final boundary must be:

```css
/* === Step 4E-B2-R2-FIX2 · Desktop 1:1 Detail Pass END === */

/* === Step 4E-B2-R3-FIX3 · Mobile Duplicate Unit Price Removal START ===
...
/* === Step 4E-B2-R3-FIX3 · Mobile Duplicate Unit Price Removal END === */

/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

Do not paste the snippet after `Step 4E Cart Notice Toast START`.

## Expected complete stylesheet

```text
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Braces: 4,127 / 4,127
Comments: 405 / 405
CSS parser errors: 0
Delta: +495 bytes / +10 logical lines
```

The predicted complete file was generated from the accepted `spatial-flow(9).css` baseline and parsed with zero CSS errors.

## Browser expectation

At 767 CSS px or narrower, each Cart item must show only one monetary value beneath the quantity control:

```text
Subtotal only
```

The redundant unit-price line must disappear.

Must remain unchanged:

```text
- quantity controls
- circular remove control
- product image, name and metadata
- Coupon controls
- Order Summary values
- desktop Cart layout
- recommendation cards
- Header and Footer
- SAFE5 Checkout
```

## Validation

After saving:

```text
1. hard refresh mobile Cart
2. confirm each item shows one price only
3. increase one quantity and update Cart
4. confirm the remaining price changes to the line subtotal
5. confirm Order Summary total refreshes
6. confirm no horizontal overflow
```

Required evidence:

```text
- edited spatial-flow.css
- one mobile screenshot showing at least two Cart item cards
- text confirmation that quantity/update still works
```

## Independent rollback

Delete only the range from:

```css
/* === Step 4E-B2-R3-FIX3 · Mobile Duplicate Unit Price Removal START ===
```

through:

```css
/* === Step 4E-B2-R3-FIX3 · Mobile Duplicate Unit Price Removal END === */
```

and the one immediately following blank line.

No complete-file rollback is required.