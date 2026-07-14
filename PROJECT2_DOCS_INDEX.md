# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
4. PROJECT2_CSS_MAINTENANCE_POLICY.md
5. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
6. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
7. project2-progress/STEP_4E_B2_R5_C4_LEGACY_CART_VISUAL_3_DELETION.md
8. project2-progress/STEP_4E_B2_R5_C3_VALIDATION.md
9. project2-progress/STEP_4E_B2_R5_C3_LEGACY_CART_VISUAL_2E_DELETION.md
10. project2-progress/STEP_4E_B2_R5_C2_VALIDATION.md
11. project2-progress/STEP_4E_B2_R5_C2_LEGACY_CART_VISUAL_2D_DELETION.md
12. project2-progress/STEP_4E_B2_R5_C1_VALIDATION.md
13. project2-progress/STEP_4E_B2_R5_C1_LEGACY_CART_VISUAL_1_DELETION.md
14. project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
15. project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
16. project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
17. project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
18. project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
19. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
20. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
21. project2-progress/STEP_4E_B1_H_VALIDATION.md
22. project2-progress/STEP_4E_B0_MANUAL_MAP.md
23. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
24. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
25. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
26. project2-progress/PROGRESS_LOG.md
```

Current records supersede earlier ZIP/full-file instructions, deletion-first instructions, the temporary R2/FIX stack and the blind remove-glyph attempts.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md` | Mobile quality/usability outrank literal replication of weak static phone layouts. | Active. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | Replacement/merge/delete priority and anti-append-only rule. | Active. |
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current Cart protocol, exact baseline and active gate. | Authoritative / R5-C4 active. |
| `project2-progress/STEP_4E_B2_R5_C4_LEGACY_CART_VISUAL_3_DELETION.md` | Exact bounded deletion and rollback procedure for Cart Visual 3. | Current executable operation. |
| `project2-progress/STEP_4E_B2_R5_C3_VALIDATION.md` | Exact file, visual and functional validation of the third cleanup batch. | Passed. |
| `project2-progress/STEP_4E_B2_R5_C2_VALIDATION.md` | Exact file, visual and functional validation of the second cleanup batch. | Passed. |
| `project2-progress/STEP_4E_B2_R5_C1_VALIDATION.md` | Exact file, visual and functional validation of the first cleanup batch. | Passed. |
| `project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md` | R5-B canonical visual and interaction closeout. | Passed. |
| `project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md` | Staged R5-C cleanup and R5-D acceptance sequence. | Active. |

## 3. Page-status rule

Only two statuses are valid:

```text
Completed 1:1
Not done
```

A page becomes `Completed 1:1` only after implementation, strict desktop review, production-quality mobile review, functional regression, backend-editability validation and required CSS cleanup all pass.

For mobile, `Completed 1:1` means faithful to the V2 design language while remaining production-quality on real phone widths.

## 4. Current page-level summary

### Completed 1:1

```text
- Main-site Header
- Main-site Footer
- Shop archive
- Single Product
```

### Not done

```text
- Blog Header/Footer branch
- Home
- Cart
- Checkout
- Thank You
- Wishlist
- Track Order
- Account
- Search
- 404
- About Us
- Services
- FAQ / Help
- Contact
- Utility / policy pages
- Blog home
- Blog issue
- Blog article
```

A later mobile aesthetic re-audit remains scheduled for Shop archive and Single Product. A concrete defect will reopen the relevant page.

## 5. Current Cart status

```text
Step 4E-A Cart audit：Complete
Step 4E-B0 manual map：Complete
Step 4E-B1-A through B1-H：Passed
Step 4E-B2-A1 deletion-first attempt：Rejected and rolled back exactly
Step 4E-B2-R1 dependency re-audit：Complete
Step 4E-B2-R2 / FIX1 / FIX2 / FIX3：Temporary takeover sequence complete
Step 4E-B2-R4 native functional regression：Passed
Step 4E-B2-R5-A1 visual-gap and ownership audit：Complete
Step 4E-B2-R5-B canonical in-place replacement：Passed
Step 4E-B2-R5-B1 through B5：Passed
Complete R5-B gate：Closed / Passed
R5-C1 Cart Visual 1 through 1.4.1 deletion：Passed
R5-C2 Cart Visual 2-D through 2-D.8 deletion：Passed
R5-C3 Cart Visual 2-E deletion：Passed
Current：R5-C4 Cart Visual 3 bounded deletion
Routine append-only CSS：Forbidden
Cart：Not done
```

## 6. Current code states

### PHP baseline — unchanged

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
```

### Current exactly validated CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(17).css
Size: 697,430 bytes
Logical lines: 23,366
SHA256: bd28dc82f300f905103f5388740c82dc07249a581a9030a6d6ccd465f9427341
Braces: 3,629 / 3,629
Comments: 342 / 342
CSS parser errors: 0
```

The R5-C3 theoretical file was 2 bytes larger only because it retained two empty newline characters immediately before Cart Visual 3. The accepted uploaded file has identical CSS semantics.

### Expected CSS after R5-C4 exact deletion

```text
Size: 695,348 bytes
Logical lines: 23,307
SHA256: 923837d0f271930d164f074e9c30e15a6097436e11fb83daa3c1ac71a437d3d5
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

## 7. Remaining CSS debt

```text
R5-C4：Cart Visual 3
```

This final cleanup batch is deletion-only, independently reversible and separately validated.

## 8. Correct execution sequence

```text
R5-C4 deletion + exact file / desktop / phone / targeted-function validation
→ R5-D backend editability + strict desktop/mobile + full native-function acceptance
→ binary Cart page-status decision
```

## 9. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or reopened Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- preserve backend editability and dynamic WooCommerce sources
- prohibit routine append-only Cart visual fixes
- use bounded replacement/removal and bounded rollback
- validate every cleanup batch before continuing
- apply the mobile design-quality policy to all remaining pages
```
