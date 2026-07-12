# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
5. project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
6. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
7. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
8. project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
9. project2-progress/STEP_4E_B1_H_VALIDATION.md
10. project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
11. project2-progress/STEP_4E_B1_G3_VALIDATION.md
12. project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
13. project2-progress/STEP_4E_B1_G2_VALIDATION.md
14. project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
15. project2-progress/STEP_4E_B1_G1_VALIDATION.md
16. project2-progress/STEP_4E_B0_MANUAL_MAP.md
17. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
18. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
19. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
20. project2-progress/PROGRESS_LOG.md
21. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
22. project2-progress/STEP_4D_SYNC_MANIFEST.md
23. project2-progress/DEFERRED_PLANS.md
24. PROJECT2_CSS_MAINTENANCE_POLICY.md
```

The current Cart manual records supersede earlier ZIP/full-file replacement instructions and the failed B2-A1 deletion-first plan.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / B2-R2 design active. |
| `project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md` | Maps the 15 interacting Cart CSS layers and defines replacement-first strategy. | Complete. |
| `project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md` | Exact restored-file metrics and byte comparison. | Passed exactly. |
| `project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md` | Evidence of correct deletion, visual failure, exact rollback and revised CSS rule. | Closed by exact rollback. |
| `project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md` | Original deletion-only instruction. | Failed / superseded. |
| `project2-progress/STEP_4E_B1_H_VALIDATION.md` | Exact functions.php, Cart and SAFE5 validation. | Passed. |
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

A page becomes `Completed 1:1` only after current-file implementation, desktop validation, mobile validation, functional regression and backend-editability validation all pass.

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
Step 4E-B2-A1 deletion：Executed exactly but rejected after browser collapse
B2-A1 user editing error：No
B2-A1 exact range rollback：Passed at browser and file levels
Restored spatial-flow(6).css：Byte-identical to accepted spatial-flow(4).css
Old B2-A2 deletion-first continuation：Withdrawn permanently
Step 4E-B2-R1 CSS dependency re-audit：Complete
Next executable code step：Step 4E-B2-R2 scoped replacement layer first
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
- replacement insertion and legacy deletion must be separate operations
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

### Accepted restored CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(6).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parse errors: 0
Byte-identical to spatial-flow(4).css: Yes
```

### Rejected B2-A1 deletion state

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

## 7. B2-R1 dependency summary

The accepted CSS contains 15 named Cart visual blocks totaling approximately:

```text
3,780 lines
117,124 bytes
456 rule/media braces
37 media-query declarations
```

The page currently depends on cascade interaction across old and later blocks. The next safe operation must insert a complete `body.woocommerce-cart` scoped replacement layer first and validate it before any old selector is removed.

## 8. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or rolled-back Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded
- preserve backend editability and dynamic WooCommerce sources
- prefer precise range replacement over whole-file replacement or indefinite append-only CSS
```