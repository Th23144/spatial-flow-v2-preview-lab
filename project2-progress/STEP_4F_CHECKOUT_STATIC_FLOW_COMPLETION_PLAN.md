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
Live ownership audit — repository evidence: completed
Live ownership audit — current theme/template/plugin verification: completed
WPCode active-snippet ownership check: required final residual check
Exact ownership matrix: not yet issued
Bounded reconstruction plan: not started
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
Pay / Confirm / Place order on Step 04
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

Future multi-asset references remain isolated and must not enter current production work.

## 4. Current live source truth

### Checkout entry

```text
WooCommerce Checkout page: ID 623
URL: /checkout-2-2/
Content: [woocommerce_checkout]
CartFlows Flows: none
```

### Child-theme owners

```text
woocommerce/checkout/form-checkout.php
woocommerce/checkout/thankyou.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
```

No override exists for:

```text
form-pay.php
payment.php
review-order.php
```

### Current live conflicts

```text
form-checkout.php:
Information → Shipping → Payment → Review

checkout-safe5.js:
- moves the native Place Order row into Review
- blocks native submission until Step 4
- owns step validation, shipping mirror, coupon and notice behavior

thankyou.php:
- failed has a dedicated branch
- all non-failed statuses share one success-like composition
- pending/on-hold does not yet use accepted S7 Pending semantics

Customizer:
- old Checkout controls still exist
- current SAFE5 hardcodes much visible copy
- legacy hooks consuming many settings are removed on SAFE5

Shared assets:
- spatial-flow.js overlaps SAFE5 on updated_checkout and checkout_error
- spatial-flow.css retains historical Checkout rules beneath the SAFE5 layer
```

## 5. Current Crypto baseline

```text
Spatial Flow Crypto Pay Trial V0.2.5
ZIP SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

The supplied artifact exactly matches the authoritative V0.2.5 baseline.

Current path:

```text
spatial_flow_crypto selected
→ WooCommerce creates order
→ on-hold
→ /crypto-pay/ with order_id + order key
→ invoice generation
→ TRON hash submission
→ server-side TronGrid verification
→ payment_complete(tx_hash)
→ canonical WooCommerce result
```

Current supplied settings:

```text
Gateway enabled
Nile Testnet
Sandbox enabled
Invoice expiry setting 30 minutes
Minimum confirmations setting 12
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

## 6. Final ownership-audit action

Because WPCode Lite is active, inspect the active snippet list for any code targeting:

```text
checkout
woocommerce_checkout
order-received / thankyou
payment gateways
crypto-pay
wc-ajax
```

This is read-only. No snippet may be changed or disabled in this group.

## 7. Required output after WPCode check

Close the ownership audit and issue one exact matrix containing:

```text
surface
exact file
exact hook/filter/event/selector
current callback/output
current data authority
keep / replace / unhook / migrate decision
backend-editability source
rollback boundary
regression tests
```

Then write a bounded reconstruction plan. Implementation requires a separate explicit user authorization.

## 8. Expected reconstruction order after authorization

```text
Group 1: live Step 01–03 shell and WooCommerce ownership preservation
Group 2: remove rejected Review-step submission dependency
Group 3: dynamic payment gateway host
Group 4: current V0.2.5 legacy Crypto bridge or separately authorized plugin upgrade path
Group 5: server-authoritative confirmed/pending Step-04 result mapping
Group 6: backend-editability restoration
Group 7: Sandbox, unfinished-payment recovery and full regression
Group 8: final desktop/mobile strict acceptance
```

The exact groups may be narrowed further by the ownership matrix. They must not be executed as one batch.

## 9. Hard boundaries

```text
- Checkout remains Not done until live implementation and final acceptance
- preserve WooCommerce order/payment authority
- preserve backend editability
- no fifth business step
- no duplicate order or invoice
- no fake or browser-authoritative success
- no QR/countdown/automatic-monitoring claim under V0.2.5
- no live modification during ownership audit
- V0.2.6.1 installation and Workspace integration remain deferred
- one bounded implementation group at a time
```

## 10. Current exact action

```text
Obtain the WPCode active-snippet list only.
Then close the ownership audit and produce the exact ownership matrix.
Do not modify Checkout, snippets, theme or Crypto plugin in the same group.
```
