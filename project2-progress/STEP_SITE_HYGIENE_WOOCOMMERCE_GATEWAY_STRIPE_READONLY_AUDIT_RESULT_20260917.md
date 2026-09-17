# Site Hygiene — WooCommerce Stripe Gateway read-only audit result

Date: 2026-09-17

## Scope
Target plugin: `woocommerce-gateway-stripe` 10.2.1.

Current temporary-cleanup policy: remove only globally inactive plugins and their clearly owned residue, then return to the Project 2 mainline. Active-plugin replacement/source consolidation is deferred to final deep cleanup.

## Activation state
- Main site: inactive
- Blog site: inactive
- Plugin files present at `wp-content/plugins/woocommerce-gateway-stripe`
- Main-site `woocommerce-payments` remains active and is a protected owner boundary.

## Ownership evidence from plugin source
The Stripe Gateway source directly owns/uses:
- `woocommerce_stripe_settings`
- `woocommerce_gateway_stripe_retention`
- `wc_stripe_*` notice/version/cache/webhook-state options
- Stripe webhook-state options including live/test monitoring timestamps, success/failure timestamps, and last-error values
- Stripe-specific Action Scheduler hooks such as database cache maintenance when active

The plugin's own `uninstall.php` explicitly deletes its Stripe webhook-state and notice options, confirming ownership of the relevant residue.

## Database findings
Stripe-related options currently present only on the main site:
- `wc_stripe_optimized_checkout_default_on`
- `wc_stripe_show_sca_notice`
- `wc_stripe_show_style_notice`
- `wc_stripe_version`
- `wc_stripe_wh_last_error`
- `wc_stripe_wh_last_failure_at`
- `wc_stripe_wh_last_success_at`
- `wc_stripe_wh_monitor_began_at`
- `wc_stripe_wh_test_last_error`
- `wc_stripe_wh_test_last_failure_at`
- `wc_stripe_wh_test_last_success_at`
- `wc_stripe_wh_test_monitor_began_at`
- `woocommerce_gateway_stripe_retention`
- `woocommerce_stripe_settings`

Blog site returned no Stripe options.

## Scheduled-task findings
- Main WP-Cron Stripe search: no output
- Blog WP-Cron Stripe search: no output
- Action Scheduler Stripe search: no output

Therefore there are no active Stripe Gateway scheduled tasks to remove.

## Custom-code dependency check
Searches across:
- active child theme
- `spatial-flow-crypto-pay`
- `spatial-flow-diy-cart-bridge`

returned no references to:
- `woocommerce-gateway-stripe`
- `woocommerce_stripe_settings`
- `wc_stripe_`

## Decision
`woocommerce-gateway-stripe` is cleanup-ready under the current temporary hygiene scope.

Important owner boundary:
- Do not bulk-delete arbitrary values merely because their names contain `stripe`.
- Protect `woocommerce-payments` and its data.
- Remove only the exact option names proven to belong to WooCommerce Stripe Gateway.

Next action:
1. Create a dedicated pre-cleanup backup of `wp_options`.
2. Quarantine the plugin folder.
3. Delete the exact proven Stripe Gateway option set.
4. Verify no target options/plugin entry remain.
5. Runtime-check Checkout/payment presentation.
6. If PASS, close the plugin and run the final temporary-plugin-list review before returning to the Project 2 mainline.
