# Step 4E-B2-R4 · Native Cart Functional Regression

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Desktop visual structure/detail：Passed.
Mobile structural layout：Passed.
Horizontal overflow：No.
Native functional regression：Passed by user confirmation.
Remaining blocker：mobile duplicate unit-price visual defect.
Next executable step：Step 4E-B2-R3-FIX3.
Cart page status：Not done.
```

## Exact tested baseline

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

## User result

The user completed the plain-language Cart interaction checklist and reported that all tested functions had no problems.

Accepted as passed:

```text
1. quantity plus/minus and Update Cart
2. remove item and Undo/Restore
3. invalid Coupon error path
4. valid Coupon path when available
5. Change address and shipping refresh
6. Proceed to Checkout and SAFE5 Checkout load
7. Continue Shopping
8. recommendation links
9. mobile Menu and Footer accordions
10. final overflow/warning safety check
```

No native interaction defect was reported.

## Important distinction

Functional regression passing does not override a visible design defect.

The mobile screenshot shows both the native unit-price cell and native subtotal cell inside each product card. With quantity 1 the two values match and appear as a duplicated price.

Therefore:

```text
Native behavior：Passed.
Mobile visual acceptance：Reopened for one bounded defect.
Cart final acceptance：Blocked until FIX3 passes.
```

## Next step

```text
Step 4E-B2-R3-FIX3 · Mobile Duplicate Unit Price Removal
```

The fix is CSS-only, phone-only, and independently reversible. No PHP, JavaScript, template or checkout behavior change is authorized.

After FIX3 passes, proceed to backend-editability and final Cart acceptance. Do not delete historical Cart CSS before then.