# Project 2 · S5 Preparing Invoice Internal-State Correction Gate

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Purpose

The accepted S5 fixed-USDT/TRON page currently opens directly in:

```text
Waiting for payment
```

The future live sequence requires a truthful internal bootstrap state before the server has returned or restored the invoice.

This bounded correction adds:

```text
Preparing your Crypto payment
→ Waiting for payment
```

inside the same S5 page.

## 2. Correct live sequence represented by the state

```text
Customer clicks the single final Step-03 payment action
→ WooCommerce submits Checkout
→ order is created
→ order becomes on-hold
→ gateway process_payment() opens the Step-03 Crypto Workspace
→ Workspace requests Create or Reuse Invoice
→ Preparing Invoice state remains visible while the server resolves the invoice
→ server returns the existing or newly created invoice
→ S5 renders Waiting for payment with exact amount and receiver address
```

The customer is not asked to click another Generate Invoice button.

## 3. Required S5 states in this bounded group

### A. Preparing Invoice

Customer-facing meaning:

```text
Preparing your Crypto payment
Creating or restoring your secure invoice.
```

Required behavior:

```text
- payment amount and receiver address are not shown as authoritative before invoice data exists
- copy controls and Transaction Hash verification remain unavailable
- no fake success, address or payment status is displayed
- the page remains visually Step 03
```

### B. Waiting for payment

After the simulated or real server response:

```text
Waiting for payment
```

The existing accepted S5 amount, address, transfer instructions, copy controls and Transaction Hash flow become available.

### C. Invoice bootstrap failure

The same bounded group should define a truthful retry surface for failure to create or restore the invoice:

```text
We could not prepare your Crypto payment.
[Retry]
[Return to payment methods]
```

This does not belong to S6 transaction-verification failure. It is an invoice-bootstrap failure before the customer can pay.

## 4. Static-reference behavior

The static page may simulate:

```text
Preparing Invoice
→ brief automatic transition
→ Waiting for payment
```

The delay is only a visual-state demonstration and must be labeled as prototype behavior.

The static reference must also provide a bounded way to inspect the bootstrap-failure/retry state without representing it as a real server error.

## 5. Live implementation truth

In production:

```text
- transition timing is server-controlled
- invoice creation/reuse is idempotent
- one active invoice exists per unpaid order
- amount and receiver address come from the plugin/server
- browser state is not payment authority
- repeated workspace loads restore the same invoice
```

## 6. Explicitly not part of this correction

```text
- new Checkout page
- new business step
- second customer confirmation action
- asset/network selection
- QR code
- wallet connection
- automatic blockchain monitoring
- transaction verification error states
- payment-confirmed Step 04
- plugin or live WordPress modification
```

## 7. Allowed file scope

Only the current S5 static-reference files may be changed:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

A separate implementation record may be added.

Prohibited changes:

```text
Step 01
Step 02
main Step-03 payment host
S4A
future multi-asset Workspace preview
shared Checkout JS
Crypto plugin
live WordPress/WooCommerce source
```

## 8. Acceptance criteria

```text
- one customer click remains the only final Checkout commitment
- S5 initially shows Preparing Invoice
- the page automatically reaches Waiting for payment after invoice availability
- amount/address/actions are unavailable before invoice readiness
- bootstrap failure has a clear Retry action
- no new page or step is introduced
- desktop, 390px and 360px compositions remain usable
- current accepted S5 hierarchy is preserved after readiness
```

## 9. Sequence after acceptance

```text
S5 Preparing Invoice correction
→ user review and acceptance
→ S6 supported verification-failure and recovery states
```

## 10. Current status

```text
Future multi-asset Workspace preview: accepted and closed
S5 fixed-USDT/TRON structure: accepted
S5 Preparing Invoice correction: authorized next bounded task
S6: not started
Checkout: Not done
```
