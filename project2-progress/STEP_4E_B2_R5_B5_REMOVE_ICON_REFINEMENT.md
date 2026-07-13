# Step 4E-B2-R5-B5 · Mobile Remove Icon Refinement

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-B4 ownership correction：Passed exactly.
Persistent single remove icon：Passed.
Current visual issue：font glyph is too large and heavy.
R5-B5：Issued as bounded in-place refinement.
Historical Cart CSS deletion：Forbidden.
Cart page status：Not done.
```

## Validated current local baseline

Uploaded file: `spatial-flow(13).css`

```text
Size: 812,644 bytes
Logical lines: 27,112
SHA256: 0039bb9fa3ed963e81aa998ef739f78700c1e1398498a8aa8213a4f775bbe32a
Braces: 4,075 / 4,075
Comments: 413 / 413
CSS parser errors: 0
```

The uploaded file matches the exact predicted R5-B4 state.

## Visual decision

Do not keep refining a text `×` through font-size and font-weight guesses.

The final DOM already contains Astra's native vector close icon:

```html
<span class="ahfb-svg-iconset ast-inline-flex">
  <svg class="ast-mobile-svg ast-close-svg" ...>...</svg>
</span>
```

R5-B5 will use that existing vector as the visible icon and retire the pseudo-element glyph.

Benefits:

```text
- cleaner and more refined silhouette
- no font-family or font-rendering variance
- exact centering inside the 32 × 32px control
- no second generated glyph
- preserves the native WooCommerce link, aria-label and click behavior
- removes unnecessary pseudo-glyph ownership
```

## Execution policy

```text
- edit assets/css/spatial-flow.css only
- replace one bounded icon-owner range inside the existing Canonical Cart block
- do not append a new patch
- do not modify PHP, JavaScript, templates, version or Cart Notice
- do not delete historical Cart CSS in this step
```

## Exact current range to replace

Search for the block beginning with:

```css
  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove > .ahfb-svg-iconset {
```

Select through the closing brace of:

```css
  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove::after {
```

The exact current range is:

```css
  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove > .ahfb-svg-iconset {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
    pointer-events: none !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove::before {
    display: none !important;
    content: none !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove::after {
    display: grid !important;
    place-items: center !important;
    position: absolute !important;
    inset: 0 !important;
    z-index: 2 !important;
    width: 100% !important;
    height: 100% !important;
    content: "×" !important;
    color: #000 !important;
    -webkit-text-fill-color: #000 !important;
    opacity: 1 !important;
    visibility: visible !important;
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 22px !important;
    font-weight: 700 !important;
    line-height: 1 !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
    text-shadow: none !important;
    transform: none !important;
    pointer-events: none !important;
  }
```

It must occur exactly once.

## Replace with

```css
  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove > .ahfb-svg-iconset {
    display: grid !important;
    place-items: center !important;
    position: absolute !important;
    inset: 0 !important;
    z-index: 2 !important;
    width: 100% !important;
    height: 100% !important;
    visibility: visible !important;
    opacity: 1 !important;
    color: rgba(31, 25, 22, .76) !important;
    pointer-events: none !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove > .ahfb-svg-iconset svg {
    display: block !important;
    width: 13px !important;
    height: 13px !important;
    min-width: 13px !important;
    min-height: 13px !important;
    fill: currentColor !important;
    color: inherit !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove::before,
  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove::after {
    display: none !important;
    content: none !important;
  }
```

## Expected result

```text
Complete CSS size: 812,489 bytes
Logical lines: 27,104
SHA256: 53c2efa74e6975912191f0e522f97ce5ec2a8148fc8f808a8c481492d07e5c59
Braces: 4,075 / 4,075
Comments: 413 / 413
CSS parser errors: 0
Delta from R5-B4: -155 bytes / -8 lines
```

The predicted complete stylesheet was generated from the exact uploaded R5-B4 file and parsed with zero CSS errors.

## Visual gate

After force-refresh and final page load:

```text
- each remove control shows one refined vector ×
- icon is approximately 13 × 13px inside the 32 × 32px circle
- icon is dark but softer than pure black
- icon is centered horizontally and vertically
- no pseudo text glyph remains
- no double icon
- no disappearance after load
- no title collision or horizontal overflow
```

## Functional gate

```text
1. tap one remove control
2. confirm the product is removed
3. use Undo / Restore
4. confirm the product returns
5. confirm all remaining controls still show the refined vector icon
```

Upload the edited `spatial-flow.css` and one phone screenshot containing at least two remove controls. Do not begin R5-C until R5-B5 and the remaining strict R5-B visual gate pass.