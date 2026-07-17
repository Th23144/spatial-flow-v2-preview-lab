# Step 4E-B2-R5-E3-FIX1 · Mobile Empty-Cart Centering

Last updated: 2026-07-15  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E2 synchronized live counts：Passed / closed.
R5-E3 desktop transition-to-empty：Passed.
R5-E3 desktop direct-empty：Passed.
R5-E3 phone transition-to-empty：Failed only on horizontal text alignment.
R5-E3 phone direct-empty：Failed only on horizontal text alignment.
Return to Shop：Passed.
Undo during transition：Passed.
Non-empty Cart smoke regression：Passed.
Current executable step：R5-E3-FIX1 mobile-only centering correction.
Cart page status：Not done.
```

## User evidence

Two phone screenshots confirm:

```text
- both empty-Cart states now use the same full-width wrapper
- the previous fake right column is gone
- Return to Shop is centered and usable
- BAG (0), Undo and Footer remain normal
- only “Your cart is currently empty.” remains left-aligned on phone
```

Therefore the R5-E3 wrapper/state fix is structurally successful, but R5-E3 cannot close until the phone message alignment is centered.

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
Desktop empty-Cart rules
R5-E4 geometry/spacing rules
```

## Current exact baseline

```text
Uploaded/server artifact: spatial-flow(20).css
Size: 695,392 bytes
Logical lines: 23,306
SHA256: 19701ba3ee9944784939bef50dc94d81ccefba46e4df6be279edabc3c03c22e8
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

## Exact in-place edit

Inside the existing Canonical Cart phone block:

```css
@media (max-width: 767px) {
```

find this exact sequence once:

```css
  body.woocommerce-cart .sf-cart-v2-heading__count {
    font-size: 9px !important;
    letter-spacing: .18em !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form tr.woocommerce-cart-form__cart-item,
```

replace it with:

```css
  body.woocommerce-cart .sf-cart-v2-heading__count {
    font-size: 9px !important;
    letter-spacing: .18em !important;
  }

  body.woocommerce-cart .cart-empty,
  body.woocommerce-cart .return-to-shop {
    text-align: center !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form tr.woocommerce-cart-form__cart-item,
```

This is an in-place mobile rule inside the existing Canonical Cart owner. It is not a late appended patch.

## Expected file result

```text
Size: 695,511 bytes
Logical lines: 23,311
SHA256: d36326b8efac681ad6b9e3d31af63fe60221527fac26dee344803b3cd5fa6aee
Braces: 3,620 / 3,620
Comments: 340 / 340
CSS parser errors: 0
```

## Why this is the correct fix

The wrapper and grid-span problem is already fixed. The remaining defect is only inherited text alignment on phone. Centering the native `.cart-empty` message and its `.return-to-shop` companion inside the existing mobile owner preserves:

```text
- native WooCommerce markup
- desktop behavior
- transition/direct state parity
- Undo behavior
- Return to Shop link
- non-empty Cart layout
```

## Validation after deployment

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

Do not begin R5-E4 until R5-E3-FIX1 is explicitly accepted.
