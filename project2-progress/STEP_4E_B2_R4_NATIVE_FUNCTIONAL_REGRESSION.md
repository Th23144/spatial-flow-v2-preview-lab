# Step 4E-B2-R4 · Native Cart Functional Regression

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Desktop visual validation：Passed.
Mobile visual validation：Passed.
Horizontal overflow：No.
Code changes in this step：None unless a reproducible defect is found.
Native functional regression：Active.
Cart page status：Not done.
```

## Exact baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(9).css
Size: 813,392 bytes
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8

functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

No CSS, PHP, JavaScript or template file should be changed while performing this checklist.

## Meaning of “native controls missing or unusable”

A native control is any real WooCommerce or theme interaction that the customer must be able to click, type into or submit.

“Missing or unusable” means one of these happens:

```text
- the control is not visible
- it cannot be clicked or typed into
- clicking produces no expected result
- another layer covers it
- the page becomes stuck or shows a fatal/error screen
- the control leads to the wrong page
```

## Plain-language test sequence

Run on the current Cart page. Mobile is preferred, but desktop may be used where typing is easier.

### Test 1 · Quantity and Update Cart

```text
1. On one product, press + once.
2. Confirm its quantity increases by 1.
3. Press Update Cart.
4. Confirm that product subtotal and Order Summary total refresh.
5. Press − once to restore the original quantity.
6. Press Update Cart again.
```

Pass condition:

```text
quantity changes, totals refresh, no overlap, no error page
```

### Test 2 · Remove and Undo / Restore

```text
1. Press the circular × on one product.
2. Confirm the product disappears.
3. Confirm WooCommerce shows an Undo or Restore action.
4. Press Undo / Restore.
5. Confirm the same product returns.
```

Pass condition:

```text
remove and restoration both work; recommendation and summary layout remain stable
```

### Test 3 · Coupon error path

```text
1. Type a deliberately invalid code such as INVALID123.
2. Press Apply Coupon.
3. Confirm WooCommerce displays a readable error message.
4. Confirm the Cart remains usable after the error.
```

Pass condition:

```text
error is readable, page does not collapse, no duplicated buttons or notices
```

### Test 4 · Real coupon path

Only run when a valid test coupon is available.

```text
1. Enter the valid coupon.
2. Apply it.
3. Confirm the discount and Total update.
4. Remove the coupon.
5. Confirm the original Total returns.
```

If no valid coupon is available, report `Valid coupon test：Not available`; this does not fail the other tests.

### Test 5 · Shipping address

```text
1. Press Change address.
2. Confirm the address fields or shipping calculator opens.
3. Change one safe test field or select the existing destination again.
4. Submit/update.
5. Confirm Shipping and Total remain visible and refresh correctly.
```

Pass condition:

```text
address control opens, can be submitted, no clipping or disappearing summary
```

### Test 6 · Proceed to Checkout

```text
1. Press Proceed to Checkout.
2. Confirm it opens the real SAFE5 Checkout page.
3. Confirm the Checkout page loads normally.
4. Return to Cart.
```

Pass condition:

```text
real Checkout URL, no redirect loop, SAFE5 layout still normal
```

### Test 7 · Continue Shopping

```text
1. Press Continue Shopping.
2. Confirm it opens the real Shop page.
3. Return to Cart.
```

### Test 8 · Recommendation links

```text
1. Open at least two different recommendation products.
2. Confirm each opens its real WooCommerce product page.
3. Return to Cart after each test.
```

### Test 9 · Mobile Header and Footer

```text
1. Open the mobile Menu.
2. Confirm it opens and closes.
3. At the Footer, expand and collapse at least one accordion group.
```

### Test 10 · Final visual safety check

After all tests, confirm:

```text
- no horizontal overflow
- no missing Cart item rows
- no missing Order Summary
- no duplicated Coupon or checkout controls
- Header and Footer still normal
- no PHP Warning, Fatal Error or blank page
```

## Required report format

Reply with one line per test:

```text
1 Quantity / Update Cart：正常 / 有问题
2 Remove / Undo：正常 / 有问题
3 Invalid coupon：正常 / 有问题
4 Valid coupon：正常 / 有问题 / 没有可用优惠码
5 Change address：正常 / 有问题
6 Proceed to Checkout：正常 / 有问题
7 Continue Shopping：正常 / 有问题
8 Recommendation links：正常 / 有问题
9 Mobile Menu / Footer accordion：正常 / 有问题
10 Final overflow / warnings：正常 / 有问题
```

Describe the exact symptom only for any failed item.

## Next decision

```text
All required tests pass → proceed to backend-editability and final Cart acceptance gate.
One bounded defect → issue one small independently reversible fix.
Severe or multi-area defect → stop and re-audit ownership; do not delete old CSS.
```
