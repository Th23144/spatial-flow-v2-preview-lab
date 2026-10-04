# Final Production Wishlist — Parity CSS Verified + Authority Assets Published

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Returned CSS
`spatial-flow(20261004-054819).css`

Verification:
- bytes: 609,303
- logical lines (splitlines): 21,676
- SHA256: `d809cea66ca7f32407761335c6522dd00487dd5a7e0ad90de9e0deb237cf1dab`
- CSS brace delta: 0

The returned file exactly matches the expected toolbar/index source-level parity target.

Confirmed:
- toolbar min-height drift removed;
- toolbar line-height drift removed;
- toolbar-actions align-items drift removed;
- toolbar action links no longer force ink text color;
- index button typography now follows the static authority structure with inherited line-height and explicit appearance reset.

## Exact static authority assets
Published on temporary branch:
`temp-wishlist-authority-assets-20261004`

Commit:
`5946c4b2cc2cc70b7c6311754afb69618f86f6f0`

Files:
- project2-assets/wishlist-authority/01-vessel-no-04.jpg
- project2-assets/wishlist-authority/02-heavy-linen-throw.jpg
- project2-assets/wishlist-authority/03-travertine-catch-tray.jpg
- project2-assets/wishlist-authority/04-blackened-ash-stool.jpg
- project2-assets/wishlist-authority/05-moss-vetiver-candle.jpg
- project2-assets/wishlist-authority/06-threadbound-journal.jpg

These are exact JPEG bytes decoded from the static authority's embedded data URLs; they were not regenerated.

Status:
PARITY CSS = SOURCE VERIFIED / PASS.
STATIC AUTHORITY IMAGES = PUBLISHED FOR TEMPORARY 1:1 TESTING.