# WINDOW BREAKPOINT — Pending Generic Option Cleanup — 2026-09-15

## Project
Spatial Flow V2 / 项目二换皮工程
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current active stage
Site Hygiene / Airwallex residual cleanup.

## Confirmed completed before this breakpoint
- Footer V2 closed and user accepted.
- Main-site Multisite mapping confirmed: `spatialflow.local` = `wp_*`; `blog.spatialflow.local` = `wp_2_*`.
- Six Airwallex-generated `Payment` pages permanently deleted through WordPress Admin.
- Current menu layer verified clean: exactly seven live nav menus; no orphan page menu items after Payment-page deletion.
- Earlier `MAIN` / ID 3602 interpretation was corrected: ID 3602 is `shop_order_placehold`, not a menu item, and must not be touched.
- Airwallex Action Scheduler hook `airwallex_check_pending_transactions` cleaned precisely: 259 actions and 773 related logs removed; post-check = zero; no Airwallex scheduler group remains.
- Theme source cleanup applied and Source Gate passed:
  - `assets/css/checkout-safe5.css` Airwallex-specific currency-switching suppression removed.
  - `woocommerce/checkout/form-checkout.php` obsolete Airwallex wording removed while preserving `woocommerce_checkout_payment()`.
- Final read-only DB recheck returned zero Airwallex matches in `wp_posts`, `wp_postmeta`, Action Scheduler, WordPress cron, and Airwallex-named custom tables.

## Remaining matches at breakpoint
Generic rows whose VALUE still contains historical `airwallex` references:
- `wp_options._transient_woocommerce_admin_payment_gateway_suggestions_specs` — cache/transient candidate.
- `wp_options.woocommerce_gateway_order` — live generic WooCommerce config; DO NOT delete whole row.
- `wp_options.woocommerce_payments_nox_profile` — generic WooCommerce/WooPayments row; DO NOT delete whole row without inspection.
- `wp_sitemeta._site_transient_wp_plugin_dependencies_plugin_data` — network-level cache/transient candidate.

No Airwallex-specific option names remain.

## IMPORTANT — commands NOT executed yet
The user has NOT yet executed the following pending operations/queries:

### Pending write batch — safe cache/transient candidates
```sql
START TRANSACTION;

DELETE FROM wp_options
WHERE option_name = '_transient_woocommerce_admin_payment_gateway_suggestions_specs';

DELETE FROM wp_sitemeta
WHERE meta_key = '_site_transient_wp_plugin_dependencies_plugin_data';

COMMIT;
```

### Pending read-only inspections
```sql
SELECT
    option_name,
    option_value
FROM wp_options
WHERE option_name = 'woocommerce_gateway_order';

SELECT
    option_name,
    option_value
FROM wp_options
WHERE option_name = 'woocommerce_payments_nox_profile';
```

These should be handled in the next window, not executed in the old window after handoff.

## Required continuation order
1. Read `WINDOW_HANDOFF_SITE_HYGIENE_AIRWALLEX_20260915.md` and the latest Airwallex progress files before acting.
2. Confirm this breakpoint file and that the above three command groups were NOT executed yet.
3. Execute/guide the cache-transient cleanup only after confirming no new contradictory evidence.
4. Inspect exact values of `woocommerce_gateway_order` and `woocommerce_payments_nox_profile` before any mutation.
5. Remove only obsolete Airwallex subentries if needed; never delete those generic option rows wholesale.
6. Re-run full Airwallex zero-match audit.
7. Run Checkout runtime regression before formally closing Airwallex cleanup.
8. Continue broader Site Hygiene only after Airwallex closure.

## Standing user requirements
- Every meaningful action/state/correction must be written to GitHub before advancing.
- Preserve WordPress/WooCommerce real ownership and backend editability.
- Never delete based only on names/appearance; prove dependency first.
- No image generation without explicit user permission.
- Give exact, executable instructions for admin/database operations.
- Keep complete indentation in code.
