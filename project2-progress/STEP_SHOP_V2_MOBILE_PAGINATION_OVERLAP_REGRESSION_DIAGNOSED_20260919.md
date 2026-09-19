# Shop V2 — Mobile pagination overlap regression diagnosed after Closing Note V3

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime evidence

User supplied fresh phone screenshots after Mobile Closing Note Centered V3 production CSS.

Closing Note V3 itself visually matches the accepted direction:
- centered kicker / intro / emphasis / body;
- centered divider / side text / CTA;
- widened side text uses fewer, longer lines;
- no visible horizontal overflow in the Closing Note itself.

However, the screenshots expose a separate mobile pagination regression:
- page 1: `NEXT PAGE →` collides with the rightmost numeric page item;
- page 2: `← PREVIOUS` and `NEXT PAGE →` share the same row with the numeric list and make the entire pagination cramped/overlapping.

## Root cause

Current Shop pagination architecture keeps Previous / Next list items absolutely positioned at the left/right edges of the same 30px-high row while the numeric page items remain centered in normal flex flow.

Desktop has enough width for this.
Phone width does not.

Current mobile rules shrink numeric items to 30px and labels to 9px, but still force all controls into one visual row. With eight numeric/ellipsis slots plus Previous/Next, a narrow phone cannot fit the row without collision.

## Corrective direction

Do not alter WooCommerce pagination data or PHP.

Phone only:
- preserve Previous / Next at the top left/right;
- move the numeric page sequence to a second centered row below;
- keep existing 30px numeric circles and current editorial styling;
- increase the mobile `ul.page-numbers` height and add top padding so the two rows never overlap.

Desktop pagination remains unchanged.
Closing Note V3 remains unchanged.

## Status

CLOSING NOTE MOBILE V3: RUNTIME VISUAL PASS
MOBILE PAGINATION: REGRESSION REOPENED / SOURCE FIX READY
