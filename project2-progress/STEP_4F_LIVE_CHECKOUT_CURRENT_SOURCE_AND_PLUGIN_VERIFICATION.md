# Project 2 · Live Checkout Current Source and Plugin Verification

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Scope and result

```text
Current child-theme source bundle: received and hash-verified
Current Checkout template directory: confirmed
WooCommerce Checkout page assignment: confirmed
CartFlows ownership: excluded for the current Checkout
Active plugin/payment evidence: received
Current Crypto plugin artifact: confirmed as authoritative V0.2.5
No runtime or source modification performed
Checkout: Not done
```

## 2. Current child-theme artifacts

User supplied the current local files. Independent SHA256 values:

```text
functions.php
5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b

assets/js/spatial-flow.js
7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd

assets/js/checkout-safe5.js
45e5abf27de3f676bed64c44a0568a9135e0c1442a790f6fb890d7fbcbe681d0

assets/css/checkout-safe5.css
6316615551f3f732933881f07fa6c1c128a1a013aa4de3e5afce22dff471313a

woocommerce/checkout/form-checkout.php
5ffb8eab32114354a7c40e2613bc03ccbcf72275217d6f50f5eca9ce35668b5f

woocommerce/checkout/thankyou.php
6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa
```

The recorded `functions.php`, `spatial-flow.js` and `spatial-flow.css` hashes match the accepted Cart closure baseline exactly.

## 3. Checkout page and template ownership

Confirmed from the user's WordPress/WooCommerce screens:

```text
WooCommerce Cart page: Cart, ID 622
WooCommerce Checkout page: Checkout, ID 623
Checkout slug/runtime URL: /checkout-2-2/
Checkout page content: [woocommerce_checkout]
CartFlows Flows: none
```

The WordPress page is only the WooCommerce shortcode host. Current visual and interaction ownership is in the child theme and WooCommerce lifecycle, not the page editor.

The active child-theme Checkout override directory contains only:

```text
woocommerce/checkout/form-checkout.php
woocommerce/checkout/thankyou.php
```

No child-theme overrides exist for:

```text
woocommerce/checkout/form-pay.php
woocommerce/checkout/payment.php
woocommerce/checkout/review-order.php
```

CartFlows 2.1.19 is active as a plugin but no Flow exists. It is not the current `/checkout-2-2/` structure owner.

## 4. Current live SAFE5 ownership

### 4.1 `form-checkout.php`

The current override directly creates:

```text
Step 1 Information
Step 2 Shipping
Step 3 Payment
Step 4 Review
```

It calls native WooCommerce billing, shipping, payment and order-review functions/hooks, so commerce authority remains WooCommerce-owned.

However, this live four-step structure conflicts with the now accepted Project 2 business progression:

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

The current live `Step 4 Review` is therefore legacy structure. It must not survive the Project 2 reconstruction as a fifth/business confirmation stage.

### 4.2 `checkout-safe5.js`

This file is the active client-side SAFE5 state owner. It:

```text
- switches the four views
- blocks forward step-bar navigation
- performs additional field/email/shipping/payment checks
- mirrors native WooCommerce shipping methods
- fills the Review summary
- moves the real WooCommerce `.place-order` row from the payment block into Step 4
- intercepts form submission in capture phase
- requires current step 4 before allowing submission
- handles terms errors on Step 4
- listens to WooCommerce `updated_checkout`
- listens to WooCommerce `checkout_error`
- triggers native `update_checkout`
- applies coupons through WooCommerce `apply_coupon` wc-ajax
```

This file preserves the native final submit element but currently relocates it into the rejected Review step. It is therefore a major migration owner, not a decorative script.

### 4.3 `checkout-safe5.css`

This is the scoped SAFE5 visual owner. It styles the current four-step shell, sticky summary, WooCommerce fields, payment block, coupon interface, notices, review blocks and the relocated place-order row.

It is the correct future location for Checkout-specific styling unless the reconstruction creates a newly named, isolated Checkout stylesheet.

### 4.4 `functions.php`

Current responsibilities include:

```text
- detect non-order-received Checkout
- enqueue checkout-safe5.css and checkout-safe5.js after shared assets
- remove legacy visual hooks on SAFE5 pages
- preserve WooCommerce billing/shipping/payment hooks
- add real order-summary product thumbnail/context output
- register older Checkout Customizer fields
- register Order Received / Thank You Customizer fields
```

The current SAFE5 template hardcodes much of its visible heading, step, summary and trust copy. The older `Spatial Flow Checkout Page` Customizer fields mainly feed hooks that SAFE5 removes. Their presence in the backend does not prove that current SAFE5 visible copy is editable.

### 4.5 `spatial-flow.js`

The shared script still has Checkout responsibilities:

```text
- open Terms/Privacy links in a new tab
- reapply link attributes after `updated_checkout`
- move and normalize WooCommerce Checkout notices
- listen to `updated_checkout` and `checkout_error`
```

These shared handlers overlap with SAFE5 notice handling and must be deliberately retained, migrated or removed. They cannot be ignored during reconstruction.

### 4.6 `spatial-flow.css`

The shared stylesheet contains substantial historical Checkout rules, including native form/grid/order-review/payment/notice selectors and a rule hiding `.woocommerce-NoticeGroup-checkout`.

The new SAFE5 stylesheet loads after it and overrides much of the old layer, but the historical rules remain an active cascade dependency. The reconstruction plan must identify which global Checkout blocks are obsolete and which shared rules remain required.

## 5. Current Thank You ownership

`woocommerce/checkout/thankyou.php` is the active order-received template override.

It preserves:

```text
- real WooCommerce order object
- real order number/date/email/total/items/addresses
- gateway-specific `woocommerce_thankyou_{gateway}` output
- general `woocommerce_thankyou` hooks
- failed-order payment URL
- backend-editable Order Received copy and links
```

It distinguishes `failed` from all other states, but all non-failed states currently enter the same success-like `Order Received` composition.

Therefore `pending` / `on-hold` are not given the accepted S7 Pending semantics. The current live template can present an unpaid/on-hold order with success-oriented content such as preparation and fulfillment language. This is a production semantic gap that must be corrected during the bounded reconstruction.

## 6. Active plugins and payment providers

The user supplied the current active-plugin screen. Relevant active plugins include:

```text
WooCommerce 10.4.3
WooPayments 10.4.0
Airwallex Online Payments Gateway 1.33.1
Spatial Flow Crypto Pay Trial 0.2.5
CartFlows 2.1.19
WPCode Lite 2.3.3
Elementor 3.34.1
Ultimate Addons for Elementor 2.8.1
Orders Tracking for WooCommerce 1.2.17
WebToffee WooCommerce PDF Invoices 4.9.0
YITH WooCommerce Wishlist 4.14.0
```

The payment-provider screen shows:

```text
Spatial Flow Crypto Pay: active
WooPayments: installed but requires action / setup completion
Airwallex: installed but requires action / setup completion
PayPal: not installed from this screen
Cash on delivery: available as a WooCommerce provider row; exact enabled state is not used as a hardcoded Project 2 assumption
```

Project 2 Step 03 must continue to render whatever gateways WooCommerce reports dynamically. It must not hardcode Crypto as the only permanent gateway.

## 7. Current Crypto plugin artifact

User supplied:

```text
spatial-flow-crypto-pay-trial-v0.2.5.zip
```

Independent ZIP SHA256:

```text
41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

This matches the previously recorded authoritative V0.2.5 baseline exactly.

Package contents:

```text
spatial-flow-crypto-pay/spatial-flow-crypto-pay.php
spatial-flow-crypto-pay/templates/crypto-pay-page.php
spatial-flow-crypto-pay/assets/crypto-pay.js
spatial-flow-crypto-pay/assets/crypto-pay.css
```

Both PHP files pass `php -l`.

Confirmed V0.2.5 runtime contract:

```text
Gateway ID: spatial_flow_crypto
Asset/network: fixed USDT on TRON/TRC20
Admin network mode: mainnet / Nile / Shasta
process_payment(): set order to on-hold
redirect: /crypto-pay/ page with order_id and raw WooCommerce order key
invoice creation: admin-post handler
transaction submission: admin-post handler
verification: server-side TronGrid
success: payment_complete(tx_hash)
result: canonical WooCommerce order-received URL
Sandbox: administrator-only simulated success path
```

The supplied current settings show:

```text
Gateway enabled
Network mode: Nile Testnet
Invoice expiry setting: 30 minutes
Minimum confirmations setting: 12
Sandbox/Test Mode: enabled
```

No private key or API secret is recorded in this repository document.

## 8. V0.2.5 capability boundary

Source search confirms V0.2.5 contains none of the future Workspace implementation:

```text
register_rest_route: absent
before_woocommerce_pay_form: absent
woocommerce_locate_template: absent
project2_workspace_enabled: absent
sf_crypto_workspace_token_epoch: absent
X-SF-Workspace-Token: absent
checkout/form-pay.php replacement: absent
```

The 30-minute invoice value is stored as an `expires_at` timestamp, but V0.2.5 has no worker/cron/monitor that autonomously transitions invoices to expired. Minimum confirmations is explicitly stored for a later worker version. The current Project 2 UI must not present an operational countdown, confirmation tracker or automatic monitoring claim.

V0.2.6.1 is not installed according to the supplied current artifact and plugin screen. The future Workspace flag and skeletons are not part of the current local runtime.

## 9. Residual configuration check

WPCode Lite is active and can inject PHP/CSS/JavaScript independently of the child-theme files. Before the ownership audit is declared exhaustive, the active WPCode snippet list must be checked for any snippet targeting:

```text
checkout
woocommerce_checkout
order-received / thankyou
payment gateways
crypto-pay
wc-ajax
```

This is a read-only configuration check. No snippet should be edited or disabled during the audit.

## 10. Current stop point

```text
Theme/template source verification: completed
Checkout page assignment: completed
CartFlows ownership check: completed; no Flow
Active plugin/payment evidence: completed
Crypto V0.2.5 artifact verification: completed
WPCode active-snippet ownership check: required final residual check
Source-backed reconstruction plan: not started
Plugin/workspace integration: not started
Checkout: Not done
```
