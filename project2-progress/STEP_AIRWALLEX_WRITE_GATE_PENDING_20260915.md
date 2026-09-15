# Airwallex Write Gate — Pending

A serialization-safe cleanup write has not yet been executed. Before any write, verify the ownership/identity of `awx_onboarding_gateway`; then remove only verified Airwallex entries from `woocommerce_gateway_order` and only `suggestions['airwallex']` from `woocommerce_payments_nox_profile`, preserving unrelated settings and `spatial_flow_crypto`.
