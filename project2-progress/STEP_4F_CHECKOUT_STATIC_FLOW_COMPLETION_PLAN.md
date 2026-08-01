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
S5 fixed-USDT/TRON Waiting / Preparing / bootstrap failure: accepted and closed
Future multi-asset Crypto Workspace: accepted and isolated
S6 supported verification/recovery states: implemented, awaiting user acceptance
S7 Step 04 result: not started
Live Checkout source work: paused
```

This plan supersedes earlier paths that described a fixed USDT/TRON intermediate confirmation page, S4B contract review as the current gate, S5 as not started, or immediate plugin installation.

## 2. Locked business progression

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Steps 01–03 are Checkout. Step 04 is a WooCommerce-owned result and never asks the customer to pay or confirm again.

Crypto selection, invoice, waiting, verification and recovery remain Step-03 internal views/states.

## 3. Authoritative static artifacts

```text
preview/spatial-flow-checkout-v1.html
  Step 01 Contact / Address

preview/spatial-flow-checkout-shipping-v1.html
  Step 02 Shipping

preview/spatial-flow-checkout-payment-v1.html
  Step 03 reusable payment host

preview/spatial-flow-checkout-crypto-invoice-v1.html
  current fixed-USDT/TRON S5/S6 Workspace

preview/spatial-flow-checkout-crypto-states-v1.css
preview/spatial-flow-checkout-crypto-states-v1.js
  isolated S6 state layer

preview/spatial-flow-checkout-crypto-select-v1.html
  accepted future asset/network interaction reference

preview/spatial-flow-checkout-crypto-workspace-future-v1.html
  accepted isolated future multi-asset Workspace

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
→ S6 verification/recovery state boundary
→ future server-authoritative Step 04 result
```

Removed and prohibited:

```text
Step 03
→ fixed USDT/TRON confirmation page
→ second Continue/Create Invoice action
→ payment workspace
```

## 5. Reusable Step-03 payment host

WooCommerce remains the source of available and eligible gateways.

Stable host:

```text
Payment Method List
Selected Method Panel
one Final Action Zone
right Order Summary
```

Gateway families:

```text
Card / wallet: compact gateway-owned fields or eligible wallet surface
Cryptocurrency: concise entry followed by dedicated Step-03 Workspace
Redirect gateway: concise handoff followed by real hosted/redirect flow
Offline gateway: instructions and correct unpaid/order state
```

Future gateways may need bounded adapters but never a complete Checkout rebuild.

## 6. Current Crypto capability truth

```text
Gateway ID: spatial_flow_crypto
Asset: USDT
Network: TRON / TRC20
Environment: administrator-controlled mainnet / nile / shasta
Customer asset/network selection: unavailable
```

Real lifecycle:

```text
WooCommerce creates order
→ on-hold
→ plugin creates/restores invoice
→ customer transfers externally
→ customer submits TRON transaction hash
→ server verifies through TronGrid
→ server calls payment_complete()
→ WooCommerce owns canonical result
```

Unsupported current claims:

```text
QR
wallet connection
automatic chain monitoring
Worker / Cron / Webhook confirmation
operational countdown/expiry
confirmation-count stream
production multi-asset routing
```

## 7. Accepted S5 state contract

```text
Preparing your Crypto payment
→ Creating or restoring your secure invoice
→ Waiting for payment
```

Before readiness, amount/address/copy/transfer/hash controls remain unavailable.

Accepted bootstrap failure:

```text
Invoice unavailable
→ Retry preparing invoice
→ Preparing
→ Waiting for payment
```

No duplicate order, second generic confirmation or Generate Invoice action is introduced.

## 8. Implemented S6 state contract

S6 is implemented as a query-controlled static state layer that leaves default S5 unchanged.

Implemented states:

```text
verification_failed
retryable temporary verification error
manual_review
cancelled
paid_confirmed transition boundary
unfinished-payment recovery
```

Deterministic failure reasons:

```text
receiver mismatch
transaction predating the invoice
wrong token / no qualifying USDT transfer
amount too low
duplicate transaction
```

Required semantics:

```text
verification_failed:
order remains on-hold; new valid hash may be submitted

temporary error:
not a rejection; current invoice remains active; bounded retry

manual review:
do not send another payment; preserve recovery/Refresh access

cancelled:
no payment action remains available

paid confirmed:
server-authoritative only; stop before S7 result

recovered:
restore same order and same active invoice
```

S6 does not implement automatic detection, continuous polling, confirmations, operational expiry, replacement invoices, partial/over/late-payment workflows or Step 04.

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

S7 remains blocked until S6 is accepted.

## 10. S8 and S9 static closure gates

### S8 — link and session audit

```text
relative links
back navigation
session continuity
shipping totals
payment-host selection
S5/S6 recovery behavior
no orphan or stale route
no link into isolated future examples
```

### S9 — responsive static acceptance

```text
1366 × 768 and desktop full composition
390 × 844
360 × 800
```

## 11. Live implementation after static acceptance

```text
live Checkout ownership audit
→ plugin workspace integration
→ WooCommerce dynamic gateway rendering
→ Sandbox and unfinished-payment recovery tests
→ server-authoritative result tests
→ production visual replacement
→ backend-editability verification
→ final Checkout 1:1 closure
```

Plugin V0.2.6.1 remains a future integration baseline. Local installation and Plugin Step 2 remain deferred.

## 12. Current build order

```text
S1 Step 01: implemented
→ S2 Step 02: implemented
→ S3 Payment: accepted and closed
→ Step-03 payment host: accepted and closed
→ S4A selector reference: accepted and closed
→ S4B capability/contract: completed
→ S5 Waiting/Preparing/bootstrap failure: accepted and closed
→ future multi-asset Workspace: accepted and isolated
→ S6 verification/recovery states: implemented, awaiting acceptance
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
- no live Checkout, CartFlows or production gateway modification during static work
- no fake headless payment API
- no future assets/networks as current capabilities
- no browser-authoritative payment success
- no fifth business step
- no redundant fixed-route confirmation page
- no automatic monitoring/continuous polling in S6
- no Step 04 implementation before S6 acceptance
- Checkout remains Not done
```

## 14. Current exact action

```text
Review and accept or correct the implemented S6 state family.

Do not begin S7 in the same group.
```
