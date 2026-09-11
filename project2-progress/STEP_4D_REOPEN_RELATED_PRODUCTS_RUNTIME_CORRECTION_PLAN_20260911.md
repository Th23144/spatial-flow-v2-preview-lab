# Project 2 · Step 4D-REOPEN · Related Products runtime correction plan · 2026-09-11

## Context

Fresh runtime screenshots were rejected by the user as not strict 1:1 against `preview/spatial-flow-product-v1.html`.

This audit uses:

- the user's fresh 1920px desktop screenshot;
- the user's fresh 390px-class mobile screenshot;
- the static-reference screenshot;
- the returned `single-product.php`, `spatial-flow.css`, and `functions.php` that already passed the prior source gate.

## Exact desktop geometry diagnosis

The static reference uses:

```css
.related {
  max-width: 1440px;
  margin: 0 auto;
  padding: 96px 56px;
}

.related .products {
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
```

Because the reference uses global `box-sizing: border-box`, the effective four-column content width is:

```text
1440 - 56 - 56 = 1328px
(1328 - 3*40) / 4 = 302px per image/card column
```

Pixel measurement of the supplied static screenshot confirms four 302px image blocks with 40px gaps.

The current live Single Product wrapper is separately widened by the accepted desktop Hero rule:

```css
.single-product .sf-single-product.sf-container {
  width: min(1440px, calc(100% - 112px)) !important;
}
```

The first Related Products correction used `padding: 96px 0`, so the Related Products grid consumed the full 1440px inner width:

```text
(1440 - 3*40) / 4 = 330px per column
```

Pixel measurement of the fresh live screenshot confirms 330px image columns. This is the primary reason the live block still looks materially larger and wider than the static reference.

### Correct bounded fix

Do **not** narrow the whole Single Product wrapper, because that wrapper currently also owns previously accepted Hero/Section 01/02/03 geometry.

Instead make the Related Products section reproduce the static reference's own inner gutters locally:

```text
desktop Related Products horizontal padding = 56px
```

This converts its effective content width from 1440px to the reference 1328px and therefore restores the exact 302px / 40px four-column geometry at the 1920px test width.

## Heading casing diagnosis

The PHP template already emits:

```text
Pieces of a similar weight.
```

but the live screenshot renders:

```text
Pieces Of A Similar Weight.
```

Therefore the capitalization is not coming from the template string. It is inherited / applied by surrounding theme heading styling.

The scoped Related Products heading must explicitly reset:

```css
text-transform: none !important;
```

This is a visual-only correction.

## Metadata / placement rows diagnosis

The template now correctly reads real product-owned values:

```text
WooCommerce SKU
_sf_piece_edition
_sf_placement
```

and conditionally renders:

```text
SKU · Edition
price
placement/editorial note
```

The fresh live screenshot shows only title + price for the related products. Therefore the absent reference rows are a **data-population gap**, not a template omission.

Production must not fabricate static-reference metadata to force the rows to appear.

For any product expected to reproduce the reference composition, its real backend data must be populated:

```text
WooCommerce Product data → Inventory → SKU
WooCommerce Product data → General → Spatial Flow product detail fields → Section 01 · Edition
WooCommerce Product data → General → Spatial Flow product detail fields → Summary · Placement Suggestion
```

The current `_sf_placement` admin label was originally written for the summary block, but the same real product-specific value is intentionally reused by Related Products as the reference-style editorial placement note.

## Mobile geometry

The static reference itself changes Related Products to one column at `max-width: 480px`.

The current one-column mobile direction is therefore structurally valid. However, mobile is not accepted yet because:

- the desktop target is still wrong;
- the metadata/placement rows are absent where product data is empty;
- nested live-container gutters are not identical to the static top-level `.related` implementation, so desktop correction must not blindly add the static 24px mobile gutter on top of the live parent gutter.

For this bounded pass:

```text
Desktop >= 1101px: add 56px internal horizontal Related Products padding.
<=1100px: keep the existing live parent gutter and do not stack another 40px blindly.
<=480px: keep current horizontal padding at 0 inside the already-guttered live parent; preserve one column.
```

A later screenshot can determine whether an 8px mobile compensation is needed to reproduce the static total 24px viewport gutter. Do not guess before measurement.

## Authorized correction delta

1. `spatial-flow.css` only:
   - Related Products desktop padding `96px 0` → `96px 56px`;
   - add `box-sizing: border-box` to the Related Products section;
   - reset heading `text-transform: none !important`;
   - under `max-width: 1100px`, explicitly return horizontal Related Products padding to `0` so the desktop 56px gutter does not stack on the already-guttered live container;
   - keep existing grid breakpoints and all dynamic template logic unchanged.
2. `functions.php` version bump `2.7.42` → `2.7.43` for deterministic CSS cache refresh.
3. No `single-product.php` edit in this bounded correction.
4. Separately populate real SKU / Edition / Placement data on the specific products used for visual acceptance if those reference rows are required to be visible.

## Status

```text
Related Products prior source gate: PASS
Related Products runtime: REJECTED
Runtime correction audit: COMPLETE
Bounded CSS correction: AUTHORIZED
Product metadata population: REQUIRED FOR FULL REFERENCE ROW ACCEPTANCE
Single Product overall: Not done
```

## Acceptance after correction

Do not close from CSS alone.

Fresh runtime acceptance must verify:

- desktop effective 302px-style four-column scale / 40px rhythm matches the reference at the same test width;
- heading renders `Pieces of a similar weight.` with reference casing;
- real SKU + Edition row appears where real values are populated;
- real Placement Note row appears where `_sf_placement` is populated;
- mobile remains one column without overflow and without over-narrowing from double gutters;
- no fabricated product data.
