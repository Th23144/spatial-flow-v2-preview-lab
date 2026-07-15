# Step 4E-B2-R5-E2 · Header BAG + Your Bag Live Count Synchronization

Last updated: 2026-07-15  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E1 exact source audit：Complete.
Initial R5-E2 JS instruction：Rejected before deployment.
functions(14).php：Passed / keep.
spatial-flow(2).js：Do not deploy.
Current executable step：revert the two JS additions and upload corrected JS.
Cart page status：Not done.
```

Detailed review:

```text
project2-progress/STEP_4E_B2_R5_E2_PRE_DEPLOY_CODE_REVIEW.md
```

## Purpose

After WooCommerce Cart updates:

```text
- Header BAG count updates immediately
- Your Bag piece count updates immediately
- no manual page refresh
- no duplicate fragment request
```

WooCommerce remains the source of truth and event owner.

## Correct scope

Modify only:

```text
functions.php
```

Keep unchanged:

```text
assets/js/spatial-flow.js
header.php
spatial-flow.css
WooCommerce templates
Customizer values
version 2.7.8
```

## Accepted PHP result

Uploaded file:

```text
functions(14).php
Size: 552,215 bytes
Logical lines: 10,292
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070
Braces: 1,208 / 1,208
PHP syntax: Passed
Version: 2.7.8
```

The accepted PHP change does only this:

```text
1. On Cart, spatial-flow-script depends on jquery + wc-cart-fragments when registered.
2. Adds spatial_flow_cart_v2_count_text().
3. Adds WooCommerce fragments for:
   - .sf-v2-bag-link sup
   - .sf-cart-v2-heading__count
```

## Why no custom JS is needed

WooCommerce 10.4.3 `cart-fragments.js` already owns:

```javascript
$( document.body ).on( 'wc_fragment_refresh updated_wc_div', function() {
    refresh_cart_fragment();
});
```

Once the accepted PHP dependency loads `wc-cart-fragments` on Cart, WooCommerce automatically refreshes the returned fragments after `updated_wc_div`.

The initially proposed `setupCartLiveCountRefresh()` would trigger `wc_fragment_refresh` a second time and create duplicate AJAX requests. It is therefore rejected.

## Required JS rollback

From `spatial-flow(2).js`, remove the complete function:

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

Also remove this one initializer line:

```javascript
    setupCartLiveCountRefresh();
```

Do not change any other JavaScript.

## Correct expected JavaScript baseline

```text
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378
JavaScript syntax: Passed
```

This must be byte-identical to the prior accepted `spatial-flow(1).js`.

## Browser validation after exact file review

```text
1. Increase quantity and Update Cart.
   BAG and Your Bag count update without manual refresh.

2. Reduce quantity and update again.
   Both counts return correctly.

3. Remove a product.
   Both counts decrease.

4. Undo / Restore.
   Both counts return.

5. Remove the final product.
   BAG becomes (0).

6. Network/Console:
   - one refreshed-fragments request per Cart update cycle
   - no duplicate request caused by custom code
   - no console error
```

Do not apply the files to the server until the corrected JavaScript is uploaded and exact-validated.