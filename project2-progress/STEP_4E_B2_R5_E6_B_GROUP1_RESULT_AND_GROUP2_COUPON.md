# Step 4E-B2-R5-E6-B · Group 1 Result and Group 2 Coupon Regression

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
R5-E6-B Group 1 quantity/count/totals synchronization: Passed.
B1 Quantity minus and plus: Passed.
B2 Header BAG count: Passed.
B3 Your Bag piece count: Passed.
B4 Subtotal and Total: Passed.
Current executable group: Group 2 Coupon lifecycle.
Source changes authorized: None.
Cart page status: Not done.
```

## 1. Group 1 acceptance

User confirmed all required states passed:

```text
- quantity increased from 1 to 2 through the visible plus control
- Header BAG updated automatically from 1 to 2
- Your Bag piece count updated automatically from 1 PIECE to 2 PIECES
- line-item subtotal updated consistently
- Order Summary Subtotal and Total updated consistently
- state remained synchronized after refresh
- quantity returned from 2 to 1 through the visible minus control
- Header BAG, Your Bag, Subtotal and Total returned to the correct quantity-1 state
- no manual refresh was required for the live AJAX synchronization
```

No failure or source correction is open from Group 1.

## 2. Group 2 scope

Test only:

```text
B5 Valid Coupon
B6 Invalid Coupon and visible error state
```

Do not test Remove, Undo, address editing or empty Cart during this group.

## 3. Starting state

Restore and confirm a stable Cart state before testing:

```text
- one line item
- quantity = 1
- Header BAG = 1
- Your Bag = 1 PIECE
- Subtotal = $36.00 for the current test product state
- no Coupon currently applied
- Coupon panel closed
- no WooCommerce notice visible
```

## 4. B5 valid Coupon test

Use the existing local test Coupon code that is known to be valid.

Required sequence:

```text
1. Open HAVE A COUPON? in Order Summary.
2. Enter the valid Coupon code.
3. Press the visible Apply Coupon control.
4. Wait for the WooCommerce AJAX lifecycle to finish.
5. Confirm a success state is visible or the applied Coupon row appears.
6. Confirm the discount is reflected in Order Summary.
7. Confirm Total recalculates correctly.
8. Confirm quantity, Header BAG and Your Bag count remain unchanged.
9. Refresh the page.
10. Confirm the applied Coupon and discounted Total remain correct after refresh.
11. Remove the Coupon through the native visible removal control if available.
12. Confirm the discount disappears and Total returns to its original value.
```

B5 passes only if the visible Order Summary Coupon UI remains synchronized with native WooCommerce ownership and totals.

## 5. B6 invalid Coupon test

After removing the valid Coupon and restoring the original Total:

```text
1. Open HAVE A COUPON? if closed.
2. Enter an intentionally invalid code, for example INVALID-TEST-999.
3. Press Apply Coupon.
4. Wait for the WooCommerce response.
5. Confirm a visible invalid-Coupon error is shown.
6. Confirm no discount row is added.
7. Confirm Subtotal and Total remain unchanged.
8. Confirm Header BAG, Your Bag count and quantity remain unchanged.
9. Confirm the error presentation does not create a rounded floating pill, overflow, clipping or layout break.
10. Refresh or dismiss the notice and confirm the Cart returns to a clean stable state.
```

B6 passes only if native WooCommerce rejects the code visibly and preserves all totals and counts.

## 6. Boundaries

```text
- no source edit
- no temporary Console CSS or JavaScript
- no version bump
- no Cart template override
- do not proceed to Remove/Undo until Group 2 is reported
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
