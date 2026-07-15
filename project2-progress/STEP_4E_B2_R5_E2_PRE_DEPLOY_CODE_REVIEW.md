# Step 4E-B2-R5-E2 · Pre-deploy Code Review

Last updated: 2026-07-15  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
functions(14).php：Passed / exact expected PHP result.
spatial-flow(2).js：Rejected before deployment.
Reason：the added listener duplicates WooCommerce 10.4.3 native fragment refresh.
No reviewed file has been authorized for server use as a pair yet.
Cart page status：Not done.
```

## Uploaded files

### functions(14).php

```text
Size: 552,215 bytes
Logical lines: 10,292
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070
Braces: 1,208 / 1,208
PHP syntax: Passed
Version: 2.7.8
```

The file is byte-identical to the previously predicted PHP result.

Diff against `functions(13).php` contains only the intended changes:

```text
1. On Cart, make spatial-flow-script depend on jquery + wc-cart-fragments when the WooCommerce handle is registered.
2. Extract spatial_flow_cart_v2_count_text().
3. Add WooCommerce fragments for:
   - .sf-v2-bag-link sup
   - .sf-cart-v2-heading__count
```

No unrelated PHP change was found.

### spatial-flow(2).js

```text
Size: 71,299 bytes
Logical lines: 2,009
SHA256: 13706257345cb5d03a7759bc3abe7285632953103074e53f029e70fa7b80ed96
Braces: 381 / 381
JavaScript syntax: Passed
```

The only functional additions are:

```text
- setupCartLiveCountRefresh()
- one setupCartLiveCountRefresh() initializer call
```

The file also has two harmless whitespace differences from the originally predicted JS artifact. Those formatting differences are not the rejection reason.

## Blocking review finding

WooCommerce 10.4.3 `cart-fragments.js` already contains the native listener:

```javascript
$( document.body ).on( 'wc_fragment_refresh updated_wc_div', function() {
    refresh_cart_fragment();
});
```

Therefore, once `wc-cart-fragments` is loaded as the PHP dependency, WooCommerce already performs one refreshed-fragments AJAX request after `updated_wc_div`.

The proposed custom JS also listens to `updated_wc_div` and then triggers `wc_fragment_refresh` 40ms later:

```javascript
$body.on("updated_wc_div", function () {
  refreshTimer = window.setTimeout(function () {
    $body.trigger("wc_fragment_refresh");
  }, 40);
});
```

That produces this request path:

```text
updated_wc_div
→ WooCommerce native refresh request #1
→ custom listener triggers wc_fragment_refresh
→ WooCommerce native refresh request #2
```

This violates the project gate requiring no duplicate fragment request loop/request duplication.

## Corrected implementation decision

Keep the reviewed PHP change.

Revert `assets/js/spatial-flow.js` completely to the prior exact baseline by removing only:

```text
1. the complete setupCartLiveCountRefresh() function
2. the setupCartLiveCountRefresh(); initializer line
```

The corrected JS must be byte-identical to the previous accepted file:

```text
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378
JavaScript syntax: Passed
```

## Why PHP-only is sufficient

With the new PHP dependency active on Cart:

```text
- WooCommerce 10.4.3 owns the updated_wc_div listener
- WooCommerce requests refreshed fragments once
- the new PHP fragment filter returns the live Header BAG and Your Bag count markup
- WooCommerce replaces both selectors
```

No custom Cart event listener is needed.

## Current executable step

```text
Revert the two JS additions only.
Do not change functions(14).php.
Upload the corrected JS for exact validation before applying either file to the server.
```
