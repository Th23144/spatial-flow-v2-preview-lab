# Shop V2 — Post-user-review revised defect matrix

Date: 2026-09-17

## Trigger

User supplied fresh live/reference screenshots and corrected the previous product-card diagnosis.

This record supersedes the placeholder-suppression recommendation for ordinary product cards and any plan to treat the first product card's Material / Placement output as a defect.

## Corrections

### A. Product-card placeholder suppression was WRONG for the current Shop intent

The first live product card is intentionally the only card currently populated with the extra editorial fields.

Its structure matches the static reference pattern:
- title
- editorial/material line
- price
- placement note

The user explicitly confirms this is desired and that other products simply have not yet been populated with the same backend fields.

Therefore:
- DO NOT suppress Product Attributes · Material;
- DO NOT suppress Summary · Placement Suggestion;
- restore the previous direct product-meta behavior in content-product.php;
- missing editorial fields on other products are catalog population, not a template defect.

### B. Hero title remains OPEN

Fresh live screenshot still shows:
- three-line title composition;
- capitalization inconsistent with the intended Objects for / the Quiet Room. presentation.

Current source confirms:
- archive template has no controlled editorial br owner;
- Shop CSS still contains the previously identified root-Shop max-width: 560px, which forces the title into three lines.

Correct direction:
- remove the 560px forced-width workaround;
- explicitly prevent inherited capitalization if needed;
- implement a controlled two-line editorial break while preserving backend editability.

### C. Product count per page should be 12, not 20

Fresh live Shop:
- 4 columns
- 20 products on first page
- 5 rows
- count text Showing 1 — 20 of 92

Reference composition:
- 4 columns
- 12 cards
- 3 rows

User explicitly prefers the reference 3-row density.

Correct direction:
- change Woo product archive page size to 12 through the real query/loop owner;
- do NOT hide extra products with CSS;
- allow current count text and pagination to update from the real query automatically.

For 92 live products, 12-per-page naturally yields 8 pages, which also produces a cleaner reference-like pagination horizon.

### D. Contact duplication

Current Shop renders both:
1. sf-shop-v2-closing-note / Write to the editors;
2. shared template-parts/product-contact-band newsletter/guidance block immediately below.

User decision:
- these are overlapping contact/conversion surfaces;
- the bottom shared product-contact-band is visually undesirable on Shop and should be removed from Shop;
- the upper reference-style closing editorial note should remain.

Important ownership boundary:
- remove only the Shop call to the shared template part;
- do NOT delete the shared component itself because it is reused elsewhere (e.g. Services/Home-related guidance).

### E. Upper closing-note function

The static Shop reference uses a CTA-only Write to the editors interaction rather than an embedded contact form.

Current archive source already gives the CTA a configurable URL and falls back to /contact/.

Therefore:
- no inline form should be added to the Shop closing note;
- the correct functional model is CTA -> real Contact destination;
- end-to-end completion depends on the Contact page/form later being finalized;
- keep this as a functional dependency, not a reason to duplicate a second contact form on Shop.

## Revised implementation order

1. Roll back the incorrect product-card placeholder suppression.
2. Fix Hero title: capitalization + controlled two-line break; remove 560px workaround.
3. Set Woo product archives to 12 products per page.
4. Revalidate Product Cards (structure only; do not require all catalog fields to be populated).
5. Revalidate Pagination under 12-per-page.
6. Remove Shop-only product-contact-band call.
7. Keep/refine upper Closing Note and verify its CTA destination.
8. Mobile pass for non-frozen Shop surfaces.
9. Frozen Custom Studio / DIY Signature Feature remains the final Shop blocker.

## Status

REVISED DEFECT MATRIX ACCEPTED AS CURRENT PLAN.
NO CODE CHANGE IN THIS RECORD.