# Site Hygiene — Advanced Shipment Tracking technical cleanup PASS, runtime pending

Date: 2026-09-16
Plugin: `woo-advanced-shipment-tracking`

## Completed changes
- Plugin directory moved out of `wp-content/plugins` into `../plugin-quarantine-20260916/`.
- Main-site AST-specific options removed:
  - `wc_advanced_shipment_tracking`
  - `wc_ast_show_orders_actions`
  - `wc_ast_unclude_tracking_info`

## Verification
- Cross-site AST option query returned zero rows.
- `woo-advanced-shipment-tracking` no longer appears in main-site plugin list.
- `woo-advanced-shipment-tracking` no longer appears in blog-site plugin list.

## Protected related owner
The currently active main-site plugin `woo-orders-tracking` remains untouched. Its data and identifiers, including `woo_orders_tracking_*`, `villatheme_*`, and `wp_vi_woo_orders_tracking_track_info`, are out of scope for AST cleanup.

## Status
Technical cleanup: PASS.
Runtime smoke test: PENDING USER CONFIRMATION.

Do not mark this plugin fully CLOSED until the user confirms that the main-site Home / Shop / Single Product / Cart / Checkout / Track Order and the blog Home / article smoke tests are normal.
