# Contact H01 — Mobile Visual Rollback Correction Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## User correction

The previous source record said the mobile hero rhythm had been "restored" after reverting:
- top padding to 20px;
- bottom padding to 18px;
- grid gap to 10px;
- kicker margin-bottom to 9px.

That statement was incomplete at the visual level.

Although those numeric values were restored, the same batch also correctly removed the surviving runtime paragraph margin from the hero side note with:

`.sf-main-contact-page .sf-contact-intro__side { margin:0 !important; }`

Removing that margin reduced the total visible hero height. Therefore the visual composition did not fully return to the prior/reference height even though the old padding/gap numbers were restored.

The user is correct: the last runtime result mainly fixed the side-note-to-divider gap; it did not fully restore the overall hero height.

## Runtime measurement

Fresh 393px Contact screenshot:
- Header bottom rule: y = 99
- Contact hero bottom divider: y = 260

Wishlist mobile reference at the same 393px width:
- Header bottom rule: y = 99
- Wishlist hero bottom divider: y = 265

Current Contact hero is therefore 5px shorter than the Wishlist mobile reference.

## Correct correction

Preserve the successful gap fix:
- keep side-note `margin:0 !important`;
- keep bottom padding at 18px;
- keep grid gap at 10px;
- keep kicker margin-bottom at 9px;
- keep compact toolbar grid.

Restore only the missing total height without reopening the note-to-divider gap:
- Contact <=600 hero top padding: 20px -> 25px.

This moves the entire hero content and bottom divider down by 5px while preserving the current side-note-to-divider gap.

Do not add the 5px to bottom padding because that would recreate the gap the user explicitly asked to remove.

## Baselines

functions.php:
- 658,030 bytes
- 12,558 lines
- SHA256 `ffa495cdecbd610a4d46a612ee0be9b9802ec4990ce0b5f95ac502223b4d29ba`
- version 2.7.67

CSS:
- 628,156 bytes
- 22,551 lines
- SHA256 `f490cd3e3c8c9255f3314423f3530e59526e489d15e7c6d0e16e2c049a8f9ea1`

## Verified target

functions.php:
- 658,030 bytes
- 12,558 lines
- SHA256 `29d61f83f9081568ed76459ae434419c4f7d9977998b6199c47e6791dd84677b`
- version 2.7.68
- PHP syntax PASS

CSS:
- 628,156 bytes
- 22,551 lines
- SHA256 `fb9db6e9a55d69f1c4ba7e85976275f4f29f306441bf3d459512214ccd0d2bf8`
- braces 3545 / 3545
- comments 241 / 241
- top-level CSS parse errors 0

Status: VISUAL ROLLBACK CORRECTION SOURCE-VERIFIED / MANUAL DELIVERY READY.
