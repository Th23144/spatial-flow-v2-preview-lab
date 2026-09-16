# Site Hygiene — Advanced Shipment Tracking read-only audit — 2026-09-16

Plugin: `woo-advanced-shipment-tracking` 3.8.9

## Cross-site activation state
- Main site: inactive
- Blog site: inactive
- Network active: no

## Read-only evidence supplied by user

### Plugin files
`wp-content/plugins/woo-advanced-shipment-tracking` exists.

### Plugin-related options
Main site contains exactly these matching options:
- `wc_advanced_shipment_tracking` — 3 bytes
- `wc_ast_show_orders_actions` — 103 bytes
- `wc_ast_unclude_tracking_info` — 81 bytes

Blog site returned no matching options.

### Plugin-related tables
No tables matched:
- `shipment`
- `wcast`
- `advanced_tracking`
- `wc_ast`

### Order metadata
No matching legacy `wp_postmeta` rows were found for:
- `shipment_tracking`
- `advanced_shipment`
- `wc_ast`
- `wcast`

No matching HPOS `wp_wc_orders_meta` rows were found for the same patterns.

This is important because this plugin category can leave historical shipment data attached to orders; current audit found no such data under the searched AST naming patterns.

### WP-Cron
The only `findstr` result on both sites was:
- `astra_delete_docs_folder`

This is an Astra hook and is a false positive caused by the broad search token `ast`. It is not owned by Advanced Shipment Tracking and must not be removed as part of this plugin cleanup.

No AST-specific cron hook was identified.

### Action Scheduler
No matching actions found for:
- `shipment`
- `wcast`
- `advanced_shipment`
- `wc_ast`

## Ownership protection
The active main-site plugin `woo-orders-tracking` is a separate shipping/tracking implementation and remains protected. Do not delete or alter:
- `woo_orders_tracking_*`
- `villatheme_*`
- `wp_vi_woo_orders_tracking_track_info`

## Current assessment
Advanced Shipment Tracking appears to have no current order metadata, no dedicated tables, no cron, and no Action Scheduler work remaining. The only verified residue is three small main-site options plus the inactive plugin files.

## Next gate
Safe cleanup may proceed by:
1. isolating the plugin files to quarantine;
2. deleting only the three verified AST-owned options;
3. verifying zero remaining AST option/table/order-meta/cron/action references;
4. performing a short frontend/admin runtime regression check.

No historical order tracking data may be deleted without separate evidence.
