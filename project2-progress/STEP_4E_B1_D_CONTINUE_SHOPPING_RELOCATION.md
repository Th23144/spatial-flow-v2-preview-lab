# Step 4E-B1-D · Continue Shopping Relocation

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-C-FIX3：Passed exactly.
Step 4E-B1-D instructions：Issued.
User manual edit：Pending.
Cart page status：Not done.
```

## 1. Purpose

Add one dedicated, backend-editable `Continue Shopping` link immediately after WooCommerce's native `Proceed to Checkout` button in the Cart Totals action area.

The native checkout button, checkout URL, totals calculations, shipping, coupon logic, payment flow, and SAFE5 Checkout must remain untouched.

The approved static Cart reference places a full-width secondary action directly below the primary checkout action.

## 2. Authoritative baseline

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

If the local file differs from this baseline, stop and supply the newest file.

## 3. Exact manual insertion

### Find exactly

```php
add_action( 'woocommerce_after_cart_totals', 'spatial_flow_cart_visual_2_summary_trust', 20 );

if ( ! function_exists( 'spatial_flow_cart_visual_3_cart_product_ids' ) ) {
```

This exact boundary must occur once.

### Replace exactly with

```php
add_action( 'woocommerce_after_cart_totals', 'spatial_flow_cart_visual_2_summary_trust', 20 );

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

if ( ! function_exists( 'spatial_flow_cart_visual_3_cart_product_ids' ) ) {
```

## 4. Expected file result

```text
Version: 2.7.8
Size: 551,894 bytes
Lines: 10,257
SHA256: 213850d5a39b1d7394bae1a6e537961a1ad4c78795b9c5a36bae939d7f75ee18
Opening braces: 1,195
Closing braces: 1,195
PHP syntax: Passed
Delta: +962 bytes / +24 lines
```

The predicted file was generated from the uploaded baseline and passed `php -l`.

## 5. Expected visible result

Inside the Cart Totals action area:

```text
PROCEED TO CHECKOUT
Continue Shopping
```

Required behavior:

```text
- Continue Shopping appears exactly once.
- It appears after the native Proceed to Checkout button.
- Clicking it returns to the backend-configured sf_cart_continue_url.
- If that saved URL is empty, it safely falls back to the real Shop URL.
- The native checkout button and its real WooCommerce checkout URL are unchanged.
```

The new link may still look plain or only partially styled at this intermediate stage. Final full-width secondary-button styling belongs to the later controlled Cart CSS rebase.

## 6. What must not change

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

Do not revert any other Cart work.

## 8. Required evidence before B1-E

```text
- screenshot showing Continue Shopping directly below Proceed to Checkout
- confirmation that Continue Shopping opens the Shop page
- confirmation that Proceed to Checkout still opens SAFE5 Checkout
- confirmation that Cart operations remain normal
- upload of the post-B1-D functions.php
- exact size, line, hash, syntax, and brace validation
```

After validation, proceed directly to Step 4E-B1-E without another decision pause.
