# Project 2 · Step 4D-REOPEN · Hero / Summary Gallery source map · 2026-09-11

## Current stage

Hero / Summary strict 1:1 correction planning after fresh screenshot rejection.

## Current source ownership

### Template markup

`woocommerce/single-product.php` currently owns:
- main gallery image markup;
- `1 / N` counter markup via `.sf-gallery-counter` / `data-sf-gallery-counter`;
- previous/next round-button markup via `.sf-gallery-arrow` / `data-sf-gallery-prev|next`;
- thumbnail button markup via `data-sf-gallery-thumb`;
- Hero editorial metadata construction and output.

### CSS

`assets/css/spatial-flow.css` currently owns:
- 4:5 main image geometry;
- counter styling;
- round arrow styling;
- four-column thumbnail grid;
- active thumbnail outline;
- desktop/mobile Summary and cart/trust/attribute layout.

### Gallery JavaScript

`assets/js/spatial-flow.js` owns `setupProductGallery()`.

The current handler:
- switches images from thumbnail clicks;
- updates active thumbnail state;
- optionally updates the counter only when `[data-sf-gallery-counter]` exists;
- optionally binds previous/next buttons only when those nodes exist.

Therefore strict-reference removal of the counter and previous/next markup does NOT require a JavaScript rewrite. Thumbnail switching remains functional because the JS already tolerates missing counter/prev/next nodes.

## Reference target

`preview/spatial-flow-product-v1.html` uses:

```text
main image 4:5
+ top-left editorial badge
+ bottom-right `Click thumb to view` hint
+ 4 thumbnail buttons
+ thumbnail numbers 01 / 02 / 03 / 04
+ active thumbnail outline
```

It does not use the current round arrow controls or `1 / N` counter.

## Hero public-identity ownership

Current Hero still uses native WooCommerce SKU as a public editorial segment.

Later accepted product architecture established:

```text
WooCommerce SKU = inventory / operations
_sf_piece_reference = public Spatial Flow Reference / Piece Code
```

This Hero back-audit must therefore stop exposing native SKU as the public editorial identifier. If `_sf_piece_reference` is empty, omit that segment; never synthesize a fake code from post ID or reference sample data.

## Gallery badge data boundary

The static sample badge `No. 07 · One of one` is content, not merely decoration. It must not be hardcoded onto real products.

For the bounded correction:
- the badge may render only from truthful existing product editorial data;
- `_sf_piece_reference` and `_sf_piece_edition` are the currently available editable candidates;
- exact badge composition must avoid duplicating or inventing values;
- when no suitable truthful badge text exists, hide the badge rather than fabricate `No. 07 · One of one`.

The visual slot/style can still be implemented so real data appears correctly later.

## Bounded implementation direction

Expected source files:

```text
woocommerce/single-product.php
assets/css/spatial-flow.css
functions.php only for child-version/cache bump if required
```

`assets/js/spatial-flow.js` is NOT expected to require editing because its null-safe bindings preserve thumbnail behavior after counter/arrow markup removal.

Planned changes:
1. remove current visible gallery counter and round prev/next markup from the Hero gallery;
2. add reference-style bottom-right `Click thumb to view` hint when multiple images exist;
3. add 01 / 02 / 03 / 04-style thumbnail numbering based on real thumbnail order;
4. preserve active thumbnail outline and thumbnail switching;
5. add a truthful optional top-left editorial badge only when real product editorial metadata supports it;
6. change Hero public metadata from native Woo SKU to `_sf_piece_reference` ownership, with empty-value hiding and no fake fallback;
7. do not alter real price, variation, quantity, Add to Cart, Wishlist, Share, Trust Strip or Product Attributes behavior.

## What is NOT authorized

- no gallery JS rewrite unless returned/current source later proves the handler differs materially from the audited owner;
- no hardcoded `No. 07 · One of one`;
- no forced default variation;
- no changes outside Hero / Summary ownership;
- no Gift CTA / Closing Editor's Note work.

## Current stop point

```text
HERO / SUMMARY BOUNDED IMPLEMENTATION DELTA MUST BE RECORDED BEFORE MANUAL EDIT INSTRUCTIONS
```

## Exact next action

Freeze exact template/CSS delta and version bump against the user's current returned source, then issue one bounded manual-edit batch with original indentation preserved.
