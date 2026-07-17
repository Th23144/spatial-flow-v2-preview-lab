# Step 4E-B2-R5-E4-B · Strict Geometry Correction

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-A1 measurement：Complete.
R5-E4-A2 ancestor trace：Complete.
R5-E4-B manual CSS correction：Complete.
R5-E4-B exact artifact validation：Passed.
Deployment：Authorized.
Current executable phase：R5-E4-C rendered geometry and visual validation.
Cart page status：Not done.
```

Pre-deploy validation:

```text
project2-progress/STEP_4E_B2_R5_E4_B_PRE_DEPLOY_VALIDATION.md
```

## Scope integrity

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
phone/mobile Cart rules
80px desktop column gap
7fr / 5fr grid declaration
```

## Baseline

```text
spatial-flow(22).css
Size: 695,622 bytes
Logical lines: 23,316
SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
Braces: 3,621 / 3,621
Comments: 340 / 340
```

## Accepted artifact

```text
spatial-flow(23).css
Size: 695,962 bytes
Logical lines: 23,331
SHA256: b55c854e959ab42026f93c786e62b0c7e6b56e1cbf5307027b45991d39d90531
Braces: 3,625 / 3,625
Comments: 340 / 340
CSS parser errors: 0
Line endings: LF
```

Removing the intended inserted media block recovers the exact accepted baseline SHA256. No other CSS difference exists.

## Exact accepted correction

Inside the existing Canonical Cart presentation owner, after the base count rule:

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

## Why these values

### Width

```text
.entry-content padding 20px + 20px：removed above 1100px
.woocommerce grid padding 20px + 20px：removed above 1100px
```

Expected at document client width 1300px:

```text
wrapper outer width: 1204px
left/right outer gutters: 48px / 48px
internal grid width: 1204px
form width: approximately 656px
summary width: approximately 468px
column gap: 80px
```

### Vertical rhythm

```text
Title margin-bottom: 8px → 88px
Heading margin-bottom: 40px → 67px
```

Expected measured result:

```text
title_to_count: approximately 88px
count_to_main_row: approximately 120px
```

The real WooCommerce DOM combines title and count in one wrapper. These values reproduce the approved static rendered distances without changing parent row-gap or copying static markup.

## Corrected structural count

The earlier planning estimate listed `3,624 / 3,624` braces. The exact correct count is:

```text
3,625 / 3,625
```

The inserted media block adds four balanced rule blocks. This was only a planning-document counting error.

## R5-E4-C runtime gate

Deploy `spatial-flow(23).css` as `assets/css/spatial-flow.css`, clear caches, force refresh, and run the same geometry snippet on a non-empty desktop Cart at 100% zoom.

Expected:

```text
wrapper_width: 1204
left_gutter: 48
right_gutter: 48
form_width: approximately 656
summary_width: approximately 468
rendered_column_gap: 80
title_to_count: approximately 88
count_to_main_row: approximately 120
```

Then confirm:

```text
- desktop composition visibly matches the approved static large-whitespace rhythm
- recommendation row uses the wider available frame normally
- no desktop horizontal overflow
- phone non-empty Cart remains normal
- phone direct-empty and transition-to-empty remain centered and identical
```
