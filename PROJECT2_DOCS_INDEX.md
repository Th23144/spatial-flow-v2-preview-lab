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
19. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
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

The accepted main payment page is:

```text
preview/spatial-flow-checkout-payment-v1.html
```

It must remain a reusable payment-method host rather than becoming a Crypto-only architecture.

Currently confirmed active method:

```text
Cryptocurrency
```

Future methods may be added only when their WooCommerce gateways are actually confirmed and enabled.

Presentation families:

```text
Card / wallet:
compact inline gateway fields are acceptable

Cryptocurrency:
concise entry in the main payment page
→ dedicated Step-03 Workspace
not a long default-open accordion

Redirect gateway:
concise method entry
→ one final action
→ hosted or redirected flow

Bank transfer:
delayed/offline instruction branch
```

## Future-gateway reservation

Audit result:

```text
Visual/layout reservation: present
Gateway/runtime reservation: incomplete
```

Already reusable:

```text
payment-method list container
payment-method row pattern
selected payment workspace area
one final action zone
right Order Summary
accepted desktop/mobile shell
```

Required bounded completion:

```text
gateway descriptor/adapter model
generic selected-method panel boundary
registry-driven static handoff
dynamic final-action label/behavior contract
safe WooCommerce-native fallback for unknown eligible gateways
truthful fixed USDT / TRON Crypto copy
```

Authoritative gate:

```text
project2-progress/STEP_4F_STEP03_PAYMENT_HOST_EXTENSIBILITY_AND_S5_ENTRY_GATE.md
```

A newly enabled gateway may require one small presentation adapter, but must not require rebuilding Step 01, Step 02, progress, Order Summary or the complete Step-03 page.

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

A separate fixed USDT / TRON confirmation page was created and rejected because it added an unnecessary second confirmation action after the main Step-03 payment page.

The three preview files were removed. The rejection and rollback remain documented at:

```text
project2-progress/STEP_4F_S4B_GATEWAY_ALIGNED_USDT_TRON_STATIC_IMPLEMENTATION.md
```

The accepted S4A and Step-03 files were not modified by the rejected implementation or rollback.

## Current exact execution point

```text
S3: accepted and closed
S4A: accepted and closed
S4B capability/contract: completed
Current next bounded work: Step-03 Payment Host extensibility pass
S5 Invoice / Waiting Workspace shell: follows host-pass acceptance
Plugin installation: deferred
Plugin Step 2: deferred
Live Checkout: not started
Checkout: Not done
```

## S5 first-phase contract

Allowed visual/data contract:

```text
invoice ID
USDT amount
TRON / TRC20
active environment
receiver address
copy controls
waiting-payment instructions
required transaction-hash form
manual Refresh
customer-safe rejection/retry
payment recovery link
server-confirmed transition to Step 04
```

Deferred and prohibited as current claims:

```text
QR
operational countdown or expiry
automatic monitoring
confirmation counter
multi-asset
customer-selectable network
browser-controlled payment success
```

## Locked structural boundaries

```text
- preserve accepted Step 01 / 02 / 03 visual structure
- preserve desktop two-column Checkout structure
- preserve accepted mobile context-card information grid
- do not default-expand Crypto as an inline accordion
- do not add a fifth business step
- do not add a second generic confirmation click
- do not repeat address or shipping in the Crypto Workspace
- do not create duplicate WooCommerce orders
- do not display fake payment methods
- do not modify live Checkout or plugin during the static page phase
- one bounded review group at a time
```
