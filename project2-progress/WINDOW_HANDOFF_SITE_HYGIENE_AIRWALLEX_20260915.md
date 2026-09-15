# WINDOW HANDOFF — Project 2 Site Hygiene / Airwallex Cleanup — 2026-09-15

## Project identity
Spatial Flow V2 / 项目二换皮工程
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Closed subsystems
### Main-site Header V2
- SOURCE VALIDATED: PASS
- RUNTIME VALIDATED: PASS
- FINAL VISUAL REVIEW: PASS
- USER ACCEPTED: PASS
- STATUS: CLOSED
- Do not reopen absent a concrete regression or explicit new request.

### Main-site Footer V2
- SOURCE VALIDATED: PASS
- RUNTIME VALIDATED: PASS
- DESKTOP VISUAL REVIEW: PASS
- MOBILE VISUAL REVIEW: PASS
- USER ACCEPTED: PASS
- STATUS: CLOSED
- Do not reopen absent a concrete regression or explicit new request.

## Current active stage
Site Hygiene / plugin-residual cleanup, starting with Airwallex.
User wants the WordPress install cleaned into a very tidy, minimal, understandable state, including old plugin residue, duplicate/suspicious pages, obsolete code, and later unnecessary plugins. Safety requirement: never delete based only on appearance/name; prove ownership and references first.

## Menu education status
User now understands the key concept that adding a Page from `Appearance -> Menus -> Add menu items` creates a navigation entry/link to that Page; it does not create/duplicate the Page itself.
Current main-site database has exactly seven `nav_menu` terms, matching the seven visible editable menus in WP Admin. No hidden `MAIN` menu exists. The earlier interpretation of `3602` as a menu item was wrong and was formally corrected; ID 3602 is a `shop_order_placehold` draft with WebToffee language meta and must not be touched.

The seven current editable menus are:
- `Main Header Menu`
- `Main Mobile Menu`
- `Main Footer Shop Menu`
- `Main Footer Journal Menu`
- `ABOUT & SERVICES`
- `CUSTOMER CARE`
- `Footer Legal Menu`

A later dedicated step still remains to fully explain `Appearance -> Menus -> Edit Menus / Manage Locations`, naming, Page vs Custom Link, and then clean/rename confusing menu objects safely.

## Multisite database mapping — CONFIRMED
Local database name: `local`
- `blog_id 1` -> `spatialflow.local` -> tables `wp_*`
- `blog_id 2` -> `blog.spatialflow.local` -> tables `wp_2_*`
Main e-commerce site audits must use `wp_*`, not `wp_2_*`.

## Airwallex plugin status
- User explicitly states Airwallex will not be used.
- Airwallex plugin itself has already been uninstalled.
- Current plugin list has no Airwallex plugin.
- Current WPCode list has no obvious Airwallex-named snippet.

## Airwallex cleanup already completed
### Pages
Six Airwallex-generated Pages titled `Payment` were identified. They were not six identical pages; they represented duplicated Airwallex payment-method holder pages (card / WeChat / all variants generated twice). User permanently deleted all six via WordPress Admin.

After deletion, orphan-menu audit returned zero dangling Page menu items. Menu layer is clean; do not touch the seven live menus for Airwallex cleanup.

### Action Scheduler
Exact Airwallex hook: `airwallex_check_pending_transactions`.
Immediate pre-delete counts were:
- actions: 259
- related logs: 773
User executed precise cleanup in transaction:
- 773 logs deleted
- 259 actions deleted
Post-cleanup:
- Airwallex actions = 0
- related logs = 0
- Airwallex scheduler group = none

### Source cleanup
Current cleaned files were user-applied into the running Local theme and passed combined Source Gate:

`assets/css/checkout-safe5.css`
- Airwallex-specific currency switching suppression block removed.
- Current SHA256: `c91ffeda26bd26d7d8a949b0a503fcf032315ea93e08fe49f7bf9e25dcdf2f72`
- CSS brace balance PASS / parser errors 0.

`woocommerce/checkout/form-checkout.php`
- obsolete Airwallex-specific comment changed to generic `gateway UI` wording.
- `woocommerce_checkout_payment()` remains intact and must remain intact.
- Current SHA256: `0fde940bfe83cc8181af6422de08780a24b8c4c2ce2206a1bb781e2a33e178a5`
- PHP lint PASS.

## Latest final DB zero-residual recheck — CURRENT BREAKPOINT
After live source replacement and prior cleanup, final read-only database-wide Airwallex scan returned:

CLEAN / ZERO MATCHES:
- `wp_posts` title / slug / post_content
- `wp_postmeta` key / value
- Action Scheduler hook / args
- WordPress cron
- Airwallex-named custom tables

Remaining generic `wp_options` rows whose VALUE still contains `airwallex`:
1. `_transient_woocommerce_admin_payment_gateway_suggestions_specs`
   - autoload off
   - cache/transient candidate
2. `woocommerce_gateway_order`
   - autoload auto
   - live WooCommerce generic gateway-order configuration
   - DO NOT delete whole option
3. `woocommerce_payments_nox_profile`
   - autoload off
   - generic WooCommerce/WooPayments option
   - DO NOT delete whole option without value-level inspection

Remaining `wp_sitemeta` value-level match:
- `_site_transient_wp_plugin_dependencies_plugin_data`
- network-level site transient/cache candidate

No Airwallex-specific `option_name` remains.

## Critical next step
Airwallex cleanup status is **PARTIAL PASS / NEARLY COMPLETE**.
Next window must NOT immediately delete the three generic options wholesale.

Continue in this order:
1. Read the latest Airwallex handoff/progress files, especially:
   - `project2-progress/STEP_AIRWALLEX_FINAL_DB_ZERO_RESIDUAL_RECHECK_20260915.md`
   - `project2-progress/STEP_AIRWALLEX_FINAL_ZERO_RESIDUAL_RECHECK_20260915.md`
   - this handoff file
2. Safely clear the two obvious cache/transient rows:
   - `_transient_woocommerce_admin_payment_gateway_suggestions_specs`
   - `_site_transient_wp_plugin_dependencies_plugin_data`
   Prefer regeneration-safe cache deletion, not broad value-match deletes.
3. Inspect the exact serialized/value structure of:
   - `woocommerce_gateway_order`
   - `woocommerce_payments_nox_profile`
   before any mutation.
4. Surgically remove only obsolete Airwallex IDs/entries if present, preserving all unrelated gateway settings and current gateway order.
5. Re-run full Airwallex zero-match audit.
6. Run Checkout runtime regression after database cleanup:
   - Step 01 Address
   - Step 02 Shipping + packaging
   - Step 03 Payment gateway host / Place Order
   - Step 04 Woo order-result path
   - coupon / totals / AJAX update sanity
7. Only after runtime PASS, close Airwallex residual cleanup formally.
8. Then continue the broader Site Hygiene program: inspect disabled plugins, historical WPCode snippets, Elementor/old builder dependencies, old Pages, plugin-created tables/options, and site footprint. Never remove an item without dependency evidence and rollback path.

## Important standing user requirements
- Every meaningful action/state/correction must be written into GitHub before advancing.
- Do not claim completion before Source/Runtime/User acceptance evidence exists.
- Preserve WordPress/WooCommerce backend editability and actual data owners.
- Do not hardcode dynamic commercial truth or fabricate content.
- No image generation without explicit user permission.
- When giving code, include complete indentation and exact bounded replacement instructions.
- One coherent feature touching multiple files should be issued as one coherent batch, not unnecessary microsteps.
- User wants very detailed, executable instructions for database/admin operations.

## Immediate state label
Airwallex residual cleanup: **FINAL ZERO-RESIDUAL RECHECK = PARTIAL PASS**.
Persistent operational layers are clean. Only generic cache/config values remain to classify/surgically clean, followed by Checkout runtime regression and formal closure.
