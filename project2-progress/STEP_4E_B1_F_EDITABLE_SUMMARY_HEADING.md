# Step 4E-B1-F · Editable Cart Summary Heading

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-E：Passed exactly.
Step 4E-B1-F instructions：Issued.
User manual edit：Pending.
Cart page status：Not done.
```

## 1. Purpose

Replace only WooCommerce's Cart-page `Cart totals` heading with the backend-editable `sf_cart_summary_title` value.

Default visible result:

```text
Order summary
```

This must not alter Checkout, Thank You, emails, WooCommerce totals, shipping, coupon, payment, order, or template behavior.

## 2. Authoritative baseline

```text
File: functions.php
Uploaded name: functions(8).php
Version: 2.7.8
Size: 551,914 bytes
Lines: 10,257
SHA256: 81f7182db06c58788ab6d6409f56e3c433d3d7aff57f2cfda213f877f3ac6749
PHP syntax: Passed
Opening braces: 1,195
Closing braces: 1,195
```

If the local file differs from this exact baseline, stop and supply the newest file.

## 3. Exact manual replacement

### Find exactly

```php
// Step 4E-B1-E: Duplicate service-card row intentionally unhooked; renderer and settings preserved for rollback.

if ( ! function_exists( 'spatial_flow_cart_visual_2_summary_trust' ) ) {
```

This exact boundary must occur once.

### Replace exactly with

```php
// Step 4E-B1-E: Duplicate service-card row intentionally unhooked; renderer and settings preserved for rollback.

/* === Step 4E-B1-F: Editable Cart Summary Heading START === */
if ( ! function_exists( 'spatial_flow_cart_visual_2_summary_heading' ) ) {
    function spatial_flow_cart_visual_2_summary_heading( $translated, $original, $domain ) {
        if ( 'woocommerce' !== $domain || 'Cart totals' !== $original ) {
            return $translated;
        }

        if ( ! function_exists( 'is_cart' ) || ! is_cart() ) {
            return $translated;
        }

        $title = trim( (string) spatial_flow_cart_visual_2_setting( 'sf_cart_summary_title' ) );
        return '' !== $title ? $title : $translated;
    }
}
add_filter( 'gettext_woocommerce', 'spatial_flow_cart_visual_2_summary_heading', 20, 3 );
/* === Step 4E-B1-F: Editable Cart Summary Heading END === */

if ( ! function_exists( 'spatial_flow_cart_visual_2_summary_trust' ) ) {
```

## 4. Why the scope is narrow

```text
- the callback runs through WooCommerce's domain-specific gettext filter
- it accepts only the exact original WooCommerce string `Cart totals`
- it returns early unless WordPress is rendering the Cart page
- it reads the already-registered backend-editable sf_cart_summary_title value
- an empty setting safely falls back to WooCommerce's original translated heading
- Checkout and Thank You do not satisfy is_cart()
```

No WooCommerce template override is introduced.

## 5. Expected file result

When line endings remain unchanged:

```text
Version: 2.7.8
Size: 552,680 bytes
Lines: 10,275
SHA256: 47db168431d3d57818c5bc1fbd0dffcc1f405d394e3f70162eb50e1df2b47070
Opening braces: 1,199
Closing braces: 1,199
PHP syntax: Passed
Delta: +766 bytes / +18 lines
```

The predicted file was generated from the uploaded B1-E baseline and passed `php -l`.

## 6. Expected visible result

On the Cart page, the right-side heading changes from:

```text
Cart Totals
```

to the current backend value, by default:

```text
Order summary
```

The Customizer field is:

```text
Appearance → Customize → Spatial Flow Cart Page → Order summary heading
```

Changing that field and publishing should update only the Cart summary heading.

## 7. What must not change

```text
- SPATIAL_FLOW_CHILD_VERSION remains 2.7.8
- Cart totals, subtotal, shipping, coupon, quantity, remove, and checkout behavior remain native
- Continue Shopping remains below Proceed to Checkout
- Cart Totals trust cards remain
- the removed duplicate service row remains absent
- Your Bag. remains above the live count
- SAFE5 Checkout heading/content remain unchanged
- Thank You remains unchanged
- no CSS, JavaScript, template, plugin, or database change
```

## 8. Independent rollback

Delete only the block from:

```text
/* === Step 4E-B1-F: Editable Cart Summary Heading START === */
```

through:

```text
/* === Step 4E-B1-F: Editable Cart Summary Heading END === */
```

The original WooCommerce `Cart totals` heading then returns automatically.

## 9. Required evidence before B1-G

```text
- Cart screenshot showing `Order summary`
- confirmation that the Customizer field changes the Cart heading
- confirmation that SAFE5 Checkout and Thank You headings are unchanged
- confirmation that Cart operations remain normal
- upload of the post-B1-F functions.php
- exact size, lines, hash, PHP syntax, braces, and one-block scope validation
```

After validation, proceed directly to Step 4E-B1-G without another decision pause.