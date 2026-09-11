# Project 2 · Step 4D-REOPEN · Hero Gallery 4-thumb navigation approved implementation · 2026-09-11

## Current stage

Single Product historical-PASS back-audit · Hero / Summary correction.

## User decision

The user reviewed the standalone HTML interaction preview and explicitly approved this Gallery direction:

```text
remove visible prev/next controls from the large image
→ keep the large image visually quiet
→ thumbnails remain the primary visible navigation
→ thumbnail viewport shows exactly 4 thumbnails at a time
→ if total images <= 4, thumbnail navigation arrows are hidden
→ if total images > 4, subtle prev/next controls appear beside the thumbnail viewport
→ moving the thumbnail viewport advances by one image at a time
   01 02 03 04
   → 02 03 04 05
   → 03 04 05 06
→ clicking a thumbnail switches the large image
```

This is an intentional functional enhancement over the static reference because the production catalog may contain more than four product images. It is not a strict-1:1 defect when implemented within the approved quiet editorial visual language.

## Important correction to previous source map

The prior Gallery source-map note said a JavaScript rewrite was not expected if the large-image counter/arrows were simply removed.

That statement is superseded by this user decision.

The approved 4-thumbnail sliding viewport DOES require a bounded `setupProductGallery()` update so the thumbnail-window arrows can move the visible thumbnail start position and keep the selected thumbnail visible.

Therefore the authorized files are now:

```text
woocommerce/single-product.php
assets/css/spatial-flow.css
assets/js/spatial-flow.js
functions.php (version/cache bump only)
```

## Protected behavior

Must preserve:
- WooCommerce gallery image ownership;
- current real main-image switching;
- current variation-image clearing behavior when a normal gallery thumbnail is selected;
- real image alt text;
- active thumbnail state;
- desktop 4:5 main-image geometry;
- no fabricated gallery images;
- no changes to price, variations, Add to Cart, Wishlist, Share, Trust Strip, Product Attributes or later page sections.

## Hero metadata ownership correction in same bounded batch

The back-audit also confirmed Hero public identity must follow the later accepted ownership rule:

```text
WooCommerce SKU = inventory / operations only
_sf_piece_reference = public Spatial Flow Reference / Piece Code
```

The Hero metadata line must stop exposing native WooCommerce SKU as the public editorial identifier. Use `_sf_piece_reference`; omit the segment when empty. Category and Edition behavior otherwise remain dynamic and truthful.

## Gallery visual target

Large image:
- no `1 / N` counter;
- no visible round prev/next buttons;
- optional restrained bottom-right `Click thumb to view` hint when multiple images exist;
- no hardcoded sample badge/content.

Thumbnail rail:
- exactly four visible thumbnail slots;
- `01`, `02`, `03`, `04` etc. overlay numbers derived from real thumbnail order;
- current active thumbnail has the accepted outline treatment;
- subtle left/right rail controls only when image count > 4;
- controls disable at the beginning/end of the rail; no looping thumbnail viewport;
- selecting a hidden thumbnail programmatically shifts the rail enough to keep the active thumbnail visible.

## Mobile boundary

The first implementation gate is desktop + 390px behavior.

For this batch:
- keep the same 4-thumbnail viewport concept on mobile;
- do not require swipe gesture implementation yet unless runtime acceptance shows the arrow controls are insufficient or awkward;
- no horizontal page overflow is allowed.

## Current source baselines used for edit planning

Latest returned/uploaded production owners available in the current project context:
- `functions.php` child version `2.7.44`;
- `woocommerce/single-product.php` includes the accepted `_sf_piece_reference` Related Products ownership and still contains current Gallery `1 / N` + large-image arrow markup;
- `spatial-flow.css` current scoped Single Product Gallery rules still style the large-image counter/arrows and a 4-column thumbnail grid;
- latest available `spatial-flow.js` owner still uses the existing `setupProductGallery()` implementation with thumbnail click + optional counter / prev / next large-image navigation.

## Current stop point

```text
APPROVED IMPLEMENTATION DELTA RECORDED
→ issue bounded manual-edit instructions with original indentation
→ user returns all four modified files
→ source diff/syntax audit before browser testing
```

## Acceptance gate

After source PASS:
1. test current 4-image product: no thumbnail arrows should show; all 4 thumbnails visible; large-image counter/arrows gone; thumbnail switching still works;
2. test a temporary product state with >4 real gallery images: only 4 thumbnails visible; rail arrows appear; each click moves by one; active image/thumb stay synchronized;
3. desktop visual compare against approved preview/reference language;
4. 390px mobile no overflow / no broken rail / direct thumbnail selection works;
5. verify Hero metadata uses Reference / Piece Code rather than Woo SKU.

No Hero / Summary closure until these runtime gates pass.