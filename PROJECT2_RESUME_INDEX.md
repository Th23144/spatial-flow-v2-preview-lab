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
23. project2-progress/STEP_4F_S4B_FIRST_PHASE_IMPLEMENTATION_PLAN_REVIEW_AND_STEP1_AUTHORIZATION.md
24. project2-progress/STEP_4F_S4B_PLUGIN_STEP1_V026_IMPLEMENTATION_PROMPT.md
25. preview/spatial-flow-checkout-v1.html
26. preview/spatial-flow-checkout-shipping-v1.html
27. preview/spatial-flow-checkout-payment-v1.html
28. preview/spatial-flow-checkout-crypto-select-v1.html
29. preview/spatial-flow-checkout-mobile-commerce-v1.css
30. preview/spatial-flow-checkout-crypto-v1.css
31. preview/spatial-flow-checkout-crypto-v1.js
```

## Binary page-status rule

Only these page statuses are valid:

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

Deferred Cart polish remains in:

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
S4B corrected integration contract: completed
Plugin First-Phase Implementation Plan: received and reviewed
Implementation-plan status: approved with mandatory corrections
Current exact action: send the bounded V0.2.6 Step-1 prompt to the payment-plugin window
Plugin V0.2.6 Step 1: authorized
Plugin Step 2 and later: not authorized
S4A gateway-specific adaptation: not started
Phase S5 Invoice / Waiting: not started
Live Checkout modification: not started
```

## Locked Checkout business sequence

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Step 04 is not Review. Crypto invoice, waiting, transaction verification and recovery remain Step-03 subviews.

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

## Accepted Step 01 / 02 / 03 architecture

```text
Step 01: Contact / Address
Step 02: Shipping
Step 03: Payment
Desktop Step 03: two columns
Mobile Step 03 context: same internal two-column information grid
Order Summary: below context card
```

Structure-locked mobile visual layer:

```text
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

Passed:

```text
Desktop Step 01 icons
390px Steps 01 / 02 / 03
360px Steps 01 / 02 / 03
```

Do not alter accepted 01 / 02 / 03 structure, fields, order, payment methods or accepted Step-03 context spacing without explicit request.

## S4A reference status

Authoritative records:

```text
project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
```

The accepted prototype demonstrates asset/network interaction, but all displayed assets and networks are static examples. It creates no real order, quote, address, invoice, transaction or payment confirmation.

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
USDT on TRON / TRC20
administrator-selected mainnet / nile / shasta environment
WooCommerce order created before Crypto invoice
order held on-hold while unpaid
current independent /crypto-pay/ page
manual invoice creation
manual transaction-hash submission
server-side TronGrid validation
payment_complete() on success
WooCommerce Order Received / Thank You result
```

Current plugin does not provide automatic chain monitoring, reusable Invoice REST/AJAX APIs, customer asset/network selection, QR, active expiry/countdown, quote/rate lock, confirmation stream, webhook or Blocks registration.

### S4A production-facing decision

```text
Choice C:
Reduce S4A to a fixed USDT / TRON confirmation surface.
```

### S5 ownership decision

```text
Choice B:
Project 2 owns the visual shell; plugin/server owns true invoice data and payment authority.
```

## S4B corrected integration contract

Authoritative review:

```text
project2-progress/STEP_4F_S4B_INTEGRATION_CONTRACT_REVIEW_AND_CORRECTED_DECISION.md
```

Approved direction:

```text
WooCommerce order-pay recovery route
server-rendered Step-03 workspace bootstrap
same-origin REST JSON operations
old /crypto-pay/ and admin-post retained as rollback
server-authoritative payment success
```

First-phase states:

```text
waiting_payment
verification_failed
manual_review
cancelled
paid_confirmed
```

Deferred:

```text
expired
payment_detected
confirming
partially_paid
overpaid
late_paid
QR
countdown
automatic monitoring
```

## First-phase implementation-plan review

Authoritative decision:

```text
project2-progress/STEP_4F_S4B_FIRST_PHASE_IMPLEMENTATION_PLAN_REVIEW_AND_STEP1_AUTHORIZATION.md
```

The submitted implementation plan is approved only with these locked corrections:

```text
- Token scheme B replaces HttpOnly Cookie scheme A
- X-SF-Workspace-Token carries a short-lived signed opaque token
- before_woocommerce_pay_form establishes validated context but does not send a Cookie
- one order-scoped MySQL advisory-lock family protects write operations
- TronGrid HTTP verification occurs outside the settlement lock
- invalid Hash format does not mutate Invoice or create a customer order note
- temporary/unconfirmed TronGrid results do not become verification_failed
- deterministic mismatches may become verification_failed
- Submit Hash must gain a real rate limiter before that route is authorized
- recovery page prevents Order Key leakage through referrers, analytics or third-party resources
- actual local theme/plugin order-pay overrides must be audited before feature activation
```

## Bounded plugin Step 1 authorization

Prompt:

```text
project2-progress/STEP_4F_S4B_PLUGIN_STEP1_V026_IMPLEMENTATION_PROMPT.md
```

Authorized output:

```text
Spatial Flow Crypto Pay Trial 0.2.6
```

Authorized scope only:

```text
module/class-file skeletons
safe class loading
project2_workspace_enabled setting
default Feature Flag = no
sf_crypto_workspace_token_epoch baseline
architecture comments locking future Token scheme B
no active Workspace behavior
```

Explicitly not authorized in V0.2.6 Step 1:

```text
process_payment redirect changes
order-pay hooks/template replacement
REST routes
Token generation
Guest authorization implementation
Invoice/Payment service refactor
new Workspace JS/CSS
QR/countdown/expiry/monitoring
Project 2 Checkout source changes
```

V0.2.5 old Checkout, /crypto-pay/, Invoice, tx-hash, TronGrid and Sandbox behavior must remain unchanged.

## Current build order

```text
S1 Step 01: implemented
→ S2 Shipping: implemented
→ S3 Payment: implemented
→ S3 mobile visual layer: accepted
→ S4A plugin-agnostic selector: accepted as a reference
→ S4B V0.2.5 capability alignment: completed
→ S4B corrected integration contract: completed
→ First-Phase Implementation Plan: reviewed and corrected
→ Plugin V0.2.6 Step 1: currently authorized
→ local V0.2.6 old-path regression
→ authorize one later plugin group at a time
→ S4A fixed USDT/TRON adaptation
→ S5 gateway-aligned Invoice / Waiting shell
→ S6 supported verification/recovery states
→ S7 Step 04 confirmed result
→ S8 full link audit
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
- Project 2 version remains 2.7.8 until explicitly changed
- do not modify real Checkout while the linked static flow is incomplete
- do not treat browser state as payment authority
- do not expose or repeatedly transmit raw Order Keys as REST authorization
- do not represent static multi-asset examples as current gateway support
- do not begin plugin Step 2 until V0.2.6 package review and local regression pass
- Checkout remains Not done
```
