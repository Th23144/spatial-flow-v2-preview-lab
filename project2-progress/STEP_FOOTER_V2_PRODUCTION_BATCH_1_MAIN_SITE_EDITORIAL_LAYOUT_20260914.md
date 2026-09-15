# STEP_FOOTER_V2_PRODUCTION_BATCH_1_MAIN_SITE_EDITORIAL_LAYOUT_20260914

Date: 2026-09-14
Project: Spatial Flow V2 / 项目二换皮工程
Subsystem: Main-site Footer V2
Status: LIVE IMPLEMENTATION BATCH ISSUED — SOURCE RETURN PENDING

## User lock
The user authorized direct production implementation and explicitly corrected the content rule: Footer information/copy must not be rewritten during this implementation. The user will edit copy separately later.

## Exact source owners re-audited
- `footer.php`: main-site branch and Journal branch are separate; only the main-site branch is in scope.
- `assets/css/spatial-flow.css`: existing bounded main Footer dark-editorial block is identified by `Project2 Step 4B-R2-B — Main Footer Dark Editorial START/END` and will be replaced in place, not layered with another patch.
- `assets/js/spatial-flow.js`: `setupFooter()` owns mobile Footer accordion behavior.
- No `functions.php` change is required for this batch.

## Batch scope
1. `footer.php`
   - Recompose the main-site Footer into a near-full-width editorial top grid.
   - Preserve all current `wp_nav_menu()` locations, fallback labels/URLs, Customizer text keys, legal/menu/social owners, and all current wording.
   - Move the existing trust intro information into the brand/editorial column so it is not lost.
   - Keep the three trust promises and their existing descriptive copy exactly; only change layout/visual weight.
   - Do not touch the Journal Footer branch.

2. `assets/css/spatial-flow.css`
   - Replace the existing bounded main Footer dark-editorial block in place.
   - Main-site Footer shell becomes near-full-width and visually aligned with Header V2.
   - Compact trust rail; no rounded trust card.
   - Desktop/tablet/mobile layouts are intentional; mobile nav remains accordion-based and significantly shorter when closed.
   - Main-site-only selectors; Blog/Journal Footer not restyled by this batch.

3. `assets/js/spatial-flow.js`
   - Replace only `setupFooter()`.
   - Maintain desktop-open/mobile-closed behavior.
   - Main-site mobile Footer uses one-open-at-a-time accordion and `aria-expanded` synchronization.
   - Journal Footer keeps independent toggle behavior.

## Validation flow
User applies all three edits as one coherent batch, saves all files, clears cache/hard-refreshes, then returns all three modified files together. Combined source gate comes before runtime/visual acceptance.
