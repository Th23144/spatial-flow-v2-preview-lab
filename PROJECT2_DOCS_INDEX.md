# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
5. project2-progress/STEP_4E_B2_R2_FIX1_VALIDATION.md
6. project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md
7. project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css
8. project2-progress/STEP_4E_B2_R2_VISUAL_VALIDATION.md
9. project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
10. project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
11. project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
12. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
13. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
14. project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
15. project2-progress/STEP_4E_B1_H_VALIDATION.md
16. project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
17. project2-progress/STEP_4E_B1_G3_VALIDATION.md
18. project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
19. project2-progress/STEP_4E_B1_G2_VALIDATION.md
20. project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
21. project2-progress/STEP_4E_B1_G1_VALIDATION.md
22. project2-progress/STEP_4E_B0_MANUAL_MAP.md
23. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
24. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
25. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
26. project2-progress/PROGRESS_LOG.md
27. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
28. project2-progress/STEP_4D_SYNC_MANIFEST.md
29. project2-progress/DEFERRED_PLANS.md
30. PROJECT2_CSS_MAINTENANCE_POLICY.md
```

The current Cart manual records supersede earlier ZIP/full-file replacement instructions and the failed B2-A1 deletion-first plan.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / FIX2 next. |
| `project2-progress/STEP_4E_B2_R2_FIX1_VALIDATION.md` | Exact file validation, desktop structure pass and remaining 1:1 gaps. | Current. |
| `project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md` | Exact small correction for Astra width and recommendation specificity. | Executed exactly. |
| `project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css` | Exact FIX1 insertion snippet. | Inserted. |
| `project2-progress/STEP_4E_B2_R2_VISUAL_VALIDATION.md` | Pre-FIX1 screenshot findings and root-cause analysis. | Historical failure record. |
| `project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md` | Main Cart-only replacement-layer instructions. | Inserted / detail validation incomplete. |
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
Step 4E-B2-R2-FIX1 exact file：Passed
Step 4E-B2-R2-FIX1 desktop structural objective：Passed
Desktop 1:1 detail matching：Pending
Mobile and current-baseline functional validation：Pending
Next：Step 4E-B2-R2-FIX2 desktop 1:1 detail pass
```

Remaining desktop gaps:

```text
- title/count and section vertical rhythm
- product-row proportions, metadata/remove placement and alignment
- Order Summary heading integration and internal spacing
- Coupon/action-row exact dimensions
- recommendation media, typography and CTA alignment
```

The fourth recommendation currently uses WooCommerce's real missing-image placeholder. It must not be replaced with fabricated CSS content.

Current implementation mode:

```text
- no ZIP/full-file replacement
- no blind overwrite
- exact bounded snippets
- no legacy deletion before replacement ownership and regression pass
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

### Current exact CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(8).css
Size: 804,062 bytes
Logical lines: 26,925
SHA256: e6e053efad50191dfd147ca72b0cf76888eeae194f156f4b634b02e6186edb86
Braces: 4,076 / 4,076
Comments: 401 / 401
CSS parse errors: 0
R2 markers: 1 / 1
FIX1 markers: 1 / 1
```

This matches the exact expected FIX1 result.

## 7. Current gate

```text
1. Prepare one bounded desktop-only FIX2 range against spatial-flow(8).css.
2. Do not delete or edit old Cart CSS.
3. Do not modify PHP, JS, templates or mobile rules in the same operation.
4. Validate exact file metrics after insertion.
5. Supply a desktop Cart screenshot including recommendations.
6. Begin mobile and native functional validation only after desktop detail acceptance.
```

No historical Cart CSS cleanup begins until desktop, mobile and native functional validation all pass.

## 8. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or rolled-back Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded
- preserve backend editability and dynamic WooCommerce sources
- prefer precise range replacement over whole-file replacement or indefinite append-only CSS
```
