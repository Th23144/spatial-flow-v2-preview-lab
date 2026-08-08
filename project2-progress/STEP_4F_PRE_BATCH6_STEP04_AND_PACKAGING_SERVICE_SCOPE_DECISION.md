# Step 4F · Pre-Batch-6 Step-04 Confirmation and Packaging Service Scope Decision

Date: 2026-08-08  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

Immediately after Batch 5 Order Summary / Coupon / Trust was accepted and closed, the user paused before Batch 6 to confirm two items:

1. whether the Project 2 reference set contains a Step-04 page and how the live commerce site is supposed to implement it;
2. a previously omitted requirement: customers must be able to choose a packaging service.

## Step 04 repository truth

The repository does contain a dedicated Step-04 static reference:

```text
preview/spatial-flow-thank-you-v1.html
preview/spatial-flow-thank-you-v1.css
preview/spatial-flow-thank-you-v1.js
```

The locked flow is:

```text
01 Address
-> 02 Shipping
-> 03 Payment
-> 04 WooCommerce order result / Thank You / Receipt
```

Step 04 is NOT a fourth Checkout input/review screen. It is the server-owned WooCommerce order-received result after order/payment processing.

The accepted static result family currently demonstrates at least:

```text
Confirmed
Pending / on-hold
```

The live R4 implementation is explicitly broader and must classify real WooCommerce server states, including:

```text
processing / completed -> Confirmed
pending / on-hold -> Pending / unpaid
failed -> Failed / recovery when safe
cancelled -> Cancelled
refunded -> Refunded/support semantics
Sandbox Crypto success -> canonical paid result
```

Browser/query state must never decide real payment success.

## Packaging service requirement

New user requirement:

```text
The commerce site must allow the customer to choose a packaging service.
```

No packaging implementation currently exists in the repository search baseline.

### Recommended owner and placement

Unless the user explicitly wants per-item packaging, the recommended first implementation is an ORDER-LEVEL fulfillment add-on owned by WooCommerce and presented in Step 02 Shipping.

Recommended live flow:

```text
Step 02 Shipping
  - shipping method
  - packaging service choice
  - Continue to Payment
```

Reason:

```text
Packaging is a fulfillment/delivery decision, not a payment gateway decision.
It must be selected before Payment so the final server-backed amount shown in Step 03 is already correct.
```

### Required commerce ownership

The packaging choice must not be a browser-only visual toggle.

Required properties:

```text
- WooCommerce/session owns selected packaging state
- optional packaging price is calculated server-side
- totals refresh through WooCommerce
- Summary shows the resulting fee/line truth
- selection persists through Step 02 -> Step 03
- selection is copied into the WooCommerce order as durable order meta / line truth
- admin can see the selected packaging service
- customer-facing order result/email/order details can expose it where semantically appropriate
- backend presentation labels/options/prices must remain editable according to Project 2 backend-editability requirements
- no new second Checkout backend system
```

### Data-model decision still required

Before implementation the user must confirm whether packaging is:

```text
A. one packaging choice for the whole order (recommended default)
B. packaging selectable separately per cart item
```

The user must also supply the actual packaging options and their prices, including whether the default/standard option is free.

### Regression impact

This feature changes order totals and durable order data, so it must be implemented BEFORE Batch 6 final R1 end-to-end acceptance.

Batch 6 is therefore paused.

After packaging implementation, at minimum revalidate:

```text
- Step 02 packaging UI at 1366 / 390 / 360
- selection persistence
- WooCommerce total recalculation
- Batch-5 Summary fee/total rendering with and without paid packaging
- Step 03 final amount
- normal test order contains packaging selection exactly once
- Crypto on-hold order contains the same packaging selection and correct total
- Step-04 result/order details can read the durable order truth later in R4
```

Batch 5 remains historically closed for the accepted pre-packaging baseline; the new feature requires a targeted Summary regression rather than pretending the new fee row was previously tested.

## Sequence decision

Current sequence is now:

```text
Batch 5: CLOSED
-> Packaging Service specification
-> Packaging Service bounded implementation + targeted runtime acceptance
-> Batch 6: R1 final end-to-end acceptance
-> Batch 7: R2 notice/error ownership
-> Batch 9: R4 Step-04 live result-status matrix
```

Checkout remains:

```text
Not done
```
