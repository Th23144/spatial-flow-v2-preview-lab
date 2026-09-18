# Shop V2 — Closing Note desktop balance adjustment decision

Date: 2026-09-18

## Runtime observation

The current Closing Note is structurally correct, but on the approved wider production Shop frame the right paragraph/button group reads too close to the center and leaves an optically large empty area on the far right.

## Reference comparison

The static reference uses:
- 1fr / 1fr columns;
- 80px gap;
- right copy padding-top 14px;
- paragraph max-width 48ch.

The production CSS currently matches those reference values.

Therefore this is not a strict-reference defect. It is a controlled visual calibration caused by the user-approved wider production frame.

## Decision

Do not move the whole Closing Note grid and do not change the left editorial copy.

Shift only the right copy group moderately toward the outer edge on desktop.

Preferred implementation direction:
- keep the existing 1fr / 1fr grid and 80px gap;
- keep paragraph max-width 48ch;
- give the right group a bounded desktop-only horizontal offset / alignment;
- reset to normal flow below the desktop breakpoint so mobile/tablet are unaffected.

Target optical movement: approximately 40–60px to the right, not full right alignment.

Status:
VISUAL CALIBRATION APPROVED IN PRINCIPLE / IMPLEMENTATION NOT YET APPLIED.