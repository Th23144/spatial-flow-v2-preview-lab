# Wishlist V8 — luxury-reference synthesis rendered preview ready

Date: 2026-09-20
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Research basis

V8 is explicitly informed by current luxury Wishlist/Favourites patterns reviewed before implementation:

- SSENSE: image-first, sparse product identity, direct Wishlist-to-bag behavior;
- Farfetch: Wishlist as a direct purchase shortcut with item-level Add to Bag;
- NET-A-PORTER: availability segmentation (All / In Stock / Sold Out / unavailable);
- ARKET: 2-column / 1-column Wishlist view control;
- COS: restrained empty state;
- Mytheresa: large product imagery, minimal metadata, strong monochrome action treatment.

The goal is not to copy any brand, but to stop inventing bespoke Wishlist mechanics and use proven high-end commerce patterns.

## V8 composition

Desktop:
- compact title + saved count;
- availability rail;
- 3-column, image-led product gallery;
- 4:5 neutral placeholders;
- sparse product identity / price / stock;
- full-width dark Add to Bag;
- quiet View / Remove links;
- no editorial filler blocks before products.

Mobile:
- 2-column gallery;
- compact title;
- filter rail remains horizontally readable;
- full-width item CTA remains accessible;
- no hover dependency.

## Render inspection

Actual rendered screenshots were generated for:
- desktop 1600 × 1100 viewport;
- mobile 390 × 844 viewport.

Checked before user review:
- no overlaps;
- no clipping;
- no broken section boundaries;
- no horizontal overflow;
- mobile remains 2-column;
- item title / price / stock / CTA remain readable;
- footer remains contained.

Artifact:
`/mnt/data/spatial-flow-wishlist-v8-luxury-reference.html`

Status:
V8 LUXURY-REFERENCE SYNTHESIS = READY FOR USER VISUAL REVIEW.
