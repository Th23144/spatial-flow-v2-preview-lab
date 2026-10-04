# Final Production Wishlist — H03 Runtime Frame Correction Ready

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Target
`assets/css/spatial-flow.css` only.

## Verified baseline
- bytes: 608,804
- logical lines (splitlines): 21,656
- SHA256: `37f58eecd31bc66d0dac0a6dd07a5598f9a796ec7407a34c9bdc5d83bdfcb008`

## Correction
Replace the current Wishlist Astra/page-frame reset block with a stronger owner block that also includes:
- `.site-main`;
- `article.ast-article-single`;
- `.entry-content`;
- full-width / max-width none / margin 0 / padding 0 with `!important`;
- `.ast-container` display block;
- primary/content-area float neutralization;
- article background/box-shadow neutralization.

This mirrors the proven page-frame ownership pattern already used on the accepted Cart mapping, while remaining Wishlist-scoped.

## Explicitly unchanged
- H03 hero/item geometry;
- image geometry;
- Header/Footer;
- PHP / JS / YITH / Woo;
- deferred palette.

## Simulated target
- bytes: 609,257
- logical lines (splitlines): 21,669
- SHA256: `d62e38ec0b5f4cc985461b96bd686ca4b24bcf5f3669e8506158ab423e17b46c`
- CSS brace delta: 0

## Next gate
Return the modified CSS for exact source verification. Then hard-refresh Local and compare the first fold against the Wishlist static authority.

Status: MANUAL FRAME CORRECTION READY.