# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-18  
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
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 wrapper/source ownership：Passed.
R5-E4-B-FIX1 artifact and runtime width：Passed / closed.
R5-E4-C3 full-page visual review：Failed / residuals reopened.
Current executable phase：R5-E4-D residual strict-visual corrections.
Cart page status：Not done.
```

## Accepted code baselines

```text
functions.php
Deployed source artifact: functions(14).php
Version: 2.7.8
Size: 552,215 bytes
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070

assets/js/spatial-flow.js
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Deployed artifact: spatial-flow(24).css
Size: 696,069 bytes
Logical lines: 23,335
SHA256: 412d6b20993a101e73b0fae9b7a26abc4941b5e8f6eb032c1c38689dfc823436
Braces: 3,626 / 3,626
Comments: 340 / 340
CSS parser errors: 0
```

## Accepted geometry

```text
- Cart width matches the completed Shop frame
- 7fr / 5fr rendered relationship passed
- 80px desktop column gap passed
- 88px title-to-count rhythm passed
- 120px count-to-main-row rhythm passed
- inherited parent/wrapper padding removal passed
```

## R5-E4-C3 visual result

Passed:

```text
- desktop frame, main columns and title rhythm
- desktop product row / Summary / Coupon basic alignment
- four-column desktop recommendation structure
- phone non-empty usability and no visible horizontal overflow
- Header and Footer regression
```

Blocking residuals:

```text
1. Real Cart canvas renders white; approved static Cart canvas is warm #f6f1eb.
2. Approved HOME / YOUR BAG breadcrumb is absent on desktop and phone.
3. Recommendation imagery is not presentation-ready:
   - Natural Silver Obsidian Bracelet shows a white label/arrow fragment
   - Natural Malachite Mixed Bead Bracelet shows the WooCommerce cube placeholder
```

Detailed record:

```text
project2-progress/STEP_4E_B2_R5_E4_C3_VISUAL_REVIEW_RESULT.md
```

## Current exact operation · R5-E4-D

No blind code change is authorized yet.

Required current server inputs:

```text
- current spatial-flow(24).css / assets/css/spatial-flow.css
- current functions(14).php / functions.php
```

Required backend content action:

```text
- replace/crop the Natural Silver Obsidian Bracelet image
- provide a real image for Natural Malachite Mixed Bead Bracelet or remove it from eligible recommendation output
```

R5-E4-D must use bounded, in-place corrections. Do not alter the completed Header broadly, do not fabricate product imagery, and do not advance to R5-E5 before the visual residuals pass.

## Remaining sequence

```text
R5-E4-D background + breadcrumb + dynamic-image residual corrections
→ R5-E4-C4 desktop + phone strict visual rerun
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```