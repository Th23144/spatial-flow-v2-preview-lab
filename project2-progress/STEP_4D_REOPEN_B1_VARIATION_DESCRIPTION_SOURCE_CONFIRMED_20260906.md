# Step 4D Reopen · B1 follow-up · Variation description source confirmed

Date: 2026-09-06

## Observation
The unexplained numeric text immediately above the dynamic variation price on Single Product changed together with the selected WooCommerce variation.

## Runtime confirmation
The user opened WooCommerce Product data -> Variations and confirmed the source field is the native per-variation Description field. The test placeholder values were removed there.

## Ownership conclusion
- The text is not owned by Spatial Flow per-product custom fields such as `_sf_material`, `_sf_suitable_space`, `_sf_care`, `_sf_gift_service`, or `_sf_placement`.
- It is native WooCommerce variation data and should remain available for real per-variation copy.
- Do not hide or remove the native variation-description capability merely because placeholder test text was present.

## Status
Source mystery: CLOSED.
No theme source change required for this item.

Next: proceed to B2 Product Attributes visual flattening.