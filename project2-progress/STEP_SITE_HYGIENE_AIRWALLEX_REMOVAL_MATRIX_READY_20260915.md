# Site Hygiene — Airwallex Removal Matrix Ready — 2026-09-15

## Status
READ-ONLY AUDIT COMPLETE ENOUGH TO PREPARE REMOVAL PLAN. No deletion executed yet.

## Confirmed multisite mapping
- blog_id 1 = spatialflow.local = wp_*
- blog_id 2 = blog.spatialflow.local = wp_2_*

## Confirmed Airwallex residue
### Pages
Six published `Payment` pages exist on the main site. They are Airwallex-generated payment-method carrier pages, not six byte-identical copies. Their slugs include distinct Airwallex payment-method variants (e.g. card, WeChat, all).

### Menu
Exactly one nav-menu item still references an Airwallex Payment page. The audit resolved it to menu `MAIN` and target slug `airwallex_payment_method_card`.

### Action Scheduler
All matched rows are hook `airwallex_check_pending_transactions`:
- failed: 221
- complete: 34
- pending: 2
- total matched actions: 257
- related Action Scheduler logs: 767

Because the Airwallex plugin has been removed and the user has stated Airwallex will not be used, these actions are orphaned plugin residue; the two pending rows are especially important to remove/cancel during cleanup.

### Options / network metadata
The read-only audit returned multiple Airwallex-specific `wp_options` rows, including `airwallex_*` settings and Airwallex page-id / connection / sandbox / order-status / payment-method options. It also returned generic WordPress/WooCommerce cache/order options whose *values* contain Airwallex; these generic rows must NOT be blindly deleted as a group.

One `wp_sitemeta` row also matched Airwallex through the plugin-dependency site transient/cache.

### Cron / tables / postmeta
- No Airwallex-named custom database table found.
- No WordPress cron row matched Airwallex.
- Whole-site postmeta Airwallex search returned no matches in the earlier audit.

## Confirmed current-theme source residue
Full scan of uploaded current child-theme ZIP found:
1. `assets/css/checkout-safe5.css`: Airwallex currency-switching / conversion-rate / converted-amount / convert-icon suppression selectors remain. High-confidence obsolete source candidate.
2. `woocommerce/checkout/form-checkout.php`: Airwallex-specific explanatory comment remains; underlying `woocommerce_checkout_payment()` call is generic WooCommerce ownership and must be preserved.

No other current-theme dependency on `airwallex_payment_method_all` / `airwallex_main` was found in the source scan.

## Safety interpretation
Do not treat every row whose value contains the word Airwallex as plugin-owned. Removal should distinguish:
- Airwallex-owned data: safe candidate once dependencies are detached.
- Generic WordPress/WooCommerce cache/order structures containing an Airwallex reference: handle selectively/regenerate, never bulk-delete by value match.

## Next step
Prepare and execute a controlled removal batch only after presenting the exact removal matrix and user approval. Recommended execution order:
1. remove stale menu reference;
2. delete the six Airwallex pages through WordPress/WP-CLI lifecycle rather than raw `wp_posts` deletion;
3. remove Airwallex-specific options and site-transient/cache residue;
4. remove 257 orphan Action Scheduler actions and 767 related logs in a transaction / bounded method;
5. remove obsolete Airwallex-only source code while preserving WooCommerce generic payment ownership;
6. re-run zero-residue read-only audit;
7. run Checkout/Cart/payment runtime regression.
