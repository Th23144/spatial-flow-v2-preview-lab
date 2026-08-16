# Payment Window Standalone Handoff · Spatial Flow Crypto Pay Trial V0.3.0 FINAL ACCEPTED

Date: 2026-08-16
Source project: Project 2 / `Th23144/spatial-flow-v2-preview-lab`
Purpose: self-contained continuation package for the dedicated payment-development window

## How to use this handoff

The payment-development window does NOT need to broadly read or monitor the Project-2 repository before resuming payment work.

Treat this file as the current continuation baseline. Repository links/history are audit evidence only.

---

## 1. Current accepted plugin baseline

```text
Plugin: Spatial Flow Crypto Pay Trial
Version: 0.3.0
Gateway ID: spatial_flow_crypto
ZIP: spatial-flow-crypto-pay-trial-v0.3.0.zip
ZIP size: 61,253 bytes
ZIP SHA256: d7227f52ddd4f1949b1860348b56a956f47723f3d64d5c052f34a2c1ab58fdb9
Status: FINAL ACCEPTED after Project-2 BIG BATCH B runtime acceptance
```

V0.3.0 now supersedes V0.2.9 as the payment window's next working plugin baseline.

Do not restart from V0.2.9 or overwrite V0.3.0 with a branch that lacks the accepted customer Workspace integration.

---

## 2. Accepted V0.2.9 backend/security contract retained unchanged

V0.3.0 is a presentation/integration release over the already accepted V0.2.9 backend authority.

Retained accepted invariants:

```text
WooCommerce order-pay Workspace boundary
short-lived opaque Workspace Token
Order / actor / Gateway / feature-epoch authorization
same-origin mutation protection
REST Workspace read
Create / Reuse Invoice
server-authoritative fixed USDT/TRON Invoice data
order-scoped advisory lock
transaction-hash verification service
verification_failed / retryable / manual_review handling
rate limiting
duplicate transaction protection
payment_complete() at-most-once settlement boundary
success/note idempotency
Payment Status without timed polling
manager-only Sandbox backend
refresh/reopen/multi-tab recovery
legacy /crypto-pay/ compatibility
Feature Flag immediate rollback
```

Future payment work must preserve these invariants unless an explicit later task reopens one of them.

---

## 3. V0.3.0 customer Workspace now runtime accepted

Accepted order flow:

```text
Project-2 Checkout Step 03
-> customer selects real Woo Crypto gateway
-> exactly one native WooCommerce Place Order
-> exactly one WooCommerce order
-> official WooCommerce order-pay route
-> plugin-owned V0.3.0 customer Crypto Workspace
```

Accepted Workspace state flow:

```text
Preparing Invoice
-> automatic Create or Reuse Invoice
-> Waiting for Payment
-> manual Transaction Hash verification or manager Sandbox
-> server-confirmed paid state
-> canonical WooCommerce Order Result / Thank You route
```

Waiting presentation uses server-returned truth only:

```text
USDT
TRON / TRC20
server amount
server receiver address
copy amount/address
TRON-only warning
manual transaction-hash workflow
explicit Refresh Status
real WooCommerce order context / totals
```

No browser-authored payment truth is accepted.

---

## 4. BIG BATCH B runtime evidence

### B1 — Workspace / Waiting / recovery / responsive

Runtime order:

```text
#3618
```

Passed:

```text
V0.3.0 Workspace entry
one Woo order only
Waiting for Payment
real server amount/address
refresh/reopen recovery
explicit Refresh Status
mobile and desktop critical layout
no duplicate Woo payment form
no duplicate Place Order
```

Refresh Status diagnostic:

```text
one user click -> one payment-status fetch
HTTP 200
```

There is currently no obvious visual "status refreshed" feedback when the returned state remains unchanged. This is a non-blocking UX refinement, not a functional defect.

### B2 — malformed Hash + Sandbox settlement

Order `#3618`:

```text
Hash input `123`
-> rejected by 64-character TRON transaction-hash guard
-> order remained unpaid
-> no false success
```

Manager Sandbox:

```text
server-authoritative simulated settlement
-> WooCommerce Processing
-> canonical WooCommerce result page
-> refresh stayed same order/status
-> no second Woo order
```

Do not invent arbitrary real-chain hashes merely to reproduce `verification_failed`, `retryable`, or `manual_review`. Those backend mappings belong to the accepted V0.2.9 contract; reproduce them only with safe known fixtures or later dedicated payment-window tests.

### B3 — Feature Flag rollback + normal gateway regression

Rollback sample:

```text
#3619
```

With Workspace ON it reached unpaid V0.3.0 Waiting. After:

```text
Project 2 Crypto Workspace: ON -> OFF
```

the same order returned to the legacy Crypto payment surface without creating another order.

User screenshot confirms legacy page truth for #3619, including Waiting Payment, Test USDT, TRON Nile Testnet / TRC20, Invoice, receiver address, Sandbox and transaction-hash controls.

New Crypto Checkout while OFF also remained on the legacy path.

The only local non-Crypto gateway is currently `Test Payment`. It successfully executed its own provider-owned test settlement and redirected to canonical Thank You / Order Result (runtime order `#3620`). This counts as a successful normal-gateway regression.

---

## 5. Important Project-2 architecture correction

A theme-side generic `Selected Payment` panel was attempted during BIG BATCH B and then rejected.

That experiment was byte-exact rolled back and must NOT be reintroduced.

Final accepted Step-03 architecture:

```text
native dynamic WooCommerce gateway rows
-> selected gateway's native payment_box/provider controls
-> native Terms/privacy
-> exactly one native Place Order
```

The theme remains:

```text
gateway-agnostic
gateway-count-agnostic
free of hardcoded spatial_flow_crypto presentation logic
```

Crypto-specific customer UX begins only after WooCommerce creates the Crypto order and the plugin owns the order-pay Workspace.

---

## 6. Current local runtime state after acceptance

Leave:

```text
Project 2 Crypto Workspace = OFF
```

V0.3.0 remains the installed/accepted plugin baseline; OFF is the safe local rollback state until a later explicit deployment decision.

The OFF flag does not mean V0.3.0 was rejected. The plugin version is accepted; the Feature Flag controls runtime exposure.

---

## 7. Deferred / unresolved payment work

Still NOT implemented / NOT production-complete:

```text
real-time fiat -> USDT quote / rate lock
QR code
operational countdown
Invoice expiry enforcement
replacement Invoice lifecycle
automatic chain/address monitoring
Cron / Worker / Webhook
WalletConnect / wallet connection
multi-asset customer selection
multi-network customer selection
partially-paid / overpayment / late-payment dedicated workflows
full public-production payment rollout policy
```

Important currency limitation:

```text
current prototype uses WooCommerce numeric order total as the numeric USDT amount
```

Therefore final production currency/quote semantics must be explicitly resolved before unrestricted public rollout if store currency can differ from intended USDT denomination semantics.

---

## 8. Ownership from this point

Dedicated payment-development window owns:

```text
all future payment gateways
all future Crypto plugin versions
future asset/network expansion
wallet/provider integrations
quote/rate policy
payment security/regression
production payment rollout decisions
```

Project 2 owns only storefront/Checkout visual and system integration contracts.

If Project 2 ever has to touch payment-plugin source again to unblock storefront integration, it must produce another self-contained handoff before payment ownership resumes.

---

## 9. Project-2 next major system is separate

Project 2 now moves to:

```text
Step 04 — real WooCommerce Order Result / status matrix
```

Do not treat Step 04 work as a reason to reopen accepted V0.3.0 BIG BATCH B unless a real payment-plugin defect is discovered.

---

## 10. Resume point for the payment window

Start future payment work from:

```text
Spatial Flow Crypto Pay Trial V0.3.0 FINAL ACCEPTED
Feature Flag local default: OFF
V0.2.9 backend/security invariants preserved
V0.3.0 customer order-pay Workspace accepted
legacy rollback path preserved
Project-2 theme Selected Payment experiment permanently rejected
```

This is the authoritative standalone payment continuation point as of 2026-08-16.
