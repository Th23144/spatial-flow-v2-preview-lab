# Step 4F · R0 Baseline Capture and Rollback

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization and scope

User authorization:

```text
计划通过，开始 R0
```

R0 is documentation, evidence capture and rollback preparation only.

```text
Runtime source modification: prohibited
WordPress/WooCommerce configuration modification: prohibited
WPCode/CartFlows modification: prohibited
Crypto plugin modification: prohibited
Checkout: Not done
```

## 2. Exact uploaded source baseline

The current user-supplied files were copied into an external rollback package without altering content.

| Runtime path | Bytes | Lines | SHA256 | Validation |
|---|---:|---:|---|---|
| `functions.php` | 557249 | 10414 | `5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b` | `php -l`: pass |
| `assets/js/spatial-flow.js` | 78143 | 2242 | `7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b` | `node --check`: pass |
| `assets/css/spatial-flow.css` | 703035 | 23542 | `79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd` | tinycss2: 0 parse errors; braces/comments balanced |
| `assets/js/checkout-safe5.js` | 24463 | 780 | `45e5abf27de3f676bed64c44a0568a9135e0c1442a790f6fb890d7fbcbe681d0` | `node --check`: pass |
| `assets/css/checkout-safe5.css` | 20936 | 599 | `6316615551f3f732933881f07fa6c1c128a1a013aa4de3e5afce22dff471313a` | tinycss2: 0 parse errors; braces/comments balanced |
| `woocommerce/checkout/form-checkout.php` | 9140 | 278 | `5ffb8eab32114354a7c40e2613bc03ccbcf72275217d6f50f5eca9ce35668b5f` | `php -l`: pass |
| `woocommerce/checkout/thankyou.php` | 23174 | 341 | `6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa` | `php -l`: pass |
| `spatial-flow-crypto-pay-trial-v0.2.5.zip` | 16378 | — | `41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f` | authoritative V0.2.5 artifact previously verified |

Newline preservation was also recorded:

```text
LF: functions.php, spatial-flow.js, spatial-flow.css, thankyou.php
CRLF: checkout-safe5.js, checkout-safe5.css, form-checkout.php
```

## 3. External rollback package

Package name:

```text
project2-checkout-r0-baseline-20260802.zip
```

Package SHA256:

```text
5eb98b952a19a7de000cfc870f3750cb15b3237e543e93dea284e78e7a36f45c
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

R1 rollback rule remains atomic:

```text
form-checkout.php
+ checkout-safe5.js
+ checkout-safe5.css
```

These three coupled files must be restored together if R1 is rolled back.

## 4. Configuration evidence already confirmed

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

Payment-provider screen evidence records:

```text
Spatial Flow Crypto Pay: active
WooPayments: installed, setup/action incomplete
Airwallex: installed, setup/action incomplete
PayPal: not installed from the supplied screen
Cash on delivery: provider row present
```

This screenshot evidence is sufficient for ownership, but R0 still requires a machine-readable current gateway list/order before R1.

## 5. Remaining R0 evidence gates

### A. Current saved theme mods

Export only current saved keys beginning with:

```text
sf_checkout_
sf_order_received_
```

Defaults declared in source are not a substitute for current database values.

### B. Current dynamic gateway list/order

Export gateway ID, display title, enabled state and current WooCommerce order. Do not export gateway secrets.

### C. Baseline functional smoke test

Before any source edit, record current behavior:

```text
Cart reaches /checkout-2-2/
Step 01 fields render
shipping methods and totals update
payment gateways render dynamically
legacy Review-step Place Order can create an order
Crypto Sandbox creates on-hold order and enters /crypto-pay/
current order-received page loads
```

Passing this test does not accept the old design. It proves the rollback baseline.

## 6. Current status

```text
R0 file manifest: completed
R0 syntax/parser verification: completed
R0 external rollback ZIP: completed
R0 page/plugin ownership evidence: completed
R0 saved theme-mod export: pending
R0 dynamic gateway export: pending
R0 functional smoke test: pending
R1: blocked and not started
Runtime source modification: none
Checkout: Not done
```
