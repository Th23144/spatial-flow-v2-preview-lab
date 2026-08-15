# Step 4F · Crypto BIG BATCH A · V0.2.9 Final Accepted

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Spatial Flow Crypto Pay Trial V0.2.9
BIG BATCH A — Crypto Workspace Backend Complete
SOURCE / SECURITY REVIEW: PASS
LOCAL COMPREHENSIVE REGRESSION: PASS
FINAL STATUS: ACCEPTED / CLOSED
```

## Source package

```text
spatial-flow-crypto-pay-trial-v0.2.9.zip
SHA256:
d85028a0bfc92cd15aec5ace8892119f3cd9ff35083e65c3c70990de56cdf56a
```

Last locally accepted rollback package before V0.2.9 remains:

```text
V0.2.7
SHA256:
aa2075c78e5e788bc4bb2e5d111325b122bacea91835819a509a77b19bae7184
```

## Accepted local evidence

### A — legacy path regression

User reported PASS with Project 2 Crypto Workspace OFF:

```text
plugin V0.2.9 installed/activated
legacy Crypto Checkout remained functional
one order only
on-hold semantics preserved
legacy /crypto-pay/ redirect preserved
legacy Invoice / validation / Sandbox / Thank You / notes remained functional
```

### B — new order-pay Workspace entry

User reported PASS with Workspace ON and supplied runtime screenshot for order `#3616`.

Observed runtime route:

```text
WooCommerce official order-pay URL
→ Secure Crypto Payment Workspace temporary backend shell
```

The temporary surface correctly contained no final Project-2 payment controls and no duplicate Woo payment-method list / Pay button.

### C — automated browser/runtime backend verification

User executed the Project-2 one-cycle browser verification script against order `#3616`.

Result:

```text
pass: true
passed: 19
failed: 0
order_id: 3616
invoice_id: inv_3616_3Ia7NFrlx2
auth_context: manager
feature_epoch: 6
```

Confirmed PASS:

```text
Bootstrap schema v2
backend_ready phase
order + Gateway binding
manual transaction-hash requirement
no fake automatic monitoring
Workspace Token present
raw Order Key absent from bootstrap
no duplicate Woo payment form
Authorized Workspace GET = 200 / workspace_ready
missing Workspace Token = 401 / sf_crypto_token_missing
Invoice Create = 201 / invoice_created
server-authoritative USDT/TRON/amount/address fields
repeated Invoice create = same invoice / invoice_reused
Workspace restores same Invoice
Payment Status = payment_waiting / confirmed=false
malformed Hash = 400 / invalid_format
malformed Hash does not mutate Invoice state
raw Order Key absent from REST responses
Sandbox action contract readable
```

Runtime test Invoice:

```text
inv_3616_3Ia7NFrlx2
status: waiting_payment
```

No real payment or real-chain settlement was performed in Group C.

### D — Feature Flag rollback bridge

User reported PASS:

```text
retain the same unpaid order-pay URL for order #3616
Workspace ON → OFF
open the same URL
→ redirect to legacy /crypto-pay/
→ same WooCommerce order #3616
→ no new order
```

Final requested runtime state:

```text
Project 2 Crypto Workspace = OFF
```

## Accepted backend capability baseline

V0.2.9 is now the accepted Project-2 Crypto backend integration baseline for BIG BATCH B, including:

```text
WooCommerce order-pay Workspace boundary
short-lived opaque Workspace Token
Order/actor/Gateway/feature-epoch authorization
same-origin mutation protection
REST Workspace operation
Create/Reuse Invoice
server-authoritative fixed USDT/TRON Invoice data
order-scoped advisory lock
transaction-hash verification service
retained TronGrid verification core
verification_failed / retryable / manual_review state handling
transaction-hash rate limiting
duplicate-transaction protection
payment_complete() at-most-once boundary
success/note idempotency
Payment Status without chain polling
manager-only Sandbox backend
refresh/reopen/multi-tab recovery contract
legacy /crypto-pay/ compatibility
Feature Flag immediate rollback
```

## Important production limitation retained

V0.2.9 still does not implement a real-time fiat → USDT quote/rate-lock service.

The current prototype uses the WooCommerce numeric order total as the USDT numeric amount.

Therefore:

```text
BIG BATCH A local acceptance ≠ unrestricted production approval for arbitrary non-USD shop currency.
```

The production shop-currency / quote policy must be resolved before public production rollout if the WooCommerce order currency can differ from the intended USDT denomination policy.

This limitation does not block Project-2 BIG BATCH B local Step-03 visual/system integration.

## Explicitly still deferred

```text
QR
operational countdown / invoice expiry
replacement Invoice lifecycle
automatic chain/address monitoring
Cron / Worker / Webhook
multi-asset / selectable networks
final Project-2 Step-03 visual integration
Step 04 real WooCommerce result-status matrix
```

## Next mainline

Proceed to:

```text
BIG BATCH B — Project-2 Step-03 Live Visual/System Integration
```

BIG BATCH B must treat V0.2.9 as the real backend contract and complete Step 03 in one coherent integration batch:

```text
main Payment Host strict parity
real WooCommerce gateway rendering / fallback
fixed USDT/TRON Crypto presentation
Preparing Invoice
Waiting for Payment
required Transaction Hash verification UI
verification_failed
retryable temporary errors
manual_review
cancelled / recovery states
paid_confirmed transition to canonical Step 04
real V0.2.9 REST/data integration
responsive 1366 / 390 / 360
source/computed micro-1:1 acceptance
normal gateway regression
Crypto end-to-end regression
```

Step 04 remains a separate major system after Step 03 because its production truth is the real WooCommerce order-status matrix.
