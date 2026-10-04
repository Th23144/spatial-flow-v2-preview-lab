# Final Production Wishlist — Source-Level 1:1 + Static Asset Recovery Request

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## User feedback

The user requires source-level 1:1 alignment, not approximate visual similarity.

Specific issues called out from the current Local first fold:
1. Toolbar action area (`Continue Browsing` / `View Bag`) still differs in fine spacing / rule treatment from the static authority.
2. Collection Index / title row spacing and wrapping should be compared against the static source, not tuned by eye.

The user will also temporarily normalize real content to reduce content-driven differences:
- edit the six product titles in WordPress to match the static authority as closely as practical;
- temporarily replace the six real product images with the static-authority images if those assets can be recovered.

## Required next action

1. Audit the static Wishlist authority at source level and extract the final computed desktop rules for:
- toolbar;
- toolbar action links;
- collection index;
- index buttons / wrapping / spacing;
- first-fold related spacing.

2. Recover the six static-authority product image assets from the authority HTML.
- If embedded as data URLs, extract them to image files.
- If external URLs, surface the original source URLs.

3. Only after exact source audit, prepare the next bounded production correction.

## Status

SOURCE-LEVEL 1:1 AUDIT = ACTIVE.
STATIC PRODUCT IMAGE RECOVERY = ACTIVE.