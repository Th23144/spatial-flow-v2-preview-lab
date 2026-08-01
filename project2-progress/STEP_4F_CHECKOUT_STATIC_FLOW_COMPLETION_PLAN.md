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
Step-03 reusable payment host: accepted and closed
S4A plugin-agnostic asset/network selector: accepted and closed as a future reference
S4B plugin capability alignment and corrected integration contract: completed
S5 fixed-USDT/TRON Invoice / Waiting structure: accepted
S5 Preparing Invoice and bootstrap failure: accepted and closed
Future multi-asset integrated Crypto Workspace preview: accepted and isolated
S6 supported verification/recovery states: next phase, not started
S7 Step 04 result: not started
Live Checkout source work: paused
```

This plan supersedes earlier paths that described:

```text
- a fixed USDT/TRON intermediate confirmation page
- S4B contract review as the current gate
- S5 as not started
- immediate plugin installation or Plugin Step 2
```

## 2. Locked business progression

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

## 3. Authoritative static artifacts

```text
preview/spatial-flow-checkout-v1.html
  Step 01 Contact / Address

preview/spatial-flow-checkout-shipping-v1.html
  Step 02 Shipping

preview/spatial-flow-checkout-payment-v1.html
  Step 03 reusable payment host

preview/spatial-flow-checkout-crypto-invoice-v1.html
  accepted fixed-USDT/TRON S5 Workspace

preview/spatial-flow-checkout-crypto-select-v1.html
  accepted future asset/network interaction reference

preview/spatial-flow-checkout-crypto-workspace-future-v1.html
  accepted isolated future multi-asset Workspace reference

preview/spatial-flow-thank-you-v1.html
  existing Step-04 reference requiring S7 review/rework
```

## 4. Current linked static flow

```text
Cart
→ Step 01 Contact / Address
→ Step 02 Shipping
→ Step 03 Payment host
→ one final Cryptocurrency action
→ S5 Preparing Invoice
→ S5 Waiting for payment
→ transaction-hash verification boundary
→ future server-authoritative Step 04 result
```

Removed and prohibited:

```text
Step 03
→ fixed USDT/TRON confirmation page
→ second Continue/Create Invoice action
→ payment workspace
```

## 5. Reusable Step-03 payment-host contract

WooCommerce remains the source of available and eligible gateways.

Stable host:

```text
Payment Method List
Selected Method Panel
one Final Action Zone
right Order Summary
```

Gateway-family presentations:

```text
Card / wallet: compact gateway-owned fields or eligible wallet surface
Cryptocurrency: concise entry followed by dedicated Step-03 Workspace
Redirect gateway: concise handoff followed by real hosted/redirect flow
Offline gateway: instructions and correct unpaid/order state
```

A future gateway may need a bounded adapter, but must not require rebuilding Step 01, Step 02, progress, Order Summary or the complete Step-03 page.

## 6. Current Crypto capability truth

```text
Plugin: Spatial Flow Crypto Pay Trial 0.2.5
Gateway ID: spatial_flow_crypto
Asset: USDT
Network: TRON / TRC20
Environment: administrator-controlled mainnet / nile / shasta
Customer asset/network selection: unavailable
```

Current real behavior:

```text
WooCommerce creates order
→ order becomes on-hold
→ plugin creates or restores invoice
→ customer transfers externally
→ customer submits TRON transaction hash
→ server verifies through TronGrid
→ server calls payment_complete()
→ WooCommerce owns canonical result
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

## 7. Accepted S5 state contract

Accepted internal sequence:

```text
Preparing your Crypto payment
→ Creating or restoring your secure invoice
→ Waiting for payment
```

Before readiness:

```text
amount/address hidden
copy controls unavailable
transfer instructions unavailable
Transaction Hash controls unavailable
right Order Summary reports Preparing payment / Preparing invoice
```

Accepted bootstrap failure:

```text
Invoice unavailable
→ Retry preparing invoice
→ Preparing
→ Waiting for payment
```

Alternative:

```text
Return to payment methods
→ Step 03
```

No duplicate order, second generic confirmation or Generate Invoice action is introduced.

Acceptance record:

```text
project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_ACCEPTANCE.md
```

## 8. S6 supported verification/recovery states

S6 is now authorized as the next bounded phase but has not started.

Allowed state family:

```text
verification_failed
manual_review only where supplied by the approved implementation contract
cancelled
paid_confirmed transition boundary
unfinished-payment recovery through WooCommerce order-pay
```

Customer-safe deterministic failures may include:

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

## 9. S7 Step 04 result

After server-authoritative success:

```text
payment_complete()
→ canonical WooCommerce Order Received / Thank You
```

S7 must review/rework:

```text
preview/spatial-flow-thank-you-v1.html
```

Requirements:

```text
confirmed order/result language
receipt/order details
correct payment state
no Pay/Confirm action
no browser-authoritative success
accurate pending language where WooCommerce has not confirmed payment
```

## 10. S8 and S9 static closure gates

### S8 — link and session audit

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

```text
1366 × 768 and desktop full composition
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

## 11. Live implementation sequence after static acceptance

```text
live Checkout ownership audit
→ plugin workspace integration
→ WooCommerce gateway dynamic rendering
→ Sandbox and unfinished-payment recovery tests
→ server-authoritative result tests
→ production visual replacement
→ backend-editability verification
→ final Checkout 1:1 closure
```

Plugin package V0.2.6.1 remains a future integration baseline. Local installation and Plugin Step 2 are deferred until separately authorized.

## 12. Current corrected build order

```text
S1 Step 01: implemented
→ S2 Step 02: implemented
→ S3 Payment: accepted and closed
→ Step-03 payment host: accepted and closed
→ S4A selector reference: accepted and closed
→ S4B capability/contract: completed
→ S5 fixed Workspace structure: accepted
→ S5 Preparing Invoice/bootstrap failure: accepted and closed
→ future multi-asset Workspace: accepted and isolated
→ S6 supported verification/recovery states: next phase
→ S7 Step 04 result
→ S8 link/session audit
→ S9 responsive static acceptance
→ live ownership audit
→ functional reconstruction
→ Sandbox/recovery testing
→ final 1:1 closure
```

One bounded group is reviewed at a time.

## 13. Hard boundaries

```text
- do not modify live Checkout PHP/JS, CartFlows or production gateway behavior during static work
- do not create a fake headless payment API
- do not hardcode future assets/networks as current capabilities
- do not treat sessionStorage or browser state as payment authority
- do not add a fifth business step
- do not add a redundant fixed-route confirmation page
- do not mark Checkout Completed 1:1
```

## 14. Current exact next action

```text
Define and implement one bounded S6 static state group using only approved first-phase verification and recovery states.

Do not begin S7 in the same group.
```
