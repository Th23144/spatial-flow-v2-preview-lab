# Step 4E-B2-R5-B1 · Mobile Remove Control Contrast Correction

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-B canonical in-place replacement：Applied exactly.
Desktop structural result：Stable.
Mobile structural result：Stable.
New blocking defect：the single mobile × is present but visually merges into the product-card background.
R5-B final acceptance：Not passed.
Current executable step：R5-B1 bounded in-place declaration replacement.
Historical Cart CSS deletion：Forbidden.
Cart page status：Not done.
```

## 1. Uploaded CSS validation

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(11).css
Size: 811,826 bytes
Logical lines: 27,089
Physical line positions including final empty line: 27,090
SHA256: 11e4c7b25cdf4c8beaf420dc4b5da1b0801a611679d4f85019bb1228d17d0b1e
Opening / closing braces: 4,074 / 4,074
Opening / closing comments: 413 / 413
CSS parser errors: 0
Canonical START / END: 1 / 1
Old R2 START / END: 0 / 0
FIX1 / FIX2 / FIX3 markers: 0
```

The canonical block inside the uploaded CSS is byte-identical to the supplied 44,703-byte artifact:

```text
Canonical block SHA256: 4ea330724a30edfd5801ff7e22d4756ba06955210fe7bc7f325ce9dcec79111b
```

The one-byte complete-file difference from the earlier theoretical result is only final-newline state. It is not code drift.

## 2. Root cause

The canonical phone rule successfully removes the duplicate native glyph and draws one controlled `×` with `::after`.

However, the button shell currently uses:

```css
background: transparent !important;
border: 1px solid var(--sf-cart-border) !important;
box-shadow: none !important;
```

The product card is also a very light paper tone. At phone scale the transparent shell, 12% border and 300-weight 18px glyph have insufficient visual separation, so the single `×` appears to merge into the card.

This is not the former double-× bug. It is a contrast and affordance defect inside the new canonical block.

## 3. Execution policy

```text
- edit assets/css/spatial-flow.css only
- do not append a new Cart patch
- do not add FIX4
- replace the existing mobile remove-control declarations inside the canonical block
- do not change PHP, JavaScript, templates, version, Cart Notice or historical Cart CSS
```

## 4. Exact in-place replacement

Search for this complete current block. It must occur once inside the `@media (max-width: 767px)` section of the canonical block:

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
    border: 1px solid var(--sf-cart-border) !important;
    border-radius: 50% !important;
    background: transparent !important;
    color: transparent !important;
    box-shadow: none !important;
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
    display: block !important;
    content: "×" !important;
    color: var(--sf-cart-ink) !important;
    font-family: "Inter", sans-serif !important;
    font-size: 18px !important;
    font-weight: 300 !important;
    line-height: 1 !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
  }
```

Replace the complete block with:

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
    display: block !important;
    content: "×" !important;
    color: #1f1916 !important;
    font-family: "Inter", sans-serif !important;
    font-size: 19px !important;
    font-weight: 500 !important;
    line-height: 1 !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
  }
```

Reference line positions in the uploaded baseline:

```text
START selector：approximately line 26,502
END selector closing brace：approximately line 26,540
```

The selectors, not the line numbers, are authoritative.

## 5. Expected result

```text
Complete CSS size: 811,839 bytes
Logical lines: 27,089
SHA256: 08f399cb3036768a9b00089ddd5be4067432ca37af533ef81148ccf8eb85c709
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
Delta: +13 bytes / 0 lines

Corrected canonical block size: 44,716 bytes
Corrected canonical block SHA256: 9a81a3adc2bbdfe2d56d1b6982e6da42ec292671525d7c784fde9de8645e7593
```

## 6. Visual acceptance

On phone widths:

```text
- exactly one × remains
- the × is clearly dark and legible
- the shell is visibly separated from the paper product card
- the control remains 32 × 32px
- no oval stretching
- no product-title collision
- no horizontal overflow
```

Desktop presentation must not change because the replaced declarations remain inside the phone-only media query.

## 7. Functional gate

After force-refresh:

```text
1. tap one remove control
2. confirm the product is removed
3. use Undo / Restore and confirm it returns
4. confirm the remaining remove controls still show one visible ×
```

Upload the edited CSS and one phone screenshot containing at least two remove controls. Do not begin R5-C until R5-B1 and the remaining strict R5-B visual gate pass.