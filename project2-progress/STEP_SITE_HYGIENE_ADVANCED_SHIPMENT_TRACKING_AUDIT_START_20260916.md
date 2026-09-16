# Site Hygiene — Advanced Shipment Tracking Audit START

Date: 2026-09-16

## Target
`woo-advanced-shipment-tracking` 3.8.9

## Known state before this audit
- Inactive on `spatialflow.local`.
- Inactive on `blog.spatialflow.local`.
- Network active: no.
- Earlier read-only residue scan found main-site options including `wc_advanced_shipment_tracking` and `wc_ast_unclude_tracking_info`.
- A separate plugin, `woo-orders-tracking`, remains active on the main site and owns its own `woo_orders_tracking_*` settings / `wp_vi_woo_orders_tracking_track_info` table. Those must not be confused with or removed as part of this audit.

## Audit rule
Read-only first. Do not move/delete the plugin, delete options, delete order metadata, drop tables, remove cron events, or modify historical orders until ownership and live dependency are proven.

## Next gate
Inspect plugin files, exact option residue, dedicated tables, order/post metadata, WooCommerce HPOS metadata, cron, and Action Scheduler references.
