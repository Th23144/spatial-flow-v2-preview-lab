# Step 4F · Checkout Static Flow Completion Plan

Last updated: 2026-07-30  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Cart: Completed 1:1
Checkout: Not done
Gate 0 architecture: Approved, still being fully specified through the linked static reference flow
Gate 1 live-code audit: Paused
Current real-site source edit: None
Current executable work: Complete and link the existing Checkout static page family inside preview/
```

## 1. Terminology correction

`V2` refers to the repository and Project 2 visual-replacement program:

```text
Th23144/spatial-flow-v2-preview-lab
```

It does not mean that Checkout should be renamed to `checkout-v2`, placed in a new `checkout-v2/` directory, or treated as a separate product version.

The misinterpreted `preview/checkout-v2/` experiment has been removed.

## 2. Existing authoritative entry page

The existing static Checkout entry remains:

```text
preview/spatial-flow-checkout-v1.html
```

This page is the Step 01 Contact / Address screen in the linked static sequence.

The existing Cart reference already links to it:

```text
preview/spatial-flow-cart-v1.html
→ spatial-flow-checkout-v1.html
```

That link must remain the normal static customer journey.

## 3. Locked business progression

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

The former `04 REVIEW` concept is superseded.

Step 03 contains the final Order Summary and the one final payment/submission action. Step 04 never asks the customer to confirm or pay again.

## 4. Required linked static files

All pages remain in the existing `preview/` directory and retain the repository's current naming language.

### Main sequence

```text
preview/spatial-flow-checkout-v1.html
  Step 01 Contact / Address

preview/spatial-flow-checkout-shipping-v1.html
  Step 02 Shipping

preview/spatial-flow-checkout-payment-v1.html
  Step 03 dynamic payment-method entry

preview/spatial-flow-thank-you-v1.html
  Step 04 Order Confirmed / Thank You / Receipt
```

### Cryptocurrency Step-03 subflow

```text
preview/spatial-flow-checkout-crypto-select-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-confirming-v1.html
preview/spatial-flow-checkout-crypto-expired-v1.html
preview/spatial-flow-checkout-crypto-failed-v1.html
```

These are Step-03 subviews, not fourth or fifth Checkout business steps.

## 5. Clickable navigation contract

### Main path

```text
Cart
→ 01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ Cryptocurrency workspace
→ Invoice / Waiting
→ Confirming
→ 04 Order Confirmed
```

### Back navigation

```text
02 Shipping
→ Back to contact / address

03 Payment
→ Back to shipping

Any Crypto Step-03 subview
→ Back to payment methods
```

### Recovery navigation

```text
Crypto Invoice
→ Expired
→ Create new invoice

Crypto processing
→ Failed
→ Retry or choose another payment method
```

Every page must use real relative links to another existing file. No dead links may be represented as completed flow.

## 6. Existing Step-01 page correction

The current `spatial-flow-checkout-v1.html` visually identifies Step 01 as active, but its source currently places Address, a shipping placeholder, payment placeholders and a Review / Place Order block into one long document.

It must be corrected into a true Step-01 page:

```text
Keep:
- Contact / email
- billing / delivery address fields
- optional separate-shipping-address control where appropriate
- order notes only if the final product decision retains them in Step 01
- right-side Order Summary

Remove from Step 01:
- selectable shipping-method UI
- payment-method UI
- Review / Place Order UI

Replace final action with:
- Continue to Shipping
```

The static form may use local prototype state, but must not claim to create a real order.

## 7. Step-02 Shipping page contract

The new Shipping page must:

```text
- keep the same shared header, intro and two-column Checkout language
- show Step 01 as complete and Step 02 as active
- display a concise Deliver-to summary with Edit link back to Step 01
- display only shipping methods that are represented as prototype examples
- show delivery timing, price and selected state clearly
- update the prototype Order Summary total visibly
- provide Back and Continue to Payment actions
```

The live implementation will later map this surface to WooCommerce shipping methods and totals. The static page remains a visual interaction contract only.

## 8. Step-03 dynamic payment framework

The current production payment capability is incomplete. Cryptocurrency is the only confirmed active method at this planning point.

Therefore Step 03 must not permanently hardcode unconfirmed methods such as:

```text
Apple Pay
Google Pay
Credit Card
PayPal
Bank Transfer
```

Instead the static design defines a dynamic payment-method region capable of supporting:

```text
- express wallet
- inline secure fields
- dedicated Step-03 subflow
- redirect gateway
- offline / delayed-confirmation method
```

The first authoritative customer path shows Cryptocurrency as the current available method.

Future gateway examples may be documented separately as compatibility studies, but must not be presented as currently enabled production behavior.

## 9. Authoritative Step-03 desktop layout

Desktop uses two columns only:

```text
Left payment workspace: approximately 7fr
Right sticky Order Summary: approximately 5fr
Gap: approximately 72–80px
```

The following are sections inside the left workspace, not a third column:

```text
- Deliver-to summary + Edit
- Shipping summary + Edit
- payment-method entry area
- selected gateway content or transition action
- terms / consent where applicable
- one final payment/submission action
```

## 10. Cryptocurrency presentation rule

The main Payment page shows a concise entry:

```text
Cryptocurrency
Choose from supported digital assets and networks.
[ Continue with Cryptocurrency ]
```

It must not expand the complete asset/network catalog inside a small accordion.

The dedicated Crypto selection page remains Step 03 and preserves:

```text
- Step 03 active state
- same prototype Checkout session
- same Order Summary amount authority
- Back to payment methods
```

Primary selection order:

```text
choose/search asset
→ choose one enabled network for that asset
→ review quote and rate-lock information
→ create invoice
```

The UI represents backend-supported `asset + allowed network` pairs rather than arbitrary combinations.

## 11. Crypto invoice and waiting contract

After invoice creation, the Step-03 invoice page must show:

```text
- selected asset
- selected network
- exact amount
- receiving address
- QR code
- invoice ID
- expiry countdown
- copy amount
- copy address
- automatic status language
- optional manual Refresh status action
```

The customer cannot mark the order paid manually.

The static simulation may demonstrate:

```text
awaiting payment
→ transaction detected
→ confirming
→ confirmed
```

Success enters Step 04 only after the simulated confirmed state.

Recovery states remain Step 03:

```text
expired
underpaid
failed
cancelled
```

## 12. Step-04 result contract

`preview/spatial-flow-thank-you-v1.html` will become the linked Step-04 confirmed result reference.

Paid / confirmed presentation may show:

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

A separate pending-result reference may be added only as an architectural state and must not claim that a delayed-payment production method is currently enabled.

Failed, cancelled or expired payment does not enter the Thank You page.

## 13. Shared prototype state

The linked static pages may use:

```text
query parameters
sessionStorage
localStorage
```

to preserve example values such as:

```text
- contact and address
- selected shipping method
- selected crypto asset/network pair
- example amount
- example invoice status
```

The preview must not:

```text
- create a real WooCommerce order
- query a real blockchain
- expose API secrets
- contain real private wallet credentials
- persist production customer data
```

## 14. Existing V2-repository integration

All new pages must continue linking to the existing repository reference pages:

```text
spatial-flow-v1.html
spatial-flow-shop-v1.html
spatial-flow-product-v1.html
spatial-flow-cart-v1.html
spatial-flow-search-v1.html
spatial-flow-wishlist-v1.html
```

The Checkout sequence is part of the existing preview site, not a separate hub.

The Cart's current `Go to checkout` link already enters `spatial-flow-checkout-v1.html`; no redirect to a new directory is required.

## 15. Responsive acceptance

Every authoritative state must be reviewed at:

```text
1366 × 768 and desktop full-page composition
390 × 844
360 × 800
```

Required mobile qualities:

```text
- no horizontal overflow
- clear active-step hierarchy
- readable address and shipping summaries
- accessible asset/network search and selection
- usable invoice QR/address/countdown
- no obscured gateway controls or primary actions
```

## 16. Corrected build order

```text
Phase S1 — correct existing spatial-flow-checkout-v1.html into true Step 01 and add Continue to Shipping
Phase S2 — create spatial-flow-checkout-shipping-v1.html and link 01 ↔ 02
Phase S3 — create spatial-flow-checkout-payment-v1.html and link 02 ↔ 03
Phase S4 — create Crypto select page and link from Step 03
Phase S5 — create Crypto invoice / waiting page
Phase S6 — create confirming and recovery pages
Phase S7 — rework spatial-flow-thank-you-v1.html into Step 04 confirmed result and link successful flow
Phase S8 — full relative-link audit across Cart / 01 / 02 / 03 / Crypto / 04
Phase S9 — 1366 / 390 / 360 visual and interaction acceptance
```

One bounded group is reviewed at a time.

## 17. Boundary before live implementation

Until the complete linked static flow passes approval:

```text
- do not modify live Checkout PHP
- do not modify live Checkout JavaScript
- do not modify CartFlows configuration
- do not modify payment gateways
- do not begin broad live Checkout CSS replacement
- do not mark Checkout Completed 1:1
```

After approval:

```text
live ownership audit
→ payment-method contract matrix
→ functional reconstruction preserving WooCommerce ownership
→ gateway sandbox and recovery testing
→ final 1:1 visual replacement
→ backend editability and order-lifecycle closure
```

## 18. Current exact next action

```text
Phase S1:
Refactor preview/spatial-flow-checkout-v1.html into a genuine Step 01 Contact / Address static page.
Add a real relative link to the future preview/spatial-flow-checkout-shipping-v1.html only in the same bounded change that creates the Step 02 file, so the repository never contains a dead Next link.
```
