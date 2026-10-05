# Final Production 404 — H01 Owner Audit / Manual Batch Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Authority

Accepted static authority:
- branch: `temp-404-wishlist-led-01`
- file: `temp-preview/Spatial-Flow-404-Wishlist-Led-01.html`
- document title confirms final accepted state: `404 — Spatial Flow · Wishlist-led 02 · Type Correction`

Accepted visual system:
- 1480 body lane
- Cormorant Garamond display / serif notes
- Inter functional controls
- JetBrains Mono restrained metadata
- sage italic emphasis
- open recovery composition
- search recovery
- three common routes
- responsive recomposition at 1040 / 600

## Current production owner audit

Fresh owner audit remains valid:
- no child-theme `404.php` currently exists;
- 404 therefore falls through to parent/Astra;
- unrelated Journal false-404 prevention in `functions.php` must not be changed.

Therefore production mapping requires:
1. a new bounded root-level child-theme `404.php`;
2. a new canonical namespaced 404 CSS block;
3. an editable 404 copy owner in `functions.php`;
4. no routing/query rewrite.

Native global Header/Footer remain existing production owners and are not duplicated in the new template.

## Production architecture

### 404.php
- calls `get_header()` / `get_footer()`;
- uses native 404 route only;
- search form submits to existing main-site `/search/` using `q=`;
- Shop URL uses `spatial_flow_shop_url()`;
- Journal URL uses `spatial_flow_journal_url('/')`;
- Home / Search / Support URLs use `spatial_flow_main_site_url()`;
- no fake 404 JavaScript;
- Unicode action arrows use text-presentation selectors to avoid emoji fallback.

### functions.php
New copy owner:
- `spatial_flow_404_defaults()`
- `spatial_flow_404_mod()`
- `spatial_flow_404_customizer()`

Customizer owns presentation copy only.
Routing and destination URLs remain native/theme owned.

### spatial-flow.css
One canonical block:
`Spatial Flow Final Production 404 H01 · Accepted Authority Mapping`

Namespaced under `.sf-404-*`.
No Search, Header, Footer, commerce, or global layout owner is reopened.

## Baselines

functions.php:
- `functions(20261005-025951).php`
- 644,206 bytes
- 12,339 logical lines
- SHA256 `97f889501cc0e83f1642751a4342c7662068f50a29bc2e065481268f22934bb5`
- version 2.7.57
- PHP syntax PASS

CSS:
- `spatial-flow(20261005-025951).css`
- 611,747 bytes
- 21,794 logical lines
- SHA256 `9c70feb616fe41c98ef75b91ed3a0ef0f4ae0397c94cdb283136a592f09def26`
- braces 3438 / 3438

## Expected target identities

functions.php:
- 650,975 bytes
- 12,466 logical lines
- SHA256 `a55a7821f0fb37b96cdc78ef184a33580c46beea3116a60ee67266be23b49943`
- version 2.7.58
- PHP syntax PASS

CSS:
- 621,021 bytes
- 22,253 logical lines
- SHA256 `95b0750cc849e0fad96c560cc52890ad2ae5f050ae9b2f3493725e09cbc66a22`
- braces 3505 / 3505
- CSS parse errors 0

New root-level 404.php:
- 7,483 bytes
- 109 logical lines
- SHA256 `ff90d02ce3b9c624651f5fbb7ec968a346dc300bf72b13ec5cfe580f312c000f`
- PHP syntax PASS

## Manual edit plan

One coherent three-file batch:
1. create new root-level `404.php`;
2. functions version bump + insert 404 copy owner immediately before the unique Step 5P-B Mobile Menu Editable Controls START anchor;
3. insert canonical 404 CSS immediately before the unique Step 5P-B Mobile Menu Dynamic Accordion START anchor.

Stop if either insertion anchor is not exactly one match.

Do not runtime-test before all three returned files pass Combined Source Gate.

Status: OWNER AUDIT PASS / MANUAL H01 BATCH READY.
