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
15. project2-progress/STEP_4F_LIVE_CHECKOUT_WPCODE_VERIFICATION_AND_OWNERSHIP_CLOSURE.md
16. project2-progress/STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md
17. project2-progress/STEP_4F_LIVE_CHECKOUT_BOUNDED_RECONSTRUCTION_PLAN.md
18. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
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

```text
Main final status:
project2-progress/STEP_4F_LIVE_CHECKOUT_OWNERSHIP_AUDIT.md

Page and CartFlows evidence:
project2-progress/STEP_4F_LIVE_CHECKOUT_PAGE_AND_CARTFLOWS_EVIDENCE.md

Current theme/plugin verification:
project2-progress/STEP_4F_LIVE_CHECKOUT_CURRENT_SOURCE_AND_PLUGIN_VERIFICATION.md

WPCode final residual closure:
project2-progress/STEP_4F_LIVE_CHECKOUT_WPCODE_VERIFICATION_AND_OWNERSHIP_CLOSURE.md

Exact keep/replace/migrate ownership matrix:
project2-progress/STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md

Bounded implementation sequence and rollback plan:
project2-progress/STEP_4F_LIVE_CHECKOUT_BOUNDED_RECONSTRUCTION_PLAN.md
```

## Ownership audit final status

```text
Repository evidence: completed
Theme/template source verification: completed
Checkout page assignment: completed
CartFlows ownership check: completed; no Flow exists
Active plugin/payment evidence: completed
Crypto V0.2.5 verification: completed
WPCode active-snippet check: completed; no Checkout owner found
Live Checkout ownership audit: closed
Exact ownership matrix: issued
```

## Confirmed live owners and gaps

```text
/checkout-2-2/:
- WooCommerce page ID 623
- [woocommerce_checkout] host only

form-checkout.php:
- owns current Information → Shipping → Payment → Review shell
- Review is rejected by accepted Project 2 architecture

checkout-safe5.js:
- owns view switching, validation, shipping mirror, coupon and notices
- moves native Place Order into Review
- blocks native submission until Step 4

checkout-safe5.css:
- scoped Checkout visual owner

functions.php:
- enqueues SAFE5 assets
- removes legacy visual hooks
- keeps WooCommerce item/data hooks
- registers partly orphaned Checkout Customizer controls

spatial-flow.js:
- shared Terms and Checkout notice handling
- overlaps SAFE5 on updated_checkout / checkout_error

spatial-flow.css:
- substantial historical Checkout cascade remains active

thankyou.php:
- preserves real WooCommerce order/gateway hooks
- does not separate pending/on-hold from success-like non-failed output

CartFlows:
- active but no Flow; excluded

WPCode:
- active snippets checked; no Checkout/payment/Crypto owner
```

## Current Crypto baseline

```text
Spatial Flow Crypto Pay Trial V0.2.5
SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
Gateway ID: spatial_flow_crypto
Fixed USDT / TRON-TRC20
Nile Testnet + Sandbox enabled in supplied settings
```

Current path remains legacy `/crypto-pay/`. No REST/order-pay Workspace, form-pay replacement, feature flag, token or epoch exists in V0.2.5.

## Bounded reconstruction plan status

```text
Plan document: issued
Plan acceptance: waiting for user decision
Runtime source changes: none
R0 baseline capture: not started
R1 live implementation: not authorized
```

Plan groups:

```text
R0 baseline capture and rollback package
R1 live Step 01–03 shell + native Place Order in Step 03
R2 notice/error ownership consolidation
R3 backend-editable Checkout copy
R4 server-authoritative result mapping
R5 historical Checkout CSS cleanup
R6 Crypto V0.2.5 regression and upgrade decision gate
R7 full commerce regression
R8 final strict desktop/mobile acceptance and closure
```

## Current execution point

```text
Live Checkout ownership audit: closed
Exact ownership matrix: issued
Bounded reconstruction plan: issued
Plan acceptance: waiting
R0 baseline capture: not started
Plugin/workspace integration: not started
Checkout: Not done
```

## Remaining sequence

```text
user accepts bounded plan
→ R0 baseline capture only
→ explicit authorization for R1
→ one controlled implementation group at a time
→ Sandbox/recovery tests
→ server-authoritative result tests
→ backend-editability validation
→ final strict desktop/mobile acceptance
```

## Locked boundaries

```text
- preserve WooCommerce and gateway authority
- preserve backend editability
- no fifth Checkout step
- no fake/browser-authoritative success
- no duplicate order or invoice
- no blind whole-file overwrite
- no append-only CSS patch pile
- V0.2.6.1/Workspace integration remains deferred
- one bounded implementation group at a time
- Checkout remains Not done
```
