# Step 4D Reopen · B5-R1 Hero Metadata Rebuild — START — 2026-09-09

## Why this step is reopened
B5 subtitle/shipping infrastructure exists, but strict Hero parity is not yet closed. Current live Hero still renders duplicated category hierarchy (`reference/category` line plus a separate category kicker), while the reference owner uses one compact editorial metadata line similar to `SKU · SF-AQ-007 · BRACELETS · EDITION OF 9`.

## Source audit
Current uploaded `woocommerce/single-product.php` shows:
- native WooCommerce SKU is already available through `$product->get_sku()`;
- current fallback converts missing SKU to `No. {post ID}`;
- Hero currently renders reference + category, then renders category a second time as `.sf-kicker`;
- existing Section 01 edition meta `_sf_piece_edition` already exists and is backend-editable.

Current `functions.php` already saves `_sf_piece_edition`. Therefore B5-R1 must **reuse the existing Section 01 Edition field** rather than creating a duplicate Hero edition field.

## Product Truth / ownership
- SKU source: native WooCommerce parent-product SKU. Do not invent an SKU or use post ID as a fake SKU.
- Category source: real WooCommerce product categories.
- Edition source: existing `_sf_piece_edition` field.
- If `_sf_piece_edition` begins with a number (for example `9 of one`), Hero may render the concise reference-style label `EDITION OF 9`; Section 01 continues to render the original full field value.
- If SKU is empty, omit the SKU segment rather than substituting a post ID.
- Remove the duplicated standalone category kicker from Hero.

## Files planned
- `functions.php`: version bump + clarify Section 01 Edition backend description so the user knows it also feeds Hero metadata.
- `woocommerce/single-product.php`: rebuild Hero metadata source/output only.
- `assets/css/spatial-flow.css`: align metadata color/rhythm with the reference editorial treatment.

## Acceptance rule
This step is not closed by source implementation alone. After returned-source audit, the user must be shown exactly where to edit:
1. native WooCommerce SKU;
2. `Section 01 · Edition`.
Then the user must change values, update the product, and verify the Hero line changes accordingly. Shipping override verification remains part of the overall B5 close gate.
