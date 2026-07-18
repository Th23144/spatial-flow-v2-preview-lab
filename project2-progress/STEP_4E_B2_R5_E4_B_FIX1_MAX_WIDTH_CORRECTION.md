# Step 4E-B2-R5-E4-B-FIX1 · Cart Max-Width Correction

Last updated: 2026-07-17  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Max-width source locator：Passed.
Manual CSS correction：Ready.
Deployment：Not authorized before exact artifact validation.
Cart page status：Not done.
```

## Baseline

```text
spatial-flow(23).css
Size: 695,962 bytes
Logical lines: 23,331
SHA256: b55c854e959ab42026f93c786e62b0c7e6b56e1cbf5307027b45991d39d90531
Braces: 3,625 / 3,625
Comments: 340 / 340
```

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
phone/mobile rules
empty-Cart rules
Cart Notice block
7fr / 5fr declaration
80px column gap
88px / 120px vertical rhythm
```

## Exact manual edit

Inside the existing R5-E4-B desktop media block, find:

```css
@media (min-width: 1101px) {
  body.woocommerce-cart .entry-content,
  body.woocommerce-cart .entry-content > .woocommerce {
    padding: 0 !important;
  }

  body.woocommerce-cart .sf-cart-v2-heading {
    margin-bottom: 67px !important;
  }

  body.woocommerce-cart .sf-cart-v2-heading__title {
    margin-bottom: 88px !important;
  }
}
```

Replace the entire block with:

```css
@media (min-width: 1101px) {
  body.woocommerce-cart .entry-content,
  body.woocommerce-cart .entry-content > .woocommerce {
    padding: 0 !important;
  }

  body.woocommerce-cart .entry-content > .woocommerce {
    max-width: var(--sf-cart-max) !important;
  }

  body.woocommerce-cart .sf-cart-v2-heading {
    margin-bottom: 67px !important;
  }

  body.woocommerce-cart .sf-cart-v2-heading__title {
    margin-bottom: 88px !important;
  }
}
```

Do not append this correction at the end of the CSS file. Replace the existing R5-E4-B block in place.

## Why this is exact

The source scan proved that active Cart-specific inline-style rules apply:

```css
.woocommerce-cart .woocommerce {
  max-width: 1200px;
}
```

Those rules have no `!important`. The bounded Canonical Cart rule restores the approved 1440px ceiling and allows the existing width formula to resolve correctly:

```css
--sf-cart-max: 1440px;
width: min(var(--sf-cart-max), calc(100% - 96px));
```

Expected at document client width 1300px:

```text
wrapper: 1204px
left/right gutters: 48px / 48px
column gap: 80px
title → count: 88px
count → main row: 120px
```

## Pre-deploy gate

After the manual replacement:

```text
1. save under a new upload name
2. do not replace the server file yet
3. upload it for full-file diff, braces, comments, parser and SHA256 validation
```

No runtime deployment is authorized before that file-level validation.