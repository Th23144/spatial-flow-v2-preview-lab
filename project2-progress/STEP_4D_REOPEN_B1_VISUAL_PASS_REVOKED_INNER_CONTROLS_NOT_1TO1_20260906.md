# Step 4D Reopen B1 — Visual PASS Revoked: Inner Controls Not 1:1 (2026-09-06)

## User correction
The outer Product Options frame removal succeeded, but the user correctly identified that the inner variation controls and quantity selector still differ materially from `preview/spatial-flow-product-v1.html`.

## Correction
The prior B1 visual PASS is revoked. B1 remains open.

## Reference control system
The reference page uses:
- text variation options: transparent/page-paper surface, 1px paper-line border, 12px 18px padding, 12px sans uppercase, 10px gap;
- selected text option: ink background + paper text + ink border;
- quantity: 1px ink border, paper background, 48px minus / 48px input / 48px plus, 56px height;
- add-to-cart: 56px height, square corners, ink background, 12px sans uppercase, .24em tracking;
- secondary actions below.

## Current mismatch
The current implementation still contains older Single Product variation-choice rules that render text options and image swatches as white card-like boxes, and the quantity border/color proportions are not yet the reference values. These are canonical CSS owners, not WooCommerce functional requirements.

## Product Truth boundary
The current real product has multiple attributes, including image-based color choices, while the static reference sample only shows text wrist-size options. Do not remove real WooCommerce attributes to imitate the sample. Instead translate each real control into the same reference visual language:
- text options use reference variation styling;
- image swatches remain functional image swatches but lose card-like white framing and use minimal reference-style outlines;
- quantity matches the reference dimensions/border exactly.

## Next action
Continue B1 as B1.1. Do not start B2 until these inner controls pass desktop + 390px review.
