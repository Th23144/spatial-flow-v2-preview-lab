# Project 2 · Step 4D REOPEN · Section 03 Care & Ritual implementation spec · 2026-09-10

## Context
B5 Hero metadata/subtitle/shipping-note is closed after backend-to-frontend verification on desktop and 390px mobile. Continue Single Product remediation with Section 03.

## Reference and responsibility
Static reference `preview/spatial-flow-product-v1.html` uses a Section 03 headed `Care, and a little ritual.` with three editorial care units: `Everyday`, `Seasonal`, and `Repair`.

Locked page responsibilities:
- Section 01 = what the product is
- Section 02 = editorial / wearing / symbolic reading
- Section 03 = practical care, cleaning, storage, usage and repair guidance
- Section 04 = real WooCommerce reviews only

## Product-truth boundary
- Existing `_sf_care` remains the compact Product Attributes · Care & Maintenance value.
- Section 03 is a separate, richer product-specific care layer.
- Do not hardcode the static reference's product-specific claims into live defaults.
- Section 03 body content is backend-editable per product.
- If all three Section 03 body fields are empty, the entire Section 03 does not render.

## Implementation contract
1. Bump child version 2.7.38 -> 2.7.39.
2. Add a separate `Section 03 · Care & Ritual` options group under WooCommerce Product Data → General.
3. Add backend fields for heading lead/emphasis and Everyday / Seasonal / Repair body content. Unit labels retain the reference editorial structure while bodies remain product-specific.
4. Save new fields through the existing `spatial_flow_save_product_story_admin_fields()` owner.
5. In `woocommerce/single-product.php`, read Section 03 data and render it after Section 02 and before Related Products / future Section 04 reviews.
6. Match the reference composition: Section number, large serif heading with italic emphasis, three numbered care columns on desktop; one-column editorial stack on mobile.
7. Do not change WooCommerce product/variation/cart/wishlist/checkout logic or Sections 01/02.

## Acceptance gate
Source inspection first. Only after PHP/CSS source PASS should manual frontend testing begin.

Manual test set must be stated up front:
- Product Data → General → Section 03 fields: enter explicit test content and save.
- Desktop: verify Section 03 heading and three columns.
- 390px mobile: verify one-column stack and no framing/overflow regression.
- Clear all three body fields once and save: verify Section 03 disappears; restore desired content afterward if needed.

No additional routine viewport is required unless a visible anomaly appears.

Final project closeout still requires the detailed backend-to-frontend operations manual.