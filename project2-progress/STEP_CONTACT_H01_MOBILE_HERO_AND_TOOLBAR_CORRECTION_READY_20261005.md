# Contact H01 — Mobile Hero + Toolbar Correction Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Runtime evidence

Fresh responsive evidence established:
- Desktop: PASS / locked.
- 1024: PASS / no correction required.
- Mobile Header: present and stable in the fresh screenshot.
- Contact mobile hero band remains approximately 20px taller than the Wishlist mobile reference after width normalization.
- Contact mobile toolbar remains substantially taller than Wishlist because the current wrapped-flex layout places FAQ / Help on a second row.

## Root cause

### Mobile hero
Contact and Wishlist already share:
- 44px title;
- 340px side-note max width;
- 16px / 1.45 side-note typography.

The remaining height difference comes from Contact copy occupying one additional text line. To keep typography and width consistent, the correction must come from Contact-only mobile vertical rhythm rather than changing font or note width.

Current Contact <=600 hero rhythm:
- top padding 20px;
- bottom padding 18px;
- grid gap 10px;
- kicker bottom margin 9px.

Corrected rhythm:
- top padding 14px;
- bottom padding 10px;
- grid gap 6px;
- kicker bottom margin 6px.

Total vertical reduction: 21px.

### Mobile toolbar
Current toolbar still inherits wrapped flex behavior:
- left description;
- Track Order right;
- FAQ / Help wraps to a second right-aligned row.

Corrected <=600 layout:
- grid: `minmax(0,1fr) auto`;
- both action links remain together in one nowrap action group;
- 4px top/bottom toolbar padding;
- 8px grid gap;
- action gap 12px;
- paragraph 10px / 1.35;
- existing 44px link touch target preserved.

This produces the compact one-row action behavior while keeping both links visible.

## Scope

CSS <=600 only + asset version bump.

No changes to:
- Desktop;
- 1024;
- Contact DOM;
- AJAX;
- Contact Messages;
- Customizer copy;
- Header;
- Footer;
- Wishlist;
- modal behavior.

## Baselines

functions.php:
- 658,030 bytes
- 12,558 logical lines
- SHA256 `5235fc85c7b924f84541b53e34910064e46f73b3ee25b6ff17a05b0ef5ce5b00`
- version 2.7.65

CSS:
- 627,869 bytes
- 22,539 logical lines
- SHA256 `320660d99f51152013e70d8934f7c0d64d5b121e71407136a56137c0b229164a`

## Verified target

functions.php:
- 658,030 bytes
- 12,558 logical lines
- SHA256 `a3a3492f24667671019a6569fdfb822b5419e42c5dea35b058034b90cfa09e89`
- version 2.7.66
- PHP syntax PASS

CSS:
- 628,122 bytes
- 22,551 logical lines
- SHA256 `473ab41747b496a280c73cf7bfa79092bafc5d75612d753338c36a279e508bb2`
- braces 3545 / 3545
- comments 241 / 241
- top-level CSS parse errors 0

Status: BOUNDED MOBILE CORRECTION SOURCE-VERIFIED / MANUAL DELIVERY READY.
