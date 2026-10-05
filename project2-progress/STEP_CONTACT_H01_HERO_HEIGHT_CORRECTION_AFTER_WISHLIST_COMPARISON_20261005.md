# Contact H01 — Hero Height Correction After Wishlist Comparison

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## User correction

Fresh runtime screenshot shows the prior Contact hero unification change moved the page in the wrong direction.

The user was referring to the visible empty vertical space beneath the right-side hero note, not asking to blindly copy Wishlist numeric padding values.

The previous change:
- Contact intro bottom padding 20px -> 28px;
- removed the temporary note offset;

increased the visible empty area and is therefore withdrawn.

## What remains correct

Keep the Wishlist hero-note typography correction:
- Cormorant Garamond italic;
- 17px / 1.45 desktop;
- 16px / 1.45 mobile.

Keep the compact Contact mobile hero system for now; it still needs runtime review, but no new mobile source change is justified by this desktop screenshot alone.

## Corrected Contact desktop target

Restore:
- `.sf-contact-intro` bottom padding to 20px.

Set:
- `.sf-contact-intro__side` bottom padding to 0;
- `transform: translateY(10px)`.

This preserves the Contact hero shell while lowering the right-side note and reducing the exact blank area highlighted by the user.

## Baselines

functions.php:
- 658,030 bytes
- 12,558 lines
- SHA256 `272bae5d6ee3acde56d063f972571242b594cbddbf0fe5582f8023e1a51343b6`
- version 2.7.63

CSS:
- 627,859 bytes
- 22,539 lines
- SHA256 `eb5b84600acc2630d8e79527c80bd9c415a6f0c0df19dfd5ec194afa8de19745`

## Verified corrected target

functions.php:
- 658,030 bytes
- 12,558 lines
- SHA256 `569545c479848f0acbfbf806b24b3d83d0e49ed593450ad0c11e423981376677`
- version 2.7.64

CSS:
- 627,869 bytes
- 22,539 lines
- SHA256 `c66dceadf3ec7f4dee5f4b049f0438a872e83b80e8090d4aa414d20fe2b827e3`
- braces 3544 / 3544

Status: PRIOR CONTACT DESKTOP HERO NUMERIC UNIFICATION WITHDRAWN / CORRECTED VISUAL TARGET READY.
