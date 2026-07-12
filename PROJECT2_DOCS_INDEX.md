# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
5. project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md
6. project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css
7. project2-progress/STEP_4E_B2_R2_VISUAL_VALIDATION.md
8. project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
9. project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
10. project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
11. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
12. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
13. project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
14. project2-progress/STEP_4E_B1_H_VALIDATION.md
15. project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
16. project2-progress/STEP_4E_B1_G3_VALIDATION.md
17. project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
18. project2-progress/STEP_4E_B1_G2_VALIDATION.md
19. project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
20. project2-progress/STEP_4E_B1_G1_VALIDATION.md
21. project2-progress/STEP_4E_B0_MANUAL_MAP.md
22. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
23. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
24. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
25. project2-progress/PROGRESS_LOG.md
26. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
27. project2-progress/STEP_4D_SYNC_MANIFEST.md
28. project2-progress/DEFERRED_PLANS.md
29. PROJECT2_CSS_MAINTENANCE_POLICY.md
```

The current Cart manual records supersede earlier ZIP/full-file replacement instructions and the failed B2-A1 deletion-first plan.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / R2 FIX1 active. |
| `project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md` | Exact small correction for Astra width and recommendation specificity. | Instructions issued. |
| `project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css` | Exact FIX1 insertion snippet. | Generated and parsed. |
| `project2-progress/STEP_4E_B2_R2_VISUAL_VALIDATION.md` | Uploaded-file validation, screenshot findings and root-cause analysis. | Desktop failed / correction required. |
| `project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md` | Main Cart-only replacement-layer instructions. | Inserted / visual validation incomplete. |
| `project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css` | Main Cart consolidation range. | Inserted. |
| `project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md` | Maps 15 interacting Cart CSS layers. | Complete. |
| `project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md` | Exact restored-file metrics and byte comparison. | Passed exactly. |
| `project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md` | Evidence of correct deletion, visual failure and exact rollback. | Closed. |
| `project2-progress/STEP_4E_B1_H_VALIDATION.md` | Exact functions.php, Cart and SAFE5 validation. | Passed. |
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
Step 4E-B2-A1 deletion：Rejected and rolled back exactly
Step 4E-B2-R1 CSS dependency re-audit：Complete
Step 4E-B2-R2 consolidation layer：Inserted and structurally valid
Step 4E-B2-R2 desktop visual：Failed / correction required
Step 4E-B2-R2-FIX1：Instructions issued
```

Blocking screenshot findings:

```text
- Cart wrapper remains constrained by Astra ancestor width
- product rows are compressed
- old high-specificity recommendation shell remains dark
- new recommendation text is low contrast on that retained dark shell
```

Current implementation mode:

```text
- no ZIP/full-file replacement
- no blind overwrite
- exact bounded snippets
- no legacy deletion before replacement ownership passes
- revalidation after every operation
- independent rollback
- PHP and CSS never combined in one operation
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

### Current CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(7).css
Size: 800,567 bytes
Lines: 26,829
SHA256: fd1a0a43364070b04818e140572ac5447201d0b58476f234b0d329157c687864
Braces: 4,063 / 4,063
Comments: 399 / 399
CSS parse errors: 0
R2 markers: 1 / 1
Original baseline bytes removed: 0
```

### Expected CSS after FIX1

```text
Size: 804,062 bytes
Lines: 26,925
SHA256: e6e053efad50191dfd147ca72b0cf76888eeae194f156f4b634b02e6186edb86
Braces: 4,076 / 4,076
Comments: 401 / 401
CSS parse errors: 0
```

## 7. Current gate

```text
1. Insert the exact FIX1 snippet immediately before the main B2-R2 END marker.
2. Do not delete or edit old Cart CSS.
3. Upload the edited spatial-flow.css.
4. Supply desktop and mobile Cart screenshots.
5. Confirm native quantity, remove, Coupon, shipping, Checkout and Continue Shopping.
6. Confirm Header, Footer, Shop, Single Product and SAFE5 Checkout are unchanged.
```

No historical Cart CSS cleanup begins until FIX1 and the complete R2 validation pass.

## 8. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or rolled-back Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded
- preserve backend editability and dynamic WooCommerce sources
- prefer precise range replacement over whole-file replacement or indefinite append-only CSS
```