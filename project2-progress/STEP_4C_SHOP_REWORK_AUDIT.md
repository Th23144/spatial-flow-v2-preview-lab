# Step 4C-REWORK1 · Shop Full-Page 1:1 Rework Audit

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Final status

```text
Step 4C-REWORK1 · Shop desktop + mobile controlled 1:1 rework：Passed
```

The earlier Shop Step 4C records remain classified as partial structure/layout passes. Final visual acceptance is based on the controlled rebase completed and validated on 2026-07-10.

## Trigger

The user reviewed the previous Shop page and corrected the project record:

```text
Shop desktop is also not actually done. The prior work only changed layout/format lightly and is still far from the static 1:1 reference. Do not let older documentation imply that Shop is already visually accepted.
```

This superseded the temporary mobile-only step:

```text
Step 4C-MOBILE1 · Shop Mobile First Screen 商品露出优化
```

## Original grounded audit

Initial local files:

```text
woocommerce/archive-product.php
assets/css/spatial-flow.css
```

Initial file baseline:

```text
archive-product.php
- Size: 14,932 bytes
- Lines: 320
- SHA256: 2fb0c980b39f8bf7c80b5ca3adabfed29ac78a786047c9bfe57db81d4985be1b

spatial-flow.css
- Size: 791,785 bytes
- Lines: 26,632
- SHA256: e6ea57cab4d1cf2342929f1fd74d78c41eff10141d434010b8106d7ed395cb58
```

### `woocommerce/archive-product.php`

The archive already exposed the required dynamic structure:

```text
- `.sf-shop-v2-hero`
- `.sf-shop-v2-hero-meta`
- `.sf-shop-v2-controls`
- optional `.sf-shop-v2-editor-pick`
- `.sf-shop-v2-products`
- optional `.sf-shop-v2-closing-note`
- `template-parts/product-contact-band`
```

Conclusion:

```text
The current PHP structure was sufficient for a CSS-only first rework candidate. WooCommerce loop and backend content sources did not need to be rewritten.
```

### Initial CSS issue

The old CSS contained overlapping Shop visual systems:

```text
- Phase Shop Visual 1
- Phase Shop Visual 2
- Phase Shop Visual 2.1 FIX
- Product Archive Visual Scope Fix
- Project2 Step 4C-B — Shop Hero Editorial
```

These were incremental styling passes rather than a controlled final 1:1 system.

## Static reference target

```text
preview/spatial-flow-shop-v1.html
```

Reference traits used for the rework:

```text
- Hero: max-width 1440px, 64px/56px/80px spacing, 1.1fr / 1fr grid, 96px gap, border-bottom.
- Toolbar: max-width 1440px, horizontal filters + sort, 36px/56px spacing, border-bottom.
- Editor’s Pick: max-width 1440px, 80px/56px spacing, 5fr / 7fr grid, 80px gap, open editorial section with border-bottom.
- Product section: 80px top spacing, 4-column grid, 56px row gap / 40px column gap.
- Product cards: 4/5 image ratio, open layout instead of rounded panel cards, serif title, editorial rhythm.
```

## Implemented solution

Workflow:

```text
1. Manually delete the three old Shop CSS ranges.
2. Independently validate the cleaned CSS.
3. Insert one controlled Shop block at the intended location.
4. Validate file structure and marker count.
5. Validate desktop/mobile screenshots and functional regression.
```

New controlled block:

```text
Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase
```

Final validated CSS:

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(1).css
Size: 766,416 bytes
Lines: 25,727
SHA256: 4abe753b251319c730b4c66520ae4cc0287fa9f0b3d239f016ba4ca5a7b7baee
Opening braces: 3,917
Closing braces: 3,917
CSS parse errors: 0
```

Version confirmed by user:

```text
SPATIAL_FLOW_CHILD_VERSION = 2.7.6
```

## Final screenshot validation

User-provided final evidence:

```text
1. Desktop Shop top area
2. Desktop Shop full page
3. Mobile Shop first screen
4. Mobile Shop full page
```

Accepted result:

```text
Desktop:
- Open editorial Hero and metadata rhythm.
- Reference-aligned filter/sort toolbar.
- Open two-column Editor’s Pick section.
- Open editorial product cards and 4/5 imagery.
- Pagination, closing note, contact band, and footer render normally.

Mobile:
- Hero density reduced.
- Product section appears earlier than in the prior version.
- Two-column product grid remains readable.
- No horizontal page overflow.
- Closing note, contact band, and footer stack correctly.
```

The user confirmed that all visual and functional checks passed.

## Functional preservation

Validated as working:

```text
- filter details and filter links
- sorting
- Editor’s Pick link
- product links
- wishlist
- pagination
- Single Product regression
- Cart regression
- SAFE5 Checkout regression
```

Preserved WooCommerce dynamic output:

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

## Backend editability preservation

Status:

```text
Passed
```

No product names, prices, product IDs, Hero copy, Editor’s Pick copy, business links, image URLs, or taxonomy values were hardcoded into the CSS.

Existing backend-editable sources remain active:

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

The static reference's optional per-product editorial place note remains intentionally unimplemented rather than fabricated. A future implementation must use a real backend-editable product field and dynamic output from `content-product.php`.

## Related records

```text
project2-progress/STEP_4C_REWORK1_A_MISMATCH_PLAN.md
project2-progress/STEP_4C_REWORK1_B_IMPLEMENTATION.md
project2-progress/STEP_4C_REWORK1_B_MANUAL_GUIDE.md
project2-progress/STEP_4C_REWORK1_B2_VALIDATION.md
project2-progress/PROGRESS_LOG.md
```
