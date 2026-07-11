# Step 4C-REWORK1-B2 · Controlled Shop CSS Insertion Validation

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
File-level validation: Passed
Desktop/mobile visual and functional browser validation: Pending
```

## Validated local file

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(1).css
Size: 766,416 bytes
Lines: 25,727
SHA256: 4abe753b251319c730b4c66520ae4cc0287fa9f0b3d239f016ba4ca5a7b7baee
```

## Structural validation

```text
Opening braces: 3,917
Closing braces: 3,917
Comment openings: 397
Comment closings: 397
CSS parse errors: 0
```

Controlled Shop block markers:

```text
Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase START: 1
Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase END: 1
```

Insertion order:

```text
Project2 Step 4B-R2-B — Main Footer Dark Editorial END
→ Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase
→ Step 5A-4C-R — Basic Pages Template Rebuild
```

Result:

```text
Correct insertion location confirmed.
The inserted block is an exact content match for STEP_4C_REWORK1_B_SHOP_BLOCK.css.
```

## Old Shop CSS cleanup re-check

```text
Phase Shop Visual 1: 0
Phase Shop Visual 2: 0
Phase Shop Visual 2.1 FIX: 0
Product Archive Visual Scope Fix: 0
Project2 Step 4C-B — Shop Hero Editorial: 0
```

No removed legacy Shop block was accidentally restored.

## Backend editability boundary

This step changes only the Shop visual CSS layer. It does not replace or hardcode WordPress / WooCommerce content sources.

The controlled block contains:

```text
- no product names
- no prices
- no product IDs
- no Hero copy
- no Editor's Pick copy
- no business links
- no image URLs
- no taxonomy values
```

The only CSS `content` values are visual controls / decorative output:

```text
+
−
empty overlay content
```

Existing backend-editable Shop sources remain the source of truth, including:

```text
sf_shop_v2_kicker
sf_shop_v2_pieces_meta
sf_shop_v2_makers_meta
sf_shop_v2_origin_meta
sf_shop_v2_lede
sf_shop_v2_body
sf_shop_v2_signoff
sf_shop_v2_section_kicker
sf_shop_v2_section_title
sf_shop_v2_editor_pick_enabled
sf_shop_v2_editor_pick_product
sf_shop_v2_editor_pick_kicker
sf_shop_v2_editor_pick_title
sf_shop_v2_editor_pick_subtitle
sf_shop_v2_editor_pick_body
sf_shop_v2_editor_pick_place
sf_shop_v2_editor_pick_note_text
sf_shop_v2_editor_pick_note_url
```

WooCommerce dynamic output remains untouched:

```text
woocommerce_product_loop()
woocommerce_catalog_ordering()
woocommerce_product_loop_start()
wc_get_template_part( 'content', 'product' )
woocommerce_product_loop_end()
woocommerce_pagination()
taxonomy / attribute filter URLs
Wishlist behavior
Product links
Add-to-cart behavior
```

## Important non-hardcoding decision

The static reference includes editorial product place notes. The current product-card template does not yet expose a dedicated real per-product field for every such note.

Therefore this CSS rebase does **not** fake or hardcode place-note text. If that layer is later required for closer 1:1 fidelity, it must be implemented through a real backend-editable per-product field such as `_sf_placement`, then rendered dynamically by `content-product.php`.

## Remaining validation

Browser validation is still required before the overall Shop rework is marked Passed:

```text
Desktop visual comparison
Mobile visual comparison
Filter details open and links work
Sorting works
Editor's Pick link works
Product links work
Wishlist works
Pagination works
No horizontal overflow
Single Product regression
Cart regression
SAFE5 Checkout regression
```

## Version note

Only the CSS file was uploaded for this validation. The `SPATIAL_FLOW_CHILD_VERSION` bump in `functions.php` was not independently verified in this pass.
