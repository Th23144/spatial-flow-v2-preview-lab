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

Crypto selection, invoice, waiting, verification and recovery are Step-03 internal states. Step 04 is a WooCommerce-owned result, not Review.

## Accepted static gates

```text
S3 main Step-03 Payment
Step-03 reusable payment host
S4A future selector reference
S4B capability/integration contract
S5 Waiting / Preparing / bootstrap failure
S6 verification / recovery state family
future multi-asset integrated Workspace reference
```

## Current Crypto capability

```text
Gateway: spatial_flow_crypto
Asset: USDT
Network: TRON / TRC20
Environment: administrator-controlled mainnet / nile / shasta
Customer asset/network selection: unavailable
Order state while unresolved: on-hold
Verification: customer-submitted TRON transaction hash
Authority: server-side TronGrid verification + payment_complete()
```

No current QR, wallet connection, automatic chain monitoring, operational expiry, live confirmation counter or production multi-asset routing exists.

## Accepted S5 state family

```text
Preparing your Crypto payment
→ Creating or restoring your secure invoice
→ Waiting for payment
```

Accepted bootstrap recovery:

```text
Invoice unavailable
→ Retry preparing invoice
→ Preparing
→ Waiting for payment
```

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

Accepted rules:

```text
- no duplicate order or replacement invoice
- deterministic failures keep the order unpaid/on-hold
- temporary verification error is not presented as rejection
- manual review says not to pay again
- cancelled removes payment actions
- paid_confirmed stops before the Step-04 result
- recovery restores the same order and active invoice
- empty hidden action controls remain fully hidden
```

Acceptance record:

```text
project2-progress/STEP_4F_S6_SUPPORTED_VERIFICATION_AND_RECOVERY_STATE_ACCEPTANCE.md
```

## Current execution point

```text
S3: accepted and closed
Step-03 reusable payment host: accepted and closed
S4A: accepted and closed
S4B capability/contract: completed
S5 state family: accepted and closed
S6 verification/recovery states: accepted and closed
Future integrated Crypto Workspace: accepted and isolated
S7 Step-04 result: authorized next phase, not started
Plugin installation: deferred
Live Checkout: not started
Checkout: Not done
```

## Remaining sequence

```text
S7 Step-04 Order Confirmed / Thank You / Receipt
→ S8 full relative-link/session-state audit
→ S9 desktop / 390 / 360 static acceptance
→ live Checkout ownership audit
→ plugin/workspace integration
→ Sandbox and recovery testing
→ server-authoritative result testing
→ production replacement
→ backend-editability verification
→ final Checkout 1:1 closure
```

## S7 boundary

S7 reviews/reworks:

```text
preview/spatial-flow-thank-you-v1.html
```

It must preserve canonical WooCommerce result ownership, show confirmed order/receipt data, contain no Pay/Confirm action, and never let browser state decide success.

## Locked boundaries

```text
- preserve accepted Step 01 / 02 / 03 structure
- preserve desktop two-column Checkout
- no fifth business step
- no duplicate order or invoice
- no fake payment methods or future capabilities
- no live Checkout or plugin edits during static work
- one bounded group at a time
- Checkout remains Not done
```
