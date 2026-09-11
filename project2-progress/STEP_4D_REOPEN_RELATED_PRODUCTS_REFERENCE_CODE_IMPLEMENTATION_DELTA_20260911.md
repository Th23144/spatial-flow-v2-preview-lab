# Project 2 · Step 4D-REOPEN · Related Products Reference / Piece Code implementation delta · 2026-09-11

## Decision already approved
Public editorial identity and WooCommerce inventory SKU are separate concepts.

Canonical new product meta key:
`_sf_piece_reference`

## Allowed source delta
Only:
1. `functions.php`
   - child version `2.7.43 -> 2.7.44`;
   - add Product Data → General field `Reference / Piece Code` backed by `_sf_piece_reference`;
   - add `_sf_piece_reference` to existing `spatial_flow_save_product_story_admin_fields()` save list.
2. `woocommerce/single-product.php`
   - in Related Products only, replace WooCommerce SKU lookup with `_sf_piece_reference` lookup;
   - include Reference / Piece Code + Edition in the existing editorial meta line;
   - empty Reference / Piece Code remains hidden; no SKU fallback and no fabricated value.

## Explicitly not changed
- WooCommerce native SKU storage or behavior;
- Hero SKU metadata in this bounded step;
- Edition ownership `_sf_piece_edition`;
- Placement ownership `_sf_placement`;
- related-product query;
- title/image/price/permalink;
- Related Products geometry/CSS;
- variation/cart/wishlist/checkout behavior;
- Section 01/02/03.

## Runtime follow-up
After source audit PASS:
- remove the temporary fake code from native WooCommerce SKU if it is not a real inventory SKU;
- enter the same temporary validation value in `Reference / Piece Code` only;
- confirm Related Products still shows the code;
- confirm empty native SKU does not affect Related Products editorial reference;
- capture hover `View piece →` evidence because hover remains pending.

## Stop point
REFERENCE / PIECE CODE SOURCE EDIT AUTHORIZED — RETURNED FILE AUDIT PENDING
