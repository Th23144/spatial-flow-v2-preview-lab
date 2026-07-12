# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
4. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
5. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
6. project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
7. project2-progress/STEP_4E_B2_R3_A_MOBILE_BASELINE_AUDIT.md
8. project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md
9. project2-progress/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.md
10. project2-progress/snippets/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.css
11. project2-progress/STEP_4E_B2_R2_FIX1_VALIDATION.md
12. project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md
13. project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css
14. project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
15. project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
16. project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
17. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
18. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
19. project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
20. project2-progress/STEP_4E_B1_H_VALIDATION.md
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
| `PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md` | Project-wide rule: mobile quality and usability outrank literal replication of weak static mobile compositions. | Active. |
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current staged Cart protocol and exact baselines. | Authoritative / functional regression active. |
| `project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md` | Plain-language native Cart interaction checklist. | Active. |
| `project2-progress/STEP_4E_B2_R3_A_MOBILE_BASELINE_AUDIT.md` | Mobile screenshot audit, overflow result and mobile-quality rule. | Passed. |
| `project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md` | Exact FIX2 file validation and desktop acceptance. | Passed. |
| `project2-progress/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.md` | Desktop-only FIX2 instructions and rollback. | Executed exactly. |
| `project2-progress/STEP_4E_B2_R2_FIX1_VALIDATION.md` | Exact file validation and desktop structure pass. | Passed. |
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

For mobile, `Completed 1:1` means faithful to the V2 design language while remaining production-quality on real phone widths. Literal reproduction of a poor static mobile composition is not required.

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

A later mobile aesthetic re-audit is required for Shop archive and Single Product. Their current status remains unchanged until a concrete defect is found; a discovered defect reopens the page as `Not done`.

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
Step 4E-B2-R3-A mobile baseline audit：Passed
Horizontal overflow：No
Mobile FIX3：Not required
Step 4E-B2-R4 native functional regression：Active
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

## 7. Mobile quality rule

```text
1. preserve native behavior and real dynamic data
2. prevent overflow, clipping, overlap and unusable controls
3. preserve Spatial Flow visual language
4. use professional visual judgment for hierarchy, spacing, density and touch targets
5. follow V2 static mobile layouts only where they are genuinely well designed
6. never fabricate product data or imagery to imitate a static sample
```

## 8. Current functional gate

Use the plain-language checklist in:

```text
project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
```

It covers:

```text
- quantity plus/minus and Update Cart
- remove item and Undo/Restore
- invalid Coupon error path
- valid Coupon apply/remove when available
- Change address and shipping refresh
- Proceed to Checkout and SAFE5 load
- Continue Shopping
- recommendation links
- mobile Menu and Footer accordions
- final overflow/warning safety check
```

No historical Cart CSS cleanup begins until desktop, mobile and native functional validation all pass.

## 9. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or rolled-back Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded
- preserve backend editability and dynamic WooCommerce sources
- prefer precise range replacement over whole-file replacement or indefinite append-only CSS
- apply the mobile design-quality policy to all remaining pages
```