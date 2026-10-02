# Care Guide 06 — Single Visual Field Preview Built

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Candidate

Branch:
`temp-care-guide-single-visual-06`

File:
`temp-preview/Spatial-Flow-Care-Guide-Single-Visual-06.html`

Preview commit:
`9bf2b03ce58aef52720947f492b060cb1fc1c128`

Validated content SHA:
`3b7e99241861bb020f3f5d95e61d5d3290b5f5cd`

## Core visual change

The rejected three-equal-image-card category grid has been removed.

The category chooser now uses:
- text-led object index on the left;
- one shared contextual image field on the right.

Categories:
1. Jewelry
2. Crystal Objects
3. Home Pieces

Hover / keyboard focus previews the corresponding image.
Click selects the category and exposes only its care content below.

## Image behavior

- one shared visual field only;
- no repeated category image inside the selected care panel;
- image remains a contextual/material cue rather than a commerce card;
- temporary reference imagery remains clearly non-production.

## Support

Support remains outside the category taxonomy as a low-emphasis route.

## Progressive behavior

- hash routes remain valid;
- selected category restores from hash;
- no-JS document still contains all care panel content;
- selected state is preserved when hover/focus leaves the category index.

## Validation

- 3 category selectors;
- 3 care panels;
- 3 preview images inside 1 visual field;
- 0 repeated care-panel images;
- no duplicate IDs;
- all internal hash targets resolve;
- section/article tags balanced.

## Status

CARE GUIDE 06 = STATIC CANDIDATE / READY FOR USER VISUAL + INTERACTION REVIEW.
NOT ACCEPTED.
NO PRODUCTION MAPPING.
