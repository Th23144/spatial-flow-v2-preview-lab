# Site Hygiene — Polylang Final Runtime PASS and Closure

Date: 2026-09-16
Target: `polylang` 3.7.7
Status: **PASS / CLOSED**

## Final runtime confirmation
User confirmed all requested smoke-test pages and navigation remain normal after Polylang cleanup.

Checked areas included:
- Main site Home
- Main Header/navigation
- Shop
- Single Product
- Cart
- Checkout
- Blog Home
- Blog Header/navigation
- A published blog article

## Technical cleanup already completed
- `polylang` inactive on both sites before cleanup.
- Dedicated backup confirmed:
  - `C:\Users\23144\Local Sites\spatialflow\app\polylang-before-cleanup-20260916.sql`
  - 7,651,841 bytes
- Plugin directory moved into quarantine.
- Polylang-owned taxonomy structures removed from the main site:
  - `language`
  - `term_language`
  - `post_translations`
  - `term_translations`
- Polylang-owned `pll_*` terms removed after ownership safety checks.
- Main-site Polylang options removed.
- Polylang language-list transients removed on both sites.
- Plugin no longer appears in either site plugin list.
- Current `sf_*` menu location assignments remained unchanged after cleanup.
- No Polylang cron or Action Scheduler dependency remained.

## Preserved data
The following option is intentionally preserved because it belongs to active Relevanssi on the blog site, not to the removed Polylang plugin:

- `wp_2_options.relevanssi_polylang_all_languages = off`

## Rollback assets
Do not delete yet:
- `plugin-quarantine-20260916`
- `polylang-before-cleanup-20260916.sql`
- existing full site-hygiene database backup

## Closure decision
Polylang cleanup is now formally complete.

**Final state: PASS / CLOSED.**
