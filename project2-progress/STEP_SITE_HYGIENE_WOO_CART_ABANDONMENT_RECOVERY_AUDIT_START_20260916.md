# Site Hygiene — Woo Cart Abandonment Recovery Audit START — 2026-09-16

## Target
Plugin: `woo-cart-abandonment-recovery` 2.0.5

## Known state before audit
- Main site: inactive.
- Blog site: inactive.
- Earlier global residue scan found the custom table `wp_cartflows_ca_cart_abandonment`.
- Earlier option scan found cart-abandonment related options such as `nps-survey-woo-cart-abandonment-recovery`, `wcf_ca_zapier_cart_abandoned_webhook`, and tracking-status options.

## Safety boundary
This stage is read-only only. Do not move the plugin, delete options, delete abandoned-cart rows, drop custom tables, or remove cron / Action Scheduler events until ownership and row counts are confirmed.

Special caution: CartFlows is active on the main site. The abandonment-recovery plugin historically comes from the same ecosystem, so all `wcf_*` / CartFlows-owned objects must be classified carefully before any deletion. No assumption of ownership is allowed from name similarity alone.

## Audit objectives
1. Confirm plugin files.
2. Inspect custom table schema and row count.
3. Determine whether the custom table contains historical/operational cart data.
4. Inventory plugin-related options on both sites.
5. Inspect Cron and Action Scheduler hooks.
6. Search published content/postmeta only if needed.
7. Preserve active CartFlows data and functionality.

## State
STARTED — READ-ONLY AUDIT ONLY.
