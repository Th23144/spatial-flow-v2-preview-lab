# Airwallex `woocommerce_gateway_order` Structure Correction — 2026-09-15

## Correction
A prior conversational interpretation treated the serialized tail as an integer-indexed list of gateway IDs. That interpretation is corrected here before any write operation.

The extracted substring begins in the middle of a serialized key/value sequence, so a leading token such as `i:41;` can be the **value belonging to the preceding gateway key**. Current WooCommerce code also confirms `woocommerce_gateway_order` is used as an associative map keyed by gateway ID, e.g. `gateway_order[$id] = order`.

Therefore the safe data model for this cleanup is:

```text
gateway_id => numeric sort order
```

not:

```text
numeric index => gateway_id
```

## Cleanup consequence
The final cleanup must remove obsolete gateway IDs by **array key** using `unset( $gateway_order[ $gateway_id ] )` and must preserve all remaining numeric sort-order values. It must NOT call `array_values()` on the whole option, because that would change the option's data shape and could corrupt WooCommerce payment ordering semantics.

## Confirmed obsolete Airwallex-owned keys
- `awx_onboarding_gateway`
- `airwallex_main`
- `airwallex_card`
- `airwallex_wechat`
- `airwallex_express_checkout`
- `airwallex_pos`
- `airwallex_klarna`
- `airwallex_afterpay`

## Protected key
- `spatial_flow_crypto` must remain untouched.

## Status
No write has been performed yet. The project remains at the pre-write safety gate for one serialization-safe targeted cleanup batch.
