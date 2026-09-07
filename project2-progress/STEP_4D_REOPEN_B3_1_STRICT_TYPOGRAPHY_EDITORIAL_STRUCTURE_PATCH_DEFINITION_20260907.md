# Step 4D Reopen B3.1 — Strict Typography + Editorial Structure Patch Definition

Date: 2026-09-07
Status: OPEN / PATCH DEFINITION

## Why B3 is reopened
The previous B3 pass aligned the broad two-column composition, but current runtime comparison against `preview/spatial-flow-product-v1.html` shows that strict 1:1 has not yet been achieved.

The remaining differences are structural typography differences, not cosmetic micro-differences:

1. Section 01 left metadata currently renders as `REFERENCE / CATEGORY / MATERIAL / PLACEMENT`, with browser/theme weight differences between `dt` and `dd`. The reference uses one unified mono typography system and the semantic rows `MATERIAL / EDITION / MADE / STUDIO`.
2. `SECTION · 01` must use the reference terracotta mono treatment.
3. `The piece, slowly.` must use the reference 22px italic serif treatment, with no oversized display-heading behavior.
4. The right copy must use the reference paragraph typography, 88px drop cap, and explicit centered bilingual pull-quote structure.
5. The current long description is still backend-owned. The theme must not hard-code product prose. The pull quote is represented through semantic `<blockquote>` content in the WooCommerce long description.

## Reference authority
`preview/spatial-flow-product-v1.html` is the visual authority for this section.

Reference CSS values include:
- `.long-section`: `padding: 96px var(--gutter)`
- `.copy-grid`: `5fr 7fr`, `gap: 80px`
- `.copy-aside`: mono 11px, 0.24em tracking, line-height 2, muted color, 24px top padding
- `.copy-aside b`: serif italic 22px, weight 400, line-height 1.3
- `.copy-body p`: 16px, line-height 1.85, ink-soft, margin-bottom 22px
- lede drop cap: serif italic 88px, weight 300, line-height .85
- pull quote: Chinese serif 22px / 1.7, centered, 18px vertical padding, paper-line borders; English italic serif 16px below

## Backend editability / Product Truth
Do not hard-code reference sample values. Add dedicated per-product fields for Section 01 metadata:
- `_sf_piece_edition`
- `_sf_piece_made`
- `_sf_piece_studio`

Reuse existing `_sf_material` for the Material row.

The frontend Section 01 rows become:
- Material
- Edition
- Made
- Studio

Empty fields remain hidden.

The WooCommerce long description remains the single source for Section 01 prose. A bilingual pull-quote must be authored as a semantic blockquote in that long description; the theme only styles it.

## Files authorized for B3.1
- `functions.php`
- `single-product.php`
- `assets/css/spatial-flow.css`

No JS changes. No WooCommerce variation/cart logic changes. No hard-coded product story copy.

## Version
Bump `SPATIAL_FLOW_CHILD_VERSION` from `2.7.28` to `2.7.29`.

## Acceptance gate
1. Returned-source exact-diff / syntax audit first.
2. Then populate Section 01 test metadata and convert the existing bilingual line to a semantic quote in product long description.
3. Desktop current visual comparison against reference.
4. 390px mobile regression.
5. Only after both views pass may B3 be marked FINAL PASS again.
