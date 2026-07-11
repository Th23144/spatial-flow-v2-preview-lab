# Step 4E-B1/B2 · Controlled Cart PHP/CSS Rebase Candidate

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`  
Source baseline: current local `functions.php`, `assets/css/spatial-flow.css`, and unchanged `assets/js/spatial-flow.js`

## Status

```text
Step 4E-B1 · PHP controlled rebase candidate：Generated / static validation passed.
Step 4E-B2 · CSS controlled rebase candidate：Generated / static validation passed.
Candidate applied to user's local site：Pending.
Step 4E-B3 · Desktop/mobile browser + functional validation：Pending.
Cart page status：Not done.
```

This step produced a local replacement package only. The repository does not become the production source of truth for the theme files. The current user-installed local files remain authoritative after replacement and browser acceptance.

## 1. Input baselines

```text
functions.php
Version: 2.7.7
Size: 547,386 bytes
Lines: 10,162
SHA256: 4a0e6d7ee048398afb782c576626543f0ee67d44f37523ec3db9bd75c7ce12b2
PHP syntax: Passed

assets/css/spatial-flow.css
Uploaded name: spatial-flow(2).css
Size: 767,069 bytes
Lines: 25,742
SHA256: a8db33e2cd3e7886a12a455383fe6769cbd262e7e6d6fac8003aa46fe641a10d
CSS parser errors: 0

assets/js/spatial-flow.js
Size: 70,828 bytes
Lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
JavaScript syntax: Passed
```

## 2. Generated candidate package

```text
Package: STEP_4E_B_CART_REBASE.zip
Package SHA256: 170b70c5eeff02a5d76448bbbda5787b3677167ddb2eee38ed992cb313982ecc

Theme-relative files:
functions.php
assets/css/spatial-flow.css
README.txt
```

### Candidate `functions.php`

```text
Version: 2.7.8
Size: 548,574 bytes
Lines: 10,208
SHA256: 8352a16cebdc1fd24728ccf7006b549ff8ec548722254afabeb040a8fc5273e3
Opening braces: 1,191
Closing braces: 1,191
PHP syntax: Passed
```

### Candidate `assets/css/spatial-flow.css`

```text
Size: 676,667 bytes
Lines: 22,983
SHA256: 4e7d1012e449ae9a10fab5c8bbcac40a9e17db53eda504d3f6780532a23a6501
Opening braces: 3,600
Closing braces: 3,600
Comment openings: 326
Comment closings: 326
CSS parser errors: 0
```

### JavaScript

```text
No JavaScript file was modified or generated.
The existing assets/js/spatial-flow.js remains the required baseline.
```

## 3. PHP controlled changes

### 3.1 Cache/version control

`SPATIAL_FLOW_CHILD_VERSION` changes from `2.7.7` to `2.7.8` so the replaced CSS is requested without relying on the old browser cache key.

### 3.2 New backend-editable Cart target fields

Added to the existing `Spatial Flow Cart Page` Customizer section:

```text
sf_cart_heading_lead
sf_cart_heading_emphasis
sf_cart_count_singular
sf_cart_count_plural
sf_cart_summary_title
sf_cart_next_default_product_4
```

Default target copy:

```text
Your + bag.
%s piece · ready to go
%s pieces · ready to go
Order summary
```

The count is generated from the live WooCommerce Cart contents count.

### 3.3 Header and count

The old rounded `.sf-cart-pro-intro` frontend card is replaced by a target-aligned `.sf-cart-v2-header` containing:

```text
- backend-editable split heading
- live WooCommerce item/quantity count
- singular/plural backend-editable count formats
```

Legacy intro settings and saved values remain present for rollback. Their old visible card is not retained in the final target layout.

### 3.4 Continue Shopping

The existing backend-editable fields remain:

```text
sf_cart_continue_text
sf_cart_continue_url
```

The link moves from the old top intro card into the native WooCommerce `woocommerce_proceed_to_checkout` action area, after the real Proceed to Checkout button.

### 3.5 Duplicate service row

The legacy three-card service renderer and Customizer values remain in PHP for rollback, but its `woocommerce_after_cart_table` frontend hook is intentionally removed.

The final frontend keeps one restrained summary-adjacent trust set through the existing editable `sf_cart_trust_*` fields.

### 3.6 Product context safety

`_sf_cart_item_meta`, real category, selected variation values, and real attributes remain valid data sources.

On the Cart page, the fabricated fallback:

```text
Crystal piece · Modern spatial living
```

is no longer generated when no real source exists.

The shared Checkout code path retains its prior fallback behavior for this candidate so the Cart pass does not silently alter SAFE5 Checkout before regression testing.

### 3.7 Recommendations

Recommendation output expands from 3 to 4 real WooCommerce products.

Priority remains:

```text
1. Real WooCommerce cross-sells
2. Same-category products
3. Backend-selected fallback products
4. Latest publishable products
```

Removed dead legacy sample defaults containing fake product names, prices, images, and URLs.

The renderer no longer invents these fallback claims when real product-authored data is absent:

```text
Recommended piece
A considered piece from the %s collection.
```

It now omits the corresponding label or description.

### 3.8 Template boundary

```text
No cart.php override.
No cart-totals.php override.
No cross-sells.php override.
No Cart-specific JavaScript handler.
```

Native WooCommerce quantity, remove, coupon, update-cart, shipping, totals, notices, checkout URL, and nonce/form behavior remain untouched.

## 4. CSS controlled changes

The exact historical range from:

```text
Cart Visual 1 START
```

to:

```text
Cart Visual 3 REAL WOOCOMMERCE RECOMMENDATIONS END
```

was replaced as one controlled range.

Verification:

```text
Prefix before the replaced range：Byte-identical.
Suffix after the replaced range：Byte-identical.
Old Cart marker count：0.
New controlled START marker count：1.
New controlled END marker count：1.
Separate Step 4E Cart Notice Toast START/END markers：Preserved 1 / 1.
```

The new controlled block implements:

```text
- accepted Header/Footer remain untouched
- hidden old Astra Cart page title
- 1440px target maximum width
- open 7fr / 5fr desktop composition
- live editorial Cart heading/count
- native Cart table transformed into open item rows
- 120px desktop product images
- native remove/quantity/subtotal controls retained
- native Coupon and Update Cart action area retained
- sticky desktop Order summary
- dynamic native shipping/tax/discount/fee/total rows retained
- native Proceed to Checkout plus backend-editable Continue Shopping
- one compact editable trust set
- light editorial four-product recommendation grid
- tablet one-column transition
- compact mobile two-column item anatomy
- no horizontal overflow target
- empty Cart styling
```

The later dynamic WooCommerce notice block was not merged or deleted in this candidate.

## 5. Replacement boundary

Replace locally:

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/functions.php
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/spatial-flow.css
```

Do not replace:

```text
assets/js/spatial-flow.js
WooCommerce Cart templates
checkout-safe5.css
checkout-safe5.js
```

## 6. Step 4E-B3 required evidence

After local replacement and hard refresh, provide:

```text
1. Desktop Cart first screen
2. Desktop Cart full page
3. Mobile Cart first screen
4. Mobile Cart full page
```

Use 3 different products, quantity 1 each, for the first visual pass.

Browser/functional acceptance remains pending for:

```text
- quantity increase/decrease and Update Cart
- remove item
- valid coupon
- invalid coupon notice
- remove coupon
- shipping destination/change address
- totals refresh
- Continue Shopping
- Proceed to Checkout
- recommendation links
- sticky summary
- empty Cart
- mobile overflow/tap targets
- Header BAG count synchronization
- Shop / Single Product / Header / Footer regression
- SAFE5 Checkout product-meta and notice regression
```

## 7. Conclusion

```text
Step 4E-B1/B2 candidate files are ready for local replacement.
Static file validation passed.
Browser acceptance has not yet occurred.
Cart remains Not done.
```
