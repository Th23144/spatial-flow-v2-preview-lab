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
18. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
19. project2-progress/PROGRESS_LOG.md
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
R5-E5 bounded Cart Notice CSS artifact：Passed / deployment authorized
Current：R5-E5 deployment and runtime notice/Undo validation
Cart：Not done
```

## Accepted deployed baselines before R5-E5 deployment

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
Currently deployed artifact: spatial-flow(26).css
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
CSS parser errors: 0
```

## Authorized R5-E5 CSS artifact

```text
spatial-flow(28).css
Size: 697,513 bytes
Logical lines: 23,384
SHA256: 2120e5639f780a2eb370b5776fb78dcc470f3049d5a921badf2aef1d23261015
Braces: 3,633 / 3,633
Comments: 339 / 339
CSS parser errors: 0
Line endings: LF
Final newline: present
```

## Closed R5-E4 result

```text
- synchronized BAG / Your Bag counts
- direct/transition empty-Cart parity
- strict Shop-matched frame width
- 7fr / 5fr tracks and 80px gap
- 88px / 120px vertical rhythm
- warm Cart canvas
- backend-editable HOME / YOUR BAG breadcrumb
- image-ready and product-level excluded recommendation ownership
- no generated unauthored recommendation copy
- native Cart operations and cross-page regression checks passed
```

## Current R5-E5 operation

Deploy `spatial-flow(28).css`, then verify:

```text
- full-width editorial Cart update notice
- restrained removed-item state
- native Undo/Restore remains functional
- BAG / Your Bag count synchronization remains intact
- phone layout has no notice overflow
- empty Cart parity remains intact
- Cart geometry, breadcrumb, recommendations, Header and Footer remain unchanged
- Shop, Single Product and SAFE5 Checkout pass quick regression checks
```

## Remaining sequence

```text
R5-E5 deployment + runtime validation
→ R5-E6 final strict acceptance
→ binary Cart status decision
```