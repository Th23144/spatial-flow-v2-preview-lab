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
Current executable phase：R5-E4-B strict geometry correction.
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
Deployed artifact: spatial-flow(22).css
Size: 695,622 bytes
Logical lines: 23,316
SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
Braces: 3,621 / 3,621
Comments: 340 / 340
```

## R5-E4 final audit finding

```text
document client width: 1300px
current wrapper: 1164px
current outer gutters: 68px / 68px
current grid: 609px + 80px + 435px

.entry-content padding: 20px / 20px
.woocommerce wrapper padding: 20px / 20px
```

Correct target:

```text
wrapper: 1204px
outer gutters: 48px / 48px
tracks: approximately 656px / 468px
column gap: 80px
```

Vertical target:

```text
title → count: 8px → approximately 88px
count → main row: 93px → approximately 120px
```

## Current exact operation

Follow only:

```text
project2-progress/STEP_4E_B2_R5_E4_B_STRICT_GEOMETRY_CORRECTION.md
```

The edit is one desktop-only media block inserted inside the existing Canonical Cart owner after the base count rule. It resets the two inherited padding owners and calibrates the two measured vertical distances.

Do not deploy the edited CSS before exact artifact validation.

## Remaining sequence

```text
R5-E4-B manual edit + pre-deploy validation
→ R5-E4-C rendered measurement and desktop/phone visual validation
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict full acceptance
→ binary Cart status decision
```