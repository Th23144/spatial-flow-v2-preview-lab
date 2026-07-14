# Step 4E-B2-R5-D3 + R5-D4 · Combined Final Cart Inspection Checklist

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-D1 exact source/ownership：Passed.
R5-D2 backend editability/ownership：Passed.
Remaining user inspection groups：2.
Current executable work：R5-D3 visual acceptance + R5-D4 native regression.
R5-D5：assistant documentation/binary decision after user reports results.
Cart page status：Not done.
```

## Important execution rule

This is an inspection-only phase.

```text
Do not edit PHP.
Do not edit CSS.
Do not edit JavaScript.
Do not edit WooCommerce templates.
Do not change Customizer text or product metadata.
Do not add another Cart visual patch.
Version must remain 2.7.8.
```

Run the visual review first. Then run the functional regression. If any defect appears, stop that path, record the exact action and provide a screenshot. Do not attempt an unbounded fix.

# Group 1 · R5-D3 final strict visual acceptance

## A. Desktop full-page review

Use a normal desktop viewport, preferably at least 1366px wide. Force-refresh the Cart and wait for the page to finish loading.

Review the complete page from Header through Footer:

```text
1. Header is intact; BAG count is readable and not clipped.
2. Your Bag heading, italic emphasis and live piece count have clear hierarchy.
3. Main desktop composition is stable: products on the left, Order Summary on the right.
4. Product rows have consistent spacing and alignment.
5. Every thumbnail fills its intended frame without stretching or empty gaps.
6. Product title and real metadata are readable and do not collide.
7. Desktop Remove is on its own line/position and does not overlap metadata.
8. Quantity controls, item prices and subtotals align consistently.
9. Coupon input, Apply Coupon and Update Cart do not overlap or clip.
10. Order Summary title is integrated into the summary panel.
11. Totals, shipping and action buttons remain inside the panel.
12. Trust icons stay inside their icon shells and align with their copy.
13. Four real recommendation cards appear with consistent image crops and spacing.
14. View-all action is visible and aligned.
15. Footer is intact.
16. No horizontal overflow, blank collapsed region, duplicate price, duplicate icon or broken border is visible.
```

Required evidence:

```text
One complete desktop full-page screenshot after final load.
```

## B. Phone full-page review

Use the existing phone simulation width, preferably 390–446px. Force-refresh and wait for final load.

Review the complete page:

```text
1. Header remains usable and does not cause horizontal overflow.
2. Your Bag heading and live count fit naturally within the viewport.
3. Product cards remain one-column and evenly spaced.
4. Thumbnails fill their slots and are not distorted.
5. Product titles and real metadata remain readable.
6. Every item shows exactly one refined SVG × inside the 32px circular remove control.
7. The × remains visible after the page finishes loading.
8. The remove control does not cover the title or metadata.
9. Quantity controls remain fully visible and tappable.
10. Each item displays only one subtotal/price output in the intended position.
11. Coupon controls stack cleanly and stay within the viewport.
12. Order Summary title remains integrated into the panel.
13. Totals, checkout action, Continue Shopping and trust rows are readable.
14. Trust icons do not overlap their copy.
15. Four recommendation cards form a clean one-column list.
16. Header, recommendation area and Footer have no horizontal overflow.
17. No duplicate ×, duplicate price, clipped text, displaced icon or post-load disappearance occurs.
```

Required evidence:

```text
One complete phone full-page screenshot after final load.
```

## R5-D3 pass rule

```text
Desktop review：all 16 checks pass.
Phone review：all 17 checks pass.
No blocking visual defect remains.
```

# Group 2 · R5-D4 final native Cart regression

Before testing, note the current Cart product titles and quantities so the original state can be restored.

## 1. Quantity and Update Cart

```text
- Change one product quantity.
- Click Update Cart.
- Confirm the line subtotal, Cart totals and Header BAG count update correctly.
- Restore the original quantity and update again.
```

## 2. Remove and Undo / Restore at different positions

Test a product near the top, one in the middle when available, and one near the bottom:

```text
- Remove one product.
- Confirm the standard WooCommerce notice appears.
- Click Undo / Restore.
- Confirm the correct product returns with normal layout and one remove icon.
- Repeat for the other positions without leaving products removed.
```

## 3. Coupon handling

```text
- Submit INVALID123.
- Confirm the normal WooCommerce invalid-Coupon error appears.
- Confirm Cart layout does not shift or break.
```

When a valid test Coupon is currently available:

```text
- Apply it.
- Confirm discount and total update.
- Remove it and confirm totals return.
```

When no valid Coupon is configured, record:

```text
Valid Coupon：N/A — no available test Coupon.
```

## 4. Shipping and totals

```text
- Open or change the shipping calculator/address using a valid test address.
- Confirm the shipping method/rate area responds normally.
- Confirm totals update without duplicate rows or stale values.
- Restore the original shipping state when practical.
```

## 5. Checkout round trip

```text
- Click Proceed to Checkout.
- Confirm SAFE5 Checkout opens normally.
- Confirm product rows, quantities, metadata and totals remain structurally unchanged.
- Return to Cart and confirm the Cart layout is still normal.
```

## 6. Recommendation navigation

```text
- Open at least one recommendation product.
- Confirm it is the matching real product page.
- Return to Cart.
- Confirm Cart state and layout remain intact.
```

## 7. Header BAG count

During quantity and remove/restore tests, confirm:

```text
- BAG count changes after Cart changes.
- BAG count returns to the original value after restoration.
- No stale count remains after force-refresh.
```

## 8. Empty-Cart behavior — run last

First keep a local note of every Cart product and quantity.

```text
- Remove all products until the native empty-Cart state appears.
- Confirm the empty message and Return to Shop action are visible and usable.
- Confirm Header BAG count becomes zero.
- Confirm Header and Footer remain intact and there is no horizontal overflow.
```

Then restore the original Cart contents using the recorded product pages/quantities. Confirm the Header BAG count and normal Cart page return.

## 9. Final SAFE5 Checkout recheck

After restoring the original Cart:

```text
- Open SAFE5 Checkout one final time.
- Confirm product rows, real product context, quantity, totals and layout remain normal.
- Confirm no test subtitle, Customizer test text or temporary fallback value remains.
```

## R5-D4 pass rule

```text
Quantity/update：Passed
Remove/Undo at multiple positions：Passed
Invalid Coupon：Passed
Valid Coupon：Passed or N/A with reason
Shipping/totals：Passed
Checkout round trip：Passed
Recommendation navigation：Passed
Header BAG count：Passed
Empty Cart and restoration：Passed
Final SAFE5 Checkout：Passed
```

# Result format to send back

Send one message using this exact compact format:

```text
R5-D3 desktop visual：通过 / 有问题
R5-D3 phone visual：通过 / 有问题

R5-D4 quantity/update：通过 / 有问题
R5-D4 remove/undo multiple positions：通过 / 有问题
R5-D4 invalid Coupon：通过 / 有问题
R5-D4 valid Coupon：通过 / N/A / 有问题
R5-D4 shipping/totals：通过 / 有问题
R5-D4 Checkout round trip：通过 / 有问题
R5-D4 recommendation navigation：通过 / 有问题
R5-D4 Header BAG count：通过 / 有问题
R5-D4 empty Cart + restore：通过 / 有问题
R5-D4 final SAFE5 Checkout：通过 / 有问题

原始 Cart 已恢复：是 / 否
测试文字或临时设置残留：无 / 有
```

Attach:

```text
1. desktop full-page Cart screenshot
2. phone full-page Cart screenshot
```

If every line passes, R5-D5 will make the binary Cart decision without another user inspection round.