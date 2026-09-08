# Step 4D Reopen B5 — Single Product Hero Subtitle / Shipping Note Visual Pass

Date: 2026-09-08

## Scope

Single Product hero only. This B5 pass covers the two previously missing reference layers around the product title / price area:

1. Product-specific editorial subtitle directly below the product title.
2. Shipping / fulfilment micro-copy directly below the WooCommerce price, with a global default and product-level override.

WooCommerce pricing, variations, add-to-cart, gallery, stock and checkout authority remain unchanged.

## Source status entering visual review

- Theme version: 2.7.37.
- `functions.php`: product subtitle and per-product shipping override fields added; global shipping / fulfilment default added through the existing product-detail settings path.
- `single-product.php`: subtitle renders only when populated; product shipping override falls back to the global default; WooCommerce native price HTML remains authoritative.
- `spatial-flow.css`: D1 subtitle rules are global; D2 shipping-note rules were corrected out of the desktop-only media query; D3 mobile rules are inside the existing `@media (max-width: 767px)` scope. CSS braces / media-query structure were checked before frontend testing.

## Frontend evidence reviewed

User returned one desktop full top-area screenshot and one narrow mobile screenshot.

### Desktop

PASS.

Observed:

- Product gallery and summary remain intact.
- Product title remains the WooCommerce product title.
- Empty product subtitle correctly leaves no fake placeholder and no visible empty panel.
- Native WooCommerce price remains intact.
- Global default shipping note renders directly below the price: `COMPLIMENTARY SHIPPING OVER $120 · WORLDWIDE`.
- Divider/rhythm continues correctly into Placement Suggestion.
- Placement Suggestion, excerpt, variation controls, quantity, add-to-cart, wishlist/share and trust strip show no visible collateral regression.

### Mobile / narrow responsive state

PASS for the returned responsive evidence.

Observed:

- Empty subtitle collapses cleanly with no blank block.
- Price and default shipping note stack correctly.
- Shipping micro-copy remains compact and does not overflow.
- Divider and Placement Suggestion spacing remain coherent.
- Variation controls and cart row remain usable and visually intact.
- No new horizontal overflow or broken spacing is visible in the submitted screenshot.

## Product Truth note

The reference static page includes a subtitle. The tested WooCommerce product currently has no product subtitle value, so the correct production behavior is to omit that line rather than inject reference/demo copy. The subtitle path remains backend-editable for products that have real editorial subtitle content.

The tested shipping line comes from the global default, not a hard-coded reference claim. Product-specific override behavior remains supported by source logic for preorder / special-fulfilment items.

## Verdict

B5 visual implementation: **PASS / CLOSED**.

No additional routine viewport cycle is required for this B5 gate absent new visible evidence. Continue to the next unresolved Single Product item.
