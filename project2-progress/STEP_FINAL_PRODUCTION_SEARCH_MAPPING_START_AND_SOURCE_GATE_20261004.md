# Final Production Search — Mapping Start / Source Gate

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Sequence

Wishlist H03 is now Completed 1:1.

Per `STEP_FINAL_PRODUCTION_RESKIN_PHASE_START_SOURCE_GATE_20261002.md`, the next production item is Search.

## Accepted Search authority

Visual authority:
- branch: `temp-search-green-italic-03`
- file: `temp-preview/Spatial-Flow-Search-Harmonized-01.html`

Accepted design facts:
- body system: 1480px max
- shared task/info padding: `clamp(22px,4.2vw,64px)`
- typography harmonized to Wishlist-led system
- sage italic display accent retained
- 1024px mixed breakpoint state explicitly user-accepted
- no Search redesign is authorized
- production mapping should preserve the accepted composition while replacing static/demo data with real WordPress/WooCommerce owners

## Current production owners

From the fresh 2026-10-02 owner audit:

- page template owner: `page-templates/global-search.php`
- query/result logic + editable copy: `functions.php` Step 5C-B-C / D3 / D3A / E2
- CSS owner: `.sf-global-search-*` blocks in `assets/css/spatial-flow.css`

Current verified shared baselines after Wishlist closure:

### functions.php
- file: `functions(20261004-105306).php`
- bytes: 641,971
- logical lines: 12,307
- SHA256: `c65af1fc79fe8407477e109b35fe6e3ac16e2e095371cce881af30939010ed91`
- child version: 2.7.55

Search helper family is present and remains the dynamic owner:
- `spatial_flow_global_search_defaults()`
- `spatial_flow_global_search_mod()`
- `spatial_flow_global_search_customizer()`
- query sanitation
- multisite main/blog routing
- products/articles/pages/topics result owners

### spatial-flow.css
- file: `spatial-flow(20261004-104548).css`
- bytes: 610,831
- logical lines: 21,721
- SHA256: `776760cf5f96c1f27b693063d7d90f787edaa4709e72add9670a22dc222e56e0`

Current canonical Search CSS exists under:
- `Spatial Flow Step 5C-B-C · Global Search Native Page V1`
- follow-on mobile page-card fix `Step 5C-B-E1`

Production policy:
- replace/consolidate canonical Search rules in place;
- do not append a new indefinite Search override stack.

## Required remaining source gate

Before producing an exact production replacement, the current `page-templates/global-search.php` must be read from the latest local child theme.

Historical Search template copies are not sufficient because Project 2 policy requires the latest local source as the unique live baseline.

Do not edit Search until that exact current template is available.

## Next action

Obtain only:
`wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/page-templates/global-search.php`

Then:
1. hash / size / syntax gate;
2. compare its actual DOM slots with accepted Search authority;
3. classify what remains dynamic vs presentation-only;
4. produce one coherent mapping batch, preserving real search logic and backend editability.

Status: SEARCH PRODUCTION MAPPING STARTED / CURRENT TEMPLATE SOURCE REQUIRED.
