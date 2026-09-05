# Step 4D Reopen B1 — Returned Source Exact-Diff PASS — 2026-09-05

## Scope
User returned the manually patched current files for B1:
- `woocommerce/single-product.php`
- `functions.php`
- `assets/css/spatial-flow.css`

B1 authority remains the manual-patch workflow. The earlier assistant-generated full-file replacement draft is not an accepted source baseline.

## Returned file verification

### `single-product.php`
- Returned size: 22,813 bytes
- Returned logical lines: 413
- SHA256: `d6f73d9d162509d742fb759b059c6d13b5fb3eecc9775bacb40b8db22c9d4dd5`
- `php -l`: PASS
- Authorized change: the new `sf-product-v2-utility-actions` block immediately after `woocommerce_template_single_add_to_cart()`.
- YITH wishlist uses the existing `yith_wcwl_add_to_wishlist` shortcode.
- Share uses a real `mailto:` link with product title and permalink.
- Reverse-diff validation: removing only the authorized B1 insertion plus its single introduced blank line restores the exact pre-B1 baseline SHA256 `bf049e5039c47fb4f52a54cf530f8ea1fcc63541fad18d36270e146f4eeb25de`.

### `functions.php`
- Returned size: 612,013 bytes
- Returned logical lines: 11,689
- SHA256: `2e631325382107e152ca2d3dd8af8d1d8c18020eae78b760958f42f2f4f6cc34`
- `php -l`: PASS
- `SPATIAL_FLOW_CHILD_VERSION`: `2.7.23`
- Reverse-diff validation: changing only `2.7.23` back to `2.7.22` restores exact pre-B1 baseline SHA256 `9e7e942a56c44ddff521d653e8f9cf7ed14e77678d71a3e450a73c2beeee8410`.
- No other `functions.php` drift detected.

### `spatial-flow.css`
- Returned size: 592,114 bytes
- Newline count: 20,807
- SHA256: `1b9dae9ba7db079bb5ea9eed2969caaffb038c97437d7216c8d22f3355e74c`
- Braces: 3,296 open / 3,296 close
- Comments: 275 open / 275 close
- Authorized B1 changes verified:
  1. canonical base `.single-product .sf-product-options` surface changed to transparent / no border / no padding;
  2. later desktop 1:1 owner changed to transparent / no border / no padding;
  3. mobile owner padding changed from 20px to 0;
  4. new `sf-product-v2-utility-actions`, YITH wishlist and share styling inserted before the trust strip.
- Reverse-diff validation: reverting only those four B1 CSS edits restores the exact pre-B1 baseline size 589,104 bytes and SHA256 `45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6`.
- Therefore no unrelated CSS drift was introduced by the returned manual patch.

## Functional ownership preserved
- WooCommerce remains owner of variation selection, quantity, price state and Add to Cart.
- B1 does not replace `woocommerce_template_single_add_to_cart()`.
- YITH remains owner of wishlist writes/state.
- No new wishlist database or business logic introduced.
- B1 does not touch Sections 01–04, Product Attributes, Related Products, Checkout, cart calculation, payment, or order logic.

## Source verdict
**PASS — returned manual B1 source is exact within the authorized scope.**

## Next gate
Run one consolidated B1 runtime/visual verification batch on desktop and 390px mobile:
- options panel no longer reads as a white framed card;
- variation / quantity / Add to Cart still work;
- Wishlist appears and real YITH add/remove state works;
- Share opens a real mail-share action;
- layout remains stable on desktop and mobile.

Do not proceed to B2 until this runtime gate passes.
