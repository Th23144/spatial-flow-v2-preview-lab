# Site Hygiene — Woo Cart Abandonment Recovery final ownership confirmation

Date: 2026-09-16

Status: READ-ONLY OWNERSHIP CONFIRMED; FINAL CLEANUP READY

## Evidence

- `woo-cart-abandonment-recovery` is inactive on both sites.
- Current active `cartflows` plugin is a separate owner and did not match the abandoned-cart plugin identifiers in source scans.
- Database tables owned by Woo Cart Abandonment Recovery are present:
  - `wp_cartflows_ca_cart_abandonment`
  - `wp_cartflows_ca_email_history`
  - `wp_cartflows_ca_email_templates`
  - `wp_cartflows_ca_email_templates_meta`
- Current row counts:
  - cart_abandonment: 1
  - email_history: 6
  - email_templates: 6
  - email_templates_meta: 54
- Source scan of `woo-cart-abandonment-recovery` directly references `CARTFLOWS_CA_CART_ABANDONMENT_TABLE`, defines `cartflows_ca_cart_abandonment`, and its `uninstall.php` drops the table.
- Source scan of `woo-cart-abandonment-recovery` owns the `wcf_ca_*` option family.
- `wcf_sms_tracking_status` and `wcf_whatsapp_tracking_status` are explicitly present in `woo-cart-abandonment-recovery` source defaults.
- Active `cartflows` source returned no matches for:
  - `cartflows_ca_cart_abandonment`
  - `wcf_ca_`
  - `cartflows_ca_send_report_summary_email`
  - `wcf_sms_tracking_status`
  - `wcf_whatsapp_tracking_status`
- `cartflows_ca_%` Action Scheduler query currently returns zero rows.
- Remaining related main-site options include:
  - `cartflows_ca_use_new_ui`
  - `nps-survey-woo-cart-abandonment-recovery`
  - `wcf_ca_*`
  - `wcf_sms_tracking_status`
  - `wcf_whatsapp_tracking_status`

## Important protection boundary

The active `cartflows` plugin and generic `cartflows_*` scheduler actions remain protected. Only identifiers proven to belong to `woo-cart-abandonment-recovery` are eligible for cleanup.

## Final cleanup plan

1. Create a dedicated SQL backup of the four `wp_cartflows_ca_*` tables.
2. Quarantine `woo-cart-abandonment-recovery` plugin files.
3. Remove confirmed abandoned-cart-plugin options (`wcf_ca_*`, SMS/WhatsApp status, plugin-specific NPS option).
4. Drop the four dedicated abandoned-cart tables.
5. Preserve `cartflows_ca_use_new_ui` until its owner is explicitly verified, rather than deleting on name similarity alone.
6. Run zero-residual checks and runtime regression.
