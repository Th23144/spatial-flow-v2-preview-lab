# Final Production Wishlist — Runtime 1:1 Rejection

Date: 2026-10-03
Project: Spatial Flow V2 / Project 2

## User verdict

The user explicitly rejects the current Local Wishlist runtime result as being far from the accepted 1:1 visual authority.

This supersedes any implication that Runtime Compatibility Fix 01 was visually sufficient.

## Runtime evidence

Latest desktop screenshot shows that the native title, image sizing, and remove control compatibility issues were partially corrected, but the overall composition still does not reproduce the accepted Harmonized authority.

## Required response

Do not continue incremental patching based on guesswork.

Next action is a strict authority-vs-runtime differential audit against `main/preview/spatial-flow-wishlist-harmonized-v1.html`, covering:
- exact hero copy and line breaks;
- body width and vertical rhythm;
- toolbar and collection index placement;
- first-item and subsequent-item image dimensions;
- product copy alignment / vertical position;
- action placement;
- separators / whitespace;
- mobile behavior;
- live YITH DOM ownership.

If live YITH table markup cannot reproduce the authority reliably through CSS alone, the production approach must change to a controlled presentation transform while preserving YITH/Woo state and actions.

## Status

WISHLIST RUNTIME = REJECTED / 1:1 REOPENED.
DO NOT PROCEED TO SEARCH.