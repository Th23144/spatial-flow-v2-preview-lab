# Project 2 · STEP 4F · Checkout Strict 1:1 Screenshot Audit — 2026-08-11

Status: AUDITED · WIDTH OWNER CLOSED · VISUAL PARITY WORK CONTINUES

## Evidence reviewed
- Live real Checkout Step 02 full-page screenshot after outer WooCommerce width owner fix.
- Canonical `main/preview/spatial-flow-checkout-shipping-v1.html` full-page screenshot in comparable Custom grouping state.
- Current live `checkout-safe5.css`, `form-checkout.php`, and `functions.php` source owners.

## Important capture caveat
The two full-page PNGs were captured at different effective page widths and the canonical page's sticky header is duplicated mid-capture by Chrome full-page screenshot behavior. Therefore these PNGs are valid for structural/style audit but not for absolute pixel-distance measurement. Desktop geometry has already been separately verified by Console against the canonical 1440 / 56 / 7:5 / 80 contract.

## Confirmed closed item
The global desktop Checkout geometry is now correct. The prior WooCommerce outer-container squeeze has been removed; SAFE5 owns the width contract.

## Confirmed remaining parity issues

### 1. Order Summary product-list density / separators
Live still renders a bottom divider on every `tr.cart_item`, plus standalone quantity rows. The canonical Summary uses compact product rows with no divider between individual products; one divider follows the product group before totals. This directly matches the user's feedback that the thumbnail/product area has too many miscellaneous lines.

### 2. Order Summary quantity placement
Live Woo quantity (`× 1`) sits on its own line below each product text block. Canonical displays quantity as compact product metadata (`QTY 1`) in the same information cluster. This makes live rows taller and visually noisier.

### 3. Order Summary heading / controls are not identical
Canonical uses `Order summary` with `Edit bag →`. Live uses `Your order` and retains the accepted live Coupon control (`Have a promo code? +`). Coupon functionality is an intentional live requirement and must not be removed merely to mimic static content; styling can be reconciled without deleting functionality.

### 4. Product metadata is materially noisier in live
Live Checkout summary/package item metadata is built from the real product custom/fallback taxonomy/attribute pipeline, so some products produce longer metadata than the static examples. The Packaging unit source currently uses Woo's formatted cart-item data; the Summary product subtitle uses `spatial_flow_cart_visual_2_product_meta_text()`. Strict visual parity should make these real-data lines compact without fabricating static product metadata or breaking backend editability.

### 5. Packaging structure is now substantially aligned
The accepted B structure is present in live: primary Standard/Gift cards, separate-entry control, grouping modes, item-centric Custom assignment, Items head, active packages head, package rows, fee explanation, and saved-state reassurance. Remaining Packaging work is micro-visual parity (type scale, line strength, spacing, row density, alignment), not a structural redesign.

### 6. Shipping method count is not a visual bug
Canonical static screenshot contains three illustrative shipping methods. Live currently has one WooCommerce-owned method. Do not fabricate static shipping methods for 1:1; preserve real Woo availability and match the visual treatment of whichever live methods exist.

### 7. Breadcrumb / site chrome differences require separate ownership decision
Canonical screenshot contains a checkout breadcrumb and Chrome full-page capture duplicates the sticky header mid-page. Live screenshot does not show the same breadcrumb. Do not treat the duplicated sticky header as a live defect. Breadcrumb parity should be audited against existing Project 2 global navigation/breadcrumb policy before changing site chrome.

## Next execution order
1. Summary compact-product parity: remove per-item dividers, compact quantity/meta placement, align product group separator/totals rhythm while preserving native Woo source and Coupon.
2. Packaging micro-parity pass inside the existing single Packaging CSS owner; no FIX tail blocks.
3. Re-capture live Step 02 and compare after these two passes.
4. Only then decide whether breadcrumb/site-chrome parity belongs in this Checkout step or its existing global owner.

## Safety / maintenance constraints
- Do not reopen global width geometry.
- Do not remove live Coupon functionality.
- Do not fabricate shipping methods or static product data.
- Do not append `FIX1/FIX2` CSS blocks; replace/merge inside existing owners.
- Preserve WooCommerce as the source of product, quantity, totals, fees and shipping truth.
