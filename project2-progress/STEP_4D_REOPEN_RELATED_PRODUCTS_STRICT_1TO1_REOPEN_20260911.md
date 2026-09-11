# Project 2 · Step 4D REOPEN · Related Products strict 1:1 reopen · 2026-09-11

## User correction
The user changed the immediate plan before proceeding to Gift CTA / closing sections.

Fresh side-by-side screenshots show that the current live Related Products / Complete The Room area still materially diverges from the static reference and therefore cannot be treated as strictly 1:1.

## Reference screenshot / intended composition
The reference shows:
- heading: `Pieces of a similar weight.`
- small right-side link: `VIEW THE FULL EDIT →`
- four open editorial product items
- image blocks without enclosing card frames
- product title directly below image
- mono metadata / edition line
- price line
- restrained italic editorial note beneath a thin divider
- no large kicker, no large two-line `Complete The Room` heading, no descriptive paragraph, no per-card `EXPLORE` button, no white rectangular card shells

## Current live screenshot / observed divergence
The current live implementation shows:
- kicker: `RELATED PRODUCT NAVIGATION`
- large two-line heading: `Complete The Room`
- explanatory paragraph
- large divider before product grid
- four Woo-style bordered/boxed cards with white body panels
- category label
- large title
- price
- `EXPLORE` button
- materially different image/card proportions and vertical rhythm

## Decision
The Related Products surface is formally REOPENED for strict 1:1 remediation.

The previously planned Gift CTA discussion is paused until this earlier mismatch is resolved.

## Scope constraints
- preserve dynamic WooCommerce related/recommended product ownership
- preserve dynamic product links, titles, prices and images
- do not hardcode the four reference products
- do not fabricate edition metadata or editorial notes without a real backend-editable source
- audit current live/source ownership before issuing edits
- distinguish exact visual parity from unavailable dynamic-content fields

## Status
`Related Products / Complete The Room`: REOPENED / NOT 1:1

`Single Product`: still `Not done`

## Current stop point
Audit the static reference markup/CSS for the Related Products block against the current live implementation and current source ownership.

## Exact next action
1. re-open the reference block and identify exact composition rules;
2. audit current `single-product.php` / related-product rendering and `.sf-related-products` CSS ownership;
3. classify each mismatch as visual-only versus data-model-dependent;
4. freeze a bounded remediation plan before editing;
5. do not proceed to Gift CTA until this area is accepted.