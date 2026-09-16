# Site Hygiene — Polylang Read-Only Audit Start — 2026-09-16

## Status
READ-ONLY AUDIT STARTED

## Current plugin state
- `polylang` 3.7.7 is inactive on main site.
- `polylang` 3.7.7 is inactive on blog site.
- No network-active plugin state.

## Known prior residue signals
Prior global residue audit observed Polylang-owned or Polylang-related data, including examples such as:
- main-site `polylang`
- main-site `polylang_wpml_strings`
- main-site `pll_dismissed_notices`
- main-site `pll_language_from_content_available`
- `_transient_pll_languages_list` on both sites
- `widget_polylang` on main site
- `relevanssi_polylang_all_languages` on blog site

Important ownership boundary:
- `relevanssi_polylang_all_languages` may be an integration/cache owned by active Relevanssi on the blog, so it must not be deleted merely because its name contains `polylang`.
- Language taxonomies / term relationships may contain historical content associations; these require read-only inspection before any write.

## Audit objective
Determine whether Polylang has any current live content, taxonomy, menu, widget, postmeta, option, cron, or integration dependency before considering quarantine or cleanup.

## Hard rules
- No plugin move yet.
- No option deletion yet.
- No term/taxonomy deletion.
- No post/postmeta mutation.
- No menu mutation.
- No Relevanssi integration/cache deletion without explicit ownership proof.

## Next phase
Run targeted read-only inventory of plugin files, language taxonomies/terms, options, widgets/sidebars, postmeta/content references, cron, and current page/content language assignments.
