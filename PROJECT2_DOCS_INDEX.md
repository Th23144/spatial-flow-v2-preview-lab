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
20. project2-progress/STEP_4F_S5_CRYPTO_INVOICE_WAITING_WORKSPACE_STATIC_IMPLEMENTATION.md
21. project2-progress/STEP_4F_S5_CRYPTO_INVOICE_WAITING_WORKSPACE_ACCEPTANCE.md
22. project2-progress/STEP_4F_FUTURE_MULTI_ASSET_CRYPTO_WORKSPACE_PREVIEW_IMPLEMENTATION.md
23. project2-progress/STEP_4F_FUTURE_MULTI_ASSET_CRYPTO_WORKSPACE_PREVIEW_ACCEPTANCE.md
24. project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_GATE.md
25. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
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

## Current Checkout architecture

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Step 03 is the final transactional Checkout step.
Step 04 is an order-owned result, not a pre-payment review.

## Main Step-03 payment host

Authoritative page:

```text
preview/spatial-flow-checkout-payment-v1.html
```

The page is a reusable payment-method host rather than a permanently Crypto-specific implementation.

Stable host regions:

```text
payment-method list
selected-method panel
one final action zone
right Order Summary
accepted Address / Contact / Shipping context
```

Currently confirmed active method:

```text
Cryptocurrency
```

Future methods may be added only when their WooCommerce gateways are actually enabled and eligible.

Presentation families:

```text
Card / wallet:
compact inline gateway fields

Cryptocurrency:
concise entry
→ one final Step-03 action
→ dedicated Step-03 Workspace

Redirect gateway:
concise entry
→ hosted/redirected payment

Bank transfer:
delayed/offline instructions
```

Gateway descriptors drive title, description, family, presentation mode, settlement label, action label and approved handoff route. A future gateway may need a small adapter, but not a full Checkout rebuild.

## S4A status

```text
S4A: accepted and closed
Artifact: preview/spatial-flow-checkout-crypto-select-v1.html
Purpose: plugin-agnostic asset/network interaction reference
```

Its example assets and networks do not represent current plugin support.

## S4B status

```text
S4B capability alignment: completed
S4B corrected integration contract: completed
```

Confirmed current gateway truth:

```text
Spatial Flow Crypto Pay Trial
Gateway ID: spatial_flow_crypto
USDT on TRON / TRC20
administrator-controlled mainnet / nile / shasta
no customer asset/network selection
order created before invoice
on-hold while unresolved
required customer-submitted TRON transaction hash
server-side TronGrid verification
payment_complete() on success
```

Approved Workspace architecture:

```text
one final Step-03 action
→ WooCommerce order creation
→ process_payment()
→ on-hold
→ order-pay-based Step-03 Crypto Workspace
→ automatic Create or Reuse Invoice
→ exact amount + receiver address
→ external transfer
→ required transaction-hash submission
→ server verification
→ Step 04 Order Received / Thank You
```

## Rejected redundant page

The separate fixed USDT / TRON confirmation page was rejected and removed because it added an unnecessary second confirmation action.

Rollback record:

```text
project2-progress/STEP_4F_S4B_GATEWAY_ALIGNED_USDT_TRON_STATIC_IMPLEMENTATION.md
```

## S5 accepted structure

Accepted static page:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
```

Supporting assets:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

Current static flow:

```text
preview/spatial-flow-checkout-payment-v1.html
→ Continue to secure Crypto payment
→ preview/spatial-flow-checkout-crypto-invoice-v1.html
```

Accepted S5 content:

```text
waiting-payment status
order number and Invoice ID
USDT amount
TRON / TRC20
server-owned environment disclosure
receiver address
copy amount and address
TRON-only warning
wallet/exchange transfer instructions
required transaction-hash form
64-character hexadecimal format validation
manual Refresh status
Copy payment recovery link
payment-pending Order Summary
```

Prototype safeguards:

```text
deliberately invalid receiver address
no real order or Invoice
no TronGrid request
no server payment confirmation
no Step 04 navigation
```

Deferred in the current plugin:

```text
QR
WalletConnect / wallet launch
operational countdown or expiry
automatic monitoring
confirmation counter
multi-asset
customer-selectable network
```

## Accepted future multi-asset Crypto Workspace preview

Standalone artifact:

```text
preview/spatial-flow-checkout-crypto-workspace-future-v1.html
preview/spatial-flow-checkout-crypto-workspace-future-v1.css
preview/spatial-flow-checkout-crypto-workspace-future-v1-base.css
preview/spatial-flow-checkout-crypto-workspace-future-v1.js
```

It is intentionally not linked from current Checkout.

Accepted internal Step-03 flow:

```text
Choose payment pair
→ Preparing Crypto payment
→ Invoice and transfer
→ Verify payment
```

The compacted internal stage indicator is accepted on desktop and mobile.

Displayed examples:

```text
USDT + TRON / TRC20: current supported pair
USDT + Ethereum / ERC20: future example
USDT + BNB Chain / BEP20: future example
USDC + Ethereum / ERC20: future example
USDC + Solana: future example
BTC + Bitcoin: future example
```

The page is a non-production architecture reference and does not alter current capability or routing.

## Current bounded correction: S5 Preparing Invoice

The current S5 static page opens directly in:

```text
Waiting for payment
```

The next bounded correction adds the internal bootstrap sequence:

```text
Preparing your Crypto payment
→ Creating or restoring your secure invoice
→ Waiting for payment
```

During Preparing:

```text
- amount/address are not authoritative yet
- copy and Transaction Hash controls remain unavailable
- no fake invoice readiness is shown
```

The same group must define an invoice-bootstrap failure surface:

```text
We could not prepare your Crypto payment.
[Retry]
[Return to payment methods]
```

This is not an S6 transaction-verification failure. It occurs before the customer can pay.

Authoritative gate:

```text
project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_GATE.md
```

## Current exact execution point

```text
S3: accepted and closed
Step-03 reusable payment host: implemented
S4A: accepted and closed
S4B capability/contract: completed
S5 fixed-USDT/TRON structure: accepted
Future integrated Crypto Workspace preview: accepted and closed
Current bounded task: S5 Preparing Invoice internal-state correction
S6 verification-failure / recovery states: begins after the S5 correction passes
Plugin installation: deferred
Plugin Step 2: deferred
Live Checkout: not started
Checkout: Not done
```

## Locked structural boundaries

```text
- preserve accepted Step 01 / 02 / 03 visual structure
- preserve desktop two-column Checkout structure
- do not default-expand Crypto as an inline accordion
- do not add a fifth business step
- do not add a second generic confirmation click
- do not repeat Address or Shipping collection in the Crypto Workspace
- do not create duplicate WooCommerce orders
- do not display fake payment methods in current Checkout
- keep future multi-asset examples isolated until plugin support exists
- Preparing Invoice remains an internal S5 state
- do not represent QR, countdown or automatic monitoring as current behavior
- do not modify live Checkout or plugin during the static page phase
- S6 must reflect only approved first-phase states
- one bounded review group at a time
```
