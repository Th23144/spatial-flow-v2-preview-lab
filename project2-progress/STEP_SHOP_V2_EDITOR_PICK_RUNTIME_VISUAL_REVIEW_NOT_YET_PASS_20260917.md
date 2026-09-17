# Shop V2 — Editor’s Pick Runtime Visual Review — NOT YET PASS

Date: 2026-09-17

## Context
This review follows the validated Editor’s Pick CSS replacement that restored the reference 5fr / 7fr layout, 80px gap, stretch alignment, full-width copy main area, 11px editorial kicker, and compact footer spacing.

## Runtime screenshot result
The latest desktop screenshot confirms meaningful improvement:

- right column is no longer artificially shifted left by a 640px main-content cap;
- right-side title uses the available 7fr column correctly;
- kicker is visibly lighter and closer to the static editorial reference;
- short description and placement content form a more coherent editorial cluster;
- price / View Piece footer now follows the content instead of being forced to the absolute bottom;
- previous placeholder-like Material / Placement strings are no longer visible;
- selected-piece fallback kicker is visible and no longer leaves an empty slot above the title.

## Remaining visual delta
The block is improved but not yet accepted for strict visual closure.

1. The right column still leaves too much unused lower-right space because the copy cluster is vertically centered while the media remains a tall 4:5 frame.
2. The footer sits too high relative to the full height of the image; the lower-right half feels unfinished even though the content itself is compact.
3. The correct solution must not move the right column horizontally again and must not force longer product descriptions.
4. The next pass should preserve the reference 5fr / 7fr / 80px geometry, keep short descriptions valid, and solve the vertical composition inside the right column only.

## Direction for next pass
- Keep the current horizontal geometry unchanged.
- Keep kicker typography unless a smaller optical adjustment is required.
- Rebalance vertical composition so the main editorial content remains near the upper-middle while the footer occupies a stronger lower anchor.
- Do not require additional product copy merely to fill space.
- Do not change product data ownership or WooCommerce logic.

## Status
**RUNTIME VISUAL REVIEW: IMPROVED / NOT YET PASS**
