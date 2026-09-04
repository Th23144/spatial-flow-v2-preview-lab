# Project 2 · Active Stop Point · 2026-09-04

> Historical filename retained for cross-window compatibility. This content is the current authoritative stop point.

## Current binary state

```text
Main-site Header: Not done
Main-site Footer: Not done
Shop archive: Not done
Single Product: Not done
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / WooCommerce Order Result: Completed 1:1
```

All previously unfinished main-site, utility and Blog pages remain `Not done`.

Authoritative reopen correction:

```text
project2-progress/PROJECT2_USER_REOPEN_HEADER_FOOTER_SHOP_SINGLE_PRODUCT_20260903.md
```

## Protected completed work

```text
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / Order Result: Completed 1:1
```

Checkout remains fully closed, including Step01/02/03/04, Product Packaging, Crypto Workspace visual closure, transient/error states and Refresh Status feedback.

WPCode 1706 `收款页` remains disabled and must not be deleted during the current cleanup horizon.

## Current executable step

The previously announced Home audit remains suspended.

Current step:

```text
Step 4D-REOPEN · Single Product remediation
```

Repository/history re-audit:

```text
project2-progress/STEP_4D_REOPEN_A_SINGLE_PRODUCT_WHOLE_PAGE_REAUDIT_20260903.md
```

User-supplemented remediation inventory:

```text
project2-progress/STEP_4D_REOPEN_A_SINGLE_PRODUCT_FINAL_REMEDIATION_PLAN_20260904.md
project2-progress/STEP_4D_REOPEN_A_SECTION02_EDITORIAL_READING_DIRECTION_20260904.md
```

Current returned-source audit:

```text
project2-progress/STEP_4D_REOPEN_B_SINGLE_PRODUCT_CURRENT_SOURCE_AUDIT_20260904.md
```

## Locked Single Product direction

```text
1. Remove the unwanted white/card frame from the options/add-to-cart area while preserving native WooCommerce variation/quantity/cart logic.
2. Restore a real Wishlist action by reusing the existing YITH Wishlist owner; do not create a second wishlist state system.
3. Add a real Share action; do not render a decorative fake control.
4. Flatten Product Attributes toward the reference information band and remove the oversized frontend heading treatment.
5. Section 01 = The Piece / product long description. It is already implemented and renders only when WooCommerce long description content exists.
6. Section 02 = editorial reading / wearing interpretation. Keep it as a real visual section with product-specific → category → global fallback ownership rather than fabricated maker biographies.
7. Section 03 = care & ritual. Keep it as a required useful content layer distinct from the short Product Attributes care field.
8. Section 04 = real WooCommerce reviews only; no fabricated names, ratings or quotes.
9. Rebuild Complete The Room cards so image and text read as separate editorial surfaces rather than a white card frame; preserve dynamic recommendation logic.
10. Restore a reference-like gift CTA above the footer, aligned with the real Checkout packaging system rather than a fake gift flow.
11. Clean old unscoped `.sf-related-products` cascade debt instead of stacking another repair patch.
```

## Current source facts

Returned current-live files passed source checks:

```text
woocommerce/single-product.php
- php -l PASS

functions.php
- SPATIAL_FLOW_CHILD_VERSION 2.7.22
- php -l PASS

assets/css/spatial-flow.css
- braces balanced
- CSS parser errors 0
```

Important Section 01 finding:

```text
It is not CSS-hidden.
The template only renders it when WooCommerce product long description / post_content is non-empty.
```

## Current gate

```text
SOURCE AUDIT COMPLETE
READY TO DEFINE / EXECUTE BOUNDED REMEDIATION BATCHES
```

Do not request full-page regression screenshots yet. Implement and source-verify bounded Single Product batches first, then run one consolidated desktop + mobile + function/backend regression at the end.

Do not reopen Cart, Checkout or Step04 during this Single Product pass.

After Single Product, recommended sequence remains Header → Footer → Shop → Home unless the user explicitly changes it.
