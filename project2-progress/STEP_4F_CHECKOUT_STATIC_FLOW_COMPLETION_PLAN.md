# Step 4F · Checkout Static Flow Completion Plan

Last updated: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative current status

```text
Cart: Completed 1:1
Checkout: Not done
S1 Step 01 Contact / Address: implemented in static reference
S2 Step 02 Shipping: implemented in static reference
S3 Step-03 Payment: accepted and closed
Payment host: accepted and closed
S4A future selector: accepted and isolated
S4B capability/integration contract: completed
S5 Waiting / Preparing / bootstrap failure: accepted and closed
S6 verification/recovery family: accepted and closed
S7 confirmed/pending Step-04 result: accepted and closed
S8 link/session continuity: accepted and closed
S9 responsive static acceptance: accepted and closed
Live Checkout ownership audit: closed
Exact source-backed ownership matrix: issued
Bounded reconstruction plan: accepted
R0 baseline/configuration/functional smoke test: completed and closed
R1 live code modification: awaiting explicit authorization; not started
Plugin/workspace integration: not started
```

## 2. Locked business progression

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Steps 01–03 are Checkout. Step 04 is the WooCommerce-owned result. Crypto invoice, waiting, verification and recovery are Step-03 internal states.

Prohibited:

```text
Review as a fourth Checkout input step
fifth Checkout step
second fixed Crypto confirmation page
browser-authoritative payment success
Pay / Confirm / Place Order on Step 04
```

## 3. Authoritative static artifacts

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-states-v1.css
preview/spatial-flow-checkout-crypto-states-v1.js
preview/spatial-flow-thank-you-v1.html
preview/spatial-flow-thank-you-v1.css
preview/spatial-flow-thank-you-v1.js
```

Future multi-asset references remain isolated and must not enter current production work without a separate plugin phase.

## 4. Ownership audit result

Authoritative records:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_OWNERSHIP_AUDIT.md
project2-progress/STEP_4F_LIVE_CHECKOUT_PAGE_AND_CARTFLOWS_EVIDENCE.md
project2-progress/STEP_4F_LIVE_CHECKOUT_CURRENT_SOURCE_AND_PLUGIN_VERIFICATION.md
project2-progress/STEP_4F_LIVE_CHECKOUT_WPCODE_VERIFICATION_AND_OWNERSHIP_CLOSURE.md
project2-progress/STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md
```

Confirmed environment:

```text
WooCommerce Checkout page: ID 623
URL: /checkout-2-2/
Content: [woocommerce_checkout]
CartFlows: active but no Flow exists
WPCode: no Checkout/payment/Crypto owner found
Crypto: authoritative V0.2.5 legacy baseline
```

## 5. Locked live conflicts

```text
form-checkout.php:
- current shell is Information → Shipping → Payment → Review
- Review must be removed as an input stage

checkout-safe5.js:
- owns step navigation, client validation, shipping mirror, coupon and notices
- moves native .place-order into Review
- blocks submission until Step 4

thankyou.php:
- failed has a dedicated branch
- all non-failed statuses share one success-like composition
- pending/on-hold lacks accepted Pending semantics

functions.php / Customizer:
- old Checkout controls remain registered
- current SAFE5 hardcodes much visible copy
- many old hooks consuming those settings are removed

shared assets:
- spatial-flow.js overlaps SAFE5 on updated_checkout / checkout_error
- spatial-flow.css retains historical Checkout rules beneath SAFE5
```

## 6. Current Crypto baseline

```text
Spatial Flow Crypto Pay Trial V0.2.5
ZIP SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
Gateway ID: spatial_flow_crypto
Fixed USDT / TRON-TRC20
Current supplied mode: Nile Testnet + Sandbox enabled
```

Current path:

```text
spatial_flow_crypto selected
→ WooCommerce creates order
→ on-hold
→ legacy /crypto-pay/
→ invoice + transaction-hash submission
→ server-side TronGrid verification
→ payment_complete(tx_hash)
→ canonical WooCommerce result
```

Capability boundary:

```text
no REST Workspace
no order-pay Workspace hooks
no form-pay replacement
no project2_workspace_enabled
no Workspace token/epoch
no automatic chain monitoring
no operational confirmation tracker
no autonomous expiry worker
```

## 7. Exact ownership decisions

```text
- keep Checkout page ID, URL and shortcode host
- rebuild form-checkout.php as Step 01–03 while preserving native Woo hooks
- keep WooCommerce billing, shipping, order-review and payment authority
- keep native #place_order in Step 03
- remove Review-state filling and Place Order relocation
- preserve server-side coupon and gateway behavior
- consolidate Checkout notices into one scoped owner
- reconnect or migrate backend Checkout copy controls
- map pending/on-hold and paid result states correctly in thankyou.php
- keep V0.2.5 untouched during initial shell work
- clean historical shared Checkout CSS in bounded blocks
- exclude CartFlows and WPCode
```

## 8. Bounded reconstruction plan

Authoritative document:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_BOUNDED_RECONSTRUCTION_PLAN.md
```

User decision:

```text
计划通过，开始 R0
```

Plan groups:

```text
R0 baseline capture and rollback package
R1 rebuild live Step 01–03 shell and remove Review/Place Order dependency
R2 consolidate Checkout notice and error ownership
R3 restore backend-editable Checkout copy
R4 map server-authoritative Step-04 results
R5 clean historical Checkout CSS ownership
R6 run V0.2.5 regression and choose legacy vs separate plugin-upgrade route
R7 full commerce regression
R8 final 1366/390/360 strict acceptance and closure
```

## 9. R0 baseline capture — closed

Authoritative records:

```text
project2-progress/STEP_4F_R0_BASELINE_CAPTURE_AND_ROLLBACK.md
project2-progress/STEP_4F_R0_CONFIGURATION_SNAPSHOT.md
project2-progress/STEP_4F_R0_FUNCTIONAL_SMOKE_TEST.md
```

Completed evidence:

```text
- exact current seven-file theme baseline
- byte size, line count and SHA256
- PHP and JavaScript syntax checks
- CSS parser, brace and comment balance checks
- external rollback ZIP
- authoritative V0.2.5 ZIP in the rollback package
- current page/plugin ownership evidence
- saved sf_checkout_* and sf_order_received_* theme mods
- gateway order plus runtime registration/title/enabled export
- Test A normal WooCommerce legacy order path
- Test B current Crypto V0.2.5 Sandbox path
```

Rollback package:

```text
project2-checkout-r0-baseline-20260802.zip
SHA256: 5eb98b952a19a7de000cfc870f3750cb15b3237e543e93dea284e78e7a36f45c
```

Observed functional baselines:

```text
Test A:
#3571 — bacs / 测试 — $44.99 — On hold

Test B:
#3574 — spatial_flow_crypto / Pay with Crypto — $20.99
/crypto-pay/ invoice loaded
Waiting Payment shown before simulation
Sandbox success reached Processing result
```

Confirmed defect carried into R4:

```text
on-hold orders are still shown with success/preparation/fulfillment language
```

Evidence limits carried into R1/R7:

```text
malformed-email blocking
exact shipping recalculation transition
explicit duplicate-order audit
separate WooCommerce admin order screens/notes
gateway decline/server errors
```

R0 did not modify runtime source or configuration.

## 10. R1 authorization boundary

R1 is the first live-code group. It may start only after a new explicit user authorization.

Allowed files only:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

R1 objective:

```text
- convert the live Checkout shell from four input views to three
- remove Review as an input/business step
- keep native Place Order once inside Step 03
- preserve native WooCommerce fields, shipping, totals, coupon, gateways, nonces and order creation
- keep Crypto V0.2.5 untouched and preserve the legacy /crypto-pay/ path
- stop for functional and visual acceptance before R2
```

Atomic rollback:

```text
form-checkout.php
+ checkout-safe5.js
+ checkout-safe5.css
```

## 11. Hard boundaries

```text
- Checkout remains Not done until live implementation and final acceptance
- preserve WooCommerce order/payment authority
- preserve backend editability
- no fake headless payment API
- no browser-authoritative payment success
- no fifth business step
- no duplicate order or invoice
- no QR/countdown/automatic-monitoring claim under V0.2.5
- no blind whole-file overwrite
- no routine bottom-of-file CSS patch
- V0.2.6.1 installation and Workspace integration remain deferred
- one bounded implementation group at a time
```

## 12. Current exact stop point

```text
Bounded reconstruction plan: accepted
R0: completed and closed
R1 implementation: awaiting explicit user authorization; not started
Plugin/workspace integration: not started
Checkout: Not done
```
