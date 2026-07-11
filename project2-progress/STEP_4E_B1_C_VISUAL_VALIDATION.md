# Step 4E-B1-C · Cart Heading Hook Switch Visual Validation

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-C browser validation：Failed / correction required.
Hook switch visible result：Partially correct.
Step 4E-B1-C-FIX1 count-placeholder correction：Instructions issued.
Step 4E-B1-D：Blocked until FIX1 browser + file validation pass.
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

Therefore B1-C cannot be marked Passed until FIX1 succeeds.

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

WordPress treats `%s` placeholders in a `get_theme_mod()` default as theme-directory placeholders. The first `%s` is therefore replaced by the parent theme URI before the Cart renderer receives the value. The renderer then has no `%s` token left to replace with the live quantity.

## 5. Correction requirements

FIX1 is a small independently reversible PHP-only correction that must:

```text
- prevent get_theme_mod() from interpreting the two Cart count-format defaults
- preserve saved backend-editable Cart settings
- repair a persisted count format beginning with the current parent-theme or child-theme URI
- keep SPATIAL_FLOW_CHILD_VERSION at 2.7.8
- leave CSS, JavaScript, WooCommerce templates, totals, coupon, shipping, Checkout, payment, orders, and emails unchanged
```

## 6. Executable FIX1 record

```text
project2-progress/STEP_4E_B1_C_FIX1_COUNT_PLACEHOLDER.md
```

The working baseline is derived from the exact validated B1-B upload plus the single B1-C hook-line change shown by the browser result. If the exact helper anchor is not found once, the user must stop and upload the current file instead of improvising.

## 7. Required evidence before B1-D

```text
- numeric count with no theme URI
- quantity-change test updates the count
- singular-count test displays 1 piece · ready to go
- SAFE5 Checkout unchanged
- upload of the post-FIX1 functions.php
- exact size, line, SHA256, PHP syntax, brace, and hook validation
```

Do not proceed to B1-D until FIX1 is applied and validated.