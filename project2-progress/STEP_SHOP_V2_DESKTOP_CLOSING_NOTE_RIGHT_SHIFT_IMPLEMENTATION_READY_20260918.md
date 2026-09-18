# Shop V2 — Desktop Closing Note right-group optical shift IMPLEMENTATION READY

Date: 2026-09-18

## Preconditions

- Non-frozen mobile Shop review is complete and PASS.
- Current CSS full-source audit is PASS.
- Closing Note mobile layout is PASS and must remain untouched.
- Current desktop Closing Note structure is healthy: 1fr / 1fr columns, 80px gap, right paragraph max-width 48ch.

## Runtime issue

On the user-approved wider production Shop frame, the right Closing Note copy/button group reads too close to the center and leaves excessive optical emptiness at the far right.

This is not a reference-structure defect; it is a production-width calibration issue.

## Bounded fix

Shift only the right copy group on large desktop by adding 48px left inset.

Do not:
- move the whole Closing Note grid;
- change the 1fr / 1fr columns;
- change the 80px gap;
- change the left editorial statement;
- change the paragraph max-width;
- change mobile/tablet behavior.

Implementation:
- add a min-width:1101px media rule;
- set `.sf-shop-v2-closing-note__right { padding-left:48px !important; }`;
- existing padding-top:14px remains;
- because the adjustment is a real inset rather than translate, the content remains inside its grid column and avoids visual overflow.

## Expected result

Large desktop only:
- right paragraph + CTA shift approximately 48px outward;
- far-right empty area is reduced;
- left text and central gap remain stable.

<=1100px:
- no change.

Status:
IMPLEMENTATION READY / CSS ONLY / SOURCE VALIDATION REQUIRED.