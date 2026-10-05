# Wishlist H03 + Contact H01 — Hero Typography and Height Unification Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Trigger

While comparing Contact H01 hero height against the already accepted Wishlist H03 page, the user identified two concrete issues:

1. Wishlist hero side-note typography is inconsistent with the current task/info-page serif note system.
2. Contact hero title band still sits too high relative to the Wishlist reference, and the same rhythm mismatch exists on mobile.

This is a concrete regression/review finding and temporarily reopens the bounded Wishlist hero-note styling only. Wishlist product/state behavior remains closed.

## Source evidence

Current Wishlist H03 desktop intro:
- top/bottom padding: 46px / 28px;
- title font: Cormorant Garamond;
- side note incorrectly uses Inter italic 16px;
- side note bottom padding: 6px.

Current Contact H01 desktop intro:
- top/bottom padding: 46px / 20px;
- title font matches Wishlist;
- side note correctly uses Cormorant Garamond italic 17px;
- temporary 5px transform was used to lower the note.

The runtime comparison shows the Contact toolbar/title band begins about 8px too high relative to Wishlist. This maps exactly to the 8px bottom-padding difference:
- Wishlist: 28px
- Contact: 20px

Therefore the previous 5px transform is withdrawn as a page-specific optical patch. The correct solution is to unify the shared hero geometry.

## Locked correction

### Wishlist H03
- keep accepted hero geometry;
- change only the hero side-note typography to the same serif role used by Contact:
  - Cormorant Garamond;
  - italic 300;
  - 17px / 1.45 desktop;
  - -0.025em letter-spacing;
  - 16px / 1.45 mobile.

### Contact H01 desktop
- restore intro bottom padding from 20px to 28px;
- remove the temporary translateY(5px);
- use side-note bottom padding 6px, matching Wishlist.

### Contact H01 mobile <=600
- use the same title-band spacing system as Wishlist:
  - padding 20px var(--sf-contact-pad) 18px;
  - one-column grid;
  - 10px inter-column/stack gap;
  - kicker bottom margin 9px;
  - title 44px;
  - side note max-width 340px;
  - zero side-note margin;
  - 16px / 1.45 serif note.

No Contact form, toolbar, route, AJAX, modal, Wishlist YITH owner, or product layout is touched.

## Current baselines

functions.php:
- 658,030 bytes
- 12,558 logical lines
- SHA256 `870109477f264f51fd5dbcdb99317eae3c481c67ce589f4fdd2aa849fd45ecc7`
- version 2.7.62

CSS:
- 627,786 bytes
- 22,536 logical lines
- SHA256 `17eca795a872ec558a05ecb6c6878c85e1e2d78f3f014f4743d345f313b8200f`

## Verified target

functions.php:
- 658,030 bytes
- 12,558 logical lines
- SHA256 `272bae5d6ee3acde56d063f972571242b594cbddbf0fe5582f8023e1a51343b6`
- version 2.7.63
- PHP syntax PASS

CSS:
- 627,859 bytes
- 22,539 logical lines
- SHA256 `eb5b84600acc2630d8e79527c80bd9c415a6f0c0df19dfd5ec194afa8de19745`
- braces 3544 / 3544
- comments 241 / 241
- top-level CSS parse errors 0

Status: BOUNDED TYPOGRAPHY / HERO-GEOMETRY CORRECTION READY.
