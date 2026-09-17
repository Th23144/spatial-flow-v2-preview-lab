# STEP_SHOP_V2_DETAIL_REMEDIATION_BATCH_A_START_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

DETAIL REMEDIATION BATCH A STARTED

No Header/Footer reopen. No width rollback.

## User-approved controlled deviation

The current production Shop content width is intentionally wider than the static reference and must remain unchanged.

## Batch A objective

Fix the highest-impact visual ownership defects before lower-level spacing polish:

1. Warm Shop canvas ownership (`#f6f1eb`) across the actual Astra/WooCommerce content surface.
2. Explicit Shop-local typography baseline so Astra/global font-weight does not leak into ordinary Shop paragraphs and microcopy.
3. Restore root-Shop editorial identity as a backend-editable Hero title, while taxonomy/archive contexts continue using their real archive titles.
4. Restore root-Shop breadcrumb third layer using the same editorial Hero identity.
5. Fix Hero paragraph/signoff ownership (Inter 300 body; serif light signoff).
6. Fix Editor's Pick hierarchy:
   - left stamp remains Editor's Pick;
   - right eyebrow becomes product-specific metadata instead of duplicating the stamp;
   - subtitle can derive from product Material / Piece Reference unless explicitly overridden;
   - body can derive from the selected product short description unless explicitly overridden;
   - placement can derive from `_sf_placement` unless explicitly overridden;
   - ordinary body copy gets explicit Inter 300 ownership;
   - `FROM` microtype uses Inter, not JetBrains Mono.
7. Keep WooCommerce product ownership, filter/sort ownership, YITH Wishlist, and existing mobile two-column / hidden Editor's Pick decisions unchanged.

## Files in Batch A

- `functions.php`
- `woocommerce/archive-product.php`
- `assets/css/spatial-flow.css`

`content-product.php` and `assets/js/spatial-flow.js` are not changed in Batch A.

## Validation gate

After manual replacement, first validate source integrity and then hard-refresh only the Shop page. Compare desktop top half + mobile top half before proceeding to product-grid/pagination/closing-note polish.
