# Site Hygiene — Woo Cart Abandonment Recovery Ownership Confirmed — 2026-09-16

## Scope
Read-only ownership split between inactive plugin `woo-cart-abandonment-recovery` and still-active `cartflows`.

## Evidence
- Four plugin data tables exist:
  - `wp_cartflows_ca_cart_abandonment` — 1 row
  - `wp_cartflows_ca_email_history` — 6 rows
  - `wp_cartflows_ca_email_templates` — 6 rows
  - `wp_cartflows_ca_email_templates_meta` — 54 rows
- The inactive `woo-cart-abandonment-recovery` source directly references/owns `cartflows_ca_cart_abandonment`, `wcf_ca_*` settings, the `cartflows_ca_send_report_summary_email` scheduler hook, and its uninstall routine explicitly drops the cart-abandonment tables.
- The active `cartflows` plugin source returned no matches for:
  - `cartflows_ca_cart_abandonment`
  - `wcf_ca_`
  - `cartflows_ca_send_report_summary_email`
- Current Action Scheduler query for `hook LIKE 'cartflows_ca_%'` returned no rows.
- Generic `cartflows_*` Action Scheduler jobs belong to the active CartFlows plugin and are protected.

## Decision
Ownership is sufficiently separated: `wp_cartflows_ca_*`, `wcf_ca_*`, and `cartflows_ca_*` are legacy Woo Cart Abandonment Recovery data, not current CartFlows runtime data.

Before deletion, take a focused backup of the four legacy tables. Keep the existing full-site DB backup. Do not touch generic `cartflows_*` jobs or active CartFlows data.
