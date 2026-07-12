# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
5. project2-progress/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.md
6. project2-progress/snippets/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.css
7. project2-progress/STEP_4E_B2_R2_FIX1_VALIDATION.md
8. project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md
9. project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css
10. project2-progress/STEP_4E_B2_R2_VISUAL_VALIDATION.md
11. project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
12. project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
13. project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
14. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
15. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
16. project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
17. project2-progress/STEP_4E_B1_H_VALIDATION.md
18. project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
19. project2-progress/STEP_4E_B1_G3_VALIDATION.md
20. project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
21. project2-progress/STEP_4E_B1_G2_VALIDATION.md
22. project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
23. project2-progress/STEP_4E_B1_G1_VALIDATION.md
24. project2-progress/STEP_4E_B0_MANUAL_MAP.md
25. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
26. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
27. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
28. project2-progress/PROGRESS_LOG.md
29. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
30. project2-progress/STEP_4D_SYNC_MANIFEST.md
31. project2-progress/DEFERRED_PLANS.md
32. PROJECT2_CSS_MAINTENANCE_POLICY.md
```

The current Cart manual records supersede earlier ZIP/full-file replacement instructions and the failed B2-A1 deletion-first plan.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / FIX2 active. |
| `project2-progress/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.md` | Exact desktop-only detail insertion instructions, metrics, rollback and evidence. | Instructions issued. |
| `project2-progress/snippets/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.css` | Exact bounded desktop-only FIX2 snippet. | Generated and parsed. |
| `project2-progress/STEP_4E_B2_R2_FIX1_VALIDATION.md` | Exact file validation, desktop structure pass and remaining 1:1 gaps. | Passed for narrow purpose. |
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
Step 4E-B2-R2-FIX2 desktop detail insertion：Instructions issued
Mobile and current-baseline functional validation：Pending
```

FIX2 desktop scope:

```text
- title/count vertical rhythm
- product-row proportions, metadata/remove placement and duplicate product-price suppression
- image, quantity and subtotal alignment
- Order Summary heading integration and internal spacing
- Coupon/action-row dimensions
- recommendation square media, typography and price/CTA alignment
```

The fourth recommendation may use WooCommerce's real missing-image placeholder. It must not be replaced with fabricated CSS imagery.

Current implementation mode:

```text
- no ZIP/full-file replacement
- no blind overwrite
- exact bounded snippets
- no legacy deletion before replacement ownership and regression pass
- revalidation after every operation
- independent rollback
- PHP and CSS never combined in one operation
- FIX2 is desktop-only; mobile rules are unchanged
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

### FIX2 snippet

```text
Path: project2-progress/snippets/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.css
Size: 9,328 bytes
Logical lines: 279
SHA256: 359a1012bb1c39a402747a429117068ca9af94b9410ad0e3b61b9cb26d929f6a
Braces: 49 / 49
Comments: 2 / 2
CSS parse errors: 0
```

### Expected CSS after FIX2

```text
Size: 813,392 bytes
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8
Braces: 4,125 / 4,125
Comments: 403 / 403
CSS parse errors: 0
```

## 7. Current gate

```text
1. Copy the exact FIX2 snippet.
2. Insert it immediately before the main B2-R2 END marker, after FIX1.
3. Do not delete or edit old Cart CSS, FIX1 or the main R2 range.
4. Do not modify PHP, JS, templates or mobile rules.
5. Upload the edited spatial-flow.css.
6. Supply one desktop Cart screenshot including heading, product rows, action bar, complete summary and all four recommendations.
7. Confirm no native Cart control disappeared and Header/Footer remained normal.
```

Mobile and full native functional validation begin only after desktop FIX2 acceptance.

No historical Cart CSS cleanup begins until desktop, mobile and native functional validation all pass.

## 8. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or rolled-back Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded
- preserve backend editability and dynamic WooCommerce sources
- prefer precise range replacement over whole-file replacement or indefinite append-only CSS
```