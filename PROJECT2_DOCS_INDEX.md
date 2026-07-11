# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

This file maps the current Project 2 documentation and identifies the authoritative sources for page-level status, active work, handoff, cleanup, and deferred plans.

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
4. project2-progress/PROGRESS_LOG.md
5. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
6. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
7. project2-progress/STEP_4C_REWORK1_B2_VALIDATION.md
8. project2-progress/STEP_4C_REWORK1_B3_FIX1_PAGINATION.md
9. project2-progress/STEP_4D_SYNC_MANIFEST.md
10. project2-progress/STEP_4D_CLEAN1_AUDIT.md
11. project2-progress/DEFERRED_PLANS.md
12. PROJECT2_CSS_MAINTENANCE_POLICY.md
13. PROJECT2_LOCAL_SYNC_MANIFEST.md
14. PROJECT2_NEXT_WINDOW_PROMPT.md
15. PROJECT2_CURRENT_STATE.md
```

## 2. Current authoritative status files

| File | Role | Status |
|---|---|---|
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Authoritative page-by-page status map. Separates current-pass 1:1 completion from historical implementation and static-reference-only pages. | Current. |
| `project2-progress/PROGRESS_LOG.md` | Live active-step log. | Current. |
| `project2-progress/STEP_4E_CART_REWORK_AUDIT.md` | Current Cart audit scope and required inputs. | Current / active. |
| `project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md` | Shop full desktop/mobile rework record. | Completed. |
| `project2-progress/STEP_4C_REWORK1_B2_VALIDATION.md` | Shop controlled CSS insertion and browser validation record. | Completed after pagination follow-up. |
| `project2-progress/STEP_4C_REWORK1_B3_FIX1_PAGINATION.md` | Shop pagination regression root cause and fix. | Completed. |
| `project2-progress/STEP_4D_SYNC_MANIFEST.md` | Single Product handoff and server-sync file set. | Current. |
| `project2-progress/STEP_4D_CLEAN1_AUDIT.md` | Accepted Single Product CSS cleanup. | Current. |
| `project2-progress/DEFERRED_PLANS.md` | Deferred modules, cleanup, and backlog. | Current. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | Precise-replacement / non-append-only CSS policy. | Current and active. |

## 3. Important status correction

Older documentation sometimes used “completed” to mean one of several different things:

```text
- static visual reference completed
- historical WordPress implementation completed
- functional regression passed
- current-pass exact 1:1 rework passed
```

These are not equivalent.

The authoritative page matrix now uses:

```text
A. Current-pass 1:1 Passed
B. Historical implementation completed / current-pass revalidation still needed
C. Static reference only / implementation not active or not confirmed
```

See:

```text
project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
```

## 4. Current page-level summary

### Current-pass 1:1 Passed

```text
- Main-site Header
- Main-site Footer
- Shop archive, including pagination follow-up fix
- Single Product, including backend mapping, The Piece, full regression, and CSS cleanup
```

### Historically completed or functional, but current-pass revalidation still needed

```text
- Home
- Cart
- SAFE5 Checkout
- Thank You
- Wishlist
- Track Order
- Search
- About Us
- Services
- FAQ / Help
- Contact/forms
- Utility/policy pages
- Blog home / issue / article live integration
```

### Static reference only / intentionally inactive / not confirmed

```text
- Account: intentionally inactive because the current model uses guest checkout and no full registration/login rollout
- 404: static reference exists; real-page current-pass status not confirmed
```

## 5. Current active step

```text
Step 4E-A · Cart desktop + mobile 1:1 current-state audit：In progress
```

This is an audit step only. It does not mean Cart production files have already been changed in the current pass.

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
- Do not use their old “next step” or old Shop status without checking the page matrix and progress log.
- Current uploaded local files remain the only code baseline.
```

## 7. Maintenance rule

```text
- Update project2-progress/PROGRESS_LOG.md after every accepted or reopened step.
- Update project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md whenever a page changes status category.
- Update project2-progress/DEFERRED_PLANS.md when work is deferred or pulled into active scope.
- Update PROJECT2_DOCS_INDEX.md when a major status file is added or superseded.
- Preserve backend editability and dynamic WordPress/WooCommerce sources on every page.
- Prefer precise range replacement over whole-file replacement or append-only CSS.
```
