# Step 4E-B2-R5-B2 · Mobile Remove Black Glyph Visibility Correction

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-B canonical replacement：Applied exactly.
R5-B1 shell contrast correction：Visually applied.
R5-B1 result：white circular shell is visible, but the × glyph remains too weak / effectively invisible.
R5-B final acceptance：Not passed.
Current executable step：R5-B2 bounded in-place pseudo-element replacement.
Historical Cart CSS deletion：Forbidden.
Cart page status：Not done.
```

## 1. Screenshot conclusion

The mobile screenshot confirms:

```text
- only one remove-control shell remains
- the duplicate-× defect is gone
- the 32 × 32px circular shell is separated from the product-card background
- the × glyph itself is still not clearly visible
```

The previous declaration already used `#1f1916`, which is near-black. The remaining problem is therefore not merely the color token; it is the glyph rendering and inherited text treatment. The correction must force a pure-black fill, full visibility, a heavier system glyph and a full-size centered pseudo-element.

## 2. Execution policy

```text
- edit assets/css/spatial-flow.css only
- do not append a new Cart patch
- do not add FIX4
- replace the existing `a.remove::after` rule inside the canonical phone media query
- do not alter the surrounding shell rule
- do not modify PHP, JavaScript, templates, version, Cart Notice or historical Cart CSS
```

## 3. Expected current baseline

This operation assumes R5-B1 was applied exactly:

```text
Complete CSS size: 811,839 bytes
Logical lines: 27,089
SHA256: 08f399cb3036768a9b00089ddd5be4067432ca37af533ef81148ccf8eb85c709
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
```

If the local file does not match this state, upload the current CSS before editing.

## 4. Exact in-place replacement

Search for this complete block. It must occur once inside the canonical `@media (max-width: 767px)` section:

```css
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

Replace it with:

```css
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

Reference position in the expected R5-B1 baseline:

```text
START selector：approximately line 26,530
END selector closing brace：approximately line 26,540
```

The selector and complete declarations are authoritative, not the line numbers.

## 5. Expected result

```text
Complete CSS size: 812,142 bytes
Logical lines: 27,098
SHA256: de6ddce6c42cf9fc50fb583caa3d3f5ea46931f75f4d805cdf74ab158f61196d
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
Delta from R5-B1: +303 bytes / +9 lines

Corrected canonical block size: 45,019 bytes
Corrected canonical block SHA256: ae5fc6a908c099753711afccfb0a6d91a466c1a08de580169757ed92886487a1
```

## 6. Visual acceptance

At phone width:

```text
- exactly one × remains
- the × is pure black and immediately legible
- the glyph is centered inside the 32 × 32px white circle
- no oval stretching
- no product-title collision
- no horizontal overflow
```

Desktop must remain unchanged because the replacement remains inside the phone-only media query.

## 7. Functional gate

After force-refresh:

```text
1. tap one remove control
2. confirm the product is removed
3. use Undo / Restore and confirm it returns
4. confirm all remaining controls still show one black ×
```

Upload the edited CSS and one phone screenshot with at least two remove controls. Do not begin R5-C until R5-B2 and the remaining strict R5-B visual gate pass.