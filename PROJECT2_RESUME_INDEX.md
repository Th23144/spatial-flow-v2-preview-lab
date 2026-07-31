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
21. preview/spatial-flow-checkout-v1.html
22. preview/spatial-flow-checkout-shipping-v1.html
23. preview/spatial-flow-checkout-payment-v1.html
24. preview/spatial-flow-checkout-crypto-select-v1.html
25. preview/spatial-flow-checkout-mobile-commerce-v1.css
26. preview/spatial-flow-checkout-crypto-v1.css
27. preview/spatial-flow-checkout-crypto-v1.js
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

## Cart closure

Authoritative closure:

```text
project2-progress/STEP_4E_B2_R5_E6_FINAL_CART_1_TO_1_ACCEPTANCE_AND_CLOSURE.md
```

Final deployed Cart artifacts:

```text
functions.php
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b
Version: 2.7.8

assets/js/spatial-flow.js
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
Deployed from: spatial-flow(43).css
Size: 703,035 bytes
Logical lines: 23,543
SHA256: 79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd
Braces: 3,653 / 3,653
Comments: 338 / 338
CSS parser errors: 0
```

Deferred Cart polish remains recorded in:

```text
project2-progress/CART_DEFERRED_POLISH_BACKLOG.md
```

It does not reopen Cart without a concrete functional or production-blocking regression.

## Current active page

```text
Page: Checkout
Status: Not done
Phase S3: accepted and closed
Phase S4A: accepted and closed as a plugin-agnostic static reference
Phase S4B plugin capability alignment: completed
Current exact step: obtain and review the payment-plugin integration contract proposal
S4A gateway-specific adaptation: not started
Phase S5 Invoice / Waiting: not started
Live Checkout audit: paused until the linked static flow is approved
```

## Terminology lock

```text
V2 = Project 2 / repository:
Th23144/spatial-flow-v2-preview-lab
```

V2 does not mean a separate `checkout-v2` directory or product version. The mistaken experiment was removed.

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

## Approved context-panel architecture

```text
Step 02 Before it leaves.:
- Deliver to
- Contact
- no Shipping Method yet

Step 03 Before it leaves.:
- left: Deliver to
- right upper: Contact
- right lower: confirmed Shipping Method

Mobile Step 03 retains the same internal two-column information grid.
Order Summary remains below the context card.
```

## Structure-locked Mobile Commerce Surface

Authoritative stylesheet:

```text
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

Accepted scope:

```text
Desktop Step 01 field icons
Mobile 01 / 02 / 03 warm layered commerce surfaces
paper-like inputs and options
stone-green selected states and primary CTAs
stronger Order Summary hierarchy
subtle context-card linework
```

Final review:

```text
Desktop Step 01 icons: passed
390px Steps 01 / 02 / 03: passed
360px Steps 01 / 02 / 03: passed
Phase S3: accepted and closed
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

## Phase S4A final status

Authoritative records:

```text
project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
```

Authoritative static page:

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

Accepted prototype behavior:

```text
no asset selected
→ network unavailable
→ Continue disabled

asset selected
→ example networks displayed
→ changing asset clears the previous network

asset + network selected
→ Continue enabled
→ selection retained in sessionStorage
```

All displayed assets and networks are static examples. S4A creates no real order, quote, wallet address, invoice, blockchain transaction or payment confirmation.

## Phase S4B V0.2.5 capability decision

Authoritative decision:

```text
project2-progress/STEP_4F_S4B_V025_PLUGIN_CAPABILITY_ALIGNMENT_DECISION.md
```

Reviewed plugin baseline:

```text
Spatial Flow Crypto Pay Trial
Version: 0.2.5
Gateway class: SF_Crypto_Pay_Gateway
Gateway ID: spatial_flow_crypto
Package SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

Current real plugin capability:

```text
Asset: USDT
Network: TRON / TRC20
TRON environment: administrator-selected mainnet / nile / shasta
Gateway: Classic WC_Payment_Gateway
Order state before payment: on-hold
Invoice: created after WooCommerce order creation
Verification: customer submits tx hash; server queries TronGrid
Success authority: server calls payment_complete()
Result: WooCommerce Order Received / Thank You
```

Current plugin does not provide automatic payment monitoring, REST/AJAX invoice API, dynamic asset/network data, QR generation, operational countdown, real quote/rate lock, confirmation-state polling, webhook or WooCommerce Blocks registration.

### S4A gateway-specific decision

```text
Choice C:
Reduce the production-facing S4A into a fixed USDT / TRON confirmation surface.
```

The accepted multi-asset selector remains a design reference. It must not be represented as V0.2.5 production capability.

### S5 decision

```text
Choice B:
Project 2 may own the visual shell, but the plugin/server owns true invoice data and payment authority.
```

Project 2 may design the amount, address, waiting, error, copy-control and manual-tx-hash presentation. The plugin/server must own order authorization, invoice creation, amount, receiver address, verification, success decision, Sandbox permission and WooCommerce status changes.

## Supersession rule

The S4B decision is newer and more specific than the early generic assumptions in:

```text
project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
```

Where the old plan assumes customer-selectable assets/networks, QR, active countdown, automatic detection or confirming states as current defaults, the S4B V0.2.5 decision supersedes those assumptions.

Those capabilities may return only after explicit plugin implementation and testing.

## Current plugin-contract gate

Prepared prompt:

```text
project2-progress/STEP_4F_S4B_PAYMENT_PLUGIN_INTEGRATION_CONTRACT_PROMPT_PROPOSAL.md
```

The separate payment-plugin window must first output a contract proposal covering:

```text
create or reuse invoice
get current invoice
submit transaction hash
get payment status
Sandbox simulate success
unfinished-payment recovery
normalized customer-safe errors
server-authoritative success response
order-key / nonce / capability authorization
idempotency
WooCommerce order-status effects
```

It must not generate a new ZIP or plugin version until Project 2 reviews and approves the contract.

## Current build order

```text
S1 — Step 01: implemented
→ S2 — Shipping: implemented
→ S3 — Payment: implemented
→ S3 Mobile Commerce Surface: accepted and closed
→ S4A — plugin-agnostic Crypto selector: accepted and closed as a reference
→ S4B — V0.2.5 capability alignment: completed
→ S4B contract proposal: current review gate
→ S4A gateway-specific fixed USDT/TRON adaptation
→ S5 — gateway-aligned Invoice / Waiting shell
→ S6 — only real plugin-supported verification and recovery states
→ S7 — Step 04 Thank You / confirmed result
→ S8 — full relative-link audit
→ S9 — 1366 / 390 / 360 static-flow acceptance
→ live Checkout audit and functional reconstruction
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
- do not begin S5 before the plugin integration contract is reviewed
- do not treat browser state as payment authority
- do not delete the existing Checkout and Thank You reference files; rework them as Step 01 and Step 04
```
