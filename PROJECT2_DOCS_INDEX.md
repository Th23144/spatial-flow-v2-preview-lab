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
11. project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
12. project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
13. project2-progress/STEP_4F_S4B_V025_PLUGIN_CAPABILITY_ALIGNMENT_DECISION.md
14. project2-progress/STEP_4F_S4B_INTEGRATION_CONTRACT_REVIEW_AND_CORRECTED_DECISION.md
15. project2-progress/STEP_4F_S4B_FIRST_PHASE_IMPLEMENTATION_PLAN_REVIEW_AND_STEP1_AUTHORIZATION.md
16. project2-progress/STEP_4F_S4A_S4B_PHASE_AND_SCOPE_CORRECTION.md
17. project2-progress/STEP_4F_S4B_GATEWAY_ALIGNED_USDT_TRON_STATIC_IMPLEMENTATION.md
18. project2-progress/STEP_4F_STEP03_PAYMENT_HOST_EXTENSIBILITY_AND_S5_ENTRY_GATE.md
19. project2-progress/STEP_4F_STEP03_PAYMENT_HOST_EXTENSIBILITY_IMPLEMENTATION.md
20. project2-progress/STEP_4F_STEP03_PAYMENT_HOST_EXTENSIBILITY_ACCEPTANCE.md
21. project2-progress/STEP_4F_S5_CRYPTO_INVOICE_WAITING_WORKSPACE_STATIC_IMPLEMENTATION.md
22. project2-progress/STEP_4F_S5_CRYPTO_INVOICE_WAITING_WORKSPACE_ACCEPTANCE.md
23. project2-progress/STEP_4F_FUTURE_MULTI_ASSET_CRYPTO_WORKSPACE_PREVIEW_IMPLEMENTATION.md
24. project2-progress/STEP_4F_FUTURE_MULTI_ASSET_CRYPTO_WORKSPACE_PREVIEW_ACCEPTANCE.md
25. project2-progress/STEP_4F_CHECKOUT_SEQUENCE_REAUDIT_BEFORE_S5_PREPARING.md
26. project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_GATE.md
27. project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_IMPLEMENTATION.md
28. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
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

Step 03 is the final transactional Checkout step. Crypto selection, invoice, waiting, verification and recovery are Step-03 internal views/states.

Step 04 is a WooCommerce-owned result, not Review.

## Main Step-03 payment host

Authoritative page:

```text
preview/spatial-flow-checkout-payment-v1.html
```

Status:

```text
accepted and closed as a static-reference gate
```

Stable host regions:

```text
payment-method list
selected-method panel
one final action zone
right Order Summary
Address / Contact / Shipping context
```

Only genuinely eligible WooCommerce gateways may render. A future gateway may need a bounded presentation adapter, not a complete Checkout rebuild.

## Current Crypto capability

```text
Gateway: spatial_flow_crypto
Asset: USDT
Network: TRON / TRC20
Environment: administrator-controlled mainnet / nile / shasta
Customer asset/network selection: unavailable
Order status while unresolved: on-hold
Verification: customer-submitted TRON transaction hash
Authority: server-side TronGrid verification + payment_complete()
```

Current plugin does not provide QR, wallet connection, automatic chain monitoring, operational expiry, confirmation-count progress or production multi-asset routing.

## S4A future selector reference

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

Status:

```text
accepted and closed as a plugin-agnostic future interaction reference
```

Its example assets and networks are not current capabilities.

## Current fixed Crypto route

```text
preview/spatial-flow-checkout-payment-v1.html
→ one final Cryptocurrency action
→ preview/spatial-flow-checkout-crypto-invoice-v1.html
```

Because only USDT + TRON/TRC20 exists, the current route bypasses asset/network selection.

The rejected fixed-route intermediate confirmation page remains removed.

## S5 accepted Waiting structure

Accepted elements:

```text
Waiting for payment
order number and Invoice ID
USDT amount
TRON / TRC20
environment disclosure
receiver address
copy amount/address
network warning
wallet/exchange instructions
required Transaction Hash form
manual Refresh
recovery link
pending Order Summary
```

## Accepted future multi-asset Workspace

Standalone artifact:

```text
preview/spatial-flow-checkout-crypto-workspace-future-v1.html
preview/spatial-flow-checkout-crypto-workspace-future-v1.css
preview/spatial-flow-checkout-crypto-workspace-future-v1-base.css
preview/spatial-flow-checkout-crypto-workspace-future-v1.js
```

Status:

```text
accepted and isolated from current Checkout
```

Accepted internal architecture:

```text
Choose payment pair
→ Preparing Crypto payment
→ Invoice and transfer
→ Verify payment
```

## Checkout sequence re-audit

Authoritative report:

```text
project2-progress/STEP_4F_CHECKOUT_SEQUENCE_REAUDIT_BEFORE_S5_PREPARING.md
```

Findings:

```text
- the prior workflow would have entered S6 prematurely
- no customer decision page is missing between Step 03 and S5
- Preparing Invoice was the missing S5 internal state
- the stale completion plan and page matrix were corrected
- the payment-host acceptance record was added
- no other prerequisite exists before Preparing Invoice
```

## Current implemented review gate: S5 Preparing Invoice

Default page:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
```

Default internal flow:

```text
Preparing your Crypto payment
→ Creating or restoring your secure invoice
→ automatic Waiting for payment
```

Before readiness:

```text
amount/address hidden
copy controls unavailable
transfer instructions hidden
Transaction Hash controls hidden
right summary = Preparing payment / Preparing invoice
```

Failure-review URL:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html?prototype_invoice=fail
```

Failure flow:

```text
Preparing
→ invoice unavailable
→ Retry or Return to payment methods
```

Retry flow:

```text
Failed
→ Preparing
→ Waiting for payment
```

No second order, second generic confirmation or Generate Invoice action is introduced.

Implementation record:

```text
project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_IMPLEMENTATION.md
```

## Remaining static sequence

```text
S5 Preparing Invoice review/acceptance
→ S6 supported verification/recovery states
→ S7 Step 04 result
→ S8 full relative-link/session-state audit
→ S9 desktop / 390 / 360 static acceptance
```

After static acceptance:

```text
live Checkout ownership audit
→ plugin/workspace integration
→ dynamic WooCommerce gateway rendering
→ Sandbox and unfinished-payment recovery testing
→ server-authoritative result testing
→ production visual replacement
→ backend-editability verification
→ final Checkout 1:1 closure
```

## Current exact execution point

```text
S3: accepted and closed
Step-03 reusable payment host: accepted and closed
S4A: accepted and closed
S4B capability/contract: completed
S5 Waiting structure: accepted
Future integrated Crypto Workspace: accepted and isolated
Checkout sequence re-audit: completed
S5 Preparing Invoice: implemented, awaiting user review
S6: blocked and not started
Plugin installation: deferred
Plugin Step 2: deferred
Live Checkout: not started
Checkout: Not done
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
- no QR/countdown/automatic monitoring claim
- no live Checkout or plugin edits during this static group
- S6 cannot start before Preparing Invoice acceptance
- one bounded group at a time
```
