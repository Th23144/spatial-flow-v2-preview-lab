# Site Hygiene — Airwallex residual audit start — 2026-09-15

## Scope
Start a dedicated read-only residual audit for Airwallex and related plugin-generated artifacts before any deletion.

The user has confirmed:
- Airwallex will not be used;
- the Airwallex plugin has already been uninstalled;
- six published WordPress Pages named `Payment` remain, all showing slug `airwallex_payment_method_all` in Quick Edit;
- the current Checkout owner remains WooCommerce page ID 623 / `/checkout-2-2/` with `[woocommerce_checkout]`, not these six Payment pages.

## Audit principle
No deletion is authorized until the residual audit proves ownership and dependency status.

Audit layers:
1. Current live child-theme source: `functions.php`, `assets/css/spatial-flow.css`, `assets/js/spatial-flow.js`, `assets/css/checkout-safe5.css`, `assets/js/checkout-safe5.js`, checkout template overrides and any other files containing `airwallex`.
2. WPCode snippets and other admin-side custom code that may contain Airwallex compatibility logic.
3. WordPress database, read-only first: `wp_posts`, `wp_postmeta`, `wp_options`, Action Scheduler tables, cron/options, and any Airwallex-named custom tables if present.
4. Menu references / WooCommerce settings / plugin settings or stale options that point to Airwallex-created pages or gateway IDs.
5. Upload/cache/log residue only after code/database dependency review.

## Safety boundary
- Read-only evidence first.
- Database export / backup before any DELETE / DROP / UPDATE.
- No page deletion, option deletion, Action Scheduler cleanup, WPCode deletion, or source-code removal until an explicit cleanup plan is produced and user approves it.
- Do not remove generic checkout code merely because it historically coexisted with Airwallex; only remove code proven Airwallex-specific and now obsolete.

## Immediate evidence requested
- Current live child-theme files listed above.
- Screenshot/export/list of WPCode snippets with titles and enabled/disabled state; exact snippet content only for Airwallex/payment-related candidates.
- Full installed-plugins screenshot (to confirm current absence of Airwallex and current payment ecosystem).
- Read-only database evidence following the guided SQL queries to be provided in chat.

Status: AUDIT STARTED / READ-ONLY.
