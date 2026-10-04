# Final Production Search — DOM / Authority Audit and Mapping Decision

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Inputs

Accepted Search authority:
- branch: `temp-search-green-italic-03`
- file: `temp-preview/Spatial-Flow-Search-Harmonized-01.html`
- user visual acceptance: `STEP_SEARCH_1024_USER_ACCEPTANCE_AND_FEEDBACK_ATTRIBUTION_CORRECTION_20260924.md`

Current production template:
- `page-templates/global-search.php`
- 13,038 bytes
- 220 logical lines
- SHA256: `303feaf8afa7efdbec45f8b91ccebc2a93514da11bb79896dc329115c0b663a7`
- PHP syntax: PASS

Current production functions:
- `functions(20261004-105306).php`
- 641,971 bytes
- 12,307 logical lines
- SHA256: `c65af1fc79fe8407477e109b35fe6e3ac16e2e095371cce881af30939010ed91`
- version: 2.7.55

Current production CSS:
- `spatial-flow(20261004-104548).css`
- 610,831 bytes
- 21,721 logical lines
- SHA256: `776760cf5f96c1f27b693063d7d90f787edaa4709e72add9670a22dc222e56e0`

## Audit finding

The current Search functionality is valid and should be preserved.

Dynamic owners already exist for:
- q= query sanitation;
- main-site / Journal context split;
- real WooCommerce products;
- real Journal articles;
- real WordPress pages;
- real taxonomy/topic pathways;
- Customizer-owned Search copy.

However, the current production DOM is NOT the accepted Search authority.

Current production presentation is:
- rounded gradient hero card;
- pill search field/button;
- 1180px body width;
- 3-column rounded result cards;
- rounded page rows/topic cards;
- card shadows / lift hover.

Accepted authority is:
- 1480px editorial body system;
- open hero with large Cormorant display;
- sage italic title accent;
- right-side italic note;
- top/bottom-rule search bar;
- restrained direction links;
- result summary + editorial filter tabs;
- open object spreads;
- open two-column editorial text results;
- separator-line rhythm;
- no card-grid / rounded-card / shadow language.

Therefore this is a structural presentation mismatch, not a small CSS tuning task.

## Mapping decision

Do NOT attempt to force the current card DOM into the accepted authority with another CSS patch stack.

Use one bounded production mapping batch:

1. `page-templates/global-search.php`
   - preserve all existing real result arrays and links;
   - replace only presentation DOM with a namespaced editorial Search DOM derived from the accepted authority;
   - products -> object spread;
   - articles -> journal editorial row;
   - real pages/topics -> truthful editorial text-row extensions using the same visual grammar;
   - preserve server-side q= form and split-site context;
   - add only lightweight page-local presentation filtering for already-rendered result groups; no new data owner.

2. `functions.php`
   - preserve all query/result functions;
   - keep existing Customizer owner;
   - add only the minimum editable Search display/suggestion/tab copy required by the accepted authority;
   - update accepted default hero/search copy;
   - bump child asset version.

3. `spatial-flow.css`
   - replace the current canonical Step 5C-B-C Search block and obsolete E1 mobile card fix in place;
   - do not append another Search override block;
   - map accepted 1480 / 1040 / 960 / 600 behavior;
   - harden only Search-owned controls against Astra chrome leakage.

## Explicit non-goals

- no change to WooCommerce search data;
- no change to Journal search data;
- no fake products/articles/pages/topics;
- no quick-view system added merely because the static prototype contains a demo dialog;
- no Header/Footer reopening;
- no default WordPress s= route rewrite;
- no Search redesign beyond the already accepted authority.

The static demo quick-view is classified as prototype-only interaction; production product titles/actions continue to link to the real product page.

## Status

AUDIT = PASS.
CURRENT PRODUCTION DOM = NOT AUTHORITY-COMPATIBLE.
MAPPING ARCHITECTURE = LOCKED.
NEXT = build and source-verify the three-file Search production mapping candidate.
