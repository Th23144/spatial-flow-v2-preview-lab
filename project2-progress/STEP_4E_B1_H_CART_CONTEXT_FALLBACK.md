# Step 4E-B1-H · Cart-Only Product-Context Fallback Safety

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-G3：Passed exact uploaded-file validation and user-confirmed browser validation.
Step 4E-B1-H instructions：Issued.
User manual PHP edit：Pending.
Cart page status：Not done.
```

## 1. Purpose

Remove the fabricated Cart subtitle fallback:

```text
Crystal piece · Modern spatial living
```

when a product has no real product-authored, taxonomy, variation, or attribute context.

Preserve all real sources:

```text
1. _sf_cart_item_meta on the variation or parent product
2. real product category
3. selected variation values
4. real pa_purpose / pa_color / pa_five-elements-energy terms
```

Preserve the existing SAFE5 Checkout fallback until Checkout is separately reworked and regressed.

## 2. Authoritative baseline

```text
File: functions.php
Uploaded baseline name: functions(11).php
Version: 2.7.8
Size: 550,596 bytes
Lines: 10,248
SHA256: 1db56fccbcfaf2a744e631c5da71c14a9be66cec87d99946e906b8f3aa84366f
PHP syntax: Passed
Opening braces: 1,199
Closing braces: 1,199
```

Current CSS baseline remains unchanged:

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(4).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
```

If the local `functions.php` does not match the exact baseline above, stop and supply the newest file before editing.

## 3. Exact replacement

Inside:

```php
function spatial_flow_cart_visual_2_product_meta_text( $cart_item )
```

search for this exact complete block:

```php
        if ( empty( $parts ) ) {
            $parts = [ __( 'Crystal piece', 'spatial-flow' ), __( 'Modern spatial living', 'spatial-flow' ) ];
        }
```

This exact block must occur once.

Replace it exactly with:

```php
        if ( empty( $parts ) ) {
            $is_checkout_context = function_exists( 'is_checkout' )
                && is_checkout()
                && ( ! function_exists( 'is_order_received_page' ) || ! is_order_received_page() );

            if ( ! $is_checkout_context ) {
                return '';
            }

            $parts = [ __( 'Crystal piece', 'spatial-flow' ), __( 'Modern spatial living', 'spatial-flow' ) ];
        }
```

Do not change the surrounding category, variation, attribute, deduplication, slice, or separator logic.

## 4. Expected file result

When line endings remain unchanged:

```text
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Opening braces: 1,200
Closing braces: 1,200
Delta: +288 bytes / +8 lines
```

The predicted output has passed `php -l` with no syntax errors.

## 5. Expected behavior

Cart page:

```text
- products with _sf_cart_item_meta keep their authored context
- products with a real category keep the category context
- selected variation values remain visible
- real configured attribute terms remain visible
- products with none of those sources show no fabricated subtitle
- the product title remains intact when the subtitle is empty
```

SAFE5 Checkout:

```text
- the previous fallback remains available in checkout context
- existing checkout product-row behavior is not broadly rewritten
```

A Cart containing products with real categories may show no visible change. That is acceptable; the code-state and SAFE5 regression remain required.

## 6. What must not change

```text
- SPATIAL_FLOW_CHILD_VERSION 2.7.8
- spatial-flow.css
- spatial-flow.js
- Cart heading/count
- recommendation count or four-column layout
- product names, prices, quantities, remove actions, coupon, shipping, totals, or checkout button
- _sf_cart_item_meta field registration and saving
- WooCommerce templates
- plugins or database structure
```

## 7. Independent rollback

Replace only the new checkout-context conditional block with the original three-line fallback block.

No CSS, JavaScript, template, or other PHP restoration is required.

## 8. Required evidence before the next step

```text
- upload the edited functions.php
- exact size, lines, SHA256, brace balance, and PHP syntax validation
- Cart confirmation that product titles and real context remain normal
- SAFE5 Checkout product-row confirmation that no regression occurred
```

Do not begin B2 Cart CSS deletion batches until B1-H passes exact file and Cart/SAFE5 validation.
