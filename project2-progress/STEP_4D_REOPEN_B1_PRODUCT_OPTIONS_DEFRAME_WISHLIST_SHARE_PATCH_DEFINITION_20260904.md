# Step 4D Reopen B1 · Product Options Deframe + Wishlist + Share Patch Definition · 2026-09-04

## Context
Single Product has been reopened. The first bounded remediation batch targets only the top Product Options / Add to Cart area.

## User-approved goals
- Remove the obvious white framed/card surface around the WooCommerce variation/add-to-cart block.
- Preserve WooCommerce native variation, quantity, stock, price and add-to-cart logic.
- Add a real Wishlist control below the cart row, using the existing YITH Wishlist system rather than a fake theme-only state.
- Add a Share control in the same editorial utility row.
- Match the static reference direction: flat editorial surface, quantity + primary add-to-cart row, small utility actions beneath.

## Current source ownership
`woocommerce/single-product.php` renders the Product Options wrapper and still delegates transaction logic to `woocommerce_template_single_add_to_cart()`.

`assets/css/spatial-flow.css` owns the visible white frame through `.single-product .sf-product-options` in the canonical Single Product block and again in the desktop `Step 4D-1-B` override.

YITH Wishlist is already the live storage/state owner elsewhere in the theme. B1 must reuse its generated button/shortcode output and must not create a separate wishlist state.

## B1 source-change boundary
Authorized current-live files:
- `woocommerce/single-product.php`
- `assets/css/spatial-flow.css`
- `functions.php` only for a narrowly scoped product-share handler and cache/version bump if required.

Do not touch:
- WooCommerce core/plugin templates
- variation JS logic
- cart/checkout
- Product Attributes
- Section 01-04
- Related Products

## Expected visual/result behavior
- `.sf-product-options` becomes a flat transparent editorial region with no outer white card/border.
- Existing variation controls remain usable.
- Existing quantity and Add to Cart stay functional.
- A small utility row appears below the cart row:
  - real YITH Wishlist action
  - Share action
- Share should prefer the browser-native Web Share API when available and fall back to copying the product URL with a visible label change.

## Validation gate
Before frontend testing, returned files must pass syntax/structure and exact-diff review against the 2026-09-04 current-live baselines.

Frontend B1 validation will be batched for desktop + 390px mobile and will include variation selection, quantity, add to cart, wishlist state change and share feedback.
