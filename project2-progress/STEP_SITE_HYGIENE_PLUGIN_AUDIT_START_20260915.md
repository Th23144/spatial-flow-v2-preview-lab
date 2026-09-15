# STEP — Site Hygiene Plugin Audit Start — 2026-09-15

## Current state
- Airwallex residual cleanup: CLOSED.
- Checkout legacy transparent edit-control frame regression: CLOSED.
- Single Product native WooCommerce variation first-paint/FOUC regression: CLOSED.
- Normal project mainline resumes at Site Hygiene.

## Scope of this step
Begin whole-site Site Hygiene with a read-only plugin inventory and ownership audit.

No plugin deletion, deactivation, option cleanup, table cleanup, cron cleanup, WPCode cleanup, or builder cleanup is authorized in this step.

## Safety sequence
1. Read-only inventory of all plugins, including network-active, inactive, must-use and drop-ins.
2. Confirm current multisite/plugin ownership against the live Local environment.
3. Classify each plugin as required / candidate / historical / unknown.
4. For candidates, audit dependencies, pages, options, tables, cron/actions, snippets, source references and rollback path.
5. Only after evidence and explicit approval: deactivate/uninstall one coherent batch at a time.
6. Clean residual data precisely.
7. Run page/checkout regression.
8. Record final result in GitHub.

## Hard boundaries
- Do not infer current plugin status from historical repository notes alone.
- Do not delete a plugin because its name looks old or inactive.
- Do not touch WooCommerce, WooPayments, CartFlows, YITH Wishlist, WPCode, the Spatial Flow child theme, or custom crypto functionality without a dependency audit.
- Main commerce site remains spatialflow.local / blog_id 1 / wp_*; blog remains blog.spatialflow.local / blog_id 2 / wp_2_*.

## Immediate next action
Collect a fresh read-only plugin inventory from the current Local site shell before deciding any deletion or deactivation.
