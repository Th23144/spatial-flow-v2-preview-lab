# Wishlist external benchmark audit — luxury saved-items patterns

Date: 2026-09-20
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user rejected the current Wishlist layout and explicitly asked that we reference better real-world designs.

## Research set

Current/recent saved-item and wishlist patterns reviewed:
- SSENSE
- Farfetch
- Mytheresa
- NET-A-PORTER
- ARKET
- COS

## What the stronger references actually do

### SSENSE
- image-first product presentation;
- almost no decorative UI;
- product name / size / price sit directly under the image;
- wishlist reads like a highly edited product gallery, not an account table.

### Farfetch
- direct Add to Bag from Wishlist;
- product state/action stays close to the saved item;
- wishlist is a purchase shortcut, not a separate conceptual experience.

### Mytheresa
- large clean product images;
- centered product identity;
- very sparse metadata;
- strong monochrome action bars;
- luxury feeling comes from proportion and restraint rather than custom layout tricks.

### NET-A-PORTER
- explicit availability states;
- All / In Stock / Sold Out / Unavailable segmentation;
- saved state is treated as inventory-aware commerce, not a static moodboard.

### ARKET
- user-selectable 2-column / 1-column Wishlist view;
- minimal account chrome;
- saved items are still visually product-led.

### COS
- empty Wishlist is extremely restrained:
  one sentence, Continue shopping, sign-in option;
- no decorative empty-state illustration required.

## Design correction for Spatial Flow

Stop treating a product grid as inherently generic.

The better luxury references show that a Wishlist can be:
- image-led;
- grid-based;
- sparse;
- functional;
- premium;

provided that:
- image proportion is strong;
- type hierarchy is controlled;
- product metadata is restrained;
- actions are visually disciplined;
- stock state is useful and live;
- there is no card chrome / rounded container clutter.

## V8 direction

Build a luxury-reference synthesis rather than another bespoke interface concept.

Desktop:
- compact Saved title / count;
- restrained availability filter rail;
- 3-column image-led saved-object gallery;
- optional 2/3-column view control as a study;
- large neutral 4:5 placeholders;
- product name / type / price / stock directly under image;
- black full-width primary Add to Bag action;
- quiet text Remove / View link;
- no editorial filler section.

Mobile:
- 2-column product gallery;
- no oversized intro;
- actions stay reachable without hover.

This uses real luxury Wishlist conventions, then translates them into Spatial Flow's warm-paper / serif / mono language.

Status:
EXTERNAL WISHLIST BENCHMARK AUDIT COMPLETE.
NEXT = V8 LUXURY-REFERENCE SYNTHESIS.
