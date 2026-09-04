# Step 4D-REOPEN-A · Section 02 editorial-reading direction · 2026-09-04

## User decision / design question

The user agrees that Section 01 should remain the primary product-detail/editorial description, but does not want Section 02 to disappear merely because a real maker/origin story is unavailable. The user values Section 02 as an important visual/editorial layer of the Single Product page.

The user proposes repurposing Section 02 from a literal maker-story-only block into a broader product-specific editorial interpretation / wearing guidance layer. Example topics include:

- ring finger symbolism and which finger a ring may suit;
- bracelet left/right wrist interpretation;
- zodiac / rising-sign associations;
- symbolic or styling guidance tied to how the piece is worn;
- other product-category-specific cultural/editorial readings.

## Direction accepted for planning

Section 01 and Section 02 should have clearly separated responsibilities:

```text
Section 01 · The Piece
= what the product is
= material, form, construction, tactile/visual character, product-specific description

Section 02 · Editorial Reading / Wearing Story
= how the piece may be worn, read, interpreted or styled
= symbolic/cultural/astrological context where appropriate
= product-category-specific guidance rather than fabricated maker biography
```

This avoids the old conflict where both sections can feel like generic “story” copy.

## Important editorial truth boundary

Section 02 must not present symbolic, astrological, spiritual or cultural interpretations as verified physical facts.

Preferred framing includes language such as:

- “traditionally associated with…”
- “often read as…”
- “in astrological practice…”
- “one way to wear it is…”
- “for those who use zodiac symbolism…”

Do not fabricate makers, studios, origin histories, reviews, clinical effects, guaranteed outcomes or personal histories merely to fill the section.

## Proposed content architecture

Section 02 should be designed to remain visually present without requiring a long unique biography for every product.

Preferred content-source hierarchy:

```text
1. per-product Section 02 override when real product-specific editorial copy exists
2. product-category editorial fallback (ring / bracelet / necklace / etc.)
3. restrained global editorial fallback only when genuinely applicable
```

This allows the block to remain present while avoiding fake product-specific facts.

Possible Section 02 content units:

```text
- one short editorial title
- one compact 120–250 word narrative
- optional supporting image/detail crop
- 2–3 small fact/reading rows such as Placement / Symbolism / Pairing
```

## Relationship to other page sections

```text
Top Placement Suggestion
= one-line quick recommendation / teaser

Section 01
= product itself

Section 02
= expanded wearing/symbolic/editorial interpretation

Section 03 · Care & Ritual
= practical care, cleaning, storage and usage guidance

Section 04 · Quiet Notes / Reviews
= real WooCommerce reviews only; no fabricated social proof
```

Section 02 therefore should not duplicate the top Placement Suggestion or Section 03 care instructions.

## Current planning status

No source code changes yet.

This decision must be merged into the final Single Product remediation plan together with the user's already identified visual issues:

- remove white-frame/card feeling from variation/add-to-cart area;
- remove white-frame/card feeling from attributes area;
- reconsider/remove the current large `Material, Space, And Care` heading;
- restore/rework Section 01;
- implement Section 03;
- decide Section 04 real-review behavior;
- restore/decide gift CTA above footer;
- restyle Related Products away from white framed cards;
- consider Wishlist + Share controls under add-to-cart.
