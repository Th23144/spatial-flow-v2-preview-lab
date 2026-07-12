# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
4. PROJECT2_CSS_MAINTENANCE_POLICY.md
5. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
6. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
7. project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
8. project2-progress/STEP_4E_B2_R3_FIX3_VALIDATION.md
9. project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
10. project2-progress/STEP_4E_B2_R3_FIX3_MOBILE_DUPLICATE_PRICE.md
11. project2-progress/STEP_4E_B2_R3_A_MOBILE_BASELINE_AUDIT.md
12. project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md
13. project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
14. project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
15. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
16. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
17. project2-progress/STEP_4E_B1_H_VALIDATION.md
18. project2-progress/STEP_4E_B0_MANUAL_MAP.md
19. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
20. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
21. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
22. project2-progress/PROGRESS_LOG.md
```

Current Cart manual records supersede earlier ZIP/full-file replacement instructions, the failed deletion-first plan, and the temporary assumption that appended R2/FIX fragments could remain indefinitely.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md` | Mobile quality/usability outrank literal replication of weak static phone layouts. | Active. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | Replacement/merge/delete priority and anti-append-only rule. | Active. |
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / R5-A active. |
| `project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md` | Freeze, ownership audit, canonical replacement and staged legacy deletion plan. | Active. |
| `project2-progress/STEP_4E_B2_R3_FIX3_VALIDATION.md` | Exact file and mobile screenshot validation after duplicate-price correction. | Passed exactly. |
| `project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md` | Native Cart interaction validation. | Passed. |
| `project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md` | Exact desktop-detail CSS validation. | Passed. |
| `project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md` | Temporary validated Cart-only takeover layer. | Present; pending canonical merge. |
| `project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md` | Exact restored-file metrics and byte comparison. | Passed exactly. |

## 3. Page-status rule

Only two statuses are valid:

```text
Completed 1:1
Not done
```

A page becomes `Completed 1:1` only after implementation, desktop validation, mobile validation, functional regression, backend-editability validation and required cleanup all pass.

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
Step 4E-B2-A1 deletion：Rejected and rolled back exactly
Step 4E-B2-R1 dependency re-audit：Complete
Step 4E-B2-R2 consolidation：Inserted
Step 4E-B2-R2-FIX1 desktop structure：Passed
Step 4E-B2-R2-FIX2 desktop detail：Passed exactly
Step 4E-B2-R3-A mobile structure：Passed
Step 4E-B2-R3-FIX3 duplicate unit price：Passed exactly
Step 4E-B2-R4 native functional regression：Passed
Append-only Cart refinement：Frozen
Step 4E-B2-R5-A ownership and cleanup audit：Active
```

The Cart remains officially `Not done`.

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

### Current exact CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Braces: 4,127 / 4,127
Comments: 405 / 405
CSS parse errors: 0
R2 markers: 1 / 1
FIX1 markers: 1 / 1
FIX2 markers: 1 / 1
FIX3 markers: 1 / 1
```

## 7. Current CSS cleanup inventory

Historical Cart visual stack:

```text
15 blocks
117,141 bytes
3,798 lines
456 rule/media-query brace pairs
```

Current R2/FIX stack:

```text
46,765 bytes
1,470 lines
209 rule/media-query brace pairs
```

The historical stack remained temporarily because the first deletion-first attempt collapsed the page. That safety exception is now closed; the next phase is replacement and staged deletion rather than further append-only patches.

## 8. Active gate

Use:

```text
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
```

R5-A is audit-only. It must produce the responsibility matrix, inherited declarations, canonical replacement boundary and exact safe deletion batches before any CSS edit is issued.

## 9. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or reopened Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- preserve backend editability and dynamic WooCommerce sources
- prohibit routine append-only Cart visual fixes after FIX3
- replace/merge the R2 stack before legacy deletion
- apply the mobile design-quality policy to all remaining pages
```