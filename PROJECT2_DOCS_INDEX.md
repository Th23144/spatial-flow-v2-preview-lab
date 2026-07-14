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
7. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
8. project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
9. project2-progress/STEP_4E_B2_R5_C4_LEGACY_CART_VISUAL_3_DELETION.md
10. project2-progress/STEP_4E_B2_R5_C3_VALIDATION.md
11. project2-progress/STEP_4E_B2_R5_C3_LEGACY_CART_VISUAL_2E_DELETION.md
12. project2-progress/STEP_4E_B2_R5_C2_VALIDATION.md
13. project2-progress/STEP_4E_B2_R5_C2_LEGACY_CART_VISUAL_2D_DELETION.md
14. project2-progress/STEP_4E_B2_R5_C1_VALIDATION.md
15. project2-progress/STEP_4E_B2_R5_C1_LEGACY_CART_VISUAL_1_DELETION.md
16. project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
17. project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
18. project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
19. project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
20. project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
21. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
22. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
23. project2-progress/STEP_4E_B1_H_VALIDATION.md
24. project2-progress/STEP_4E_B0_MANUAL_MAP.md
25. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
26. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
27. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
28. project2-progress/PROGRESS_LOG.md
```

Current records supersede earlier ZIP/full-file instructions, the failed deletion-first attempt, the temporary R2/FIX stack, blind remove-glyph attempts and earlier active-step statements.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md` | Mobile quality/usability outrank literal replication of weak static phone layouts. | Active. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | Replacement/merge/delete priority and anti-append-only rule. | Active. |
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current Cart protocol, exact baseline and active gate. | Authoritative / R5-D2-A active. |
| `project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md` | Backend editability, strict visual and final native-function acceptance. | Current executable phase. |
| `project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md` | Exact validation of the final historical Cart CSS deletion. | Passed. |
| `project2-progress/STEP_4E_B2_R5_C3_VALIDATION.md` | Exact validation of the third cleanup batch. | Passed. |
| `project2-progress/STEP_4E_B2_R5_C2_VALIDATION.md` | Exact validation of the second cleanup batch. | Passed. |
| `project2-progress/STEP_4E_B2_R5_C1_VALIDATION.md` | Exact validation of the first cleanup batch. | Passed. |
| `project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md` | R5-B canonical visual and interaction closeout. | Passed. |
| `project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md` | Historical R5 plan and acceptance requirements. | Plan fulfilled through R5-C; R5-D active. |

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
Step 4E-B2-R2 / FIX1 / FIX2 / FIX3：Historical temporary takeover sequence complete
Step 4E-B2-R4 native functional regression：Passed
Step 4E-B2-R5-A1 visual-gap and ownership audit：Complete
Step 4E-B2-R5-B canonical in-place replacement：Passed
Step 4E-B2-R5-B1 through B5：Passed
Complete R5-B gate：Closed / Passed
R5-C1 Cart Visual 1 through 1.4.1 deletion：Passed
R5-C2 Cart Visual 2-D through 2-D.8 deletion：Passed
R5-C3 Cart Visual 2-E deletion：Passed
R5-C4 Cart Visual 3 deletion：Passed
R5-C historical cleanup：Closed / Passed
R5-D1 exact source and ownership gate：Passed
Current：R5-D2-A active Customizer editability test
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
Logical lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
```

### Current exactly validated CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(18).css
Size: 695,346 bytes
Logical lines: 23,305
SHA256: 316874b203f8ce4104a1a98751f9b5fd63034fb50b0cbeb9aa0c4d2d5711020e
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

The accepted CSS is two bytes smaller than the theoretical R5-C4 result only because two empty newline characters immediately before the Checkout Visual Final marker were removed. No CSS semantics changed.

## 7. Historical Cart CSS debt

```text
Cart Visual 1 through 1.4.1：removed
Cart Visual 2-D through 2-D.8：removed
Cart Visual 2-E：removed
Cart Visual 3：removed
```

The scheduled R5-C historical cleanup is complete. Canonical Cart and Cart Notice remain the accepted presentation layers.

## 8. Correct execution sequence

```text
R5-D2-A active Customizer editability
→ R5-D2-B product-level Cart subtitle editability
→ R5-D2-C dynamic recommendation ownership
→ R5-D3 strict desktop and production-quality mobile visual acceptance
→ R5-D4 final native Cart regression
→ R5-D5 binary Cart page-status decision
```

## 9. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or reopened Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- preserve backend editability and dynamic WooCommerce sources
- prohibit routine append-only Cart visual fixes
- use bounded replacement/removal and bounded rollback
- validate every code cleanup before continuing
- apply the mobile design-quality policy to all remaining pages
```