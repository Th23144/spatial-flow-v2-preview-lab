# Project 2 · Step 4D-REOPEN-B · Single Product current source audit · 2026-09-04

## Scope

Audit only. No production source was modified.

User returned the current live source files for the reopened Single Product pass:

- `woocommerce/single-product.php`
- `assets/css/spatial-flow.css`
- `functions.php`

Local returned-file fingerprints captured in the working session:

```text
woocommerce/single-product.php
- 21,995 bytes
- 391 lines
- SHA256 bf049e5039c47fb4f52a54cf530f8ea1fcc63541fad18d36270e146f4eeb25de
- php -l PASS

assets/css/spatial-flow.css
- 589,104 bytes
- 20,676 lines
- SHA256 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
- braces 3282 / 3282
- tinycss2 parse errors 0

functions.php
- 612,013 bytes
- 11,689 lines
- SHA256 9e7e942a56c44ddff521d653e8f9cf7ed14e77678d71a3e450a73c2beeee8410
- SPATIAL_FLOW_CHILD_VERSION 2.7.22
- php -l PASS
```

## Findings

### 1. Options / Add-to-Cart white frame is purely visual

`single-product.php` still delegates the real cart/variation UI to:

```php
woocommerce_template_single_add_to_cart();
```

The unwanted visible frame is owned by Single Product CSS, chiefly:

```css
.single-product .sf-product-options
```

Current canonical rules add:

```text
background: rgba(255,253,250,.72)
border: 1px solid rgba(31,25,22,.1)
padding: 28px 30px desktop
```

Therefore the frame can be removed/reworked without replacing WooCommerce variation, quantity, stock, price or add-to-cart logic.

### 2. Wishlist is not currently rendered in the Single Product template

The site already has YITH Wishlist integration and styling elsewhere. The current Single Product template does not output a YITH wishlist button below the cart row.

Remediation should reuse YITH's own add/remove state and storage. Do not create a second wishlist state system.

### 3. Share action is absent

The current template has no product-share action below the cart row. A real, lightweight share path must be added; do not add a decorative non-functional control.

### 4. Product Attributes frame/title owners are locked

Current template renders:

```text
sf_product_attributes_eyebrow
sf_product_attributes_heading
```

The large default heading is:

```text
Material, Space, And Care
```

The current Product Attributes grid/cards themselves also add light white surfaces and full cell borders:

```css
.single-product .sf-product-v2-attributes__grid
.single-product .sf-product-v2-attribute-card
```

This is the source of the visible rectangular framing the user wants removed.

The product-specific content remains correctly backend-editable through WooCommerce product fields:

```text
_sf_placement
_sf_material
_sf_suitable_space
_sf_care
_sf_gift_service
```

Global labels/trust-strip fallback copy remain editable through the `spatial_flow_product_story` Customizer section.

Recommended presentation decision for the reopened pass: remove the large Product Attributes heading from frontend presentation and flatten the grid to the reference-like editorial information band while preserving stored settings and all product meta.

### 5. Section 01 is implemented and is NOT CSS-hidden

`single-product.php` sets:

```php
$sf_piece_content = trim( (string) get_post_field( 'post_content', get_the_ID() ) );
```

and renders Section 01 only when that WooCommerce long description is non-empty.

Therefore the current absence of Section 01 on a test product is content-conditioned, not a hidden CSS defect. The user's memory is essentially correct: the section exists, but products with no long description do not show it.

### 6. Section 02 / 03 / 04 and gift CTA are absent from current template

Current `single-product.php` stops after:

```text
Section 01 The Piece (conditional)
Complete The Room related products (conditional)
```

It does not currently render:

```text
Section 02 editorial reading / wearing story
Section 03 care & ritual
Section 04 WooCommerce reviews
reference-style gift CTA before footer
```

These therefore require real template/data-source implementation, not CSS unhide work.

### 7. Section 02 data model direction

Previously agreed product truth:

```text
Section 01 = what the product is
Section 02 = how to read / wear / interpret it
Section 03 = care & ritual
Section 04 = real reviews only
```

Recommended Section 02 ownership hierarchy:

```text
product-specific editorial field
→ product-category editorial fallback
→ restrained global fallback
```

This lets the visual section remain part of the product-page identity without fabricating a maker biography for every item.

### 8. Section 03 should remain distinct from the short `_sf_care` attribute

The existing `_sf_care` field is a short Product Attributes value. The full Section 03 should be a richer care/ritual layer rather than duplicate the same sentence.

A dedicated editable model is required for the full Section 03, with safe fallback to existing care copy where appropriate.

### 9. Section 04 must use real WooCommerce review data

No fake names, ratings or review copy. Review presentation must remain owned by real WooCommerce comments/reviews. Empty-state behavior can be designed honestly.

### 10. Related Products white-card frame is source-confirmed

The current canonical Single Product related-card block explicitly adds:

```text
border: 1px solid rgba(31,25,22,.1)
background: rgba(255,253,250,.58)
overflow: hidden
```

on:

```css
.single-product .sf-related-products .sf-product-card
```

This is the exact source of the user's disliked white rectangular card feeling. The query/recommendation logic is independent and can remain unchanged.

### 11. Legacy Related Products CSS cleanup debt still exists

A later unscoped historical block remains in the current CSS:

```text
Spatial Flow Code Repair 3: Single Product Related Products Compact Layout
```

with selectors such as:

```css
.sf-related-products ...
```

The newer Step 4D scoped block is more specific and currently owns most Single Product presentation, but the old block is still unnecessary cascade debt and must be evaluated during canonical cleanup instead of adding another patch layer.

## Remediation batches

Recommended implementation order:

```text
B1 — Flatten top options/cart shell + add real Wishlist/Share actions
B2 — Flatten Product Attributes band + remove large frontend heading
B3 — Restore/verify Section 01 content-conditioned behavior
B4 — Implement Section 02 editorial reading with backend-editable hierarchy
B5 — Implement Section 03 care & ritual with dedicated editable content
B6 — Implement Section 04 real WooCommerce reviews / honest empty state
B7 — Rebuild Related Products cards as image + separate editorial text, no white card frame
B8 — Restore reference-like gift CTA above footer
B9 — Remove/merge legacy Single Product CSS ownership debt
B10 — desktop + mobile consolidated regression and final 1:1 acceptance
```

Do not reopen Cart, Checkout or Step04 while executing this plan.
