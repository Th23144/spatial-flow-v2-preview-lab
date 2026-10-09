# Project 2 — Blog Subsite Reskin Restart / Scope & Source Gate
Date: 2026-10-09
Repository: Th23144/spatial-flow-v2-preview-lab

## New user priority decision
The user explicitly pauses the main-site About Us task and redirects Project 2 to start the **blog subsite reskin** now. This supersedes previous main-site order without marking About Us or either Home task as complete.
**Status:** BLOG RESKIN START / READ-ONLY SOURCE AUDIT; no runtime or production code changed in this step.

## Architectural scope
- Existing WP Multisite main site: `spatialflow.local`, site/blog_id=1.
- Existing WP Multisite blog subsite: `blog.spatialflow.local`, site/blog_id=2. Corresponding public domains have separate routing; do not conflate site IDs or WP table ownership (`wp_*` vs `wp_2_*`).
- September 19 correction: Ink & East is a separate long-term platform. This Project-2 subsite remains a Spatial Flow-authored Journal / article archive, not an implementation of the future Ink & East platform. It may borrow limited visual cues, but cannot import future platform IA/features.
- Shared WordPress theme and registered menus; blog-specific Header/Footer own branches not covered by main-site closures.
- Preserve existing published WP Posts, categories/tags, archive queries, permalinks, author metadata, WordPress native comments (if enabled), existing search, navigation, and backend editability. Do not fabricate content or VIP functionality.

## Historical static candidates found — NOT accepted as present-day 1:1 authorities
- `preview/spatial-flow-blog-home-v1.html`
- `preview/spatial-flow-blog-issue-v1.html`
- `preview/spatial-flow-blog-article-v1.html`

All three historical files explicitly brand themselves as **Ink & East**, with rice-paper/vermillion palette and EB Garamond rather than current Spatial Flow brand shell. Home prototype contains old Reading Room / paid/creative-services concepts. Article prototype mentions `is_vip_locked`, custom author/issue data, reader/patron states, etc. These are not currently approved production requirements.
Follow the later architecture correction and current user decisions, rather than doing blind HTML-to-PHP port or treating static fake stories as real.

## Previously recorded blog status
- Blog Header/Footer: Not done (independent branch).
- Blog Home: Not done.
- Blog Issue: Not done; first audit whether an Issue page/type actually exists on site. Do NOT create a new taxonomy or feature solely to match the old static.
- Blog Article: Not done.
- Main-site Header/Footer Completed 1:1 and protected; blog source modifications must not change them.
- WP menu mapping recorded 2026-09-16: blog `sf_primary`=41, `sf_mobile`=42, footer `sf_blog_footer_sections`=49, `sf_blog_footer_explore`=50, `sf_blog_footer_journal`=51, `sf_blog_footer_legal`=53. Verify fresh rather than assuming old IDs remain exact.

## New execution sequence, pending fresh-source audit
0. Audit current child-theme blog branches/templates and exact current blog screens / live WordPress routing. Identify true page families: Header, Footer, Home/index, category/tag/archive/search, Single Article, and Issue only if implemented. Collect screen evidence and existing backend owners.
1. Independent Blog Header/Footer design authority and mobile interaction contract, user visual acceptance.
2. Journal Home listing/archive mapping with real WP query, category and editorial module owners.
3. Article/archive/category/issue templates based on real installed WordPress routes. No fictitious Issue/paid features.
4. Mobile 390/430 and 360 fallback (320 where relevant), regress main-site Header/Footer, real search, existing menus, permalink/SEO and backend editability, strict 1:1 acceptance.

## Source Gate needed before editing
User's **latest installed child-theme files**, preferably one current theme ZIP to audit full file inventory (not an old GitHub static HTML):
- `header.php`, `footer.php`, `functions.php`
- `front-page.php`, `home.php`, `index.php`, `single.php`, `archive.php`, `category.php`, `search.php` and blog-specific page templates/partials that actually exist
- `assets/css/spatial-flow.css` plus any blog-specific CSS/JS

First read-only compare. Never assume every named PHP file exists or tell user to create one blindly. Before code changes: exact original code, expected hit count, complete indented replacement, combined multi-file batch, returned-source diff, runtime pass. No Codex unless explicitly requested.

## Gating caution
The historic references cannot be marked an accepted 1:1 standard for the present subsite without user visual review and replacement of obsolete Ink & East/platform-only concept blocks.

Next: retrieve current installed theme ZIP or equivalent file batch and local blog-site screenshots, then create a narrow first static Header/Footer candidate. No code changes prior to source gate.
