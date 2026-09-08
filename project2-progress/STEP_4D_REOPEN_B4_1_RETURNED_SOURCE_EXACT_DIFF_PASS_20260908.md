# Step 4D Reopen B4.1 — Returned source exact-diff PASS — 2026-09-08

## Scope
Single Product · Section 02 Editorial Reading · desktop long-narrative scroll / mobile natural-flow implementation.

## Returned files audited

### `assets/css/spatial-flow.css`
- Local returned filename: `spatial-flow(20260908-125239).css`
- Bytes: 598,711
- Logical lines: 21,079
- SHA256: `b86707dd567cd3074f7a28fd4b139f73700d9c4a3642372e32394a4f2f1a810b`
- Opening braces: 3,318
- Closing braces: 3,318

Expected B4.1 changes are present in the canonical Section 02 block:
- desktop reading grid `align-items: center`;
- narrative body `max-height: 360px` + `overflow-y: auto`;
- thin native/WebKit scrollbar styling;
- <=1100px grid `align-items: start`;
- <=1100px narrative body restores `max-height: none` and `overflow-y: visible`.

Exact-diff verification: reversing only the intended B4.1 edits reconstructs the previously accepted B4 source exactly:
- Bytes: 597,995
- Logical lines: 21,050
- SHA256: `669a75fe4f890d9f8c8823a88c010c7f298224a20a71e5d95d0bc4c15700c360`
- Braces: 3,313 / 3,313

This exactly matches `STEP_4D_REOPEN_B4_READS_CSS_RETURNED_SOURCE_FIX_PASS_20260908.md`; therefore no unrelated CSS drift is present.

### `functions.php`
- Local returned filename: `functions(20260908-125246).php`
- Bytes: 617,930
- Logical lines: 11,808
- SHA256: `003c3a07fb6bdf4303b388cb98ed64521ee50a2239967f7d54de8f36923228df`
- Opening braces: 1,344
- Closing braces: 1,344
- `SPATIAL_FLOW_CHILD_VERSION`: `2.7.33`
- PHP syntax: PASS (`php -l`)

The B4.1 implementation contract allowed only the cache-busting version change in `functions.php`; the required version is present and syntax remains valid.

## Result
PASS.

## Next gate
Frontend verification only, using the long Section 02 narrative:
1. Desktop: confirm the left image remains stable and only the narrative body scrolls when content exceeds the reading window; heading/context/meta remain outside the scroll area.
2. 390px mobile: confirm the narrative has no internal scroll container and expands naturally in the page flow.

No third routine viewport is required. Do not reopen unrelated Single Product areas unless new visible evidence appears.
