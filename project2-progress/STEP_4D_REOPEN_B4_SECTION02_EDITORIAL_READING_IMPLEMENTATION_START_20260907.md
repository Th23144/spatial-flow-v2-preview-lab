# Step 4D Reopen B4 · Section 02 Editorial Reading implementation start · 2026-09-07

## Trigger
B1 Product options, B2 Product Attributes, and B3/B3.1 Section 01 are accepted. User instructed to begin the next Single Product step: Section 02.

## Existing decision inherited
Section 02 must no longer be treated as a fabricated maker-biography-only block. Its responsibility is the second editorial layer: how the piece may be worn, read, interpreted, styled, paired, or understood through optional cultural/symbolic/astrological frameworks.

Section 01 remains the product itself. Section 03 remains practical Care & Ritual. Section 04 remains real WooCommerce reviews only.

## Reference authority
`preview/spatial-flow-product-v1.html` remains the visual authority for Section 02 composition:
- alternate paper-deep background;
- `Section · 02` mono kicker;
- large serif heading with an italic emphasis word and second line;
- 5fr / 7fr media-copy grid;
- 4:5 supporting image;
- right-side serif lead, terracotta italic context line, compact narrative paragraphs;
- three small editorial metadata cells;
- single-column responsive collapse at <=1100px.

The literal maker identity/content in the static reference is NOT production data authority and must not be copied or fabricated.

## B4 implementation direction
### Data ownership
Per-product WooCommerce admin fields will own Section 02 content. The normal authoring path must not require HTML.

Planned fields:
- Section 02 heading lead
- Section 02 heading emphasis
- Section 02 heading tail
- Section 02 lead
- Section 02 context line
- Section 02 narrative (plain textarea; blank lines become paragraphs)
- Section 02 reading
- Section 02 pairing

The third metadata cell may reuse the existing backend-editable Suitable Space field as `Context`, avoiding redundant duplicate storage.

### Image ownership
Use existing WooCommerce product media rather than creating a second media system:
- prefer the first gallery image after the featured image;
- fall back to featured image when necessary;
- therefore the Section 02 supporting image remains editable through the normal Product Gallery.

### Title default
When heading-part fields are blank, preserve the reference typographic structure with a semantically corrected default:

`The reading` + italic `behind` + second line `the piece.`

This keeps the reference composition while matching the broader editorial-reading role.

### Truth boundary
Do not hardcode maker biographies, studios, historical claims, reviews, medical claims, guaranteed metaphysical outcomes, or fake social proof.

### Rendering / fallback
Per-product content is primary. B4 should keep a restrained truthful fallback path so Section 02 is not tied to having a maker story. Category-specific editorial fallback may be added only if needed after the first live implementation; it must not be invented merely to fill space.

## Source owners
Bounded to:
- `functions.php`
- `woocommerce/single-product.php`
- `assets/css/spatial-flow.css`

No JS is required for the first implementation.

## Version target
`2.7.30 -> 2.7.31`

## Acceptance
1. source exact-diff / PHP / CSS validation;
2. backend editability check;
3. desktop reference comparison;
4. 390px independent mobile acceptance;
5. Section 02 only closes after user visual acceptance.
