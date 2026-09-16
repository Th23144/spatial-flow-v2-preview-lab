# Site Hygiene — Polylang Technical Cleanup PASS / Awaiting Runtime — 2026-09-16

## Scope
Target plugin: `polylang` 3.7.7

## Final technical verification
- Dedicated backup confirmed present:
  - `C:\Users\23144\Local Sites\spatialflow\app\polylang-before-cleanup-20260916.sql`
  - size: 7,651,841 bytes
- Exact Polylang transients were deleted from main/blog options.
- Final residual query returned only:
  - blog `relevanssi_polylang_all_languages`
- `relevanssi_polylang_all_languages` is intentionally preserved because it belongs to active blog Relevanssi and is not Polylang-owned cleanup residue.
- Prior cleanup already verified:
  - Polylang plugin files quarantined.
  - `language`, `term_language`, `post_translations`, `term_translations` taxonomies removed.
  - `pll_*` terms removed.
  - Polylang-specific main-site options removed.
  - plugin absent from both main and blog plugin lists.
  - menu location assignments unchanged after cleanup.

## Status
Technical cleanup: **PASS**.
Runtime/user smoke validation: **PENDING USER CONFIRMATION**.

Do not mark Polylang formally CLOSED until the user confirms that the requested main-site and blog runtime pages remain normal after cleanup.

## Protected items
- Keep `relevanssi_polylang_all_languages`.
- Keep `plugin-quarantine-20260916`.
- Keep `polylang-before-cleanup-20260916.sql`.
- Keep the earlier full database backup.
