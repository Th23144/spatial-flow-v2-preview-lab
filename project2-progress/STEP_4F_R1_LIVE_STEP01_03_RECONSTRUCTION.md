# Step 4F · R1 Live Checkout Reconstruction

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Current authority

```text
R0: completed and closed
R1: authorized, installed and under local runtime validation
Checkout: Not done
```

R1 runtime scope remains limited to:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

R1 does not modify:

```text
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
woocommerce/checkout/thankyou.php
WPCode
CartFlows
WooCommerce page assignment / URL / shortcode
Spatial Flow Crypto Pay Trial V0.2.5
gateway configuration
```

## 2. Locked V2 operation flow

```text
01 Address
→ 02 Shipping
→ 03 Payment
→ 04 Confirmed
```

Meaning:

```text
- Address, Shipping and Payment are the only interactive Checkout views.
- Confirmed remains visible as the fourth progress/result stage.
- Confirmed is non-interactive on Checkout.
- no Step-04 input or Review page exists.
- the WooCommerce order-received/result page is the real server-owned Step 04.
```

All live operation experience must ultimately match the accepted Project 2 V2 repository references strictly.

## 3. Installed source state

Authoritative package record:

```text
project2-progress/STEP_4F_R1_V2_FLOW_AUDITED_PACKAGE.md
```

Installed package:

```text
project2-checkout-r1-v2-flow-audited-20260802.zip
SHA256: c2a7cfce51fd8e404ede7f9854df178169167f55fe666d97b9c0df59bb2c27f4
```

Installed source audit:

| File | R0 baseline | Installed candidate |
|---|---:|---:|
| `form-checkout.php` | 9,140 bytes / 278 lines | 7,787 bytes / 237 lines |
| `checkout-safe5.js` | 24,463 bytes / 780 lines | 20,659 bytes / 668 lines |
| `checkout-safe5.css` | 20,936 bytes / 599 lines | 20,931 bytes / 599 lines |

Post-install bounded Step-03 CSS correction:

```text
checkout-safe5.css
21,238 bytes / 609 lines
SHA256: adcd779a7e41676096fc40ae75cf67174ee038d156f853c5873c5528807d5d73
```

The correction only normalizes the native Step-03 `.place-order` host and injected trust section. It does not change breakpoints, field grids, shared CSS, PHP or JavaScript.

## 4. Runtime evidence records

```text
project2-progress/STEP_4F_R1_V2_FLOW_RUNTIME_INSTALLATION_EVIDENCE.md
project2-progress/STEP_4F_R1_STEP02_SHIPPING_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1_STEP03_PAYMENT_LAYOUT_REGRESSION.md
project2-progress/STEP_4F_R1_TERMS_REJECTION_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1_NORMAL_ORDER_RESULT_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1_NORMAL_ORDER_DUPLICATE_CHECK.md
project2-progress/STEP_4F_R1_CRYPTO_REDIRECT_RUNTIME_EVIDENCE.md
```

## 5. Runtime results completed

### Step 01

```text
- /checkout-2-2/ loads
- Address / Shipping / Payment / Confirmed progress renders
- Address is active
- old Review progress is absent
- billing/contact fields and Order Summary render
```

### Step 02

```text
- Address becomes complete
- Shipping becomes active
- one WooCommerce shipping method renders
- subtotal $36.00 + shipping $8.99 = total $44.99
```

Open strict-V2 copy defect:

```text
BACK TO INFORMATION
must become
BACK TO ADDRESS
```

### Step 03

```text
- both enabled gateways render: 测试 + Pay with Crypto
- one native Place Order control renders
- Terms/privacy content renders
- Order Summary remains visible
```

The initial trust-card min-content collapse was corrected by one bounded CSS replacement. The corrected screenshot shows normal card width and page height.

### Terms rejection

```text
- unchecked Terms blocks submission
- Payment remains active
- error remains visible in Step 03
- no Confirmed or Crypto navigation occurs
```

### Normal test gateway

```text
Observed order: #3575
Gateway: 测试
Total: $44.99
Status: On hold
Route: Step 03 → native WooCommerce order-received result
```

No separate client Review/Confirmed form appeared. The result page is the real Step 04.

Order-list evidence shows `#3575` as the only new latest order, with the preceding order `#3574` created about 17 hours earlier. No visible same-time duplicate order was created.

### Crypto gateway

```text
Observed order: #3576
Route: /crypto-pay/
Order total: USD 44.99
Network: TRON Nile Testnet
Token: Test USDT
Generate Payment Invoice control: rendered
```

The WooCommerce order key visible in the screenshot was not recorded in GitHub.

Classification:

```text
Crypto gateway selection: passed
native Step-03 submit: passed
legacy /crypto-pay/ redirect: passed
V0.2.5 initial page render: passed
```

Invoice generation and Sandbox completion were not repeated in this R1 gate; they were already baseline-tested in R0 and belong to the later dedicated Crypto regression group.

## 6. Result-page defect retained for R4

The normal `On hold` order still receives preparation/fulfilment/shipping language on the result page.

```text
Owner: R4 server-authoritative result-state mapping
```

This does not invalidate the R1 route test, but the Checkout page remains `Not done`.

## 7. Remaining R1 gates

```text
1. Correct BACK TO INFORMATION → BACK TO ADDRESS.
2. Recheck malformed-email blocking after the R1 source change.
3. Directly observe address-driven shipping/totals recalculation.
4. Observe selected shipping-rate persistence after updated_checkout.
5. Perform 1366 / 390 / 360 runtime review.
6. Execute bounded strict V2 visual migration; current SAFE5 visual is not final 1:1.
```

Coupon code remains source-unchanged and will receive its planned later commerce regression.

## 8. Current stop point

```text
R1 core three-stage architecture: passed
normal order route: passed
visible duplicate-order check: passed
Crypto /crypto-pay/ redirect: passed
R1 remaining interaction/copy gates: open
R1 strict V2 visual migration: not started
R2: blocked
Checkout: Not done
```

Next bounded action:

```text
Correct the Step-02 back label with one anchored template replacement,
then continue the remaining R1 interaction checks before visual migration.
```
