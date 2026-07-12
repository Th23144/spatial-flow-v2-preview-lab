# Step 4E-B1-H · Cart-Only Product-Context Fallback Safety

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-G3：Passed exact uploaded-file validation and user-confirmed browser validation.
Step 4E-B1-H manual PHP edit：Completed.
Exact uploaded-file validation：Passed.
Cart browser result：User confirmed no visible change.
SAFE5 Checkout product-row regression：Pending explicit confirmation.
Step 4E-B1-H overall：Not yet fully passed.
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

## 2. Previous authoritative baseline

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

## 3. Exact replacement completed

Inside:

```php
function spatial_flow_cart_visual_2_product_meta_text( $cart_item )
```

the previous unconditional fallback block was replaced with a Cart/Checkout context guard.

Validated current block:

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

The exact current block occurs once. The previous unconditional fallback block occurs zero times.

## 4. Validated file result

```text
Version: 2.7.8
Uploaded name: functions(12).php
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Opening braces: 1,200
Closing braces: 1,200
Delta: +288 bytes / +8 lines
```

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

A Cart containing products with real categories may show no visible change. The user reported no page change, which is acceptable and is recorded as no visible Cart regression.

## 6. What did not change

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

Replace only the new checkout-context conditional block with the original unconditional fallback block.

No CSS, JavaScript, template, or other PHP restoration is required.

## 8. Remaining gate

The exact file and Cart no-visible-regression checks passed.

Before Step 4E-B2-A1 begins, one explicit SAFE5 Checkout product-row confirmation is still required:

```text
- product names normal
- product-row context/subtitle normal
- thumbnails normal
- quantities and totals normal
- no PHP warning or checkout layout regression
```

No screenshot is required. The detailed validation record is:

```text
project2-progress/STEP_4E_B1_H_VALIDATION.md
```
