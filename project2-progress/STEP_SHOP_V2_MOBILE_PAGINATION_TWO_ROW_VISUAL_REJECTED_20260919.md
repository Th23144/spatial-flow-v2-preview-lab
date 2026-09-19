# Shop V2 — Mobile Pagination Two-Row Hotfix rejected visually

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime evidence

The user supplied a fresh phone screenshot after the two-row mobile pagination hotfix.

## User judgment

The two-row layout is visually rejected:

`?,好丑`

## What is wrong

The hotfix solved the literal overlap, but the composition became weaker:
- Previous / Next form a detached top row;
- numeric pages form a separate lower row;
- the two rows read as unrelated controls;
- vertical whitespace increased substantially;
- pagination now occupies too much height relative to the product grid and Closing Note;
- the editorial rhythm between product grid → pagination → Closing Note is worse than before.

## Decision

Reject the two-row pagination composition as a final solution.

Do not touch:
- accepted Mobile Closing Note Centered V3;
- desktop pagination;
- desktop Closing Note V4;
- product grid;
- Header / Footer / filter-sort.

## New direction

For phone only, study a compact single-row pager:
- Previous at left;
- Next at right;
- center shows only the current page and immediate neighbor pages instead of all 1–8 pages;
- preserve WooCommerce pagination links and current-page state;
- avoid oversized vertical spacing;
- keep the current circle styling.

Implementation should be CSS-only if robustly possible; otherwise use the smallest bounded template-level change after visual approval.

Status:
TWO-ROW MOBILE PAGINATION REJECTED / COMPACT SINGLE-ROW DIRECTION REOPENED.
