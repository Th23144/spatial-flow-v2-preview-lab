# Step 4E-B1-G1 · Dead Manual Recommendation Fallback Cleanup

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-F：Passed exactly.
Step 4E-B1-G1 instructions：Issued.
User manual edit：Pending.
Cart page status：Not done.
```

## 1. Purpose

Delete only the obsolete sample-product defaults that contain invented product names, descriptions, prices, and links.

These keys are dead code:

```text
sf_cart_next_1_*
sf_cart_next_2_*
sf_cart_next_3_*
```

Each key occurs only once in `functions.php`, is not registered as a Customizer control, and is not read by the current recommendation renderer.

The real recommendation system must remain unchanged:

```text
1. WooCommerce cross-sells
2. same-category products
3. four backend-selected fallback product controls
4. latest publishable products
```

This substep intentionally makes no visible frontend change.

## 2. Authoritative baseline

```text
File: functions.php
Uploaded name: functions(9).php
Version: 2.7.8
Size: 552,680 bytes
Lines: 10,275
SHA256: 47db168431d3d57818c5bc1fbd0dffcc1f405d394e3f70162eb50e1df2b47070
PHP syntax: Passed
Opening braces: 1,199
Closing braces: 1,199
```

If the local file differs from this exact baseline, stop and provide the newest file.

## 3. Exact manual replacement

### Find exactly

```php
            'sf_cart_next_default_product_4' => '',

            'sf_cart_next_1_icon'      => 'jewelry',
            'sf_cart_next_1_image'     => '',
            'sf_cart_next_1_eyebrow'   => __( 'Soft daily ritual', 'spatial-flow' ),
            'sf_cart_next_1_title'     => __( 'Rose Quartz Point Necklace', 'spatial-flow' ),
            'sf_cart_next_1_text'      => __( 'A small, gentle piece for everyday wear or mindful gifting.', 'spatial-flow' ),
            'sf_cart_next_1_price'     => __( '$39.00', 'spatial-flow' ),
            'sf_cart_next_1_cta'       => __( 'View Piece', 'spatial-flow' ),
            'sf_cart_next_1_url'       => function_exists( 'spatial_flow_shop_url' ) ? spatial_flow_shop_url() : home_url( '/shop/' ),

            'sf_cart_next_2_icon'      => 'object',
            'sf_cart_next_2_image'     => '',
            'sf_cart_next_2_eyebrow'   => __( 'For bedside calm', 'spatial-flow' ),
            'sf_cart_next_2_title'     => __( 'Amethyst Placement Stone', 'spatial-flow' ),
            'sf_cart_next_2_text'      => __( 'A small placement piece for bedside areas, desks, or quiet corners.', 'spatial-flow' ),
            'sf_cart_next_2_price'     => __( '$28.00', 'spatial-flow' ),
            'sf_cart_next_2_cta'       => __( 'View Piece', 'spatial-flow' ),
            'sf_cart_next_2_url'       => function_exists( 'spatial_flow_shop_url' ) ? spatial_flow_shop_url() : home_url( '/shop/' ),

            'sf_cart_next_3_icon'      => 'package',
            'sf_cart_next_3_image'     => '',
            'sf_cart_next_3_eyebrow'   => __( 'Protective storage', 'spatial-flow' ),
            'sf_cart_next_3_title'     => __( 'Crystal Care Pouch', 'spatial-flow' ),
            'sf_cart_next_3_text'      => __( 'A simple storage option for keeping small crystal pieces protected.', 'spatial-flow' ),
            'sf_cart_next_3_price'     => __( '$12.00', 'spatial-flow' ),
            'sf_cart_next_3_cta'       => __( 'View Piece', 'spatial-flow' ),
            'sf_cart_next_3_url'       => function_exists( 'spatial_flow_shop_url' ) ? spatial_flow_shop_url() : home_url( '/shop/' ),
        ];
```

This exact block must occur once.

### Replace exactly with

```php
            'sf_cart_next_default_product_4' => '',
        ];
```

Do not delete any `sf_cart_next_default_product_1` through `_4` line.

## 4. Expected file result

When line endings remain unchanged:

```text
Version: 2.7.8
Size: 550,596 bytes
Lines: 10,248
SHA256: b1590c87947fa3671c5f63ebf3a47e828062a0023d87b93d647205456fb38203
Opening braces: 1,199
Closing braces: 1,199
PHP syntax: Passed
Delta: -2,084 bytes / -27 lines
```

The predicted result was generated from the uploaded B1-F baseline and passed `php -l`.

## 5. Expected visible result

```text
No visible Cart change.
```

The current three real recommendation cards must continue to render exactly as before. Their product names, images, prices, descriptions, and links must continue to come from real WooCommerce products.

## 6. What must not change

```text
- SPATIAL_FLOW_CHILD_VERSION remains 2.7.8
- sf_cart_next_default_product_1 through _4 remain present
- all four backend product selector controls remain present
- recommendation priority logic remains unchanged
- current recommendation count remains 3 in this substep
- Cart totals, coupon, quantity, remove, shipping, checkout, and notices remain native
- Order Summary remains backend-editable
- SAFE5 Checkout and Thank You remain unchanged
- no CSS, JavaScript, template, plugin, or database change
```

## 7. Independent rollback

Replace:

```php
            'sf_cart_next_default_product_4' => '',
        ];
```

with the exact original block recorded in section 3.

## 8. Required evidence before B1-G2

```text
- upload of the post-B1-G1 functions.php
- exact size, lines, hash, PHP syntax, and brace validation
- confirmation that Cart appearance and operations are unchanged
- confirmation that the real recommendation cards still render
```

After validation, proceed to B1-G2: switch the real recommendation data output from three products to four products. CSS layout work remains a separate later operation.