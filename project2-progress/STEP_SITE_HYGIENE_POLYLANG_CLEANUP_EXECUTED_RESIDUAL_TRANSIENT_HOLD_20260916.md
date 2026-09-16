# Site Hygiene — Polylang cleanup executed; residual transient HOLD — 2026-09-16

## Status
Polylang cleanup writes have been executed successfully enough to confirm the main taxonomy/plugin removal path, but the item is **NOT CLOSED YET**.

Current state: **CLEANUP EXECUTED / RESIDUAL TRANSIENT + BACKUP FILE VERIFICATION + RUNTIME VALIDATION PENDING**.

## Executed and observed
- Pre-delete cross-taxonomy safety query returned no rows.
- Dedicated export command reported success for `../polylang-before-cleanup-20260916.sql`.
- `wp-content/plugins/polylang` moved to `../plugin-quarantine-20260916/`.
- Main-site Polylang taxonomy relationships/taxonomies/terms cleanup command executed.
- Follow-up taxonomy query returned no `language`, `term_language`, `post_translations`, or `term_translations` rows.
- Follow-up `wp_terms` query returned no `slug REGEXP '^pll_'` rows.
- Main-site Polylang options cleanup reported 5 affected rows.
- Both site plugin lists no longer contain `polylang`.
- Main-site and blog menu-location mappings remained unchanged after plugin quarantine/taxonomy cleanup.

## Important interpretation of `Rows affected: 0`
The multi-statement taxonomy cleanup command ended with temporary-table cleanup and WP-CLI/MySQL reported `Rows affected: 0`. This is not treated as proof that nothing was deleted, because the immediate follow-up verification showed the four Polylang taxonomies and `pll_*` terms absent. Verification result is authoritative here.

## Residual items still present
Final broad option verification still returned:
- blog: `_transient_pll_languages_list`
- blog: `relevanssi_polylang_all_languages`
- main: `_transient_pll_languages_list`

`relevanssi_polylang_all_languages` remains intentionally protected because Relevanssi is active on the blog and the value was previously confirmed as `off`.

The two `_transient_pll_languages_list` rows are not yet classified as safe-to-ignore vs regenerated cache. They must be audited before Polylang is closed.

## Missing validation before closure
1. The dedicated export command reported success, but the user did not include the required `dir ..\polylang-before-cleanup-20260916.sql` confirmation. The backup file must be visibly confirmed with size before closure.
2. The source/owner of both `_transient_pll_languages_list` rows must be identified or safely cleared and rechecked.
3. Runtime smoke validation is still required for main Home/Header/Shop/Single Product/Cart/Checkout and blog Home/Header/article.

## Protected items
Do not delete:
- `relevanssi_polylang_all_languages`
- active Relevanssi blog data
- current `sf_*` menu assignments
- quarantine folder
- dedicated Polylang SQL backup
- prior full-site database backup

## Closure rule
Polylang may be marked CLOSED only after:
- backup file existence is confirmed,
- `_transient_pll_languages_list` handling is resolved,
- plugin remains absent,
- taxonomy remains zero,
- menus remain intact,
- runtime smoke test passes.
