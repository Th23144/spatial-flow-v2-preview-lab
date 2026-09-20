# Wishlist research reset — Page Role, reference mechanisms, Design Grammar, Static Admission Gate

Date: 2026-09-20
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Scope

Research-only reset after Wishlist V2/V3/V4 rejection.

No HTML prototype is authorized by this record.

The purpose is to restore the user's required workflow:
1. define Page Role;
2. study high-score references for mechanisms;
3. translate mechanisms into Wishlist-specific grammar;
4. define a static admission gate;
5. kill weak mother directions before implementation.

## 1. Wishlist Page Role

Wishlist is not:
- a Shop archive;
- a Product page;
- a marketing landing page;
- an editorial About page;
- a generic account utility.

Wishlist sits between discovery and purchase.

Its role is:

`A PRIVATE DECISION SPACE FOR OBJECTS THE USER HAS CHOSEN NOT TO LOSE.`

Core emotional states:
- held;
- unresolved;
- personal;
- revisitable;
- low-pressure.

Core functional truths:
- saved product identity;
- product image;
- current Woo price;
- current stock / purchasability;
- product URL;
- Add to Bag;
- Remove;
- empty state;
- YITH owns saved state;
- WooCommerce owns product / stock / cart truth.

Design implication:
The page should feel curated by the user's own prior actions, not merchandised again by the store.

## 2. High-score reference mechanism extraction

### A24 Shop
Useful mechanism:
- commerce remains direct and legible;
- multiple category / collection / archive paths coexist;
- products can carry cultural/editorial identity without hiding price or availability;
- the commercial destination has authorship instead of becoming a generic catalogue.

Transfer to Wishlist:
- keep commerce truth visible;
- do not turn Saved into a decorative moodboard;
- let objects retain identity and specificity.

Do not copy:
- A24 category density;
- membership merchandising;
- literal product-card treatment.

### Palmer Dinnerware
Useful mechanism:
- object is the interface;
- exploration is spatial and direct;
- “Drag to explore” demonstrates that navigation can be embedded in the object field rather than in conventional chrome;
- collections and product actions remain accessible.

Transfer to Wishlist:
- saved objects themselves should define the page composition;
- interaction can emerge from the object arrangement;
- controls should be visually subordinate until needed.

Do not copy:
- drag interaction literally;
- colorful dinnerware palette;
- horizontal product-world mechanics unless justified.

### Squarespace Foundations
Useful mechanism:
- one creative point of view across different expressions, not identical layouts;
- typography, pacing, motion and grid are treated as one system;
- static moments and motion deliberately alternate;
- interaction rewards curiosity but does not force it;
- cohesion is a feeling/system, not visual sameness.

Transfer to Wishlist:
- SAME SYSTEM != SAME COMPOSITION;
- Wishlist can have a unique count-driven composition while remaining Spatial Flow;
- motion is allowed only when it reveals state;
- the page must already pass as a static frame.

### Dropbox Brand
Useful mechanism:
- fewer, better moving elements;
- motion deepens understanding;
- interaction gives immediate agency / feedback;
- clarity is not merely reduction: it means surfacing what matters.

Transfer to Wishlist:
- no ambient movement;
- hover/tap may expose View / Add / Remove state;
- product state changes may move/settle with physical weight;
- actions should become obvious exactly when the user needs them.

### House of Spoils
Useful mechanism:
- art/products are approached through multiple curated paths: themes, campaigns, artists, arrivals, best sellers;
- the store behaves like a gallery/editorial system without losing product lookup.

Transfer to Wishlist:
- personal curation can be treated as a collection in its own right;
- Saved should feel like the user's temporary exhibition / selection, not the store repeating discovery.

Do not copy:
- artist/theme taxonomy;
- photography-gallery visual language literally.

## 3. Wishlist-specific Design Grammar V1

### Thesis
`THE USER'S SAVED COUNT BECOMES THE COMPOSITION.`

Instead of a fixed table or fixed four-column grid, the saved collection should recompose according to how many objects exist.

This gives Wishlist a page identity that Shop cannot have.

### Composition rules
- no conventional hero;
- title / count acts as a quiet anchor, not a marketing first screen;
- saved objects enter immediately into the first meaningful viewport;
- underlying alignment grid remains strict;
- visual irregularity is count-driven, never random;
- at most one clear focal object per viewport;
- other objects create spatial pressure / counterweight;
- object scale can vary, but never becomes a giant single-product hero;
- price / stock remain visible without opening a panel;
- View / Add / Remove are latent or secondary until focus;
- empty state is a distinct composition, not a generic centered message card.

### Count-responsive composition
1 object:
- isolated object with monumental whitespace;
- product identity and actions sit off-axis;
- the emptiness communicates “one thing held aside.”

2 objects:
- asymmetric pair;
- unequal image scale / vertical position;
- enough shared metadata to compare without becoming a comparison table.

3 objects:
- 2 + 1 tension;
- one object establishes focal weight;
- two smaller objects counterbalance.

4 objects:
- irregular contact sheet / personal curation board;
- not four equal columns.

5–8 objects:
- transition toward a disciplined contact-sheet system;
- controlled scale variation persists;
- no masonry randomness.

9+:
- regularization increases for usability;
- filter/sort is NOT automatically added;
- pagination/infinite behavior follows actual YITH capability later.

### Typography
- current Spatial Flow serif/sans/mono family may be retained;
- typography cannot carry the whole design;
- large type is allowed only as structural counterweight, never filler;
- product name should remain readable before SKU/meta;
- microcopy remains sparse.

### Color
- site-native warm paper / near-black / restrained clay / stone;
- color is subordinate to spatial structure;
- product photography carries most chromatic variation.

### Motion
Allowed:
- focus-state image reposition / scale settle;
- action reveal tied to hover/tap/focus;
- remove/add confirmation;
- actual YITH/Woo loading feedback.

Not allowed:
- marquee;
- scroll-reveal theatre;
- ambient object drift;
- cursor gimmicks;
- decorative particles;
- motion required to understand composition.

## 4. Static Admission Gate

A prototype MUST be internally killed if any of the following is true:

1. Screenshot reads as a Shop grid with “Saved” written above it.
2. Screenshot reads as a fashion/jewelry template after changing the logo.
3. Layout depends on hover/motion to become interesting.
4. Every saved object has equal scale and equal visual weight by default.
5. Whitespace is merely empty rather than creating pressure / hierarchy.
6. Product cards become visible containers / rounded panels.
7. Intro consumes the first screen before saved objects appear.
8. Price / stock / product identity become unclear in pursuit of art direction.
9. More than one major visual gimmick competes in the same viewport.
10. Mobile is just desktop stacked vertically.
11. Empty state is a generic centered icon + message + button.
12. The prototype cannot explain, in one sentence, what makes this specifically Wishlist rather than Shop.

Pass condition:
The first static screenshot should make the saved collection itself feel like a personal, unresolved selection — before any motion is seen.

## 5. Mother directions after internal screening

### A — COUNT-RESPONSIVE CURATION BOARD
Status: PASS / PRIMARY.

Design hook:
The number of saved objects changes the composition.

Why it fits:
- strongest expression of personal curation;
- gives Wishlist a unique role;
- directly uses Palmer object-as-interface + Squarespace variable composition;
- preserves commerce truth;
- does not require motion to be interesting.

Main risk:
Can become random/masonry if the hidden grid is not disciplined.

### B — SAVED FOLIOS / EDITION SHEETS
Status: PASS WITH RISK.

Design hook:
Each saved object occupies an editorial “sheet”/spread with image, product identity, placement note and actions; sheets sequence vertically with variable image alignment.

Why it fits:
- very strong static frames;
- naturally supports narrative/product metadata;
- scales to mobile.

Main risk:
Can drift toward editorial magazine treatment and stop feeling like a utility.

### C — SPLIT INDEX + FOCUS OBJECT
Status: KILL.

Reason:
This is materially the V4 family.
Even if polished, it over-relies on a familiar left-focus/right-index UI pattern and does not meet the authorship threshold.

## 6. Next execution rule

Do not make another broad visual concept.

If implementation resumes, build only Mother Direction A first.

Before showing it:
- render desktop static frame;
- render mobile static frame;
- run the 12-point admission gate;
- internally kill it if it reads like Shop, jewellery template, masonry, or interaction demo.

Only after static PASS may state-change interaction be added.

Status:
RESEARCH COMPLETE.
PRIMARY MOTHER DIRECTION = COUNT-RESPONSIVE CURATION BOARD.
HTML = NOT STARTED BY THIS RECORD.
