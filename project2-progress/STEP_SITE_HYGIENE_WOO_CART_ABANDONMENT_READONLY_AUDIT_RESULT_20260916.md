# Site Hygiene — Woo Cart Abandonment Recovery Read-Only Audit Result — 2026-09-16

## Scope
Read-only ownership and residue audit for plugin `woo-cart-abandonment-recovery` in the Spatial Flow WordPress Multisite environment. No cleanup changes were authorized in this audit step.

## Activation state
- `spatialflow.local`: inactive
- `blog.spatialflow.local`: inactive
- `cartflows`: active on main site and must remain protected

## Plugin files
- Plugin directory exists: `wp-content/plugins/woo-cart-abandonment-recovery`

## Related database tables found
- `wp_cartflows_ca_cart_abandonment`
- `wp_cartflows_ca_email_history`
- `wp_cartflows_ca_email_templates`
- `wp_cartflows_ca_email_templates_meta`

## Cart abandonment table data
`wp_cartflows_ca_cart_abandonment` contains 1 row.

Observed row characteristics:
- `checkout_id`: 623
- email address present
- product/cart snapshot present
- `cart_total`: 38.00
- `order_status`: `abandoned`
- timestamp: `2026-01-30 12:13:36`

This is real captured customer/cart data and must not be deleted without an explicit retention decision.

## Related main-site options found
23 `wcf_ca_*` options were found, including:
- `wcf_ca_admin_email`
- `wcf_ca_auto_delete_coupons`
- `wcf_ca_coupon_amount`
- `wcf_ca_coupon_code_status`
- `wcf_ca_coupon_expiry`
- `wcf_ca_coupon_expiry_unit`
- `wcf_ca_cron_run_time`
- `wcf_ca_cut_off_time`
- `wcf_ca_delete_plugin_data`
- `wcf_ca_discount_type`
- `wcf_ca_excludes_orders`
- `wcf_ca_from_email`
- `wcf_ca_from_name`
- `wcf_ca_gdpr_message`
- `wcf_ca_gdpr_status`
- `wcf_ca_global_param`
- `wcf_ca_ignore_users`
- `wcf_ca_reply_email`
- `wcf_ca_send_recovery_report_emails_to_admin`
- `wcf_ca_status`
- `wcf_ca_version`
- `wcf_ca_zapier_cart_abandoned_webhook`
- `wcf_ca_zapier_tracking_status`

No matching blog-site options were returned.

## WP-Cron
No matching `abandon`, `wcf_ca`, or `cartflows` cron event was returned for either site.

## Action Scheduler
Generic CartFlows actions exist and must remain protected because `cartflows` is active.

Examples include:
- `cartflows_send_report_summary_email`
- `cartflows_update_knowledge_base_data`
- `cartflows_delete_old_log_files`

Cart-abandonment-specific actions also exist in historical failed state:
- `cartflows_ca_send_report_summary_email`

Observed `cartflows_ca_send_report_summary_email` action IDs include 1808, 1929, 2228, 2399, and 2619, all failed and historical.

## Important ownership boundary
Do not treat all `cartflows_*` actions as cleanup candidates. The active `cartflows` plugin owns current generic actions and they must remain untouched.

The four `wp_cartflows_ca_*` tables, the `wcf_ca_*` options, and `cartflows_ca_*` action hooks appear specific to CartFlows Cart Abandonment Recovery, but because the active CartFlows plugin shares the same vendor/prefix, source-code ownership must be confirmed before any write cleanup.

## Current status
- Audit: PASS
- Cleanup authorization: NOT YET
- Plugin files: remain in place
- Tables: preserved
- Options: preserved
- Action Scheduler rows: preserved
- One abandoned-cart customer record: preserved

## Next gate
Perform a read-only source ownership check across both plugin directories:
- `wp-content/plugins/woo-cart-abandonment-recovery`
- `wp-content/plugins/cartflows`

Specifically verify which plugin source references:
- `wp_cartflows_ca_cart_abandonment`
- `wp_cartflows_ca_email_history`
- `wp_cartflows_ca_email_templates`
- `wp_cartflows_ca_email_templates_meta`
- `wcf_ca_`
- `cartflows_ca_send_report_summary_email`

Only after ownership is proven may cleanup be split into:
1. preserve active CartFlows runtime data/actions;
2. archive or delete historical abandonment data based on retention choice;
3. isolate/remove the inactive abandonment plugin and its exclusive residues.
