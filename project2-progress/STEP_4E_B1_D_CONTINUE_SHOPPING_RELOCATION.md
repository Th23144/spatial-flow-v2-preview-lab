# Step 4E-B1-D · Continue Shopping Relocation

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-C-FIX3：Passed exactly.
Step 4E-B1-D file validation：Passed exactly.
Step 4E-B1-D browser validation：Passed.
Step 4E-B1-E：Ready / instructions issued.
Cart page status：Not done.
```

## 1. Purpose

Add one dedicated, backend-editable `Continue Shopping` link immediately after WooCommerce's native `Proceed to Checkout` button in the Cart Totals action area.

The native checkout button, checkout URL, totals calculations, shipping, coupon logic, payment flow, and SAFE5 Checkout remain untouched.

The approved static Cart reference places a full-width secondary action directly below the primary checkout action.

## 2. Input baseline

```text
File: functions.php
Uploaded name: functions(6).php
Version: 2.7.8
Size: 550,932 bytes
Lines: 10,233
SHA256: ef3f2e437ebbb9cbdbc1b44da20187e92bc491183ceab3e1267249308e70160c
PHP syntax: Passed
Opening braces: 1,190
Closing braces: 1,190
Active heading hook: 1
Old intro hook: 0
Count normalization: 1
Existing woocommerce_proceed_to_checkout custom hook: 0
```

## 3. Applied manual insertion

The controlled insertion was made between:

```php
add_action( 'woocommerce_after_cart_totals', 'spatial_flow_cart_visual_2_summary_trust', 20 );

if ( ! function_exists( 'spatial_flow_cart_visual_3_cart_product_ids' ) ) {
```

Applied block:

```php
/* === Step 4E-B1-D: Continue Shopping Relocation START === */
if ( ! function_exists( 'spatial_flow_cart_visual_2_continue_shopping' ) ) {
    function spatial_flow_cart_visual_2_continue_shopping() {
        if ( ! function_exists( 'is_cart' ) || ! is_cart() ) {
            return;
        }

        $label = trim( (string) spatial_flow_cart_visual_2_setting( 'sf_cart_continue_text' ) );
        $url   = trim( (string) spatial_flow_cart_visual_2_setting( 'sf_cart_continue_url' ) );

        if ( '' === $url && function_exists( 'spatial_flow_shop_url' ) ) {
            $url = spatial_flow_shop_url();
        }

        if ( '' === $label || '' === $url ) {
            return;
        }

        echo spatial_flow_cart_visual_2_link( $label, $url, 'sf-cart-v2-continue-shopping' );
    }
}
add_action( 'woocommerce_proceed_to_checkout', 'spatial_flow_cart_visual_2_continue_shopping', 30 );
/* === Step 4E-B1-D: Continue Shopping Relocation END === */
```

## 4. Validated output

Authoritative uploaded output: `functions(7).php`

```text
Version: 2.7.8
Size: 551,894 bytes
Lines: 10,257
SHA256: 213850d5a39b1d7394bae1a6e537961a1ad4c78795b9c5a36bae939d7f75ee18
Opening braces: 1,195
Closing braces: 1,195
PHP syntax: Passed
Delta from input: +962 bytes / +24 lines
```

The uploaded file matches the predicted result exactly.

## 5. Browser result

Inside the Cart Totals action area:

```text
PROCEED TO CHECKOUT
Continue Shopping
```

Validated behavior:

```text
- Continue Shopping appears exactly once.
- It appears after the native Proceed to Checkout button.
- The user confirmed Continue Shopping opens the configured Shop destination.
- The user confirmed Proceed to Checkout and the Cart flow remain normal.
- The native checkout button and WooCommerce checkout URL remain unchanged.
```

The link remains intentionally only partially styled at this intermediate stage. Final full-width secondary-button styling belongs to the later controlled Cart CSS rebase.

## 6. Confirmed unchanged scope

```text
- SPATIAL_FLOW_CHILD_VERSION remains 2.7.8
- Your Bag. remains above the live count
- live quantity output remains correct
- native WooCommerce Proceed to Checkout button remains present and functional
- no hardcoded checkout URL
- Cart rows, remove, quantity, coupon, shipping, totals, service cards, trust cards, and recommendations remain functional
- SAFE5 Checkout remains unchanged
- no CSS, JavaScript, template, plugin, or database changes
```

## 7. Independent rollback

Delete only the block from:

```text
/* === Step 4E-B1-D: Continue Shopping Relocation START === */
```

through:

```text
/* === Step 4E-B1-D: Continue Shopping Relocation END === */
```

No other Cart work needs to be reverted.

## 8. Next step

Proceed directly to:

```text
Step 4E-B1-E · Duplicate service-row unhook
```

Remove only the frontend service-card hook while preserving the renderer function and every backend setting.
