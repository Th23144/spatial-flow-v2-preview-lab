# Project 2 · Resume Index

Last updated: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Read these first

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
11. project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
12. project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
13. project2-progress/STEP_4F_S4B_V025_PLUGIN_CAPABILITY_ALIGNMENT_DECISION.md
14. project2-progress/STEP_4F_S4B_INTEGRATION_CONTRACT_REVIEW_AND_CORRECTED_DECISION.md
15. project2-progress/STEP_4F_S4B_FIRST_PHASE_IMPLEMENTATION_PLAN_REVIEW_AND_STEP1_AUTHORIZATION.md
16. project2-progress/STEP_4F_S4A_S4B_PHASE_AND_SCOPE_CORRECTION.md
17. project2-progress/STEP_4F_S4B_GATEWAY_ALIGNED_USDT_TRON_STATIC_IMPLEMENTATION.md
18. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
```

## Binary page-status rule

Only:

```text
Completed 1:1
Not done
```

Current completed pages:

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Not done
```

## Cart closure baseline

```text
functions.php
Version: 2.7.8
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b

assets/js/spatial-flow.js
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
SHA256: 79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd
```

Project 2 version remains `2.7.8` until explicitly changed.

## Locked Checkout business flow

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Step 03 is the payment page and final Checkout commitment surface.
Step 04 is the WooCommerce-owned result page, not Review.

## Step-03 payment-family rule

```text
Card / wallet:
compact gateway fields may appear inline

Cryptocurrency:
must not default-expand the full asset/network/invoice lifecycle inline

Bank transfer:
delayed-confirmation instruction flow
```

The main Step-03 page remains a payment-method host. It currently displays only Cryptocurrency because that is the only confirmed active gateway. Do not invent inactive Card, Apple Pay, Google Pay, PayPal or Bank Transfer methods.

Cryptocurrency uses:

```text
concise Step-03 payment entry
→ one final Pay / Place order action
→ dedicated Crypto Payment Workspace that is still Step 03
```

There is no second generic review or confirmation click.

## Accepted static artifacts

```text
preview/spatial-flow-checkout-v1.html
  Step 01

preview/spatial-flow-checkout-shipping-v1.html
  Step 02

preview/spatial-flow-checkout-payment-v1.html
  Step 03 main payment-method page

preview/spatial-flow-checkout-crypto-select-v1.html
  accepted S4A plugin-agnostic future asset/network interaction reference
```

S4A remains accepted and closed. Its multi-asset examples are not current gateway capabilities.

## S4B actual result

S4B is completed as:

```text
payment-plugin capability alignment
+ corrected integration contract
```

Reviewed real capability:

```text
Plugin: Spatial Flow Crypto Pay Trial
Gateway ID: spatial_flow_crypto
Asset: USDT
Network: TRON / TRC20
Environment: administrator-selected mainnet / nile / shasta
Customer asset/network selection: unavailable
Order status while unresolved: on-hold
Verification: required customer-submitted TRON transaction hash
Payment authority: server-side TronGrid validation + payment_complete()
```

Approved integration direction:

```text
Step 03 final action
→ WooCommerce creates order
→ process_payment()
→ on-hold
→ order-pay-based dedicated Step-03 Crypto Workspace
→ automatically create or restore one invoice
→ show amount and receiver address
→ customer transfers and submits tx hash
→ server verifies
→ payment_complete()
→ Step 04 Order Received / Thank You
```

## Critical fixed-route consequence

Because the current plugin supports only fixed `USDT / TRON`, there is no customer asset/network choice.

Therefore:

```text
- do not insert S4A as a required production page
- do not create another page containing two fixed USDT/TRON cards
- do not ask the customer to confirm the same fixed route twice
- do not add a second final-confirmation click
```

The attempted extra fixed-route confirmation page was rejected and removed. Its rollback record remains in:

```text
project2-progress/STEP_4F_S4B_GATEWAY_ALIGNED_USDT_TRON_STATIC_IMPLEMENTATION.md
```

## Current exact stop point

```text
S3 main Step-03 Payment page: accepted and closed
S4A generic selector reference: accepted and closed
S4B capability alignment and corrected contract: completed
Rejected redundant fixed-route page: removed
S5 dedicated Step-03 Invoice / Waiting Workspace shell: next full static surface
Plugin live integration: deferred
Live Checkout reconstruction: not started
Checkout: Not done
```

Before S5 is linked, only a bounded copy/action correction may be made to the accepted Step-03 payment entry. Its two-column structure, context card, order summary and accepted mobile composition remain locked.

## S5 truthful first-phase scope

May represent:

```text
invoice ID
USDT amount
TRON / TRC20
active environment disclosure
receiver address
copy amount / address
waiting-payment instructions
required transaction-hash input
manual Refresh status
customer-safe deterministic rejection messages
recovery link
paid-confirmed transition to Step 04
```

Must not claim:

```text
QR
live countdown
operational expiry
automatic chain monitoring
confirmation-count progress
multi-asset or customer-selectable networks
```

## Plugin package status

```text
V0.2.6.1 package integrity: reviewed
Role: future integration baseline
Local installation now: not required
Plugin Step 2 now: not current Project 2 work
```

## Hard boundaries

```text
- preserve WooCommerce order/payment authority
- preserve backend editability
- no live Checkout source changes during static-flow design
- no broad CSS replacement
- no unconfirmed payment methods
- no fake payment data or browser-authoritative success
- no raw Order Key as REST authorization
- no redundant Crypto confirmation page
- no S5 claims beyond the approved plugin contract
- one bounded group at a time
```
