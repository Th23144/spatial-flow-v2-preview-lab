# Airwallex `awx_onboarding_gateway` Identity Confirmation — 2026-09-15

## Read-only audit result
The exact identifier `awx_onboarding_gateway` was searched across the main-site database.

### `wp_options`
Two rows matched:
1. `woocommerce_awx_onboarding_gateway_settings` — Airwallex-specific WooCommerce gateway settings option.
2. `woocommerce_gateway_order` — shared WooCommerce gateway-order list containing the historical gateway ID.

### Other layers
- `wp_postmeta`: no match.
- `wp_sitemeta`: no match.
- `wp_actionscheduler_actions`: no match.

## External identity verification
Public plugin source for Airwallex Online Payments Gateway defines its onboarding payment gateway with:

```php
public $method_title = 'Airwallex';
public $id = 'awx_onboarding_gateway';
```

Therefore `awx_onboarding_gateway` is definitively an Airwallex-owned gateway ID, not merely a naming inference.

## Project-source cross-check
Repository code search for `awx_onboarding_gateway` returned no current project-source references.

## Cleanup implication
It is now safe to classify all eight historical Airwallex gateway IDs in `woocommerce_gateway_order` as obsolete:
- `awx_onboarding_gateway`
- `airwallex_main`
- `airwallex_card`
- `airwallex_wechat`
- `airwallex_express_checkout`
- `airwallex_pos`
- `airwallex_klarna`
- `airwallex_afterpay`

`spatial_flow_crypto` must be preserved.

The shared serialized options must not be edited manually. Final cleanup should use WordPress option APIs so PHP serialization is regenerated safely.

The Airwallex-specific row `woocommerce_awx_onboarding_gateway_settings` is also an eligible exact-key cleanup target after rollback capture.

## Current stop point
Proceed to one serialization-safe targeted cleanup batch, then run the full Airwallex zero-residual audit before Checkout runtime regression.
