# Project 2 · S5 Preparing Invoice Internal-State Implementation

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Status

```text
Checkout sequence re-audit: completed
S5 Preparing Invoice internal-state correction: implemented
User visual/interaction review: required
S6 verification/recovery state family: not started
Live Checkout/plugin integration: not started
Checkout: Not done
```

## 2. Why this correction exists

The accepted fixed-USDT/TRON S5 page previously opened directly in:

```text
Waiting for payment
```

That skipped the truthful period after the WooCommerce order exists but before the Crypto plugin has created or restored the invoice.

The corrected S5 internal sequence is now:

```text
Preparing your Crypto payment
→ Creating or restoring your secure invoice
→ Waiting for payment
```

No extra Checkout page, business step, confirmation action or Generate Invoice button was added.

## 3. Default static behavior

Current route remains:

```text
preview/spatial-flow-checkout-payment-v1.html
→ Continue to secure Crypto payment
→ preview/spatial-flow-checkout-crypto-invoice-v1.html
```

When S5 opens:

```text
1. Preparing Invoice is displayed.
2. Payment amount, receiver address, copy controls, transfer instructions and Transaction Hash controls remain hidden.
3. After an approximately 1.5-second static demonstration delay, the existing accepted Waiting for payment content is revealed automatically.
```

For users who prefer reduced motion, the static demonstration uses a shorter delay and no spinning animation.

Production timing remains server-controlled.

## 4. Preparing state

Customer-facing content:

```text
Preparing your Crypto payment.
Creating or restoring your secure invoice.
```

During this state:

```text
- `aria-busy=true`
- no authoritative Crypto amount is visible
- no receiver address is visible
- copy actions are unavailable
- transfer instructions are unavailable
- Transaction Hash input is unavailable
- the right summary says Preparing payment / Preparing invoice
```

## 5. Ready state

After invoice availability, the same page automatically restores the previously accepted S5 content:

```text
Waiting for payment
Order on hold
Order / Invoice identifiers
USDT amount
TRON / TRC20
receiver address
copy amount / address
transfer instructions
required Transaction Hash form
manual Refresh
payment recovery link
right-side Payment pending summary
```

The existing S5 visual hierarchy and interaction contract remain intact.

## 6. Invoice-bootstrap failure state

A bounded prototype failure inspection is available through:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html?prototype_invoice=fail
```

Static behavior:

```text
Preparing Invoice
→ We could not prepare your Crypto payment.
```

Available safe actions:

```text
Retry preparing invoice
Return to payment methods
```

Retry performs:

```text
Failed
→ Preparing Invoice
→ Waiting for payment
```

It does not create another order or require another generic Checkout confirmation.

The query parameter is a static review mechanism only. It is not a production error transport contract.

## 7. Server-authority boundary

The static page still does not perform:

```text
WooCommerce order creation
real invoice creation/reuse
receiver-address retrieval
TronGrid request
payment verification
payment_complete()
Step 04 navigation
```

Future live behavior must preserve:

```text
one active invoice per unpaid order
idempotent Create or Reuse Invoice
server-controlled transition timing
server-owned amount and receiver address
order-pay recovery
browser never becoming payment authority
```

## 8. Files changed

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

No other preview, plugin or live file changed.

## 9. Commits

```text
HTML Preparing/failed/ready structure:
4a36c69fe3a9ad265f97ceca8981146f7c7e5d88

JS invoice-bootstrap state machine:
e051588601c0dac12c57cfe34d6b22bf1636f1cc

CSS Preparing/failure responsive presentation:
ca8774796e62e4d6b1aff2256345928394799fe2
```

## 10. Code-range audit

Compared:

```text
Base: b106c50abdd10c51721e6e9d5b95bb769deb9bf3
Head: ca8774796e62e4d6b1aff2256345928394799fe2
```

Changed exactly:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

Unchanged:

```text
Step 01
Step 02
main Step-03 payment host
payment-host CSS/JS
shared Checkout JS
S4A selector
accepted future multi-asset Workspace preview
Step 04 reference
Crypto plugin
live WordPress/WooCommerce source
Project 2 version 2.7.8
```

## 11. Required review

Review default flow:

```text
Step 03 Payment
→ S5 Preparing Invoice
→ automatic Waiting for payment
```

Review failure flow:

```text
S5 URL + ?prototype_invoice=fail
→ Preparing Invoice
→ bootstrap failure
→ Retry
→ Preparing Invoice
→ Waiting for payment
```

Required sizes:

```text
Desktop / 1366 × 768
390 × 844
360 × 800
```

Confirm:

```text
- Preparing state is visible but not unnecessarily long
- amount/address/actions do not appear early
- right summary communicates the same state
- failure copy and Retry are clear
- mobile has no overflow or obscured button
- Waiting state remains visually unchanged after readiness
```

## 12. Current stop point

```text
S5 Preparing Invoice correction: implemented, awaiting user acceptance
S6: blocked until acceptance
Checkout: Not done
```
