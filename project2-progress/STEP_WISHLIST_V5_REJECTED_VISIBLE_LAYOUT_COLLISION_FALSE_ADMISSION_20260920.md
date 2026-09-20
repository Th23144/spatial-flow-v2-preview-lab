# Wishlist V5 rejected — visible layout collision and false admission

Date: 2026-09-20
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User evidence

The user supplied a runtime screenshot of Wishlist V5 and rejected it.

Visible failures in the screenshot:
- product blocks overlap each other vertically;
- the second saved object text/action region collides with the large image from another object;
- the lower-left product and Empty State occupy the same visual space;
- the decision-copy band intersects the saved-object board;
- text lines and action controls cross unrelated regions;
- the page does not preserve basic spatial separation, reading order, or clean section boundaries.

## Critical correction

The previous claim that V5 had passed a static admission gate was incorrect.

A candidate with these visible collisions must never be described as visually validated or ready for user review.

The admission gate was not meaningfully enforced.

## Process rule added

For future visual prototypes:
- do not declare PASS from source/code inspection alone;
- perform an actual rendered desktop visual inspection before showing;
- verify no overlap, clipping, collision, unreadable text, broken section boundaries, or hidden controls;
- only after a clean rendered frame may aesthetic judgment begin;
- do not present implementation mechanics or technical cleverness as a substitute for visual quality.

Status:
WISHLIST V5 = REJECTED.
STATIC ADMISSION CLAIM = WITHDRAWN.
NEXT PROTOTYPE MUST PASS REAL RENDERED VISUAL INSPECTION BEFORE USER REVIEW.
