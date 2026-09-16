# Site Hygiene — Polylang Final Dependency Clearance & Cleanup Ready — 2026-09-16

## Status
Polylang 3.7.7 is inactive on both main site and blog. Final dependency clearance is complete. Cleanup is now READY, subject to dedicated backup and a final shared-term safety preflight before writes.

## Final dependency evidence

### Current menu ownership
Main-site active menu locations resolve to current Spatial Flow menus:
- sf_primary -> 191 -> Main Header Menu
- sf_mobile -> 192 -> Main Mobile Menu
- sf_footer_shop -> 193 -> Main Footer Shop Menu
- sf_footer_journal -> 194 -> Main Footer Journal Menu
- sf_footer_about -> 196 -> ABOUT & SERVICES
- sf_footer_customer -> 197 -> CUSTOMER CARE
- sf_footer_legal -> 199 -> Footer Legal Menu
- sf_footer_support -> 0

Blog active menu locations resolve to current blog menus:
- sf_primary -> 41 -> Blog Header Menu
- sf_mobile -> 42 -> Blog Mobile Menu
- sf_blog_footer_sections -> 49 -> Blog Footer Sections
- sf_blog_footer_explore -> 50 -> Blog Footer Explore
- sf_blog_footer_journal -> 51 -> Blog Footer Journal
- sf_blog_footer_legal -> 53 -> Legal Bottom Links
- other footer locations -> 0

These current assignments do not match the stale menu IDs stored inside the inactive main-site `polylang` option (`56`, `118`, `59`, `58`). Therefore the Polylang menu mapping is historical/dormant, not the owner of current menu routing.

### No current menu-item language links
Read-only query of main-site `nav_menu_item` metadata for `polylang`, `pll_`, or language-prefix URLs (`/en/`, `/fr/`, `/ru/`, `/ko/`, `/de/`, `/ja/`, `/hi/`, `/th/`) returned no rows.

### No custom theme dependency
Recursive source search in `spatial-flow-astra-child-v1.2-main-journal` for `pll_` and `polylang` returned no matches.

### No custom plugin dependency
Recursive source search in:
- `spatial-flow-crypto-pay`
- `spatial-flow-diy-cart-bridge`

for `pll_` and `polylang` returned no matches.

### No published/private content language-prefix links
Read-only query of current main-site published/private post content and excerpts for internal language-prefix URLs returned no rows.

## Previously established Polylang data state
- Main site contains Polylang taxonomy structures: `language`, `term_language`, `post_translations`, `term_translations`.
- Seven non-English language object relationships (fr/ru/ko/de/ja/hi/th) point only to missing post IDs; 35/35 are dangling.
- Five `post_translations` groups are historical. Current surviving members are only English pages such as Home, Cart, Checkout, Shop; all non-English mapped IDs are missing. One translation group is entirely orphaned.
- `term_translations` similarly contains historical multilingual mappings where the non-English target terms are missing; current surviving real terms are English/current taxonomy terms.
- Main English `language` taxonomy still has dormant relationships to existing attachments/pages/products. With Polylang inactive and no current code/menu/content dependency, these relationships are metadata residue, not required content ownership.
- No Polylang cron events.
- No Polylang Action Scheduler actions.
- Blog `relevanssi_polylang_all_languages=off` belongs to active Relevanssi and must be preserved.

## Cleanup policy
Before writes:
1. Export dedicated backup of main/blog taxonomy + options tables.
2. Run a final safety preflight confirming Polylang-owned term IDs are not shared by any non-Polylang taxonomy.
3. If preflight returns no shared-term conflicts, quarantine plugin files.
4. Remove only relationships whose `term_taxonomy_id` belongs to the four Polylang taxonomies.
5. Remove those four Polylang taxonomy rows.
6. Remove termmeta/terms only for the captured Polylang-owned term IDs and only when no other taxonomy still references the term ID.
7. Remove only Polylang-owned main-site options/transients; preserve Relevanssi option.
8. Verify zero Polylang taxonomy residue, zero plugin presence, current menus intact, and runtime smoke PASS.

## Protected boundaries
Do NOT remove:
- current nav menus or menu assignments
- category/product_cat/product_tag terms
- active Relevanssi option `relevanssi_polylang_all_languages`
- unrelated WordPress terms or term relationships
- quarantine directory or backups

## Decision
**Polylang: CLEANUP READY (not yet CLOSED).**
