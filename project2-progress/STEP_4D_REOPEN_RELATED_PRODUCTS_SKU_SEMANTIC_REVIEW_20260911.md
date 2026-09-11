# Project 2 · Step 4D-REOPEN · Related Products SKU semantic review · 2026-09-11

## Trigger
The user confirmed the current products are still provisional and that the SKU / Edition / Placement values used in the latest screenshot are temporary test data that will be removed later.

The user also questioned why the visible `SKU` line does not match their understanding of SKU.

## Clarification
The current Related Products implementation maps the reference's public-looking code line to WooCommerce native product SKU via `WC_Product::get_sku()`.

That mapping is technically valid but may be semantically wrong for the final product architecture:
- WooCommerce SKU is fundamentally an inventory / stock-keeping identifier.
- For variable products, a parent product can have its own SKU and each variation can also have a distinct SKU.
- The static reference's `SF-RQ-003` style string behaves visually more like a public editorial product reference / piece code than a necessarily internal inventory SKU.
- Therefore a public-facing reference code and WooCommerce SKU should not be assumed to be the same concept without an explicit product decision.

## Current evidence
The user's latest runtime screenshot confirms the current template can render the native SKU line and `_sf_placement` line when temporary values are populated.

This proves the rendering/data path works, but the temporary test data is not production product truth and must not be treated as final content.

## Decision state
No code change is authorized by this record.

The product-level ownership decision is now PENDING between:
1. keep native WooCommerce SKU as the public reference code, or
2. separate concerns: keep WooCommerce SKU internal/operational and add/use a dedicated backend-editable public `Reference / Piece Code` field for the editorial Related Products line.

Given the variable-product model and the static reference language, option 2 is likely the cleaner architecture, but user decision is required before changing source ownership.

## Stop point
Related Products remains NOT CLOSED / NOT final strict 1:1 until the public identifier ownership is decided.
