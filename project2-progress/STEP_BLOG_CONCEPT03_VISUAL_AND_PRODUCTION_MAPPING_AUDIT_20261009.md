# Project 2 — Blog Concept 03: Structural QA + Production Mapping Audit

Date: 2026-10-09. Scope: Spatial Flow Blog subsite, WordPress Multisite blog ID 2. Main site ID 1 and Project 3 repo must not be changed.

## Source versions
Installed child theme source ZIP user uploaded `spatial-flow-astra-child-v1.2-main-journal(2).zip`, child version 2.7.105; extracted read-only. No PHP/CSS/theme files modified. PHP CLI lint on 12 relevant PHP files PASS (including header, footer, hub, mosaic, Dispatch, home, archive, category, search, single, functions).
Main visual candidate: `temp-blog-editorial-adaptation-03/temp-preview/Spatial-Flow-Journal-Editorial-Adaptation-03.html`. Latest reviewed preview pinned at commit `e493b97d44285d29abe96f3dce9d105cbee84ce6`: https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/e493b97d44285d29abe96f3dce9d105cbee84ce6/temp-preview/Spatial-Flow-Journal-Editorial-Adaptation-03.html
Only invisible semantic amendment after latest user review: add a main landmark around page content; replace existing big cover title div with one H1 preserving all CSS and existing design. No visual changes intended. Original 44,191-character CSS block remains byte-identical. Actual page screenshot/visual runtime has not been checked here; don't claim mobile runtime PASS.

## Confirmed user design judgment
Concept 01: REJECTED.
Concept 02: structurally faithful but missing too many useful visual blocks.
Concept 03: user says “这版还可以”; treat as **promising candidate / not final locked**, maintain original visual richness, editorial rhythm and public Reading Room + Dispatch. Do not replace with generic card-grid aesthetics or introduce member/VIP/custom ebook services.

## Eight content sections / editorial flow
Cover → curated Contents & Editor Note → featured articles → quote → editorial questions → public Reading Room → category shelf → Journal Dispatch → paper-style Footer.

## Native production owners, requirements, and gaps

| Visual area | Current real WP owner | Content/data contract | Need |
|---|---|---|---|
| Blog Header / mobile | `header.php`, `functions.php`, JS | Blog-specific `$sf_is_journal`; `sf_primary` desktop, `sf_mobile` mobile (independent per Multisite site); q-search route; real WP links | New visual geometry ONLY within journal branch; preserve main-site Header and mobile cart/search |
| Footer | `footer.php` journal branch; `sf_blog_footer_sections`, `sf_blog_footer_explore`, `sf_blog_footer_journal`, `sf_blog_footer_legal` | Existing WP managed menus / theme-mod footer copy / social links | Restyle native branch; do not transplant project3 Shadow DOM Footer or footer-snap JS |
| Cover + Colophon | `front-page.php` (blog dispatch) → `page-templates/journal-hub.php` | Existing `sf_journal_hero_img`, `sf_journal_copy_blog_home_{kicker,title,text}`; add only necessary explicit small-text/glyph optional Customizer owners | Preserve huge two-column cover and photo; do not show fictitious Issue number, ISSN, publication date or foreign editorial identity |
| Contents & Editor Note | `template-parts/journal-mosaic.php`, `functions.php` | Actual WP Posts; existing `sf_journal_home_featured_post_1..3`, `sf_journal_home_center_large_post`, `sf_journal_home_secondary_large_post`, plus auto-query | TOC must use valid post permalink/category/date rather than fake pages or manually hardcoded titles; separate editorial note text controls if required |
| Featured article cards | `template-parts/journal-mosaic.php` | Existing featured, updated, lifestyle, space, expertise post query sets and image helpers | Map visual grid without changing publication queries unintentionally; keep fallback and no duplicates where avoidable |
| Quote | New narrow sub-partial under Journal hub/mosaic | Prefer editable editorial excerpt or selected published Post quote, truthful attribution | Never fabricate reader or author quotation in production; hide if empty or show neutral non-attributed editorial text only |
| Questions of place | New narrow visual sub-partial reusing `sf_journal_home_bottom_post_1..4` *if safely re-owned*; else add four optional distinct post selectors | Public published posts only; title/category/excerpt/permalink from WP Posts | Do not ingest private `sf_dispatch_entry`; do not imply actual reader-submitted letters; hide cards with no valid published posts |
| Public Reading Room | Journal curated part / category term ownership | Curated public themes from actual WP categories or selected published posts; possible reuse of `sf_journal_category_band_term_1..2`, but confirm it doesn't break existing Archive slots | Two genuinely distinguishable paths with distinct real WP targets, no VIP, login or paywall |
| The Shelf / categories | Existing `sf_journal_category_band_term_1..6`, `spatial_flow_journal_get_category_tiles`, and native WP category URLs | WP taxonomy terms, term descriptions and counts | 4 cards at static reference, but do not discard existing 6-category backend capacity solely to fit prototype; responsive design should adapt |
| Journal Dispatch | `template-parts/journal-dispatch-band.php`; `assets/js/spatial-flow.js`; `functions.php` handler | Existing email + topic + nonce + honeypot + source_url, `action=spatial_flow_journal_dispatch_submit`; storage only, no outbound email | Reuse actual PHP form and AJAX contract; NEVER replace with static preview's fake form or promise automatic newsletter delivery |

## Concrete source findings
- `front-page.php` currently routes any blog ID other than 1 to Journal Hub; for future scalability, compare `spatial_flow_is_journal_site()` before broadening, but **do not change now**.
- `header.php` checks `sf_journal_primary` as a preferred desktop menu slot, while that location is not registered in any source PHP. The registered fallback `sf_primary` works independently per Multisite site; preserve existing menu assignments. Do not manufacture a separate menu location without a specific need.
- Blog-specific `footer.php` branch already has independent menus, copy and cross-site CTA. All must survive visual reskin.
- Journal Copy Customizer already defines blog home copy and Dispatch copy controls, but some default Dispatch wording implies outgoing mail not currently implemented; functionality must be represented accurately in production, with editorial final-copy work deferred.
- Blog search `/search/?q=...` and standard `?s=...` are intentionally separate paths; don't rewrite both to one query type without analyzing the current search handler.
- Static Concept 03 category cards and editorial paths use in-page `#articles`/`#archive` demo anchors, not actual post/category URLs. This is **preview-only**; live mapping must use genuine WP permalinks.
- The inherited static CSS is extensively GLOBAL (body, section, footer, font styles and topbar). **Do not append this 44K block unscoped into `spatial-flow.css`**, which would override sealed main-site pages. Scope all journal visual rules and preserve the protected main header/footer branch.
- The live theme uses `sf-v2-header--journal`, `sf-v2-footer--journal`, `sf-journal`; scope candidate to these contexts. The source static uses Shadow-DOM webcomponents only for visual preview; do not transplant these components into WordPress.

## Remaining gates
A. User visual follow-up for Concept 03: responsive actual-browser checks at desktop 1440/1365 and mobile 390/360/320, cover layout, editorial Questions→Reading transition, Reader cards and image positioning, Dispatch and original paper Footer. No actual browser QA claim yet.
B. User confirms design-level visual pass. Then produce one carefully bounded production mapping batch at a time, **direct exact original search/replace in chat**, expected match counts, preserved indent; no repeated CSS override layers.
C. Returned production PHP/CSS diff gate, PHP lint, WP runtime QA across blog and main sites, and final 1:1 acceptance.
D. Final official content/images and post-specific editorial copy remain deferred to Content Production; do not confuse with visual 1:1 gate.

## Repo state
- Only Project 2 preview branch semantic HTML edit and Project 2 progress documents modified.
- Project3 `Th23144/ink-east-planning` is READ ONLY.
- Latest installed WordPress theme files remain unchanged.
