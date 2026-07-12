# Step 4E-B1-G2 · Four Real Recommendation Products

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-G1：Passed exactly.
Step 4E-B1-G2 instructions：Issued.
User manual edit：Pending.
Cart page status：Not done.
```

## 1. Purpose

Change the real WooCommerce recommendation output from three eligible products to four eligible products.

This operation must update all four PHP count points together:

```text
1. recommendation function default limit
2. backend-selected fallback-product loop
3. frontend recommendation request
4. per-card index class cycle
```

The data source remains real WooCommerce products only:

```text
WooCommerce cross-sells
→ same-category products
→ four backend-selected fallback products
→ latest eligible published products
```

No product name, image, description, price, product ID, or URL may be hardcoded.

## 2. Authoritative baseline

```text
File: functions.php
Uploaded name: functions(10).php
Version: 2.7.8
Size: 550,596 bytes
Lines: 10,248
SHA256: b1590c87947fa3671c5f63ebf3a47e828062a0023d87b93d647205456fb38203
PHP syntax: Passed
Opening braces: 1,199
Closing braces: 1,199
```

If the local file differs from this exact baseline, stop and provide the newest file.

## 3. Exact manual replacements

Perform the following four one-line replacements only.

### Replacement 1 · Function default limit

Find exactly:

```php
    function spatial_flow_cart_visual_3_recommended_products( $limit = 3 ) {
```

Replace exactly with:

```php
    function spatial_flow_cart_visual_3_recommended_products( $limit = 4 ) {
```

This exact line must occur once.

### Replacement 2 · Backend fallback-product loop

Find exactly:

```php
            for ( $i = 1; $i <= 3; $i++ ) {
                $fallback_id = absint( spatial_flow_cart_visual_2_setting( 'sf_cart_next_default_product_' . $i ) );
```

Replace exactly with:

```php
            for ( $i = 1; $i <= 4; $i++ ) {
                $fallback_id = absint( spatial_flow_cart_visual_2_setting( 'sf_cart_next_default_product_' . $i ) );
```

This exact two-line boundary must occur once.

### Replacement 3 · Frontend recommendation request

Find exactly:

```php
        $recommended_products = spatial_flow_cart_visual_3_recommended_products( 3 );
```

Replace exactly with:

```php
        $recommended_products = spatial_flow_cart_visual_3_recommended_products( 4 );
```

This exact line must occur once.

### Replacement 4 · Card class index cycle

Find exactly:

```php
                    $card_index  = ( $index % 3 ) + 1;
```

Replace exactly with:

```php
                    $card_index  = ( $index % 4 ) + 1;
```

This exact line must occur once.

## 4. Expected file result

When line endings remain unchanged:

```text
Version: 2.7.8
Size: 550,596 bytes
Lines: 10,248
SHA256: 1db56fccbcfaf2a744e631c5da71c14a9be66cec87d99946e906b8f3aa84366f
Opening braces: 1,199
Closing braces: 1,199
PHP syntax: Passed
Delta: 0 bytes / 0 lines
```

The predicted result was generated from the uploaded B1-G1 baseline and passed `php -l`.

## 5. Expected visible result

When at least four eligible products exist outside the Cart:

```text
Complete Your Space shows four real WooCommerce product cards.
```

During this PHP-only intermediate step, the fourth card may wrap under the existing three-column CSS. That is expected and is not a failure.

The later B1-G3 step will handle the desktop four-card layout as a separate controlled CSS operation.

## 6. What must not change

```text
- SPATIAL_FLOW_CHILD_VERSION remains 2.7.8
- all four sf_cart_next_default_product_1 through _4 controls remain present
- recommendation priority remains cross-sells → category → backend fallback → latest products
- already-carted, hidden, unpublished, unavailable, non-purchasable, and out-of-stock products remain excluded
- Cart totals, coupon, quantity, remove, shipping, checkout, and notices remain native
- Order Summary remains backend-editable
- SAFE5 Checkout and Thank You remain unchanged
- no CSS, JavaScript, template, plugin, or database change
```

## 7. Independent rollback

Reverse only the four replacements:

```text
function default 4 → 3
fallback loop 4 → 3
frontend request 4 → 3
card index modulus 4 → 3
```

No other code needs to be restored.

## 8. Required evidence before B1-G3

```text
- upload of the post-B1-G2 functions.php
- exact size, lines, hash, PHP syntax, and brace validation
- Cart screenshot showing four real recommendation cards when four eligible products are available
- confirmation that each card opens the correct real product
- confirmation that Cart operations remain normal
```

After validation, proceed to B1-G3: controlled CSS conversion of the recommendation grid to four desktop columns. Do not append another historical Cart patch block.