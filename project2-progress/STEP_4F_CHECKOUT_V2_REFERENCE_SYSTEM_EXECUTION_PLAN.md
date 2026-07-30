# Step 4F · Checkout V2 Interactive Reference System Execution Plan

Last updated: 2026-07-30  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Cart: Completed 1:1
Checkout: Not done
Gate 0 architecture: Approved, still being completed through the V2 reference system
Gate 1 live-code audit: Paused
Current real-site source edit: None
Current executable work: Build and approve the interactive Checkout V2 HTML reference system
```

## 1. Purpose

The Checkout page will not be rebuilt directly in the live WordPress / WooCommerce implementation yet.

First create a complete, clickable V2 reference system that defines:

```text
- the customer-facing information architecture
- the Step 01–04 progression
- the current real Cryptocurrency payment path
- payment waiting, confirmation and recovery states
- desktop and mobile composition
- navigation back to the existing V2 Cart, Shop and other preview pages
- future gateway insertion rules without hardcoding unconfirmed methods
```

Only after this reference system is approved may the project proceed to live Checkout ownership audit, functional reconstruction and final skin replacement.

## 2. Locked business progression

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Authoritative distinction:

```text
Steps 01–03 = Checkout
Step 04 = post-payment or post-submission result
```

The former `04 REVIEW` label is superseded.

Step 03 contains the final order summary and the one final payment/submission action. Step 04 never asks the customer to confirm or pay again.

## 3. Payment-method uncertainty rule

The current production payment capability is incomplete. Cryptocurrency is the only confirmed active method at this planning point.

Therefore the V2 system must not hardcode a permanent list such as:

```text
Apple Pay
Google Pay
Credit Card
PayPal
Bank Transfer
```

Instead it must define a dynamic Payment Method Registry contract:

```text
WooCommerce / enabled gateway availability
→ supported presentation family
→ customer-visible entry
→ gateway-specific processing state
→ one canonical result router
```

Supported presentation families:

```text
- express wallet
- inline secure fields
- dedicated Step-03 subflow
- redirect gateway
- offline / delayed-confirmation method
```

The first approved reference flow will show the current real Cryptocurrency path. Future methods may be added later without redesigning the Step-03 two-column shell.

## 4. Authoritative desktop layout

Every main Checkout and Cryptocurrency workspace uses two columns only:

```text
Left main workspace: approximately 7fr
Right sticky Order Summary: approximately 5fr
Desktop gap: approximately 72–80px
```

The following are sections inside the left workspace, not a third column:

```text
- Deliver-to summary + Edit
- Shipping summary + Edit
- current step content
- payment method area or Crypto workspace
- terms / consent where applicable
- one primary progression or payment action
```

## 5. Cryptocurrency presentation rule

Cryptocurrency must not expand a full asset/network catalog inside a small accordion.

The Step-03 main payment page shows only a concise gateway entry:

```text
Cryptocurrency
Choose from supported digital assets and networks.
[ Continue with Cryptocurrency ]
```

That action opens a dedicated Crypto Payment Workspace that remains functionally part of Step 03 and preserves:

```text
- the same Checkout session
- the same WooCommerce order or draft
- Step 03 as the active progress state
- a Back to payment methods action
- the same final Order Summary authority
```

Primary selection order:

```text
choose/search asset
→ choose one enabled network for that asset
→ review quote and rate-lock information
→ create invoice
```

The UI must be driven by backend-supported `asset + allowed network` pairs rather than arbitrary combinations.

## 6. V2 reference package structure

Create a dedicated directory without overwriting the historical V1 files:

```text
preview/checkout-v2/
```

Planned files:

```text
index.html
assets/checkout-v2.css
assets/checkout-v2.js

step-01-contact-address.html
step-02-shipping.html
step-03-payment.html
step-03-crypto-select.html
step-03-crypto-invoice.html
step-03-crypto-confirming.html
step-03-crypto-expired.html
step-03-crypto-failed.html
step-04-order-confirmed.html
step-04-payment-pending.html
```

`payment-pending` is an architectural result-state reference. It does not assert that a delayed-payment production gateway is currently enabled.

## 7. Interactive navigation contract

The reference package must be clickable and allow the user to simulate the journey.

### Main path

```text
Existing V2 Cart
→ Step 01 Contact / Address
→ Step 02 Shipping
→ Step 03 Payment
→ Crypto Select
→ Crypto Invoice / Waiting
→ Crypto Confirming
→ Step 04 Order Confirmed
```

### Recovery paths

```text
Crypto Invoice
→ Expired
→ Create new invoice

Crypto processing
→ Failed
→ Retry or choose another payment method

Any Step 03 Crypto subview
→ Back to payment methods
```

### Existing-reference integration

The new system must link to existing V2 reference pages using relative repository paths:

```text
Cart / Edit Bag:
../spatial-flow-cart-v1.html

Shop / Continue Shopping:
../spatial-flow-shop-v1.html

Product examples where used:
../spatial-flow-product-v1.html

Home / brand entry:
../spatial-flow-v1.html
```

After the first complete V2 Checkout simulation is approved, update the existing Cart reference action:

```text
preview/spatial-flow-cart-v1.html
Go to checkout
```

from:

```text
spatial-flow-checkout-v1.html
```

to:

```text
checkout-v2/index.html
```

Do not update that link before `checkout-v2/index.html` and the main Step 01–04 route are valid, to avoid a broken preview flow.

The old files remain accessible as historical references:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-thank-you-v1.html
```

They must not be silently overwritten or presented as the new authoritative flow.

## 8. Simulation-state behavior

The static simulation may use local-only front-end state such as query parameters, `sessionStorage` or `localStorage` to preserve example choices between pages.

Allowed simulated values:

```text
- contact/address sample data
- selected shipping method
- selected crypto asset/network pair
- example amount and countdown
- example invoice state
```

The reference must clearly remain a visual/interaction prototype. It must not claim to create a real order, perform real payment, query a blockchain, or persist production customer data.

No WooCommerce API secrets, real wallet secrets or live payment credentials may appear in the preview files.

## 9. Responsive scope

Every authoritative state must be reviewed at minimum at:

```text
Desktop reference: 1366 × 768 and full-page composition
Mobile: 390 × 844
Narrow mobile: 360 × 800
```

Mobile is production-quality rather than literal weak-desktop compression.

Required mobile qualities:

```text
- no horizontal overflow
- no obscured gateway controls
- clear active-step hierarchy
- readable address/shipping summaries
- accessible asset/network selection
- invoice QR/address/countdown remain usable
- primary action remains reachable without covering form fields
```

## 10. Build order

```text
Phase V2-0 — create this execution contract and connect it to project indexes
Phase V2-1 — create shared Checkout V2 visual shell and interactive index
Phase V2-2 — Step 01 Contact / Address
Phase V2-3 — Step 02 Shipping
Phase V2-4 — Step 03 current payment-method shell
Phase V2-5 — Crypto asset/network selection workspace
Phase V2-6 — Crypto invoice / waiting workspace
Phase V2-7 — Crypto confirming and recovery states
Phase V2-8 — Step 04 Order Confirmed and Payment Pending result states
Phase V2-9 — complete cross-page link audit with existing V2 Cart/Shop/Product/Home
Phase V2-10 — desktop/mobile visual acceptance and static-flow closure
```

One bounded group is reviewed at a time. Do not build the full live Checkout while the reference states are still under visual or functional-definition review.

## 11. Approval gates

The reference system is not approved merely because files exist.

It must pass:

```text
- correct Step 01–04 semantics
- two-column desktop rule
- dynamic gateway framework without fake unconfirmed methods
- complete current Cryptocurrency path
- waiting / confirming / failure / expiry recovery
- no duplicate payment commitment point
- one canonical result flow
- clickable navigation without dead links
- integration with current V2 Cart and surrounding preview pages
- 1366 / 390 / 360 visual review
```

## 12. Boundary before live implementation

Until the V2 reference system passes approval:

```text
- do not modify the real Checkout PHP
- do not modify live Checkout JavaScript
- do not modify CartFlows configuration
- do not modify payment gateways
- do not begin broad live Checkout CSS replacement
- do not mark Checkout Completed 1:1
```

After approval, proceed in this order:

```text
live ownership audit
→ payment-method contract matrix
→ functional reconstruction preserving WooCommerce ownership
→ gateway sandbox and recovery testing
→ final 1:1 visual replacement
→ backend editability and order-lifecycle closure
```

## 13. Current exact next action

```text
Create Phase V2-1:
preview/checkout-v2/index.html
preview/checkout-v2/assets/checkout-v2.css
preview/checkout-v2/assets/checkout-v2.js
```

The first artifact will establish the shared header, progress system, two-column shell, existing-preview navigation and clickable route map. It will not modify the live website or the existing Cart link yet.
