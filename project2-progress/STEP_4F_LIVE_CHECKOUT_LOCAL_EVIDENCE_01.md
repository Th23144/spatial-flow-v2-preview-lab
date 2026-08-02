# Project 2 · Live Checkout Local Evidence 01

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Scope

Read-only current-local evidence for the Live Checkout ownership audit.

No WordPress, WooCommerce, CartFlows, theme, database or payment-plugin source was modified.

## Confirmed WooCommerce page ownership

The user supplied current WordPress/WooCommerce screenshots confirming:

```text
Cart page: Cart (ID: 622)
Checkout page: Checkout (ID: 623)
Checkout page content: [woocommerce_checkout]
Live Checkout URL: /checkout-2-2/
Order-pay endpoint: order-pay
Order-received endpoint: order-received
```

Conclusion:

```text
- WordPress page ID 623 is the WooCommerce Checkout entry shell.
- The page body does not own the SAFE5 visual structure.
- The live browser route from Cart reaches /checkout-2-2/.
- WooCommerce endpoint ownership remains active.
```

## Confirmed CartFlows status

The user confirmed:

```text
CartFlows → Flows: no Flow exists
```

Conclusion:

```text
- No CartFlows Flow or Checkout Step owns /checkout-2-2/.
- CartFlows does not currently provide the Checkout structure, page routing or Thank You step.
- The CartFlows evidence item is closed unless a future source/plugin conflict proves otherwise.
```

## Confirmed current theme/template ownership

The current uploaded local source contains:

```text
woocommerce/checkout/form-checkout.php
woocommerce/checkout/thankyou.php
assets/css/checkout-safe5.css
assets/js/checkout-safe5.js
assets/css/spatial-flow.css
assets/js/spatial-flow.js
functions.php
```

Confirmed high-level ownership:

```text
form-checkout.php:
SAFE5 Checkout structure and current four-surface UI markup

checkout-safe5.js:
step navigation, front-end field validation, shipping-method mirror,
payment selection validation, review-value projection, WooCommerce place-order relocation,
Checkout notice bridging and WooCommerce checkout event integration

checkout-safe5.css:
SAFE5 Checkout-specific visual layer

thankyou.php:
current WooCommerce order-received template override using real WC_Order data

functions.php:
SAFE5 asset enqueueing, old visual-hook removal, shared WooCommerce/theme callbacks,
Customizer registration and result-page copy helpers
```

## Checkout Customizer evidence

The user supplied a current Customizer screenshot showing:

```text
Spatial Flow Checkout Page
```

with controls including:

```text
Show checkout intro
Intro small label
Intro description
Intro badge text
Coupon label
Coupon link text
Payment placeholder note
Payment badge text
Show checkout trust cards
```

Important audit boundary:

```text
The existence of these controls does not prove the current SAFE5 form-checkout.php reads them.
The current SAFE5 template contains substantial visible copy directly in template markup.
Backend-editability mapping must therefore be verified field by field before reconstruction.
```

## Current remaining evidence

Still required:

```text
1. Current active-plugin list with names, versions and enabled state.
2. Current installed spatial-flow-crypto-pay plugin folder ZIP/source.
3. WooCommerce payment-method list showing current enabled gateways and order.
4. Current Spatial Flow Crypto gateway settings, including Sandbox/network and Project 2 Workspace flag values.
```

Secrets, private keys, API secrets and seed phrases must not be uploaded.

## Current stop point

```text
WooCommerce Checkout page assignment: confirmed
Live /checkout-2-2/ route: confirmed
CartFlows Flow ownership: absent / closed
Current SAFE5 theme-source bundle: received
Active-plugin and installed Crypto-plugin runtime evidence: required next
Checkout: Not done
```
