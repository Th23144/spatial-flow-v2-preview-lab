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

## Binary page status

Only:

```text
Completed 1:1
Not done
```

Current page decisions:

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Not done
```

Static acceptance does not equal live-page `Completed 1:1`.

## Locked Checkout business flow

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

```text
Steps 01–03 = Checkout
Step 04 = WooCommerce-owned result
```

Step 04 is not Review and never asks the customer to pay or confirm again.

## Step-03 payment host

Status:

```text
Accepted and closed as a static-reference gate
```

Stable host:

```text
Payment Method List
Selected Method Panel
one Final Action Zone
right Order Summary
Address / Contact / Shipping context
```

Only genuinely enabled and eligible WooCommerce gateways may appear.

Gateway families:

```text
Card / wallet: compact gateway-owned fields or eligible wallet surface
Cryptocurrency: concise entry → dedicated Step-03 Workspace
Redirect gateway: concise entry → real hosted/redirect flow
Offline gateway: instructions + correct unpaid/order state
```

A future gateway may need a bounded adapter, not a complete Checkout rebuild.

## Current Crypto capability truth

```text
Plugin: Spatial Flow Crypto Pay Trial
Gateway ID: spatial_flow_crypto
Current asset: USDT
Current network: TRON / TRC20
Environment: administrator-controlled mainnet / nile / shasta
Customer asset/network selection: unavailable
Unresolved order status: on-hold
Verification: customer-submitted TRON transaction hash
Authority: server-side TronGrid verification + payment_complete()
```

Current plugin does not provide:

```text
QR
wallet connection
automatic chain monitoring
operational expiry
confirmation-count progress
production multi-asset routing
```

## Current fixed Crypto route

```text
Step 03 Payment
→ one final Cryptocurrency action
→ S5 Step-03 Crypto Workspace
```

Because only `USDT + TRON / TRC20` exists, current Checkout bypasses asset/network selection.

Prohibited:

```text
Step 03
→ fixed USDT/TRON confirmation page
→ second Continue/Create Invoice action
→ payment workspace
```

The rejected redundant page remains removed.

## Accepted S5 state family

Authoritative static artifact:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

Accepted internal sequence:

```text
Preparing your Crypto payment
→ Creating or restoring your secure invoice
→ Waiting for payment
```

Accepted Preparing behavior:

```text
amount/address hidden
copy controls unavailable
transfer instructions hidden
Transaction Hash controls hidden
right summary = Preparing payment / Preparing invoice
```

Accepted bootstrap-failure behavior:

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

No duplicate order, extra confirmation page or Generate Invoice action is introduced.

Acceptance record:

```text
project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_ACCEPTANCE.md
```

## Accepted future multi-asset Workspace

Standalone reference:

```text
preview/spatial-flow-checkout-crypto-workspace-future-v1.html
```

Accepted internal architecture:

```text
Choose payment pair
→ Preparing Crypto payment
→ Invoice and transfer
→ Verify payment
```

It remains isolated until the plugin supports multiple backend-confirmed payment pairs.

## Current exact stop point

```text
S3 main Step-03 Payment: accepted and closed
Step-03 reusable payment host: accepted and closed
S4A selector reference: accepted and closed
S4B capability/contract: completed
S5 Waiting structure: accepted
S5 Preparing Invoice and bootstrap failure: accepted and closed
Future multi-asset Workspace: accepted and isolated
S6 supported verification/recovery states: authorized next phase, not started
S7 Step 04 result: not started
Live Checkout reconstruction: not started
Checkout: Not done
```

## Remaining static sequence

```text
S6 supported verification/recovery states
→ S7 Step 04 result
→ S8 full relative-link/session-state audit
→ S9 1366 / 390 / 360 static acceptance
```

After static acceptance:

```text
live Checkout ownership audit
→ plugin/workspace integration
→ dynamic gateway rendering
→ Sandbox and unfinished-payment recovery tests
→ server-authoritative result tests
→ production replacement
→ backend-editability validation
→ final Checkout 1:1 closure
```

## S6 boundary

S6 may represent only approved first-phase states:

```text
verification_failed
manual_review only where implemented by the approved contract
cancelled
paid_confirmed transition boundary
unfinished-payment recovery through WooCommerce order-pay
```

S6 must not invent:

```text
automatic payment detection
live confirmation counts
operational expired/replacement invoice behavior
automatic underpayment or overpayment workflows
continuous polling
```

## Plugin package status

```text
V0.2.6.1 package integrity: reviewed
Role: future integration baseline
Local installation: deferred
Plugin Step 2: deferred
```

## Hard boundaries

```text
- preserve WooCommerce order/payment authority
- preserve backend editability
- no live Checkout or plugin modification during static work
- no inactive payment methods in current Checkout
- no browser-authoritative payment success
- no redundant Crypto confirmation page
- no QR/countdown/automatic-monitoring claim under current capability
- one bounded group at a time
- Checkout remains Not done
```
