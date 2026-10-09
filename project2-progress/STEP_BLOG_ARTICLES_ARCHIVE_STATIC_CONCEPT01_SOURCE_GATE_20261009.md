# Project 2 — Blog Articles Archive Static Concept 01 / Source Gate

Date: 2026-10-09
Status: **STATIC PREVIEW CREATED / AWAITING USER VISUAL REVIEW**. No production mapping or visual acceptance yet.

## Why now
After a failed premature Header/Footer-only production SAFE1, the user explicitly directed completion of all Blog-subsite page designs, then site-wide visual QA, then production WordPress mapping. User additionally reiterated requirement for assistant to exercise independent professional judgment rather than automatic agreement.

Blog Home / Journal Concept 03 was considered “还不错” but not final closed. Its editorial paper/seal/colophon system is the visual reference for the Blog page family.

## Current page
**Articles Archive / All Articles — Concept 01**.

Preview: https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/0ba8e02ea9e560283818334a8845c43a2c9d2cd2/temp-preview/Spatial-Flow-Journal-Articles-Archive-01.html

Source branch: `temp-blog-articles-archive-concept01`
Source path: `temp-preview/Spatial-Flow-Journal-Articles-Archive-01.html`
Pinned commit: `0ba8e02ea9e560283818334a8845c43a2c9d2cd2`.

## Visual decisions (not blindly copying)
- Preserve Project 3 early original archive's complete 12,517-character main CSS block, the expressive serif archive H1, Chinese titling, paper palette, deep ink Editorial Feature band, original three-column article-row geometry and handwritten-style seal, the thin ruled taxonomy area, and the unboxed Browse by Path cards.
- Do not duplicate Blog Home's full-screen photography cover. Archive is a *utility-reading index*, not a second marketing landing page.
- Original Project 3 `Latest Issue` assumes a real Issue content domain; current Project 2 WordPress Blog does not have an Issue CPT/template verified. Keep the visual dark-band composition but repurpose it as **Editor's Selection** with selected public posts only.
- Convert old Issue/Letters/Classic Poetry example records into clear editorial demonstration titles about spaces, crystals, materials, everyday routines and care. **These are illustrative examples only, not claims that WordPress has those exact posts.**
- Preserve original Project 3 Archive Shelf editorial rows instead of defaulting to a generic photo-card grid.
- Convert "Browse by Path" from invented Topics/Collections/Issues future functions to three understandable entry routes based on current blog content domains; production destinations must resolve to actual WordPress categories or public post collections.
- Append adapted concept03 Journal Dispatch with email/topic input contract; demonstration handler is intentionally inert. Actual production `template-parts/journal-dispatch-band.php` stores submissions but does NOT automatically email newsletters.
- Share the **Concept 03 nav/footer visual components** as the static shell (inlined JS to remove original Project3 relative script URLs); no CSS or PHP is transplanted into live shared child theme.

## Actual WordPress template ownership observed
User ZIP `spatial-flow-astra-child-v1.2-main-journal(2).zip`, child theme version 2.7.105:
- `home.php` provides real All Articles UI, existing `spatial_flow_journal_copy()` controls, the WordPress `s` native search form, `template-parts/journal-index.php`, and actual Dispatch part.
- `template-parts/journal-index.php` makes a real `WP_Query` for *published posts*, **9 posts/page**, supports categories, tags, authors and search query, uses `template-parts/content-journal-card.php` and native `spatial_flow_pagination()`.
- `category.php` and `archive.php` are separate blog templates using same index partial. Visual mapping later must preserve this.
- Core per-page archiving/post discovery should be backed by real WP query, not by the client-side JS static mock.

## Prototype interactions, precisely scoped
- 12 sample items, 4 demo subjects.
- 9 per page, demo page 1 (9 items), page 2 (3 items).
- Category filter updates and clears sample text search.
- Sample search, no-result state with reset, pagination and a sample article preview dialog work using local JS. **No requests are issued to WordPress**; actual blog pages and article-detail design will be finalized later.
- Featured left and three featured-right anchors open sample preview instead of claiming real permalinks.
- Journal Dispatch static form prevents sending and explicitly states no mail delivery is promised.
- Real WordPress Post data, captions and categories will replace demo assets and text after visual sign-off.

## Static verification performed
- New candidate fetched back from GitHub at pinned commit: **56,504 characters**.
- HTML has one H1, one main landmark, 4/4 matching section tags; common Footer component exists.
- The three embedded JavaScript programs each passed independent V8 syntax compilation; original project3 `./shared/*.js` dependencies absent.
- A controlled DOM-stub behavior test PASSED for initial 9/12 view, filtered 3/3 view, empty search and reset, second-page 3/12 view, sample-dialog open, inert Dispatch status.
- **Not browser screenshot QA:** live Chromium visual QA has not been run; do NOT claim exact visual 1:1 or mobile acceptance.
- No Project3 repository changes. No ZIP install, PHP, CSS, JS changes in live WordPress theme. The withdrawn SAFE1 remains REJECTED.

## Next gate
1. Let user visually compare archive Concept01 with Project3 original Archive and Blog Home Concept03, desktop/mobile.
2. Take precise aesthetic/interaction feedback and revise static file if warranted.
3. Continue static-family design in order: Single Article → Category/Topic → Search → 404/empty states → Issue only if real demand/model justified.
4. Site-wide design harmonization and final acceptance before any WordPress production mapping.

**NO PRODUCTION IMPLEMENTATION authorized by this document.**
