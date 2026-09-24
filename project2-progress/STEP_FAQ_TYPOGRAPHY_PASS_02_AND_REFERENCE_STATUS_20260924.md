# FAQ Typography Pass 02 + Reference Status Convention

Date: 2026-09-24
Project: Spatial Flow V2 / 项目二换皮工程

## FAQ typography correction

Artifact:
`temp-preview/Spatial-Flow-FAQ-Wishlist-Led-01.html`
Branch:
`temp-faq-wishlist-led-01`

Issue:
FAQ accordion questions are functional interactive text, but Pass 01 used 21–27px Cormorant Garamond. This made functional content read like editorial display typography.

Correction:
- FAQ question title -> Inter 15px / 1.5 / weight 400
- mobile FAQ question -> 15px
- mobile summary row min-height -> 68px
- editorial page title and section headings remain Cormorant Garamond
- layout, 1480/1720 geometry, green emphasis, FAQ structure and accordion behavior are unchanged

Verification:
PASS — HTML/CSS/JS structure, 1480/1720 hierarchy, responsive rules, no page-level fixed-width overflow.

## Reference status convention going forward

For every new page presented to the user, explicitly state:
1. whether the external AI ZIP contained a reference page;
2. whether the repository already contains an older Project-2 page;
3. what the new draft was actually based on.

## Current known status

FAQ / Help:
- External AI ZIP reference: NO
- Repository old page: YES
- Old page: `preview/spatial-flow-faq-v1.html`

Track Order:
- External AI ZIP reference: NO
- Repository old page: YES
- Old page: `preview/spatial-flow-track-order-v1.html`

Track Order must therefore be treated as a redesign/harmonization of an existing Project-2 functional page, not as a page with no prior baseline.
