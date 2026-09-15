# Airwallex Gateway IDs — Confirmation Pending Final Write

From the read-only `woocommerce_gateway_order` value inspection, the following obsolete gateway IDs are present immediately before `spatial_flow_crypto`:

- `awx_onboarding_gateway`
- `airwallex_main`
- `airwallex_card`
- `airwallex_wechat`
- `airwallex_express_checkout`
- `airwallex_pos`
- `airwallex_klarna`
- `airwallex_afterpay`

Seven entries contain the literal `airwallex`; `awx_onboarding_gateway` is an additional Airwallex-family candidate identified by prefix and adjacency and should be independently verified before executing the cleanup write.

The cleanup must preserve `spatial_flow_crypto` and all unrelated gateway IDs, and it must be serialization-safe.
