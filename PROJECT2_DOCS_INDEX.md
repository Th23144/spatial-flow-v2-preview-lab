# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-08-02  
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
13. project2-progress/STEP_4F_S4B_INTEGRATION_CONTRACT_REVIEW_AND_CORRECTED_DECISION.md
14. project2-progress/STEP_4F_S5_PREPARING_INVOICE_INTERNAL_STATE_ACCEPTANCE.md
15. project2-progress/STEP_4F_S6_SUPPORTED_VERIFICATION_AND_RECOVERY_STATE_ACCEPTANCE.md
16. project2-progress/STEP_4F_S7_STEP04_RESULT_PAGE_AUDIT_AND_GATE.md
17. project2-progress/STEP_4F_S7_STEP04_RESULT_PAGE_IMPLEMENTATION.md
18. project2-progress/STEP_4F_S7_STEP04_RESULT_PAGE_ACCEPTANCE_AND_CLOSURE.md
19. project2-progress/STEP_4F_S8_CHECKOUT_LINK_AND_SESSION_AUDIT.md
20. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
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

Step 04 is a WooCommerce-owned result. It is not Review and never requests payment again.

## Accepted static gates

```text
S3 main Step-03 Payment
Step-03 reusable payment host
S4A future selector reference
S4B capability/integration contract
S5 Waiting / Preparing / bootstrap failure
S6 verification / recovery state family
S7 Step-04 confirmed / pending result family
future multi-asset integrated Workspace reference
```

## S8 implementation status

```text
S8 full relative-link/session-state audit: implemented, awaiting user acceptance
S9 responsive static acceptance: blocked and not started
```

S8 corrected:

```text
Address/Shipping edits now invalidate stale downstream payment and Crypto draft state
S6 paid_confirmed now links to the accepted S7 Confirmed result
S7 inherits session email, address, shipping and total values
S7 dead Track Order route was replaced by the existing Order support route
S7 Pending breadcrumb now recovers the same payment workspace
```

Active-flow routes were checked from Cart through Step 04. The future selector and future multi-asset Workspace remain isolated and are not linked by the active Checkout flow.

Detailed record:

```text
project2-progress/STEP_4F_S8_CHECKOUT_LINK_AND_SESSION_AUDIT.md
```

## Maintained authority boundary

The static Checkout flow does not perform:

```text
WooCommerce order lookup or creation
payment verification
payment_complete()
order-status mutation
stock mutation
email dispatch
real invoice creation or recovery
```

Production state and all commerce data remain server-owned.

## Current execution point

```text
S5: accepted and closed
S6: accepted and closed
S7 Step-04 confirmed/pending result: accepted and closed
S8 link/session audit: implemented, awaiting user acceptance
S9 responsive static acceptance: blocked and not started
Plugin installation: deferred
Live Checkout: not started
Checkout: Not done
```

## Remaining sequence

```text
S8 user validation and acceptance
→ S9 desktop / 390 / 360 static acceptance
→ live Checkout ownership audit
→ plugin/workspace integration
→ Sandbox and recovery testing
→ server-authoritative result testing
→ production replacement
→ backend-editability verification
→ final Checkout 1:1 closure
```

## Locked boundaries

```text
- preserve accepted Step 01 / 02 / 03 structure
- preserve WooCommerce and plugin authority
- no fifth business step
- no duplicate order or invoice
- no fake payment success
- no live Checkout or plugin edits during static work
- S9 cannot begin before S8 user acceptance
- one bounded group at a time
- Checkout remains Not done
```
