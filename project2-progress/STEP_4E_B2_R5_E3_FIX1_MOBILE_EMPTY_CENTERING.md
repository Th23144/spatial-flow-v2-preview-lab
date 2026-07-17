# Step 4E-B2-R5-E3-FIX1 · Mobile Empty-Cart Centering

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E2 synchronized live counts：Passed / closed.
R5-E3 desktop transition-to-empty：Passed.
R5-E3 desktop direct-empty：Passed.
R5-E3 phone wrapper/state parity：Passed.
R5-E3-FIX1 manual CSS artifact：Passed exact pre-deploy validation.
Current executable step：Deploy spatial-flow(21).css and run phone runtime validation.
Cart page status：Not done.
```

Pre-deploy record:

```text
project2-progress/STEP_4E_B2_R5_E3_FIX1_PRE_DEPLOY_VALIDATION.md
```

## User evidence before FIX1

Two phone screenshots confirmed:

```text
- both empty-Cart states use the same full-width wrapper
- the previous fake right column is gone
- Return to Shop is centered and usable
- BAG (0), Undo and Footer remain normal
- only “Your cart is currently empty.” remained left-aligned on phone
```

## Scope

Modified only:

```text
assets/css/spatial-flow.css
```

Not modified:

```text
functions.php
assets/js/spatial-flow.js
header.php
WooCommerce templates
Customizer values
version 2.7.8
Cart Notice block
Desktop empty-Cart rules
R5-E4 geometry/spacing rules
```

## Accepted artifact

```text
Uploaded name: spatial-flow(21).css
Size: 695,511 bytes
Logical lines: 23,311
SHA256: d36326b8efac681ad6b9e3d31af63fe60221527fac26dee344803b3cd5fa6aee
Braces: 3,620 / 3,620
Comments: 340 / 340
CSS parser errors: 0
Target mobile centering block occurrences: 1
```

## Exact accepted diff

Compared with accepted `spatial-flow(20).css`, only this mobile rule was added inside the existing Canonical Cart phone media query:

```css
  body.woocommerce-cart .cart-empty,
  body.woocommerce-cart .return-to-shop {
    text-align: center !important;
  }
```

No other CSS difference is accepted by this gate.

## Why this is bounded

The wrapper and grid-span problem was already fixed. This rule only corrects inherited phone text alignment while preserving:

```text
- native WooCommerce markup
- desktop behavior
- transition/direct state parity
- Undo behavior
- Return to Shop link
- non-empty Cart layout
```

## Runtime validation after deployment

Check only phone:

```text
1. Remove the final item without refreshing.
2. Confirm the empty message is horizontally centered.
3. Confirm Undo still works.
4. Empty the Cart again and open/refresh the already-empty Cart directly.
5. Confirm the empty message is horizontally centered in the same position.
6. Confirm Return to Shop remains centered and usable.
7. Re-add the original product and confirm non-empty Cart remains normal.
```

Do not begin R5-E4 until R5-E3-FIX1 runtime validation is explicitly accepted.