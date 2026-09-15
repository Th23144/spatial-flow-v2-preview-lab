# Site Hygiene — Airwallex Residual Audit Phase 2 Results — 2026-09-15

## Scope
Read-only verification after Airwallex plugin removal. No DELETE/UPDATE/DROP/ALTER/TRUNCATE authorized or executed.

## New evidence from Local/Adminer
1. Action Scheduler query against `wp_actionscheduler_actions` returned the full requested LIMIT 200 rows, proving a large historical Airwallex scheduled-action footprint remains in the main-site database. The exact total is not yet known because the result hit the LIMIT.
2. The six `Payment` pages are six distinct Airwallex-created pages. They have different `post_name` values and differing content lengths / hashes; therefore they are not six byte-identical duplicates even though WordPress admin shows the same title.
3. The menu-reference query still returns one nav-menu reference to one of the Airwallex Payment pages. Exact menu identity must be read from a focused query before removal.
4. Prior audit already established multiple Airwallex-related `wp_options` matches and one network-level `wp_sitemeta` match, with no Airwallex-named custom tables and no WordPress cron match.
5. Theme source ZIP audit previously established remaining Airwallex-specific CSS in `assets/css/checkout-safe5.css` and one Airwallex-specific comment in `woocommerce/checkout/form-checkout.php`; generic `woocommerce_checkout_payment()` remains required and is not an Airwallex dependency.

## Current judgement
Airwallex uninstall left a multi-layer residual set: generated pages, at least one menu reference, options/network metadata, Action Scheduler history, and theme compatibility code. This is now confirmed residue, not a speculative cleanup target.

## Next read-only queries
Before any destructive step, run focused aggregate queries to:
- count Action Scheduler rows by hook/status/group and get exact total;
- list the six page IDs/slugs cleanly;
- resolve the exact nav-menu name/reference;
- list Airwallex option names and network meta keys only, without exposing values.

No deletion is authorized until those focused results are reviewed and a dependency-safe removal matrix is produced.
