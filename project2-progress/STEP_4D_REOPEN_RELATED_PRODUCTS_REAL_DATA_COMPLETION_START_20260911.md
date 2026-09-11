# Project 2 · Step 4D-REOPEN · Related Products Real Data Completion Start

Date: 2026-09-11

## Context

The user accepted the latest Related Products geometry correction as visually improved but the block is still not strict 1:1 because the real WooCommerce products currently do not show the reference-style metadata rows.

The current v2.7.43 frontend structure already supports real dynamic output for:

- WooCommerce product image
- WooCommerce product title
- WooCommerce product permalink
- WooCommerce product price
- WooCommerce SKU
- `_sf_piece_edition`
- `_sf_placement`

No reference/sample SKU, edition or placement copy may be fabricated solely to imitate the static reference.

## User instruction

User: `开始`

Authorized next action:

1. verify the exact current backend ownership / field labels for SKU, Edition and Placement;
2. give the user the exact per-product data-entry path;
3. populate only truthful product data;
4. re-check the Related Products runtime output after real values exist;
5. verify hover `View piece →` separately;
6. keep Gift CTA / Closing Editor's Note paused.

## Current status

```text
Related Products geometry/title correction: SOURCE PASS
Desktop geometry/title runtime: PASS
Mobile structure shell: PASS
SKU / Edition runtime rows: PENDING REAL DATA
Placement Note runtime row: PENDING REAL DATA
Hover View piece: PENDING
Related Products overall strict 1:1: NOT YET CLOSED
```

## Next action

Inspect repository source for the exact admin registration/save ownership of `_sf_piece_edition` and `_sf_placement`, then provide the user with the precise backend entry workflow before any further source modification.
