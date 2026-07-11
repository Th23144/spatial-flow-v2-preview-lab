# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-11
Repository: `Th23144/spatial-flow-v2-preview-lab`

This file maps the current Project 2 documentation and identifies the authoritative sources for page-level status, active work, handoff, cleanup, and deferred plans.

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
5. project2-progress/STEP_4E_B0_MANUAL_MAP.md
6. project2-progress/PROGRESS_LOG.md
7. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
8. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
9. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
10. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
11. project2-progress/STEP_4C_REWORK1_B2_VALIDATION.md
12. project2-progress/STEP_4C_REWORK1_B3_FIX1_PAGINATION.md
13. project2-progress/STEP_4D_SYNC_MANIFEST.md
14. project2-progress/STEP_4D_CLEAN1_AUDIT.md
15. project2-progress/DEFERRED_PLANS.md
16. PROJECT2_CSS_MAINTENANCE_POLICY.md
17. PROJECT2_LOCAL_SYNC_MANIFEST.md
18. PROJECT2_NEXT_WINDOW_PROMPT.md
19. PROJECT2_CURRENT_STATE.md
```

Important current execution sources:

```text
project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
project2-progress/STEP_4E_B0_MANUAL_MAP.md
```

They supersede every earlier instruction to apply the generated Step 4E-B ZIP or overwrite complete `functions.php` / `spatial-flow.css` files.

## 2. Current authoritative status files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Authoritative page-by-page status map using only `Completed 1:1` or `Not done`. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Manual, staged, exact-range Cart execution protocol. | Current / authoritative. |
| `project2-progress/STEP_4E_B0_MANUAL_MAP.md` | Exact PHP/CSS anchors, staged boundaries, deletion batches, rollback model, and execution order. | Current / B0 complete. |
| `project2-progress/PROGRESS_LOG.md` | Live active-step log. | Current / B1-A next. |
| `project2-progress/STEP_4E_CART_REWORK_AUDIT.md` | Cart static/current-state audit, screenshots, CSS/JS baseline, and mismatch matrix. | Current / audit baseline. |
| `project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md` | Cart functions.php ownership, hooks, backend-editability, hardcoded-data findings, and implementation constraints. | Current / Step 4E-A3 passed. |
| `project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md` | Record of the withdrawn whole-file candidate and why it must not be applied. | Historical / Do not apply. |
| `project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md` | Shop full desktop/mobile rework record. | Completed. |
| `project2-progress/STEP_4C_REWORK1_B2_VALIDATION.md` | Shop controlled CSS insertion and browser validation record. | Completed after pagination follow-up. |
| `project2-progress/STEP_4C_REWORK1_B3_FIX1_PAGINATION.md` | Shop pagination regression root cause and fix. | Completed. |
| `project2-progress/STEP_4D_SYNC_MANIFEST.md` | Single Product handoff and server-sync file set. | Current. |
| `project2-progress/STEP_4D_CLEAN1_AUDIT.md` | Accepted Single Product CSS cleanup. | Current. |
| `project2-progress/DEFERRED_PLANS.md` | Deferred modules, cleanup, and backlog. | Current. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | Precise replacement, non-append-only, and no-blind-whole-file-replacement policy. | Current and active. |

## 3. Page-status rule

Only two page statuses are valid:

```text
Completed 1:1
Not done
```

A page is `Completed 1:1` only after the real WordPress/WooCommerce implementation has completed:

```text
- current-file exact replacement against the V2 reference
- desktop browser validation
- mobile browser validation
- functional regression
- backend-editability validation
```

Anything less is:

```text
Not done
```

Historical implementation, functional fixes, accepted static HTML, or partial redesign must not be represented as page completion.

## 4. Current page-level summary

### Completed 1:1

```text
- Main-site Header
- Main-site Footer
- Shop archive, including pagination follow-up fix
- Single Product, including backend mapping, The Piece, full regression, and CSS cleanup
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

Historical work on these pages may still be useful, but their official status remains `Not done` until full current acceptance passes.

## 5. Current active step

```text
Step 4E-A · Cart desktop + mobile 1:1 current-state audit：Complete
Whole-file Step 4E-B candidate：Withdrawn / Do not apply
Step 4E-B0 · Manual exact-range execution map：Complete
Step 4E-B1-A · PHP settings only：Next
```

Current implementation mode:

```text
- no ZIP/full-file replacement
- no blind overwrite of functions.php or spatial-flow.css
- small named substeps
- exact anchors and replacement ranges
- expected size/line delta before editing
- revalidation after every operation
- independent rollback for every substep
- PHP and CSS never combined into one operation
```

The Cart remains officially:

```text
Not done
```

until controlled implementation and full desktop/mobile, functional, and backend-editability acceptance are completed.

## 6. Historical root documents

The following files remain useful for background but contain stale next-step or page-status lines:

```text
PROJECT2_CURRENT_STATE.md
PROJECT2_NEXT_WINDOW_PROMPT.md
PROJECT2_LOCAL_SYNC_MANIFEST.md
```

Rules:

```text
- Do not delete them.
- Do not use their old completed/passed/next-step lines as authoritative.
- Check the page-status matrix and current Cart manual execution records first.
- Current uploaded local files remain the only code baseline.
```

## 7. Maintenance rule

```text
- Update project2-progress/PROGRESS_LOG.md after every accepted or reopened step.
- Update project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1.
- Update project2-progress/DEFERRED_PLANS.md when work is deferred or pulled into active scope.
- Update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded.
- Preserve backend editability and dynamic WordPress/WooCommerce sources on every page.
- Prefer precise range replacement over whole-file replacement or append-only CSS.
- Never make a large downloadable replacement package the default method unless the user explicitly approves it.
```
