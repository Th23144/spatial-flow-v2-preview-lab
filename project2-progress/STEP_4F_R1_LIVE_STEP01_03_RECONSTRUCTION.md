# Step 4F · R1 Live Step 01–03 Reconstruction

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization

User instruction:

```text
不需要补 on-hold 证据就开始 R1
```

Decision:

```text
Additional on-hold screenshot: not required
R0: already closed with explicit evidence boundary
R1: authorized and started
Checkout: Not done
```

## 2. Atomic R1 scope

Only these three coupled runtime files may change:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

Prohibited in R1:

```text
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
woocommerce/checkout/thankyou.php
WPCode
CartFlows
WooCommerce page ID / URL / shortcode
Spatial Flow Crypto Pay Trial V0.2.5
payment gateway configuration
```

## 3. Verified baseline

```text
form-checkout.php
SHA256: 5ffb8eab32114354a7c40e2613bc03ccbcf72275217d6f50f5eca9ce35668b5f

checkout-safe5.js
SHA256: 45e5abf27de3f676bed64c44a0568a9135e0c1442a790f6fb890d7fbcbe681d0

checkout-safe5.css
SHA256: 6316615551f3f732933881f07fa6c1c128a1a013aa4de3e5afce22dff471313a
```

These match the closed R0 rollback manifest.

Atomic rollback unit:

```text
form-checkout.php
+ checkout-safe5.js
+ checkout-safe5.css
```

Never deploy or roll back only one of the three.

## 4. Locked R1 outcome

Replace the current live progression:

```text
Information
→ Shipping
→ Payment
→ Review
```

with:

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
```

Required behavior:

```text
- remove Review as a live input/navigation step
- keep native WooCommerce billing/contact output in Step 01
- keep native WooCommerce shipping fields/rates in Step 02
- keep native WooCommerce dynamic payment gateways in Step 03
- keep the real .place-order / #place_order inside Step 03
- remove JavaScript relocation of .place-order
- remove the rule requiring Step 4 before form submission
- preserve native WooCommerce checkout submit, nonce, AJAX, gateway fields and redirects
- preserve the existing server-backed coupon path
- preserve V0.2.5 legacy /crypto-pay/ handoff
- preserve early client validation only as a UX guard
```

## 5. Static visual contract used in R1

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
```

The real page must preserve WooCommerce dynamic output while migrating toward the approved frame, typography, spacing, 7fr/5fr shell and Step 01–03 hierarchy. Final strict visual closure remains R8.

## 6. Current execution point

```text
R1 authorization: recorded
R1 source analysis: in progress
R1 runtime deployment: not yet performed
R1 browser acceptance: not yet performed
R2: blocked
Checkout: Not done
```
