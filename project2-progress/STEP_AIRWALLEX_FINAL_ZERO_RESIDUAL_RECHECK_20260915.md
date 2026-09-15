# STEP — Airwallex Final Zero-Residual Recheck — 2026-09-15

## Context
After removing the six Airwallex-created Payment pages, clearing Airwallex Action Scheduler jobs/logs, and replacing the accepted cleaned checkout-safe5.css and form-checkout.php into the running Local site, a final database-wide zero-residual recheck was executed.

## Confirmed clean layers
The following final checks returned zero Airwallex matches:
- wp_posts title / slug / post_content
- wp_postmeta key / value
- Action Scheduler hook / args
- WordPress cron
- Airwallex-named database tables

## Remaining wp_options value-level matches
Three generic options still contain the string `airwallex` somewhere in their values:
1. `_transient_woocommerce_admin_payment_gateway_suggestions_specs` — autoload off — cache/transient candidate.
2. `woocommerce_gateway_order` — autoload auto — live WooCommerce gateway ordering configuration; DO NOT delete the whole option.
3. `woocommerce_payments_nox_profile` — autoload off — requires value-level inspection before any mutation.

No option_name itself is Airwallex-specific.

## Remaining network-level match
`wp_sitemeta` has one value-level match:
- `_site_transient_wp_plugin_dependencies_plugin_data`
This is a network-level site transient/cache candidate, not an Airwallex-owned permanent setting.

## Safety decision
Do NOT delete `woocommerce_gateway_order` or `woocommerce_payments_nox_profile` wholesale.
Next step is:
- clear the two obvious cache/transient rows safely;
- inspect the exact value structure of `woocommerce_gateway_order` and `woocommerce_payments_nox_profile` before targeted cleanup;
- preserve unrelated gateway settings and current payment ordering.

## Status
FINAL ZERO-RESIDUAL RECHECK: PARTIAL PASS
Persistent operational layers are clean; only generic cache/config values remain to classify and surgically clean.
