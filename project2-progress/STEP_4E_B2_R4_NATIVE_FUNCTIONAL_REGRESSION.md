# Step 4E-B2-R4 · Native Cart Functional Regression

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Desktop visual structure/detail：Passed.
Mobile visual structure：Passed.
Mobile duplicate unit-price defect：Resolved by FIX3.
Horizontal overflow：No.
Native functional regression：Passed by user confirmation.
Current exact CSS baseline：spatial-flow(10).css.
Next executable step：Step 4E-B2-R5-A CSS ownership and cleanup audit.
Cart page status：Not done.
```

## Exact tested code baselines

Native behavior was originally tested on `spatial-flow(9).css`. FIX3 then changed only one phone-only visibility rule and was rechecked with quantity/update behavior.

Current accepted CSS:

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Braces: 4,127 / 4,127
Comments: 405 / 405
CSS parser errors: 0
```

Unchanged PHP:

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

## User functional result

The user completed the Cart interaction checklist and reported that all tested functions had no problems.

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

## FIX3 follow-up evidence

The post-FIX3 mobile screenshot shows:

```text
- first item quantity 2
- first item line subtotal $66.00
- Order Summary subtotal $114.00
- Shipping $8.99
- Total $122.99
- only one price value per product card
- no horizontal overflow
```

This confirms quantity/update and summary recalculation remain functional after the phone-only duplicate-price correction.

## Next step

```text
Step 4E-B2-R5-A · Cart CSS ownership and cleanup audit
Mode：no code changes
```

No more visual Cart snippets may be appended as routine refinement. The next phase is controlled consolidation and staged legacy deletion.