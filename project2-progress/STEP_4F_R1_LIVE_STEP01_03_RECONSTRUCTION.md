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

| File | R0 baseline SHA256 | R1 candidate SHA256 | Candidate bytes | Candidate lines |
|---|---|---|---:|---:|
| `woocommerce/checkout/form-checkout.php` | `5ffb8eab32114354a7c40e2613bc03ccbcf72275217d6f50f5eca9ce35668b5f` | `fd351ad5be21f1ec100ca4991ceb09f452814162407bd0b9a7143058b7172961` | 9107 | 269 |
| `assets/js/checkout-safe5.js` | `45e5abf27de3f676bed64c44a0568a9135e0c1442a790f6fb890d7fbcbe681d0` | `6ae7c10de07007767839f7a8ed097fc733d38905206d8f6a7559cce2dadaa873` | 24010 | 624 |
| `assets/css/checkout-safe5.css` | `6316615551f3f732933881f07fa6c1c128a1a013aa4de3e5afce22dff471313a` | `963c690458a9d92db974e6cc7f87802cc75b3443a000355a87125bc034364e59` | 34593 | 986 |

Newline format remains CRLF for all three files, matching the R0 baseline.

Atomic rollback unit:

```text
form-checkout.php
+ checkout-safe5.js
+ checkout-safe5.css
```

Never deploy or roll back only one of the three.

External candidate package:

```text
project2-checkout-r1-candidate-20260802.zip
SHA256: c07f000789690c25ea441411c43374e511e5f1a07fb0cf663c72b13574c0d08c
```

The package is external to the repository and contains:

```text
README.txt
manifest.json
STEP_4F_R1.patch
theme/woocommerce/checkout/form-checkout.php
theme/assets/js/checkout-safe5.js
theme/assets/css/checkout-safe5.css
```

The runtime source itself is not committed to this documentation/preview repository.

## 4. Implemented candidate changes

### Template

```text
- removes the live Review view and Review navigation item
- renders only Step 01 Contact / Address, Step 02 Shipping and Step 03 Payment
- preserves all existing native WooCommerce billing, shipping, order-review and payment calls/hooks
- keeps native woocommerce_checkout_payment() in Step 03
- keeps the real .place-order and #place_order in Step 03
- adds a non-authoritative completed-details context card for Steps 02–03
- keeps the server-backed coupon and order-summary output
```

### JavaScript

```text
- bounds navigation to three Checkout steps
- removes fillReview(), Review-state selectors and Step-4 navigation
- removes relocatePlaceOrder() and all Place Order movement
- removes the requirement that the form be on Step 4 before submission
- validates Step 01/02/03 only as a UX guard
- maps terms/payment errors to Step 03
- preserves WooCommerce submit, updated_checkout, checkout_error and coupon AJAX paths
- preserves the real shipping inputs as authority while mirroring presentation
- synchronizes completed contact/address/shipping context without deciding commerce state
- supports a different shipping address when the native WooCommerce checkbox is selected
```

### Isolated Checkout CSS

```text
- converts progress navigation to three columns
- removes Review/Place-Order-target styling
- styles the native Step-03 .place-order and #place_order in place
- migrates toward the approved 1440px frame, 56px gutters, 7fr/5fr shell and 80px gap
- uses the accepted unboxed editorial Step 01–03 hierarchy
- preserves dynamic WooCommerce fields, payment boxes, terms and order-review output
- includes 900px, 767px and 380px responsive handling
- does not touch shared spatial-flow.css
```

## 5. Offline validation

```text
form-checkout.php: php -l pass
checkout-safe5.js: node --check pass
checkout-safe5.css: tinycss2 parse errors = 0
CSS brace balance: 132 / 132
CSS comment balance: 1 / 1
```

Structural checks:

```text
- exactly three Checkout views remain
- no data-sf-safe5-view="4"
- no data-sf-safe5-next="4"
- no Review & Pay block
- no data-sf-safe5-review-* selectors
- no data-sf-safe5-place-order-target
- no fillReview()
- no relocatePlaceOrder()
- no current !== 4 submit guard
- native #place_order is styled only inside the Step-03 payment mount
```

Preserved native calls/hooks:

```text
woocommerce_before_checkout_form
woocommerce_checkout_before_customer_details
woocommerce_checkout_billing
woocommerce_checkout_shipping
woocommerce_checkout_payment
woocommerce_checkout_after_customer_details
woocommerce_checkout_before_order_review_heading
woocommerce_checkout_before_order_review
woocommerce_order_review
woocommerce_checkout_after_order_review
woocommerce_after_checkout_form
```

## 6. Static visual contract used in R1

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
```

The candidate preserves WooCommerce dynamic output while migrating toward the approved frame, typography, spacing, 7fr/5fr shell and Step 01–03 hierarchy. Final strict visual closure remains R8.

## 7. Required deployment and acceptance gate

The candidate has not yet been deployed to the local WordPress runtime.

After atomic replacement, stop and verify:

```text
- Step 01 required fields and malformed email
- Step 01 → Step 02
- address changes and update_checkout
- Step 02 shipping methods and selected-rate persistence
- Step 02 → Step 03
- current enabled gateways: 测试 + Pay with Crypto
- native Place Order appears exactly once in Step 03
- terms error remains in Step 03
- one-click normal test order creation
- Crypto order still redirects to legacy /crypto-pay/
- no duplicate order
- 1366×768, 390×844 and 360×800 screenshots
```

## 8. Current execution point

```text
R1 authorization: recorded
R1 atomic candidate: prepared
R1 offline syntax/structure validation: passed
R1 runtime deployment: waiting for user application
R1 browser acceptance: not started
R2: blocked
Checkout: Not done
```
