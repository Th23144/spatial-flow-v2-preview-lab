# Step 4E-B1-E · Duplicate Service-Row Unhook

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-D：Passed exactly.
Step 4E-B1-E instructions：Issued.
User manual edit：Pending.
Cart page status：Not done.
```

## 1. Purpose

Remove only the frontend hook that renders the three service cards directly below the Cart table.

The renderer function and all `sf_cart_service_*` Customizer settings remain in `functions.php`, so the feature stays backend-editable and independently reversible. The Cart Totals trust cards remain active.

This matches the approved V2 Cart structure more closely and prevents the duplicate service row from pushing the totals section farther down on mobile.

## 2. Authoritative baseline

```text
File: functions.php
Uploaded name: functions(7).php
Version: 2.7.8
Size: 551,894 bytes
Lines: 10,257
SHA256: 213850d5a39b1d7394bae1a6e537961a1ad4c78795b9c5a36bae939d7f75ee18
PHP syntax: Passed
Opening braces: 1,195
Closing braces: 1,195
Duplicate service-row frontend hook: 1
```

If the local file differs from this baseline, stop and supply the newest file.

## 3. Exact manual replacement

### Find exactly

```php
add_action( 'woocommerce_after_cart_table', 'spatial_flow_cart_visual_2_service_cards', 20 );
```

This exact line must occur once.

### Replace exactly with

```php
// Step 4E-B1-E: Duplicate service-card row intentionally unhooked; renderer and settings preserved for rollback.
```

Do not delete or edit the surrounding `spatial_flow_cart_visual_2_service_cards()` function.

## 4. Expected file result

```text
Version: 2.7.8
Size: 551,914 bytes
Lines: 10,257
SHA256: 81f7182db06c58788ab6d6409f56e3c433d3d7aff57f2cfda213f877f3ac6749
Opening braces: 1,195
Closing braces: 1,195
PHP syntax: Passed
Delta: +20 bytes / 0 lines
```

The predicted file was generated from the uploaded B1-D baseline and passed `php -l`.

## 5. Expected visible result

The three cards below the Cart table disappear:

```text
Carefully Packed
Need Help Choosing?
Gift-Ready Option
```

The right-side Cart Totals trust cards remain:

```text
Secure Checkout
Shipping Shown At Checkout
Easy Returns
Gift-Ready Packaging
```

Continue Shopping and Proceed to Checkout remain in place and functional.

## 6. What must not change

```text
- SPATIAL_FLOW_CHILD_VERSION remains 2.7.8
- spatial_flow_cart_visual_2_service_cards() remains in the file
- all sf_cart_service_* Customizer settings remain in the file
- summary trust hook remains active
- Continue Shopping remains directly below Proceed to Checkout
- Your Bag. remains above the live count
- Cart rows, remove, quantity, coupon, shipping, totals, and recommendations remain functional
- SAFE5 Checkout remains unchanged
- no CSS, JavaScript, template, plugin, or database changes
```

## 7. Independent rollback

Replace the rollback comment with the original hook line:

```php
add_action( 'woocommerce_after_cart_table', 'spatial_flow_cart_visual_2_service_cards', 20 );
```

No other code needs to be reverted.

## 8. Required evidence before B1-F

```text
- screenshot showing the three service cards are gone
- screenshot or confirmation that Cart Totals trust cards remain
- confirmation that Continue Shopping and Proceed to Checkout still work
- confirmation that Cart operations remain normal
- upload of the post-B1-E functions.php
- exact size, line, hash, syntax, and brace validation
```

After validation, proceed directly to Step 4E-B1-F without another decision pause.
