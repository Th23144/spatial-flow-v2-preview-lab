# Airwallex Generic-Container Audit Execution — 2026-09-15

## Context
This record continues the final Airwallex residual-cleanup chain after the source Source Gate PASS and the 01–07 final read-only DB recheck.

## Execution result received from Local/Adminer
The following exact-key delete batch was executed on the main-site tables (`wp_*`):

- `wp_options.option_name = '_transient_woocommerce_admin_payment_gateway_suggestions_specs'`
- `wp_sitemeta.meta_key = '_site_transient_wp_plugin_dependencies_plugin_data'`

Adminer reported **0 affected rows** for both DELETE statements. Therefore, at execution time neither exact row was present to be deleted. This does not establish why they disappeared; the final zero-residual recheck must still verify they remain absent.

## Structure inspection result
### `woocommerce_gateway_order`
- Row exists.
- Value is a PHP-serialized array.
- Screenshot begins with `a:58:{...}`, so the option currently contains 58 gateway-order members.
- The Adminer result cell truncates the long serialized value, so the obsolete Airwallex gateway key(s) are not yet fully identified.
- **No write is authorized yet.** The next action is read-only extraction of the Airwallex occurrence(s)/context from this option.

### `woocommerce_payments_nox_profile`
The actual Local option name is confirmed as:

`woocommerce_payments_nox_profile`

This corrects the earlier documentation typo `woocommerce_payments_non_profile`.

The value is a PHP-serialized WooCommerce Payments profile whose visible structure contains only an Airwallex suggestion attachment timestamp branch:

`['suggestions']['airwallex']['attached']['timestamp']`

This establishes that the Airwallex reference is stored inside a WooCommerce-owned generic profile, not in an Airwallex-owned standalone option. Any cleanup must use a structure-safe WordPress option operation or an otherwise serialization-safe targeted method; do not hand-edit serialized byte lengths in SQL.

## Safety decision
- Do not delete or broad-match rows by `option_value LIKE '%airwallex%'`.
- Do not hand-edit the serialized `woocommerce_gateway_order` string.
- Do not modify `woocommerce_gateway_order` until all Airwallex gateway IDs in the decoded/serialized array are identified.
- The exact Local DB option name is authoritative: `woocommerce_payments_nox_profile`.

## Current stop point
Airwallex residual cleanup remains **OPEN / PARTIAL PASS**.

Next step:
1. Read-only identify/count/extract Airwallex member(s) inside `woocommerce_gateway_order`.
2. Then perform serialization-safe targeted cleanup of the obsolete Airwallex member(s) in `woocommerce_gateway_order` and the Airwallex suggestion branch in `woocommerce_payments_nox_profile`.
3. Run the full zero-residual audit again.
4. Only after that run the existing Checkout runtime regression; do not redesign Checkout.