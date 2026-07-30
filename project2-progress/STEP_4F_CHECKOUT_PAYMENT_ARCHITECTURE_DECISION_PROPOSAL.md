# Step 4F · Checkout and Payment Architecture Decision Proposal

Last updated: 2026-07-29  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Cart: Completed 1:1
Checkout: Not done
Current source edit: None
Current gate: architecture decision before visual implementation
```

## 1. Problem statement

The current live Checkout is not only visually incomplete. Its payment and order flow is structurally weak:

```text
- the existing multi-step sequence is incomplete and confusing
- payment-method choice and final confirmation are separated incorrectly
- the crypto path adds another payment-selection page only after the fourth confirmation step
- payment success and order-submitted pages are fragmented
- the current static Checkout reference visually shows Address / Shipping / Payment / Review, but the repository does not currently provide separate authoritative Shipping, Payment and Review static-page files
- the independent DIY site must use WooCommerce orders, payments, emails, refunds and fulfillment without forcing customers to repeat the full main-store Checkout
```

This means Checkout cannot be treated as a CSS-only 1:1 page. Functional architecture must be locked first.

## 2. Recommended architecture

Do not choose a pure traditional four-page flow or a pure post-checkout payment aggregator.

Use:

```text
One WooCommerce commerce core
+ two customer-facing Checkout entry experiences
+ one shared payment-orchestration layer
+ one canonical order-received result
```

### Main store

Use an on-site branded Checkout on one Checkout URL/session.

The interface may visually expose progressive sections:

```text
Contact and address
→ Shipping
→ Payment
→ Final review
```

These should be progressive sections or controlled steps in one Checkout state, not four unrelated pages with duplicate submission points.

The shopper selects the payment method before the final Pay / Place order action.

### DIY site

The DIY site keeps its own source-based Studio, Bag and Checkout experience.

It collects the customer address once and sends the verified design payload, cart data and customer data to WooCommerce through a secure server bridge or supported Store API flow.

After the WooCommerce order or Checkout draft exists, the DIY customer should not be sent through the full main-store four-step Checkout again.

Instead, route the customer to a compact shared payment shell based on the WooCommerce existing-order payment flow:

```text
Order summary
Available payment methods
Pay now
```

The shell may be visually branded for DIY, but WooCommerce remains the order and payment authority.

## 3. Gateway routing model

### Card, Apple Pay and Google Pay

```text
Main store:
complete directly in the on-site Checkout payment section

DIY:
complete in the compact shared payment shell
```

### Cryptocurrency

Correct flow:

```text
Select Cryptocurrency as the payment method
→ click Pay / Place order once
→ open the crypto gateway coin/network/invoice interface directly
→ gateway confirms payment
→ return to the canonical order-received page
```

Do not keep this sequence:

```text
select payment
→ separate review page
→ click final confirmation
→ separate generic crypto-choice page
→ separate success page
```

That creates duplicate commitment points and makes the payment state hard to understand.

### Manual bank transfer or delayed-confirmation methods

```text
Submit order once
→ WooCommerce order enters the appropriate unpaid / on-hold state
→ show payment instructions
→ move to Processing only after payment is confirmed
```

### Future redirect gateways

A gateway-specific redirect is acceptable after the customer has selected that method. The gateway should return to the same canonical WooCommerce order-received destination.

## 4. Why a pure traditional flow is not enough

A pure main-store four-step Checkout may work for ordinary main-store orders, but it is a poor handoff for the independent DIY site because it would:

```text
- make the customer repeat address information
- break the DIY brand and interaction continuity
- expose unrelated main-store Checkout steps
- increase abandonment
- complicate preservation of the DIY production payload
```

## 5. Why a pure post-checkout aggregator is not enough

A standalone generic payment-selection page for every order would duplicate payment selection for the main store and create two Checkout surfaces.

For the main store, payment methods should remain part of Checkout.

For DIY, a compact existing-order payment shell is appropriate because the DIY Checkout has already collected the operational data.

## 6. One canonical result page

Both main-store and DIY orders should end at one WooCommerce-owned order-received flow.

The presentation may branch by order-source metadata:

```text
main_store
diy_studio
```

But there should not be unrelated success pages with different definitions of whether payment and order creation succeeded.

## 7. Order-state contract

Use WooCommerce order state as the source of truth:

```text
checkout-draft / draft:
customer is still completing Checkout

pending payment:
order committed but not paid

on hold:
payment confirmation is delayed or manual

processing:
payment received; physical order awaits fulfillment

completed:
fulfillment is finished

failed / cancelled:
payment failed, expired or the order was cancelled
```

Gateway callbacks / webhooks, not page navigation alone, must confirm successful payment.

## 8. Integration boundary for DIY

Do not expose WooCommerce REST API secrets in browser JavaScript.

Acceptable directions:

```text
- server-to-server bridge controlled by the DIY backend
- WooCommerce Store API with Cart Token / Nonce where appropriate
- existing-order Checkout / order-pay processing after the order is securely created
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
- order notes and fulfillment status
```

## 9. Reference-status conclusion

Repository evidence currently confirms:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-thank-you-v1.html
```

The Checkout reference contains the Address / Shipping / Payment / Review progress language, but separate authoritative static Shipping, Payment and Review page files have not been confirmed.

Therefore the visible current Checkout reference is not sufficient by itself to define the full functional flow.

## 10. Required execution sequence

```text
Gate 0 — approve Checkout/payment architecture
Gate 1 — audit current live Checkout PHP, JS, hooks, CartFlows and gateway ownership
Gate 2 — create the payment-method contract matrix
Gate 3 — define main-store and DIY Checkout state diagrams
Gate 4 — complete/extend the Checkout static reference for all real states
Gate 5 — implement functionality while preserving WooCommerce ownership
Gate 6 — perform visual 1:1 replacement
Gate 7 — gateway sandbox tests, failure tests and webhook tests
Gate 8 — backend editability, desktop/mobile and order-lifecycle closure
```

Do not start broad Checkout CSS replacement before Gates 0–4 are complete.

## 11. Recommended decision

```text
Recommended:
Hybrid WooCommerce payment orchestration

Main store:
on-site progressive Checkout with payment-method selection before one final Pay action

DIY:
DIY-owned Checkout data collection, then compact shared WooCommerce payment shell without repeated address steps

Crypto:
direct gateway-specific handoff after selecting Cryptocurrency, then return to one canonical order-received page
```

This is a proposal pending explicit user approval. It is not yet implemented.