# Step 4F · Single Product · Section 02 Mobile Disclosure Visual Pass — 2026-09-08

## Scope
Validation of the approved Section 02 long-form mobile reading treatment after version 2.7.36 implementation.

## Evidence reviewed
User supplied current frontend screenshots covering:
- 390px mobile collapsed state
- 390px mobile expanded state
- desktop Section 02 state

## Result
PASS for the agreed disclosure behavior.

### Mobile collapsed state
- Long-form text begins from the article start rather than from a mid-scroll position.
- Bottom text fades naturally into the disclosure area.
- `↓ CONTINUE READING` is centered in the fade region and remains legible.
- No white framed-card treatment is introduced.

### Mobile expanded state
- Full article expands in normal document flow.
- `COLLAPSE ↑` appears after the actual article body.
- The disclosure control no longer uses the rejected boxed/underline treatment.
- No collision with the article body was visible in the supplied screenshot.

### Desktop regression check
- Desktop keeps the previously accepted Section 02 composition.
- Long-form article remains in the desktop internal reading area with its existing scrollbar.
- Mobile disclosure UI does not leak into desktop state.

## Non-blocking observation
The global floating back-to-top control occupies the lower-right corner and can sit near the mobile disclosure/collapse region. In the supplied screenshots it does not cover the disclosure text, so this is not treated as a blocker for this step. Revisit only if the user later reports an actual overlap or accidental-tap problem.

## Status
Section 02 mobile long-form disclosure: VISUAL PASS.

Do not reopen this treatment without new frontend evidence or a user-requested design change.
