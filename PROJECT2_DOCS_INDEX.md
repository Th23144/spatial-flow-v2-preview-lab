# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-31  
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
8. project2-progress/CART_DEFERRED_POLISH_BACKLOG.md
9. project2-progress/STEP_4F_CHECKOUT_PAYMENT_ARCHITECTURE_DECISION_PROPOSAL.md
10. project2-progress/STEP_4F_PAYMENT_STEP_03_LAYOUT_AND_CRYPTO_SUBFLOW_CORRECTION.md
11. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
12. project2-progress/STEP_4F_CHECKOUT_CONTEXT_PANEL_ARCHITECTURE_APPROVAL_AND_STATIC_IMPLEMENTATION.md
13. project2-progress/STEP_4F_S3_CONTEXT_PANEL_AND_PAYMENT_PAGE_IMPLEMENTATION.md
14. project2-progress/STEP_4F_S3_MOBILE_COMMERCE_SURFACE_VISUAL_ENHANCEMENT_PROPOSAL.md
15. project2-progress/STEP_4F_S3_MOBILE_COMMERCE_SURFACE_STRUCTURE_LOCKED_IMPLEMENTATION.md
16. project2-progress/STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
17. project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
18. project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
19. project2-progress/STEP_4F_S4B_V025_PLUGIN_CAPABILITY_ALIGNMENT_DECISION.md
20. project2-progress/STEP_4F_S4B_PAYMENT_PLUGIN_INTEGRATION_CONTRACT_PROMPT_PROPOSAL.md
21. preview/spatial-flow-checkout-v1.html
22. preview/spatial-flow-checkout-shipping-v1.html
23. preview/spatial-flow-checkout-payment-v1.html
24. preview/spatial-flow-checkout-crypto-select-v1.html
25. preview/spatial-flow-checkout-mobile-commerce-v1.css
26. preview/spatial-flow-checkout-crypto-v1.css
27. preview/spatial-flow-checkout-crypto-v1.js
```

## Page-status rule

Only these statuses are valid:

```text
Completed 1:1
Not done
```

Historical implementation, accepted static HTML or partial fixes do not count as page completion.

## Completed 1:1

```text
Main-site Header
Main-site Footer
Shop archive
Single Product
Cart
```

Checkout remains:

```text
Not done
```

## Current deployed Cart baseline

```text
functions.php
Version: 2.7.8
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b

assets/js/spatial-flow.js
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
SHA256: 79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd
CSS parser errors: 0
```

Cancelled FIX4 remains cancelled.

## Current active Checkout status

```text
Phase S3: accepted and closed
Phase S4A: accepted and closed as a plugin-agnostic static reference
Phase S4B V0.2.5 capability alignment: completed
Current gate: payment-plugin integration contract proposal
S4A gateway-specific adaptation: not started
S5 Invoice / Waiting: not started
Live Checkout audit: paused
```

## Locked Checkout semantics

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Step 04 is not Review. Crypto invoice, waiting, verification and recovery remain Step-03 subviews.

## Current linked static flow

```text
preview/spatial-flow-cart-v1.html
→ preview/spatial-flow-checkout-v1.html
→ preview/spatial-flow-checkout-shipping-v1.html
→ preview/spatial-flow-checkout-payment-v1.html
→ preview/spatial-flow-checkout-crypto-select-v1.html
→ gateway-aligned invoice / waiting / verification subflow
→ preview/spatial-flow-thank-you-v1.html
```

## Accepted 01 / 02 / 03 architecture

```text
Step 01: Contact / Address
Step 02: Shipping
Step 03: Payment
Desktop Step 03: two columns
Mobile Step 03 context: same internal two-column information grid
Order Summary: below context card
```

Structure-locked visual implementation:

```text
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

Passed reviews:

```text
Desktop Step 01 icons
390px Steps 01 / 02 / 03
360px Steps 01 / 02 / 03
```

Forbidden in accepted pages:

```text
unrequested DOM or field reordering
invented payment methods
changed transaction semantics
decorative vertical accent strips
changes to accepted Step-03 context spacing without explicit request
```

## S4A reference status

Authoritative records:

```text
project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
```

The accepted S4A prototype demonstrates asset/network dependent interaction, but all displayed assets and networks are static examples.

It creates no real:

```text
WooCommerce order
quote
wallet address
QR code
Crypto invoice
blockchain transaction
payment confirmation
```

## S4B V0.2.5 capability alignment

Authoritative decision:

```text
project2-progress/STEP_4F_S4B_V025_PLUGIN_CAPABILITY_ALIGNMENT_DECISION.md
```

Reviewed plugin baseline:

```text
Spatial Flow Crypto Pay Trial 0.2.5
Gateway class: SF_Crypto_Pay_Gateway
Gateway ID: spatial_flow_crypto
Classic WC_Payment_Gateway
Package SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

Current true capability:

```text
USDT on TRON / TRC20
administrator-selected mainnet / nile / shasta environment
WooCommerce order created before invoice
order held on-hold while unpaid
independent Crypto page in current plugin
manual Generate Invoice
manual tx-hash submission
server-side TronGrid validation
payment_complete() on success
WooCommerce Order Received / Thank You result
```

Current plugin does not expose a reusable headless Invoice API, asset/network endpoint, automatic status monitor, QR generator, rate-lock system, operational invoice-expiry state, confirming state stream, webhook or Blocks registration.

## S4A gateway-specific decision

```text
Choice C
```

The production-facing S4A must become a fixed confirmation surface:

```text
Asset: USDT
Network: TRON / TRC20
Order total
Environment disclosure where applicable
Network warning
Continue to Crypto payment workspace
```

The customer cannot choose Mainnet, Nile or Shasta. That remains an administrator setting.

USDC, BTC, Ethereum, Solana and Bitcoin remain static future examples only and must not enter real V0.2.5-backed behavior.

## S5 ownership decision

```text
Choice B
```

Project 2 may own the visual shell:

```text
invoice presentation
amount and address layout
copy controls
waiting and rejection language
manual tx-hash fallback UI
responsive layout
```

Plugin/server ownership remains mandatory for:

```text
Order ID / Order Key authorization
invoice creation and reuse
true amount and receiver address
chain/token environment
transaction verification
payment success
Sandbox permission
payment_complete()
WooCommerce order-state mutation
```

The current `/crypto-pay/` visual page is replaceable. Its server-side payment authority is not.

## Supersession of early generic assumptions

The newer S4B decision supersedes early generic statements in:

```text
project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
```

Specifically, customer-selectable multi-assets/networks, QR, active countdown, automatic detection and confirming states are no longer assumed current capabilities.

They may be added only after explicit plugin implementation and testing.

## Current payment-plugin contract gate

Prepared prompt:

```text
project2-progress/STEP_4F_S4B_PAYMENT_PLUGIN_INTEGRATION_CONTRACT_PROMPT_PROPOSAL.md
```

Required proposal scope:

```text
Create or Reuse Invoice
Get Current Invoice
Submit Transaction Hash
Get Payment Status
Sandbox Simulate Success
Recover Unfinished Payment
normalized JSON errors and success
Order Key / nonce / capability authorization
idempotency and duplicate-request behavior
WooCommerce order-status effects
```

The separate plugin window must return the contract proposal before generating a new ZIP or choosing a new plugin version.

## Current build order

```text
S1 Step 01: implemented
→ S2 Shipping: implemented
→ S3 Payment: implemented
→ S3 mobile visual layer: accepted
→ S4A plugin-agnostic selector: accepted as a reference
→ S4B V0.2.5 alignment: completed
→ plugin integration contract proposal: current gate
→ S4A fixed USDT/TRON adaptation
→ S5 gateway-aligned Invoice / Waiting shell
→ S6 real supported verification/recovery states
→ S7 Step 04 confirmed result
→ S8 full link audit
→ S9 1366 / 390 / 360 acceptance
→ live Checkout audit and reconstruction
```

## Hard boundaries

```text
- preserve WordPress and WooCommerce operational ownership
- preserve backend editability
- no fake live products, totals, shipping or payment data
- no new plugin or Elementor dependency without explicit approval
- no Checkout template override without proven necessity and approval
- do not alter version 2.7.8 without approval
- do not begin S5 before the plugin contract is reviewed
- do not treat browser state as payment authority
- do not represent static multi-asset examples as V0.2.5 support
- do not generate a new plugin ZIP before contract approval
```
