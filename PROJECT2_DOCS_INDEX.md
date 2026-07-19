# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-19  
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
12. project2-progress/STEP_4E_B2_R5_E4_C3_VISUAL_REVIEW_RESULT.md
13. project2-progress/STEP_4E_B2_R5_E4_D_SOURCE_AUDIT_AND_MANUAL_FIX.md
14. project2-progress/STEP_4E_B2_R5_E4_D_PRE_DEPLOY_VALIDATION.md
15. project2-progress/STEP_4E_B2_R5_E4_C4_RUNTIME_ACCEPTANCE.md
16. project2-progress/STEP_4E_B2_R5_E5_CART_NOTICE_REFINEMENT.md
17. project2-progress/STEP_4E_B2_R5_E5_PRE_DEPLOY_VALIDATION.md
18. project2-progress/STEP_4E_B2_R5_E5_RUNTIME_REJECTION.md
19. project2-progress/STEP_4E_B2_R5_E5_FIX1_LOADING_FRAME_AUDIT_AND_MANUAL_FIX.md
20. project2-progress/STEP_4E_B2_R5_E5_FIX1_PRE_DEPLOY_VALIDATION.md
21. project2-progress/STEP_4E_B2_R5_E5_FIX1_RUNTIME_REJECTION_AND_FIX2.md
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
R5-E4 strict geometry, canvas, breadcrumb and recommendation rebase：Passed / closed
R5-E5 first notice artifact：Passed technically / failed visually
R5-E5-FIX1 exact CSS validation：Passed
R5-E5-FIX1 runtime frame removal：Failed / warm rectangular wash remains perceptible
Current：R5-E5-FIX2 remove the BlockUI wash completely
Cart：Not done
```

## Accepted stable baselines

```text
functions.php
Deployed artifact: functions(17).php
Version: 2.7.8
Size: 555,130 bytes
Logical lines: 10,366
SHA256: ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86
PHP syntax: Passed
Braces: 1,215 / 1,215

assets/js/spatial-flow.js
Unchanged accepted baseline
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Last runtime-accepted Cart visual artifact: spatial-flow(26).css
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
CSS parser errors: 0
```

## R5-E5-FIX1 runtime-rejected artifact

```text
spatial-flow(31).css
Size: 697,642 bytes
Logical lines: 23,387
SHA256: 74afc4c8f3989c37aa937581687423de3d9ae34294034e363e0cd2cee66e87f7
```

Its source is valid, but the form and totals overlays still use 78% opaque warm backgrounds. FIX1 recolors the rectangle rather than removing it.

## R5-E5-FIX2 target

Replace only the two loading-overlay background declarations with transparent backgrounds while retaining native blocking, `opacity: 1`, and the restrained spinner.

```text
Predicted size: 697,616 bytes
Logical lines: 23,387
SHA256: 2fa292d96e7e35a3d633dbe5bd8334e73fdb2432bbd6c8e6576a1424e170f55d
Braces: 3,636 / 3,636
Comments: 337 / 337
CSS parser errors: 0
```

## Remaining sequence

```text
R5-E5-FIX2 exact artifact validation
→ R5-E5 runtime loading / notice / Undo acceptance
→ R5-E6 final strict acceptance
→ binary Cart decision
```