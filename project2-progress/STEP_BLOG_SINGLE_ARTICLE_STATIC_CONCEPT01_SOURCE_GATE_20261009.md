# Project 2 — Blog Single Article Static Concept 01 / Source Gate

Date: 2026-10-09
Status: **STATIC PREVIEW COMPLETED / AWAITING USER VISUAL ACCEPTANCE**.
User response immediately preceding this task: "这个还可以，可以进入下一张" for Articles Archive Concept 01. Archive is therefore **provisionally accepted for progression**, not globally 1:1 Closed. Work remains in **Phase B: full static page family**, strictly prior to mapping production WordPress.

## Current article-design candidate
Preview: https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/ac5970a50791340fe612beb5dc87bffe1a2babd3/temp-preview/Spatial-Flow-Journal-Single-Article-01.html
Branch: `temp-blog-single-article-concept01`
File: `temp-preview/Spatial-Flow-Journal-Single-Article-01.html`
Pinned commit: `ac5970a50791340fe612beb5dc87bffe1a2babd3`

## Read-only design references
- Project 3 `Th23144/ink-east-planning/preview/ink-east-article-001-v1.html` (FREE full-length article original).
- Project 3 `preview/ink-east-article-002-vip-v1.html` explicitly **excluded** as paywall architecture.
- Project 2 already-reviewed Blog Home Concept03 and Articles Archive Concept01, shared full-nav and colophon visual components.
- Project 3 repository is read-only. No modifications made to production WordPress local ZIP.

## Independent design judgment
- Single Article is a **reading interface**, not a second brand landing page or product PDP. Keep the original centered high-contrast literary heading, display subhead, narrow readable text measure (~680px, appropriate for long-form reading), long-form editor's rhythm, left desktop sticky TOC, calligraphy / bilingual annotations, pull quotes, margin note, distinct footnotes, authentic author attribution and related reading.
- This template must preserve the original article-related hierarchy. Original CSS 22,788 characters **identical and unchanged**; additional scoped adaptation CSS added after it.
- Actual `single.php` from user ZIP v2.7.105 already has: `spatial_flow_extract_content_headings`, generated heading IDs, TOC, mobile TOC, published post title/reading time, featured image or fallback, actual previous/next Posts, and related posts query (3). Use those functions in future production; never invent a new standalone editorial content database.
- Original author CPT/ACF `title_cn`, `issue_id`, VIP fields, and membership tiers **do not exist as confirmed current Journal models**; do not turn any prototype marker into production requirements.
- The original member support block's visual **support-band/support-card** layout remains, but its business role is changed to a **free archive invitation**; no membership or paid CTA.
- The obsolete Reader Notes member-only form is not recreated. WP native comments are not currently part of `single.php` output and must not be added without separate user approval.
- Use a quiet image **within** the reading flow, not a giant leading ecommerce banner, retaining the existing WordPress featured-media concept with a new presentation placement subject to approved mapping.
- Preserve original three-up related editorial cards, author segment; use typographic author initial in static concept instead of fabricating a portrait.
- Preserve a clear in-article desktop TOC and native `<details>` mobile TOC. Sample article has 4 section anchors and 1 footnote as a demonstrator. Actual final text/footnotes must be WordPress Post content.
- A Journal Dispatch style band uses precisely the real existing email+topic fields and no fake automatic mail promise; demo action is inert.

## Content honesty
- Sample title "The quiet art of leaving space" and all article prose is explicitly **design-only editorial demonstration**, not a claim that a WordPress article with this title exists.
- Sample author label is editorial placeholder, no fabricated identity or photograph. Unspecified original media/photograph is illustrative.
- Preview previous/next and related cards go to **the actual static archive demo** for now, not invented production posts.
- User-supplied original theme ZIP remains authoritative for later field/post data when static family is complete and accepted.

## Tests / gates
- File read back through GitHub at pinned commit, **70,462 characters**.
- Article source's original 22,788-character main CSS kept exactly.
- HTML static checks: 1 H1, 1 main, balanced 3 section, 1 article; 4 anchored H2 sections, one footnote, 3 related cards, 2 Dispatch fields.
- Four inline style blocks have balanced block delimiters; 3 inline scripts compile successfully.
- Internal `href="#..."` targets resolve; external shared JS dependencies removed.
- Interaction tests via controlled JS fake DOM: mobile TOC anchor closes details, link copy writes expected URL, Dispatch submit prevents actual action. Status explicitly tells user no data submitted.
- **Not yet visually verified** in actual browser at desktop or at 390/360/320. Do not assert responsive visual pass, 1:1 acceptance, or WordPress runtime parity.
- No production ZIP changes and no live theme install. Prior unsuccessful SAFE1 is rejected; do not reuse it.

## Design-family progress
1. Blog Home — Concept03, user positive, no final lock.
2. Articles Archive — Concept01, user positive and authorized moving to next.
3. **Single Article — Concept01 now awaiting visual review.**
4. Next proposed: Category/Topic (including taxonomy landing).
5. Then Blog Search, 404/empty, plus independent Issue template only if justified by live content model.
6. All-family style, mobile and functional QA.
7. Production mapping only after user explicitly accepts the relevant final design.

## Required next user action
Open pinned Single Article preview and judge: H1/header feel, sidebar+mobile TOC, 680px reading width, notes/editorial image, end-of-essay public reading band and 3 related cards, dispatch and footer consistency. Revise if needed. Don't enter production mapping yet.
