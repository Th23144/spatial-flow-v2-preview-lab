# Project 2 · Step 4D REOPEN · Related Products strict 1:1 audit · 2026-09-11

## Stage
Single Product remediation. Related Products / Complete The Room was reopened by fresh user screenshot evidence before Gift CTA work.

## Evidence reviewed
- fresh user screenshot of static reference
- fresh user screenshot of current live site
- `preview/spatial-flow-product-v1.html`
- current returned `woocommerce/single-product.php`
- current returned `assets/css/spatial-flow.css`

## Conclusion
The current live Related Products block is materially not strict 1:1. This is a structural/compositional mismatch, not a minor spacing defect.

## Reference composition
Static reference uses:
- heading `Pieces of a similar weight.` with italic `weight`
- right-side link `View the full edit →`
- four open editorial items in a 4-column grid
- image aspect ratio 4/5
- no outer card border/background shell
- product title below image
- SKU + edition metadata line
- price line
- thin divider + italic placement/editorial note
- image hover treatment `View piece →`
- 40px desktop column gap
- section width/max/gutter consistent with the editorial page

## Current live/source composition
Current template uses:
- kicker `Related product navigation`
- heading `Complete the room`
- explanatory paragraph
- no `View the full edit →` link
- category label above each title
- bordered white/translucent card shell
- fixed/clamped landscape-ish image heights rather than 4/5 editorial image blocks
- price + visible `Explore` button row
- no SKU/edition line
- no placement/editorial note line
- additional current/legacy `.sf-related-products` CSS ownership layers

## Data-ownership classification
### Can be made strict-reference-like using existing real data
- product image: WooCommerce image
- product title: WooCommerce product name
- price: WooCommerce price HTML
- product link: WooCommerce permalink
- SKU: WooCommerce SKU
- edition: existing `_sf_piece_edition` product meta already used elsewhere on Single Product
- placement/editorial note: existing `_sf_placement` per-product meta can be read for each related product
- `View the full edit →`: can link to the real shop/archive target rather than a fake URL

### Truthful empty-state rule required
If a related product lacks SKU, edition or placement note, do not fabricate reference sample values. Render only the available dynamic metadata and preserve layout gracefully.

## Required remediation direction
1. Replace the current section heading structure with the reference heading/link composition.
2. Remove kicker and explanatory paragraph from this block.
3. Remove white/bordered card-shell treatment and visible Explore button.
4. Restore open editorial four-column cards with 4/5 image treatment.
5. Add dynamic SKU/edition metadata using real product data only.
6. Add dynamic placement note from `_sf_placement` when present.
7. Restore restrained hover affordance on the image while keeping real links.
8. Audit and consolidate the overlapping current/legacy `.sf-related-products` CSS rather than appending another patch layer.
9. Preserve responsive/mobile production behavior; mobile acceptance is separate from desktop.

## Scope protected
Do not change:
- related product selection/query ownership
- WooCommerce pricing ownership
- WooCommerce product URLs
- product images
- Section 03 accepted behavior
- Reviews omission decision
- Cart / Checkout / Thank You

## Status
`Related Products / Complete The Room`: AUDIT COMPLETE / REMEDIATION REQUIRED / NOT 1:1

## User acceptance
Not yet accepted. No implementation authorized by this audit alone.

## Current stop point
Bounded remediation plan can now be frozen from the audit findings.

## Exact next action
Present the strict-reference target and data mapping to the user; if the direction is accepted, record the intended source delta before issuing manual edit instructions.