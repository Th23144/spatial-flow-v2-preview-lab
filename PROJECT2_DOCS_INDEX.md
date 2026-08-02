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
9. project2-progress/STEP_4F_S7_STEP04_RESULT_PAGE_ACCEPTANCE_AND_CLOSURE.md
10. project2-progress/STEP_4F_S8_CHECKOUT_LINK_AND_SESSION_ACCEPTANCE_AND_CLOSURE.md
11. project2-progress/STEP_4F_S9_RESPONSIVE_STATIC_ACCEPTANCE_AND_CLOSURE.md
12. project2-progress/STEP_4F_LIVE_CHECKOUT_OWNERSHIP_AUDIT.md
13. project2-progress/STEP_4F_LIVE_CHECKOUT_PAGE_AND_CARTFLOWS_EVIDENCE.md
14. project2-progress/STEP_4F_LIVE_CHECKOUT_CURRENT_SOURCE_AND_PLUGIN_VERIFICATION.md
15. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
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

## Locked Checkout architecture

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Step 04 is WooCommerce-owned result truth. It is not Review and never requests payment again.

## Accepted static work

```text
S3 Step-03 Payment: accepted
Step-03 payment host: accepted
S4A future selector reference: accepted and isolated
S4B capability/integration contract: completed
S5 Waiting / Preparing / failure: accepted
S6 verification/recovery states: accepted
S7 confirmed/pending result family: accepted
S8 link/session continuity: accepted
S9 1366/390/360 responsive static acceptance: accepted
```

Static acceptance does not change the live Checkout status.

## Live ownership audit documents

Main status:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_OWNERSHIP_AUDIT.md
```

Page and CartFlows evidence:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_PAGE_AND_CARTFLOWS_EVIDENCE.md
```

Current source/plugin verification:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_CURRENT_SOURCE_AND_PLUGIN_VERIFICATION.md
```

## Confirmed current source ownership

```text
/checkout-2-2/ page ID 623:
- WooCommerce Checkout page
- body contains [woocommerce_checkout]
- page editor is not the visual owner

CartFlows:
- plugin active
- no Flow exists
- not current Checkout/Thank You structure owner

form-checkout.php:
- current live SAFE5 structure
- still contains rejected Step 4 Review

checkout-safe5.js:
- four-view state owner
- validates steps
- mirrors shipping
- handles coupon wc-ajax
- listens to updated_checkout / checkout_error
- moves real Place Order into Step 4
- blocks submission until Step 4

checkout-safe5.css:
- scoped SAFE5 visual owner

functions.php:
- enqueues SAFE5 assets
- removes legacy visual hooks
- keeps WooCommerce and item-context hooks
- registers Checkout and Thank You Customizer fields

spatial-flow.js:
- shared Terms-link and Checkout Notice handlers
- overlaps SAFE5 on updated_checkout / checkout_error

spatial-flow.css:
- shared/global stylesheet
- still contains substantial historical Checkout cascade

thankyou.php:
- real WooCommerce order-received template override
- preserves order/gateway hooks and editable result copy
- does not currently separate pending/on-hold from paid success composition
```

## Current Crypto artifact

```text
Spatial Flow Crypto Pay Trial V0.2.5
SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

The supplied artifact hash matches the authoritative V0.2.5 baseline.

Current path:

```text
Step 03 selects spatial_flow_crypto
→ WooCommerce creates on-hold order
→ redirect to /crypto-pay/
→ create/reuse invoice
→ customer submits TRON transaction hash
→ server verifies through TronGrid
→ payment_complete(tx_hash)
→ canonical WooCommerce order-received page
```

No active REST/order-pay Workspace, form-pay replacement, feature flag, Workspace token or epoch exists in V0.2.5.

Current supplied settings show Nile Testnet and Sandbox enabled for local testing.

## Current execution point

```text
Repository evidence: completed
Theme/template source verification: completed
Page/CartFlows verification: completed
Active plugin/payment evidence: completed
Crypto V0.2.5 verification: completed
WPCode active-snippet check: required final residual check
Ownership matrix: not yet issued
Reconstruction plan: not started
Plugin/workspace integration: not started
Checkout: Not done
```

## Remaining sequence

```text
WPCode active-snippet read-only check
→ close ownership audit
→ exact hook/template/asset ownership matrix
→ bounded reconstruction plan
→ explicit user authorization
→ one controlled implementation group
→ Sandbox/recovery tests
→ server-authoritative result tests
→ backend-editability validation
→ final Checkout 1:1 closure
```

## Locked boundaries

```text
- preserve WooCommerce and gateway authority
- preserve backend editability
- no fifth Checkout step
- no fake/browser-authoritative success
- no duplicate order or invoice
- no live source or snippet change during ownership audit
- V0.2.6.1/Workspace integration remains deferred
- Checkout remains Not done
```
