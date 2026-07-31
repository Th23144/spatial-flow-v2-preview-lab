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

## Page-status rule

Only:

```text
Completed 1:1
Not done
```

Current completed pages:

```text
Main-site Header
Main-site Footer
Shop archive
Single Product
Cart
```

Checkout:

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
S4B corrected integration contract: completed
Plugin First-Phase Implementation Plan: received and reviewed
Implementation plan: approved with mandatory corrections
Plugin V0.2.6 Step 1: authorized
Plugin Step 2+: not authorized
S4A gateway-specific adaptation: not started
S5 Invoice / Waiting: not started
Live Checkout modification: not started
```

## Locked Checkout semantics

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Crypto invoice, waiting, verification and recovery remain Step-03 subviews. Step 04 is not Review.

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

## Accepted Step 01 / 02 / 03 baseline

```text
Step 01: Contact / Address
Step 02: Shipping
Step 03: Payment
Desktop Step 03: two columns
Mobile context: same internal two-column information grid
Order Summary: below context card
```

Authoritative mobile visual layer:

```text
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

Accepted reviews:

```text
Desktop Step 01 icons
390px Steps 01 / 02 / 03
360px Steps 01 / 02 / 03
```

## S4A status

Authoritative records:

```text
project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
```

The accepted S4A selector is a static interaction reference only. It does not create a real order, quote, invoice, wallet address, transaction or payment confirmation.

## S4B V0.2.5 capability decision

Authoritative record:

```text
project2-progress/STEP_4F_S4B_V025_PLUGIN_CAPABILITY_ALIGNMENT_DECISION.md
```

Real plugin baseline:

```text
Spatial Flow Crypto Pay Trial 0.2.5
SF_Crypto_Pay_Gateway
Gateway ID: spatial_flow_crypto
Classic WC_Payment_Gateway
USDT on TRON / TRC20
administrator-selected mainnet / nile / shasta
order created before Invoice
on-hold while unpaid
manual Invoice creation
manual tx-hash submission
server-side TronGrid verification
payment_complete() on success
WooCommerce Thank You result
```

Not currently implemented:

```text
automatic monitoring
reusable Invoice REST/AJAX API
customer asset/network selection
QR
active countdown/expiry
quote/rate lock
confirmation stream
webhook
Blocks registration
```

S4A production decision:

```text
Choice C — fixed USDT / TRON confirmation surface
```

S5 ownership:

```text
Choice B — Project 2 visual shell; plugin/server payment authority
```

## Corrected integration contract

Authoritative record:

```text
project2-progress/STEP_4F_S4B_INTEGRATION_CONTRACT_REVIEW_AND_CORRECTED_DECISION.md
```

Approved direction:

```text
WooCommerce order-pay recovery route
server-rendered Step-03 workspace
same-origin REST JSON operations
legacy /crypto-pay/ + admin-post rollback
server-authoritative success
```

First-phase operational states:

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

Authoritative review and Step-1 authorization:

```text
project2-progress/STEP_4F_S4B_FIRST_PHASE_IMPLEMENTATION_PLAN_REVIEW_AND_STEP1_AUTHORIZATION.md
```

The submitted plan is approved only with these corrections:

```text
- use signed opaque Header Token scheme B, not HttpOnly Cookie scheme A
- before_woocommerce_pay_form must not attempt Set-Cookie
- X-SF-Workspace-Token is short-lived and order-scoped
- raw Order Key remains server/order-pay authorization only
- recovery page uses Referrer-Policy: no-referrer and no third-party assets
- use one order-scoped MySQL advisory-lock family for write operations
- perform TronGrid HTTP verification outside the settlement lock
- re-read order/invoice under lock before payment_complete()
- invalid Hash format causes no Invoice mutation or customer order note
- transient/unconfirmed API results do not become verification_failed
- deterministic mismatches may become verification_failed
- define a real Submit-Hash rate limiter before that route is authorized
- audit actual local theme/plugin order-pay overrides before enabling the feature
```

## Authorized plugin V0.2.6 Step 1

Prompt:

```text
project2-progress/STEP_4F_S4B_PLUGIN_STEP1_V026_IMPLEMENTATION_PROMPT.md
```

Allowed:

```text
version 0.2.6
module/class skeletons
safe loading
project2_workspace_enabled setting
Feature Flag default no
sf_crypto_workspace_token_epoch baseline
future Token scheme-B comments
```

Forbidden in this step:

```text
process_payment redirect change
order-pay hooks/template replacement
REST routes
Token generation
Guest authorization
Invoice/Payment service refactor
Workspace JS/CSS
QR/countdown/expiry/monitoring
Project 2 Checkout changes
```

V0.2.5 old payment, Invoice, TRON verification, Sandbox and Thank You behavior must remain intact.

## Current execution order

```text
Send V0.2.6 Step-1 prompt
→ receive ZIP and delivery report
→ review exact V0.2.5 → V0.2.6 diff
→ user performs local old-path regression
→ authorize only the next bounded plugin group
→ S4A fixed USDT/TRON adaptation
→ S5 gateway-aligned Invoice / Waiting shell
→ S6 supported verification/recovery states
→ S7 Step 04 confirmed result
→ S8 full link audit
→ S9 responsive acceptance
→ live Checkout audit and reconstruction
```

## Hard boundaries

```text
- preserve WordPress and WooCommerce operational ownership
- preserve backend editability
- no fake live products, totals, shipping or payment data
- no Elementor dependency
- no unapproved Checkout template override
- Project 2 version remains 2.7.8
- do not treat browser state as payment authority
- do not use raw Order Key as REST authorization
- do not represent static multi-asset examples as current support
- do not begin plugin Step 2 before V0.2.6 package review and local regression pass
- Checkout remains Not done
```
