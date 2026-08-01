# Step 4F · Checkout Static Flow Completion Plan

Last updated: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative current status

```text
Cart: Completed 1:1
Checkout: Not done
S1 Step 01 Contact / Address: implemented
S2 Step 02 Shipping: implemented
S3 main Step-03 Payment surface: accepted and closed
Step-03 reusable payment host: accepted and closed as a static-reference gate
S4A plugin-agnostic asset/network selector: accepted and closed as a future reference
S4B plugin capability alignment and corrected integration contract: completed
S5 fixed-USDT/TRON Invoice / Waiting structure: accepted
Future multi-asset integrated Crypto Workspace preview: accepted and isolated
S5 Preparing Invoice internal-state correction: implemented, awaiting user acceptance
S6 verification/recovery states: not started
S7 Step 04 result: not started
Live Checkout source work: paused
```

This plan supersedes earlier sections that described:

```text
- a fixed USDT/TRON intermediate confirmation page
- S4B contract review as the current gate
- S5 as not started
- immediate plugin installation or Plugin Step 2
```

Those paths are no longer current.

## 2. Terminology lock

`V2` means Project 2 and this repository:

```text
Th23144/spatial-flow-v2-preview-lab
```

It does not mean a separate `checkout-v2` page family.

Authoritative Checkout static files remain under:

```text
preview/
```

## 3. Locked business progression

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Rules:

```text
Steps 01–03 are Checkout.
Step 04 is a WooCommerce-owned post-payment result.
Step 04 is not Review and never asks the customer to pay or confirm again.
Crypto selection, invoice, waiting, verification and recovery remain Step-03 internal views/states.
```

## 4. Authoritative current static artifacts

### Main Checkout sequence

```text
preview/spatial-flow-checkout-v1.html
  Step 01 Contact / Address

preview/spatial-flow-checkout-shipping-v1.html
  Step 02 Shipping

preview/spatial-flow-checkout-payment-v1.html
  Step 03 reusable payment host

preview/spatial-flow-thank-you-v1.html
  existing Step-04 reference that still requires S7 review/rework
```

### Current fixed Crypto route

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
  accepted fixed-USDT/TRON Invoice / Waiting Workspace with implemented Preparing state
```

### Accepted future references

```text
preview/spatial-flow-checkout-crypto-select-v1.html
  accepted plugin-agnostic asset/network interaction reference

preview/spatial-flow-checkout-crypto-workspace-future-v1.html
  accepted isolated future multi-asset integrated Workspace preview
```

The future examples are not linked from current Checkout.

## 5. Current linked static flow

```text
Cart
→ Step 01 Contact / Address
→ Step 02 Shipping
→ Step 03 Payment host
→ one final Cryptocurrency handoff action
→ S5 Preparing Invoice
→ S5 Waiting for payment
→ transaction-hash verification boundary
→ future server-authoritative Step 04 result
```

Current back navigation:

```text
Step 02 → Step 01
Step 03 → Step 02
S5 → Step 03 payment methods where operationally safe
```

The removed and prohibited route is:

```text
Step 03
→ fixed USDT/TRON confirmation page
→ second generic Continue/Create Invoice action
→ payment workspace
```

## 6. Accepted Step 01 / 02 / 03 architecture

### Step 01

```text
Contact
Delivery address
Optional order note
Continue to Shipping
Order Summary
```

### Step 02

```text
completed Address + Contact context
Shipping selection
Back to Address
Continue to Payment
Order Summary with selected shipping total
```

### Step 03

```text
completed Address + Contact + Shipping context
reusable payment-method host
selected-method content region
one authoritative final action
Back to Shipping
right sticky Order Summary
```

Desktop uses two columns. Mobile preserves the accepted context-card information hierarchy.

## 7. Reusable Step-03 payment-host contract

WooCommerce remains the source of available and eligible gateways.

The stable host supports:

```text
Payment Method List
Selected Method Panel
one Final Action Zone
right Order Summary
```

Gateway-family presentations:

```text
Card / wallet:
compact gateway-owned fields or eligible express-wallet surface

Cryptocurrency:
concise entry followed by a dedicated Step-03 Workspace

Redirect gateway:
concise handoff followed by the real hosted/redirect flow

Offline gateway:
instructions and the correct unpaid/order state
```

A future gateway may need a small presentation adapter, but must not require rebuilding Step 01, Step 02, progress, Order Summary or the entire Step-03 page.

No inactive payment method is displayed for visual fullness.

## 8. S4A future asset/network reference

Accepted artifact:

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

Accepted interaction concepts:

```text
asset search and selection
asset-dependent network display
network reset when asset changes
continue only after a valid pair exists
session continuity
```

Its USDT, USDC, BTC, TRON, Ethereum, Solana and Bitcoin entries are examples only.

Production availability must come from a server-owned payment-pair registry.

## 9. S4B current plugin capability truth

Reviewed plugin:

```text
Spatial Flow Crypto Pay Trial 0.2.5
Gateway ID: spatial_flow_crypto
Asset: USDT
Network: TRON / TRC20
Environment: administrator-controlled mainnet / nile / shasta
```

Current real behavior:

```text
WooCommerce creates the order before the Crypto invoice
order becomes on-hold
plugin creates or restores the invoice
customer transfers externally
customer submits a TRON transaction hash
WordPress server verifies through TronGrid
server calls payment_complete()
WooCommerce owns the canonical result
```

Current plugin does not provide:

```text
dynamic asset/network API
customer-selectable multi-network routing
QR contract
wallet connection
automatic chain monitoring
Webhook / Worker / Cron confirmation
real quote/rate lock
operational countdown/expiry
confirmation-count stream
```

## 10. Current fixed-USDT/TRON routing consequence

Because only one payment pair exists:

```text
USDT + TRON / TRC20
```

current Checkout automatically bypasses asset/network selection.

Correct sequence:

```text
Step 03 final action
→ WooCommerce order creation
→ on-hold
→ order-pay-based Step-03 Crypto Workspace
→ automatic Create or Reuse Invoice
→ exact amount + receiver address
→ external transfer
→ required transaction-hash submission
→ server verification
→ Step 04
```

No customer-facing second confirmation action is permitted.

## 11. S5 state contract

### Accepted Waiting for payment state

```text
order number
Invoice ID
USDT amount
TRON / TRC20
environment disclosure
receiver address
copy controls
TRON-only warning
wallet/exchange instructions
required transaction-hash form
manual Refresh
payment recovery link
pending Order Summary
```

### Implemented Preparing Invoice correction

Before invoice readiness, the same S5 page now shows:

```text
Preparing your Crypto payment
Creating or restoring your secure invoice.
```

While preparing:

```text
- amount and receiver address are not shown as authoritative
- copy controls are unavailable
- transfer instructions are unavailable
- Transaction Hash verification is unavailable
- no customer action generates a second invoice request
```

After simulated or real server availability:

```text
Preparing Invoice
→ Waiting for payment
```

This implementation is awaiting user visual and interaction acceptance.

### Invoice-bootstrap failure

The same implementation defines:

```text
We could not prepare your Crypto payment.
[Retry]
[Return to payment methods]
```

This failure occurs before the customer can pay and is not an S6 transaction-verification failure.

## 12. S6 supported verification and recovery states

S6 starts only after the Preparing Invoice correction is accepted.

S6 may represent only states supported by the approved first-phase contract:

```text
verification_failed
manual_review where the approved plugin implementation supplies it
cancelled
paid_confirmed transition boundary
unfinished-payment recovery through WooCommerce order-pay
```

Customer-safe deterministic verification failures may include:

```text
transaction not found
receiver mismatch
wrong token
amount too low
transaction predates invoice
duplicate transaction
temporary chain/API failure
```

S6 must not invent:

```text
automatic payment detection
live confirmation counts
operational expired/replacement invoice behavior
automatic underpayment accumulation
overpayment workflow
late-payment reconciliation
continuous polling
```

## 13. S7 Step 04 result

After server-authoritative success:

```text
payment_complete()
→ canonical WooCommerce Order Received / Thank You
```

S7 must review/rework:

```text
preview/spatial-flow-thank-you-v1.html
```

Step 04 requirements:

```text
confirmed order/result language
receipt/order details
correct payment state
no Pay/Confirm action
no browser-authoritative success
accurate pending language where WooCommerce has not confirmed payment
```

## 14. S8 and S9 static closure gates

### S8 — full static link and session-state audit

```text
relative links
back navigation
session continuity
shipping totals
payment-host selection
S5 recovery behavior
no orphan or stale route
no link into isolated future examples
```

### S9 — responsive static acceptance

Required review:

```text
1366 × 768 and desktop full-page composition
390 × 844
360 × 800
```

Required qualities:

```text
no horizontal overflow
clear active-step hierarchy
usable amount/address copy controls
usable Transaction Hash flow
no obscured primary action
truthful status and recovery messages
```

## 15. Live implementation sequence after static acceptance

```text
live Checkout ownership audit
→ plugin workspace integration
→ WooCommerce gateway dynamic rendering
→ Sandbox and unfinished-payment recovery tests
→ server-authoritative success/result tests
→ production visual replacement
→ backend-editability verification
→ final Checkout 1:1 closure
```

Plugin package V0.2.6.1 remains a future integration baseline. Local installation and Plugin Step 2 are deferred until separately authorized.

## 16. Current corrected build order

```text
S1 Step 01: implemented
→ S2 Step 02: implemented
→ S3 Payment: accepted and closed
→ Step-03 payment-host extensibility: accepted and closed
→ S4A selector reference: accepted and closed
→ S4B capability/contract: completed
→ S5 fixed Workspace structure: accepted
→ future multi-asset Workspace preview: accepted and isolated
→ S5 Preparing Invoice + bootstrap failure: implemented, awaiting acceptance
→ S6 supported verification/recovery states
→ S7 Step 04 result
→ S8 full link/session audit
→ S9 responsive static acceptance
→ live ownership audit
→ functional reconstruction
→ Sandbox/recovery testing
→ final 1:1 closure
```

One bounded group is reviewed at a time.

## 17. Hard boundaries before live implementation

```text
- do not modify live Checkout PHP/JS, CartFlows or production gateway behavior
- do not begin broad live Checkout CSS replacement
- do not create a fake headless payment API
- do not hardcode future assets/networks as current capabilities
- do not treat sessionStorage or browser state as payment authority
- do not add a fifth business step
- do not add a redundant fixed-route confirmation page
- do not begin S6 before Preparing Invoice passes
- do not mark Checkout Completed 1:1
```

## 18. Current exact next action

```text
Obtain user visual and interaction acceptance for the implemented S5 Preparing Invoice and invoice-bootstrap failure/retry states.

Do not begin S6 before that acceptance.
```
