# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
5. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
6. project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
7. project2-progress/STEP_4E_B1_H_VALIDATION.md
8. project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
9. project2-progress/STEP_4E_B1_G3_VALIDATION.md
10. project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
11. project2-progress/STEP_4E_B1_G2_VALIDATION.md
12. project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
13. project2-progress/STEP_4E_B1_G1_VALIDATION.md
14. project2-progress/STEP_4E_B0_MANUAL_MAP.md
15. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
16. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
17. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
18. project2-progress/PROGRESS_LOG.md
19. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
20. project2-progress/STEP_4D_SYNC_MANIFEST.md
21. project2-progress/DEFERRED_PLANS.md
22. PROJECT2_CSS_MAINTENANCE_POLICY.md
```

The current Cart manual records supersede earlier ZIP/full-file replacement instructions and the failed B2-A1 deletion-only acceptance plan.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / rollback active. |
| `project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md` | Exact evidence that B2-A1 was performed correctly but caused structural collapse; defines rollback. | Active. |
| `project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md` | Original deletion-only instruction. | Failed / superseded by rollback record. |
| `project2-progress/STEP_4E_B1_H_VALIDATION.md` | Exact functions.php, Cart, and SAFE5 gate validation. | Passed. |
| `project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md` | Cart-only fallback safety operation. | Completed. |
| `project2-progress/STEP_4E_B1_G3_VALIDATION.md` | Four-column CSS validation and user acceptance. | Passed. |
| `project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md` | Withdrawn whole-file candidate record. | Historical / Do not apply. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | Precise replacement and no-blind-overwrite policy. | Active. |

## 3. Page-status rule

Only two statuses are valid:

```text
Completed 1:1
Not done
```

A page becomes `Completed 1:1` only after current-file implementation, desktop validation, mobile validation, functional regression, and backend-editability validation all pass.

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

Historical partial work does not change these binary statuses.

## 5. Current active step

```text
Step 4E-A Cart audit：Complete
Step 4E-B0 manual map：Complete
Step 4E-B1-A through B1-H：Passed
Step 4E-B2-A1 deletion：Executed exactly
B2-A1 browser result：Failed — Cart desktop structure collapsed
Cause：Deletion batch removed structural CSS before replacement existed
User editing error：No
Current action：Restore only the exact deleted range
B2-A2：Blocked
```

Current implementation mode:

```text
- no ZIP/full-file replacement
- no blind overwrite
- small named substeps
- exact anchors and predicted metrics
- revalidation after every operation
- independent rollback
- PHP and CSS never combined in one operation
- no large structural CSS deletion before a validated replacement owns the same layout
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

### Accepted CSS baseline to restore

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(4).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parse errors: 0
```

### Rejected B2-A1 CSS state

```text
Uploaded name: spatial-flow(5).css
Size: 731,426 bytes
Lines: 24,531
SHA256: ff341433f0b57881da4962028e5242fa1f5b56fdc40e3c08d7222811870a3487
Braces: 3,764 / 3,764
Comments: 368 / 368
CSS parse errors: 0
Browser result: Failed
```

## 7. Required rollback result

```text
Restore bytes: 35,694
Restore lines: 1,213
Expected final size: 767,120 bytes
Expected final lines: 25,744
Expected SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Expected braces: 3,918 / 3,918
Expected comments: 397 / 397
Expected CSS parse errors: 0
```

## 8. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed, or rolled-back Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded
- preserve backend editability and dynamic WooCommerce sources
- prefer precise range replacement over whole-file replacement or append-only CSS
```