# Site Hygiene — Polylang deep audit result and final dependency check

Date: 2026-09-16

## Current state
- Polylang 3.7.7 is inactive on both multisite sites.
- No Polylang/PLL Cron hooks found.
- No Polylang/PLL Action Scheduler actions found.
- Blog Elementor cache query returned no current Polylang/PLL matches; earlier broad hits were therefore cache/string false positives or stale index effects.
- Blog option `relevanssi_polylang_all_languages=off` belongs to active Relevanssi and must be preserved unless Relevanssi is later removed.

## Main-site language data findings
### `language` taxonomy
- English (`en`): stored count 93, 259 relationship rows, 165 relationships resolve to existing posts, 94 are dangling rows.
- French/Russian/Korean/German/Japanese/Hindi/Thai: each has 5 relationship rows and **all 5 are dangling**; none resolves to an existing post.
- Existing English objects include current attachments, published pages, and published products.

### `post_translations`
Five historical translation groups remain:
1. Home: English page 625 exists; seven non-English IDs are missing.
2. Cart: English page 622 exists; seven non-English IDs are missing.
3. Checkout: English page 623 exists; seven non-English IDs are missing.
4. Historical group whose English ID 624 is also missing; all eight IDs missing.
5. Shop: English page 616 exists; seven non-English IDs are missing.

Therefore the multilingual page copies themselves have already been deleted; the surviving translation groups are stale Polylang relationship metadata around current English pages plus one wholly orphaned group.

### Term language/translation data
- `term_language` still tags a small set of current English terms (including category/product category terms), while non-English term IDs resolve to missing terms.
- `term_translations` includes one old 8-language group in which only the English term remains plus several English-only one-member groups.

## Main Polylang option
`polylang` option reports:
- default language: `en`
- browser detection enabled
- products and product taxonomies registered for translation
- old per-language nav menu map present for English menu IDs
- version 3.7.7

Because the plugin is currently inactive, these Polylang taxonomies/options are not driving the current frontend by themselves. However, current English pages/products/attachments/categories are still attached to dormant Polylang taxonomy rows, and the Polylang option contains historical menu mappings.

## Interpretation
This is not an active multilingual implementation anymore. The non-English content layer is already gone; what remains is predominantly historical Polylang metadata plus English-side taxonomy bindings on current objects.

Before destructive cleanup, one final dependency check is required:
1. Verify the current Astra/WordPress nav-menu location assignments independently from the stale Polylang nav-menu map.
2. Verify no active plugin/theme/custom code references Polylang APIs, `pll_*` functions, or Polylang taxonomies.
3. Verify no current public URLs/menu items depend on language-prefixed routing.

## Hold
Do not move the Polylang plugin or delete language/post_translations/term_language/term_translations relationships yet. Proceed only after the final dependency check above.
