# Project 2 · S5 Crypto Invoice / Waiting Workspace Static Implementation

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Status

```text
S3 Step-03 Payment host: implemented
S4A generic asset/network reference: accepted and closed
S4B capability alignment and corrected integration contract: completed
S5 Invoice / Waiting Workspace static page: implemented
S5 user visual and interaction review: required
S6 verification failure / recovery state family: not started
Live WooCommerce/plugin integration: not started
Checkout: Not done
```

## 2. New S5 artifact

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
```

Supporting assets:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

The page remains visually and functionally:

```text
Step 03 — Payment
```

It does not introduce Step 04 or Step 05.

## 3. Static linked flow

The current static route is now:

```text
preview/spatial-flow-checkout-payment-v1.html
→ Continue to secure Crypto payment
→ preview/spatial-flow-checkout-crypto-invoice-v1.html
```

The Step-03 payment host descriptor now supplies:

```text
data-handoff-route="spatial-flow-checkout-crypto-invoice-v1.html"
```

The generic payment-host mechanism remains intact for future eligible gateways.

## 4. S5 customer-facing structure

The workspace now defines the intended first-phase payment screen:

```text
Waiting for payment status
Order number
Invoice ID
Asset: USDT
Network: TRON / TRC20
Server-supplied environment disclosure
Exact amount presentation
Receiver-address presentation
Copy amount
Copy address
TRON-only warning
Wallet / exchange transfer instructions
Required transaction-hash disclosure
Transaction-hash input
Verify payment action
Manual Refresh status
Copy payment recovery link
Back to payment methods
Right-side order and payment summary
```

It does not ask for Address or Shipping again and does not create a duplicate order.

## 5. Truthful first-phase behavior

The static page communicates the approved technical flow:

```text
WooCommerce order exists
→ order remains on-hold
→ invoice is created or restored
→ customer sends USDT through TRON / TRC20
→ customer submits the TRON transaction hash
→ server verifies through TronGrid
→ payment_complete()
→ canonical WooCommerce Step 04
```

The browser is never represented as payment authority.

## 6. Static prototype safeguards

The workspace uses deliberately non-payable prototype data:

```text
Order: #SF-1048
Invoice: SF-CRYPTO-1048-01
Address: T-PROTOTYPE-NOT-A-REAL-ADDRESS
```

The page repeatedly states that:

```text
- values are static prototype data
- the address must not receive funds
- live values come from WooCommerce/plugin/server
- no real order or invoice is created
- no TronGrid request occurs
- no payment success is produced
```

## 7. Implemented static interactions

### Copy controls

```text
Copy amount
Copy address
Copy payment recovery link
```

Clipboard fallback is included for environments without the modern Clipboard API.

### Transfer completion disclosure

```text
I have completed the transfer
```

This expands the required transaction-hash form. It does not imply automatic payment detection.

### Hash validation

The static form validates:

```text
exactly 64 hexadecimal characters
```

A valid-looking hash is stored only as prototype session state. Submission stops at a truthful boundary notice:

```text
No TronGrid request or payment confirmation was performed.
```

### Manual status refresh

`Refresh status` produces a static notice only. It does not run polling or query the chain.

### State continuity

The prototype preserves:

```text
shipping-adjusted order total
shipping display price
transaction-hash draft
expanded verification form after revisit
```

through the existing sessionStorage reference state.

## 8. Explicitly deferred

This S5 revision does not implement or represent as current capability:

```text
QR code
WalletConnect
TronLink connection
MetaMask
automatic wallet launch
operational countdown
invoice expiry
replacement invoice creation
automatic chain monitoring
continuous polling
confirmation-count progress
multi-asset selection
customer-selectable network
real transaction verification
payment success
Step 04 navigation
```

## 9. Responsive design scope

Dedicated S5 styles include:

```text
desktop two-column payment workspace
sticky order/payment summary
responsive invoice metadata grid
mobile stacked amount/address controls
mobile full-width copy and verification actions
390px-oriented composition
360px-oriented composition
long address/hash overflow protection
```

Formal user review is still required at:

```text
Desktop / 1366 × 768
390 × 844
360 × 800
```

## 10. Files and commits

Created:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
Commit: a8da2c8123115559ba16d168c674ba02e2833be5

preview/spatial-flow-checkout-crypto-invoice-v1.css
Commit: 531d6220a720746285c30a416e1dad956e0475d3

preview/spatial-flow-checkout-crypto-invoice-v1.js
Commit: bcd744998af19d4939113ecaba0fbc3056fc8262
```

Updated:

```text
preview/spatial-flow-checkout-payment-v1.html
Commit: 4757a96a250e27810341132892e07ef439cfd80e
```

## 11. Range audit

Compared:

```text
Base: d4106bf8f92f2df521d0ef9d453d79dd847375cc
Head: 4757a96a250e27810341132892e07ef439cfd80e
```

Changed only:

```text
S5 HTML: +307
S5 CSS: +551
S5 JS: +207
Step-03 Payment HTML: +2 / -2
```

Unchanged:

```text
Step 01
Step 02
accepted S4A HTML/CSS/JS
payment-host JS/CSS architecture
shared Checkout flow JS
Crypto plugin
live WordPress/WooCommerce source
Project 2 version 2.7.8
```

## 12. Review gate

Review:

```text
- overall payment-screen hierarchy
- whether amount and address are the dominant actions
- whether transfer instructions are understandable
- whether transaction-hash submission is clear and not hidden
- whether the absence of QR/wallet connection is acceptable for the current plugin capability
- desktop and mobile spacing
- long address/hash handling
- right-side pending-payment order summary
```

## 13. Current stop point

```text
Open and review preview/spatial-flow-checkout-crypto-invoice-v1.html.
Do not begin S6 until S5 is accepted or corrected.
Do not install or modify the live payment plugin in this review group.
Checkout remains Not done.
```
