# Step 4D Reopen B5 — Hero Subtitle + Shipping/Fulfilment Note Implementation Start — 2026-09-08

## Context
B4 Section 02 Editorial Reading is closed after desktop scroll behavior and mobile progressive disclosure were visually accepted. Do not reopen B4 without new evidence.

The next unresolved Single Product parity gap is the Hero reference-copy layer identified earlier from reference-vs-live comparison:
1. Reference has a short editorial subtitle directly below the product title.
2. Reference has a small shipping/fulfilment line associated with the price block.

The current live template renders title -> price -> Placement Suggestion, so both reference layers are currently absent.

## Product Truth / ownership decision
Do not hard-code the static reference operational copy (`Free shipping over $80 · Ships in 3 days from Lisbon`) because it is not the current store truth.

Ownership for B5:
- Product subtitle: per-product backend-editable field; empty means hidden with no phantom spacing.
- Shipping/fulfilment note: global Single Product default in the existing Spatial Flow product-detail Customizer section, plus optional per-product override.
- Resolution priority: product override -> global default -> hidden if both are empty.
- Suggested initial global default reflects current site truth: `Complimentary shipping over $120 · Worldwide`.
- WooCommerce remains authoritative for product title, price, product/variation logic, stock, cart and checkout.
- No JavaScript required.

## Intended files
- `functions.php`: version bump, two product fields, save ownership, one global Customizer field.
- `single-product.php`: read resolved values and render them in the Hero.
- `assets/css/spatial-flow.css`: match the reference typography/spacing without disturbing WooCommerce price behavior.

## Acceptance gate
Returned source must be audited before frontend testing. After source PASS, test only:
- one desktop Hero screenshot;
- one 390px mobile Hero screenshot;
- verify per-product override vs global shipping default behavior.
No additional routine viewport is required unless an actual anomaly appears.
