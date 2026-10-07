# Final Production Utility / Policy Family — Mapping Start + Source Gate

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Production sequence position

Completed before this step:
1. Wishlist — Completed 1:1
2. Search — Completed 1:1
3. 404 — Completed 1:1
4. Contact — Completed 1:1

Current surface:
5. Utility / Policy family

## Accepted visual authority

Branch:
`temp-policy-wishlist-led-01`

File:
`temp-preview/Spatial-Flow-Policy-Longform-Reading-03-Final.html`

Authority status:
- accepted structural / visual system;
- 1480 task-info body system;
- 1720 global Header/Footer shell;
- Cormorant Garamond display/editorial roles;
- Inter body/function roles;
- JetBrains Mono restrained metadata;
- long-form reading column + marginalia rail;
- desktop sticky contents index;
- localized horizontal table scrolling only;
- responsive gates at 1240 / 1040 / 820 / 600.

The prototype copy is illustrative only and MUST NOT replace live policy content.

## Real live family

Current WordPress inventory identifies four live policy pages:

1. Privacy Policy
2. Refund And Returns Policy
3. Shipping Policy
4. Terms & Conditions

No Accessibility / Cookie policy should be fabricated because no such live page is currently established.

## Current production ownership

### Refund / Returns

Current owner remains the native Step 5I implementation in `functions.php`:
- route: `/refund-returns-policy/`;
- renderer: `spatial_flow_render_refund_returns_page()`;
- route owner: `spatial_flow_refund_returns_native_template()`;
- copy/settings owner: `sf_refund_*` Customizer fields.

Production rule:
retain that existing editable data source and route ownership; replace presentation only.

### Privacy / Shipping / Terms

No equivalent dedicated PHP renderer is present.

Current owner remains ordinary WordPress Page content / parent-page rendering.

Production rule:
create one reusable presentation layer around the real WordPress content.
Do not copy legal wording into PHP.
Do not alter page URLs, SEO fields, Woo policy assignments, or editor ownership.

## Fresh current source baseline

User-returned final Contact closure baseline:

`functions(20261005-133338).php`
- 658,030 bytes
- 12,558 logical lines
- SHA256 `2eb7ac7e103e4d8f015fb96955328003f41d2d79d953f22d01019a3e9c6b325b`
- `SPATIAL_FLOW_CHILD_VERSION = 2.7.69`
- PHP syntax PASS

`spatial-flow(20261005-133337).css`
- 628,207 bytes
- 22,556 logical lines
- SHA256 `4e1dfdccb176c48ee530a9e8c03e538a061615b3d2366831ab3543b3e1b3a4bd`
- braces 3546 / 3546
- comments 241 / 241
- top-level CSS parse errors 0

## Existing CSS finding

The stylesheet currently contains several historical policy systems:
- old generic rounded-card `.sf-policy-page` system around the early stylesheet;
- page-ID policy centering fixes;
- dedicated Step 5I Refund / Returns block;
- Step 5I SAFE2 conflict override;
- later generic policy-layout spacing patches;
- CTA contrast fallbacks.

Therefore final mapping MUST NOT append another indefinite policy override stack.

Required implementation direction:
1. preserve current owners/data;
2. introduce one canonical H01 policy-family presentation owner;
3. map Refund renderer markup into that owner;
4. wrap normal WordPress policy content with the same family owner;
5. retire/neutralize conflicting historical policy presentation rules in bounded canonical replacements;
6. runtime-check each of the four real policy pages independently.

## Exact live-content constraint

The final accepted prototype proves the visual system, not the exact live copy.

Before family closure each real page must pass with its actual content:
- headings;
- paragraphs;
- lists;
- links;
- tables if present;
- dates/update notices;
- legal wording.

No copy may be rewritten merely to fit the design.

## Current gate

SOURCE / OWNER AUDIT = PASS.

Next:
- build the H01 reusable policy-family production mapping against the current 2.7.69 baseline;
- deliver only bounded manual anchored replacements;
- source-gate before runtime.

Status: POLICY FAMILY PRODUCTION MAPPING STARTED.


## H01B reusable Policy shell source audit — 2026-10-06

Target pages:
- Privacy Policy — page ID 3
- Terms & Conditions — page ID 3251 (WooCommerce-assigned Terms page)
- Shipping Policy — page ID 3255 (existing shared Policy CSS target)

Ownership finding:
- no dedicated PHP renderer exists for these three pages;
- they remain ordinary WordPress Pages / editor-owned legal content;
- current frontend content already uses the historical `.sf-policy-*` presentation vocabulary;
- Shipping shares `.sf-policy-overview / .sf-policy-layout / .sf-policy-content / .sf-policy-section` even when it lacks the old `.sf-policy-page` wrapper.

Conflict inventory confirmed in the current 2.7.78 stylesheet:
1. old rounded-card `Spatial Flow Policy Pages Visual` owner;
2. page-ID centering fixes for 3251 / 3255 and Privacy ID 3;
3. mobile accordion owner for the same pages;
4. old Policy CTA contrast fixes;
5. Step 5A-4B policy-button contrast override;
6. later Unified Card Spacing Hotfix.

H01B implementation decision:
- do NOT duplicate or rewrite legal copy;
- wrap the real `the_content` output only;
- add a reusable H01B route/body class and outer presentation owner in functions.php;
- remap the existing editor-owned `.sf-policy-*` inner structure into the accepted Reading 03 visual language;
- retire the conflicting historical Policy CSS owners in bounded replacements rather than stacking another override layer;
- preserve Header/Footer, page URLs, SEO, Woo Terms assignment and editor ownership.

Planned batch baseline:
- functions.php 2.7.78 -> 2.7.79
- PHP H01B wrapper preflight: `php -l` PASS
- replacement H01B CSS preflight: 81/81 braces, tinycss2 top-level parse errors 0

Status:
**H01B SHARED WORDPRESS POLICY SHELL READY FOR MANUAL BATCH / RETURNED-FILE SOURCE GATE PENDING**


## H01B returned-file source gate — 2026-10-06 13:03 batch

Returned files:
- `functions(20261006-130334).php`
- `spatial-flow(20261006-130333).css`

Validated:
- `SPATIAL_FLOW_CHILD_VERSION = 2.7.79`;
- PHP H01B wrapper inserted in the planned location;
- PHP syntax: PASS;
- PHP diff vs 2.7.78 baseline is limited to version bump + H01B block;
- H01B canonical CSS block is present;
- old Policy Visual main block removed;
- old Policy CTA declaration blocks removed;
- Unified Card Spacing Hotfix removed;
- CSS braces 3541 / 3541;
- CSS comments 235 / 235;
- tinycss2 top-level parse errors: 0.

Gate blockers discovered:
1. one orphan historical end marker remains:
   `/* === Spatial Flow Policy CTA Contrast Fix Page Scope Fallback END === */`;
2. the retained Step 5A-4B wrapper comment still describes the deleted Privacy/Policy CTA fix and must be normalized to Footer-only scope;
3. more importantly, the later Step 5O-B SAFE1 / SAFE2 sticky system still targets bare `.sf-policy-nav` with `!important`. On H01B pages this would override the new canonical H01B nav position/top/max-height/overflow rules, so runtime visual testing would not be authoritative.

Required correction:
- CSS only;
- delete the orphan marker;
- normalize the Step 5A-4B comment;
- scope the three direct Step 5O-B `.sf-policy-nav` ownership points away from `body.sf-policy-h01b-route`;
- no PHP change and no additional version bump required because the correction is CSS ownership/comment cleanup under the already-bumped 2.7.79 asset version.

Status:
**H01B SOURCE GATE HOLD — PHP PASS / CSS PARSE PASS / LATE STICKY OWNER CONFLICT MUST BE REMOVED BEFORE RUNTIME**


## H01B CSS correction source gate — 2026-10-06 13:16 batch

Returned file:
- `spatial-flow(20261006-131618).css`

Validated against the immediately previous `spatial-flow(20261006-130333).css`:
- diff is limited to the requested cleanup only: 5 added lines / 8 removed lines;
- orphan Policy CTA end marker removed;
- obsolete Step 5A-4B Policy CTA comment normalized to Footer-only scope;
- direct Step 5O-B desktop `.sf-policy-nav` owner changed to `body:not(.sf-policy-h01b-route) .sf-policy-nav`;
- the two shared selector-list occurrences of bare `.sf-policy-nav,` changed to the same H01B exclusion;
- remaining unscoped direct `.sf-policy-nav {` count: 0;
- remaining unscoped direct `.sf-policy-nav,` count: 0;
- scoped H01B exclusions: 3 total ownership points;
- H01B canonical CSS START/END markers: 1 / 1;
- CSS braces: 3541 / 3541;
- CSS comments: 234 / 234;
- tinycss2 top-level parse errors: 0;
- SHA256: `ce658f582d7d9ed483370bb6ec005a3120c3fccfba6ef7694b0d8d7ef3901eb3`.

Interpretation:
- the previously identified late sticky ownership conflict is removed;
- legacy Step 5O-B still serves About / FAQ / Wishlist / Journal and non-H01B legacy Policy contexts;
- H01B now retains canonical ownership of its own `.sf-policy-nav` geometry and responsive behavior.

Status:
**H01B SOURCE PASS — RUNTIME VISUAL / CONTENT VERIFICATION PENDING**

Next runtime gate:
1. Privacy Policy — desktop + mobile.
2. Shipping Policy — desktop + mobile.
3. Terms & Conditions — desktop + mobile.
Verify preservation of live legal copy, URLs, links/tables/lists, page identity, and that the shared Reading-03 presentation does not create duplicate headings/content.


## H01B authority correction — Refund H01A becomes the literal layout authority — 2026-10-06

User decision:
- stop treating H01B as merely “same-family” Policy styling;
- Privacy / Shipping / Terms must visually align 1:1 with the already accepted Refund / Returns H01A page;
- no separate preview phase.

Implementation consequence:
- H01A is the sole presentation authority for H01B;
- H01B will reuse the H01A intro, mobile utility toolbar, Contents index, repeated document head, lede, section rail, editorial break and final support-route rhythm;
- real WordPress page copy remains editor-owned and is not duplicated into PHP defaults;
- a page-scoped runtime structure mapper is allowed to reorganize existing editor-owned H01B DOM into the H01A presentation contract and to rebuild the Contents index from actual section headings;
- Privacy’s existing overview content will be moved into the document metadata rail rather than rendered as a separate 3-card strip;
- the existing hero intro paragraph will move into the document lede so the top hero matches H01A;
- existing H01B sections remain the legal-content owner and receive generated H01A-style chapter rails.

Next batch:
- functions.php 2.7.79 -> 2.7.80;
- add H01B runtime structure mapper;
- replace the current H01B canonical CSS block with an H01A-metric-aligned canonical block;
- no changes to H01A, Header, Footer or page URLs.

Preflight:
- PHP runtime mapper block: php -l PASS;
- replacement H01B CSS: 119/119 braces, tinycss2 top-level parse errors 0.

Status:
**H01B H01A-EXACT ALIGNMENT BATCH READY / RETURNED-FILE SOURCE GATE PENDING**


## H01B H01A-exact alignment returned-file source gate — 2026-10-06 14:03 batch

Returned files:
- `functions(20261006-140307).php`
- `spatial-flow(20261006-140307).css`

PHP verification:
- version 2.7.80;
- php -l PASS;
- embedded runtime-structure JavaScript extracted with PHP URL expressions substituted and `node --check` PASS;
- diff vs accepted 2.7.79 baseline is limited to version bump + the H01B runtime structure mapper (plus blank-line formatting);
- runtime mapper start/action counts are singular and expected.

CSS verification:
- H01B canonical START/END markers 1 / 1;
- braces 3579 / 3579;
- comments 250 / 250;
- tinycss2 top-level parse errors 0;
- SHA256 `9ca1552b1f17b83ce826de8bbbf9f4124734017f3a490a4f55e0e52c07809cd2`;
- CSS prefix before the H01B block and suffix after the H01B block are byte-for-byte unchanged from the accepted 2.7.79 baseline.

Source-gate blocker found before runtime:
- legacy source audit already established that Shipping uses `.sf-policy-overview / .sf-policy-layout / .sf-policy-content / .sf-policy-section` but does **not** include the old `.sf-policy-page` wrapper;
- the current returned H01B exact-alignment CSS assigns the H01A max-width / horizontal padding owner only to inner `.sf-policy-page / .sf-policy-page--privacy`;
- therefore Privacy / Terms can receive the H01A outer wrap but Shipping would not, breaking the user-locked requirement that all three H01B pages align literally with Refund H01A.

Required correction:
- CSS only; keep PHP 2.7.80 unchanged;
- move the H01A outer wrap ownership to the guaranteed wrapper `.sf-policy-h01b-source`;
- neutralize inner legacy `.sf-policy-page / .sf-policy-page--privacy` width/padding so Privacy/Terms do not double-pad;
- move the <=600px 20px mobile horizontal padding owner to `.sf-policy-h01b-source`;
- no version bump is needed because 2.7.80 is not source-accepted/deployed yet.

Status:
**H01B PHP SOURCE PASS / CSS PARSE PASS / H01A-EXACT SOURCE GATE HOLD — SHIPPING OUTER-WRAP OWNER MUST BE FIXED BEFORE RUNTIME**


## H01B H01A-exact alignment final source gate — CSS wrap-owner correction — 2026-10-06 14:10 batch

Returned file:
- `spatial-flow(20261006-141013).css`

Verification:
- file size 633,084 bytes;
- SHA256 `43f44d5c796161b8f7c31468cf438681a9a49cc86e3428a81abfe0ead5d2ab50`;
- braces 3580 / 3580;
- comments 250 / 250;
- tinycss2 top-level parse errors 0;
- H01B START/END markers remain singular;
- diff against the previous 14:03 CSS batch is limited to the requested two corrections:
  1. desktop H01A max-width / horizontal padding ownership moved from legacy inner `.sf-policy-page / .sf-policy-page--privacy` to guaranteed `.sf-policy-h01b-source`, while inner wrappers are neutralized;
  2. <=600px mobile 20px horizontal padding ownership moved to `.sf-policy-h01b-source`;
- CSS prefix before the H01B canonical block and suffix after the block remain byte-for-byte unchanged.

PHP:
- previously returned `functions(20261006-140307).php` at version 2.7.80 remains the accepted PHP side of this batch;
- no additional PHP changes required.

Status:
**H01B H01A-EXACT SOURCE PASS / RUNTIME VISUAL VERIFICATION READY**

Runtime verification order:
1. Privacy Policy desktop;
2. Privacy Policy mobile;
3. Shipping Policy desktop/mobile;
4. Terms & Conditions desktop/mobile.

Do not mark H01B visually accepted until all three real WordPress policy pages have been compared against the accepted Refund H01A authority.


## H01B Privacy runtime correction batch — metadata / Contents / lede — 2026-10-06

Runtime defects found on Privacy Policy after the H01A-exact source pass:
1. document metadata rail was incorrectly fed the entire three-card overview, including long descriptive paragraphs, producing an oversized dense right-side block unlike Refund H01A;
2. Contents index was built from every descendant `.sf-policy-section`, allowing duplicate/legacy nested section copies to enter the generated index;
3. the lede source query was too strict (`:scope > p`) and failed to capture the real Privacy hero intro when the paragraph was nested, leaving an empty Policy Overview block.

Locked correction:
- keep H01A as sole presentation authority;
- metadata rail now extracts only each overview card's short label + short result and renders compact Refund-style span rows;
- remove the overview card container from the transformed visual DOM after metadata extraction;
- collect policy sections through a normalized unique-heading filter so duplicate legacy copies do not create repeated Contents items;
- use the first real paragraph inside `.sf-policy-hero__copy` as the lede source;
- remove obsolete H01B metadata-card responsive CSS because the rail no longer contains cards;
- freeze Hero, toolbar, reading-section typography, chapter rails, editorial breaks, CTA and Footer.

Batch:
- functions.php 2.7.80 -> 2.7.81;
- CSS canonical H01B metadata rules only + obsolete responsive metadata-card rule removal.

Preflight:
- php -l PASS;
- extracted runtime JavaScript: node --check PASS;
- CSS braces 3572 / 3572;
- CSS comments 250 / 250;
- tinycss2 top-level parse errors 0.

Status:
**H01B PRIVACY RUNTIME CORRECTION READY / RETURNED-FILE SOURCE GATE PENDING**


## H01B Privacy runtime correction returned-file Source Gate — 2026-10-06 local evening batch

Returned files:
- `functions(20261007-035229).php`
- `spatial-flow(20261007-035228).css`

PHP verification:
- version 2.7.81;
- 679,593 bytes / 13,171 physical lines;
- SHA256 `8295c88248380776c346a56b4ed29b02974cfeaf9ec42834801dba0750e153c1`;
- `php -l` PASS;
- H01B runtime JavaScript extracted, PHP URL expressions substituted, `node --check` PASS;
- diff vs accepted 2.7.80 is limited to the requested Privacy runtime correction:
  - hero intro query relaxed from direct-child paragraph to first real paragraph;
  - metadata rail rebuilt from overview card short label + short value only;
  - overview container removed after metadata extraction;
  - section list normalized by unique heading key;
  - section-loop heading lookup aligned with the normalized query;
  - version 2.7.80 -> 2.7.81.

CSS verification:
- 631,745 bytes / 23,327 physical lines;
- SHA256 `38c5241dda52444f78366d1b05e14af25033ec2ce0462dc65bd29f57eadb0c5a`;
- braces 3572 / 3572;
- comments 250 / 250;
- tinycss2 top-level parse errors 0;
- diff vs accepted 14:10 CSS is limited to the H01B canonical block;
- prefix before H01B START and suffix after H01B END are byte-for-byte unchanged;
- old card-based metadata rail rules removed;
- obsolete <=820 and <=600 metadata-card responsive rules removed;
- compact Refund-style metadata rail now owns the right-side metadata presentation.

Verdict:
**H01B PRIVACY RUNTIME CORRECTION SOURCE GATE PASS**

Runtime recheck scope:
1. right document metadata rail must be compact and paragraph-free;
2. Contents must show the real Privacy section set once, without repeated 07/08/etc entries;
3. Policy Overview must contain the real intro text instead of an empty band.

All other already-frozen H01B/H01A presentation areas remain out of scope unless this correction introduces a concrete regression.

Status:
**H01B PRIVACY CORRECTION SOURCE PASS / PRIVACY RUNTIME RECHECK PENDING**


## H01B Privacy runtime recheck — metadata/Contents pass, lede still empty — 2026-10-06 local evening

Runtime screenshot after the 2.7.81 correction shows:
- compact right-side metadata rail: PASS;
- generated Contents index: PASS, real Privacy sections 01–12 appear once each;
- reading sections / chapter rails / editorial breaks / CTA remain stable;
- **Policy Overview lede remains visually empty**.

Interpretation:
- the source paragraph lookup now succeeds far enough to remove the old hero intro from the top presentation, but reusing/moving the original paragraph node is not visually reliable;
- next correction must treat the editor paragraph as a **text source**, then render a fresh H01B lede paragraph node from its normalized text content;
- remove the original source paragraph from the transformed frontend DOM to prevent duplicate display on Shipping/Terms;
- no CSS changes are required.

Next batch:
- functions.php only;
- version 2.7.81 -> 2.7.82;
- replace node-moving lede logic with normalized text extraction + fresh paragraph rendering.

Status:
**H01B PRIVACY RUNTIME PARTIAL PASS — METADATA PASS / CONTENTS PASS / LEDE FIX PENDING**


## H01B Privacy lede-only correction returned-file Source Gate — 2026-10-07

Returned file:
- `functions(20261007-040350).php`

Verification:
- version 2.7.82;
- 680,267 bytes / 13,197 physical lines;
- SHA256 `dbaec70f0a98c2a66be038a2b79de36737675eb61ab8145fa0f54d76b200b30e`;
- `php -l` PASS;
- H01B runtime JavaScript extracted, PHP URL expressions substituted, `node --check` PASS;
- diff vs accepted 2.7.81 is limited to:
  1. version 2.7.81 -> 2.7.82;
  2. replace direct paragraph-node reuse with normalized `introText` extraction;
  3. create a fresh lede `<p>` from `introText`;
  4. remove the original source intro node after the fresh lede is inserted.

No CSS change in this batch.

Verdict:
**H01B PRIVACY LEDE CORRECTION SOURCE GATE PASS**

Runtime recheck:
- Privacy Policy only;
- verify that the existing compact metadata rail and 01–12 Contents remain stable;
- verify that `POLICY OVERVIEW` now contains the real Privacy intro text.

Status:
**H01B PRIVACY LEDE SOURCE PASS / PRIVACY RUNTIME RECHECK PENDING**


## H01B Privacy desktop runtime recheck after 2.7.82 — 2026-10-07

Runtime screenshot findings:
- compact metadata rail: PASS;
- Contents index: PASS, 01–12 each appears once;
- Policy Overview lede: PASS, real Privacy intro text is now visible;
- reading sections / chapter rails / editorial breaks / final CTA remain stable.

Strict H01A parity audit found one remaining presentation mismatch:
- Refund H01A applies last-word emphasis through `spatial_flow_policy_h01_title_html()` in both the top hero title and repeated document title;
- H01B Privacy currently renders both `Privacy Policy` headings as plain text, so the final-word italic/sage emphasis is missing;
- the Contents heading must remain plain, matching Refund.

Status:
**H01B PRIVACY DESKTOP FUNCTIONAL/VISUAL PASS EXCEPT TITLE EMPHASIS — ONE SMALL H01A PARITY FIX PENDING**


## H01B Privacy title-emphasis parity batch — 2026-10-07

Runtime authority:
- Refund H01A remains the literal presentation authority.
- Privacy desktop is otherwise accepted after the 2.7.82 lede correction.
- Remaining visible mismatch: H01B hero title and repeated document title are plain text, while H01A emphasizes the final word with an italic sage `<em>`.
- Contents heading intentionally remains plain, matching H01A.

Batch:
- functions.php 2.7.82 -> 2.7.83;
- add a DOM-safe H01B helper that wraps only the final word of the real page title in `<em>`;
- apply it to the existing hero `h1` and generated document `h2`;
- CSS: add the missing H01B document-title `h2 em` rule to match H01A;
- no other H01B/H01A areas reopened.

Preflight:
- php -l PASS;
- extracted H01B runtime JavaScript: node --check PASS;
- CSS braces 3573 / 3573;
- CSS comments 250 / 250;
- tinycss2 top-level parse errors 0.

Status:
**H01B PRIVACY TITLE-EMPHASIS PARITY BATCH READY / RETURNED-FILE SOURCE GATE PENDING**


## H01B Privacy title-emphasis parity returned-file Source Gate — 2026-10-07 04:23 batch

Returned files:
- `functions(20261007-042342).php`
- `spatial-flow(20261007-042342).css`

PHP verification:
- version 2.7.83;
- 681,097 bytes / 13,230 physical lines;
- SHA256 `d66eb6fbfd9b81a2cacba19ff3ecc4dfa86913d578d189a9fdf05b2398baed71`;
- `php -l` PASS;
- H01B runtime JavaScript extracted, PHP URL expressions substituted, `node --check` PASS;
- diff vs accepted 2.7.82 is limited to the requested title-emphasis batch:
  1. version 2.7.82 -> 2.7.83;
  2. add DOM-safe `sfPolicyH01bEmphasizeLastWord()`;
  3. apply it to the real hero `h1`;
  4. apply it to the generated document `h2`.
- unified diff size: +35 / -2 lines.

CSS verification:
- 631,845 bytes / 23,333 physical lines;
- SHA256 `c8f8ade859ccbcdd0c314254b98202b3d7069de38dfa710aa900f103a61b8966`;
- braces 3573 / 3573;
- comments 250 / 250;
- tinycss2 top-level parse errors 0;
- diff vs accepted 2.7.81-era CSS is exactly one 5-line rule:
  `.sf-policy-h01b-document-head h2 em { font-style: italic; color: var(--sf-policy-h01b-sage); }`
- no H01B/H01A structural, spacing, Contents, metadata, lede, section, rail, CTA, header or footer rules changed.

Verdict:
**H01B PRIVACY TITLE-EMPHASIS SOURCE GATE PASS**

Runtime recheck:
- Privacy Policy desktop only;
- verify final-word emphasis in top hero title and repeated document title;
- Contents title must remain plain;
- all previously accepted areas stay frozen.

Status:
**H01B PRIVACY TITLE-EMPHASIS SOURCE PASS / DESKTOP RUNTIME RECHECK PENDING**


## H01B Privacy desktop runtime final acceptance — 2026-10-07

Runtime screenshot reviewed after 2.7.83 title-emphasis correction.

Findings:
- top hero title now renders final-word emphasis correctly: `Privacy <em>Policy</em>`;
- repeated document title now renders the same final-word emphasis;
- Contents title remains plain, matching Refund H01A;
- compact metadata rail remains stable;
- 01–12 Contents remains unique and complete;
- Policy Overview lede remains populated;
- reading sections, chapter rails, editorial breaks, final support CTA and footer remain stable.

Verdict:
**H01B PRIVACY DESKTOP RUNTIME VISUAL PASS**

Remaining Privacy gate:
- mobile runtime screenshot only.

Status:
**H01B PRIVACY DESKTOP PASS / MOBILE RUNTIME VERIFICATION PENDING**


## H01B Privacy mobile runtime final acceptance — 2026-10-07

Two Privacy Policy responsive screenshots reviewed after 2.7.83:
- wider mobile / tablet-like responsive state;
- narrow phone state.

Findings:
- hero title emphasis remains correct;
- compact utility toolbar remains aligned;
- Contents index is complete and readable;
- wider state preserves the right-side chapter rail;
- narrow state correctly promotes each chapter rail above its section body;
- compact document metadata remains restrained and does not become a card block;
- repeated document title emphasis remains correct;
- Policy Overview lede remains populated;
- section typography, editorial breaks, CTA and footer remain stable;
- no duplicate sections or Contents entries are visible.

Verdict:
**H01B PRIVACY MOBILE RUNTIME VISUAL PASS**

Final Privacy status:
**H01B PRIVACY POLICY COMPLETE AND FROZEN**
- Source PASS
- Desktop runtime PASS
- Mobile runtime PASS

Do not reopen Privacy unless a concrete regression is discovered.

Next runtime target:
**Shipping Policy — desktop + mobile**, using the same H01A authority and the already-approved shared H01B runtime mapper/presentation shell.


## H01B Shipping desktop runtime first review — 2026-10-07

Runtime screenshot reviewed after Privacy was frozen.

Overall:
- shared H01B shell is active;
- Contents / section rail / table / lists / CTA / footer are structurally stable;
- Shipping is **not yet desktop-accepted** because the page's source title element differs from Privacy.

Root cause:
- H01B runtime mapper currently resolves the page title with `hero.querySelector('h1')` only;
- Shipping's real editor-owned hero title is not an `h1`, so title lookup fails and falls back to literal `Policy`;
- H01B hero typography/emphasis CSS is likewise scoped to `.sf-policy-hero h1` only.

Visible consequences:
1. top `Shipping & Delivery` uses the old/heavier source heading treatment instead of H01A title typography and last-word sage/italic emphasis;
2. toolbar identity incorrectly reads `POLICY`;
3. Contents heading incorrectly reads `Policy`;
4. repeated document title incorrectly reads `Policy` rather than `Shipping & Delivery`;
5. the generated document lede currently contains the short source phrase `Spatial Flow Delivery`; this is source-derived, not invented, but it is weaker than the Refund/Privacy explanatory lede and should be audited while fixing Shipping mapping.

Locked correction direction:
- do not change Privacy;
- make H01B title discovery heading-level agnostic inside the hero (`h1, h2, h3`);
- apply the same H01A hero title typography/emphasis to the resolved real heading regardless of heading level;
- toolbar / Contents / repeated title must all derive from the resolved real Shipping title;
- keep legal/editor content ownership unchanged;
- audit the Shipping lede source without fabricating new legal copy.

Status:
**H01B SHIPPING DESKTOP RUNTIME HOLD — TITLE MAPPING / HERO TYPOGRAPHY FIX REQUIRED BEFORE MOBILE**


## H01B Shipping title + width parity batch — 2026-10-07

User runtime feedback:
- Shipping title mapping is wrong;
- Shipping page horizontal width is also visibly narrower than the accepted Refund / Privacy H01A-aligned pages.

Source diagnosis:
- H01B runtime title discovery only queries `hero.querySelector('h1')`; Shipping's real hero title uses another heading level, causing fallback to literal `Policy`;
- H01B hero typography/emphasis and mobile title sizing are also scoped to `h1` only;
- the shared `.sf-policy-h01b-source` currently carries the correct H01A 1480px + pad geometry but without `!important`, so WordPress/Astra content-width ownership can still win on Shipping;
- hero / toolbar / layout themselves do not explicitly neutralize legacy max-width ownership.

Locked correction:
- functions.php 2.7.83 -> 2.7.84;
- title discovery becomes `h1, h2, h3`, preserving the same DOM-safe final-word emphasis helper;
- H01B hero title desktop/mobile CSS becomes heading-level agnostic for h1/h2/h3;
- strengthen the shared H01B source wrap to the exact H01A width owner with `!important`;
- explicitly neutralize max-width/margins on H01B hero, utility toolbar and policy layout so Shipping cannot retain a narrower legacy width;
- no change to Privacy content mapping, Contents, metadata, lede, sections, rails, CTA or Footer.

Preflight:
- php -l PASS;
- extracted H01B runtime JavaScript: node --check PASS;
- CSS braces 3574 / 3574;
- CSS comments 250 / 250;
- tinycss2 top-level parse errors 0.

Status:
**H01B SHIPPING TITLE + WIDTH PARITY BATCH READY / RETURNED-FILE SOURCE GATE PENDING**
