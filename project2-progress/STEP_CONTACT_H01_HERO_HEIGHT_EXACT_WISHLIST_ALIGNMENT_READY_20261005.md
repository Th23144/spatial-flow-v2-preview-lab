# Contact H01 — Hero Height Exact Wishlist Alignment Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Runtime comparison

Fresh Contact runtime screenshot was compared against the Wishlist desktop screenshot at the same viewport.

Measured horizontal anchors:
- shared Header bottom rule: y=124 on both screenshots;
- Wishlist hero bottom divider: y=289;
- Contact hero bottom divider: y=281.

Therefore Contact H01 is currently 8px shorter than Wishlist H03 at the hero-band level.

## Important distinction

The current Contact right-side note gap itself is acceptable after the 10px downward translation. The remaining mismatch is the overall hero-band height, not the note width or typography.

Both pages already share:
- max-width: 34em;
- Cormorant Garamond italic 300;
- 17px / 1.45 desktop side-note typography.

Mobile also already shares max-width 340px and 16px / 1.45.

## Correct exact-alignment strategy

Do NOT simply increase the Contact note translate from 10px to 18px while keeping the hero at 20px bottom padding.

Instead preserve the current note-to-divider visual gap while restoring the missing 8px hero-band height:

- Contact intro bottom padding: 20px -> 28px;
- Contact side-note translateY: 10px -> 18px.

This moves both:
- the hero divider down 8px;
- the side note down 8px;

so the current note-to-divider gap remains essentially unchanged while the overall Contact hero divider aligns with Wishlist.

Mobile <=600px remains unchanged because its compact hero system is already separately owned.

## Baselines

functions.php:
- 658,030 bytes
- 12,558 logical lines
- SHA256 `569545c479848f0acbfbf806b24b3d83d0e49ed593450ad0c11e423981376677`
- version 2.7.64

CSS:
- 627,869 bytes
- 22,539 logical lines
- SHA256 `c66dceadf3ec7f4dee5f4b049f0438a872e83b80e8090d4aa414d20fe2b827e3`

## Verified target

functions.php:
- 658,030 bytes
- 12,558 logical lines
- SHA256 `5235fc85c7b924f84541b53e34910064e46f73b3ee25b6ff17a05b0ef5ce5b00`
- version 2.7.65

CSS:
- 627,869 bytes
- 22,539 logical lines
- SHA256 `320660d99f51152013e70d8934f7c0d64d5b121e71407136a56137c0b229164a`

Status: EXACT DESKTOP HERO ALIGNMENT READY / MOBILE UNCHANGED.
