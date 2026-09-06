# Step 4D Reopen B3 — Section 01 Strict Editorial Alignment Start — 2026-09-06

## Reference owner
`preview/spatial-flow-product-v1.html` Section 01 (`The piece, slowly.`).

## Current real data owner
WooCommerce product long description / `post_content` rendered through `the_content`. This owner must remain unchanged. Section 01 continues to hide automatically when the product has no long description.

## Reference structure confirmed
- Long section uses 96px vertical padding on desktop.
- Two-column copy grid: 5fr / 7fr with 80px gap.
- Left `copy-aside` is a compact mono editorial block: 11px, .24em tracking, uppercase, line-height 2, one short top rule, 24px top padding.
- Left title `The piece, slowly.` is a compact italic serif subheading, 22px, not a large display headline.
- Right copy uses 16px / 1.85 body typography and a large 88px italic terracotta drop cap.
- Pull quote is a centered editorial interlude with top/bottom hairlines and restrained bilingual styling when such content exists.
- Responsive breakpoint collapses to one column; mobile long-section vertical padding is 56px.

## Current drift confirmed
- Current Section 01 left title is far too large (up to 58px) and dominates the block.
- Current Section 01 spacing compounds margin-top plus padding, causing excessive blank space after Product Attributes.
- Current left metadata uses label/value stacked pairs instead of the reference's tighter editorial line treatment.
- Body typography is heavier/darker in the live screenshot than the reference feel.
- Current two-column proportions are nominally correct (5fr/7fr), but overall spacing and hierarchy are not strict 1:1.

## B3 boundary
B3 is visual/editorial alignment only. Do not replace WooCommerce long-description data ownership and do not invent product copy, stories, quotes, or reviews. Existing rich-content support (paragraphs, headings, blockquotes, images, lists) stays available.

## Status
**B3 = OPEN / STARTED.**
