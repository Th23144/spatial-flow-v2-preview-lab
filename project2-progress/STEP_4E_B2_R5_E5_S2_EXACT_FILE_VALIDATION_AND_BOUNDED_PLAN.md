# Step 4E-B2-R5-E5-S2 · Exact File Validation + Bounded Implementation Plan

Last updated: 2026-07-20  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Exact local source identity validation: Passed.
PHP syntax: Passed.
JavaScript syntax: Passed.
CSS parse / structural validation: Passed.
Cancelled FIX4: remains cancelled.
Theme source files changed in GitHub: None.
Current executable substep: S2-A PHP Order Summary Coupon renderer.
Cart page status: Not done.
```

## 1. Uploaded file aliases and exact identity

The browser renamed the uploaded files, but their byte content is identical to the required current local baseline.

### PHP

```text
Uploaded alias: functions(18).php
Required baseline identity: functions(17).php
Size: 555,130 bytes
Logical lines: 10,366
SHA256: ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86
SPATIAL_FLOW_CHILD_VERSION: 2.7.8
PHP syntax: Passed
```

### JavaScript

```text
Uploaded alias: spatial-flow(4).js
Required server path: assets/js/spatial-flow.js
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Node syntax check: Passed
```

### CSS

```text
Uploaded alias: spatial-flow(35).css
Required baseline identity: spatial-flow(34).css
Required server path: assets/css/spatial-flow.css
Size: 698,076 bytes
Logical lines: 23,406
SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
Opening / closing braces: 3,638 / 3,638
Opening / closing comments: 337 / 337
CSS parser errors: 0
```

## 2. Exact anchor validation

All bounded edit anchors are present exactly once.

### PHP anchors

```text
/* === Step 4E-B1-F: Editable Cart Summary Heading END === */
if ( ! function_exists( 'spatial_flow_cart_visual_2_summary_trust' ) ) {
add_action( 'woocommerce_after_cart_totals', 'spatial_flow_cart_visual_2_summary_trust', 20 );
```

### JavaScript anchors

```text
function setupAddToCartDFeedback()
function init()
setupAddToCartDFeedback();
```

### CSS anchors

```text
/* ---------- Coupon / Update Cart ---------- */
/* ---------- Order Summary ---------- */
/* === Step 4E-B2-R5-B · Canonical Cart Presentation END === */
```

The desktop native actions block and its mobile continuation are both present and uniquely bounded.

## 3. Native ownership reconfirmation

WooCommerce 10.4.3 still owns:

```text
- form.woocommerce-cart-form
- final td.actions row
- #coupon_code
- submit button name=apply_coupon
- submit button name=update_cart
- woocommerce_cart_actions hook
- woocommerce-cart-nonce
```

WooCommerce `cart.js` delegates submit-button clicks and form submission, serializes the current form, replaces `.woocommerce-cart-form` and `.cart_totals`, and triggers `updated_wc_div` / `updated_cart_totals`.

Therefore:

```text
- native controls and nonce must remain inside the native form
- no Cart template override is authorized
- the native actions owner may be visually clipped but not deleted
- visible production Coupon UI must use delegated lifecycle-safe bridging
- quantity updates must invoke the current native Update Cart control after replacement
```

## 4. Bounded implementation sequence

The implementation is intentionally split into three independently reversible source operations.

### S2-A · PHP renderer only

File:

```text
functions.php
```

Allowed change:

```text
Insert one Cart-only, coupons-enabled renderer between the editable summary-heading block and the existing summary-trust renderer.
Hook it to woocommerce_proceed_to_checkout at priority 5.
```

Output contract:

```text
- one collapsed <details> Coupon control inside the filled Order Summary
- visible input has no native commerce name attribute
- visible Apply button is type=button
- one aria-live status element for mirrored native validation text
- WooCommerce-native translatable labels
```

Not allowed:

```text
- no version bump
- no changes to native Coupon handling
- no custom endpoint
- no Cart template override
- no Checkout or payment change
```

Validation gate after S2-A:

```text
- exact edited PHP file upload
- PHP syntax pass
- old SHA recorded as rollback identity
- new SHA / size / lines recorded
- renderer and hook occur exactly once
- no frontend deployment yet
```

### S2-B · JavaScript lifecycle bridge

File:

```text
assets/js/spatial-flow.js
```

Allowed change:

```text
Add one delegated Cart-only setup function before setupAddToCartDFeedback(), then call it once from init().
```

Responsibilities:

```text
- debounce quantity input changes
- resolve the current replaced .woocommerce-cart-form each time
- enable and programmatically invoke the current native update_cart submit control
- copy visible Order Summary Coupon value into current native #coupon_code
- invoke current native apply_coupon submit control
- synchronize after applied_coupon, removed_coupon, updated_wc_div and updated_cart_totals
- mirror current native .coupon-error-notice / Coupon response into the visible status region
- preserve the visible Coupon open/value state across totals replacement
- avoid duplicate bindings through a namespaced delegated handler
```

Not allowed:

```text
- no custom AJAX request
- no direct Cart calculations
- no manual fragments implementation
- no interception of remove / undo / shipping / checkout
```

Validation gate after S2-B:

```text
- exact edited JavaScript upload
- Node syntax pass
- setup function and init call occur exactly once
- current add-to-cart, checkout-notice and unrelated modules unchanged
- no frontend deployment yet
```

### S2-C · CSS ownership correction

File:

```text
assets/css/spatial-flow.css
```

Allowed in-place changes:

```text
1. Replace the existing Canonical Cart "Coupon / Update Cart" section.
2. Remove the obsolete mobile td.actions presentation continuation.
3. Add the narrow Order Summary Coupon styles inside the existing Canonical Cart ownership block.
```

Visual contract:

```text
- native td.actions row remains in DOM but contributes no visible left-column geometry
- final product divider remains unchanged
- no Coupon / Apply / Update footer appears below product rows
- one quiet collapsed Coupon control appears inside Order Summary
- Order Summary remains the only intentionally filled Cart surface
- desktop 7fr / 5fr tracks and 80px gap remain unchanged
- no new general Cart patch is appended after the canonical block
```

Validation gate after S2-C:

```text
- exact edited CSS upload
- braces / comments balanced
- CSS parser errors: 0
- old visible actions selectors removed from active presentation
- one native-owner clipping block
- one Order Summary Coupon visual block
- no frontend deployment until all three edited artifacts pass
```

## 5. Runtime acceptance after all artifact gates

Required desktop and mobile checks:

```text
- quantity minus / plus / typed value updates automatically
- Header BAG count and Your Bag count update
- totals and shipping remain correct
- valid Coupon applies through native WooCommerce
- invalid Coupon error appears beside the visible Order Summary control
- applied Coupon can still be removed through native totals UI
- remove item and Restore / Undo work
- empty Cart flow remains correct
- Checkout entry remains correct
- SAFE5 Checkout regression remains clean
- backend Cart copy, trust rows, recommendation choices and product subtitle remain editable
- no visible actions footer or implied left-column frame returns
```

## 6. Freeze

```text
- do not execute cancelled FIX4
- do not deploy SHA256 6377f0686c9b7a992c440e0c855bfa409cdcd45359f33695f896fa048d5f6737
- do not delete native Coupon / Update controls or nonce
- do not remove the final product divider
- do not create a Cart template override
- do not append a new generic Cart CSS patch
- do not change version 2.7.8
- do not mark Cart Completed 1:1 before R5-E6
```

## 7. Immediate next action

```text
Execute S2-A only: bounded PHP renderer insertion.
Then upload the edited PHP file for exact artifact validation before any JavaScript or CSS edit is issued.
```
