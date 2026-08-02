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
Bounded reconstruction plan: next separate phase, not started
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

## 4. Ownership audit result

Authoritative records:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_OWNERSHIP_AUDIT.md
project2-progress/STEP_4F_LIVE_CHECKOUT_PAGE_AND_CARTFLOWS_EVIDENCE.md
project2-progress/STEP_4F_LIVE_CHECKOUT_CURRENT_SOURCE_AND_PLUGIN_VERIFICATION.md
project2-progress/STEP_4F_LIVE_CHECKOUT_WPCODE_VERIFICATION_AND_OWNERSHIP_CLOSURE.md
project2-progress/STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md
```

Confirmed current environment:

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

The source-backed matrix locks:

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

## 8. Next phase — bounded reconstruction plan

The next phase is documentation/planning only. It must define, for each implementation group:

```text
- exact files allowed to change
- exact functions/selectors to keep, remove or migrate
- rollback snapshot/hash requirements
- preconditions
- test cases
- user visual/functional acceptance gate
- explicit stop point
```

No implementation begins until the user explicitly approves the plan and authorizes the first group.

## 9. Recommended reconstruction order to be finalized in the plan

```text
Group 1: rebuild live Step 01–03 shell while preserving native Woo output
Group 2: remove Review dependency and return native Place Order to Step 03
Group 3: consolidate Checkout notice and shared-asset ownership
Group 4: restore backend-editable Checkout copy
Group 5: map server-authoritative Confirmed / Pending / Failed result semantics
Group 6: preserve and test current V0.2.5 legacy Crypto bridge
Group 7: full Sandbox, gateway, unfinished-payment and regression testing
Group 8: final 1366 / 390 / 360 strict acceptance and cleanup
```

These groups may be narrowed further; they must not be executed as one batch.

## 10. Hard boundaries

```text
- Checkout remains Not done until live implementation and final acceptance
- preserve WooCommerce order/payment authority
- preserve backend editability
- no fake headless payment API
- no browser-authoritative payment success
- no fifth business step
- no duplicate order or invoice
- no QR/countdown/automatic-monitoring claim under V0.2.5
- V0.2.6.1 installation and Workspace integration remain deferred
- one bounded implementation group at a time
```

## 11. Current exact action

```text
Prepare the bounded reconstruction plan as the next separate phase only after an explicit user instruction to start.

Do not modify Checkout, theme assets, WPCode, CartFlows or the Crypto plugin in the same planning group.
```
