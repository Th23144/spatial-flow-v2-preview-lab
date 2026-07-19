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
24. project2-progress/STEP_4E_B2_R5_E4_D_A1_A3_PARTIAL_VALIDATION.md
25. project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
26. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
27. project2-progress/PROGRESS_LOG.md
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
R5-E4-D A1 breadcrumb defaults：Passed
R5-E4-D A2 breadcrumb Customizer controls：Passed
R5-E4-D A3 recommendation exclusion field/save logic：Passed
Current：Complete A4 + A5 + CSS B1–B4 and upload both edited files
Cart：Not done
```

## Accepted deployed baselines

```text
functions.php
Version: 2.7.8
Size: 552,215 bytes
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070

assets/js/spatial-flow.js
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Size: 696,069 bytes
SHA256: 412d6b20993a101e73b0fae9b7a26abc4941b5e8f6eb032c1c38689dfc823436
```

## Current manually edited PHP artifact

```text
functions(16).php
Version: 2.7.8
Size: 553,377 bytes
Logical lines: 10,319
SHA256: ee759dcff385708f5cbec341fcea52b9803fa85489579b81c9b586ee96b54c26
Braces: 1,209 / 1,209
PHP syntax: Passed
```

Only A1–A3 differ from the accepted source baseline.

## R5-E4-D residual findings

```text
- Cart page wrappers still need the warm #f6f1eb canvas owner
- Cart breadcrumb output/styling still needs A4 and CSS B2–B4
- recommendation eligibility still needs image-ready/non-excluded filtering
- generated unauthored recommendation copy still needs removal
- candidate pools still need enlargement
```

## Corrected final artifact targets

```text
functions.php after A4 + A5
Size: 555,129 bytes
Logical lines: 10,365
SHA256: b101b33f6a327c53a2714855ec212bc6b973b3ea815acf619f832d2f407de458
Braces: 1,215 / 1,215
PHP syntax: Passed

spatial-flow.css after B1–B4
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
CSS parser errors: 0
```

Do not deploy before exact pre-deploy validation.

## Remaining sequence

```text
R5-E4-D complete manual edit + pre-deploy validation
→ deployment + backend image/exclusion action
→ R5-E4-C4 strict desktop + phone visual rerun
→ R5-E5 Cart Notice refinement
→ R5-E6 final acceptance
→ binary Cart status decision
```