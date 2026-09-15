# Airwallex Final DB Zero-Residual Recheck — 2026-09-15

## Context
After source cleanup and live-file replacement, the main-site database was rechecked for remaining `Airwallex/airwallex` references.

## Confirmed clean layers
- `wp_posts`: no Airwallex matches.
- `wp_postmeta`: no Airwallex matches.
- `wp_actionscheduler_actions`: no Airwallex matches.
- WordPress cron option: no Airwallex match.
- Airwallex-named custom tables: none.

## Remaining references
### wp_options
Three generic/shared option rows still contain historical Airwallex text in their **values**:
1. `_transient_woocommerce_admin_payment_gateway_suggestions_specs` — cache/transient, large payload.
2. `woocommerce_gateway_order` — live WooCommerce generic gateway-order option; must NOT be deleted wholesale.
3. `woocommerce_payments_non_profile` — WooCommerce/WooPayments generic option; must NOT be deleted wholesale without value-level inspection.

### wp_sitemeta
One network-level cache row still contains historical Airwallex text in its **value**:
- `_site_transient_wp_plugin_dependencies_plugin_data`

## Safety decision
- The transient/cache rows can be regenerated and are candidates for deletion as whole cache entries.
- `woocommerce_gateway_order` is a live generic WooCommerce option and requires value-level inspection plus targeted removal of obsolete Airwallex gateway IDs only.
- `woocommerce_payments_non_profile` likewise requires value-level inspection before any write.
- Do not use broad `DELETE ... WHERE option_value LIKE '%airwallex%'`.

## Current state
Airwallex cleanup is nearly complete. Remaining work is limited to shared/cache option values, then runtime Checkout regression and final closure.