# Step 4D-REOPEN-A · Single Product Final Remediation Plan · 2026-09-04

## Status

Planning complete. No implementation started yet.

The plan merges:
- repository audit findings,
- current reference/current-page screenshot comparison,
- user visual objections,
- the 2026-09-04 Section 02 editorial-reading decision.

Current page binary status remains:

```text
Single Product: Not done
```

## Product-page content architecture

### Section 01 · The Piece
Purpose: describe the product itself.

Content domain:
- material,
- construction,
- physical/design character,
- product-specific description,
- craftsmanship/details,
- item-specific editorial copy.

Keep this distinct from Section 02.

### Section 02 · Editorial Reading / Wearing Story
Purpose: explain how the piece may be read, worn, interpreted or paired.

This section is not restricted to maker biography.

Potential content:
- ring-finger symbolism,
- wrist/hand placement interpretations,
- zodiac / rising-sign editorial associations,
- cultural symbolism,
- styling and pairing guidance,
- wearing scenarios,
- room/context suggestions where appropriate.

Preferred direction: preserve the section structurally rather than hide it whenever a maker story is unavailable.

Do not make guaranteed supernatural/medical claims. Use editorial framing such as traditional associations, common interpretations, styling/wearing suggestions, or symbolic readings.

Data-source hierarchy should later support:
1. product-specific content,
2. category/type fallback content,
3. restrained global editorial fallback.

Section title should be backend-editable. Working title direction: `Reading the piece.`

### Section 03 · Care & Ritual
Purpose: real practical care and use guidance.

This is mandatory in the final page architecture.

Potential content:
- cleaning,
- storage,
- water/chemical exposure,
- wearing precautions,
- maintenance,
- simple ritual/use suggestions where product-appropriate.

It should not merely duplicate the short Product Attributes `Care & Maintenance` card.

Recommended placement: after Section 01/02, before Reviews/Related Products. Do not move above Section 01 by default.

### Section 04 · Quiet Notes / Reviews
Purpose: real customer review presentation.

Rules:
- use real approved WooCommerce reviews only,
- never fabricate users, quotes, dates, ratings or review counts,
- when no real reviews exist, hide the review-content body or use a truthful restrained empty/review-entry state,
- section structure may remain prepared for future real data.

## Mandatory visual remediation

### A. Product options / variation / Add to Cart area
Current defect: strong white rectangular frame/card surface diverges materially from the static reference and creates the unwanted 'picture-frame' feeling.

Required direction:
- preserve WooCommerce native variation, quantity, pricing and Add to Cart behavior,
- restyle only,
- flatten the visual surface into the page,
- remove unnecessary large white-card framing,
- align borders, spacing and hierarchy with the reference.

Add-back candidate controls under quantity/Add to Cart:
- Wishlist,
- Share.

These must use real existing site/Woo functionality or a safe native share mechanism; do not fake behavior.

### B. Product Attributes area
Current defect: current large white framed panel and large `Material, Space, And Care` heading diverge strongly from the reference information-band treatment.

Required direction:
- preserve backend-editable Product Attributes data ownership,
- flatten/remove the oversized white frame,
- move toward an open horizontal information band,
- current recommendation: remove the large extra heading unless fresh reference/runtime review produces a stronger reason to retain it,
- retain the individual attribute labels/content.

### C. Related Products / Complete The Room
Current defect: Woo-style white rectangular product cards create the same unwanted framed-card appearance.

Required direction:
- preserve dynamic WooCommerce recommendations/products/links/prices,
- do not hardcode recommendation products,
- visually separate image and text rather than enclosing the whole item in a large white card,
- move closer to the reference's open editorial product-grid treatment.

Also audit historical unscoped `.sf-related-products` CSS ownership before deleting or consolidating anything.

## Missing / deferred reference sections

### Section 01
Previously implemented. Current implementation/display condition must be re-audited. If hidden because product long description is empty, preserve truthful content-driven behavior; do not fabricate product copy.

### Section 02
No longer treated as an optional maker-story-only module. It is now part of the intended final architecture as the editorial reading/wearing layer.

### Section 03
Must be implemented as an independent practical care section.

### Section 04
Real WooCommerce Reviews only. No fake reviews.

### Closing Gift CTA
Reference has a bottom gift-oriented conversion block before the footer.

Decision: retain as a recommended final-page section. It should connect to real gift/packaging capability and editable copy, not static fake service claims.

### Closing Editor's Note
Historical reference/record ambiguity remains. Under the new architecture this should not be blindly restored as another overlapping long-form text block. Reassess after Sections 01-03 and Gift CTA are implemented; either give it a distinct purpose or formally omit it.

## Implementation priority

### Phase 1 · Current visual skeleton correction
1. remove unwanted frame/card feeling from variation/Add to Cart area,
2. flatten Product Attributes area,
3. flatten Related Products cards,
4. confirm Section 01 current rendering/hidden condition,
5. preserve WooCommerce functionality and backend-editable owners.

### Phase 2 · Content architecture
1. implement/restore Section 01 correctly,
2. implement Section 02 editorial-reading data model and display,
3. implement Section 03 practical care data model and display,
4. prepare Section 04 real Woo Reviews behavior,
5. add Gift CTA,
6. decide Closing Editor's Note explicitly.

### Phase 3 · utility controls and cleanup
1. Wishlist control,
2. Share control,
3. audit/consolidate Single Product CSS ownership,
4. desktop + mobile strict reference regression,
5. backend editability regression,
6. WooCommerce functional regression.

## Hard boundaries

```text
- preserve WooCommerce variation/quantity/add-to-cart authority
- preserve dynamic prices/product data/recommendations
- preserve existing backend-editable Product Attributes / Placement / Trust ownership unless deliberately replaced with a better editable owner
- no fabricated reviews
- no fabricated maker biographies
- no hardcoded production product data
- no append-only CSS patch pile by default
- mobile is an independent acceptance state
- Single Product cannot return to Completed 1:1 until fresh current-live final acceptance
```

## Next executable action

Before editing, obtain the user's current live source baselines that own this page, then make a bounded source map and execution plan.

Expected owners from historical Step 4D:

```text
woocommerce/single-product.php
assets/css/spatial-flow.css
functions.php
```

Additional JS or plugin files should be requested only if source inspection proves they are needed.
