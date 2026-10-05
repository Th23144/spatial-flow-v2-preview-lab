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
