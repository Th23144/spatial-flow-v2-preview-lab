# Step 4E-B2-R5-E6-B · Group 3 Result and Group 4 Shipping / Address

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
R5-E6-B Group 3 Remove / Undo lifecycle: Passed.
B7 Remove line item: Passed.
B8 Undo / Restore line item: Passed.
Current executable group: Group 4 Shipping / Change address.
Source changes authorized: None.
Cart page status: Not done.
```

## 1. Group 3 acceptance

User confirmed all required states passed:

```text
- visible Remove control removed the line item
- Header BAG changed to 0
- approved empty-Cart state appeared
- Undo / Restore notice appeared and remained usable
- stale product subtotal and Order Summary totals did not remain
- no white frame, horizontal overflow or broken layout appeared
- Undo / Restore returned the correct product identity
- restored quantity returned to 1
- Header BAG returned to 1
- Your Bag returned to 1 PIECE
- Subtotal, Shipping and Total returned correctly
- restored state remained correct after refresh
```

No source defect or remediation task is open from Group 3.

## 2. Group 4 scope

Test only:

```text
B9. Shipping and Change address
```

Do not test checkout navigation or direct empty-Cart entry during this group.

## 3. Starting state

Restore a clean stable Cart:

```text
- one line item
- quantity = 1
- no Coupon applied
- Header BAG = 1
- Your Bag = 1 PIECE
- no WooCommerce notice visible
- current Shipping destination and Total visible
```

Record the starting destination, Shipping amount and Total before opening the address editor.

## 4. B9 Change address test

```text
1. Click the visible Change address control in Order Summary.
2. Confirm the native shipping calculator opens inside the Summary without redirecting.
3. Confirm all rendered destination controls are visible, readable and usable.
4. Confirm the form does not overflow, overlap the checkout controls or create a floating white panel.
5. Select or enter a valid alternate destination that the local WooCommerce store accepts.
6. Submit the native Update / Calculate shipping control.
7. Wait for the WooCommerce AJAX lifecycle to finish.
8. Confirm the displayed Shipping destination updates to the submitted destination.
9. Confirm a valid shipping rate remains selected or is presented for selection.
10. Confirm Shipping and Total recalculate consistently when the configured rate differs. If the local flat rate is identical for both destinations, unchanged Shipping is acceptable, but the destination must still update correctly.
11. Confirm quantity, Header BAG, Your Bag count and product Subtotal remain unchanged.
12. Refresh and confirm the accepted destination, Shipping and Total remain synchronized.
13. Reopen Change address and restore the original test destination.
14. Confirm the original destination and corresponding totals return correctly.
15. Close the calculator and confirm Order Summary returns to its clean collapsed state.
```

## 5. Group 4 acceptance

Group 4 passes only if:

```text
- Change address opens and closes correctly
- native fields and submit control remain usable
- the submitted destination is reflected in Order Summary
- shipping selection/rate and Total remain mathematically consistent
- Cart quantity/count/product subtotal owners remain unchanged
- state survives refresh
- the original destination can be restored
- no desktop or phone overflow, clipping, overlap or broken surface appears
```

## 6. Boundaries

```text
- no source edit
- no temporary Console CSS or JavaScript
- no version bump
- no Cart template override
- do not proceed to checkout navigation until Group 4 is reported
- cancelled FIX4 remains cancelled
```

## 7. Locked deployed artifacts

```text
functions.php
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b
Version: 2.7.8

assets/js/spatial-flow.js
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
SHA256: 1a4daa7f09b6370ccc93cc8441ea3c45ec23d8777a049c1a6f2c8fd50720ddce
```
