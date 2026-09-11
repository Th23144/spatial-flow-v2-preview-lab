# Project 2 · Step 4D-REOPEN · Related Products returned source audit start · 2026-09-11

## Scope

The user returned the three manually edited current files for the Related Products strict-reference remediation:

- `functions.php`
- `woocommerce/single-product.php`
- `assets/css/spatial-flow.css`

This record starts the required source gate before any runtime/visual acceptance.

## Expected bounded delta

1. `functions.php`
   - bump `SPATIAL_FLOW_CHILD_VERSION` from `2.7.41` to `2.7.42` only.

2. `woocommerce/single-product.php`
   - replace only the Related Products output block.
   - preserve the existing WooCommerce related-product source/query.
   - render reference-aligned heading `Pieces of a similar weight.` and `View the full edit →`.
   - keep product image, title, price and permalink dynamic.
   - use real WooCommerce SKU plus existing `_sf_piece_edition` and `_sf_placement` metadata when available.
   - do not fabricate missing metadata.
   - remove the prior category / `Explore` card composition.

3. `assets/css/spatial-flow.css`
   - replace the existing scoped Step 4D-1-E Related Products visual block in place.
   - target the reference-like open editorial layout: 4:5 images, no white-card frame, SKU/edition line, price line, placement note, hover `View piece →`, 4/3/2/1 responsive grid.
   - do not delete older unscoped legacy Related Products repair blocks in this step; legacy cascade cleanup remains separate debt after this bounded visual pass.

## Gate

Required before runtime testing:

- whole-file identities captured
- PHP syntax PASS for both PHP files
- CSS structural parse/balance PASS
- exact bounded-delta review PASS
- no unintended ownership changes to WooCommerce product/query/cart/checkout behavior

Current state:

`RELATED PRODUCTS RETURNED SOURCE AUDIT: IN PROGRESS`

No runtime acceptance is authorized until this source gate is completed and recorded.
