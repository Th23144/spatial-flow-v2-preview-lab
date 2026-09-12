# Project 2 · Step 4D-REOPEN · Combined Product Attributes + Tablet Gallery implementation delta · 2026-09-12

## User-confirmed execution state

The user explicitly confirmed that none of the previously proposed Product Attributes or tablet Gallery fixes have been applied yet.

Current live/source baseline remains:

```text
functions.php child version: 2.7.45
Product Attributes <=767px: 1-column list
Gallery <=1024px historical image rule: height: min(76vw, 640px); min-height: 460px
```

No previous proposed 2.7.46 edit exists yet.

## Fresh source confirmation

Current uploaded `functions.php` confirms:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.45' );
```

Current uploaded `assets/css/spatial-flow.css` confirms both unresolved rules:

```css
@media (max-width: 767px) {
  .single-product .sf-product-v2-attributes__grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  ...
}
```

and:

```css
@media (max-width: 1024px) {
  .single-product .sf-product-gallery__main img {
    height: min(76vw, 640px);
    min-height: 460px;
  }
}
```

## Combined bounded correction

Only these two visual defects are authorized in this batch.

### A. Product Attributes mobile reference alignment

At <=767px, keep the accepted flat editorial band but restore the reference two-column tablet/mobile composition rather than the current 1 x 4 separator list.

Target:

```css
.single-product .sf-product-v2-attributes__grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
```

Remove the mobile-only per-card top separator/padding treatment so the four fields read as a clean 2 x 2 editorial grid.

### B. Gallery 768-1024 image fill regression

Remove the historical capped image-height rule that forces the image to stop at 640px while the 4:5 gallery container continues below it.

Within the existing <=1024px block, the Gallery image must return to full container fill:

```css
.single-product .sf-product-gallery__main img {
  width: 100% !important;
  height: 100% !important;
  min-height: 0;
  max-height: none;
  object-fit: cover;
  object-position: center center;
}
```

The accepted 4:5 gallery container remains authoritative. Do not change aspect ratio, thumbnail behavior, summary stacking, or Gallery JS.

### C. Cache/version bump

After the two CSS corrections, bump:

```text
2.7.45 -> 2.7.46
```

once only.

## Files authorized

```text
assets/css/spatial-flow.css
functions.php
```

## Files explicitly not authorized

```text
woocommerce/single-product.php
assets/js/spatial-flow.js
checkout files
Cart / Checkout / Thank You files
```

## Verification order

1. user performs the two bounded CSS replacements and one version bump;
2. return full `functions.php` and `assets/css/spatial-flow.css`;
3. source gate before runtime testing;
4. runtime test 1024px/iPad-class Gallery fill;
5. runtime test 390px Product Attributes 2 x 2;
6. only after PASS resume Section 01 / Section 02 historical-pass back-audit.

## Current stop point

```text
AWAITING USER MANUAL EDIT AGAINST 2.7.45 BASELINE
```
