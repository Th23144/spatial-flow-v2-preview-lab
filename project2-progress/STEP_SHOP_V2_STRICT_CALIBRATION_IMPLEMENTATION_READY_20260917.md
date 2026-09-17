# STEP_SHOP_V2_STRICT_CALIBRATION_IMPLEMENTATION_READY_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

IMPLEMENTATION BATCH PREPARED / AWAITING LOCAL MANUAL APPLICATION

No production/local source is claimed changed by this record.

## Governing audit

```text
project2-progress/STEP_SHOP_V2_COMPLETE_STRICT_DELTA_MATRIX_20260917.md
```

The user-approved wider Shop frame remains protected and is not reduced to the static reference width.

## Batch scope

Four files only:

```text
woocommerce/archive-product.php
woocommerce/content-product.php
assets/css/spatial-flow.css
functions.php
```

Expected untouched:

```text
assets/js/spatial-flow.js
```

## Planned source changes

### archive-product.php

- root breadcrumb: remove duplicated `Shop / Shop` context while preserving taxonomy context;
- native Woo sort: add the reference-style `Arrange by` visual label around `woocommerce_catalog_ordering()`;
- product section: stop front-end rendering of the extra `section_kicker` while preserving stored Customizer data;
- closing note: stop front-end rendering of the extra closing kicker and restore one flowing editorial sentence;
- preserve Woo loop, native pagination call, filter ownership and product contact band.

### content-product.php

Shop archives only:

- reuse existing per-product owners `_sf_material`, `_sf_piece_reference`, `_sf_placement`;
- material/reference become the editorial subline, with real product category as fallback;
- placement renders only when the field is populated;
- add desktop `View piece →` quick reveal;
- retain YITH Wishlist ownership;
- no fabricated badges/copy/data.

Non-Shop uses of the product template remain conservative: no Shop-only quick action or placement note is emitted.

### spatial-flow.css

Revise the existing controlled Shop block instead of appending another generic override layer.

Key calibration:

- retain current approved wider width rule;
- Shop microtype moves from JetBrains Mono to Inter where the static source uses sans/body typography;
- Hero kicker/meta/signoff detail calibration;
- filter/sort microtype and native sort pill composition;
- Editor’s Pick small type/buttons and removal of extra image zoom;
- product heading removal of visual kicker dependency;
- product-card subline / quick reveal / placement note / price-rule placement;
- native Woo pagination rendered as left / center / right reference composition;
- closing sentence restored to inline editorial flow;
- approved mobile two-column grid, hidden Editor’s Pick and compact Hero are preserved.

### functions.php

Asset version only:

```text
2.7.47 → 2.7.48
```

## Candidate validation performed before handoff

```text
archive-product.php PHP syntax: PASS
content-product.php PHP syntax: PASS
functions.php PHP syntax: PASS
candidate Shop CSS block opening braces: 159
candidate Shop CSS block closing braces: 159
full candidate spatial-flow.css opening braces: 3553
full candidate spatial-flow.css closing braces: 3553
```

## Explicitly not changed

```text
Header
Footer
Single Product template
Cart
Checkout
Payment
Orders
Shop filter JS
YITH wishlist data/logic
WooCommerce pagination ownership
Shop overall approved wider frame
```

## Post-application validation gate

After the user applies the batch locally:

1. hard refresh `/shop/` desktop and phone;
2. inspect strict visual details;
3. test one filter panel, another filter panel, outside click and Escape;
4. test sorting;
5. test selected-filter removal;
6. test Wishlist;
7. test product links and `View piece` hover;
8. test pagination first/next page;
9. verify products with and without `_sf_placement`;
10. regression-check Single Product, Cart and Checkout.

Shop remains `Not done` until runtime evidence passes.
