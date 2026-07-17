# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-16  
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
R5-E4-B strict geometry artifact：Passed / deployment authorized.
Current executable phase：R5-E4-C rendered geometry and visual validation.
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
Validated deployment artifact: spatial-flow(23).css
Size: 695,962 bytes
Logical lines: 23,331
SHA256: b55c854e959ab42026f93c786e62b0c7e6b56e1cbf5307027b45991d39d90531
Braces: 3,625 / 3,625
Comments: 340 / 340
CSS parser errors: 0
```

## Exact artifact proof

Removing the one intended R5-E4-B desktop media block from `spatial-flow(23).css` recovers the accepted `spatial-flow(22).css` SHA256 exactly:

```text
7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
```

No other CSS difference exists.

## Current operation

Deploy `spatial-flow(23).css` as:

```text
assets/css/spatial-flow.css
```

Clear caches and force refresh. On a non-empty desktop Cart at 100% browser zoom, rerun the existing R5-E4 geometry measurement snippet.

Expected:

```text
wrapper_width: 1204
left_gutter: 48
right_gutter: 48
form_width: approximately 656
summary_width: approximately 468
rendered_column_gap: 80
title_to_count: approximately 88
count_to_main_row: approximately 120
```

Then check:

```text
- desktop large-whitespace rhythm matches the approved static reference
- recommendation row uses the wider frame normally
- no desktop horizontal overflow
- phone non-empty Cart remains normal
- phone direct-empty and transition-to-empty remain centered and identical
```

## Remaining sequence

```text
R5-E4-C geometry/visual runtime validation
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict full acceptance
→ binary Cart status decision
```