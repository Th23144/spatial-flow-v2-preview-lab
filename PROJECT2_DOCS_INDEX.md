# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
5. project2-progress/STEP_4E_B1_H_VALIDATION.md
6. project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
7. project2-progress/STEP_4E_B1_G3_VALIDATION.md
8. project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
9. project2-progress/STEP_4E_B1_G2_VALIDATION.md
10. project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
11. project2-progress/STEP_4E_B1_G1_VALIDATION.md
12. project2-progress/STEP_4E_B0_MANUAL_MAP.md
13. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
14. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
15. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
16. project2-progress/PROGRESS_LOG.md
17. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
18. project2-progress/STEP_4D_SYNC_MANIFEST.md
19. project2-progress/DEFERRED_PLANS.md
20. PROJECT2_CSS_MAINTENANCE_POLICY.md
```

The current Cart manual records supersede every earlier instruction to apply a generated ZIP or overwrite complete `functions.php` / `spatial-flow.css` files.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / B1-H SAFE5 gate active. |
| `project2-progress/STEP_4E_B1_H_VALIDATION.md` | Exact functions.php validation, Cart no-visible-regression record, and remaining SAFE5 gate. | Exact file passed / SAFE5 pending. |
| `project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md` | Exact PHP operation removing fabricated Cart-only context while preserving SAFE5 Checkout fallback. | Implemented / partially validated. |
| `project2-progress/STEP_4E_B1_G3_VALIDATION.md` | Exact CSS validation plus user-confirmed desktop/mobile acceptance. | Passed. |
| `project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md` | Exact in-place CSS replacement for the desktop four-card grid. | Completed. |
| `project2-progress/STEP_4E_B1_G2_VALIDATION.md` | Exact functions.php and browser validation for four real recommendation products. | Passed. |
| `project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md` | Four-line PHP operation changing recommendation output from three to four. | Completed. |
| `project2-progress/STEP_4E_B1_G1_VALIDATION.md` | Dead sample fallback cleanup validation. | Passed. |
| `project2-progress/STEP_4E_B0_MANUAL_MAP.md` | Exact staged PHP/CSS execution map. | Complete. |
| `project2-progress/STEP_4E_CART_REWORK_AUDIT.md` | Cart static/current-state audit and mismatch matrix. | Audit baseline. |
| `project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md` | Cart hook, dynamic-source, and backend-editability audit. | Passed. |
| `project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md` | Withdrawn whole-file candidate record. | Historical / Do not apply. |
| `project2-progress/PROGRESS_LOG.md` | Historical long-form progress log. | Not the current execution source. |
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
Whole-file Step 4E-B candidate：Withdrawn / Do not apply
Step 4E-B0 manual map：Complete
Step 4E-B1-A through B1-F：Passed
Step 4E-B1-G1 dead sample cleanup：Passed
Step 4E-B1-G2 four real recommendations：Passed
Step 4E-B1-G3 desktop four-column layout：Passed exact file validation and user-confirmed browser validation
Step 4E-B1-H Cart-only product-context fallback safety：Exact PHP validation passed
Cart page：User confirmed no visible change / no visible regression
SAFE5 Checkout product-row regression：Pending explicit confirmation
Next CSS deletion step：Blocked until SAFE5 confirmation
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
```

The Cart remains officially `Not done` until the complete desktop/mobile, functional, and backend-editability acceptance passes.

## 6. Current code baselines

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200

assets/css/spatial-flow.css
Uploaded name: spatial-flow(4).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parse errors: 0

assets/js/spatial-flow.js
Size: 70,828 bytes
Lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
```

## 7. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted or reopened Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded
- preserve backend editability and dynamic WooCommerce sources
- prefer precise range replacement over whole-file replacement or append-only CSS
```
