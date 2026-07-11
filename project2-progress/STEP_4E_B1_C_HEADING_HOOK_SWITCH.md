# Step 4E-B1-C · Cart Heading Hook Switch

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-A：Passed.
Step 4E-B1-B：Passed.
Step 4E-B1-C instructions：Issued.
User manual edit：Pending.
Cart page status：Not done.
```

## 1. Purpose

Switch the active `woocommerce_before_cart` output from the legacy Cart intro renderer to the already validated backend-editable heading + live count renderer.

This step changes only one hook callback line.

## 2. Authoritative baseline

```text
File: functions.php
Uploaded name: functions(3).php
Version: 2.7.8
Size: 550,221 bytes
Lines: 10,215
SHA256: e6bb2759bb3ac25ef12a2379ba29995243fe8554f2e93b3fd82b3b4c29158578
PHP syntax: Passed
Opening braces: 1,187
Closing braces: 1,187
B1-B START markers: 1
B1-B END markers: 1
Active legacy intro hook: 1
Active new heading hook: 0
```

## 3. Exact manual replacement

### Find exactly

```php
add_action( 'woocommerce_before_cart', 'spatial_flow_cart_visual_2_intro', 6 );
```

### Replace exactly with

```php
add_action( 'woocommerce_before_cart', 'spatial_flow_cart_v2_heading', 6 );
```

Do not delete the legacy `spatial_flow_cart_visual_2_intro()` function or its Customizer settings. They remain available for one-line rollback.

## 4. Expected file result

When original line endings and final-newline state are preserved:

```text
Version: 2.7.8
Size: 550,217 bytes
Lines: 10,215
SHA256: dae763ce72595d168f5fb93324124a4a53a2aaf5861341c3958e4fb9f0b0a6fb
Opening braces: 1,187
Closing braces: 1,187
PHP syntax: Passed
Delta: -4 bytes / 0 lines
Legacy intro hook count: 0
New heading hook count: 1
```

## 5. Expected visible result

On a non-empty Cart page:

```text
- the old Review your order intro block disappears
- the old intro description disappears
- the old top Continue Shopping button temporarily disappears
- the new backend-editable heading appears: Your bag.
- the live WooCommerce quantity count appears, for example: 3 pieces · ready to go
- the count represents total cart quantity, not merely the number of product rows
```

The new heading has not received the final controlled CSS rebase yet. A plain or imperfect intermediate appearance is expected. Judge content, duplication, and count accuracy only at this step.

The temporary loss of Continue Shopping is intentional. Step 4E-B1-D will place that action in the correct native checkout-actions area.

## 6. What must not change

```text
- SPATIAL_FLOW_CHILD_VERSION remains 2.7.8
- Cart quantities, remove links, coupon, totals, shipping, checkout button, and recommendations remain functional
- service cards and trust cards remain unchanged
- SAFE5 Checkout remains unchanged
- no CSS or JavaScript file changes
- no WooCommerce Cart template override
```

## 7. Required browser checks

```text
1. Open Cart with more than one item quantity.
2. Confirm only one new heading exists.
3. Confirm the old intro is gone.
4. Confirm the number matches the Header BAG count / total cart quantity.
5. Change one quantity and update the Cart; confirm the heading count updates.
6. Confirm Cart has no PHP warning or fatal error.
7. Confirm SAFE5 Checkout remains unchanged.
```

## 8. Independent rollback

Replace:

```php
add_action( 'woocommerce_before_cart', 'spatial_flow_cart_v2_heading', 6 );
```

with:

```php
add_action( 'woocommerce_before_cart', 'spatial_flow_cart_visual_2_intro', 6 );
```

No other line needs to be changed.

## 9. Evidence required before B1-D

```text
- user confirmation of the browser checks
- upload of the edited functions.php
- exact hook-count, syntax, brace, size, line, and hash validation
```

After validation, proceed directly to Step 4E-B1-D without an additional decision pause.