# Site Hygiene — Polylang Deep Audit: Content Bindings

Date: 2026-09-16
Status: HOLD — DO NOT CLEAN YET

## Current plugin state
- `polylang` 3.7.7 is inactive on both `spatialflow.local` and `blog.spatialflow.local`.
- Plugin directory still exists.

## Options found
### Main site
- `pll_dismissed_notices`
- `pll_language_from_content_available`
- `polylang`
- `polylang_wpml_strings`
- `widget_polylang`

### Blog
- `relevanssi_polylang_all_languages`
  - This belongs to / may be consumed by the active Relevanssi installation on the blog and is protected pending owner-specific review.

## Polylang taxonomy state — MAIN SITE
Polylang language/translation taxonomies are not empty:
- `language`: 8 taxonomy rows / count total 128
- `post_translations`: 5 rows / count total 40
- `term_language`: 8 rows / count total 13
- `term_translations`: 6 rows / count total 13

Languages present:
- English (`en`)
- Français (`fr`)
- Русский (`ru`)
- 한국어 (`ko`)
- Deutsch (`de`)
- 日本語 (`ja`)
- हिन्दी (`hi`)
- ไทย (`th`)

## Current non-revision content still bound to Polylang taxonomies
Main-site current content includes at least:
- 106 attachments bound to `language=en`
- 10 published pages bound to `language=en`
- 49 published products bound to `language=en`
- 4 published pages bound to `post_translations` groups
- WordPress font entities bound to `term_language` / `term_translations`

This is sufficient to classify the Polylang database layer as still materially embedded in live WordPress content structures, even though the plugin itself is inactive.

## Widget/sidebar
- `widget_polylang` exists on the main site, but `sidebars_widgets` contains no Polylang reference.
- Therefore the widget option is currently dormant, but not yet approved for deletion while the broader taxonomy state remains under audit.

## Cron / Action Scheduler
- No Polylang / `pll` cron hooks found.
- No Polylang / `pll_` Action Scheduler actions found.

## Blog postmeta search
Several blog posts matched `polylang|pll` inside `_elementor_element_cache` values. These are not sufficient by themselves to prove a live Polylang dependency because the match occurs inside large generated Elementor cache blobs. Exact context inspection is required before any interpretation or cleanup.

## Decision
Polylang is **NOT cleanup-ready**.

Reason:
- Main-site live content still has extensive Polylang taxonomy relationships.
- These relationships must be classified as either intentional retained metadata, obsolete historical multilingual scaffolding, or stale/dangling relations before any deletion.
- Removing the plugin folder alone would not clean these database structures and deleting the taxonomies blindly could damage content/menu/product metadata relationships.

## Next read-only audit
Before any write action:
1. Enumerate the exact non-English term relationships and their object IDs/post types/statuses.
2. Enumerate the exact published pages in `post_translations` groups and the contents of those translation groups.
3. Inspect language-linked products and determine whether all 49 are current catalog products.
4. Inspect the Elementor cache match context on the blog to distinguish genuine Polylang references from false-positive/cache-only text.
5. Keep `relevanssi_polylang_all_languages` protected until Relevanssi ownership is resolved.

## Hard protection
Do not yet:
- move/delete the Polylang plugin directory
- delete `language`, `term_language`, `post_translations`, or `term_translations`
- delete term relationships
- delete Polylang options
- delete `relevanssi_polylang_all_languages`
- modify menus or product language relationships
