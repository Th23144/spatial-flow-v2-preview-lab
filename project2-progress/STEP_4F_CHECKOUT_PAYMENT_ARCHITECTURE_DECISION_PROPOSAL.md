# Step 4F · Checkout and Payment Architecture Decision

Last updated: 2026-07-30  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Cart: Completed 1:1
Checkout: Not done
Gate 0 architecture decision: Approved with user correction
Current source edit: None
Current executable gate: Gate 1 live Checkout ownership audit
```

## 1. Authoritative correction

The previous proposal described the main-store sequence as:

```text
Contact and address
→ Shipping
→ Payment
→ Final review
```

That description is superseded.

The user clarified that payment must be completed in step 3. Step 4 is not a pre-payment review step. It is the post-payment result, confirmation and receipt surface.

The authoritative main-store progression is:

```text
01 Contact and address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Therefore:

```text
Steps 01–03 = Checkout
Step 04 = post-Checkout result
```

The current static reference label `04 REVIEW` is no longer authoritative and must be redesigned before implementation.

## 2. Approved architecture

Use:

```text
One WooCommerce commerce core
+ two customer-facing Checkout entry experiences
+ one shared payment-orchestration layer
+ one canonical result flow
```

Do not use four unrelated Checkout pages with repeated submissions.

Do not use a universal post-Checkout payment aggregator for every order.

## 3. Main-store flow

The main store uses one branded Checkout URL/session with progressive sections or controlled state transitions.

### Step 01 — Contact and address

Collect and validate:

```text
- email / contact details
- billing address
- shipping address
- required customer consent
```

Advancing to step 02 does not create a paid order and does not represent final commitment.

### Step 02 — Shipping

Present and validate:

```text
- available shipping methods
- shipping price
- delivery estimate where available
- updated subtotal, shipping and total
```

Advancing to step 03 does not create a second Checkout session.

### Step 03 — Payment

This is the final transactional Checkout step.

It must include:

```text
- final order summary
- final shipping and total
- available payment methods
- payment-method-specific fields or handoff
- one final Pay / Place order action
```

There is no separate editable review page after step 03.

The user reviews the final order summary inside step 03 before pressing the final payment action.

### Step 04 — Result / confirmation

Step 04 is reached only after step 03 resolves into a defined order/payment result.

It is not another Checkout form and does not contain another confirmation button.

For an immediately paid order, step 04 displays:

```text
- Order Confirmed / Thank You heading
- order number
- payment confirmation / transaction reference where appropriate
- customer email
- billing and shipping summary
- purchased items
- shipping method
- subtotal, shipping and total
- order date
- next-step / fulfillment guidance
```

The result page is WooCommerce order-owned and must not infer payment success from navigation alone.

## 4. Result-state branching

`Order Confirmed` must not be shown for every possible outcome indiscriminately.

### Paid / confirmed

```text
Step 03 payment confirmed
→ Step 04 Order Confirmed / Thank You / receipt
```

Typical physical-product state after confirmed payment:

```text
Processing
```

### Delayed or manual payment

For bank transfer or another delayed-confirmation method:

```text
Step 03 submits the order once
→ order enters Pending payment or On hold as appropriate
→ Step 04 displays Order received / Payment pending / instructions
```

This branch is a valid result page, but it must not falsely state that payment has been confirmed.

### Failed, cancelled or expired payment

```text
Payment failed / cancelled / expired
→ do not show Order Confirmed
→ remain in or return to the payment recovery state
→ allow a safe retry when supported
```

A failed payment page is not the canonical Thank You state.

## 5. Gateway routing contract

### Card, Apple Pay and Google Pay

Main store:

```text
Complete inside step 03
→ successful confirmation
→ step 04 Order Confirmed / Thank You
```

DIY:

```text
Complete inside the compact shared payment shell
→ successful confirmation
→ canonical result flow
```

### Cryptocurrency

Correct main-store flow:

```text
Step 03 select Cryptocurrency
→ click Pay once
→ open coin / network / invoice interface as part of the step-03 payment flow
→ gateway or chain verification confirms payment
→ step 04 Order Confirmed / Thank You
```

The coin/network/invoice interface may be an embedded state or a gateway-specific handoff, but it is not a fifth business step.

Do not keep:

```text
select crypto
→ separate review step
→ confirm again
→ generic crypto-choice page
→ separate crypto success page
→ unrelated order-success page
```

### Manual bank transfer

```text
Step 03 submit order once
→ display transfer instructions
→ order remains unpaid / On hold
→ step 04 uses payment-pending language
→ move to Processing only after payment confirmation
```

### Future redirect gateways

A gateway redirect after selection in step 03 is allowed.

The gateway must return to the same canonical WooCommerce result handling, with the visible state determined by the actual order/payment status.

## 6. DIY-site flow

The independent DIY site keeps its own source-based Studio, Preview, Bag and Checkout experience.

The DIY customer must not complete address and shipping on the DIY site and then repeat main-store steps 01 and 02.

Approved DIY flow:

```text
DIY Studio
→ DIY Preview
→ DIY Bag
→ DIY-owned contact / address / shipping collection
→ securely create or update the WooCommerce order / Checkout draft
→ compact shared payment shell
→ canonical result flow
```

The compact payment shell contains only what remains necessary:

```text
- DIY order/design summary
- final amount
- available payment methods
- payment-method-specific fields or handoff
- Pay now
```

It does not repeat the complete main-store Checkout.

Functionally, this compact shell performs the equivalent of main-store step 03.

After successful payment, the DIY customer reaches the same WooCommerce-owned result system used by the main store, with DIY-specific presentation controlled by order-source metadata.

## 7. One canonical result system

Both sources end in one order-owned result architecture:

```text
order_source = main_store
order_source = diy_studio
```

Presentation may branch, but payment and order truth may not.

DIY-specific confirmed-order content may include:

```text
- design ID
- wrist size
- bead/material list
- design preview image
- production lead time
```

The system must not maintain unrelated success pages with conflicting meanings of:

```text
order submitted
payment completed
crypto paid
order confirmed
```

## 8. Order-state contract

WooCommerce order state is the source of truth:

```text
checkout-draft / draft:
customer is still completing Checkout

pending payment:
order committed but payment is not confirmed

on hold:
payment confirmation is delayed or manual

processing:
payment confirmed; physical order awaits fulfillment

completed:
fulfillment is finished

failed / cancelled:
payment failed, expired or the order was cancelled
```

Gateway callback, webhook or verified payment result—not page navigation alone—must determine payment success.

## 9. DIY integration boundary

Do not expose WooCommerce REST API secrets in browser JavaScript.

Acceptable implementation directions:

```text
- server-to-server bridge controlled by the DIY backend
- WooCommerce Store API with Cart Token / Nonce where appropriate
- existing-order Checkout / order-pay processing after secure order creation
```

WooCommerce remains responsible for:

```text
- order ID and order key
- customer addresses
- shipping method and totals
- tax where enabled
- payment method and transaction state
- inventory
- emails
- refunds
- order notes
- fulfillment status
```

## 10. Static-reference consequence

Repository evidence currently confirms:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-thank-you-v1.html
```

The current Checkout static reference visibly labels:

```text
01 ADDRESS
02 SHIPPING
03 PAYMENT
04 REVIEW
```

That fourth label conflicts with the approved architecture.

Before live implementation, the Checkout reference set must be revised or extended to define:

```text
01 Contact / Address
02 Shipping
03 Payment + final order summary
04 Order Confirmed / Thank You / Receipt
```

It must also define non-success result states:

```text
- payment pending / bank-transfer instructions
- payment failed
- payment cancelled
- payment expired
- payment retry
- crypto invoice / coin-network selection
- crypto awaiting confirmation
- DIY compact payment shell
```

The existing visual screenshot alone is not a complete functional specification.

## 11. Required execution sequence

```text
Gate 0 — Checkout/payment architecture: Approved
Gate 1 — audit current live Checkout PHP, JS, hooks, CartFlows and gateway ownership
Gate 2 — create the payment-method contract matrix
Gate 3 — define main-store and DIY state diagrams
Gate 4 — revise/extend static references for every real state
Gate 5 — implement functionality while preserving WooCommerce ownership
Gate 6 — perform visual 1:1 replacement against the corrected references
Gate 7 — gateway sandbox, failure, cancellation, timeout, retry and webhook tests
Gate 8 — backend editability, desktop/mobile and order-lifecycle closure
```

Do not start broad Checkout CSS replacement before Gates 1–4 are complete.

## 12. Locked decision

```text
Architecture: Hybrid WooCommerce payment orchestration

Main store:
01 Contact and address
02 Shipping
03 Payment and final order commitment
04 Order Confirmed / Thank You / receipt result

DIY:
DIY-owned data collection
→ compact shared payment shell equivalent to step 03
→ canonical result system

Crypto:
coin/network/invoice handling belongs to step 03 payment flow
→ confirmed payment
→ step 04 confirmed-order result

No separate pre-payment Review step.
No second final-confirmation click after payment-method selection.
No duplicated full main-store Checkout for DIY customers.
```

This architecture is approved. No Checkout source implementation has started yet.