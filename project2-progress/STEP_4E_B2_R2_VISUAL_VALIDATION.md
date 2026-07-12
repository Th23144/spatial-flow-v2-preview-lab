# Step 4E-B2-R2 · File + Desktop Visual Validation

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R2 insertion present：Yes.
Original CSS deletion：No.
CSS syntax/balance：Passed.
Desktop browser result：Failed / correction required.
Rollback required：No.
Next executable step：Step 4E-B2-R2-FIX1.
Cart page status：Not done.
```

## Uploaded file validated

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(7).css
Size: 800,567 bytes
Lines: 26,829
SHA256: fd1a0a43364070b04818e140572ac5447201d0b58476f234b0d329157c687864
Opening braces: 4,063
Closing braces: 4,063
Opening comments: 399
Closing comments: 399
CSS parser errors: 0
R2 START markers: 1
R2 END markers: 1
Cart Notice START markers: 1
```

Comparison with the accepted restored baseline:

```text
Accepted baseline: spatial-flow(6).css
Baseline size: 767,120 bytes
Baseline SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Original bytes removed: 0
Only one insertion occurred before the existing Cart Notice marker.
Inserted range including separator: 33,447 bytes / 1,084 newline characters.
```

The file does not match the earlier theoretical size/hash exactly, but it is structurally valid and the browser proves the R2 layer is loading. The visual failure below is not caused by a brace, comment, parser, or accidental deletion error.

## Desktop evidence

The screenshot shows that the new layer is active:

```text
- native Cart title is suppressed
- Your Bag and live count render
- product rows use the new editorial structure
- Order Summary uses the new neutral panel
- Continue Shopping is present
- four real recommendation cards remain
- Header and Footer remain intact
```

However, B2-R2 cannot pass because:

```text
1. The Cart body remains constrained to the left portion of the desktop viewport.
2. Product rows are compressed because the 7fr / 5fr grid is being calculated inside a still-constrained Astra article/content parent.
3. The recommendation section retains the old dark rounded container.
4. The new dark text is being rendered over that retained dark container, making the heading/card copy low contrast or invisible.
```

## Root cause

### Outer width

The R2 layer released `.site-content .ast-container`, but did not explicitly release the remaining Astra chain:

```text
#primary / .content-area
.site-main
article.ast-article-single
.entry-content
```

Therefore the 1440px Cart wrapper is still limited by a narrower ancestor.

### Recommendation specificity

Historical selectors such as:

```css
body.woocommerce-cart .sf-cart-next-steps.sf-cart-next-steps--products
body.woocommerce-cart .sf-cart-next-card.sf-cart-next-card--product
body.woocommerce-cart .sf-cart-next-steps--real .sf-cart-next-card__price
```

have higher specificity than several R2 replacement selectors. Both sides use `!important`, so the older high-specificity dark-shell rules continue winning even though R2 appears later in source order.

## Decision

Do not roll back R2. Native controls remain present and the failure is localized to two CSS ownership gaps. Apply one small, independently reversible FIX1 inside the R2 range.

Authoritative FIX1 record:

```text
project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md
```
