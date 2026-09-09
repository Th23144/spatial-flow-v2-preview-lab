# Step 4D — B5 Hero Metadata / Subtitle / Shipping Final Accepted — 2026-09-09

## Scope
Single Product Hero backend-editable information layer and strict reference-parity structure.

## Final verified behavior
- Hero metadata is consolidated into one line.
- WooCommerce SKU is read from the real product SKU; no WordPress product-ID fallback is used as a fake SKU.
- Real WooCommerce product category is included.
- Existing per-product `Section 01 · Edition` (`_sf_piece_edition`) is reused by Hero metadata; e.g. backend `9 of one` renders as `EDITION OF 9` in Hero while Section 01 retains its own editorial form.
- Duplicate standalone category kicker was removed.
- `Hero · Product subtitle` is editable per product; empty hides; a real backend edit was confirmed to update the frontend subtitle.
- `Hero · Shipping / fulfilment override` is editable per product; a real backend override `Ships in 5–7 business days` was confirmed to replace the global default.
- Clearing the product shipping override was confirmed on mobile to restore the global default shipping note (`Complimentary shipping on orders over $120 · Worldwide` / current configured wording).
- Desktop Hero visual regression passed.
- 390px mobile Hero visual regression passed.
- WooCommerce price, variations, quantity and Add to Cart behavior were preserved.

## Final mobile evidence
The 390px mobile screenshot showed:
- `SKU · 100 · BRACELETS · EDITION OF 9`
- Product title
- Product subtitle
- `$20.00`
- restored global shipping note
- Placement Suggestion
- variations / quantity / Add to Cart continuing normally

## Acceptance
**B5: PASS / CLOSED.**

Do not reopen B5 without new visible or functional evidence.

## Documentation policy reinforced
Any backend-editable feature is not accepted merely because fields/code exist. Closure requires: identify backend path → user changes value → save → frontend change verified → empty/default/override behavior verified where applicable.

A detailed final backend-to-frontend operator guide remains a required project-close deliverable.
