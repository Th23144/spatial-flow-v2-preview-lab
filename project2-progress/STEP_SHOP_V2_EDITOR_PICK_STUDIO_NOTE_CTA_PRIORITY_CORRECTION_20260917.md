# Shop V2 — Editor's Pick Studio Note CTA priority correction

Date: 2026-09-17

## Trigger

During runtime review, the user pointed out that the static reference includes a secondary ghost CTA beside View Piece: `Read the studio note`, and questioned why it had not been treated as a first-priority strict-reference delta.

## Source verification

In `preview/spatial-flow-shop-v1.html`, the Editor's Pick footer contains:
- price
- `View piece →`
- `Read the studio note`

The static reference links the Studio Note CTA to `spatial-flow-journal-v1.html`. Therefore its reference role is an editorial bridge from the featured product into the Journal, not a commerce/cart action.

## Correction

The earlier live implementation treated the Studio Note action as conditional on a configured URL, and prior documentation accepted hiding it when the URL was empty. Under the current strict 1:1 Shop pass, that interpretation is too permissive.

The missing secondary CTA is both:
1. a functional reference component; and
2. an important visual balancing element in the Editor's Pick footer row.

It should be addressed before further experimental whitespace geometry.

## Revised implementation direction

1. Return to the previously better-balanced non-bottom-anchored right-column composition.
2. Keep horizontal geometry unchanged: 5fr / 7fr, 80px gap, no left shift.
3. Do not require longer product short descriptions.
4. Restore a functional Studio Note ghost CTA.
5. Preferred URL ownership order:
   - product-specific Studio Note URL when available;
   - configured Shop/global Studio Note URL;
   - Journal homepage fallback, matching the static reference's editorial-bridge role.
6. Keep the footer in normal flow with controlled spacing rather than pinning it to the image bottom.
7. Re-run screenshot validation before any further micro-spacing changes.

## Status

PLAN CORRECTED — NO CODE CHANGE YET.
