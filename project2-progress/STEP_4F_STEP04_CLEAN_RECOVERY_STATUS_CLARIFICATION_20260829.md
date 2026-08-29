# Step 4F · Step04 Clean Recovery Status Clarification · 2026-08-29

## User correction

The user clarified that the live Step04 `待处理`/pending-family presentation backed by WooCommerce `on-hold` (`保留`) is not the same as WooCommerce `Pending payment` (`pending`, 待付款).

Only the actual payment-required `Pending payment` page exposes the recovery action (`Return to payment` / `Retry payment`) in the current implementation. The `On-hold` / `保留` state does not expose that recovery CTA and must not be used for the clean-order recovery sanity check.

## Authoritative correction

For the remaining clean-order recovery sanity check:

```text
USE: WooCommerce Pending payment (`pending` / 待付款)
DO NOT USE: WooCommerce On-hold (`on-hold` / 保留)
DO NOT USE: Processing
DO NOT USE: Refunded
```

The test exists specifically to prove the `$order->needs_payment()` recovery path and the canonical same-order `order-pay` route. Therefore the clean test order must be in a state where WooCommerce actually reports payment is still required.

Although `Failed` may in some configurations also satisfy `needs_payment()`, this final sanity check will use only `Pending payment` to remove ambiguity and avoid testing more than one recovery state.

## Final bounded flow

```text
1. Create/use one fresh order that has never been Refunded.
2. Confirm the order payable total is non-zero.
3. Set/leave the order status specifically as Pending payment (`pending` / 待付款).
4. Open that order's Step04 Order Result page.
5. Confirm the recovery CTA is present (`Return to payment` or `Retry payment`).
6. Click the CTA.
7. Confirm WooCommerce opens the canonical order-pay route for the same order.
8. Confirm the same order number is retained.
9. Confirm the payable amount is still the same non-zero amount.
10. Stop. Do not pay. Do not change this clean order to Refunded.
```

## Distinction from On-hold

`On-hold` / `保留` is a separate accepted Step04 state. It may show gateway-owned payment instructions such as BACS bank details, but it is not the state used to validate the recovery CTA. Absence of `Return to payment` / `Retry payment` on On-hold is therefore expected and is not a defect.
