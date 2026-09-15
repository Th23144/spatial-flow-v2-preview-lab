# Airwallex Targeted Option Cleanup — SUCCESS — 2026-09-15

## Execution environment
- Local Site Shell for `spatialflow.local`
- Main multisite site (`blog_id = 1`, `wp_*` tables)
- Executed through WP-CLI with WordPress option APIs and plugins/themes skipped.

## Result
The serialization-safe targeted cleanup completed successfully.

WP-CLI reported:
- rollback snapshot created successfully outside the web root;
- `woocommerce_gateway_order` cleaned of the eight verified Airwallex-owned gateway keys;
- `spatial_flow_crypto` remained present after the write and passed the post-write protection gate;
- `woocommerce_payments_nox_profile['suggestions']['airwallex']` removed;
- exact Airwallex-owned option `woocommerce_awx_onboarding_gateway_settings` deleted;
- transaction committed successfully.

## Removed gateway IDs
1. `awx_onboarding_gateway`
2. `airwallex_main`
3. `airwallex_card`
4. `airwallex_wechat`
5. `airwallex_express_checkout`
6. `airwallex_pos`
7. `airwallex_klarna`
8. `airwallex_afterpay`

## Protected non-Airwallex gateway
- `spatial_flow_crypto` — confirmed still present after cleanup.

## Rollback artifact
WP-CLI created a pre-write JSON snapshot at:
`C:/Users/23144/Local Sites/spatialflow/app/airwallex-pre-final-cleanup-20260915.json`

## Current state
The targeted database write phase is PASS.

Next step is the final read-only Airwallex/AWX zero-residual audit across main-site database layers before any Checkout runtime regression. Checkout must not yet be marked PASS/CLOSED until that audit and subsequent runtime regression are completed.
