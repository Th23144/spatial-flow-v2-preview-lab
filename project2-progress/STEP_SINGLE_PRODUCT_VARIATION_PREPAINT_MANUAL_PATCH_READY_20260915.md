# STEP — Single Product variation first-paint FOUC manual patch ready — 2026-09-15

## Current runtime source files reviewed
- `woocommerce/single-product.php`
  - Uploaded runtime copy size: 41,182 bytes
  - SHA256: `515c716c4930f9c6fbdd32242259454f0f98fee7d3b1fbaf4d8041d7e93514db`
- `assets/css/spatial-flow.css`
  - Uploaded runtime copy size: 636,591 bytes
  - SHA256: `9b8e1972d44cab867a40c52cfba62da06f2fabe3cfb0440a547062c31da899df`

## Confirmed root cause
The native WooCommerce variation table is server-rendered immediately by `woocommerce_template_single_add_to_cart()`. Current CSS only visually hides `table.variations` after the existing JS adds `.sf-visual-variations-ready` to the variation form. This leaves a first-paint window where the native WooCommerce selects can flash before the custom Spatial Flow visual variation UI takes ownership.

## Patch strategy
Use the already server-generated `$sf_variation_swatch_data` as a pre-paint safety gate:
1. When swatch data exists, server-render a temporary `.sf-variation-prepaint` class on `.sf-product-options`.
2. Extend the existing visually-hidden native variation-table rule so it applies during that pre-paint state as well as after `.sf-visual-variations-ready`.
3. Keep a 2500 ms fail-safe in the template. If the existing visual-variation JS never reaches `.sf-visual-variations-ready`, remove the pre-paint class so WooCommerce native controls return as a functional fallback.
4. Do not change WooCommerce variation ownership, add-to-cart ownership, price/stock logic, or existing `spatial-flow.js` visual variation logic.

## Dry-run Source Gate
A local simulated replacement against the exact uploaded runtime files was checked before giving the user manual replacement instructions:
- Patched `single-product.php`: PHP lint PASS
- Patched `spatial-flow.css`: `{}` count = 3531 / 3531
- No source file has been replaced automatically. User remains the manual replacement owner.

## Status
`PATCH READY — AWAITING MANUAL REPLACEMENT + RUNTIME HARD-REFRESH TEST`
