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

Only Address, Shipping and Payment are interactive Checkout views. Confirmed is a visible, non-interactive result stage. The WooCommerce order-received/result page is the real server-owned Step 04. No client Review or Step-04 input page may exist.

All live operation experience must ultimately match the accepted Project 2 V2 repository references strictly.

## 3. Installed source state

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

Post-install bounded corrections:

```text
checkout-safe5.css
→ 21,238 bytes / 609 lines
→ Step-03 native place-order/trust host normalization only

form-checkout.php
→ BACK TO INFORMATION changed to BACK TO ADDRESS
```

## 4. Runtime evidence records

```text
project2-progress/STEP_4F_R1_V2_FLOW_RUNTIME_INSTALLATION_EVIDENCE.md
project2-progress/STEP_4F_R1_STEP02_SHIPPING_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1_STEP03_PAYMENT_LAYOUT_REGRESSION.md
project2-progress/STEP_4F_R1_TERMS_REJECTION_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1_NORMAL_ORDER_RESULT_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1_NORMAL_ORDER_DUPLICATE_CHECK.md
project2-progress/STEP_4F_R1_CRYPTO_REDIRECT_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1_BACK_TO_ADDRESS_COPY_CORRECTION.md
project2-progress/STEP_4F_R1_MALFORMED_EMAIL_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1_GLOBAL_FLAT_RATE_TEST_DECISION.md
```

## 5. Runtime results completed

### Step 01

```text
- Address / Shipping / Payment / Confirmed progress renders
- old Review progress is absent
- billing/contact fields and Order Summary render
- malformed email remains blocked with visible notice
```

### Step 02

```text
- Address becomes complete
- Shipping becomes active
- one WooCommerce shipping method renders
- subtotal $36.00 + shipping $8.99 = total $44.99
- BACK TO ADDRESS copy and return behavior passed
```

### Step 03

```text
- both enabled gateways render: 测试 + Pay with Crypto
- one native Place Order control renders
- Terms/privacy content renders
- Order Summary remains visible
- initial trust-card collapse was corrected by one bounded CSS replacement
```

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
Visible duplicate-order check: passed
```

### Crypto gateway

```text
Observed order: #3576
Route: /crypto-pay/
Order total: USD 44.99
Network: TRON Nile Testnet
Token: Test USDT
Legacy Crypto redirect: passed
```

## 6. Global flat-rate shipping decision

The user confirmed the current business configuration is one global flat rate:

```text
Shipping: $8.99 worldwide
```

Therefore a destination change is not expected to change the shipping amount. Requiring a visible price change would be an invalid acceptance criterion.

R1 decision:

```text
- no country-change test is required to force a different rate
- unchanged $8.99 is correct under the current configuration
- selected-rate persistence with only one available global rate is not a discriminating R1 gate
- address-driven/multiple-rate AJAX behavior is deferred to R7 full WooCommerce regression
```

This gate must be reactivated if multiple rates, shipping zones, destination taxes, free-shipping thresholds or dynamic shipping plugins are introduced.

## 7. Result-page defect retained for R4

The normal `On hold` order still receives preparation/fulfilment/shipping language on the result page.

```text
Owner: R4 server-authoritative result-state mapping
```

## 8. Current stop point

```text
R1 core three-stage architecture: passed
normal order route: passed
visible duplicate-order check: passed
Crypto /crypto-pay/ redirect: passed
BACK TO ADDRESS correction: passed
malformed-email blocking: passed
global flat-rate amount-change test: not required
single-rate persistence test: not required in R1
responsive 1366 / 390 / 360 review: open
strict V2 visual migration: not started
R2: blocked
Checkout: Not done
```

Next bounded action:

```text
Begin R1-D strict V2 visual migration planning from the accepted repository references,
then validate at 1366 / 390 / 360 after each bounded visual group.
```
