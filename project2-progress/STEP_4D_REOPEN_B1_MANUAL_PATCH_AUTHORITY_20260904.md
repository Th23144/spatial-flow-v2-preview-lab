# Step 4D-REOPEN-B1 · Manual Patch Authority · 2026-09-04

## User correction
The previously generated full replacement files for B1 are invalid for execution. They must not be used as local baselines or replacement artifacts.

## Authoritative execution method
B1 must follow the established manual-edit workflow:

1. give exact search anchors;
2. give exact bounded replacements/insertions;
3. user edits the current live files manually;
4. user returns the edited files;
5. source syntax + exact-diff review occurs before runtime testing.

## B1 scope
- Single Product options/add-to-cart surface only.
- Remove the large white framed outer panel while preserving WooCommerce variation, quantity and add-to-cart ownership.
- Restore a real YITH Wishlist action under the cart controls.
- Restore a real share-with-a-friend action without creating a second sharing system.
- Do not touch Section 01-04, Product Attributes, Related Products, Cart, Checkout, payment, or database logic in this batch.

## Source ownership decision
After re-auditing the returned current files, B1 business logic does not require a new functions.php helper. The existing YITH shortcode can be rendered directly from single-product.php. Share can be implemented as a real mailto share link generated from the current product title/permalink. functions.php only requires the normal child-theme asset version bump for cache busting.

## Supersession
This record supersedes any prior B1 instruction that asked the user to replace whole files.
