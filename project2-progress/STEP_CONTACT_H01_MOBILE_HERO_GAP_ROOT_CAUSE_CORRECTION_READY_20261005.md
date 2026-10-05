# Contact H01 — Mobile Hero Gap Root Cause Correction Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## User correction

The previous mobile correction changed the overall Contact hero rhythm when the actual request was narrower:

- reduce the visual distance between the hero side-note copy and the horizontal divider below it;
- do not compress the whole hero/title block.

The fresh runtime screenshot confirms the mistake.

## Runtime evidence

Current <=600 source already says:
- hero bottom padding: 10px;
- side-note margin: 0;
- side-note padding-bottom: 0.

Yet the screenshot still shows a visibly much larger gap between the final note line and the toolbar top border.

Therefore the visible gap is not being produced by the 10px hero bottom padding alone.

The child-theme rule:
`.sf-contact-intro__side { margin:0; }`

is not strong enough to guarantee removal of Astra / entry-content paragraph margins at runtime.

The observed extra gap is consistent with a surviving paragraph bottom margin.

## Correct fix

Withdraw the mobile-wide vertical compression from the previous batch.

Restore the prior accepted mobile hero rhythm:
- top padding 20px;
- bottom padding 18px;
- grid gap 10px;
- kicker margin-bottom 9px.

Then fix the actual gap owner:
- raise selector specificity to `.sf-main-contact-page .sf-contact-intro__side`;
- force `margin:0 !important`.

Keep the successful toolbar fix from the previous batch:
- two-column grid;
- Track Order + FAQ / Help on one row;
- nowrap action group.

This changes the requested note-to-divider gap while restoring the overall title/hero vertical rhythm.

## Baselines

functions.php:
- 658,030 bytes
- 12,558 lines
- SHA256 `a3a3492f24667671019a6569fdfb822b5419e42c5dea35b058034b90cfa09e89`
- version 2.7.66

CSS:
- 628,122 bytes
- 22,551 lines
- SHA256 `473ab41747b496a280c73cf7bfa79092bafc5d75612d753338c36a279e508bb2`

## Verified corrected target

functions.php:
- 658,030 bytes
- 12,558 lines
- SHA256 `ffa495cdecbd610a4d46a612ee0be9b9802ec4990ce0b5f95ac502223b4d29ba`
- version 2.7.67
- PHP syntax PASS

CSS:
- 628,156 bytes
- 22,551 lines
- SHA256 `f490cd3e3c8c9255f3314423f3530e59526e489d15e7c6d0e16e2c049a8f9ea1`
- braces 3545 / 3545
- comments 241 / 241
- tinycss2 top-level parse errors 0

Status: PREVIOUS MOBILE HERO COMPRESSION WITHDRAWN / ROOT-CAUSE GAP FIX READY.
