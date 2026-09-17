# Shop V2 — 12 products per page implementation READY

Date: 2026-09-17

## Source audit

Latest uploaded functions.php:
- SPATIAL_FLOW_CHILD_VERSION 2.7.50
- no existing loop_shop_per_page filter found
- no existing woocommerce_product_query archive page-size override found
- Shop V2 Customizer block has a stable insertion boundary immediately after:
  add_action( 'customize_register', 'spatial_flow_shop_v2_customizer', 46 );

Current archive-product.php already derives:
- current count
- total count
- current page
- total pages
- posts_per_page
- Showing X — Y of Z
- WooCommerce pagination

from the real WP/WooCommerce query.

Therefore only the query owner needs changing.

## Implementation

Add one bounded WooCommerce archive page-size filter in functions.php:

- function: spatial_flow_shop_v2_products_per_page
- hook: loop_shop_per_page
- priority: 20
- return: 12

This is query-level ownership, not CSS hiding.

Expected desktop result on 92 products:
- 4 columns × 3 rows
- Showing 1 — 12 of 92
- 8 pages

Filtering/sorting/pagination continue to use WooCommerce's real query.

## Validation

Standalone PHP syntax for the candidate hook: PASS.

No CSS, JS, template or database change is required in this step.
No child-theme version bump is required because no enqueued asset changed.

## Status

IMPLEMENTATION READY / USER TO APPLY / SOURCE VALIDATION REQUIRED BEFORE RUNTIME CHECK.
