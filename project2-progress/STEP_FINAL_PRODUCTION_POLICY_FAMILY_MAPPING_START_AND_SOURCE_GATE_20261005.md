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


## H01B Shipping title + width parity returned-file Source Gate — 2026-10-07 04:39 batch

Returned files:
- `functions(20261007-043912).php`
- `spatial-flow(20261007-043912).css`

PHP verification:
- version 2.7.84;
- 681,105 bytes;
- SHA256 `9f7dc5c0c1ff3ea2299ec2308ee64879d0496e350606b031a19bcd062b230f02`;
- `php -l` PASS;
- H01B runtime JavaScript extracted and `node --check` PASS;
- diff vs accepted 2.7.83 is exactly the requested version bump + title query `h1 -> h1, h2, h3`.

CSS verification:
- 632,382 bytes;
- SHA256 `c71d0e01072b69dfdad9522402a04ce23cc8059fd5f921c0095f471734d65ef9`;
- braces 3574 / 3574;
- comments 250 / 250;
- tinycss2 top-level parse errors 0;
- diff vs accepted 2.7.83 is limited to the requested Shipping width/title parity changes.

Source-gate blocker found:
- desktop H01B source width/max-width/margins/padding were strengthened with `!important`;
- the existing <=600px `.sf-policy-h01b-source` rule still declares `max-width:none` and 20px horizontal padding **without** `!important`;
- therefore those mobile declarations can no longer override the new desktop-important declarations;
- this would silently regress the already-frozen Privacy mobile geometry and would also make Shipping mobile fail strict H01A parity.

Required correction:
- CSS only;
- inside the existing <=600px `.sf-policy-h01b-source` block add `!important` to `max-width:none`, `padding-left:20px`, and `padding-right:20px`;
- no PHP change and no version bump needed because 2.7.84 has not passed this source gate yet.

Status:
**H01B SHIPPING PHP SOURCE PASS / CSS PARSE PASS / SOURCE GATE HOLD — MOBILE IMPORTANT CASCADE MUST BE FIXED BEFORE RUNTIME**


## H01B Shipping title + width parity final Source Gate — 2026-10-07 04:45 CSS

Returned CSS:
- `spatial-flow(20261007-044506).css`

Verification:
- 632,415 bytes;
- SHA256 `975c8da0146cbd0e62f41a8574f2237feabcec79706702907442f3d55ff7b58a`;
- braces 3574 / 3574;
- comments 250 / 250;
- tinycss2 top-level parse errors 0;
- diff vs `spatial-flow(20261007-043912).css` is exactly 3 requested declaration changes in the existing <=600px H01B source block:
  - `max-width: none -> none !important`
  - `padding-left: 20px -> 20px !important`
  - `padding-right: 20px -> 20px !important`
- no unrelated CSS drift.

Combined 2.7.84 batch status:
- functions.php already source-passed for version bump + `h1,h2,h3` title discovery;
- CSS now source-passed including desktop width ownership and mobile cascade restoration.

Status:
**H01B SHIPPING TITLE + WIDTH PARITY SOURCE PASS / RUNTIME VISUAL VERIFICATION PENDING**


## H01B Shipping runtime width diagnosis — legacy .sf-container owner — 2026-10-07

Runtime screenshot after 2.7.84:
- title mapping is now correct: `Shipping & Delivery` is resolved and emphasized;
- Shipping remains visibly narrower than accepted Refund / Privacy.

Root cause identified:
- the global theme baseline still defines `.sf-container { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }`, with a mobile variant using `width: min(100% - 32px, 1180px)`;
- Shipping's legacy page structure uses `.sf-container` inside the H01B source, while Privacy's old wrapper path differs;
- previous 2.7.84 width work strengthened the new H01B outer owner but did not neutralize this inner legacy 1180px owner;
- therefore the new 1480px H01A-aligned wrapper is present, but Shipping's actual visible content remains trapped inside the old 1180px container.

Locked correction:
- Shipping-only; do not reopen Privacy;
- functions.php version 2.7.84 -> 2.7.85 for cache-busting;
- inside `.sf-policy-h01b--shipping-policy`, neutralize legacy `.sf-container` width/margins so H01B source owns the horizontal geometry;
- preserve H01B source mobile 20px padding;
- no changes to title mapping, Contents, metadata, lede, sections, rails, table, lists, CTA or Footer.

Status:
**H01B SHIPPING WIDTH ROOT CAUSE FOUND — SHIPPING-SCOPED LEGACY CONTAINER FIX READY**


## H01B Shipping legacy .sf-container width fix returned-file Source Gate — 2026-10-07 05:33 batch

Returned files:
- `functions(20261007-053319).php`
- `spatial-flow(20261007-053319).css`

PHP verification:
- version 2.7.85;
- 681,105 bytes;
- SHA256 `b34d6ae450e2d66c7ba9052cd74b2af458755ee9f933d325e58252ceaf863565`;
- `php -l` PASS;
- diff vs accepted 2.7.84 PHP is exactly one line: version `2.7.84 -> 2.7.85`.

CSS verification:
- 632,680 bytes;
- SHA256 `c00491e44302e971b11ed05116dca1a34d3bb5c79a686bfc8ed2f61101fa2270`;
- braces 3575 / 3575;
- comments 251 / 251;
- tinycss2 top-level parse errors 0;
- diff vs accepted `spatial-flow(20261007-044506).css` is exactly the requested Shipping-only legacy-container neutralizer:
  - `.sf-policy-h01b--shipping-policy .sf-policy-h01b-source .sf-container { width:100%!important; max-width:none!important; margin-left:0!important; margin-right:0!important; }`
- no unrelated CSS drift.

Verdict:
**H01B SHIPPING LEGACY-CONTAINER WIDTH FIX SOURCE GATE PASS**

Runtime target:
- Shipping Policy desktop full-page screenshot first;
- verify Hero / Toolbar / Contents / document axis now expands to the same H01A-aligned width class as Refund / Privacy;
- do not reopen Privacy unless a concrete regression appears.

Status:
**H01B SHIPPING WIDTH SOURCE PASS / DESKTOP RUNTIME RECHECK PENDING**


## H01B Shipping width runtime recheck after 2.7.85 — still constrained — 2026-10-07

Runtime screenshot after the Shipping-scoped `.sf-container` neutralizer:
- title mapping remains correct;
- page is still visibly in the ~1180px class rather than the accepted ~1480px H01A/Privacy axis;
- therefore the prior assumption that the remaining limiter was the legacy `.sf-container` was incorrect or incomplete.

Decision:
- stop adding speculative width overrides;
- next step is a runtime ancestor/computed-style diagnostic from the real Shipping hero to identify the exact intermediate wrapper that still owns the ~1180px geometry;
- no further production CSS/PHP change until that diagnostic identifies the actual owner.

Status:
**H01B SHIPPING WIDTH RUNTIME HOLD — EXACT DOM WIDTH OWNER DIAGNOSTIC REQUIRED**


## H01B Shipping exact width owner identified by runtime diagnostic — 2026-10-07

User-provided runtime ancestor/computed-style table established the exact remaining width owner:
- `.sf-policy-h01b-source`: 1608px border box / 1480px content width — correct H01A owner;
- Elementor outer container `.elementor-element-561aec26.e-con...`: 1480px — correct;
- **`.e-con-inner`: 1200px, `max-width:min(100%,1200px)`, margins 140px/140px — actual constraining owner**;
- descendant Elementor widget + widget-container + `.sf-policy-hero`: all consequently 1200px.

Additional correction:
- the prior Shipping-scoped neutralizer used class `.sf-policy-h01b--shipping-policy`, but the actual runtime main class is `.sf-policy-h01b--shipping`; therefore that selector never matched.

Locked fix:
- replace the ineffective old Shipping legacy-width neutralizer with a Shipping-scoped Elementor inner-container neutralizer using the actual runtime class;
- target only `.sf-policy-h01b--shipping .e-con-inner`: width 100%, max-width none, margins 0;
- keep Privacy frozen;
- version 2.7.85 -> 2.7.86 for cache-busting.

Status:
**H01B SHIPPING EXACT WIDTH OWNER FOUND — ELEMENTOR E-CON-INNER FIX READY**


## H01B Shipping exact Elementor width-owner fix returned-file Source Gate — 2026-10-07 05:46 batch

Returned files:
- `functions(20261007-054627).php`
- `spatial-flow(20261007-054627).css`

PHP verification:
- version 2.7.86;
- 681,105 bytes;
- SHA256 `77526974f3a40023284cd296bdb623d2107b00f1343e0043a7e2d78d694e30fe`;
- `php -l` PASS;
- diff vs accepted 2.7.85 PHP is exactly one line: version `2.7.85 -> 2.7.86`.

CSS verification:
- 632,652 bytes;
- SHA256 `d47ce8028dfe0ba5d35f67d743c826819662b72b3695be75ed66fc252fe1b407`;
- braces 3575 / 3575;
- comments 251 / 251;
- tinycss2 top-level parse errors 0;
- diff vs accepted `spatial-flow(20261007-053319).css` is exactly the requested replacement:
  - remove ineffective `.sf-policy-h01b--shipping-policy .sf-policy-h01b-source .sf-container` neutralizer;
  - add actual-runtime `.sf-policy-h01b--shipping .e-con-inner` neutralizer with width 100%, max-width none, margins 0;
- no unrelated CSS drift.

Verdict:
**H01B SHIPPING EXACT ELEMENTOR WIDTH-OWNER FIX SOURCE GATE PASS**

Runtime target:
- Shipping Policy desktop full-page screenshot;
- expected computed chain after refresh:
  - H01B source content width ~1480px;
  - Elementor outer container ~1480px;
  - `.e-con-inner` should expand from 1200px to ~1480px;
  - hero/widget descendants should follow to ~1480px.

Status:
**H01B SHIPPING EXACT WIDTH SOURCE PASS / DESKTOP RUNTIME RECHECK PENDING**


## H01B Shipping desktop runtime acceptance after 2.7.86 — 2026-10-07

Runtime screenshot reviewed after exact Elementor `.e-con-inner` neutralization.

Findings:
- horizontal geometry is now visibly expanded to the H01A / Privacy width class;
- Hero, utility toolbar, Contents column, repeated document head, document body and chapter rail share the accepted wide axis;
- Shipping title mapping is correct in all required locations:
  - top hero: `Shipping & <em>Delivery</em>`;
  - toolbar identity: `SHIPPING & DELIVERY`;
  - Contents title: `Shipping & Delivery`;
  - repeated document title: `Shipping & <em>Delivery</em>`;
- metadata rail remains compact;
- 01–05 Contents is unique and complete;
- table, lists, section rail, CTA and footer remain stable;
- Shipping's short `Spatial Flow Delivery` lede is source-derived content variance, not a layout defect; no fabricated copy will be introduced.

Verdict:
**H01B SHIPPING DESKTOP RUNTIME VISUAL PASS**

Remaining Shipping gate:
- mobile runtime screenshot.

Status:
**H01B SHIPPING DESKTOP PASS / MOBILE RUNTIME VERIFICATION PENDING**


## H01B Shipping desktop acceptance RETRACTED after annotated runtime screenshot — 2026-10-07

The prior Shipping desktop PASS was incorrect and is formally retracted.

Annotated runtime screenshot exposes two obvious H01A-parity defects that were missed:
1. a large empty vertical band remains between the global header and the Shipping hero content;
2. the right hero-note block does not share the accepted Refund/Privacy vertical placement/occupancy.

Width status:
- the Elementor 1200px horizontal constraint is fixed;
- Shipping now uses the accepted wide horizontal axis.

Next action:
- do not reopen horizontal width;
- identify the exact vertical owner in the real Elementor DOM before changing production CSS;
- inspect ancestor/sibling computed values for top/bottom padding, margins, min-height, height, justify-content and any empty preceding Elementor sibling/spacer.

Status:
**H01B SHIPPING DESKTOP PASS RETRACTED — HORIZONTAL WIDTH FIXED / VERTICAL HERO GEOMETRY RUNTIME HOLD**


## H01B Shipping vertical hero geometry root cause identified — 2026-10-07

User-provided vertical runtime diagnostic established:
- `.sf-policy-h01b-source`, main page, entry-content and article all begin around y=181;
- `.sf-policy-hero` itself begins around y=231 and has only the intended H01B 46px top / 34px bottom padding;
- no ancestor in the captured chain reports a large margin, min-height or padding block inside the H01B/Elementor subtree;
- therefore the large blank band is not created by the hero note, Elementor inner width container, or hero min-height.

Source comparison with accepted Refund H01A reveals the missing route-frame reset:
- Refund explicitly forces `.site-content`, `#content`, and `#primary` to `margin-top:0!important; padding-top:0!important`;
- H01B currently only clears horizontal width/padding on `.site-content .ast-container`, `#primary`, and `.entry-content`, but does not reset the top spacing owner on `.site-content/#content/#primary`.

Locked correction:
- add the exact Refund-style top-spacing neutralizer to `body.sf-policy-h01b-route`;
- version 2.7.86 -> 2.7.87 for cache-busting;
- no width, title, note, Contents, metadata, section, rail, CTA or Footer changes.

Expected runtime effect:
- the entire Shipping H01B body shifts upward by the inherited Astra content-top gap;
- hero note moves with the hero and should return to the accepted Refund/Privacy vertical band without a separate note override.

Status:
**H01B SHIPPING VERTICAL ROOT CAUSE FOUND — ROUTE TOP-SPACING RESET READY**


## H01B Shipping route top-spacing reset returned-file Source Gate — 2026-10-07 06:14 batch

Returned files:
- `functions(20261007-061415).php`
- `spatial-flow(20261007-061416).css`

PHP verification:
- version 2.7.87;
- 681,105 bytes / 13,230 physical lines;
- SHA256 `030de80ee6dbc7c09c043689820d36eb9b633c3c7f283762ac5b0f2c1dd79318`;
- `php -l` PASS;
- diff vs accepted 2.7.86 PHP is exactly one line: version `2.7.86 -> 2.7.87`.

CSS verification:
- 632,893 bytes / 23,371 physical lines;
- SHA256 `8ceaab75df299a94ba63861ffb3f1ca1b9f2f52e4a3639eb3e453fb5b6a8380b`;
- braces 3576 / 3576;
- comments 252 / 252;
- tinycss2 top-level parse errors 0;
- diff vs accepted `spatial-flow(20261007-054627).css` is exactly the requested Refund-parity route top-spacing reset:
  - add `body.sf-policy-h01b-route .site-content, #content, #primary { margin-top:0!important; padding-top:0!important; }`
- no unrelated CSS drift.

Verdict:
**H01B SHIPPING ROUTE TOP-SPACING RESET SOURCE GATE PASS**

Runtime target:
- Shipping Policy desktop full-page screenshot;
- verify the abnormal blank band between global header and hero disappears;
- verify hero title and right hero note shift upward together while horizontal width remains unchanged;
- do not reopen Privacy unless a concrete regression appears.

Status:
**H01B SHIPPING VERTICAL SOURCE PASS / DESKTOP RUNTIME RECHECK PENDING**


## H01B Shipping exact Refund-hero parity batch — 2026-10-07

Same-viewport visual comparison was performed between the accepted Refund H01A desktop screenshot and current Shipping desktop screenshot (both 1920x991).

Confirmed remaining Shipping-only differences:
1. the entire Shipping H01B source starts about 68px lower than Refund's accepted hero frame;
2. Shipping hero note is direct text in the real Elementor markup, so the existing H01B typography rule that only styles nested span/p does not affect it; the parent aside therefore falls back to sans-serif.

Locked correction:
- functions.php 2.7.87 -> 2.7.88 for cache-busting;
- Shipping-only source frame: apply margin-top:-68px to align the hero/toolbar/document start with the accepted Refund frame;
- H01B hero note parent itself receives the exact Refund note font: italic 300 17px/1.45 Cormorant Garamond, while existing nested span/p rule remains as a compatible duplicate;
- horizontal 1480px width ownership remains frozen;
- no changes to Contents, metadata, lede, sections, rails, table, CTA, footer, or Privacy.

Preflight on current returned files:
- PHP lint PASS;
- CSS braces 3577/3577;
- comments 253/253;
- tinycss2 top-level parse errors 0.

Status:
**H01B SHIPPING REFUND-HERO PARITY BATCH READY / RETURNED-FILE SOURCE GATE PENDING**


## H01B Shipping Refund-hero parity returned-file Source Gate — 2026-10-07 06:26 batch

Returned files:
- `functions(20261007-062614).php`
- `spatial-flow(20261007-062614).css`

PHP verification:
- version 2.7.88;
- 681,105 bytes / 13,230 physical lines;
- SHA256 `14bfa41cd95c669ed827b68df2510c856dd92cad0e3f816a7bd5f089e1472583`;
- `php -l` PASS;
- diff vs accepted 2.7.87 PHP is exactly one line: version `2.7.87 -> 2.7.88`.

CSS verification:
- 633,094 bytes / 23,383 physical lines;
- SHA256 `a8a035f0ed5e87b50b41a7a49addc0c585dba1fb4c77c7ffef86f2032651f45d`;
- braces 3577 / 3577;
- comments 253 / 253;
- tinycss2 top-level parse errors 0;
- diff vs accepted 2.7.87 CSS is exactly the requested two Shipping hero parity changes:
  1. add Shipping-only `.sf-policy-h01b-source { margin-top:-68px!important; }`;
  2. add the exact Refund hero-note font to the H01B note parent: italic 300 17px/1.45 Cormorant Garamond;
- no unrelated CSS drift.

Verdict:
**H01B SHIPPING REFUND-HERO PARITY SOURCE GATE PASS**

Runtime target:
- Shipping Policy desktop top viewport;
- verify hero/toolbar start aligns with accepted Refund frame;
- verify right hero note now renders as the same light italic serif note;
- horizontal 1480px geometry must remain unchanged.

Status:
**H01B SHIPPING REFUND-HERO PARITY SOURCE PASS / DESKTOP TOP RUNTIME RECHECK PENDING**


## H01B Shipping missing hero kicker identified — 2026-10-07

Annotated runtime screenshot after 2.7.88 shows one remaining obvious Refund-parity defect:
- Shipping hero is missing the small eyebrow/kicker above the main title.
- H01B CSS already contains the accepted kicker presentation rule (`.sf-policy-h01b-page .sf-kicker`), but the shared runtime mapper never creates a kicker when the legacy source does not provide one.
- Privacy already has a source kicker; Shipping does not, so no element exists for the rule to style.

Locked correction:
- Shipping-only runtime fallback kicker;
- derive kicker text from the existing real page title (`Shipping & Delivery`) so no new policy/legal copy is invented;
- insert before the Shipping hero title only when no existing `.sf-kicker` is present;
- version 2.7.88 -> 2.7.89;
- CSS unchanged.

Process correction:
- do not declare desktop PASS from a single repaired defect;
- after the kicker fix, perform a full same-viewport visual audit against accepted Refund H01A before any PASS call, including hero kicker/title/note, toolbar, Contents, document head/meta, lede, sections/rails, breaks, CTA and footer.

Status:
**H01B SHIPPING DESKTOP HOLD — MISSING HERO KICKER FIX READY / FULL-PAGE REAUDIT REQUIRED**


## H01B Shipping missing hero kicker returned-file Source Gate — 2026-10-07 06:32 batch

Returned file:
- `functions(20261007-063237).php`

Verification:
- version 2.7.89;
- 681,860 bytes / 13,256 file lines;
- SHA256 `aa42653a870c8b1b91423a451ad38bd4f1d727d0bbb836102fe2c660902420a8`;
- `php -l` PASS;
- extracted H01B runtime JavaScript: `node --check` PASS;
- diff vs accepted 2.7.88 PHP is exactly:
  1. version `2.7.88 -> 2.7.89`;
  2. Shipping-only missing-kicker fallback inserted immediately after `heroCopy` resolution;
- fallback only runs for `.sf-policy-h01b--shipping`, only when `.sf-kicker` is absent, and reuses the resolved real page title;
- no CSS change in this batch;
- no unrelated PHP drift.

Verdict:
**H01B SHIPPING HERO KICKER SOURCE GATE PASS**

Runtime requirement:
- do not pass the whole page from kicker visibility alone;
- after refresh, perform a full same-viewport desktop audit against accepted Refund H01A before any Shipping desktop PASS.

Status:
**H01B SHIPPING KICKER SOURCE PASS / FULL DESKTOP RUNTIME REAUDIT PENDING**


## H01B Shipping desktop full-page re-audit after 2.7.89 — kicker still missing — 2026-10-07

Full desktop screenshot reviewed against accepted Refund H01A.

Current findings:
- horizontal 1480px geometry remains correct;
- hero note now uses the intended light italic serif treatment;
- toolbar, Contents, repeated document head, metadata rail, sections 01–05, table/lists, chapter rails, CTA and footer are visually stable;
- **hero kicker is still missing**.

Exact source cause:
- the 2.7.89 fallback requires `heroCopy` to exist:
  `root.classList.contains('sf-policy-h01b--shipping') && heroCopy && !heroCopy.querySelector('.sf-kicker')`;
- Shipping's real Elementor hero does not expose the expected `.sf-policy-hero__copy` wrapper, so the fallback condition fails and no kicker is inserted;
- the resolved `titleNode` itself is valid, therefore the fallback should anchor to `titleNode.parentElement` / `hero`, not to the optional `heroCopy` wrapper.

Locked correction:
- functions.php 2.7.89 -> 2.7.90;
- replace the Shipping kicker fallback with a wrapper-independent version:
  - only on Shipping;
  - only when hero has no existing `.sf-kicker`;
  - require the resolved real `titleNode`;
  - insert the generated kicker immediately before `titleNode` in its actual parent;
  - text remains derived from the real page title;
- CSS unchanged.

Full-page audit status:
- no additional desktop structural defect is currently visible beyond the missing kicker;
- Shipping desktop must remain HOLD until the runtime screenshot confirms the kicker and one final full-page scan is completed.

Status:
**H01B SHIPPING DESKTOP HOLD — WRAPPER-INDEPENDENT HERO KICKER FIX READY**


## H01B Shipping wrapper-independent hero kicker returned-file Source Gate — 2026-10-07 06:39 batch

Returned file:
- `functions(20261007-063931).php`

Verification:
- version 2.7.90;
- 681,580 bytes / 13,246 file lines;
- SHA256 `de2d319ef1c500afa32370bf990e05e8be3b8f2da8b3eeada3ac8fba8230c61b`;
- `php -l` PASS;
- H01B runtime JavaScript syntax check PASS after substituting the two PHP-emitted URL literals used inside the inline script;
- diff vs accepted 2.7.89 PHP is exactly:
  1. version `2.7.89 -> 2.7.90`;
  2. kicker fallback no longer depends on `heroCopy`; it requires only Shipping + resolved `titleNode` + missing hero kicker and inserts immediately before the real title node;
- no CSS change;
- no unrelated PHP drift.

Verdict:
**H01B SHIPPING WRAPPER-INDEPENDENT HERO KICKER SOURCE GATE PASS**

Runtime requirement:
- refresh Shipping desktop;
- provide a full desktop screenshot, not only the hero;
- confirm the kicker appears above the main title, then perform one final full-page parity scan before any desktop PASS.

Status:
**H01B SHIPPING KICKER SOURCE PASS / FINAL DESKTOP RUNTIME REAUDIT PENDING**


## H01B Shipping process failure review — 2026-10-07

User correctly challenged the repeated repair loop.

Current full-page runtime screenshot after 2.7.90 proves the page is still not acceptable:
- hero kicker remains absent at runtime despite source-level fallback logic;
- left Contents is duplicated/fragmented during scroll: 05 appears detached mid-page and 04/05 reappear near the bottom, indicating the current DOM-mutation mapper is not producing a deterministic single canonical index;
- therefore prior source passes repeatedly overstated readiness because they verified code presence/syntax, not deterministic runtime structure.

Root process failure:
1. H01B tried to mutate structurally different legacy page DOMs in place instead of normalizing each page into one canonical H01A presentation contract.
2. Shipping is Elementor-owned and carries different wrapper hierarchy/constraints from Privacy; shared assumptions such as heroCopy, heading level, container class, and source index ownership repeatedly failed.
3. Defects were repaired symptom-by-symptom and partial runtime checks were treated as progress gates, causing serial rediscovery of obvious whole-page mismatches.
4. Source PASS was repeatedly allowed to stand too close to visual PASS even though runtime DOM mutation could still fail.

Corrective architecture:
- stop adding Shipping visual patches to the current mutation path;
- build a Shipping-specific H01B adapter that extracts real editor-owned content but renders one deterministic canonical H01A shell for presentation;
- keep source/legal copy/backend ownership intact;
- explicitly suppress or bypass legacy Elementor presentation wrappers after extraction so duplicate Contents/sticky artifacts cannot survive;
- run a full desktop and mobile parity audit before any PASS declaration.

Status:
**H01B SHIPPING PATCH LOOP STOPPED — CANONICAL ADAPTER REBUILD REQUIRED**


## H01B Shipping canonical adapter rebuild batch prepared — 2026-10-07

The patch-loop approach is now replaced by a deterministic Shipping-only canonical adapter.

Architecture:
- Privacy / future generic H01B mapper is left intact.
- Shipping (page id 3255 / slug shipping-policy) is excluded from the old generic runtime mapper.
- A new Shipping-specific runtime adapter snapshots only real editor-owned content from the legacy Elementor page: real hero title; real hero note; existing hero intro / Policy Overview line; overview metadata cards; unique real policy sections including tables/lists/body copy; real CTA.
- After extraction, the adapter clears the legacy Elementor presentation subtree inside `.sf-policy-h01b-source` and renders one canonical H01A/H01B shell: Hero with deterministic kicker/title/note; toolbar; one canonical Contents nav; repeated document head + metadata; lede; deduplicated policy sections with one generated chapter rail each; editorial breaks where applicable; CTA.
- No legal/editor text is hard-coded except existing shared UI labels such as Contents / Policy Overview / Contact Spatial Flow / Track Your Order.
- Existing 1480px H01B CSS remains the presentation authority; no CSS change in this rebuild batch.
- Shipping-specific old Elementor width rules become inert after the legacy subtree is replaced, but are intentionally not removed in the same batch to avoid mixing cleanup with architecture repair.

Candidate preflight:
- functions.php version 2.7.91;
- php -l PASS;
- new Shipping canonical inline JavaScript: node --check PASS;
- existing generic H01B runtime JavaScript after Shipping exclusion: node --check PASS.

Status:
**H01B SHIPPING CANONICAL ADAPTER REBUILD READY / USER MANUAL APPLY + RETURNED-FILE SOURCE GATE PENDING**


## H01B Shipping canonical adapter returned-file Source Gate — 2026-10-07 06:56 batch

Returned file:
- `functions(20261007-065635).php`

Verification:
- version `2.7.91`;
- 702,085 bytes / 14,088 file lines;
- SHA256 `719dc910dc65c547f47c67e9d87a043dd8e684306b2ed5d427e21838bebd1795`;
- `php -l` PASS;
- new Shipping canonical inline JavaScript: `node --check` PASS after substituting the two PHP-emitted URL literals;
- retained generic H01B runtime JavaScript: `node --check` PASS after the same substitution;
- diff vs accepted 2.7.90 PHP is exactly:
  1. version `2.7.90 -> 2.7.91`;
  2. add the Shipping-only canonical runtime adapter at wp_footer priority 89;
  3. add an early return in the old generic H01B mapper for page id 3255 / slug shipping-policy;
- no unrelated PHP drift.

Determinism checks:
- Shipping canonical adapter has one dedicated runtime entry point;
- old generic mapper explicitly does not run on Shipping;
- adapter snapshots real editor-owned title/note/intro/metadata/sections/CTA before clearing the legacy presentation subtree;
- legacy `.sf-policy-h01b-source` presentation markup is then replaced with one canonical Hero/Toolbar/Layout/Contents/Content shell;
- real policy sections are deduplicated by normalized heading before rendering;
- one canonical Contents item and one chapter rail are generated per retained section;
- canonical build marks `data-sf-policy-h01b-ready=1` and `sfPolicyH01bCanonical=1` to prevent duplicate reruns.

Verdict:
**H01B SHIPPING CANONICAL ADAPTER SOURCE GATE PASS**

Runtime requirement:
- refresh Shipping desktop and provide one full-page screenshot;
- verify the legacy Contents fragmentation is gone, hero kicker is present, exactly five Contents entries / five chapter rails appear, and Refund-parity geometry remains intact;
- only after desktop full-page pass proceed to mobile audit.

Status:
**H01B SHIPPING CANONICAL SOURCE PASS / DESKTOP FULL-PAGE RUNTIME REAUDIT PENDING**


## H01B Shipping pixel-geometry comparison against accepted Refund — 2026-10-07

The two user-provided full-page screenshots were normalized to the same 1920px viewport width before measurement because the attachment renderer downscaled each full-page image to a different output width according to total page height.

Measured common-frame geometry after normalization:
- global header bottom: Shipping y≈123 / Refund y≈123 — already aligned;
- toolbar top border: Shipping y≈282 / Refund y≈294 — Shipping shared H01B frame is ≈12px too high;
- Contents top border: Shipping y≈413 / Refund y≈424 — confirms the same ≈11–12px vertical frame offset;
- toolbar horizontal rule: Shipping x≈212–1692 (~1480px) / Refund x≈148–1758 (~1608px) — Shipping toolbar is incorrectly confined to the inner content width instead of the Refund wrap border-box width;
- Contents/nav x-axis: Shipping x≈212–443 / Refund x≈212–443 — inner shell left axis is already correct and must not move;
- document-head bottom rule: Shipping x≈552–1693 (~1140px) / Refund x≈552–1594 (~1040px) — H01B is missing Refund's wide-viewport document max-width:1040px rule.

Locked pixel-alignment correction:
1. Shipping source frame margin-top: -68px -> -56px (moves shared Hero/Toolbar/Shell down ~12px while keeping header fixed);
2. Shipping toolbar only: full-bleed to the Refund 1608px wrap border-box using negative H01B pad margins + matching inline padding, preserving the existing inner 1480px content axes;
3. H01B wide viewport (min-width 1600px): `.sf-policy-content { max-width:1040px; }`, matching accepted Refund document axis;
4. version 2.7.91 -> 2.7.92 for cache-busting;
5. do not force total page/footer y-coordinate to match Refund because Shipping has 5 sections and different real copy lengths; pixel parity applies to shared frame geometry, typography and spacing contracts, not fabricated content height.

Status:
**H01B SHIPPING PIXEL-ALIGNMENT BATCH READY — 3 MEASURED GEOMETRY DELTAS / RETURNED-FILE SOURCE GATE PENDING**


## H01B Shipping 2.7.92 returned-file source gate — 2026-10-07

Returned files:
- `functions(20261007-071138).php` — version 2.7.92, PHP lint PASS, SHA256 `c9dff167f002c3b88fb7964f39478cf86d74c3075d57ff9fdf8c4656a9008ccf`;
- `spatial-flow(20261007-071138).css` — 633,808 bytes, 23,423 logical lines, SHA256 `d1f470ca3c5d77113d2ee27f59931f2c35bacebf1be80bf183e548ec5f6788cc`, braces 3580/3580, comments 255/255, tinycss2 parse errors 0.

Diff gate:
- functions vs returned 2.7.91 baseline: only `SPATIAL_FLOW_CHILD_VERSION` changed 2.7.91 -> 2.7.92;
- CSS vs previous returned H01B baseline: only the intended pixel-alignment batch changed: Shipping source margin-top -68 -> -56, Shipping toolbar outer-width correction, and wide-viewport `.sf-policy-content { max-width:1040px; }` rule;
- no unrelated CSS drift detected.

Status:
**H01B SHIPPING 2.7.92 SOURCE PASS — RUNTIME PIXEL GATE PENDING**


## H01B Shipping desktop runtime pixel gate after 2.7.92 — 2026-10-07

Compared the current Shipping full-page screenshot against the accepted Refund H01A screenshot after normalizing both captures back to the same 1920px viewport width.

Measured shared-frame parity:
- global header bottom: ~124px vs Refund ~125px;
- hero/toolbar top rule: Shipping ~294px vs Refund ~294px;
- full wrap rule x-axis: Shipping ~148–1757px vs Refund ~148–1757px;
- Contents top: Shipping ~425px vs Refund ~424–426px;
- Contents x-axis: Shipping ~214–442px vs Refund ~214–442px;
- document rule x-axis: Shipping ~553–1592px vs Refund ~552–1593px (1040px document contract now restored);
- hero kicker is present;
- hero note uses the accepted light italic serif treatment;
- canonical top Contents contains exactly 01–05 and the repeated chapter rail is 01–05.

The detached `05` visible in the stitched full-page capture is treated as a full-page screenshot/sticky capture artifact, not a second canonical DOM index: the adapter renders a single canonical nav and the source structure is deterministic. If the user sees a duplicate while normally scrolling the live page, reopen as a runtime defect; otherwise do not patch for the capture artifact.

Verdict:
**H01B SHIPPING DESKTOP RUNTIME PIXEL PASS**

Next gate:
- Shipping mobile full-page runtime audit against accepted Refund mobile contract.

Status:
**H01B SHIPPING DESKTOP PASS / MOBILE RUNTIME PENDING**


## H01B Shipping mobile parity audit after desktop pass — 2026-10-07

The first Shipping mobile full-page screenshot is structurally stable but is NOT yet pixel-pass against the accepted Refund mobile contract.

Source-level comparison of the active H01B `@media (max-width:600px)` rules against accepted H01A mobile rules found real shared-contract mismatches:
1. hero note remains 17px on H01B while Refund mobile explicitly uses 16px;
2. Contents links are 52px / 9px on H01B vs accepted Refund 48px / 10px;
3. document metadata does not receive Refund's mobile row-wrap contract (`flex-direction:row`, wrap, gap 8px 22px, padding-top 12px);
4. lede spacing/type is 64px + 17px on H01B vs Refund 62px + 18px;
5. section heading max-width is 18ch on H01B vs Refund 20ch;
6. mobile chapter rail remains at the H01B <=820 values (rule 32px, mark 30px, label max 22ch) while Refund <=600 explicitly uses rule 26px, mark 28px, label unrestricted.

Locked correction:
- version 2.7.92 -> 2.7.93;
- replace only the H01B <=600 shared-policy mobile block values listed above so they mirror accepted H01A mobile values;
- no desktop geometry changes;
- no Shipping content/adapter changes;
- no Privacy reopen unless regression appears.

Status:
**H01B SHIPPING MOBILE STRUCTURE STABLE / REFUND-MOBILE PIXEL PARITY BATCH READY**


## H01B Shipping mobile parity 2.7.93 returned-file source gate — 2026-10-07

Returned files:
- `functions(20261007-074413).php` — version 2.7.93, 702,085 bytes / 14,088 file lines, SHA256 `2066f819f993f73564c1d5be0a854c749e245b098fb6a2da02e44aa5f85794b6`, `php -l` PASS;
- `spatial-flow(20261007-074412).css` — 634,212 bytes / 23,455 file lines, SHA256 `b697185d523f4e46496c7ef32d2c706e1df0c2abc0fed3dd601eab7fb567b527`, braces 3585/3585, comments 255/255, tinycss2 parse errors 0.

Diff gate vs accepted 2.7.92 returned baseline:
- PHP: only version `2.7.92 -> 2.7.93`;
- CSS: only the intended H01B <=600 mobile parity changes:
  - hero note 16px;
  - nav row 48px / nav text 10px;
  - document metadata row-wrap contract;
  - lede 62px / 18px;
  - section heading max-width 20ch;
  - paragraph/list line-height split to 1.76 / 1.7;
  - reading break 64px;
  - chapter rail rule 26px / mark 28px / label unrestricted;
- no desktop geometry changes;
- no Shipping canonical adapter changes;
- no unrelated CSS drift.

Verdict:
**H01B SHIPPING MOBILE 2.7.93 SOURCE GATE PASS**

Next gate:
- refresh Shipping at the same mobile viewport used for the previous capture;
- provide one full-page mobile screenshot;
- compare directly against accepted Refund mobile contract before declaring Shipping complete.

Status:
**H01B SHIPPING MOBILE SOURCE PASS / FINAL MOBILE RUNTIME PIXEL GATE PENDING**


## H01B Shipping final mobile runtime pixel gate — 2026-10-07

Final Shipping mobile full-page screenshot was normalized to the same mobile viewport width as the accepted Refund H01A mobile screenshot and compared side-by-side.

Shared mobile contract now matches:
- global mobile header / topbar frame;
- 20px page gutter;
- hero kicker, 44px title treatment and 16px italic hero note;
- two-column toolbar behavior;
- Contents heading and 2-column index with 48px rows / 10px labels;
- metadata presentation before the repeated document title;
- 36px document title and underline geometry;
- mobile Policy Overview / lede rhythm;
- section heading/body/list scale;
- chapter rail 26px rule / 28px mark / unrestricted label width;
- CTA treatment and mobile footer entry.

Content-dependent vertical height is intentionally not forced to equal Refund: Shipping has 5 sections, a delivery table and different copy lengths, while Refund has 6 sections and different body structures. The parity target is the shared H01A presentation contract, not fabricated equal page height.

Verdict:
**H01B SHIPPING MOBILE RUNTIME PIXEL PASS**

Final Shipping status:
**H01B SHIPPING DESKTOP + MOBILE PASS — COMPLETE**

Policy-family progression:
- Refund / Returns: PASS;
- Privacy: PASS;
- Shipping: PASS;
- Terms & Conditions: NEXT H01B TARGET.


## H01B Terms & Conditions one-shot canonical batch prepared — 2026-10-07

Goal: avoid repeating the Shipping patch loop. Terms is moved directly onto a dedicated deterministic canonical adapter rather than left on the legacy generic DOM-mutation path.

Batch design:
- functions version 2.7.93 -> 2.7.94;
- add a Terms-only canonical runtime for page id 3251 and slugs `terms-conditions` / `terms-and-conditions`;
- snapshot real editor-owned hero title/kicker/note/intro, overview metadata, unique policy sections, lists/tables/body copy and CTA;
- clear the legacy presentation subtree and render one canonical H01A/H01B shell;
- deduplicate sections by normalized heading;
- generate exactly one Contents item and one chapter rail per retained section;
- preserve real editor content and backend ownership; do not hard-code policy/legal body copy;
- exclude Terms from the older generic H01B mapper to prevent dual-processing;
- add Terms-only toolbar full-bleed parity with Refund;
- if the source is legacy Elementor, tag the route and apply the same measured -56px frame correction used by the accepted Shipping page;
- reuse the already accepted shared H01B desktop 1040px document axis and 2.7.93 mobile contract; no new Terms-specific typography system.

Candidate preflight performed on the latest returned files:
- PHP lint PASS;
- Terms canonical inline JavaScript `node --check` PASS after substituting PHP-emitted URLs;
- CSS braces 3587/3587;
- CSS comments 257/257;
- tinycss2 parse errors 0.

Status:
**H01B TERMS ONE-SHOT CANONICAL BATCH READY / USER MANUAL APPLY + RETURNED-FILE SOURCE GATE PENDING**


## H01B Terms first desktop runtime — FAIL + systemic FOUC finding — 2026-10-07

User correctly stopped the mobile audit. The Terms desktop screenshot is not a pixel-parity issue; the canonical rebuild did not run and the legacy WordPress presentation remains visible.

Confirmed source cause:
- all H01B normal WordPress policy pages are currently rebuilt by JavaScript emitted from `wp_footer` priority 89, so the browser can paint the original page before the runtime mapper executes; this explains the brief flash the user also observes on Privacy / Shipping;
- the Terms-specific canonical runtime additionally requires both `.sf-policy-hero` and `.sf-policy-content` inside `.sf-policy-h01b-source` and immediately returns if either is absent;
- repository owner audit already established Privacy / Shipping / Terms are ordinary WordPress-page-owned surfaces rather than one guaranteed shared native DOM contract;
- therefore the Terms adapter incorrectly assumed legacy class parity and remains stuck in the pre-canonical state shown in the screenshot.

Decision:
- Terms desktop = FAIL; do not inspect mobile yet;
- do not add another CSS patch;
- treat the visible flash on already accepted H01B pages as a real architectural defect, not a harmless cosmetic artifact;
- before further implementation, capture the exact current Terms source DOM once, read-only, then replace the footer-time assumption with a deterministic presentation path that does not expose the legacy layout before canonical readiness.

Status:
**H01B TERMS RUNTIME FAIL — MOBILE AUDIT STOPPED / H01B ANTI-FOUC + TERMS SOURCE NORMALIZATION REQUIRED**
