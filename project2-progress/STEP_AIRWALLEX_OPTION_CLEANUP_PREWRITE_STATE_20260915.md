# Airwallex Option Cleanup — Pre-Write State

Current confirmed state before any serialization-safe database write:

- `_transient_woocommerce_admin_payment_gateway_suggestions_specs`: exact DELETE affected 0 rows; key already absent at execution time.
- `_site_transient_wp_plugin_dependencies_plugin_data`: exact DELETE affected 0 rows; key already absent at execution time.
- `woocommerce_payments_nox_profile`: contains `suggestions['airwallex']['attached']['timestamp']`; whole option must be preserved.
- `woocommerce_gateway_order`: contains seven literal `airwallex_*` gateway IDs plus adjacent `awx_onboarding_gateway`; `spatial_flow_crypto` follows and must be preserved.

No write has been executed against the two shared WooCommerce options yet.
