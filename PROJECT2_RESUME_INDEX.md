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
21. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
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
→ S5 Step-03 Crypto Workspace
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

## Current review gate: S6

S6 is implemented as an isolated layer on the existing S5 Workspace:

```text
preview/spatial-flow-checkout-crypto-states-v1.css
preview/spatial-flow-checkout-crypto-states-v1.js
```

Implemented review states:

```text
verification_failed
retryable temporary verification error
manual_review
cancelled
paid_confirmed transition boundary
unfinished-payment recovery
```

Deterministic failure examples:

```text
receiver mismatch
transaction predating the invoice
wrong token / no qualifying transfer
amount too low
duplicate transaction
```

Default S5 has no query parameter and remains unchanged.

S6 static review parameters:

```text
?prototype_payment=verification_failed&reason=receiver_mismatch
?prototype_payment=verification_failed&reason=old_transaction
?prototype_payment=verification_failed&reason=wrong_token
?prototype_payment=verification_failed&reason=amount_too_low
?prototype_payment=verification_failed&reason=duplicate_tx
?prototype_payment=temporary_error
?prototype_payment=manual_review
?prototype_payment=cancelled
?prototype_payment=paid_confirmed
?prototype_payment=recovered
```

These parameters are review controls only, not production transport contracts.

## Current exact stop point

```text
S3 main Step-03 Payment: accepted and closed
Step-03 reusable payment host: accepted and closed
S4A selector reference: accepted and closed
S4B capability/contract: completed
S5 Waiting / Preparing / bootstrap failure: accepted and closed
Future multi-asset Workspace: accepted and isolated
S6 verification/recovery states: implemented, awaiting user acceptance
S7 Step 04 result: blocked and not started
Live Checkout reconstruction: not started
Checkout: Not done
```

## Remaining sequence

```text
S6 review/acceptance
→ S7 Step 04 result
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

## Hard boundaries

```text
- preserve WooCommerce order/payment authority
- preserve backend editability
- no live Checkout or plugin modification during static work
- no inactive payment methods in current Checkout
- no browser-authoritative payment success
- no redundant Crypto confirmation page
- no QR/countdown/automatic-monitoring claim under current capability
- no automatic payment detection or continuous polling in S6
- no Step 04 implementation until S6 passes
- one bounded group at a time
- Checkout remains Not done
```
