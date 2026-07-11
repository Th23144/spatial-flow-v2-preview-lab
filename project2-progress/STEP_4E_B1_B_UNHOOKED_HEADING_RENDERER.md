# Step 4E-B1-B · Cart Unhooked Heading + Live Count Renderer

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-A：Passed.
Step 4E-B1-B manual edit：Reported complete.
Cart frontend unchanged：Passed by user check.
SAFE5 Checkout unchanged：Passed by user check.
Uploaded file validation：Pending.
Next after file validation：Step 4E-B1-C · Hook switch.
Cart page status：Not done.
```

## 1. Purpose

Add the new Cart heading and live item-count renderer beside the existing Cart code, but do not hook it yet.

This step must not change:

```text
- SPATIAL_FLOW_CHILD_VERSION 2.7.8
- the existing spatial_flow_cart_visual_2_intro() function
- the existing woocommerce_before_cart intro hook
- current Cart frontend output
- service cards
- trust cards
- recommendation output
- SAFE5 Checkout
- assets/css/spatial-flow.css
- assets/js/spatial-flow.js
```

## 2. Authoritative baseline

```text
File: functions.php
Version: 2.7.8
Size: 548,377 bytes
Lines: 10,175
SHA256: 0b2c1ea9dcad518a949f3a7a26974f0e937e7da8bf3ddd2ac7d924e3111d4c64
PHP syntax: Passed
Opening braces: 1,182
Closing braces: 1,182
```

This is the uploaded and validated `functions(2).php` file. If the local file differs, stop and supply the newest file before editing.

## 3. Exact manual replacement

### Find exactly

```php
add_action( 'woocommerce_before_cart', 'spatial_flow_cart_visual_2_intro', 6 );

if ( ! function_exists( 'spatial_flow_cart_visual_2_service_cards' ) ) {
```

### Replace exactly with

```php
add_action( 'woocommerce_before_cart', 'spatial_flow_cart_visual_2_intro', 6 );

/* === Step 4E-B1-B: Cart Heading + Live Count Renderer START === */
if ( ! function_exists( 'spatial_flow_cart_v2_heading' ) ) {
    function spatial_flow_cart_v2_heading() {
        if ( ! function_exists( 'is_cart' ) || ! is_cart() ) {
            return;
        }

        $lead     = trim( (string) spatial_flow_cart_visual_2_setting( 'sf_cart_heading_lead' ) );
        $emphasis = trim( (string) spatial_flow_cart_visual_2_setting( 'sf_cart_heading_emphasis' ) );
        $count    = 0;

        if ( function_exists( 'WC' ) && WC()->cart ) {
            $count = absint( WC()->cart->get_cart_contents_count() );
        }

        $count_format = 1 === $count
            ? (string) spatial_flow_cart_visual_2_setting( 'sf_cart_count_singular' )
            : (string) spatial_flow_cart_visual_2_setting( 'sf_cart_count_plural' );
        $count_text = trim( str_replace( '%s', number_format_i18n( $count ), $count_format ) );

        if ( '' === $lead && '' === $emphasis && '' === $count_text ) {
            return;
        }
        ?>
        <section class="sf-cart-v2-heading" aria-labelledby="sf-cart-v2-heading-title">
            <?php if ( '' !== $count_text ) : ?>
                <p class="sf-cart-v2-heading__count"><?php echo esc_html( $count_text ); ?></p>
            <?php endif; ?>
            <?php if ( '' !== $lead || '' !== $emphasis ) : ?>
                <h1 id="sf-cart-v2-heading-title" class="sf-cart-v2-heading__title">
                    <?php if ( '' !== $lead ) : ?><span><?php echo esc_html( $lead ); ?></span><?php endif; ?>
                    <?php if ( '' !== $emphasis ) : ?><em><?php echo esc_html( $emphasis ); ?></em><?php endif; ?>
                </h1>
            <?php endif; ?>
        </section>
        <?php
    }
}
/* === Step 4E-B1-B: Cart Heading + Live Count Renderer END === */

if ( ! function_exists( 'spatial_flow_cart_visual_2_service_cards' ) ) {
```

## 4. Expected file result

When the original line endings and final-newline state are preserved:

```text
Version: 2.7.8
Size: 550,221 bytes
Lines: 10,215
SHA256: e6bb2759bb3ac25ef12a2379ba29995243fe8554f2e93b3fd82b3b4c29158578
Opening braces: 1,187
Closing braces: 1,187
PHP syntax: Passed
Delta: +1,844 bytes / +40 lines
```

An editor may change byte size/hash by changing line endings. In that case, upload the file for content validation.

## 5. Why this renderer is safe

```text
- It reads the existing backend-editable heading/count settings added in B1-A.
- It reads the live WooCommerce cart contents count.
- It does not hardcode a product count.
- It replaces only the literal %s token instead of executing arbitrary printf formatting from an editable field.
- It escapes all rendered text.
- It is not attached to any hook in B1-B, so it cannot change the frontend yet.
```

## 6. Browser validation received

```text
Cart frontend unchanged：Passed.
SAFE5 Checkout unchanged：Passed.
```

This matches the expected dormant-renderer behavior.

## 7. Rollback

Delete only the block between:

```text
/* === Step 4E-B1-B: Cart Heading + Live Count Renderer START === */
```

and:

```text
/* === Step 4E-B1-B: Cart Heading + Live Count Renderer END === */
```

Do not change the existing intro hook.

## 8. Required file validation before B1-C

```text
1. Upload the edited functions.php.
2. Verify version remains 2.7.8.
3. Verify exact START/END block content.
4. Verify no new add_action() was introduced for spatial_flow_cart_v2_heading().
5. Verify PHP syntax and brace balance.
6. Verify file size/line count/hash or content-equivalent result.
```

After file validation, proceed directly to B1-C without another decision pause.