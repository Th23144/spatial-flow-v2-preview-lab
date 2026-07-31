# Project 2 · Resume Index

Last updated: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

Use this as the top-level entry point when resuming Project 2 from a new ChatGPT window.

## Read these first

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
21. project2-progress/STEP_4F_S4B_INTEGRATION_CONTRACT_REVIEW_AND_CORRECTED_DECISION.md
22. project2-progress/STEP_4F_S4B_PLUGIN_IMPLEMENTATION_PLAN_PROMPT.md
23. preview/spatial-flow-checkout-v1.html
24. preview/spatial-flow-checkout-shipping-v1.html
25. preview/spatial-flow-checkout-payment-v1.html
26. preview/spatial-flow-checkout-crypto-select-v1.html
27. preview/spatial-flow-checkout-mobile-commerce-v1.css
28. preview/spatial-flow-checkout-crypto-v1.css
29. preview/spatial-flow-checkout-crypto-v1.js
```

## Binary page-status rule

Only these statuses are valid:

```text
Completed 1:1
Not done
```

A page cannot become `Completed 1:1` until implementation, backend editability, strict desktop review, production-quality mobile review, functional regression and required cleanup all pass.

## Current completed pages

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
```

Checkout remains:

```text
Not done
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
CSS parser errors: 0
```

Deferred Cart polish remains recorded in:

```text
project2-progress/CART_DEFERRED_POLISH_BACKLOG.md
```

It does not reopen Cart without a concrete functional or production-blocking regression.

## Current active page and exact stop point

```text
Page: Checkout
Status: Not done
Phase S3: accepted and closed
Phase S4A: accepted and closed as a plugin-agnostic static reference
Phase S4B plugin capability alignment: completed
S4B integration-contract proposal: received and reviewed
S4B corrected contract decision: completed
Current exact step: obtain the plugin First-Phase Implementation Plan
Plugin code generation: not authorized
S4A gateway-specific adaptation: not started
Phase S5 Invoice / Waiting: not started
Live Checkout audit: paused until the linked static flow is approved
```

## Terminology lock

```text
V2 = Project 2 / repository:
Th23144/spatial-flow-v2-preview-lab
```

V2 does not mean a separate `checkout-v2` directory or product version.

## Locked Checkout business sequence

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Step 04 is not a pre-payment Review page.

Crypto invoice, waiting, verification and recovery remain Step-03 subviews.

## Approved linked static sequence

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

Forbidden in accepted 01 / 02 / 03 pages:

```text
DOM restructuring
field reordering
section reordering
invented payment methods
decorative vertical accent strips
unrequested changes to accepted Step-03 context spacing
```

## S4A reference status

Authoritative records:

```text
project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
```

The accepted prototype demonstrates asset/network dependent interaction. Every displayed asset and network remains a static example.

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

## S4B V0.2.5 capability baseline

Authoritative decision:

```text
project2-progress/STEP_4F_S4B_V025_PLUGIN_CAPABILITY_ALIGNMENT_DECISION.md
```

Reviewed plugin:

```text
Spatial Flow Crypto Pay Trial 0.2.5
Gateway class: SF_Crypto_Pay_Gateway
Gateway ID: spatial_flow_crypto
Classic WC_Payment_Gateway
Package SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

Current real capability:

```text
Asset: USDT
Network: TRON / TRC20
Environment: administrator-selected mainnet / nile / shasta
WooCommerce order created before Crypto invoice
Order held on-hold while unpaid
Current plugin redirects to independent /crypto-pay/
Customer manually creates invoice and submits tx hash
Server validates through TronGrid
Server calls payment_complete() on success
WooCommerce Order Received / Thank You is the canonical result
```

Current plugin does not provide automatic chain monitoring, reusable REST/AJAX invoice APIs, customer-selectable assets/networks, QR generation, operational countdown/expiry, a real quote/rate lock, confirmations stream, webhook or Blocks payment registration.

### S4A gateway-specific decision

```text
Choice C:
Reduce the production-facing S4A into a fixed USDT / TRON confirmation surface.
```

The accepted multi-asset selector remains a design reference. It must not be represented as V0.2.5 production capability.

### S5 ownership decision

```text
Choice B:
Project 2 may own the visual shell, but the plugin/server owns true invoice data and payment authority.
```

## S4B corrected integration contract

Authoritative review:

```text
project2-progress/STEP_4F_S4B_INTEGRATION_CONTRACT_REVIEW_AND_CORRECTED_DECISION.md
```

Approved core direction:

```text
WooCommerce order-pay recovery route
server-rendered Step-03 workspace bootstrap
same-origin REST JSON operations
existing /crypto-pay/ and admin-post retained as rollback
server-authoritative payment success
```

Mandatory corrections to the submitted proposal:

```text
- browser JS must not repeatedly transmit the raw Order Key
- server must mint a short-lived order-scoped Workspace credential
- Guest CSRF and token expiry/invalidation must be precisely defined
- on-hold Crypto orders must be explicitly eligible without a global WooCommerce payable-status change
- first phase does not activate invoice expiry or replacement invoices
- first phase does not show a real countdown
- first phase does not include QR
- no default periodic polling because there is no automatic chain monitor
- transaction-hash submission is the required verification action
- entering the Workspace automatically creates or reuses one invoice
- old /crypto-pay/ remains functional and independently restorable
```

First-phase invoice states:

```text
waiting_payment
verification_failed
manual_review
cancelled
paid_confirmed
```

Reserved but not operational in the first revision:

```text
expired
payment_detected
confirming
partially_paid
overpaid
late_paid
```

## Current plugin implementation-plan gate

Prompt prepared at:

```text
project2-progress/STEP_4F_S4B_PLUGIN_IMPLEMENTATION_PLAN_PROMPT.md
```

The separate plugin window must return an implementation plan resolving:

```text
exact order-pay hooks/template boundary
Workspace-token design
Guest CSRF protection
on-hold order eligibility
REST permission callbacks
order-scoped invoice locking
Feature Flag and rollback
legacy admin-post compatibility
state migration
front-end bootstrap fields
test matrix
bounded development sequence
```

It must not generate code, ZIP or a new version number yet.

## Current build order

```text
S1 — Step 01: implemented
→ S2 — Shipping: implemented
→ S3 — Payment: implemented
→ S3 Mobile Commerce Surface: accepted and closed
→ S4A — plugin-agnostic Crypto selector: accepted as a reference
→ S4B — V0.2.5 capability alignment: completed
→ S4B — corrected integration contract: completed
→ plugin First-Phase Implementation Plan: current gate
→ plugin bounded implementation and regression, only after plan approval
→ S4A gateway-specific fixed USDT/TRON adaptation
→ S5 gateway-aligned Invoice / Waiting shell
→ S6 only real plugin-supported verification/recovery states
→ S7 Step 04 confirmed result
→ S8 full relative-link audit
→ S9 1366 / 390 / 360 acceptance
→ live Checkout audit and reconstruction
```

## Project rules that remain active

```text
- preserve native WooCommerce behavior, data, payment, orders, emails, URLs and database ownership
- preserve backend editability
- no new plugin unless explicitly approved
- no Elementor dependency
- no Cart or Checkout template override without proven necessity and explicit approval
- use small bounded and independently reversible operations
- prefer exact in-place replacement over append-only CSS
- do not execute cancelled FIX4
- version remains 2.7.8 until explicitly changed
- only ask the user to choose at genuine visual, operational or business decision points
- do not modify real Checkout while the linked static flow is incomplete
- do not begin S5 before the plugin integration path is technically approved
- do not treat browser state as payment authority
- do not expose or repeatedly transmit raw Order Keys from the front end
- do not represent static multi-asset examples as current gateway support
- do not generate a new plugin ZIP before the implementation plan is approved
```
