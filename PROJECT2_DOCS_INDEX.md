# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
5. project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
6. project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
7. project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
8. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
9. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
10. project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
11. project2-progress/STEP_4E_B1_H_VALIDATION.md
12. project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
13. project2-progress/STEP_4E_B1_G3_VALIDATION.md
14. project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
15. project2-progress/STEP_4E_B1_G2_VALIDATION.md
16. project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
17. project2-progress/STEP_4E_B1_G1_VALIDATION.md
18. project2-progress/STEP_4E_B0_MANUAL_MAP.md
19. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
20. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
21. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
22. project2-progress/PROGRESS_LOG.md
23. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
24. project2-progress/STEP_4D_SYNC_MANIFEST.md
25. project2-progress/DEFERRED_PLANS.md
26. PROJECT2_CSS_MAINTENANCE_POLICY.md
```

The current Cart manual records supersede earlier ZIP/full-file replacement instructions and the failed B2-A1 deletion-first plan.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / B2-R2 active. |
| `project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md` | Exact insertion-only instructions, metrics, validation and rollback. | Instructions issued. |
| `project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css` | Exact Cart-only consolidation range to insert before the notice block. | Generated and statically validated. |
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
Step 4E-B2-R2 scoped consolidation layer：Instructions issued / manual insertion pending
```

Current implementation mode:

```text
- no ZIP/full-file replacement
- no blind overwrite
- exact bounded insertion range
- no legacy deletion in B2-R2
- exact anchors and predicted metrics
- revalidation after every operation
- independent rollback by deleting only the inserted block
- PHP and CSS never combined in one operation
- legacy cleanup begins only after replacement ownership passes
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

### B2-R2 exact snippet

```text
Path: project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
Size: 33,457 bytes
Lines: 1,083
SHA256: 42e3135527c5569836841330ae69be7dfe6362c5a55203bdc560864a1634e1b9
Braces: 145 / 145
Comments: 2 / 2
CSS parse errors: 0
Every selector scoped to body.woocommerce-cart: Yes
```

### Expected CSS after B2-R2 insertion

```text
Size: 800,578 bytes
Lines: 26,828
SHA256: 4c66fe5b092ced93b198fafe22af6d70e89ffc6064b6cb52b2d7ead8c30f6328
Braces: 4,063 / 4,063
Comments: 399 / 399
CSS parse errors: 0
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

## 7. B2-R2 gate

```text
1. Insert the exact snippet immediately before the Step 4E Cart Notice Toast marker.
2. Do not remove or edit any old Cart CSS.
3. Upload the edited spatial-flow.css.
4. Supply desktop and mobile Cart screenshots.
5. Confirm quantity, remove/undo, Coupon, shipping, Checkout and Continue Shopping.
6. Confirm Header, Footer, Shop, Single Product and SAFE5 Checkout are unchanged.
```

No historical Cart CSS cleanup begins until all six requirements pass.

## 8. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or rolled-back Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded
- preserve backend editability and dynamic WooCommerce sources
- prefer precise range replacement over whole-file replacement or indefinite append-only CSS
```