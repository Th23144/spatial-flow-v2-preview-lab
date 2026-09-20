# Wishlist start — About Us export audited; existing Wishlist reference rediscovered

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## About Us export audit

User successfully supplied a complete browser export:
- `关于我们 – 空间流(1).html`
- accompanying `_files` resource archive.

The exported page confirms that the current About Us V5 motion language is real and relatively restrained, not just a screenshot impression.

### Confirmed motion / interaction mechanisms
- staged hero entrance:
  - eyebrow: ~0.8s;
  - H1: ~0.9s;
  - subcopy: ~0.9s;
  - metadata: ~0.9s;
  - staggered delays.
- horizontal ticker:
  - continuous CSS animation;
  - `sf-about-v5-roll`;
  - 34s linear infinite.
- sticky content index:
  - desktop index uses `position: sticky; top: 92px`.
- section reveal:
  - sections begin at opacity 0 / translateY(28px);
  - IntersectionObserver adds `.is-in`;
  - transition ~0.75s with cubic-bezier(.22,1,.36,1).
- active index tracking:
  - a second IntersectionObserver toggles `.is-active` on the matching index entry as sections cross the reading band.
- simple hover color changes on index entries.

## Design interpretation

Useful cross-page motion grammar:
- entrance sequence;
- slow continuous ticker where semantically useful;
- sticky contextual navigation;
- scroll reveal;
- scroll-linked active state;
- subtle hover/focus state.

These should be reused selectively, not mechanically, on design-led utility pages.

## Important Wishlist correction

Repository audit found that Wishlist is NOT reference-less.

Existing static reference:
`preview/spatial-flow-wishlist-v1.html`

Therefore Wishlist should not be treated as a blank-sheet design page.

### Existing Wishlist reference strengths
- editorial saved-object hero;
- clear count and return paths;
- YITH/WooCommerce ownership explicitly preserved;
- saved-product table with product identity, price, stock and action truth;
- empty-state concept;
- privacy / product logic / return-path notes.

### Existing Wishlist reference limitations
- uses the old masthead/header/footer shell, now superseded by accepted Header V2 / Footer V2;
- static and visually conservative;
- no meaningful motion;
- mobile treatment is functional but old;
- copy still describes itself as a static preview;
- visual language predates the stronger Product / Shop / About work.

## Correct execution direction

Wishlist should be handled as:
`REFERENCE-GUIDED REDESIGN`

Preserve:
- functional information hierarchy;
- real YITH owner;
- WooCommerce price/stock/product truth;
- add/remove/view paths;
- empty state.

Upgrade:
- current Header/Footer shell;
- stronger Spatial Flow composition;
- site-native motion;
- mobile re-composition;
- removal of old static-preview explanatory copy.

Before production implementation, current live Wishlist DOM/runtime must be audited so YITH markup and behavior are not guessed.

Status:
ABOUT EXPORT AUDIT COMPLETE.
WISHLIST REFERENCE FOUND.
WISHLIST = REFERENCE-GUIDED REDESIGN, NOT BLANK-SHEET.
