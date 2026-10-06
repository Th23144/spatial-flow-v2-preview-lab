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
