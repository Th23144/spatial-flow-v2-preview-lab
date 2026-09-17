# Shop V2 — Product card placeholder suppression source validation PASS

Date: 2026-09-17

## File validated

woocommerce/content-product.php
User-supplied current file after the bounded placeholder-suppression replacement.

## Validation result

PASS.

Checks:
- PHP syntax: PASS.
- placeholder array appears once.
- Material normalization appears once.
- Placement normalization appears once.
- Material placeholder suppression appears once.
- Placement placeholder suppression appears once.
- existing Woo category fallback remains present.
- View piece quick action remains present once.
- Placement output remains conditional and present once.
- indentation in the modified metadata-preparation block is structurally consistent.
- no duplicate card markup introduced.

## Preserved behavior

- real _sf_material retained when non-placeholder;
- real _sf_piece_reference retained;
- real _sf_placement retained when non-placeholder;
- category fallback retained when editorial meta is empty;
- Woo price/link ownership unchanged;
- YITH Wishlist unchanged;
- card hover/quick-action structure unchanged.

## Next step

Runtime-check the current Shop product cards on desktop:
- placeholder label strings must no longer leak into ordinary cards;
- real editorial subline/placement values still render when present;
- category fallback still renders where editorial metadata is absent.

If runtime is normal, proceed to Pagination strict review.

Status:
SOURCE VALIDATION PASS / AWAITING RUNTIME CARD CHECK.
