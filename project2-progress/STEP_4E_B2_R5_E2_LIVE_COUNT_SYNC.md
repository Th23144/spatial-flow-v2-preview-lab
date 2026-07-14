# Step 4E-B2-R5-E2 · Header BAG + Your Bag Live Count Synchronization

Last updated: 2026-07-14  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E1 exact source audit：Complete.
R5-E2 instructions：Issued.
User manual edit：Pending.
Cart page status：Not done.
```

## Purpose

After WooCommerce AJAX quantity update, remove or Undo/Restore:

```text
- Header BAG count must update immediately
- Your Bag piece count must update immediately
- no manual page refresh
```

WooCommerce remains the count source of truth.

## Scope

Modify only:

```text
1. functions.php
2. assets/js/spatial-flow.js
```

Do not modify:

```text
header.php
spatial-flow.css
WooCommerce templates
Customizer values
version 2.7.8
```

## Current exact baselines

### functions.php

```text
Uploaded name: functions(13).php
Size: 550,884 bytes
Logical lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
Braces: 1,200 / 1,200
PHP syntax: Passed
```

### spatial-flow.js

```text
Uploaded name: spatial-flow(1).js
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378
JavaScript syntax: Passed
```

# R5-E2-A · functions.php

## A1 · Replace the enqueue callback

Find exactly once:

```php
add_action('wp_enqueue_scripts', function(){
    wp_enqueue_style('spatial-flow-fonts', 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap', [], null);
    wp_enqueue_style('astra-parent-style', get_template_directory_uri().'/style.css', [], wp_get_theme('astra')->get('Version'));
    wp_enqueue_style('spatial-flow-style', get_stylesheet_directory_uri().'/assets/css/spatial-flow.css', ['astra-parent-style'], SPATIAL_FLOW_CHILD_VERSION);
    wp_enqueue_script('spatial-flow-script', get_stylesheet_directory_uri().'/assets/js/spatial-flow.js', [], SPATIAL_FLOW_CHILD_VERSION, true);
},20);
```

Replace exactly with:

```php
add_action('wp_enqueue_scripts', function(){
    wp_enqueue_style('spatial-flow-fonts', 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap', [], null);
    wp_enqueue_style('astra-parent-style', get_template_directory_uri().'/style.css', [], wp_get_theme('astra')->get('Version'));
    wp_enqueue_style('spatial-flow-style', get_stylesheet_directory_uri().'/assets/css/spatial-flow.css', ['astra-parent-style'], SPATIAL_FLOW_CHILD_VERSION);

    $spatial_flow_script_deps = [];
    if ( function_exists( 'is_cart' ) && is_cart() && wp_script_is( 'wc-cart-fragments', 'registered' ) ) {
        $spatial_flow_script_deps = [ 'jquery', 'wc-cart-fragments' ];
    }

    wp_enqueue_script('spatial-flow-script', get_stylesheet_directory_uri().'/assets/js/spatial-flow.js', $spatial_flow_script_deps, SPATIAL_FLOW_CHILD_VERSION, true);
},20);
```

This loads WooCommerce's native fragment owner only on the Cart page.

## A2 · Replace the complete heading/count block

Find the complete range:

```text
START:
/* === Step 4E-B1-B: Cart Heading + Live Count Renderer START === */

END:
/* === Step 4E-B1-B: Cart Heading + Live Count Renderer END === */
```

Replace the entire range, including both markers, with:

```php
/* === Step 4E-B1-B: Cart Heading + Live Count Renderer START === */
if ( ! function_exists( 'spatial_flow_cart_v2_count_text' ) ) {
    function spatial_flow_cart_v2_count_text( $count = null ) {
        if ( null === $count ) {
            $count = 0;
            if ( function_exists( 'WC' ) && WC()->cart ) {
                $count = absint( WC()->cart->get_cart_contents_count() );
            }
        }

        $count = absint( $count );

        $count_format = 1 === $count
            ? (string) spatial_flow_cart_visual_2_setting( 'sf_cart_count_singular' )
            : (string) spatial_flow_cart_visual_2_setting( 'sf_cart_count_plural' );

        return trim( str_replace( '%s', number_format_i18n( $count ), $count_format ) );
    }
}

if ( ! function_exists( 'spatial_flow_cart_v2_heading' ) ) {
    function spatial_flow_cart_v2_heading() {
        if ( ! function_exists( 'is_cart' ) || ! is_cart() ) {
            return;
        }

        $lead       = trim( (string) spatial_flow_cart_visual_2_setting( 'sf_cart_heading_lead' ) );
        $emphasis   = trim( (string) spatial_flow_cart_visual_2_setting( 'sf_cart_heading_emphasis' ) );
        $count_text = spatial_flow_cart_v2_count_text();

        if ( '' === $lead && '' === $emphasis && '' === $count_text ) {
            return;
        }
        ?>
        <section class="sf-cart-v2-heading" aria-labelledby="sf-cart-v2-heading-title">
            <?php if ( '' !== $lead || '' !== $emphasis ) : ?>
                <h1 id="sf-cart-v2-heading-title" class="sf-cart-v2-heading__title">
                    <?php if ( '' !== $lead ) : ?><span><?php echo esc_html( $lead ); ?></span><?php endif; ?>
                    <?php if ( '' !== $emphasis ) : ?><em><?php echo esc_html( $emphasis ); ?></em><?php endif; ?>
                </h1>
            <?php endif; ?>
            <?php if ( '' !== $count_text ) : ?>
                <p class="sf-cart-v2-heading__count"><?php echo esc_html( $count_text ); ?></p>
            <?php endif; ?>
        </section>
        <?php
    }
}

if ( ! function_exists( 'spatial_flow_cart_v2_count_fragments' ) ) {
    function spatial_flow_cart_v2_count_fragments( $fragments ) {
        if ( ! function_exists( 'WC' ) || ! WC()->cart ) {
            return $fragments;
        }

        $count      = absint( WC()->cart->get_cart_contents_count() );
        $count_text = spatial_flow_cart_v2_count_text( $count );

        $fragments['.sf-v2-bag-link sup'] = '<sup>' . esc_html( '(' . number_format_i18n( $count ) . ')' ) . '</sup>';

        if ( '' !== $count_text ) {
            $fragments['.sf-cart-v2-heading__count'] = '<p class="sf-cart-v2-heading__count">' . esc_html( $count_text ) . '</p>';
        }

        return $fragments;
    }
}
add_filter( 'woocommerce_add_to_cart_fragments', 'spatial_flow_cart_v2_count_fragments', 20 );
/* === Step 4E-B1-B: Cart Heading + Live Count Renderer END === */
```

## Expected functions.php result

```text
Size: 552,215 bytes
Logical lines: 10,292
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070
Braces: 1,208 / 1,208
PHP syntax: Passed
Version: 2.7.8
```

# R5-E2-B · spatial-flow.js

## B1 · Insert one bounded setup function

Find exactly once:

```javascript
  function setupShopV2FilterDetails() {
```

Insert immediately before it:

```javascript
  function setupCartLiveCountRefresh() {
    if (!window.jQuery || !document.body.classList.contains("woocommerce-cart")) return;

    var $body = window.jQuery(document.body);
    var refreshTimer = null;

    $body.on("updated_wc_div", function () {
      if (refreshTimer) window.clearTimeout(refreshTimer);

      refreshTimer = window.setTimeout(function () {
        $body.trigger("wc_fragment_refresh");
      }, 40);
    });
  }

```

## B2 · Add the initializer

Find exactly once:

```javascript
    setupProductStoryAccordion();
    setupAddToCartDFeedback();
```

Replace with:

```javascript
    setupProductStoryAccordion();
    setupCartLiveCountRefresh();
    setupAddToCartDFeedback();
```

## Expected spatial-flow.js result

```text
Size: 71,299 bytes
Logical lines: 2,011
SHA256: 9b2e04b490ca90344baf1e0ac840c5e04779018dd794d044d9e87520fa95ba4b
Braces: 381 / 381
JavaScript syntax: Passed
```

## Why this is bounded

```text
- WooCommerce still calculates the count.
- Header markup is unchanged.
- Customizer singular/plural formats remain the single text source.
- no polling
- no DOM quantity summation
- no custom cart request
- no Cart template override
- one debounced refresh after WooCommerce's native updated_wc_div event
```

## Browser validation

Start with at least two products and note the initial total quantity.

Test in this order:

```text
1. Increase one quantity and click Update Cart.
   Header BAG and Your Bag count must change without refresh.

2. Reduce the quantity and update again.
   Both counts must return without refresh.

3. Remove one product.
   Both counts must decrease without refresh.

4. Click Undo / Restore.
   Both counts must return without refresh.

5. Remove the final product.
   Header BAG must become (0) without refresh.

6. Restore/re-add the original products.
   Header BAG and Your Bag count must become correct again.
```

Also confirm:

```text
- no duplicate fragment request loop
- no console error
- Cart quantity, totals and notices remain normal
- Header structure and links remain unchanged
- SAFE5 Checkout remains normal
```

Upload the edited `functions.php` and `spatial-flow.js` after browser validation.
