# Project 2 · Step 4D REOPEN · Related Products strict 1:1 source map + bounded edit delta · 2026-09-11

## Current project stage
Step 4D-REOPEN · Single Product remediation.

## Audit conclusion
Fresh current-conversation source confirms the live Related Products block is structurally different from `preview/spatial-flow-product-v1.html`, not merely visually off.

Current template currently renders:
- `Related product navigation`
- `Complete the room`
- explanatory paragraph
- category label
- title
- price
- persistent `Explore` button

Current CSS renders the items as framed cards with border/background/body padding and fixed-height landscape-ish media.

The static reference instead uses:
- heading `Pieces of a similar weight.` with italic emphasis on `weight`
- `View the full edit →` at the opposite side of the heading row
- four open editorial items on desktop
- 4:5 portrait image area
- no enclosing card border/background
- title below image
- SKU + edition metadata
- dynamic price line
- italic placement/editorial note with a top rule
- `View piece →` revealed over the image on hover
- responsive 4 → 3 → 2 → 1 column behavior at approximately 1100 / 720 / 480 px

## Current data ownership confirmed
The existing Single Product source already has and/or can read the real dynamic owners needed for the reference-like presentation:
- related-product identity/query: existing `spatial_flow_related_products_for_product( $product, 4 )`
- image: WooCommerce product image via existing helper
- title: WooCommerce product name
- permalink: WooCommerce product permalink
- price: WooCommerce `get_price_html()`
- SKU: WooCommerce `get_sku()`
- edition: product meta `_sf_piece_edition`
- placement/editorial note: product meta `_sf_placement`

No fake product content is required.

For related-card display only, if SKU, edition or placement is empty, that row/field must be omitted rather than replaced with fabricated fallback content.

## Legacy CSS finding
Current `spatial-flow.css` still contains older unscoped `.sf-related-products` blocks (`Code Repair 2.4.4` and `Code Repair 3`) in addition to the newer scoped `Step 4D-1-E` block.

Because those older blocks may have broader historical ownership, this bounded edit will NOT delete them yet. Instead, the existing scoped `Step 4D-1-E` block will be replaced in place with a complete `.single-product .sf-related-products ...` canonical rule set that explicitly owns the current Single Product presentation. Final legacy consolidation remains part of the later whole-page CSS cleanup pass.

## Authorized bounded edit
Only these source changes are authorized now:

1. `woocommerce/single-product.php`
   - preserve existing related-product query and four-product limit
   - replace only the Related Products frontend markup
   - restore reference heading and shop link
   - map real WooCommerce/meta fields into SKU/edition/placement presentation
   - remove category label and persistent Explore button from this block
   - do not hardcode product content

2. `assets/css/spatial-flow.css`
   - replace the existing scoped block between
     `/* === Step 4D-1-E Related Products / Complete The Room Visual Polish START === */`
     and its matching END comment
   - new scoped block must recreate the reference open editorial layout and responsive 4→3→2→1 behavior
   - do not append a second competing Single Product related-products patch
   - do not delete the older unscoped repair blocks in this bounded pass

3. `functions.php`
   - bump `SPATIAL_FLOW_CHILD_VERSION` from `2.7.41` to `2.7.42` for deterministic CSS cache refresh
   - no other logic change

## Intentionally not changed
- related-product recommendation/query logic
- WooCommerce product/image/title/price/permalink ownership
- Section 03 accepted behavior
- Section 04 Reviews omission decision
- Gift CTA / Closing Note
- cart / checkout / payment / wishlist behavior
- Shop archive cards
- old unscoped related-products CSS cleanup (deferred to later canonical cleanup after this visual pass is accepted)

## Acceptance gate
After the user performs the bounded source edit:
1. return all three files for whole-file diff and syntax/structure audit
2. source PASS required before browser testing
3. desktop runtime comparison against the static reference
4. 390px mobile runtime comparison
5. verify real SKU/edition/placement are shown only when those fields actually exist
6. user acceptance required before Related Products can close

## Current stop point
`RELATED PRODUCTS STRICT 1:1 — MANUAL SOURCE EDIT AUTHORIZED / RETURNED SOURCE PENDING`