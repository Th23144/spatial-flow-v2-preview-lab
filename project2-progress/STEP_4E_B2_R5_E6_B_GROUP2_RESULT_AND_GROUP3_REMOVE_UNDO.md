# Step 4E-B2-R5-E6-B · Group 2 Result and Group 3 Remove / Undo

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
R5-E6-B Group 2 Coupon lifecycle: Passed.
B5 Valid Coupon: Passed.
B6 Invalid Coupon and error state: Passed.
Applied Coupon removal placement: Accepted native behavior.
Current executable group: Group 3 Remove / Undo.
Source changes authorized: None.
Cart page status: Not done.
```

## 1. Valid Coupon confirmation

User confirmed:

```text
- valid Coupon applied successfully
- success notice appeared
- Coupon discount row appeared in Order Summary
- discount amount was correct
- Total recalculated correctly
- quantity and Cart counts remained unchanged
- applied Coupon persisted correctly after refresh
- Coupon could be removed
- Total returned to the original value after removal
```

The screenshot shows the applied Coupon row as:

```text
COUPON: <code>    -<discount> [Remove]
```

This is the correct semantic owner for the removal action.

## 2. Removal-link placement decision

The user noted that `[Remove]` appears beside the applied Coupon discount row rather than beside the Coupon input.

This is accepted and is not a defect:

```text
- the Coupon input owns applying a code
- the applied Coupon row owns the active discount state
- the removal link belongs with the active Coupon identity and discount amount
- duplicating Remove beside the input would create two visible removal owners
- native WooCommerce ownership and lifecycle safety take priority
```

No relocation, duplication or CSS/PHP/JavaScript change is authorized.

## 3. Invalid Coupon confirmation

User confirmed all remaining Group 2 tests passed:

```text
- invalid Coupon was visibly rejected
- no discount row was added
- Subtotal and Total remained unchanged
- quantity, Header BAG and Your Bag count remained unchanged
- no overflow, clipping or layout break occurred
- Cart returned to a clean stable state
```

## 4. Group 3 scope

Test only:

```text
B7. Remove line item
B8. Undo / Restore line item
```

Do not test address editing, checkout navigation or direct empty Cart in this group.

## 5. Starting state

Restore a stable Cart before testing:

```text
- one line item
- quantity = 1
- no Coupon applied
- Header BAG = 1
- Your Bag = 1 PIECE
- no notice visible
```

## 6. B7 Remove test

```text
1. Click the visible Remove control for the line item.
2. Wait for WooCommerce AJAX replacement to finish.
3. Confirm the product row disappears.
4. Confirm Header BAG changes to 0.
5. Confirm the Cart enters the approved empty-Cart state.
6. Confirm a visible Undo / Restore notice is available.
7. Confirm no stale product subtotal or Order Summary amount remains.
8. Confirm no horizontal overflow or broken white surface appears.
```

## 7. B8 Undo / Restore test

```text
1. Click Undo / Restore in the notice.
2. Wait for WooCommerce AJAX replacement to finish.
3. Confirm the product row returns with the correct product identity.
4. Confirm quantity returns to 1.
5. Confirm Header BAG returns to 1.
6. Confirm Your Bag returns to 1 PIECE.
7. Confirm Subtotal, Shipping and Total return correctly.
8. Confirm the notice disappears or returns to a clean state.
9. Refresh and confirm the restored state persists.
```

Group 3 passes only if native Remove and Undo ownership remain intact and every visible count/total owner returns to a synchronized state.

## 8. Boundaries

```text
- no source edit
- no temporary Console CSS or JavaScript
- no version bump
- no Cart template override
- do not proceed to shipping/address until Group 3 is reported
- cancelled FIX4 remains cancelled
```

## 9. Locked deployed artifacts

```text
functions.php
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b
Version: 2.7.8

assets/js/spatial-flow.js
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
SHA256: 1a4daa7f09b6370ccc93cc8441ea3c45ec23d8777a049c1a6f2c8fd50720ddce
```
