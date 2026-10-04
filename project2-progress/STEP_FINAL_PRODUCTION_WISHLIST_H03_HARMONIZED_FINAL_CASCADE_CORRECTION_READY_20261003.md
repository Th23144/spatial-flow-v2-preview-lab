# Final Production Wishlist — H03 Harmonized Final Cascade Correction Ready

Date: 2026-10-03
Project: Spatial Flow V2 / Project 2

## Target
`assets/css/spatial-flow.css` only.

## Verified baseline
- bytes: 608,528
- logical lines (splitlines): 21,652
- SHA256: `8485311d485cdcb6771350927b98fb0ef3880c9fd1de86708fef1649bb3eb5ed`

## Exact corrections
- intro top padding 32px -> 46px;
- remove the H03-only hero title weight 300 override, returning computed desktop weight to 400;
- intro-side max-width 280px -> 34em;
- intro-side font-family Cormorant Garamond -> Inter stack;
- toolbar top/bottom border rule token -> ink token;
- harden Wishlist ghost/Release hover/focus/active so global button styles cannot paint a filled background.

## Explicitly unchanged
- H03 item/spread geometry;
- product image geometry;
- PHP / JS / YITH / Woo logic;
- deferred palette tokens.

## Simulated target
- bytes: 608,804
- logical lines (splitlines): 21,656
- SHA256: `37f58eecd31bc66d0dac0a6dd07a5598f9a796ec7407a34c9bdc5d83bdfcb008`
- CSS brace delta: 0

## Next gate
Return the modified CSS for exact source verification, then hard-refresh Local and compare desktop with the static Wishlist authority.

Status: MANUAL CORRECTION READY.