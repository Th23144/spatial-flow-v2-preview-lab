# Shop V2 — Desktop Closing Note right-shift runtime adjustment 2

Date: 2026-09-18

## Runtime review

User supplied a desktop runtime screenshot after the first 48px right-column inset.

Result:
- the right explanatory copy + CTA did move outward;
- the direction is correct;
- the far-right whitespace is still slightly larger than the left/right optical balance target.

## Adjustment

Increase only the existing large-desktop right-column inset:
- from 48px
- to 80px

This is an additional 32px shift from the current runtime state.

Keep unchanged:
- Closing Note grid 1fr / 1fr;
- 80px column gap;
- left editorial statement;
- paragraph max-width 48ch;
- CTA dimensions;
- <=1100px tablet/mobile behavior.

## Expected result

Large desktop only:
- right text/button group moves moderately farther toward the outer edge;
- remaining right-side whitespace becomes closer to the visual weight of the left side;
- no full right alignment or edge-hugging.

Status: RUNTIME DIRECTION PASS / SECOND OPTICAL CALIBRATION READY.