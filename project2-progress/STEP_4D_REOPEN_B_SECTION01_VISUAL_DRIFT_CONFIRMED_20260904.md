# Step 4D Reopen B · Section 01 current-live visual drift confirmed · 2026-09-04

## Trigger
User supplied a reference screenshot from `preview/spatial-flow-product-v1.html` and a current-live screenshot from a product that actually contains WooCommerce long-description content, so Section 01 is visible.

## User finding
The current `Section · 01 / The Piece, Slowly.` treatment is visually far from the reference. This is not a hidden/missing-content issue on this product; it is a presentational drift/1:1 mismatch.

## Source confirmation
Current template still uses real WooCommerce product long description (`post_content` -> `the_content`) and conditionally renders Section 01 only when content is non-empty. Keep that ownership.

Current canonical CSS owner is the scoped block:

`/* === Step 4D-1-F The Piece Editorial Section START === */`

Key current layout/style choices include:
- 5fr / 7fr grid;
- oversized left heading treatment;
- stacked meta rows using Reference / Category / Material / Placement;
- current body width/weight/line-height/drop-cap treatment;
- responsive rules under 1024px / 767px.

## Visual mismatch classification
Reference vs current-live differs materially in:
- section proportions and left/right column balance;
- left heading scale and wrap behavior;
- metadata composition and density;
- body copy typography and apparent weight;
- body column width and vertical rhythm;
- drop-cap scale/placement relationship to the first paragraph;
- amount/distribution of whitespace;
- reference-like editorial quotation/divider rhythm is not naturally reproduced by ordinary current product content.

## Decision
Section 01 is now a required remediation item, not merely a historically passed block.

Protected:
- real WooCommerce long-description ownership;
- conditional hide when no long description exists;
- semantic content/body output;
- no fabricated product copy.

To change:
- visual structure and canonical scoped CSS only as needed to align much more closely to the reference;
- metadata presentation may be adjusted while keeping dynamic data.

## Execution order
Continue with bounded Single Product batches. B1 remains first (Options/Add-to-Cart visual surface + Wishlist + Share). Section 01 visual remediation remains an explicit B3 acceptance gate and cannot be skipped during final closure.
