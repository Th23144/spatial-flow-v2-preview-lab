# Care Guide Filtered Category 04 — Preview Built

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Candidate

Branch:
`temp-care-guide-filtered-category-04`

File:
`temp-preview/Spatial-Flow-Care-Guide-Filtered-Category-04.html`

Latest preview commit:
`adbeea4783370212b1df0e75dbe88fedb87e5da6`

## Core behavior

Care Guide remains one single page.

Front-end behavior now changes to:
1. user chooses a care category;
2. only that category's main care content is exposed;
3. category-specific secondary guidance appears inside the same panel;
4. user can switch categories without navigating to another WordPress page;
5. Support remains available globally.

Primary categories:
- Jewelry
- Crystal Objects
- Home Pieces
- Unsure / Need Help

## Progressive enhancement

Without JavaScript:
- all category content remains present in the document;
- category hash links resolve to real IDs.

With JavaScript:
- unselected category panels are hidden;
- the selected route is visibly marked;
- URL hash reflects the selected category;
- direct hash loading restores the corresponding category;
- "Change category" returns to the category chooser.

## Content discipline

No new care claims were introduced.
The new panels reuse the previously staged Care Guide content and reorganize it by object category.

No separate WordPress pages were created.
No production mapping occurred.

## Validation

- no duplicate IDs;
- all internal hash targets resolve;
- section / article structure remains balanced;
- responsive rules cover chooser, active panel and content rows.

## Status

FILTERED CATEGORY 04 = STATIC CANDIDATE / READY FOR USER VISUAL + INTERACTION REVIEW.
NOT ACCEPTED.
NO PRODUCTION MAPPING.
