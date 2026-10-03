# Final Production Wishlist — Architecture Correction: Native Table -> Authority Adapter

Date: 2026-10-03
Project: Spatial Flow V2 / Project 2

## Trigger

User rejects current Local result as far from the accepted 1:1 Wishlist authority.

## Diagnosis

The current production approach is structurally wrong for strict 1:1:
- it keeps YITH's native table as the visible layout;
- CSS attempts to reinterpret table cells as the editorial composition;
- the accepted authority does not use a table composition at all.

Accepted authority structure is:
- `.item`
- `.visual`
- `.copy`
- `.meta-top`
- `.name`
- `.blurb`
- `.price-row`
- `.actions`

The live screenshot also proves that current saved Customizer values override the newly changed defaults, so changing default strings alone does not reproduce authority copy.

## Correct production strategy

Do NOT keep patching the visible YITH table.

Build a bounded production adapter:
1. YITH remains the state/action/data owner.
2. Keep the native YITH form/table in the DOM as a hidden source/behavior layer.
3. Create a visible authority layer using the exact accepted semantic item structure.
4. Move or reference the real YITH/Woo action nodes so remove/add-to-cart behavior stays native.
5. Populate real product image/title/price/stock/category and real Woo short description; do not fabricate product copy.
6. Port the accepted Wishlist authority layout rules directly instead of approximating them through table-cell CSS.
7. Use versioned authority copy keys or explicitly migrate existing Wishlist Customizer values so stale saved values cannot override the accepted baseline.

## Scope

Wishlist only.
Header/Footer remain protected.
No Search work begins.

## Status

OLD VISIBLE-TABLE APPROACH = ABANDONED.
AUTHORITY ADAPTER APPROACH = ACTIVE DESIGN/IMPLEMENTATION TARGET.