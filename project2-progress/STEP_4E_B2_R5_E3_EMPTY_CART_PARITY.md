# Step 4E-B2-R5-E3 · Empty-Cart Wrapper and State Parity

Last updated: 2026-07-15  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E2 synchronized live counts：Passed / closed.
R5-E3 instruction：Issued.
User manual CSS edit：Pending.
Cart page status：Not done.
```

## Purpose

Make these two states use the same stable full-width empty-Cart composition:

```text
A. Cart becomes empty after removing the final product.
B. Browser directly opens a Cart that was already empty.
```

The current direct-load defect occurs because `.wc-empty-cart-message` is the direct CSS-grid child, while only its nested `.cart-empty` element is assigned full-grid ownership.

## Scope

Modify only:

```text
assets/css/spatial-flow.css
```

Do not modify:

```text
functions.php
assets/js/spatial-flow.js
header.php
WooCommerce templates
Customizer values
version 2.7.8
Cart Notice block
heading spacing or desktop width in this step
```

## Current exact baseline

```text
Uploaded name: spatial-flow(19).css
Size: 695,346 bytes
Logical lines: 23,305
SHA256: 316874b203f8ce4104a1a98751f9b5fd63034fb50b0cbeb9aa0c4d2d5711020e
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

## Exact manual edit

Inside:

```text
/* === Step 4E-B2-R5-B · Canonical Cart Presentation START === */
```

find this exact selector list once:

```css
body.woocommerce-cart .woocommerce-notices-wrapper,
body.woocommerce-cart .woocommerce-message,
body.woocommerce-cart .woocommerce-error,
body.woocommerce-cart .woocommerce-info,
body.woocommerce-cart .sf-cart-v2-heading,
body.woocommerce-cart .sf-cart-next-steps,
body.woocommerce-cart .cart-empty,
body.woocommerce-cart .return-to-shop {
  grid-column: 1 / -1 !important;
}
```

Replace exactly with:

```css
body.woocommerce-cart .woocommerce-notices-wrapper,
body.woocommerce-cart .woocommerce-message,
body.woocommerce-cart .woocommerce-error,
body.woocommerce-cart .woocommerce-info,
body.woocommerce-cart .sf-cart-v2-heading,
body.woocommerce-cart .sf-cart-next-steps,
body.woocommerce-cart .wc-empty-cart-message,
body.woocommerce-cart .cart-empty,
body.woocommerce-cart .return-to-shop {
  grid-column: 1 / -1 !important;
}
```

This is one added selector line only.

## Expected file result

```text
Size: 695,392 bytes
Logical lines: 23,306
SHA256: 19701ba3ee9944784939bef50dc94d81ccefba46e4df6be279edabc3c03c22e8
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

## Why this is sufficient

WooCommerce empty-Cart output contains:

```html
<div class="wc-empty-cart-message">
  <div class="cart-empty woocommerce-info">...</div>
</div>
<p class="return-to-shop">...</p>
```

The grid must assign the full-width column span to the direct child `.wc-empty-cart-message`. The nested `.cart-empty` selector can remain for compatibility and does not need to be deleted.

No template override, JavaScript state class or duplicate late CSS patch is required.

## Pre-deploy gate

After editing, upload the changed CSS for exact validation before replacing the server file.

Do not use the file unless it matches the expected metrics and contains no other diff.

## Browser validation after deployment

### State A · transition to empty

```text
1. Begin with at least one product.
2. Remove the final product without manually refreshing.
3. Confirm empty message and Return to Shop form one coherent full-width composition.
4. Confirm Header BAG remains (0).
5. Confirm native notice/Undo remains functional while present.
```

### State B · direct fresh empty load

```text
1. Keep Cart empty.
2. Open the Cart URL in a new tab or force-refresh it.
3. Confirm the empty message has the same width/alignment as State A.
4. Confirm Return to Shop has the same placement as State A.
5. Confirm there is no left-column confinement or unused fake right column.
```

### Required viewports

```text
Desktop at 100% browser zoom.
Phone at the current production test width.
```

### Non-empty smoke check

Re-add one original product and confirm:

```text
- normal Cart layout remains unchanged
- quantity and live counts still work
- Order Summary remains present
- no horizontal overflow
```

## Required report

```text
R5-E3 transition-to-empty desktop：Passed / Failed
R5-E3 direct-empty desktop：Passed / Failed
R5-E3 transition-to-empty phone：Passed / Failed
R5-E3 direct-empty phone：Passed / Failed
Return to Shop：Passed / Failed
Undo during transition：Passed / Failed
Non-empty Cart smoke check：Passed / Failed
Original Cart restored：Yes / No
```

Do not begin R5-E4 until R5-E3 is explicitly accepted.
