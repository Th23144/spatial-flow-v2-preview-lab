# Project 2 · S6 Supported Verification and Recovery State Gate

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Entry decision

```text
S5 Waiting / Preparing / bootstrap failure: accepted and closed
S6 supported verification and recovery state family: authorized current phase
S7 Step 04 result: not started
Live plugin integration: not started
Checkout: Not done
```

S6 remains inside the dedicated Step-03 Crypto Workspace. It does not add a fifth Checkout step or a new generic page.

## 2. Authoritative capability sources

S6 is constrained by:

```text
STEP_4F_S4B_INTEGRATION_CONTRACT_REVIEW_AND_CORRECTED_DECISION.md
STEP_4F_S4B_FIRST_PHASE_IMPLEMENTATION_PLAN_REVIEW_AND_STEP1_AUTHORIZATION.md
STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_ACCEPTANCE.md
```

Current gateway truth:

```text
Gateway: spatial_flow_crypto
Asset: USDT
Network: TRON / TRC20
Order remains on-hold while unresolved
Customer submits a TRON transaction hash
Server verifies through TronGrid
Server alone calls payment_complete()
```

## 3. S6 state family allowed in this bounded group

### A. Deterministic verification failure

Examples supported by the approved verification contract:

```text
receiver mismatch
old transaction
wrong token / no qualifying USDT transfer
amount too low
duplicate transaction
```

Required behavior:

```text
- state = verification_failed where applicable
- WooCommerce order remains on-hold
- customer receives plain-language guidance
- customer may submit a different transaction hash where retry is meaningful
- a later successful hash clears prior rejection state
- no new order or invoice is created
```

### B. Retryable temporary verification error

Examples:

```text
transaction not yet available or confirmed through TronGrid
temporary TronGrid/API failure
same-order write lock temporarily unavailable
rate-limited submit request where the approved limiter exists
```

Required behavior:

```text
- preserve waiting/current invoice state
- do not mutate to a deterministic rejection
- explain that payment has not been rejected
- provide a bounded retry action
- no automatic continuous polling
```

### C. Manual review

Allowed only for:

```text
partial-write inconsistency
unresolved ownership conflict
state divergence
explicit administrator intervention
```

Required behavior:

```text
- tell the customer not to send another payment
- preserve recovery and manual Refresh access
- do not expose internal diagnostics
- do not claim payment confirmation
```

### D. Cancelled

Required behavior:

```text
- no amount/address/copy/hash payment action remains available
- explain that the order can no longer accept payment
- do not issue a Workspace Token or payment operation in production
- provide safe navigation to support/storefront
```

### E. Paid confirmed transition boundary

Required behavior:

```text
- state is server-authoritative only
- no browser action can set it
- show a brief Payment confirmed boundary
- production redirects to canonical WooCommerce Order Received / Step 04
- static S6 does not implement or approve the Step-04 page
```

### F. Unfinished-payment recovery

Required behavior:

```text
- recovery uses the server-generated WooCommerce order-pay URL
- reopening restores the same order and same active invoice
- no new order or replacement invoice is created
- already-paid orders transition to canonical Step 04
- cancelled orders refuse payment actions
```

## 4. Customer-safe failure language map

```text
receiver_mismatch:
This transaction was sent to a different receiving address.

old_transaction:
This transaction was completed before this invoice was created.

wrong_token / no_transfer:
This transaction does not contain the required USDT transfer on TRON / TRC20.

amount_too_low:
The transferred amount is lower than the invoice amount.

duplicate_tx:
This transaction has already been used for another order.

not_ready / tron_api_error / lock_busy:
We could not verify this transaction right now. Your payment has not been rejected.
```

Internal codes may remain in logs and order notes but are not visually emphasized.

## 5. Static inspection contract

The accepted S5 page remains the single artifact:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
```

S6 states may be inspected through bounded prototype query parameters. These parameters are static review controls only and are not production transport contracts.

Planned review examples:

```text
?prototype_payment=verification_failed&reason=receiver_mismatch
?prototype_payment=verification_failed&reason=old_transaction
?prototype_payment=verification_failed&reason=wrong_token
?prototype_payment=verification_failed&reason=amount_too_low
?prototype_payment=verification_failed&reason=duplicate_tx
?prototype_payment=temporary_error
?prototype_payment=manual_review
?prototype_payment=cancelled
?prototype_payment=paid_confirmed
?prototype_payment=recovered
```

Default S5 behavior must remain unchanged.

## 6. Explicitly excluded

```text
automatic payment detection
continuous polling
live confirmation counts
payment_detected / confirming
operational invoice expiry
replacement invoice after elapsed time
partially_paid / overpaid / late_paid workflows
QR
wallet connection
multi-asset production routing
Step-04 result implementation
plugin or live WordPress modification
```

## 7. Allowed file scope

Only:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

Plus S6 implementation/status documentation.

Prohibited:

```text
Step 01 / Step 02
main Step-03 payment host
S4A
future multi-asset Workspace reference
shared Checkout JS
Step-04 reference
Crypto plugin
live WordPress / WooCommerce
Project 2 version
```

## 8. Acceptance criteria

```text
- default S5 Preparing → Waiting remains unchanged
- deterministic failure keeps the order on-hold and permits a new hash where appropriate
- temporary error is clearly retryable and not presented as rejection
- manual review tells the customer not to pay again
- cancelled removes all payment actions
- paid confirmed remains server-owned and stops before S7
- recovered workspace restores the same invoice presentation
- no state creates a duplicate order or invoice
- no unsupported automatic monitoring is implied
- desktop, 390px and 360px remain usable
```

## 9. Current stop point

```text
S6 gate: defined
S6 implementation: current bounded task
S7: blocked until S6 review
Checkout: Not done
```
