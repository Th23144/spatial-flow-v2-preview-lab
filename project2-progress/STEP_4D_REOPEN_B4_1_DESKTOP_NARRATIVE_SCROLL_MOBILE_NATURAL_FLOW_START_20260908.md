# Step 4D Reopen B4.1 — Desktop Narrative Scroll / Mobile Natural Flow — 2026-09-08

## Decision
Section 02 must not impose a hidden authoring character limit. Long product narratives are valid backend content and must not distort the editorial composition.

## Current root cause
The current Section 02 grid uses `align-items: stretch`, while the left media uses `aspect-ratio: 4 / 5`. With long right-column narrative content, the grid row grows and the media item stretches with it, producing an oversized image and breaking the intended composition.

## Locked UX
- Desktop wide layout: only `.sf-product-v2-reading__body` becomes vertically scrollable when content exceeds the reading window.
- `Lead`, `Context line`, and `Reading / Pairing / Reads` remain outside the scroll area.
- Short narratives remain visually unchanged and show no unnecessary scroll behavior.
- Left image preserves its independent 4:5 editorial ratio and does not stretch to narrative height.
- At the existing `max-width: 1100px` single-column breakpoint, internal narrative scrolling is removed and the text returns to natural document flow.
- No JavaScript wheel interception.
- No character limit and no content truncation.

## Implementation scope
- `assets/css/spatial-flow.css`: B4 canonical block only.
- `functions.php`: cache-busting child version only (`2.7.32` -> `2.7.33`).
- `woocommerce/single-product.php`: no change.

## Validation gate
After returned source audit, test with the user's full long narrative on desktop, then 390px mobile. Do not shorten the narrative for the test.
