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
18. project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_ACCEPTANCE.md
19. project2-progress/STEP_4F_S6_SUPPORTED_VERIFICATION_AND_RECOVERY_STATE_GATE.md
20. project2-progress/STEP_4F_S6_SUPPORTED_VERIFICATION_AND_RECOVERY_STATE_IMPLEMENTATION.md
21. project2-progress/STEP_4F_S6_HIDDEN_ACTION_EMPTY_BOX_FIX.md
22. project2-progress/STEP_4F_S6_SUPPORTED_VERIFICATION_AND_RECOVERY_STATE_ACCEPTANCE.md
23. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
```

## Binary page status

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

Steps 01–03 are Checkout. Step 04 is the WooCommerce-owned result and is never a Review/payment-confirmation step.

## Step-03 payment host

Status:

```text
Accepted and closed as a reusable static-reference host
```

Stable host:

```text
Payment Method List
Selected Method Panel
one Final Action Zone
right Order Summary
Address / Contact / Shipping context
```

Only genuinely enabled and eligible WooCommerce gateways may appear. Future gateways use bounded adapters rather than a complete Checkout rebuild.

## Current Crypto capability truth

```text
Gateway ID: spatial_flow_crypto
Asset: USDT
Network: TRON / TRC20
Environment: administrator-controlled mainnet / nile / shasta
Customer asset/network selection: unavailable
Unresolved order state: on-hold
Verification: customer-submitted TRON transaction hash
Authority: server-side TronGrid verification + payment_complete()
```

Current plugin does not provide QR, wallet connection, automatic monitoring, operational expiry, confirmation counts or production multi-asset routing.

## Current fixed Crypto route

```text
Step 03 Payment
→ one final Cryptocurrency action
→ Step-03 Crypto Workspace
```

Because only `USDT + TRON / TRC20` exists, current Checkout bypasses asset/network selection.

The rejected fixed-route intermediate confirmation page remains removed.

## Accepted S5 state family

Authoritative base artifact:

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
Invoice unavailable
→ Retry preparing invoice
→ Preparing
→ Waiting for payment
```

No duplicate order, second generic confirmation or Generate Invoice action is introduced.

## Accepted S6 state family

Resources:

```text
preview/spatial-flow-checkout-crypto-states-v1.css
preview/spatial-flow-checkout-crypto-states-v1.js
```

Accepted states:

```text
verification_failed
retryable temporary verification error
manual_review
cancelled
paid_confirmed transition boundary
unfinished-payment recovery
```

Accepted deterministic failure presentations:

```text
receiver mismatch
transaction predating the invoice
wrong token
no qualifying USDT transfer
amount too low
duplicate transaction
```

Accepted behavior:

```text
verification_failed:
order remains on hold; customer may submit a different valid Hash

temporary_error:
not a rejection; current invoice remains active; bounded retry

manual_review:
do not send another payment; suppress payment actions; preserve safe recovery/status tools

cancelled:
remove all payment actions

paid_confirmed:
server-authoritative boundary only; stop before Step 04

recovered:
restore the same order and active invoice without duplication
```

The shared empty-action-box defect was fixed by restoring `hidden` precedence for empty controls.

Acceptance record:

```text
project2-progress/STEP_4F_S6_SUPPORTED_VERIFICATION_AND_RECOVERY_STATE_ACCEPTANCE.md
```

## Accepted future multi-asset Workspace

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

It remains isolated until the plugin supports multiple server-confirmed payment pairs.

## Current exact stop point

```text
S3 main Step-03 Payment: accepted and closed
Step-03 reusable payment host: accepted and closed
S4A selector reference: accepted and closed
S4B capability/contract: completed
S5 Waiting / Preparing / bootstrap failure: accepted and closed
Future multi-asset Workspace: accepted and isolated
S6 verification/recovery states: accepted and closed
S7 Step-04 Order Confirmed / Thank You / Receipt: authorized next phase, not started
Live Checkout reconstruction: not started
Checkout: Not done
```

## Remaining sequence

```text
S7 Step-04 result
→ S8 full relative-link/session-state audit
→ S9 1366 / 390 / 360 static acceptance
→ live Checkout ownership audit
→ plugin/workspace integration
→ Sandbox and unfinished-payment recovery tests
→ server-authoritative result tests
→ production replacement
→ backend-editability validation
→ final Checkout 1:1 closure
```

## S7 boundary

S7 reviews and reworks:

```text
preview/spatial-flow-thank-you-v1.html
```

Required result semantics:

```text
server-authoritative success only
canonical WooCommerce Order Received / Thank You ownership
confirmed order and receipt details
no Pay or Confirm action
no fifth Checkout step
accurate pending language when payment is not confirmed
no browser-authoritative success
```

S7 must not modify the accepted S5/S6 Workspace unless a directly related defect is separately identified and approved.

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
