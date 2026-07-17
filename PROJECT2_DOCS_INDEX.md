# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Authoritative Cart read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
4. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
5. PROJECT2_CSS_MAINTENANCE_POLICY.md
6. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
7. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
8. project2-progress/STEP_4E_B2_R5_E1_EXACT_SOURCE_AUDIT.md
9. project2-progress/STEP_4E_B2_R5_E2_POST_DEPLOY_VALIDATION.md
10. project2-progress/STEP_4E_B2_R5_E3_FINAL_RUNTIME_VALIDATION.md
11. project2-progress/STEP_4E_B2_R5_E4_A_STRICT_GEOMETRY_AUDIT.md
12. project2-progress/STEP_4E_B2_R5_E4_A1_MEASUREMENT_RESULT.md
13. project2-progress/STEP_4E_B2_R5_E4_A2_ANCESTOR_TRACE_RESULT.md
14. project2-progress/STEP_4E_B2_R5_E4_B_STRICT_GEOMETRY_CORRECTION.md
15. project2-progress/STEP_4E_B2_R5_E4_B_PRE_DEPLOY_VALIDATION.md
16. project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
17. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
18. project2-progress/PROGRESS_LOG.md
```

## Page-status rule

```text
Completed 1:1
Not done
```

## Completed 1:1

```text
- Main-site Header
- Main-site Footer
- Shop archive
- Single Product
```

## Current Cart status

```text
R5-E1 exact source/state audit：Complete
R5-E2 synchronized live counts：Passed / closed
R5-E3 empty-Cart parity：Passed / closed
R5-E4-A1 first geometry measurement：Complete
R5-E4-A2 ancestor/container trace：Complete
R5-E4-B exact CSS artifact：Passed / deployment authorized
Current：R5-E4-C rendered geometry and visual validation
Cart：Not done
```

## Accepted current server/code baselines

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

## R5-E4 audit result

```text
document client width: 1300px
current wrapper: 1164px
current outer gutters: 68px / 68px
current form / gap / summary: 609px / 80px / 435px
```

Exact owners:

```text
.entry-content padding-left/right: 20px / 20px
.entry-content > .woocommerce padding-left/right: 20px / 20px
```

Validated correction target:

```text
wrapper: 1204px
outer gutters: 48px / 48px
internal tracks: approximately 656px / 468px
column gap: 80px
title → count: approximately 88px
count → main row: approximately 120px
```

## Exact artifact integrity

Removing the one intended R5-E4-B desktop media block from `spatial-flow(23).css` reproduces the accepted `spatial-flow(22).css` SHA256 exactly. No other CSS difference exists.

## Current operation

```text
Deploy spatial-flow(23).css.
Rerun the existing geometry measurement on a non-empty desktop Cart at 100% zoom.
Perform desktop and phone smoke validation.
```

## Remaining sequence

```text
R5-E4-C geometry/visual runtime validation
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict acceptance
→ binary Cart decision
```