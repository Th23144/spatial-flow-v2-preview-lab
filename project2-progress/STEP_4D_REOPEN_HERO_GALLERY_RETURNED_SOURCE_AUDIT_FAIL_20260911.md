# Project 2 · Step 4D-REOPEN · Hero Gallery returned-source audit FAIL · 2026-09-11

## Current stage

Returned-source audit for the approved Hero Gallery 4-thumbnail viewport + Hero Reference ownership batch.

## Returned file identities

### `functions.php`
- bytes: `622810`
- logical lines: `11895`
- SHA256: `e7f404a2d9c06576d3b9a6e4889e2351bc488e831df57f33471d0c7b9cc4e8f8`
- child version: `2.7.45`
- PHP syntax: PASS
- diff against previous accepted live baseline `functions(20260911-193258).php`: exactly one line, `2.7.44 -> 2.7.45`
- status: PASS

### `woocommerce/single-product.php`
- bytes: `41182`
- logical lines: `821`
- SHA256: `515c716c4930f9c6fbdd32242259454f0f98fee7d3b1fbaf4d8041d7e93514db`
- PHP syntax: PASS
- diff against previous accepted live baseline `single-product(20260911-192900).php`: bounded Hero metadata + Gallery markup only
- native Woo SKU is no longer used in Hero (`get_sku()` count in returned template: 0)
- `_sf_piece_reference` now owns the public Hero identifier
- old visible `sf-gallery-counter` / `sf-gallery-arrow` markup is removed
- new gallery hint, four-thumb viewport, optional >4 navigation controls and 01/02/... thumbnail labels are present
- status: PASS

### `assets/css/spatial-flow.css`
- bytes: `604900`
- logical lines: `21418`
- SHA256: `61d3a22c8bf70e85c62642284456d25412c48cc3e225f70ef2ac5433ea89985d`
- braces: `3361 / 3361`
- comments: `280 / 280`
- tinycss2 top-level parse errors: `0`
- intended Gallery CSS replacement is structurally valid
- status: FAIL on cascade semantics

### `assets/js/spatial-flow.js`
- bytes: `85062`
- logical lines: `2484`
- SHA256: `fe358a0b325bd6d1f7ee592725014fa4f34d8f78d3e0c63572bfa2d34e69fff5`
- `node --check`: PASS
- new `setupProductGallery()` implements fixed `visibleThumbs = 4`, one-step rail navigation and selected-thumbnail visibility
- status: FAIL on variation reset integration

## Why the source gate FAILS

### 1. Stale later CSS overrides the new flex thumbnail rail

The new Gallery block correctly defines:

```css
.single-product .sf-product-gallery__thumbs {
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 0;
  ...
}
```

However later historical Single Product rules still target the same selector.

Desktop `@media (min-width: 1025px)` later in the file contains:

```css
.single-product .sf-product-gallery__thumbs {
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  gap: 10px !important;
  padding-top: 12px !important;
}
```

The obsolete `grid-template-columns` is inert under flex, but `padding-top: 12px !important` overrides the new `padding: 0` and doubles the intended thumbnail vertical spacing because the new shell already owns `margin-top: 12px`.

A later mobile rule also sets `gap: 8px`, while the new flex-basis formula is calculated for three 10px gaps (`calc((100% - 30px) / 4)`). This creates a source-level mismatch in the fixed four-thumb geometry.

Therefore browser runtime testing now would test a known cascade conflict rather than the intended candidate.

### 2. Variation reset can leave the active first thumbnail outside the visible rail window

The new `setupProductGallery()` keeps `thumbStart` in a closure and correctly scrolls the rail when normal thumbnails are clicked.

But existing `resetVariationGallery(form)` remains outside that closure and still manually activates image/thumb 0 without notifying the new gallery rail state.

Failure scenario:

```text
user browses to image 5+
→ thumbStart moves beyond 0
→ a variation image is shown
→ Woo reset_data runs resetVariationGallery()
→ image 01 / thumb 01 becomes active
→ thumbnail rail can remain translated to a later window
→ the active thumb can be hidden outside the visible 4-thumb viewport
→ the next rail-arrow action starts from stale closure state
```

This is a semantic integration defect introduced by moving from an always-visible thumbnail list to a translated fixed viewport.

The stale `data-sf-gallery-counter` lookups in variation functions are harmless no-ops because the counter markup no longer exists; they are not the failure reason.

## What passed and must NOT be redone

- `functions.php` version bump is correct.
- Hero Reference / Piece Code ownership is correct.
- returned PHP syntax is clean.
- Gallery markup removal of large-image arrows/counter is correct.
- new thumbnail-window markup is correct.
- CSS parser/brace/comment integrity is clean.
- JS syntax is clean.
- no runtime/browser acceptance is authorized yet.

## User acceptance status

The user approved the visual/product direction, but this returned implementation has NOT passed the source gate because the two integration defects above were found before runtime.

## Current stop point

```text
HERO GALLERY SOURCE GATE: FAIL
RUNTIME TESTING: NOT AUTHORIZED
CORRECTION REQUIRED: CSS CASCADE + VARIATION RESET RAIL STATE
```

## Exact next action

Issue a bounded correction affecting only:

```text
assets/css/spatial-flow.css
assets/js/spatial-flow.js
```

Do not change `functions.php` or `woocommerce/single-product.php` again unless the correction audit finds a new source defect.
