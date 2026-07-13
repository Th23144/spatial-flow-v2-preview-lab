# Step 4E-B2-R5-B4 · Mobile Remove Icon Ownership Correction

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-B3 diagnosis：Complete.
Root cause：Astra-injected span and canonical ::after occupy separate grid tracks.
R5-B4 instructions：Issued.
Historical Cart CSS deletion：Forbidden.
Cart page status：Not done.
```

## Execution policy

```text
- edit assets/css/spatial-flow.css only
- replace one existing bounded block inside the canonical phone media query
- do not append a new patch
- do not modify PHP, JavaScript, templates, version or Cart Notice
- do not delete historical Cart CSS in this step
```

## Expected current local baseline

This operation assumes R5-B1 and R5-B2 were applied exactly:

```text
Size: 812,142 bytes
Logical lines: 27,098
SHA256: de6ddce6c42cf9fc50fb583caa3d3f5ea46931f75f4d805cdf74ab158f61196d
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
```

## Exact current block to replace

Search for the complete block beginning with:

```css
  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove {
```

and ending with the complete closing brace of:

```css
  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove::after {
```

The exact current block is:

```css
  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove {
    display: grid !important;
    place-items: center !important;
    width: 32px !important;
    min-width: 32px !important;
    max-width: 32px !important;
    height: 32px !important;
    min-height: 32px !important;
    max-height: 32px !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    border: 1px solid rgba(31, 25, 22, .32) !important;
    border-radius: 50% !important;
    background: #fffdfa !important;
    color: transparent !important;
    box-shadow: 0 4px 12px rgba(31, 25, 22, .10) !important;
    font-size: 0 !important;
    line-height: 0 !important;
    text-indent: 0 !important;
    text-shadow: none !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove::before {
    display: none !important;
    content: none !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove::after {
    display: grid !important;
    place-items: center !important;
    position: relative !important;
    z-index: 1 !important;
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
  }
```

It must occur once.

## Replace with

```css
  body.woocommerce-cart form.woocommerce-cart-form table.shop_table tr.woocommerce-cart-form__cart-item td.product-remove a.remove {
    display: grid !important;
    place-items: center !important;
    position: relative !important;
    isolation: isolate !important;
    width: 32px !important;
    min-width: 32px !important;
    max-width: 32px !important;
    height: 32px !important;
    min-height: 32px !important;
    max-height: 32px !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    border: 1px solid rgba(31, 25, 22, .32) !important;
    border-radius: 50% !important;
    background: #fffdfa !important;
    color: transparent !important;
    box-shadow: 0 4px 12px rgba(31, 25, 22, .10) !important;
    font-size: 0 !important;
    line-height: 0 !important;
    text-indent: 0 !important;
    text-shadow: none !important;
  }

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

## Expected result

```text
Complete CSS size: 812,644 bytes
Logical lines: 27,112
SHA256: 0039bb9fa3ed963e81aa998ef739f78700c1e1398498a8aa8213a4f775bbe32a
Braces: 4,075 / 4,075
Comments: 413 / 413
CSS parser errors: 0
Delta from R5-B2: +502 bytes / +14 lines
```

The predicted complete stylesheet was generated from the exact R5-B2 state and parsed with zero CSS errors.

## Visual gate

After force-refresh at phone width:

```text
- each remove control shows exactly one black ×
- the glyph is centered inside the white 32 × 32px circle
- the glyph remains visible after the page finishes loading
- no double glyph
- no oval stretching
- no product-title collision
- no horizontal overflow
```

## Functional gate

```text
1. tap one remove control
2. confirm the product is removed
3. use Undo / Restore
4. confirm the product returns
5. confirm all remaining controls still show one persistent black ×
```

Upload the edited `spatial-flow.css` and one phone screenshot containing at least two remove controls. Do not begin R5-C until this correction and the remaining strict R5-B gate pass.