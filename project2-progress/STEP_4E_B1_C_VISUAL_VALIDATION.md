# Step 4E-B1-C · Cart Heading Hook Switch Visual Validation

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-C browser validation：Failed / correction required.
Hook switch visible result：Partially correct.
Next executable step：Step 4E-B1-C-FIX1 · Count-format placeholder correction.
Step 4E-B1-D：Blocked until FIX1 and current functions.php validation pass.
Cart page status：Not done.
```

## 1. Evidence reviewed

The user supplied a full desktop Cart screenshot after switching the active `woocommerce_before_cart` callback from:

```php
spatial_flow_cart_visual_2_intro
```

to:

```php
spatial_flow_cart_v2_heading
```

## 2. Passed visible checks

```text
- The legacy Review your order intro block is gone.
- The legacy intro description is gone.
- The old top Continue Shopping action is gone as expected for this intermediate step.
- The new Your Bag. heading appears once.
- Existing Cart rows, Cart Totals, service cards, trust cards, recommendations, Header, and Footer remain visible.
- No visible PHP warning or fatal error appears in the screenshot.
```

## 3. Failed visible check

The live count line is incorrect.

Observed output begins with the parent-theme directory URL:

```text
http://spatialflow.local/wp-content/themes/astra pieces · ready to go
```

Expected output for the visible two quantity-1 Cart items is:

```text
2 pieces · ready to go
```

Therefore B1-C cannot be marked Passed.

## 4. Root cause

The Cart defaults currently contain `%s`:

```php
'sf_cart_count_singular' => __( '%s piece · ready to go', 'spatial-flow' ),
'sf_cart_count_plural'   => __( '%s pieces · ready to go', 'spatial-flow' ),
```

The current Cart settings helper passes those strings directly as the default argument to `get_theme_mod()`:

```php
return get_theme_mod( $key, $defaults[ $key ] ?? '' );
```

WordPress treats `%s` placeholders in a `get_theme_mod()` default as theme-directory placeholders. The first `%s` is therefore replaced by the parent theme URI (`.../themes/astra`) before the Cart renderer receives the value.

The renderer itself then has no `%s` token left to replace with the live quantity.

## 5. Correction requirements

FIX1 must be a small, independently reversible PHP-only correction that:

```text
- prevents get_theme_mod() from interpreting Cart count-format defaults
- preserves all saved backend-editable Cart settings
- repairs an already persisted theme-URI count format if the Customizer saved it
- keeps SPATIAL_FLOW_CHILD_VERSION at 2.7.8
- does not modify CSS, JavaScript, WooCommerce templates, totals, coupon logic, shipping, or Checkout
```

## 6. Required evidence before issuing FIX1 instructions

```text
- upload the current post-B1-C functions.php
- verify that the only B1-C code change is the one-line hook switch
- validate size, line count, SHA256, PHP syntax, and brace balance
- inspect the exact current Cart setting helper and renderer ranges
```

Do not proceed to B1-D until FIX1 is applied and the count displays the live quantity correctly.