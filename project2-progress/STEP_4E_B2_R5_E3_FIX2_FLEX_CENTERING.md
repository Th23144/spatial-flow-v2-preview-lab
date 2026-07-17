# Step 4E-B2-R5-E3-FIX2 · Deterministic Mobile Empty-Cart Centering

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E2 synchronized live counts：Passed / closed.
R5-E3 desktop and wrapper parity：Passed.
R5-E3-FIX1 text-align-only correction：Failed at runtime.
Current executable step：R5-E3-FIX2 deterministic flex centering.
Cart page status：Not done.
```

## Runtime finding

`spatial-flow(21).css` was an exact expected artifact and loaded successfully, but the native phone empty-Cart message remained visually left-aligned.

The uploaded child CSS contains the intended `text-align: center !important` rule once and contains no later child-theme `.cart-empty` text-alignment override. Therefore a text-only alignment rule is insufficient in the real rendered layout. The most likely remaining owner is a parent/theme flex presentation that positions the anonymous text item on the main axis; `text-align` does not move a flex item.

FIX2 makes the mobile `.cart-empty` owner deterministic by explicitly setting its layout mode and main-axis alignment.

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
Uploaded/server artifact: spatial-flow(21).css
Size: 695,511 bytes
Logical lines: 23,311
SHA256: d36326b8efac681ad6b9e3d31af63fe60221527fac26dee344803b3cd5fa6aee
Braces: 3,620 / 3,620
Comments: 340 / 340
CSS parser errors: 0
```

## Exact in-place replacement

Inside the existing Canonical Cart phone media query, find exactly once:

```css
  body.woocommerce-cart .cart-empty,
  body.woocommerce-cart .return-to-shop {
    text-align: center !important;
  }
```

Replace it with:

```css
  body.woocommerce-cart .cart-empty {
    display: flex !important;
    justify-content: center !important;
    text-align: center !important;
  }

  body.woocommerce-cart .return-to-shop {
    text-align: center !important;
  }
```

This replaces FIX1 in place. Do not retain both blocks and do not append another rule at the end of the file.

## Expected file result

```text
Size: 695,622 bytes
Logical lines: 23,316
SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
Braces: 3,621 / 3,621
Comments: 340 / 340
CSS parser errors: 0
```

## Why this is stronger than FIX1

```text
text-align: center
→ centers inline content only inside a normal block formatting context

display: flex + justify-content: center
→ explicitly centers the actual flex item on the horizontal main axis
```

The rule remains phone-only and empty-Cart-only, preserving desktop, native WooCommerce markup, Undo, Return to Shop and non-empty Cart behavior.

## Pre-deploy gate

After editing, upload the changed CSS for exact validation before replacing the server file.

Do not begin R5-E4 until FIX2 runtime validation is explicitly accepted.