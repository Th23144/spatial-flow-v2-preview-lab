# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
5. project2-progress/STEP_4E_B2_R3_A_MOBILE_BASELINE_AUDIT.md
6. project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md
7. project2-progress/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.md
8. project2-progress/snippets/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.css
9. project2-progress/STEP_4E_B2_R2_FIX1_VALIDATION.md
10. project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md
11. project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css
12. project2-progress/STEP_4E_B2_R2_VISUAL_VALIDATION.md
13. project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
14. project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
15. project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
16. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
17. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
18. project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
19. project2-progress/STEP_4E_B1_H_VALIDATION.md
20. project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
21. project2-progress/STEP_4E_B1_G3_VALIDATION.md
22. project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
23. project2-progress/STEP_4E_B1_G2_VALIDATION.md
24. project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
25. project2-progress/STEP_4E_B1_G1_VALIDATION.md
26. project2-progress/STEP_4E_B0_MANUAL_MAP.md
27. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
28. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
29. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
30. project2-progress/PROGRESS_LOG.md
31. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
32. project2-progress/STEP_4D_SYNC_MANIFEST.md
33. project2-progress/DEFERRED_PLANS.md
34. PROJECT2_CSS_MAINTENANCE_POLICY.md
```

The current Cart manual records supersede earlier ZIP/full-file replacement instructions and the failed B2-A1 deletion-first plan.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / mobile audit active. |
| `project2-progress/STEP_4E_B2_R3_A_MOBILE_BASELINE_AUDIT.md` | No-code mobile screenshot audit gate. | Active. |
| `project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md` | Exact FIX2 file validation and desktop acceptance. | Passed. |
| `project2-progress/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.md` | Desktop-only FIX2 instructions and rollback. | Executed exactly. |
| `project2-progress/snippets/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.css` | Exact bounded desktop-only FIX2 snippet. | Inserted. |
| `project2-progress/STEP_4E_B2_R2_FIX1_VALIDATION.md` | Exact file validation and desktop structure pass. | Passed. |
| `project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md` | Astra width and recommendation specificity correction. | Executed exactly. |
| `project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css` | Exact FIX1 insertion snippet. | Inserted. |
| `project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md` | Main Cart-only consolidation layer. | Inserted. |
| `project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md` | Maps interacting Cart CSS layers. | Complete. |
| `project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md` | Exact restored-file metrics and byte comparison. | Passed exactly. |
| `project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md` | Correct deletion, visual failure and exact rollback. | Closed. |
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
Step 4E-B2-R2-FIX1：Passed exactly for desktop structure
Step 4E-B2-R2-FIX2：Passed exactly for desktop detail
Step 4E-B2-R3-A mobile baseline audit：Active
Native functional validation：Pending
```

Desktop FIX2 acceptance includes:

```text
- centered stable Cart frame
- improved product-row proportions
- duplicate desktop product-price suppression
- stable Coupon action bar
- integrated Order Summary heading
- aligned four-product recommendation row
- intact Header and Footer
```

Dynamic WooCommerce titles, prices, shipping, totals and the real missing-image placeholder are accepted live-data differences and must not be fabricated.

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
Uploaded name: spatial-flow(9).css
Size: 813,392 bytes
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8
Braces: 4,125 / 4,125
Comments: 403 / 403
CSS parse errors: 0
R2 markers: 1 / 1
FIX1 markers: 1 / 1
FIX2 markers: 1 / 1
```

## 7. Current gate

```text
1. Make no file changes.
2. Use the exact spatial-flow(9).css baseline.
3. Open Cart at 430 CSS px or narrower and hard refresh.
4. Supply one full-page mobile screenshot including Header, Cart rows, action bar, complete summary, recommendations and Footer.
5. Report horizontal overflow yes/no.
6. Report missing or unusable native controls yes/no.
```

After the mobile audit:

```text
- acceptable mobile result → full native functional regression
- bounded mobile defects → one small mobile-only correction range
- severe mobile defect → independently removable mobile correction layer
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