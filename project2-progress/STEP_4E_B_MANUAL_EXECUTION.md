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
R5-E4-B strict geometry artifact：Passed / deployed.
R5-E4-C1 partial runtime proof：Complete.
Current executable phase：R5-E4-C2 corrected full geometry diagnostic.
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

## R5-E4-C1 runtime evidence

The user supplied the older ancestor trace rather than the full geometry measurement. The prior phrase “rerun the previous measurement code” was ambiguous.

The supplied trace still proves the deployed CSS is active:

```text
before R5-E4-B:
wrapper 1164px
outer gutters 68px / 68px
entry-content padding 20px / 20px
wrapper padding 20px / 20px

after R5-E4-B:
wrapper 1200px
outer gutters 50px / 50px
entry-content padding 0px / 0px
wrapper padding 0px / 0px
```

The width increased by 36px and both inherited padding owners were removed.

The supplied trace does not report:

```text
form/summary widths
the final 80px column gap
title_to_count
count_to_main_row
exact border/content-box accounting for the remaining 4px width deficit
```

## Current exact operation

Run only the corrected diagnostic in:

```text
project2-progress/STEP_4E_B2_R5_E4_C1_RUNTIME_PARTIAL_AND_MEASUREMENT_CORRECTION.md
```

No additional CSS change is authorized before that result is recorded.

## Remaining sequence

```text
R5-E4-C2 corrected geometry diagnostic
→ R5-E4-C3 desktop + phone visual acceptance
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict full acceptance
→ binary Cart status decision
```