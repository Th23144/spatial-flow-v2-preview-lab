# Final Production Wishlist — H03 Runtime Frame Correction Source Verified / Expected Hash Correction

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Returned file
`spatial-flow(20261004-040308).css`

## Exact verification
- bytes: 609,263
- logical lines (splitlines): 21,675
- SHA256: `8e7b5b3f8e6aee2c614db2fa642560ad8e3ff183772af08fa4079fae21fe9923`
- CSS brace delta: 0

## Important correction
The previously stated simulated target (`609,257 bytes / 21,669 lines / d62e...`) was incorrect.

Reconstruction from the prior verified CSS baseline using the exact literal replacement block that was delivered in chat produces:
- 609,263 bytes
- 21,675 logical lines
- SHA256 `8e7b5b3f8e6aee2c614db2fa642560ad8e3ff183772af08fa4079fae21fe9923`

The user's returned file matches that reconstruction byte-for-byte.

Therefore the user did not make an editing error and must not redo this step.

## Confirmed frame correction
- `.site-main` is now included in Wishlist frame ownership;
- `article.ast-article-single` is included;
- `.entry-content` is fully reset;
- width/max-width/min-width/margin/padding are force-neutralized;
- Wishlist `.ast-container` is display:block;
- primary/content-area floats are neutralized;
- article background and box-shadow are neutralized;
- Header/Footer, H03 item geometry, PHP, JS, YITH/Woo and palette remain untouched.

## Status
WISHLIST H03 RUNTIME FRAME CORRECTION = SOURCE VERIFIED / PASS.

NEXT:
Hard-refresh Local Wishlist and compare first-fold vertical position against the static Wishlist authority.