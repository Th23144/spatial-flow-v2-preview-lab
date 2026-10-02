# Care Guide 07 — Mobile Optimization Complete

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Authority

Desktop authority remains Care Guide 07.0.

Rejected:
- Care Guide 07.1 refinement.

Mobile work is a responsive-only layer applied on top of 07.0.

## Candidate

Branch:
`temp-care-guide-07-mobile-optimized`

File:
`temp-preview/Spatial-Flow-Care-Guide-Illustrated-Teaching-07-Mobile-Optimized.html`

Latest preview commit:
`c9f5c8fa11219c0c0e8ae5759c209ef20863e87b`

Validated content SHA:
`87a60cf3a88e8e6de58dd24a0874b1481c0e58cb`

## Mobile changes

Responsive overrides only, focused on <=760px with additional 430px / 360px fallback.

Optimized:
- Care hero spacing and headline scale;
- mobile toolbar density;
- category chooser row height / typography / arrows;
- category preview image ratio;
- Support helper density;
- selected-category heading and Change category placement;
- teaching image ratio;
- teaching-module vertical spacing;
- teaching heading and paragraph sizes;
- note density;
- room-context mini rows;
- support section spacing;
- 360px fallback for narrow devices.

## Desktop protection

No desktop layout redesign was introduced.

The selected 07.0 markup, content, desktop CSS and footer remain unchanged.
The new rules are contained inside mobile media queries.

## Validation

- 3 category selectors;
- 3 filtered category panels;
- 9 teaching modules;
- no duplicate IDs;
- all internal hash targets resolve;
- section/article tags balanced;
- CSS brace count balanced;
- 430px and 360px fallbacks present.

## Comparison

Baseline desktop / old mobile:
`temp-care-guide-illustrated-teaching-07/temp-preview/Spatial-Flow-Care-Guide-Illustrated-Teaching-07.html`

Mobile-optimized candidate:
`temp-care-guide-07-mobile-optimized/temp-preview/Spatial-Flow-Care-Guide-Illustrated-Teaching-07-Mobile-Optimized.html`

## Status

DESKTOP 07.0 = SELECTED.
MOBILE OPTIMIZED CANDIDATE = READY FOR USER REVIEW.
NO PRODUCTION MAPPING.
