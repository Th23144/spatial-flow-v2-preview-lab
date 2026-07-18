# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-17  
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
16. project2-progress/STEP_4E_B2_R5_E4_C1_RUNTIME_PARTIAL_AND_MEASUREMENT_CORRECTION.md
17. project2-progress/STEP_4E_B2_R5_E4_C2_FULL_GEOMETRY_RESULT.md
18. project2-progress/STEP_4E_B2_R5_E4_C2_WIDTH_OWNER_CONFIRMATION.md
19. project2-progress/STEP_4E_B2_R5_E4_C2_MAX_WIDTH_SOURCE_RESULT.md
20. project2-progress/STEP_4E_B2_R5_E4_B_FIX1_MAX_WIDTH_CORRECTION.md
21. project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
22. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
23. project2-progress/PROGRESS_LOG.md
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
R5-E4-B exact CSS artifact：Passed / deployed
R5-E4-C2 principal geometry measurement：Passed
R5-E4-C2 wrapper/source owner confirmation：Passed
Current：R5-E4-B-FIX1 bounded max-width correction
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
Deployed artifact: spatial-flow(23).css
Size: 695,962 bytes
Logical lines: 23,331
SHA256: b55c854e959ab42026f93c786e62b0c7e6b56e1cbf5307027b45991d39d90531
Braces: 3,625 / 3,625
Comments: 340 / 340
```

## Accepted R5-E4 geometry

```text
parent width: 1300px
wrapper border/content width: 1200 / 1200
form / gap / summary: 653 / 80 / 467
title → count: 88px
count → main row: 120px
```

Passed:

```text
- 7fr / 5fr rendered relationship
- exact 80px column gap
- exact 88px title-to-count rhythm
- exact 120px count-to-main-row rhythm
- inherited horizontal padding removal
```

## Exact final width owner

The stylesheet scan confirms Cart-specific inline-style rules with:

```text
max-width: 1200px
priority: no !important
source: inline <style>
condition: all
```

The direct matching selector includes:

```css
.woocommerce-cart .woocommerce {
  max-width: 1200px;
}
```

This is the remaining reason for 1200px / 50px gutters instead of 1204px / 48px gutters.

## Current operation

```text
project2-progress/STEP_4E_B2_R5_E4_B_FIX1_MAX_WIDTH_CORRECTION.md
```

## Remaining sequence

```text
R5-E4-B-FIX1 manual edit + exact artifact validation
→ runtime 1204px / 48px confirmation
→ R5-E4-C3 desktop + phone visual acceptance
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict acceptance
→ binary Cart decision
```