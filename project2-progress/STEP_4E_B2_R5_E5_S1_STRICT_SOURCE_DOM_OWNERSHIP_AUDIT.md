# Step 4E-B2-R5-E5-S1 · Strict Static-to-Native Source / DOM Ownership Audit

Last updated: 2026-07-20  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Strict source/DOM ownership audit: Complete.
No theme source file changed during this audit.
Previous speculative FIX4: remains cancelled.
Current executable phase: R5-E5-S2 exact bounded implementation planning from the latest local PHP / JS / CSS files.
Cart page status: Not done.
```

## 1. Approved static ownership

Authoritative reference:

```text
preview/spatial-flow-cart-v1.html
```

The approved visual contract is explicit:

```text
- .cart-page uses 7fr / 5fr tracks with an 80px gap
- .cart-items contains only .cart-item product articles
- every .cart-item keeps its bottom divider
- no Coupon / Apply Coupon / Update Cart footer exists below .cart-items
- the right .cart-sidebar is the only intentionally filled Cart surface
```

Therefore the real left column cannot be accepted while a native WooCommerce actions footer remains part of its visible composition.

## 2. WooCommerce 10.4.3 native template ownership

Official source:

```text
woocommerce/woocommerce
ref: 10.4.3
plugins/woocommerce/templates/cart/cart.php
```

The native template owns one form:

```text
form.woocommerce-cart-form
```

Inside its table body it renders:

```text
1. every cart-item row
2. one final td.actions row
```

The final actions row owns all of the following:

```text
- #coupon_code
- submit button name=apply_coupon
- submit button name=update_cart
- woocommerce_cart_actions hook
- woocommerce-cart-nonce
```

The form closes before `.cart-collaterals` and `.cart_totals` begin.

## 3. WooCommerce 10.4.3 JavaScript lifecycle

Official source:

```text
woocommerce/woocommerce
ref: 10.4.3
plugins/woocommerce/client/legacy/js/frontend/cart.js
```

Native cart.js:

```text
- delegates submit-button clicks only within .woocommerce-cart-form
- delegates the .woocommerce-cart-form submit event
- serializes the complete form for quantity updates
- handles Coupon through wc_cart_params.apply_coupon_nonce
- replaces .woocommerce-cart-form after a successful update
- replaces .cart_totals after a successful update
- triggers updated_wc_div and updated_cart_totals
```

Consequences:

```text
- simply moving the native Coupon controls outside the form breaks native click/submit ownership
- a one-time DOM move is not durable because both form and totals are replaced
- removing the nonce or native hidden submit controls is unsafe
- a template-free solution must preserve native controls inside the form and use delegated lifecycle-safe bridging
```

## 4. Current Project 2 ownership

Current project records establish:

```text
- no Cart template override is active
- functions.php owns Cart heading, counts, Continue Shopping, summary trust content and recommendation logic
- WooCommerce remains the native Cart form / quantity / Coupon / totals owner
- custom spatial-flow.js has no independent Cart update implementation
- wc-cart-fragments already owns the post-update count refresh
```

The current `spatial-flow(34).css` de-boxes the native actions row but leaves it visible, so it still creates non-reference left-column structure.

## 5. Correct bounded production translation

Do not override `woocommerce/cart/cart.php` in this step.

The least invasive strict translation is:

```text
A. Keep the native td.actions row, Coupon fields, Update button and nonce inside .woocommerce-cart-form.
B. Remove td.actions from the visual layout with an accessible clipped owner, not by deleting it.
C. Keep the approved final product divider exactly as the static source.
D. Auto-submit quantity changes through the existing hidden native Update Cart button after a short debounce.
E. Render one narrow production-only Coupon control in Order Summary, outside the static left product plane.
F. The visible Coupon control copies its value into the hidden native #coupon_code and programmatically invokes the hidden native apply_coupon submit button.
G. Use delegated handlers so form/totals replacement does not require manual reinitialization.
H. Mirror native Coupon validation text into the visible Order Summary Coupon control.
```

This preserves:

```text
- real products, prices, quantities, totals and shipping
- native WooCommerce nonce and form handler
- native Coupon endpoint and notices
- native Undo / Restore
- current count fragments
- backend editability
- default left-column static geometry
```

## 6. Controlled deviation

The static reference does not contain a Coupon UI, but Cart Coupon behavior is a required production function. Under the strict acceptance policy, the permitted deviation must be narrow and visually integrated.

The visible Coupon control therefore belongs to the filled Order Summary commerce surface, not below the product stack. It must be collapsed or visually quiet by default and must not change the 7fr / 5fr frame, the 80px gap, product rows or left-column rules.

## 7. Files required for exact S2 planning

Exact anchors, metrics, hashes and rollback ranges cannot be issued from documentation snapshots alone.

Required latest local files:

```text
1. functions(17).php
2. assets/js/spatial-flow.js
   expected current SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
3. spatial-flow(34).css
   expected current SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
```

After exact file validation, R5-E5-S2 will issue only bounded in-place changes. No ZIP, no broad file replacement, no Cart template override, no hardcoded commerce data.

## 8. Freeze

```text
- do not execute cancelled FIX4
- do not remove the final product divider
- do not append another general Cart CSS patch
- do not create a Cart template override before the exact-file audit
- do not change Checkout, payment, orders, Header, Footer or version 2.7.8
- do not mark Cart Completed 1:1
```