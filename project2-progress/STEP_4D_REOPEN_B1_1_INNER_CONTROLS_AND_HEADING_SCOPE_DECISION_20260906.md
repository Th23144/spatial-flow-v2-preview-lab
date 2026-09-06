# Step 4D Reopen B1.1 — Inner controls + heading scope decision

Date: 2026-09-06

## User feedback
After B1 outer-frame cleanup, user confirmed the outer white frame was removed but correctly noted that the inner variation controls, quantity control, spacing, and the custom `Choose Options` heading still do not match the static reference closely enough.

## Decision
- B1 remains OPEN.
- B2 must not start yet.
- The `Choose Options` heading and `WooCommerce attributes / variations` helper text are theme-added presentation markup, not WooCommerce native variation logic. They may be removed without changing WooCommerce variation selection, pricing, stock, quantity, or add-to-cart behavior.
- Spacing, label typography, visual choice dimensions, choice borders/backgrounds, selected-state styling, quantity dimensions, and add-to-cart dimensions are presentation-only and may be adjusted in CSS while keeping native WooCommerce selects/form/cart logic intact.
- Native WooCommerce ownership remains authoritative; visual swatches continue to mirror/sync the native variation form.

## B1.1 target
- Remove the custom Options heading block to align with reference.
- Restyle variation labels to small mono/editorial labels.
- Normalize spacing between fields.
- Restyle text choices to paper-tone square pills/labels with black selected state.
- Restyle image choices to a restrained square image treatment without white-card framing.
- Match quantity control to reference proportions (3 x 48px, 56px high desktop).
- Preserve Add to Cart, variation sync, stock/price logic, and native form behavior.

Status: READY FOR MANUAL PATCH.
