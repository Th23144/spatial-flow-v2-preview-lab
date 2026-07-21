# Step 4E-B2-R5-E6-A Evidence Method Correction · R5-E6-B Execution

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Accuracy correction

```text
The assistant did not independently render and save A1/A3/A5 static-reference screenshots before recording the R5-E6-A visual decision.
```

What was actually reviewed:

```text
- authoritative static source: preview/spatial-flow-cart-v1.html
- exact static CSS geometry, typography, spacing, surfaces and responsive rules
- user-provided clean live captures:
  - A2-live-cart-desktop-1366x768.png
  - A4-live-cart-mobile-390x844.png
  - A6-live-cart-mobile-360x800.png
```

Therefore the previous wording that the assistant had already generated the three static screenshots was inaccurate and must not be treated as completed evidence.

## 2. Correct status of R5-E6-A

Desktop review was source-contract-based:

```text
- approved static HTML/CSS values were read directly from GitHub
- live desktop full-page evidence was inspected against that contract
- no separate assistant-rendered static PNG was generated
```

Mobile review was governed by `PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md`, not literal static-mobile pixel matching.

The live A2/A4/A6 files remain valid clean live evidence. The visual findings may remain usable, but the evidence method must be described truthfully.

## 3. Current page status

```text
R5-E6-A live evidence capture: Passed.
R5-E6-A static source contract inspection: Complete.
Assistant-rendered A1/A3/A5 PNG evidence: Not generated.
Current executable stage: R5-E6-B functional regression.
Cart page status: Not done.
```

No source edit or deployment is authorized by this correction.

## 4. R5-E6-B functional regression matrix

Execute on the current deployed Cart without DevTools temporary styles:

```text
B1. Quantity minus and plus
B2. Header BAG count
B3. Your Bag piece count
B4. Subtotal and Total
B5. Valid Coupon
B6. Invalid Coupon and visible error state
B7. Remove item
B8. Undo / Restore
B9. Shipping and Change address
B10. Checkout URL and navigation
B11. Direct empty-Cart entry
B12. No horizontal overflow after AJAX replacements
```

## 5. Execution order

Tests must be performed in bounded groups so a failure can be isolated:

```text
Group 1: B1-B4 quantity/count/totals synchronization
Group 2: B5-B6 Coupon lifecycle
Group 3: B7-B8 Remove and Undo
Group 4: B9 shipping/address
Group 5: B10 checkout navigation
Group 6: B11 empty Cart
Group 7: B12 responsive/AJAX overflow regression
```

Do not clear the Cart before Group 1. Restore a stable one-product quantity-1 state before starting each destructive group when practical.

## 6. Group 1 acceptance

Starting state:

```text
one Cart line item
quantity = 1
Header BAG = 1
Your Bag = 1 PIECE
Subtotal and Total match quantity 1
```

Actions:

```text
1. Press plus once.
2. Wait for the WooCommerce AJAX update to finish.
3. Verify quantity = 2.
4. Verify Header BAG = 2.
5. Verify Your Bag = 2 PIECES.
6. Verify Subtotal doubles for the line item.
7. Verify Order Summary Subtotal and Total update consistently.
8. Refresh the page and verify quantity/counts/totals remain synchronized.
9. Press minus once.
10. Wait for update and verify the page returns to the original quantity-1 state.
```

Group 1 passes only if all visible count and monetary owners update without a manual refresh and remain correct after refresh.

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

## 8. Boundaries

```text
- no source edit during regression testing
- no temporary Console CSS
- no version bump
- no template override
- cancelled FIX4 remains cancelled
- Cart remains Not done until R5-E6-B and R5-E6-C pass
```
