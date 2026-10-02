# Care Guide 07 — Mobile Support Edge Spacing Fix Complete

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Fix

The mobile Support / Need Help section was too close to the viewport edge.

Root cause:
- an older <=600px rule used `.support-block{padding:54px 0 62px}`;
- because `support-block` and `wrap` are on the same element, that shorthand removed the normal mobile horizontal wrap padding.

Correction:
- restore `20px` horizontal inset specifically for `.support-block.wrap` at <=600px.

## Scope protection

- desktop 07.0 unchanged;
- teaching modules unchanged;
- category system unchanged;
- only the mobile Support section horizontal inset changed.

## Candidate

Branch:
`temp-care-guide-07-mobile-optimized`

File:
`temp-preview/Spatial-Flow-Care-Guide-Illustrated-Teaching-07-Mobile-Optimized.html`

Latest preview commit:
`c14c884e5daa19faa7d242bc088966e5e7fe48ab`

Validated content SHA:
`4e926a8aa0c22a2775a2d0770d55ea574869499d`

## Validation

- support mobile inset rule present;
- no duplicate IDs;
- all internal hash targets resolve;
- CSS braces balanced.

## Status

MOBILE SUPPORT EDGE SPACING FIX = COMPLETE / READY FOR USER REVIEW.
NO PRODUCTION MAPPING.
