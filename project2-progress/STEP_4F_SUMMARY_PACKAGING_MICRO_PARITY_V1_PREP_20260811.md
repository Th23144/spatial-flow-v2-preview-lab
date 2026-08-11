# Step 4F · Combined Order Summary + Packaging Micro Parity V1 Preparation · 2026-08-11

Status: PREPARED FOR MANUAL INSTALL · STRICT MICRO 1:1 · SUMMARY + PACKAGING IN PARALLEL

## Why this pass exists

The user explicitly confirmed that micro-level 1:1 parity is a primary acceptance criterion, not a cosmetic optional pass. Overall desktop checkout geometry has already been proven correct at 1440 max / 56 gutter / 7:5 columns / 80 gap. Packaging business logic/runtime QA is also functionally passing. Remaining work is therefore micro visual parity.

This pass intentionally advances both areas together:
1. Order Summary micro parity.
2. Product Packaging micro parity.

## Reference authority

Current canonical Step 02 reference:
- `preview/spatial-flow-checkout-shipping-v1.html`
- `preview/spatial-flow-checkout-flow-v1.css`
- `preview/spatial-flow-checkout-packaging-v3.css`
- `preview/spatial-flow-checkout-packaging-v8-itemcentric.css`

## Scope

### Order Summary
- Replace the duplicated kicker + `Your order` hierarchy with the reference-style `Order summary` header plus editable `Edit bag →` action.
- Keep live Coupon functionality, but integrate it under the reference-style summary header instead of removing it.
- Remove per-product horizontal dividers.
- Match reference item rhythm: 20px item gap, 64px image, 14px image/text gap, 17px title/price, 8px mono meta with 0.14em tracking.
- Move quantity into compact backend-derived product meta and remove the separate standalone `× N` line.
- Preserve live/backend product data; constrain it to the reference density rather than inventing static product attributes.
- Recompose totals to one divider before totals + 13px row rhythm + explicit ink divider before final total.
- Add editable Step 02 summary note from the reference.
- Add editable Step 02-specific trust lines from the reference while preserving the existing generic trust copy for Step 01/03.

### Product Packaging
- Restore the missing 22px header-to-boundary-note gap caused by flattening the static panel-head wrapper into live SAFE5 DOM.
- Make item assignment slots nowrap on desktop as canonical B requires.
- Keep dynamic item meta to one compact line/ellipsis inside the fixed reference density.
- Reuse the existing backend-editable product context helper for Packaging unit meta, adding quantity context without creating fake static attributes.

## Business logic / architecture not changed
- WooCommerce remains totals/shipping/coupon/order authority.
- Packaging state/fee/session/order persistence is unchanged.
- Packaging JS controller is unchanged.
- Step navigation/payment/order submission is unchanged.
- Coupon remains live and functional.
- No fake shipping/tax/product data is introduced.

## Current accepted source identities
- `functions.php`: 607,140 bytes · 11,605 logical lines · SHA256 `7b4d84c84887265b06c04f33c43f60a9c9d48adf52564324f84d9512f0bc3eab`
- `woocommerce/checkout/form-checkout.php`: 36,184 bytes · 653 logical lines · SHA256 `28d8aeba51496ca1a95a1e1ccd0b12a85d71103e1dfaa759ccf02baba66cd208`
- `assets/js/checkout-safe5.js`: 56,572 bytes · 1,697 logical lines · SHA256 `496f5af965939c4f838a64a306761d4f151ab88c1acbe4b3980b884687ef0448` (UNCHANGED)
- `assets/css/checkout-safe5.css`: 134,135 bytes · 4,383 logical lines · SHA256 `071147c68c30a9ee5481d9e7d9d5aeabd0ea92f0b9b5139be99bf1d3958c11a2`

## Prepared target identities
Validated offline from the exact accepted files above:

### functions.php target
- 609,481 bytes
- 11,657 logical lines
- SHA256 `5668f5381675a172f751b165abeec81e92c0de7781d1f04a2b95b1513acc9a6c`
- LF
- no final newline
- `SPATIAL_FLOW_CHILD_VERSION = 2.7.11`
- `php -l` PASSED

### form-checkout.php target
- 37,311 bytes
- 664 logical lines
- SHA256 `88e99eff737a8626dfee557584386a2cd1ca13c88aec9fa3988c20affddab412`
- CRLF
- no final newline
- `php -l` PASSED

### checkout-safe5.css target
- 136,199 bytes
- 4,451 logical lines
- SHA256 `4c0df0dd8d6c9f9870a361371c1aded2be8e593b5d867472090cdbade64b0128`
- CRLF
- no final newline
- braces 527 / 527
- comments 24 / 24
- CSS parser errors 0

The final-total row explicitly owns `border-top: 1px solid var(--sf-safe5-ink) !important;`; an earlier offline draft used only `border-top-color`, which would not draw the line after the generic tfoot row border was removed. That draft identity is invalid and must not be used.

### checkout-safe5.js
UNCHANGED:
- 56,572 bytes
- SHA256 `496f5af965939c4f838a64a306761d4f151ab88c1acbe4b3980b884687ef0448`

## CSS maintenance policy
This is NOT a new tail patch. Existing Summary rules are replaced/merged in their existing Summary owner. Existing Packaging rules are replaced/merged inside `SAFE5 Product Packaging Visual Ownership`. Future adjustments continue to replace/merge these owners; no FIX1/FIX2/FIX3 append pile.

## Stop point
After the three files are manually edited and source identities pass, browser QA should compare Summary and Packaging simultaneously at the same viewport. Do not advance to Batch 6 until Packaging专项 final acceptance is complete.
