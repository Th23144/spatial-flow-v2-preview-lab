# Step 4F · S3-R3C · Restore Address Edit and Fix Shipping Text Gap

Date: 2026-07-31

## Scope

Only `preview/spatial-flow-checkout-context-v1.css` was changed.

## Correction

The previous refinement incorrectly moved the already accepted `Edit address →` control away from the bottom of the address column and did not reliably reduce the Shipping Method text spacing.

This correction:

- restores `Edit address →` to the bottom of the left address column;
- restores its top divider;
- leaves the HTML and all other Checkout regions unchanged;
- targets only the Step 03 Shipping Method block;
- sets explicit spacing for:
  - `Shipping Method` label → method name;
  - method name → timing / price;
- uses a dedicated flex column with explicit `gap`, `margin: 0`, and `line-height` so source whitespace cannot recreate the larger gaps.

## Exclusions

No changes were made to:

- Step 02;
- address or contact content;
- Order Summary;
- payment method area;
- mobile structure;
- live WordPress / WooCommerce files.

Checkout remains `Not done` and Phase S4 remains paused pending visual acceptance.
