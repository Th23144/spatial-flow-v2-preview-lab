# Step 4E-B2-R5-E1 · Exact Source and State-Ownership Audit

Last updated: 2026-07-14  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E1 exact current-source audit：Complete.
No source file changed during audit.
Next executable step：R5-E2-A server fragment owner for live Cart counts.
Cart page status：Not done.
```

## Current uploaded server files

### functions.php

```text
Uploaded name: functions(13).php
Size: 550,884 bytes
Logical lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
Braces: 1,200 / 1,200
PHP syntax: Passed
SPATIAL_FLOW_CHILD_VERSION: 2.7.8
```

This is byte-identical to the last accepted PHP baseline.

### spatial-flow.css

```text
Uploaded name: spatial-flow(19).css
Size: 695,346 bytes
Logical lines: 23,305
SHA256: 316874b203f8ce4104a1a98751f9b5fd63034fb50b0cbeb9aa0c4d2d5711020e
Braces: 3,619 / 3,619
Comments: 340 / 340
Canonical Cart markers: 1 / 1
Cart Notice markers: 1 / 1
```

This is byte-identical to the last accepted CSS baseline.

### spatial-flow.js

```text
Uploaded name: spatial-flow(1).js
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378
```

This is byte-identical to the previously accepted JS baseline.

### header.php

```text
Size: 11,328 bytes
Logical lines: 172
SHA256: 84bd757eb6cdfe779065ad739fd6968a297ae612b49d554feecf9032866f3224
Braces: 13 / 13
PHP syntax: Passed
```

## Finding 1 · Exact Header BAG owner

`header.php` calculates the value only during PHP page render:

```php
$sf_cart_count = 0;
if ( function_exists( 'WC' ) && WC() && WC()->cart ) {
    $sf_cart_count = (int) WC()->cart->get_cart_contents_count();
}
```

The visible owner is:

```html
<a class="sf-v2-text-action sf-v2-bag-link" ...>
  Bag
  <sup>(N)</sup>
</a>
```

Exact replacement selector:

```text
.sf-v2-bag-link sup
```

No existing WooCommerce fragment currently owns this selector.

## Finding 2 · Exact Your Bag count owner

`functions.php` function:

```text
spatial_flow_cart_v2_heading()
```

calculates the count only during PHP render with:

```text
WC()->cart->get_cart_contents_count()
```

Visible count selector:

```text
.sf-cart-v2-heading__count
```

The singular/plural formats remain backend-editable through:

```text
sf_cart_count_singular
sf_cart_count_plural
```

No existing fragment currently owns this selector.

## Finding 3 · Why both values remain stale

Current source contains:

```text
woocommerce_add_to_cart_fragments filter count: 0
updated_wc_div listener count: 0
updated_cart_totals listener count: 0
removed_from_cart listener count: 0
wc_fragments_refreshed listener count: 0
```

The only `added_to_cart` listener belongs to the separate Add-to-Cart visual feedback feature and does not update Cart-page counts.

WooCommerce classic `cart.js` updates a non-empty Cart by replacing:

```text
.woocommerce-cart-form
.cart_totals
```

and then triggers:

```text
updated_wc_div
```

It does not replace the custom heading or the site Header in the non-empty path. Therefore both custom PHP-rendered count elements remain stale until a full page refresh.

## Finding 4 · Exact empty-Cart state defect

Current Canonical Cart assigns full-grid ownership to:

```css
.cart-empty,
.return-to-shop
```

However current WooCommerce outputs the empty message inside this wrapper:

```html
<div class="wc-empty-cart-message">
  <div/p class="cart-empty woocommerce-info">...</div/p>
</div>
```

The direct grid child is `.wc-empty-cart-message`, not `.cart-empty`.

Current CSS does not assign:

```css
.wc-empty-cart-message { grid-column: 1 / -1; }
```

Therefore a fresh empty Cart can leave the wrapper in the first grid column while the nested `.cart-empty` attempts to span a grid it does not participate in.

Exact future owner:

```text
body.woocommerce-cart .wc-empty-cart-message
```

No Cart template override is required.

## Finding 5 · Exact strict-1:1 heading-spacing defect

Approved static source:

```css
.cart-page {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 80px;
}
```

Because `gap` is used rather than `column-gap`, the static design has an 80px row gap as well as an 80px column gap.

The approved title/count sequence is therefore affected by:

```text
- 80px grid row gap between title and count
- count padding-bottom: 32px
- count margin-bottom: 40px
- another 80px grid row gap before product/sidebar row
```

Current Canonical Cart explicitly uses:

```css
column-gap: 80px;
row-gap: 0;
```

and places title and count inside one compressed `.sf-cart-v2-heading` section.

This is the exact reason the large editorial space highlighted by the user is missing. It is a source-level mismatch, not a subjective preference.

## Finding 6 · Desktop width declaration versus rendered evidence

Current Canonical Cart declares:

```text
--sf-cart-max: 1440px
width: min(1440px, calc(100% - 96px))
grid: 7fr / 5fr
column gap: 80px
```

Those declarations match the static source direction. However the supplied local-server screenshot still renders materially narrower in the browser.

Therefore R5-E4 must not blindly change `--sf-cart-max` again. It must first verify the final computed geometry under identical comparison conditions:

```text
browser zoom: 100%
same viewport width
actual getBoundingClientRect().width
computed grid-template-columns
computed column-gap
visualViewport.scale
```

The final result is judged by rendered geometry, not by declarations merely existing in the source.

## Finding 7 · Cart Notice owner

Exact bounded owner:

```text
/* === Step 4E Cart Notice Toast START ===
through
/* === Step 4E Cart Notice Toast END === */
```

The current owner uses:

```text
rounded 999px pill
28px circular pseudo-icon
solid dark Undo pill
shadowed white shell
```

This explains the user-rejected visual. R5-E5 can replace this bounded owner in place without touching Checkout or Thank You notices.

## Authorized remediation order

```text
R5-E2-A add server-owned live count fragments in functions.php
R5-E2-B trigger one debounced fragment refresh from updated_wc_div in spatial-flow.js
R5-E2-C browser validation
R5-E3 normalize .wc-empty-cart-message and empty-state geometry in Canonical Cart
R5-E4 strict static-source geometry rebase, including the missing 80px row rhythm
R5-E5 replace Cart Notice owner in place
R5-E6 final strict acceptance
```

## Freeze

```text
- no broad Header rewrite
- no Cart template override
- no hardcoded count
- no polling
- no append-only general Cart CSS
- no Completed 1:1 claim
```
