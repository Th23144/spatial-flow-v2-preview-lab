# Step 4F · R0 Baseline Capture and Rollback

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization and scope

User authorization:

```text
计划通过，开始 R0
```

R0 was documentation, evidence capture and rollback preparation only.

```text
Runtime source modification: none
WordPress/WooCommerce configuration modification: none
WPCode/CartFlows modification: none
Crypto plugin modification: none
Checkout: Not done
```

## 2. Exact uploaded source baseline

| Runtime path | Bytes | Lines | SHA256 | Validation |
|---|---:|---:|---|---|
| `functions.php` | 557249 | 10414 | `5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b` | `php -l`: pass |
| `assets/js/spatial-flow.js` | 78143 | 2242 | `7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b` | `node --check`: pass |
| `assets/css/spatial-flow.css` | 703035 | 23542 | `79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd` | tinycss2: 0 parse errors; braces/comments balanced |
| `assets/js/checkout-safe5.js` | 24463 | 780 | `45e5abf27de3f676bed64c44a0568a9135e0c1442a790f6fb890d7fbcbe681d0` | `node --check`: pass |
| `assets/css/checkout-safe5.css` | 20936 | 599 | `6316615551f3f732933881f07fa6c1c128a1a013aa4de3e5afce22dff471313a` | tinycss2: 0 parse errors; braces/comments balanced |
| `woocommerce/checkout/form-checkout.php` | 9140 | 278 | `5ffb8eab32114354a7c40e2613bc03ccbcf72275217d6f50f5eca9ce35668b5f` | `php -l`: pass |
| `woocommerce/checkout/thankyou.php` | 23174 | 341 | `6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa` | `php -l`: pass |
| `spatial-flow-crypto-pay-trial-v0.2.5.zip` | 16378 | — | `41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f` | authoritative V0.2.5 artifact verified |

Newline preservation:

```text
LF: functions.php, spatial-flow.js, spatial-flow.css, thankyou.php
CRLF: checkout-safe5.js, checkout-safe5.css, form-checkout.php
```

## 3. External rollback package

```text
Package: project2-checkout-r0-baseline-20260802.zip
SHA256: 5eb98b952a19a7de000cfc870f3750cb15b3237e543e93dea284e78e7a36f45c
```

Contents:

```text
README.txt
manifest.json
theme/functions.php
theme/assets/js/spatial-flow.js
theme/assets/js/checkout-safe5.js
theme/assets/css/spatial-flow.css
theme/assets/css/checkout-safe5.css
theme/woocommerce/checkout/form-checkout.php
theme/woocommerce/checkout/thankyou.php
plugin/spatial-flow-crypto-pay-trial-v0.2.5.zip
```

This package is external to the repository and does not pollute the runtime project.

R1 atomic rollback unit:

```text
form-checkout.php
+ checkout-safe5.js
+ checkout-safe5.css
```

These three files are coupled and must be restored together if R1 is rolled back.

## 4. Confirmed page/plugin baseline

```text
WooCommerce Cart page: Cart, ID 622
WooCommerce Checkout page: Checkout, ID 623
Checkout URL: /checkout-2-2/
Checkout page body: [woocommerce_checkout]
CartFlows: active plugin, no Flow exists
WPCode: no Checkout/payment/Crypto owner
Crypto gateway: Spatial Flow Crypto Pay Trial V0.2.5
Current supplied Crypto mode: Nile Testnet + Sandbox enabled
```

## 5. Saved configuration exports

Authoritative snapshot:

```text
project2-progress/STEP_4F_R0_CONFIGURATION_SNAPSHOT.md
```

Source artifacts:

```text
r0-theme-mods.json
Bytes: 29488
SHA256: 4e8d4b6d6fd7c8a1146e8488dd21ea1ef0a9a4a993fe453d4020443fb74e63af

r0-gateway-order.json
Bytes: 1478
SHA256: 96f0ac37903eac3aec13f95ff11046e9dcdbd587d45416b420c2af2f9906675c

r0-runtime-gateways.json
Bytes: 3959
SHA256: 19115bd99a69b9f870482777ecf14bcecf01485ce947908597edcfb44d6dee9a
```

All three parse as valid JSON.

Relevant saved theme-mod result:

```text
Complete theme-mod keys: 395
Saved sf_checkout_* keys: 1
Saved sf_order_received_* keys: 32
Total relevant saved keys: 33
```

The only saved Checkout key is:

```text
sf_checkout_payment_note = ""
```

The 32 saved Order Received values are preserved in the configuration snapshot. Their current copy is strongly success/fulfillment-oriented; R4 must preserve the values before adding server-status-specific result families.

## 6. Gateway baseline

Administrative order option:

```text
woocommerce_gateway_order entries: 58
woocommerce_payments: 1
bacs: 22
cod: 24
airwallex_main: 50
spatial_flow_crypto: 57
```

Runtime registered gateways:

```text
Registered objects: 30
Enabled objects: 2
```

Enabled:

```text
bacs
Title: 测试
Enabled: yes

spatial_flow_crypto
Title: Pay with Crypto
Enabled: yes
```

Important disabled baselines:

```text
woocommerce_payments / Card: no
cod / Cash on delivery: no
airwallex_main / Pay with cards and more: no
```

The exported gateway-object `order` property is null, while the separate WooCommerce option preserves administrative order. Actual front-end availability was confirmed during Test A: both enabled gateways rendered for the tested cart/session.

## 7. Functional smoke-test baseline

Authoritative record:

```text
project2-progress/STEP_4F_R0_FUNCTIONAL_SMOKE_TEST.md
```

### Test A — normal WooCommerce legacy path

```text
Gateway: bacs / 测试
Observed order: #3571
Total: $44.99
Resulting state: on-hold
Step 03 dynamic gateways: 测试 + Pay with Crypto
Legacy Review: reachable
Native Place Order: produced the observed WooCommerce order
Current result template: loaded
```

Confirmed runtime defect:

```text
on-hold order
→ still shown with preparation, fulfillment-queue and On The Way language
```

This defect is carried into R4.

### Test B — Crypto V0.2.5 Sandbox path

```text
Gateway: spatial_flow_crypto / Pay with Crypto
Observed order: #3574
Order total: $20.99
Legacy route: /crypto-pay/
Network: TRON Nile Testnet / TRC20
Asset: Test USDT
Invoice interface: loaded
Pre-success UI state: Waiting Payment
Administrator-only Sandbox success control: present
Sandbox result state: Processing
Canonical WooCommerce result template: loaded
Sandbox simulation notice: displayed
```

Evidence boundary:

```text
- the pre-success WooCommerce admin status was not separately screenshotted
- V0.2.5 source sets the order to on-hold and the live page showed Waiting Payment
- the final Processing state and Sandbox note were visible in the rendered order result
- no separate admin order-notes screenshot was supplied
- full order keys, receiver address, invoice ID and simulated reference are intentionally not stored in GitHub
```

## 8. Known baseline limits retained for later regression

The following were not independently captured during R0 and remain mandatory R1/R7 regression cases:

```text
- malformed-email blocking screenshot
- exact shipping recalculation transition
- explicit duplicate-order audit
- separate WooCommerce admin order screen for Test A and Test B
- gateway-decline/server-error states
```

These evidence limits do not invalidate the pre-change baseline. They must not be misrepresented as already passed.

## 9. R0 closure

```text
R0 file manifest: completed
R0 syntax/parser verification: completed
R0 external rollback ZIP: completed
R0 page/plugin ownership evidence: completed
R0 saved theme-mod export: completed
R0 gateway order export: completed
R0 runtime registered/title/enabled export: completed
R0 Test A normal order path: recorded
R0 Test B Crypto Sandbox path: recorded
R0 functional smoke test: completed
R0: closed
R1: not authorized and not started
Runtime source modification: none
Checkout: Not done
```

R0 closure does not approve the current four-step design, current result semantics or any production readiness claim. It only establishes the exact rollback and pre-change functional baseline.
