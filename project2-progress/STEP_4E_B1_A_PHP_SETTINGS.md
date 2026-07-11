# Step 4E-B1-A · Cart PHP Settings-Only Manual Edit

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A instructions：Issued.
User manual edit：Pending.
Frontend output change expected：None.
Cart page status：Not done.
```

## 1. Purpose

Add only the backend-editable Cart heading/count/summary settings and the fourth fallback recommendation selector.

This step must not change:

```text
- SPATIAL_FLOW_CHILD_VERSION 2.7.7
- frontend hooks
- current Cart visual output
- old intro block
- service cards
- trust cards
- current three-product recommendation rendering
- SAFE5 Checkout
- assets/css/spatial-flow.css
- assets/js/spatial-flow.js
```

## 2. Authoritative baseline

```text
File: functions.php
Version: 2.7.7
Size: 547,386 bytes
Lines: 10,162
SHA256: 4a0e6d7ee048398afb782c576626543f0ee67d44f37523ec3db9bd75c7ce12b2
PHP syntax: Passed
Opening braces: 1,182
Closing braces: 1,182
```

If the local file no longer matches this baseline, stop and provide the newest `functions.php` before editing.

## 3. Manual operation A1 · Add default heading/count/summary values

### Find exactly

```php
            'sf_cart_continue_url'     => function_exists( 'spatial_flow_shop_url' ) ? spatial_flow_shop_url() : home_url( '/shop/' ),

            'sf_cart_service_enabled'  => '1',
```

### Replace exactly with

```php
            'sf_cart_continue_url'     => function_exists( 'spatial_flow_shop_url' ) ? spatial_flow_shop_url() : home_url( '/shop/' ),

            'sf_cart_heading_lead'     => __( 'Your', 'spatial-flow' ),
            'sf_cart_heading_emphasis' => __( 'bag.', 'spatial-flow' ),
            'sf_cart_count_singular'   => __( '%s piece · ready to go', 'spatial-flow' ),
            'sf_cart_count_plural'     => __( '%s pieces · ready to go', 'spatial-flow' ),
            'sf_cart_summary_title'    => __( 'Order summary', 'spatial-flow' ),

            'sf_cart_service_enabled'  => '1',
```

Expected delta for A1:

```text
+409 bytes
+6 lines
```

Rollback: restore only the original three-line block.

## 4. Manual operation A2 · Add fourth fallback-product default

### Find exactly

```php
            'sf_cart_next_default_product_3' => '',

            'sf_cart_next_1_icon'      => 'jewelry',
```

### Replace exactly with

```php
            'sf_cart_next_default_product_3' => '',
            'sf_cart_next_default_product_4' => '',

            'sf_cart_next_1_icon'      => 'jewelry',
```

Expected delta for A2:

```text
+52 bytes
+1 line
```

Rollback: delete only the `sf_cart_next_default_product_4` line.

## 5. Manual operation A3 · Register the five new Customizer controls

### Find exactly

```php
            'sf_cart_continue_url'    => [ __( 'Continue shopping button link', 'spatial-flow' ), 'url' ],

            'sf_cart_service_enabled' => [ __( 'Show service cards', 'spatial-flow' ), 'checkbox' ],
```

### Replace exactly with

```php
            'sf_cart_continue_url'    => [ __( 'Continue shopping button link', 'spatial-flow' ), 'url' ],

            'sf_cart_heading_lead'     => [ __( 'Cart heading · lead text', 'spatial-flow' ), 'text' ],
            'sf_cart_heading_emphasis' => [ __( 'Cart heading · italic text', 'spatial-flow' ), 'text' ],
            'sf_cart_count_singular'   => [ __( 'Cart count · singular format', 'spatial-flow' ), 'text' ],
            'sf_cart_count_plural'     => [ __( 'Cart count · plural format', 'spatial-flow' ), 'text' ],
            'sf_cart_summary_title'    => [ __( 'Order summary heading', 'spatial-flow' ), 'text' ],

            'sf_cart_service_enabled' => [ __( 'Show service cards', 'spatial-flow' ), 'checkbox' ],
```

Expected delta for A3:

```text
+530 bytes
+6 lines
```

Rollback: remove only the five inserted control lines and their one separating blank line.

## 6. Manual operation A4 · Expand only the fallback-product selector loop

There are two nearby loops with a limit of `3`. Do not change the service-card loop.

### Leave this loop unchanged

```php
        for ( $i = 1; $i <= 3; $i++ ) {
            $fields[ 'sf_cart_service_' . $i . '_icon' ]  = [ sprintf( __( 'Service card %d icon', 'spatial-flow' ), $i ), 'icon' ];
```

### Find this exact fallback-product loop

```php
        for ( $i = 1; $i <= 3; $i++ ) {
            $fields[ 'sf_cart_next_default_product_' . $i ] = [ sprintf( __( 'Fallback recommended product %d', 'spatial-flow' ), $i ), 'product' ];
        }
```

### Replace exactly with

```php
        for ( $i = 1; $i <= 4; $i++ ) {
            $fields[ 'sf_cart_next_default_product_' . $i ] = [ sprintf( __( 'Fallback recommended product %d', 'spatial-flow' ), $i ), 'product' ];
        }
```

Expected delta for A4:

```text
0 bytes
0 lines
```

Rollback: change only this loop limit from `4` back to `3`.

## 7. Expected final file after all four operations

When the original line endings and missing final newline are preserved:

```text
File: functions.php
Version: 2.7.7
Size: 548,377 bytes
Lines: 10,175
SHA256: 4675fb8336fa34d72d8be3280facb3c5a88a60f5e829f414f7406c96cb629678
Opening braces: 1,182
Closing braces: 1,182
PHP syntax: Passed
Total delta: +991 bytes / +13 lines
```

An editor that changes line endings or adds a final newline can change the byte size/hash. In that case, upload the file for content validation rather than assuming failure.

## 8. Required checks before B1-B

```text
1. Save functions.php only.
2. Do not edit the version number.
3. Open WordPress Customizer → Spatial Flow Cart Page.
4. Confirm these controls appear:
   - Cart heading · lead text
   - Cart heading · italic text
   - Cart count · singular format
   - Cart count · plural format
   - Order summary heading
   - Fallback recommended product 4
5. Open the current Cart page and confirm the frontend looks unchanged.
6. Open SAFE5 Checkout and confirm it looks unchanged.
7. Upload the edited functions.php for exact validation.
```

Do not begin B1-B until the edited file is re-read and validated.
