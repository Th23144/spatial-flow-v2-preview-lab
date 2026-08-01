# Project 2 · S6 Supported Verification and Recovery State Implementation

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Status

```text
S5 Waiting / Preparing / bootstrap failure: accepted and closed
S6 supported verification and recovery state family: implemented
User visual/content/interaction review: required
S7 Step 04 result: not started
Live Checkout/plugin integration: not started
Checkout: Not done
```

## 2. Implementation model

S6 does not create separate Checkout pages.

It adds an isolated presentation and interaction layer to the accepted S5 artifact:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
```

New resources:

```text
preview/spatial-flow-checkout-crypto-states-v1.css
preview/spatial-flow-checkout-crypto-states-v1.js
```

Default S5 behavior remains unchanged because the S6 script exits immediately unless an explicit static review parameter is present.

## 3. Implemented review states

### Verification failed

```text
?prototype_payment=verification_failed&reason=receiver_mismatch
?prototype_payment=verification_failed&reason=old_transaction
?prototype_payment=verification_failed&reason=wrong_token
?prototype_payment=verification_failed&reason=no_transfer
?prototype_payment=verification_failed&reason=amount_too_low
?prototype_payment=verification_failed&reason=duplicate_tx
```

Behavior:

```text
- order remains on hold
- invoice and payment instructions remain visible
- customer-safe failure language is shown
- customer may open a clean Transaction Hash input
- no new order or invoice is created
```

### Temporary verification error

```text
?prototype_payment=temporary_error
```

Behavior:

```text
- payment is explicitly not presented as rejected
- current invoice remains active
- customer may retry verification
- no continuous polling or automatic monitoring is implied
```

### Manual review

```text
?prototype_payment=manual_review
```

Behavior:

```text
- customer is told not to send another payment
- invoice reference remains visible
- transfer and Transaction Hash actions are suppressed
- Refresh and recovery tools remain available
- no internal diagnostic is exposed
```

### Cancelled

```text
?prototype_payment=cancelled
```

Behavior:

```text
- amount/address/transfer/hash/recovery payment actions are removed
- customer is told the order cannot accept payment
- support and storefront navigation are provided
- no Workspace payment operation is implied
```

### Paid confirmed boundary

```text
?prototype_payment=paid_confirmed
```

Behavior:

```text
- all further payment actions are removed
- state is described as server-confirmed only
- static reference stops before Step 04
- S7 remains responsible for the canonical result page
```

### Unfinished-payment recovery

```text
?prototype_payment=recovered
```

Behavior:

```text
- same order and Invoice ID are restored
- existing invoice/payment controls remain available
- no duplicate order or replacement invoice is created
- customer can continue with the restored invoice
```

## 4. Customer-safe deterministic failure language

Implemented mappings:

```text
receiver_mismatch:
Receiving address did not match.

old_transaction:
Transaction predates this invoice.

wrong_token:
Required USDT transfer not found.

no_transfer:
Qualifying USDT transfer not found.

amount_too_low:
Transferred amount is too low.

duplicate_tx:
Transaction already used.
```

Internal codes are represented only by the review URL and are not visually emphasized in the customer interface.

## 5. Preserved server-authority boundary

The S6 static layer does not perform:

```text
TronGrid request
transaction verification
WooCommerce order mutation
invoice mutation
payment_complete()
Workspace authorization
Step-04 redirect
```

Production state must come from the approved server response model.

## 6. Explicitly not implemented

```text
automatic payment detection
continuous polling
confirmation-count progress
payment_detected / confirming
operational expiry
replacement Invoice
automatic partial/over/late-payment workflow
QR
wallet connection
multi-asset production routing
Step-04 result page
```

## 7. Files and commits

```text
S6 gate:
271c3ac47f2a57e4b6a1eda9e974b0ffb4b0b7fe

S6 CSS:
29ff0e7691a293814bcc1668488de8e7c7fd98b8

S6 JS:
009b97dcc96d843b05b9bbf3c04eb219ace6c239

S5 HTML resource loading:
46d689ea5ec21dbf917f47732da87f62da4e5954
```

## 8. Range audit

Compared:

```text
Base: d67fe95003da90ebe9b568646b32c310ec98853a
Head: 46d689ea5ec21dbf917f47732da87f62da4e5954
```

Changed exactly:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
  + two resource references and one script-load line adjustment

preview/spatial-flow-checkout-crypto-states-v1.css
  new isolated S6 state styles

preview/spatial-flow-checkout-crypto-states-v1.js
  new isolated S6 state logic

project2-progress/STEP_4F_S6_SUPPORTED_VERIFICATION_AND_RECOVERY_STATE_GATE.md
```

Unchanged:

```text
S5 base CSS
S5 base JS
Step 01
Step 02
main Step-03 payment host
S4A
future multi-asset Workspace
shared Checkout JS
Step-04 reference
Crypto plugin
live WordPress/WooCommerce
Project 2 version 2.7.8
```

## 9. Required review

Review default S5 first to confirm no regression:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
```

Then review at minimum:

```text
receiver mismatch
amount too low
temporary error
manual review
cancelled
paid confirmed
recovered invoice
```

Required sizes:

```text
Desktop / 1366 × 768
390 × 844
360 × 800
```

Confirm:

```text
- default Preparing → Waiting remains unchanged
- failure language is understandable and not overly technical
- Retry actions return to the Hash workflow without another order/invoice
- manual review clearly says not to pay again
- cancelled removes payment actions
- paid confirmed does not pretend S7 already exists
- recovered restores the same invoice composition
- mobile has no overflow or obscured action
```

## 10. Current stop point

```text
S6: implemented, awaiting user acceptance
S7: blocked and not started
Checkout: Not done
```
