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
7. project2-progress/STEP_4E_B2_R5_C1_LEGACY_CART_VISUAL_1_DELETION.md
8. project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
9. project2-progress/STEP_4E_B2_R5_B5_REMOVE_ICON_REFINEMENT.md
10. project2-progress/STEP_4E_B2_R5_B4_REMOVE_ICON_OWNERSHIP.md
11. project2-progress/STEP_4E_B2_R5_B3_DIAGNOSIS_RESULT.md
12. project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
13. project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
14. project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
15. project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
16. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
17. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
18. project2-progress/STEP_4E_B1_H_VALIDATION.md
19. project2-progress/STEP_4E_B0_MANUAL_MAP.md
20. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
21. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
22. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
23. project2-progress/PROGRESS_LOG.md
```

Current records supersede earlier ZIP/full-file instructions, deletion-first instructions, the temporary R2/FIX stack and the blind remove-glyph color/weight attempts.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md` | Mobile quality/usability outrank literal replication of weak static phone layouts. | Active. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | Replacement/merge/delete priority and anti-append-only rule. | Active. |
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current Cart protocol, baselines and active gate. | Authoritative / R5-C1 active. |
| `project2-progress/STEP_4E_B2_R5_C1_LEGACY_CART_VISUAL_1_DELETION.md` | Exact bounded deletion and rollback instructions for the first legacy Cart group. | Current executable operation. |
| `project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md` | Exact R5-B5 file, visual and interaction closeout. | Passed / closes R5-B. |
| `project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md` | Canonical replacement record. | Passed. |
| `project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md` | Visual discrepancy, ownership and cleanup-batch audit. | Passed as audit. |
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
Step 4E-B2-R5-B1 through B5 remove-control correction：Complete
R5-B5 visual acceptance：Passed
R5-B5 Remove / Undo / Restore：Passed
Complete R5-B gate：Closed / Passed
Current：R5-C1 bounded deletion of Cart Visual 1 through 1.4.1
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
Uploaded name: spatial-flow(14).css
Size: 812,489 bytes
Logical lines: 27,104
SHA256: 53c2efa74e6975912191f0e522f97ce5ec2a8148fc8f808a8c481492d07e5c59
Braces: 4,075 / 4,075
Comments: 413 / 413
CSS parser errors: 0
Canonical START / END: 1 / 1
Old R2 / FIX markers: 0
Cart Notice START: 1
```

### Expected CSS after R5-C1 exact deletion

```text
Size: 776,797 bytes
Logical lines: 25,893
SHA256: 73d3cf9a76b9c3f5359254b4612948b735ae2b9157063a359e05f80dc8a9db73
Braces: 3,921 / 3,921
Comments: 384 / 384
CSS parser errors: 0
```

## 7. CSS debt inventory

Before R5-C1, historical Cart CSS remains:

```text
15 blocks
117,141 bytes
3,798 logical lines
456 rule/media-query brace pairs
```

Cleanup batches:

```text
R5-C1：Cart Visual 1 through 1.4.1
R5-C2：Cart Visual 2-D through 2-D.8
R5-C3：Cart Visual 2-E
R5-C4：Cart Visual 3
```

Each batch is deletion-only, independently reversible and separately validated.

## 8. Correct execution sequence

```text
R5-C1 deletion + exact file / desktop / phone / targeted-function validation
→ R5-C2 deletion + validation
→ R5-C3 deletion + validation
→ R5-C4 deletion + validation
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