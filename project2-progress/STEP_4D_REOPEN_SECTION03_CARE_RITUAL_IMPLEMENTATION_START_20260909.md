# Project 2 · Step 4D REOPEN · Section 03 Care & Ritual implementation start · 2026-09-09

## Trigger
B5 Hero metadata/subtitle/shipping-note work is closed after real backend-to-frontend verification on desktop and 390px mobile. Continue the reopened Single Product remediation.

## Source-of-truth direction
The strict Single Product re-audit defines the long-page responsibilities as:

- Section 01 = what the product is
- Section 02 = editorial / wearing / symbolic reading
- Section 03 = practical care, cleaning, storage, usage and repair guidance
- Section 04 = real WooCommerce reviews only

The static reference contains a three-column Section 03 headed `Care, and a little ritual.` with `Everyday`, `Seasonal`, and `Repair` units.

## Product-truth boundary
Section 03 must not duplicate the short `_sf_care` Product Attributes value. `_sf_care` remains a compact attribute. Section 03 is a richer, dedicated editorial-care layer.

Do not hardcode fake product-specific care claims. The long-form content must be backend-editable per product. If no dedicated Section 03 body content exists, the section should not fabricate content merely to preserve height.

## Implementation scope
Next implementation pass should:

1. Add dedicated WooCommerce product fields for Section 03 heading and three care units.
2. Save those fields through the existing product-meta save owner.
3. Render Section 03 after Section 02 and before Reviews / Related Products.
4. Match the static reference composition: section number, large serif heading with italic emphasis, three editorial care columns numbered i / ii / iii.
5. Preserve responsive behavior: three columns on desktop, one-column editorial stack on mobile.
6. Keep all WooCommerce product, variation, cart, wishlist, checkout, payment, Section 01 and Section 02 logic untouched.

## Acceptance rule
This section cannot be closed by source inspection alone. After source PASS, the user must be shown exactly where the Section 03 backend fields live, must edit them, save the product, and verify the corresponding frontend content on desktop and 390px mobile.

Final project closeout still requires a detailed backend-to-frontend operations manual mapping every editable field/control to its frontend location and empty/default behavior.
