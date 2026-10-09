# Project 2 — Blog Header/Footer SAFE1 Source Gate (2026-10-09)

## User authorization and visual source
User said “开始，这个还不错” after Concept 03 review and mapping audit. Implement a first narrow Blog-only production-mapping candidate (Header & Footer shell) on actual latest user ZIP, without touching Project 3 or other pages.

## Artifact generated — NOT INSTALLED
- Input: `spatial-flow-astra-child-v1.2-main-journal(2).zip` from user, child 2.7.105.
- Output candidate: `spatial-flow-blog-shell-safe1-v2.7.106-TEST.zip` (conversation artifact, not pushed to GitHub production or public site).
- Complete Chinese manual install guide with source for all three added files: `BLOG_SHELL_SAFE1_MANUAL_INSTALL_AND_FULL_SOURCE.md` (conversation artifact).
- Original 36 theme files: exactly **three modified** `header.php`, `footer.php`, `functions.php`; **33 remained byte-for-byte unchanged**, including all preexisting CSS/JS/product/cart/checkout templates.
- Added: `template-parts/header-journal-safe1.php`, `template-parts/footer-journal-safe1.php`, `assets/css/journal-shell-safe1.css`; 39 total files.

## Isolation contract
1. `header.php`: early Journal-only `get_template_part` dispatch immediately after site-ID recognition, after `wp_body_open`. Main-site old header code and Woo/YITH/cart hooks entirely intact.
2. `footer.php`: early Journal-only `get_template_part` dispatch after existing footer menu helper closures, passing closures as `$args`. It independently invokes `wp_footer()` once, closes body/html and returns. Main-site old footer code untouched.
3. `functions.php`: CSS/EB Garamond font enqueues conditioned on `spatial_flow_is_journal_site()` only; changed child version 2.7.105 → 2.7.106 for cache bust; adds one blog footer subtitle Customizer field and updates blog-only default colophon typeface information.
4. No global CSS append to `assets/css/spatial-flow.css`: new scoped `sfj-*` stylesheet loaded after existing CSS on Journal only.
5. Reuse actual menus: Journal desktop `sf_primary`, mobile `sf_mobile` with fallback, footer three menu locations and legal; retain WP Customizer copy/social URLs. No Project3 Shadow DOM transplant.
6. Existing JS data selectors `data-sf-mobile-toggle`, `data-sf-mobile-drawer`, `data-sf-search-toggle`, `data-sf-search-panel`, `data-sf-footer-group` preserved. Blog search retains `/search/?q=...`.
7. No VIP, subscription promise, Project3 community/paid services. Existing blog content templates untouched.

## Source gate evidence
- All **32 PHP files** in final candidate linted with `php -l` PASS.
- New CSS parsed using `tinycss2`, 0 parse errors.
- PHP stub render test for new Journal partials: one Header, one Footer, one search form with `q`, three footer groups, four actual nav menu locations, no `#` placeholder social links in default stub state; DOM static gate PASS.
- Original ZIP versus candidate diff: exactly 3 modified, 3 added, 0 removed; all remaining 33 files byte-identical.
- Candidate ZIP `testzip` PASS, 39 files. SHA256: `c7462002316f29b65c7420b8800427fa146c09bf2fc2ca9edc10d8587bd1e224`.
- The browser/runtime test could NOT be completed: environment policy blocked both file:// and 127.0.0.1 Chromium navigation with ERR_BLOCKED_BY_ADMINISTRATOR; browser CLI also timed out. This is a **blocker for claims of browser pass**, not an indication that functionality is confirmed.

## Next user gate — manual installation and QA
Before installation backup local site. Verify user's installed version still 2.7.105, otherwise STOP and rebase. User may apply guide's 3 small original-file edits + create 3 new files, or test identical packaged ZIP from matching original baseline. Check WordPress blog desktop/mobile, search q results, mobile submenu, footer accordion, real Customizer options, site1 main Header/Footer regressions, narrow 390/360/320 widths, browser console. Require user screenshots, PASS or localized bug report before marking SAFE1 accepted. Do not proceed to Blog Home production until Shell mapping is accepted, unless explicitly instructed.

**Status: SOURCE PASS / AWAITING BLOG+MAIN RUNTIME + VISUAL ACCEPTANCE; NOT CLOSED.**
