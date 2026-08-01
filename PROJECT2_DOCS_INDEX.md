# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
4. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
5. PROJECT2_CSS_MAINTENANCE_POLICY.md
6. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
7. project2-progress/STEP_4E_B2_R5_E6_FINAL_CART_1_TO_1_ACCEPTANCE_AND_CLOSURE.md
8. project2-progress/STEP_4F_CHECKOUT_PAYMENT_ARCHITECTURE_DECISION_PROPOSAL.md
9. project2-progress/STEP_4F_PAYMENT_STEP_03_LAYOUT_AND_CRYPTO_SUBFLOW_CORRECTION.md
10. project2-progress/STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
11. project2-progress/STEP_4F_STEP03_PAYMENT_HOST_EXTENSIBILITY_ACCEPTANCE.md
12. project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
13. project2-progress/STEP_4F_S4B_V025_PLUGIN_CAPABILITY_ALIGNMENT_DECISION.md
14. project2-progress/STEP_4F_S4B_INTEGRATION_CONTRACT_REVIEW_AND_CORRECTED_DECISION.md
15. project2-progress/STEP_4F_FUTURE_MULTI_ASSET_CRYPTO_WORKSPACE_PREVIEW_ACCEPTANCE.md
16. project2-progress/STEP_4F_CHECKOUT_SEQUENCE_REAUDIT_BEFORE_S5_PREPARING.md
17. project2-progress/STEP_4F_S5_CRYPTO_INVOICE_WAITING_WORKSPACE_ACCEPTANCE.md
18. project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_IMPLEMENTATION.md
19. project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_ACCEPTANCE.md
20. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
```

## Page status

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Not done
```

Static-reference acceptance does not change the live-page binary status.

## Checkout architecture

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Crypto selection, invoice, waiting, verification and recovery are Step-03 internal states. Step 04 is a WooCommerce-owned result, not Review.

## Main Step-03 payment host

Artifact:

```text
preview/spatial-flow-checkout-payment-v1.html
```

Status:

```text
Accepted and closed as a reusable static-reference host
```

Stable regions:

```text
payment-method list
selected-method panel
one final action zone
right Order Summary
Address / Contact / Shipping context
```

Only genuinely eligible WooCommerce gateways may render. Future methods use bounded adapters rather than a full Checkout rebuild.

## Current Crypto capability

```text
Gateway: spatial_flow_crypto
Asset: USDT
Network: TRON / TRC20
Environment: administrator-controlled mainnet / nile / shasta
Customer asset/network selection: unavailable
Order state while unresolved: on-hold
Verification: customer-submitted TRON transaction hash
Authority: server-side TronGrid verification + payment_complete()
```

No current QR, wallet connection, automatic chain monitoring, operational expiry, live confirmation counter or production multi-asset routing exists.

## Current fixed Crypto route

```text
preview/spatial-flow-checkout-payment-v1.html
→ one final Cryptocurrency action
→ preview/spatial-flow-checkout-crypto-invoice-v1.html
```

Because only `USDT + TRON / TRC20` exists, the current route bypasses asset/network selection.

The rejected fixed-route intermediate confirmation page remains removed.

## S5 accepted state family

Artifacts:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

Accepted sequence:

```text
Preparing your Crypto payment
→ Creating or restoring your secure invoice
→ Waiting for payment
```

Accepted bootstrap failure:

```text
Preparing
→ Invoice unavailable
→ Retry preparing invoice
→ Preparing
→ Waiting for payment
```

Alternative:

```text
Return to payment methods
→ Step 03
```

Accepted protections:

```text
- amount and receiver address hidden before readiness
- copy/transfer/Transaction Hash controls unavailable before readiness
- no duplicate order
- no second generic confirmation
- no Generate Invoice button
```

Acceptance record:

```text
project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_ACCEPTANCE.md
```

## Accepted future multi-asset Workspace

Artifact:

```text
preview/spatial-flow-checkout-crypto-workspace-future-v1.html
```

Accepted architecture:

```text
Choose payment pair
→ Preparing Crypto payment
→ Invoice and transfer
→ Verify payment
```

It remains isolated from current Checkout until the plugin supports multiple server-confirmed payment pairs.

## Current exact execution point

```text
S3: accepted and closed
Step-03 reusable payment host: accepted and closed
S4A: accepted and closed
S4B capability/contract: completed
S5 Waiting structure: accepted
S5 Preparing Invoice/bootstrap failure: accepted and closed
Future integrated Crypto Workspace: accepted and isolated
S6 supported verification/recovery states: next phase, not started
S7 Step 04 result: not started
Plugin installation: deferred
Plugin Step 2: deferred
Live Checkout: not started
Checkout: Not done
```

## Remaining static sequence

```text
S6 supported verification/recovery states
→ S7 Step 04 result
→ S8 full relative-link/session-state audit
→ S9 desktop / 390 / 360 static acceptance
```

## S6 allowed scope

```text
verification_failed
manual_review only when supplied by the approved contract
cancelled
paid_confirmed transition boundary
unfinished-payment recovery through WooCommerce order-pay
```

S6 must not invent:

```text
automatic payment detection
live confirmation counts
operational expired/replacement invoice flow
automatic underpayment/overpayment workflows
continuous polling
```

## Locked boundaries

```text
- preserve accepted Step 01 / 02 / 03 structure
- preserve desktop two-column Checkout
- no long inline Crypto accordion
- no fifth business step
- no second generic confirmation action
- no repeated Address or Shipping collection
- no duplicate order creation
- no fake payment methods
- no future asset/network examples in current Checkout
- no QR/countdown/automatic-monitoring claim
- no live Checkout or plugin edits during static work
- one bounded group at a time
- Checkout remains Not done
```
