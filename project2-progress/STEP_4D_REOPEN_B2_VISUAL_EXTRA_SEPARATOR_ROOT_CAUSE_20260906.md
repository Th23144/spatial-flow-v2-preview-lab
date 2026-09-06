# Step 4D Reopen B2 — Product Attributes Visual Extra Separator Root Cause — 2026-09-06

## User evidence
Desktop and 390px mobile screenshots after B2 showed the Product Attributes information band itself improved, but there appeared to be one extra horizontal separator before Section 01.

## Root cause
The B2 information band intentionally owns its own bottom separator through `.sf-product-v2-attributes { border-bottom: ... }`.

The existing Section 01 canonical CSS independently still owns a full-width top separator through `.sf-product-v2-piece { border-top: 1px solid rgba(31,25,22,.1); }`.

Because Section 01 also has a positive top margin, the two full-width lines become visibly separated and read as a duplicate separator. Section 01 additionally has `.sf-product-v2-piece__aside { border-top: ... }`, which is the intended local editorial rule above the Section 01 left/aside column and should remain.

## Decision
Remove only the full-width `.sf-product-v2-piece` top border. Preserve:
- Product Attributes top and bottom separators;
- Section 01 margin and padding;
- Section 01 bottom border;
- Section 01 aside/local top border;
- all WooCommerce/product-data logic.

This is a tiny visual ownership correction at the B2/B3 boundary, not a reopening of B1 or a redesign of Section 01. B3 still remains the next substantive phase after B2 closes.
