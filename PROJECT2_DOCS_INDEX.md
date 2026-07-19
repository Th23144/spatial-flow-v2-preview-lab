# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-18  
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
16. project2-progress/STEP_4E_B2_R5_E4_C2_FULL_GEOMETRY_RESULT.md
17. project2-progress/STEP_4E_B2_R5_E4_C2_WIDTH_OWNER_CONFIRMATION.md
18. project2-progress/STEP_4E_B2_R5_E4_C2_MAX_WIDTH_SOURCE_RESULT.md
19. project2-progress/STEP_4E_B2_R5_E4_B_FIX1_MAX_WIDTH_CORRECTION.md
20. project2-progress/STEP_4E_B2_R5_E4_B_FIX1_PRE_DEPLOY_VALIDATION.md
21. project2-progress/STEP_4E_B2_R5_E4_B_FIX1_RUNTIME_ACCEPTANCE.md
22. project2-progress/STEP_4E_B2_R5_E4_C3_VISUAL_REVIEW_RESULT.md
23. project2-progress/STEP_4E_B2_R5_E4_D_SOURCE_AUDIT_AND_MANUAL_FIX.md
24. project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
25. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
26. project2-progress/PROGRESS_LOG.md
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
R5-E4-B strict geometry artifact：Passed / deployed
R5-E4-C2 principal geometry measurement：Passed
R5-E4-C2 wrapper/source owner confirmation：Passed
R5-E4-B-FIX1 artifact and runtime width：Passed / closed
R5-E4-C3 full-page visual review：Failed / residuals reopened
R5-E4-D current source validation：Passed
R5-E4-D source diagnosis/manual guide：Complete / ready
Current：Perform exact R5-E4-D manual edits and upload both edited files for pre-deploy validation
Cart：Not done
```

## Accepted current server-source baselines

```text
functions.php
Uploaded name: functions(15).php
Exact match to accepted functions(14).php baseline: Yes
Version: 2.7.8
Size: 552,215 bytes
Logical lines: 10,292
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070
Braces: 1,208 / 1,208
PHP syntax: Passed

assets/js/spatial-flow.js
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Uploaded name: spatial-flow(25).css
Exact match to accepted spatial-flow(24).css baseline: Yes
Size: 696,069 bytes
Logical lines: 23,335
SHA256: 412d6b20993a101e73b0fae9b7a26abc4941b5e8f6eb032c1c38689dfc823436
Braces: 3,626 / 3,626
Comments: 340 / 340
CSS parser errors: 0
```

## Accepted Cart geometry

```text
- Cart width matches completed Shop frame
- 7fr / 5fr relationship passed
- 80px desktop column gap passed
- 88px title-to-count rhythm passed
- 120px count-to-main-row rhythm passed
- inherited padding and 1200px cap defects are closed
```

## R5-E4-D source findings

```text
- warm #f6f1eb variable exists, but Cart page wrappers lack an explicit scoped background owner
- no Cart breadcrumb renderer exists
- recommendation eligibility allows products without a real image
- no product-level recommendation exclusion control exists
- image-less cards intentionally show the package/cube icon
- unauthored recommendation descriptions still receive a generated fallback sentence
- the Natural Silver Obsidian white label/arrow fragment belongs to the product image/crop, not Cart CSS
```

## Current operation

```text
project2-progress/STEP_4E_B2_R5_E4_D_SOURCE_AUDIT_AND_MANUAL_FIX.md
```

The guide defines exact bounded edits for:

```text
- warm Cart canvas ownership
- backend-editable HOME / YOUR BAG breadcrumb
- image-ready recommendation eligibility
- backend product exclusion checkbox
- larger dynamic candidate pools
- removal of generated recommendation claims
```

Do not deploy edited files before exact pre-deploy validation.

## Remaining sequence

```text
R5-E4-D manual edit + pre-deploy validation
→ deployment + backend product-image/exclusion action
→ R5-E4-C4 strict desktop + phone visual rerun
→ R5-E5 Cart Notice refinement
→ R5-E6 final acceptance
→ binary Cart status decision
```