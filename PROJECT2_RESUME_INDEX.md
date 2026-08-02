# Project 2 · Resume Index

Last updated: 2026-08-02  
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
9. project2-progress/STEP_4F_S7_STEP04_RESULT_PAGE_ACCEPTANCE_AND_CLOSURE.md
10. project2-progress/STEP_4F_S8_CHECKOUT_LINK_AND_SESSION_ACCEPTANCE_AND_CLOSURE.md
11. project2-progress/STEP_4F_S9_RESPONSIVE_STATIC_ACCEPTANCE_AND_CLOSURE.md
12. project2-progress/STEP_4F_LIVE_CHECKOUT_OWNERSHIP_AUDIT.md
13. project2-progress/STEP_4F_LIVE_CHECKOUT_PAGE_AND_CARTFLOWS_EVIDENCE.md
14. project2-progress/STEP_4F_LIVE_CHECKOUT_CURRENT_SOURCE_AND_PLUGIN_VERIFICATION.md
15. project2-progress/STEP_4F_LIVE_CHECKOUT_WPCODE_VERIFICATION_AND_OWNERSHIP_CLOSURE.md
16. project2-progress/STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md
17. project2-progress/STEP_4F_LIVE_CHECKOUT_BOUNDED_RECONSTRUCTION_PLAN.md
18. project2-progress/STEP_4F_R0_BASELINE_CAPTURE_AND_ROLLBACK.md
19. project2-progress/STEP_4F_R0_CONFIGURATION_SNAPSHOT.md
20. project2-progress/STEP_4F_R0_FUNCTIONAL_SMOKE_TEST.md
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

Static acceptance never changes the live-page binary status.

## Locked Checkout flow

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Step 04 is WooCommerce-owned result truth. It is never Review and never requests payment again.

## Accepted static gates

```text
S3 Step-03 Payment: accepted and closed
Step-03 payment host: accepted and closed
S4A future selector reference: accepted and isolated
S4B capability/integration contract: completed
S5 Waiting / Preparing / bootstrap failure: accepted and closed
S6 verification/recovery family: accepted and closed
S7 confirmed/pending result family: accepted and closed
S8 link/session continuity: accepted and closed
S9 1366/390/360 responsive static acceptance: accepted and closed
```

## Live ownership audit — closed

Confirmed current environment:

```text
WooCommerce Checkout page: ID 623
Checkout URL: /checkout-2-2/
Page content: [woocommerce_checkout]
CartFlows: active plugin, no Flow exists
WPCode: active, no Checkout/payment/Crypto owner found
Crypto plugin: Spatial Flow Crypto Pay Trial V0.2.5
```

Confirmed child-theme owners:

```text
woocommerce/checkout/form-checkout.php
woocommerce/checkout/thankyou.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
```

No child-theme override exists for:

```text
form-pay.php
payment.php
review-order.php
```

## Locked live defects

```text
1. form-checkout.php still implements Information → Shipping → Payment → Review.
2. checkout-safe5.js moves native Place Order into Review and blocks submission until Step 4.
3. thankyou.php gives pending/on-hold the same success-like composition as paid non-failed statuses.
4. current SAFE5 hardcodes visible copy while many old Checkout Customizer controls are orphaned.
5. spatial-flow.js and checkout-safe5.js overlap on updated_checkout / checkout_error notice handling.
6. spatial-flow.css still contains substantial historical Checkout selectors beneath SAFE5.
```

## Current Crypto truth

```text
Plugin: Spatial Flow Crypto Pay Trial V0.2.5
ZIP SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
Gateway ID: spatial_flow_crypto
Asset/network: fixed USDT / TRON-TRC20
Current supplied mode: Nile Testnet + Sandbox enabled
```

Current path:

```text
WooCommerce creates on-hold order
→ legacy /crypto-pay/
→ invoice + customer transaction-hash submission
→ server-side TronGrid verification
→ payment_complete(tx_hash)
→ canonical WooCommerce result
```

V0.2.5 has no active REST/order-pay Workspace, form-pay replacement, feature flag, Workspace token or epoch.

## Exact ownership matrix

Issued at:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md
```

Locked decisions:

```text
- remove live Review as an input step
- keep native Place Order in Step 03
- preserve dynamic WooCommerce gateway rendering
- keep V0.2.5 untouched during initial shell reconstruction
- correct pending/on-hold result semantics
- consolidate notice ownership
- restore backend editability
- clean historical Checkout CSS by bounded blocks
- exclude CartFlows and WPCode
```

## Bounded reconstruction plan

Issued at:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_BOUNDED_RECONSTRUCTION_PLAN.md
```

User decision:

```text
计划通过，开始 R0
```

Planned groups:

```text
R0 baseline capture and rollback package
R1 rebuild live Step 01–03 shell and remove Review/Place Order dependency
R2 consolidate Checkout notice/error ownership
R3 restore backend-editable Checkout copy
R4 map server-authoritative Step-04 result states
R5 clean historical Checkout CSS ownership
R6 Crypto V0.2.5 regression and plugin decision gate
R7 full commerce regression
R8 final 1366/390/360 strict acceptance and closure
```

## R0 current status

Authoritative records:

```text
project2-progress/STEP_4F_R0_BASELINE_CAPTURE_AND_ROLLBACK.md
project2-progress/STEP_4F_R0_CONFIGURATION_SNAPSHOT.md
project2-progress/STEP_4F_R0_FUNCTIONAL_SMOKE_TEST.md
```

Completed:

```text
- exact byte size, line count and SHA256 for all seven supplied theme files
- PHP syntax validation
- JavaScript syntax validation
- CSS parse, brace and comment balance validation
- external rollback ZIP containing exact supplied files and V0.2.5 artifact
- Checkout page, CartFlows, WPCode and plugin ownership evidence
- saved sf_checkout_* and sf_order_received_* theme-mod export
- WooCommerce gateway order export
- runtime gateway registration/title/enabled export
- Test A normal WooCommerce legacy order path
```

Rollback package:

```text
project2-checkout-r0-baseline-20260802.zip
SHA256: 5eb98b952a19a7de000cfc870f3750cb15b3237e543e93dea284e78e7a36f45c
```

Relevant saved configuration:

```text
Saved sf_checkout_* keys: 1
Saved sf_order_received_* keys: 32
Enabled runtime gateways: 2
- bacs / 测试
- spatial_flow_crypto / Pay with Crypto
```

Test A recorded baseline:

```text
Observed order: #3571
Gateway: bacs / 测试
Total: $44.99
Resulting status: on-hold
Step 03 rendered both enabled gateways
Legacy Review remained reachable
Native Place Order produced the observed WooCommerce order
Current order-received template loaded
```

Confirmed runtime defect:

```text
The on-hold order is still shown with preparation, fulfillment-queue and On The Way language.
This is carried into R4 server-authoritative result mapping.
```

Still required before R0 can close:

```text
- Test B current Crypto V0.2.5 Sandbox path
```

## Current exact stop point

```text
Live Checkout ownership audit: closed
Exact source-backed ownership matrix: issued
Bounded reconstruction plan: accepted
R0 file/config baseline: completed
R0 Test A normal order path: recorded
R0 Test B Crypto Sandbox path: pending
R0 closure: blocked until Test B is recorded
R1 live code modification: not authorized and not started
Plugin/workspace integration: not started
Checkout: Not done
```

## Remaining sequence

```text
complete R0 Crypto Sandbox Test B
→ close R0
→ explicit authorization for R1
→ one controlled implementation group at a time
→ Sandbox and unfinished-payment recovery tests
→ server-authoritative result tests
→ backend-editability validation
→ final desktop/mobile strict acceptance
→ Checkout Completed 1:1 only after user approval
```

## Hard boundaries

```text
- preserve WooCommerce order/payment authority
- preserve backend editability
- no browser-authoritative payment success
- no fifth Checkout step
- no duplicate order or invoice
- no blind whole-file overwrite
- no append-only CSS patch pile
- V0.2.6.1 installation and Workspace integration remain deferred
- one bounded group at a time
- Checkout remains Not done
```
