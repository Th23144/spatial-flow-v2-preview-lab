# Project 2 · S5 Preparing Invoice Internal-State Acceptance

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User decision

The user reviewed both required S5 flows and confirmed:

```text
All normal.
Accepted.
```

Reviewed flows:

```text
Default:
Step 03 Payment
→ S5 Preparing Invoice
→ automatic Waiting for payment

Bootstrap failure:
Preparing Invoice
→ Invoice unavailable
→ Retry preparing invoice
→ Preparing Invoice
→ Waiting for payment

Alternative failure action:
Return to payment methods
→ Step 03 Payment
```

## 2. Accepted artifact

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

Accepted implementation commits:

```text
HTML Preparing / failed / ready structure:
4a36c69fe3a9ad265f97ceca8981146f7c7e5d88

JavaScript invoice-bootstrap state machine:
e051588601c0dac12c57cfe34d6b22bf1636f1cc

CSS Preparing / failure responsive presentation:
ca8774796e62e4d6b1aff2256345928394799fe2
```

## 3. Accepted state sequence

The fixed USDT/TRON S5 Workspace now truthfully represents:

```text
Preparing your Crypto payment
→ Creating or restoring your secure invoice
→ Waiting for payment
```

The Preparing state is internal to S5. It is not:

```text
- a new Checkout page
- a fifth business step
- a second payment confirmation
- a Generate Invoice action
- an asset/network selection page
```

## 4. Accepted Preparing behavior

Before invoice readiness:

```text
- no authoritative Crypto amount is shown
- no receiver address is shown
- copy controls are unavailable
- transfer instructions are unavailable
- Transaction Hash controls are unavailable
- the right Order Summary reports Preparing payment / Preparing invoice
```

After invoice readiness, the previously accepted Waiting for payment interface appears automatically.

## 5. Accepted bootstrap-failure behavior

Customer-safe failure surface:

```text
We could not prepare your Crypto payment.
```

Accepted actions:

```text
Retry preparing invoice
Return to payment methods
```

Retry preserves the single-order model:

```text
Failed
→ Preparing
→ Waiting for payment
```

It does not create a duplicate order or add another generic Checkout confirmation.

## 6. Server-authority boundary remains locked

The static page does not perform:

```text
WooCommerce order creation
real invoice creation or reuse
receiver-address retrieval
TronGrid verification
payment_complete()
Step 04 navigation
```

Future live integration must preserve:

```text
- WooCommerce order authority
- one active invoice per unpaid order
- idempotent Create or Reuse Invoice
- server-controlled readiness and failure responses
- server-owned amount and receiver address
- order-pay unfinished-payment recovery
- browser state never deciding payment success
```

## 7. Scope audit

The implementation changed only:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

Unchanged:

```text
Step 01
Step 02
main Step-03 payment host
S4A selector
future multi-asset Workspace reference
shared Checkout JavaScript
Step 04 reference
Crypto plugin
live WordPress / WooCommerce
Project 2 version 2.7.8
```

## 8. Phase consequence

```text
S5 Preparing Invoice correction: accepted and closed
S5 fixed USDT/TRON Workspace state family: accepted through invoice readiness
S6 supported verification/recovery states: authorized next phase, not started
S7 Step 04 result: not started
Live Checkout/plugin integration: not started
Checkout: Not done
```

S6 must still be implemented as a separate bounded group and may represent only states supported by the approved first-phase plugin contract.
