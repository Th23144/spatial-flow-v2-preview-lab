# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-17  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Step 4E-B0 manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion-first attempt：Rejected / rolled back.
R5-B canonical implementation：Passed as cleaned baseline, not final 1:1.
R5-C1 through R5-C4 cleanup：Passed / closed.
R5-D1 source/ownership：Passed.
R5-D2 editability/dynamic ownership：Passed / closed.
R5-D3 strict visual acceptance：Failed / reopened.
R5-D4 native regression：Failed / reopened.
R5-D5 binary decision：Blocked.
R5-E1 exact source/state audit：Complete.
R5-E2 synchronized live counts：Passed / closed.
R5-E3 empty-Cart parity：Passed / closed.
R5-E4-A1 first geometry measurement：Complete.
R5-E4-A2 ancestor/container trace：Complete.
R5-E4-B strict geometry artifact：Passed / deployed.
R5-E4-C1 partial runtime proof：Complete.
R5-E4-C2 principal geometry measurement：Passed.
Current executable phase：Confirm wrapper computed css_width/max_width only.
Cart page status：Not done.
```

## Accepted current baselines

```text
functions.php
Version: 2.7.8
Size: 552,215 bytes
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070

assets/js/spatial-flow.js
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Deployed artifact: spatial-flow(23).css
Size: 695,962 bytes
Logical lines: 23,331
SHA256: b55c854e959ab42026f93c786e62b0c7e6b56e1cbf5307027b45991d39d90531
Braces: 3,625 / 3,625
Comments: 340 / 340
CSS parser errors: 0
```

## R5-E4-C2 accepted measurement

```text
window inner width: 1315
document client width: 1300
scrollbar width: 15
wrapper border/content width: 1200 / 1200
wrapper outer gutters: 50 / 50
parent entry-content border/content width: 1300 / 1300
form / gap / summary: 653 / 80 / 467
title → count: 88
count → main row: 120
```

Accepted:

```text
- 7fr / 5fr relationship is correct within rounding
- 80px desktop column gap is exact
- title-to-count rhythm is exact
- count-to-main-row rhythm is exact
- inherited parent/wrapper padding is removed
```

Pending strict width owner:

```text
wrapper remains 1200px with 50px gutters
strict formula target is 1204px with 48px gutters
```

## Current exact operation

Do not expand prototypes or unrelated objects.

Show only the complete wrapper computed values using either:

```text
- expand `wrapper` one level and reveal `css_width` and `max_width`, or
- horizontally scroll the first console table so those two wrapper cells are fully visible
```

Reference:

```text
project2-progress/STEP_4E_B2_R5_E4_C2_FULL_GEOMETRY_RESULT.md
```

No CSS change is authorized before this exact owner value is recorded.

## Remaining sequence

```text
wrapper computed width/max-width confirmation
→ R5-E4-C3 desktop + phone visual acceptance
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict full acceptance
→ binary Cart status decision
```