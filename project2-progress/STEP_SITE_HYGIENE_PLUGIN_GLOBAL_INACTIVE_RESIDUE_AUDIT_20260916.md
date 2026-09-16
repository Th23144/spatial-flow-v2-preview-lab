# Site Hygiene — Globally Inactive Plugin Residue Audit

Date: 2026-09-16

## Multisite scope confirmed
- blog_id 1 = `spatialflow.local`
- blog_id 2 = `blog.spatialflow.local`
- No network-active plugins.

## Globally inactive candidates under current audit
1. woo-advanced-shipment-tracking
2. akismet
3. woo-cart-abandonment-recovery
4. hello
5. woo-poly-integration
6. suretriggers
7. polylang
8. sidebar-manager
9. smart-slider-3
10. spatialflow-site-refinement
11. variation-swatches-woo
12. woocommerce-gateway-stripe

## Read-only audit results supplied by user
### Option matches
Main-site exact/likely residues include:
- `nps-survey-woo-cart-abandonment-recovery`
- `pll_dismissed_notices`
- `pll_language_from_content_available`
- `polylang`
- `polylang_wpml_strings`
- `suretriggers_verify_connection`
- `wc_advanced_shipment_tracking`
- `wc_ast_unclude_tracking_info`
- multiple `wc_stripe_*` keys
- `woocommerce_gateway_stripe_retention`
- `woocommerce_stripe_settings`

Blog-site relevant hits include:
- `_transient_pll_languages_list`
- `relevanssi_polylang_all_languages`

Important false-positive / protected-owner hits from the broad regex:
- `sidebars_widgets` = WordPress core option, not proof of Sidebar Manager ownership.
- `uag_enable_quick_action_sidebar` = Spectra/UAG owner on blog; protected while that plugin is active.
- `wpcode_usage_tracking_config` / `wpcode_usage_tracking_cron` = current WPCode / Insert Headers and Footers owner; not candidate residue.
- `elementor_allow_tracking*` = Elementor owner; not candidate residue.
- `villatheme_woo-orders-tracking_*`, `woo_orders_tracking_*`, `wp_vi_woo_orders_tracking_track_info` = current main-site Woo Orders Tracking owner; protected.
- `woocommerce_allow_tracking*` = WooCommerce core owner; protected.

### Plugin-created / plugin-associated tables found
- `wp_cartflows_ca_cart_abandonment`
- `wp_nextend2_smartslider3_generators`
- `wp_nextend2_smartslider3_sliders`
- `wp_nextend2_smartslider3_sliders_xref`
- `wp_nextend2_smartslider3_slides`
- `wp_suretriggers_webhook_requests`
- `wp_vi_woo_orders_tracking_track_info`

The VI Woo Orders Tracking table is protected because that plugin is active on the ecommerce site.

### Content references
Broad content scan returned only main-site `revision` rows (historic revisions for `astra` and `Home`) and no live published page/post rows for the searched inactive-plugin terms.
This is evidence against a live current-content dependency, but does not by itself authorize deletion of plugin data tables.

### Cron
Main site:
- `suretriggers_webhook_requests_cleanup_logs` remains scheduled even though SureTriggers is inactive on both sites.
- `wpcode_usage_tracking_cron` is unrelated/protected.

Blog site:
- only `wpcode_usage_tracking_cron` matched; unrelated/protected.

## Current classification
### Low-evidence / likely simple candidates
- akismet
- hello
- woo-poly-integration
- sidebar-manager
- variation-swatches-woo

These still require rollback protection before physical deletion.

### Residue-bearing candidates requiring dedicated cleanup before closure
- suretriggers: option + table + orphaned cron
- smart-slider-3: four Nextend tables + widget option + historic revision references
- polylang: options/transients + Relevanssi integration residue
- woo-cart-abandonment-recovery: option(s) + cart-abandonment table
- woo-advanced-shipment-tracking: options
- woocommerce-gateway-stripe: multiple Stripe options / webhook monitor residue

### Custom plugin requiring source-owner review before removal
- spatialflow-site-refinement

## Safety rule
Do not use broad REGEXP matches as deletion authority. Establish exact owner first. Do not delete core/current-plugin options merely because a candidate keyword matched.

## Next gate
Before any destructive plugin uninstall/delete:
1. Create DB rollback snapshot.
2. Create plugin-directory rollback/quarantine path.
3. Run exact row-count / data-value audits for residue-bearing candidates.
4. Review `spatialflow-site-refinement` source.
5. Remove low-risk plugin files first via quarantine, regression-test both sites, then permanently delete only after PASS.

Status: READ-ONLY RESIDUE AUDIT COMPLETE / DESTRUCTIVE CLEANUP NOT YET AUTHORIZED.
