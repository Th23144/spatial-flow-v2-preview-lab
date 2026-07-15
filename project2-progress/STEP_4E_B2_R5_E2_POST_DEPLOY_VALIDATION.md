# Step 4E-B2-R5-E2 · Post-deploy Validation Checklist

Last updated: 2026-07-15  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
functions(14).php：Passed / ready after final pair authorization.
Corrected spatial-flow.js：Pending one final byte-identical validation.
Deployment：Not yet authorized until final JS hash matches baseline.
Cart page status：Not done.
```

## Files to deploy after authorization

```text
functions.php：functions(14).php
assets/js/spatial-flow.js：final corrected JS matching the accepted baseline
```

Expected exact files:

```text
functions.php
Size: 552,215 bytes
Logical lines: 10,292
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070
PHP syntax: Passed
Version: 2.7.8

assets/js/spatial-flow.js
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
JavaScript syntax: Passed
```

Do not deploy `spatial-flow(2).js` or the 70,827-byte intermediate file.

# Required page checks after deployment

Only four page groups are required for R5-E2. This step does not re-test the full site.

## 1. Cart page — primary acceptance

Use a Cart containing at least two different products and a total quantity greater than two.

Record before testing:

```text
- Header BAG count
- Your Bag piece count
- each product quantity
```

Test in this order without manually refreshing between actions:

```text
A. Increase one product quantity and click Update Cart.
   Expected:
   - line subtotal updates
   - Cart total updates
   - Header BAG count updates immediately
   - Your Bag piece count updates immediately

B. Reduce the quantity and click Update Cart.
   Expected:
   - both counts return immediately

C. Remove one product.
   Expected:
   - both counts decrease immediately
   - native WooCommerce notice/Undo remains functional

D. Click Undo / Restore.
   Expected:
   - correct product returns
   - both counts return immediately

E. Remove products until Cart becomes empty.
   Expected for R5-E2 only:
   - Header BAG becomes (0) immediately
   - no manual refresh required
```

Important:

```text
The already-known direct-empty Cart layout mismatch is not fixed by R5-E2.
Do not reject live-count synchronization merely because that separate R5-E3 layout defect remains.
```

## 2. Shop page — AJAX add-to-cart regression

Open `/shop/` and use one product that supports the normal Shop add-to-cart action.

Expected:

```text
- add-to-cart action still works
- existing add-to-cart visual feedback still works
- Header BAG count updates to the real quantity
- no duplicate visual feedback
- no page crash or console error
```

Restore/remove the temporary product afterward if needed.

## 3. Single Product page — native add-to-cart regression

Open one simple or variable product page and add one item.

Expected:

```text
- variation controls still work when applicable
- Add to Cart still completes normally
- existing Spatial Flow feedback/scroll behavior remains normal
- Header BAG count is correct after the native response/page state completes
- no duplicate pop-up or duplicate add action
```

Restore the original Cart contents afterward.

## 4. SAFE5 Checkout — smoke regression only

Open SAFE5 Checkout from the restored Cart.

Expected:

```text
- page loads normally
- product rows, quantities and totals are correct
- billing/checkout notices remain in their existing location
- no JavaScript console error
- no automatic refresh loop
```

A full payment test is not required for R5-E2.

# Developer Console / Network gate

On the Cart quantity-update test, open DevTools Network and filter by:

```text
get_refreshed_fragments
```

For one completed `Update Cart` action, expected result:

```text
one refreshed-fragments request after updated_wc_div
```

Reject if one action consistently creates two back-to-back `get_refreshed_fragments` requests caused by the theme code.

Console must not show:

```text
ReferenceError
TypeError
repeated fragment loop
maximum call stack errors
```

# Required final report

```text
R5-E2 Cart quantity/update live counts：Passed / Failed
R5-E2 Cart remove/Undo live counts：Passed / Failed
R5-E2 final-item BAG (0)：Passed / Failed
R5-E2 Shop add-to-cart regression：Passed / Failed
R5-E2 Single Product add-to-cart regression：Passed / Failed
R5-E2 SAFE5 Checkout smoke regression：Passed / Failed
Fragment request count per Cart update：1 / 2 / unclear
Console errors：None / describe
Original Cart restored：Yes / No
```

Do not begin R5-E3 until R5-E2 is explicitly accepted.