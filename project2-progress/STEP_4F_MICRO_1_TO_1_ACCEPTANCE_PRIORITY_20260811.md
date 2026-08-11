# STEP 4F · Micro 1:1 Acceptance Priority

Date: 2026-08-11

Status: LOCKED ACCEPTANCE PRIORITY

User clarified that micro-level 1:1 parity is the most important acceptance criterion for the Checkout re-skin.

## Acceptance rule

Future visual acceptance must not stop at:
- functionally correct,
- structurally similar,
- broadly similar composition.

Micro visual parity itself is required.

Compare the live checkout against the approved canonical reference at the same viewport and use the reference source as the visual contract. Review, where applicable:
- font size and weight,
- line-height and letter-spacing,
- colors and opacity,
- border weight and separator placement,
- padding and margins,
- card / row height,
- thumbnail sizing,
- title / price / metadata baselines,
- button dimensions,
- collapsed / expanded state density,
- local spacing rhythm.

WooCommerce dynamic truth remains authoritative. Genuine data differences (real products, prices, shipping methods, fees, metadata, gateways) must remain dynamic, but they are not an excuse for avoidable visual mismatch.

## Current sequence

1. Order Summary product-area micro 1:1 cleanup.
2. Product Packaging micro 1:1 cleanup across all locked states.
3. Same-viewport full-page comparison.
4. Resolve remaining Checkout chrome/breadcrumb ownership differences if still material.
5. Packaging final acceptance.

## CSS maintenance

Do not create tail FIX1/FIX2/FIX3 piles. Modify or merge within the existing owning blocks/selectors.
