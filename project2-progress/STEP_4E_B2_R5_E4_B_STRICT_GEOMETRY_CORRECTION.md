# Step 4E-B2-R5-E4-B · Strict Geometry Correction

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-A1 measurement：Complete.
R5-E4-A2 ancestor trace：Complete.
R5-E4-B manual CSS correction：Ready.
Deployment：Not authorized before exact artifact validation.
Cart page status：Not done.
```

## Scope

Modify only:

```text
assets/css/spatial-flow.css
```

Baseline:

```text
spatial-flow(22).css
Size: 695,622 bytes
Logical lines: 23,316
SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
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
phone/mobile Cart rules
80px desktop column gap
7fr / 5fr grid declaration
```

## Exact insertion anchor

Inside:

```text
/* === Step 4E-B2-R5-B · Canonical Cart Presentation START === */
```

Find this complete count block:

```css
body.woocommerce-cart .sf-cart-v2-heading__count {
  margin: 0 !important;
  color: rgba(31, 25, 22, .62) !important;
  font-family: "JetBrains Mono", ui-monospace, monospace !important;
  font-size: 11px !important;
  line-height: 1.5 !important;
  letter-spacing: .24em !important;
  text-transform: uppercase !important;
}
```

Immediately after its closing brace and before:

```css
body.woocommerce-cart .sf-cart-pro-intro,
body.woocommerce-cart .sf-cart-service-grid {
```

insert exactly:

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

Do not alter the existing base declarations. This bounded desktop-only override is intentionally placed after the base heading declarations so it wins without changing phone behavior.

## Why these values

### Width

```text
.entry-content padding 20px + 20px：removed at widths above 1100px
.woocommerce grid padding 20px + 20px：removed at widths above 1100px
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

The real WooCommerce DOM combines title and count in one wrapper. These values reproduce the approved static rendered distances without changing parent row-gap or copying the static markup.

## Predicted text-file metrics

Assuming the current LF artifact and exact insertion above:

```text
Size: approximately 695,962 bytes
Logical lines: approximately 23,331
Braces: 3,624 / 3,624
Comments: 340 / 340
```

The exact SHA256 and exact byte result must be calculated from the uploaded edited artifact before deployment. Approximate metrics are not deployment authorization.

## Pre-deploy gate

After the manual edit:

```text
1. save the CSS under a new upload name
2. do not replace the server file yet
3. upload it for exact full-file diff, structure and hash validation
```

Only after exact validation may the file be deployed and remeasured.