# Step 4F · R1 Step-03 Payment V2 Read-Only Delta Audit

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

Begin the next bounded R1 group after Step-02 Shipping V2 closure.

This record is a **read-only audit**. It does not authorize or perform any live PHP, JavaScript, CSS, WooCommerce gateway, Crypto-plugin, CartFlows or WPCode change.

## Current authority hierarchy

The accepted visual authority for Step 03 remains:

```text
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-context-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
preview/spatial-flow-checkout-payment-host-v1.css
```

However, live commerce truth is higher authority than static prototype behavior:

```text
- WooCommerce supplies available / eligible gateways.
- WooCommerce owns gateway fields, validation, nonces and checkout submission.
- the real native #place_order remains the single final Checkout commitment control inside Step 03.
- current Spatial Flow Crypto Pay Trial V0.2.5 remains untouched in R1.
- current Crypto order creation / process_payment() path remains the legacy /crypto-pay/ redirect.
```

Therefore the old static S5 / dedicated-workspace prototype must **not** be imported as new live plugin behavior during this Step-03 visual migration.

## Already validated live Step-03 behavior

Earlier R1 functional reconstruction already runtime-validated:

```text
- dynamic native gateways render
- native Place Order appears once in Step 03
- Terms rejection remains blocking
- normal test gateway creates one order only
- Crypto creates one on-hold order and redirects to /crypto-pay/
```

Step-03 V2 must preserve these behaviors.

## Current live source shape

Current `form-checkout.php` Step 03 is still a minimal generic host:

```text
Step 3 · Payment
Payment method
[woocommerce_checkout_payment()]
← Back to shipping
```

The native WooCommerce payment block is correctly retained. This is the proper operational owner and should be visually migrated rather than replaced by a synthetic gateway list.

Current Step-03 Intro still reuses Step-01 values:

```text
H1 fallback: Checkout
intro fallback: Use a protected checkout flow...
```

Current Step-03 context behavior:

```text
[data-sf-safe5-shipping-context] is shown only for Step 02
Step 03 therefore does not currently show the accepted final Address / Contact / Shipping confirmation context
```

Current payment CSS remains older SAFE5 styling:

```text
#payment: white / rounded surface
payment_methods: generic native list
payment_box: rounded soft box
#place_order: pill-shaped button
```

This diverges from the accepted flat / editorial Step-03 reference and from the square Mobile Commerce surface language.

## Accepted Step-03 visual target

The static reference establishes:

```text
Secure checkout · Step 03 of 04
Choose the payment.
Complete payment here. Order confirmation appears only after the selected gateway has been verified.

Payment · 03
How should it settle?

real eligible payment methods
selected gateway-owned content / fields
one final native Place Order action
← Back to Shipping

right-side context:
- Deliver to
- Contact
- Shipping method

shared Order Summary
```

The static prototype contains Crypto-specific descriptor copy because Cryptocurrency was the only confirmed method when that artifact was created. The live page must not hardcode that descriptor or hide other currently eligible WooCommerce gateways.

## Live implementation rule for gateway extensibility

Step 03 must remain count-agnostic and gateway-agnostic:

```text
1 gateway available  -> 1 native method surface
2 gateways available -> 2 native method surfaces
N gateways available -> N native method surfaces
```

No fixed gateway count, gateway ID, gateway label, price, icon or method order may be encoded into the theme presentation.

Unknown future eligible gateways must retain a safe native rendering path.

### Important consequence

Do **not** port `spatial-flow-checkout-payment-host-v1.js` as a parallel live gateway registry.

The live registry already exists: WooCommerce.

Theme JavaScript may improve presentation/state only where required, but must not create a second source of gateway truth.

## Step-03 context target

The accepted Step-03 context differs from Step 02:

```text
Step 02:
- Deliver to
- Contact

Step 03:
- Deliver to
- Contact
- confirmed Shipping method
```

Live values must come from existing Checkout state:

```text
address/contact -> Step-01 native WooCommerce fields
shipping method -> currently selected native shipping_method
shipping cost -> WooCommerce-rendered method / total truth when available
```

Do not copy prototype customer data or prototype delivery estimates.

## Backend-editability delta

Current SAFE5 backend copy ownership already includes only the basic Step-03 items:

```text
Step 03 card small label
Step 03 card title
Back to Shipping button text
```

Step-03 V2 still needs normal presentation-copy ownership for the new visible surfaces, expected at minimum:

```text
Step 03 Intro title
Step 03 Intro description
Payment panel kicker
Payment panel title
Payment panel description
Step-03 context Shipping-method label
Step-03 context Shipping edit action
```

Gateway names, gateway descriptions supplied by plugins, secure-field text, Terms text, Place Order operational output and validation errors remain WooCommerce/gateway owned and must not be converted into hard-coded theme copy.

## Expected bounded source scope

Based on the static/source comparison, the likely Step-03 V2 implementation unit is:

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

This is an audit conclusion only. Exact patch boundaries will be locked after runtime baseline evidence.

Excluded:

```text
assets/js/spatial-flow.js
assets/css/spatial-flow.css
woocommerce/checkout/thankyou.php
Spatial Flow Crypto Pay Trial V0.2.5
WooCommerce gateway configuration
CartFlows
WPCode
R2 notice/error styling
Order Summary full migration
```

## Do not change in Step-03 V2

```text
- no fake Card / Apple Pay / Google Pay / PayPal entries
- no hard-coded Cryptocurrency-only page
- no synthetic replacement #place_order
- no second generic Review / Confirm page
- no S5 / V0.2.6.1 Workspace implementation
- no raw card-field collection by theme code
- no payment-success decision in browser JavaScript
- no Order Summary full redesign in this group
```

## Remaining runtime facts required before code

Source alone cannot safely establish the exact current native payment DOM produced by the enabled gateways.

Before any Step-03 code patch, capture the current live Step 03 at:

```text
1366px desktop
390px mobile
```

Evidence must include:

```text
- Step-03 Intro
- all currently visible eligible gateway rows
- the currently selected gateway's expanded/native payment content
- Terms/privacy area if present
- the single native Place Order button
- Back to Shipping
- right-side context / Order Summary
```

If more than one gateway is currently available, the baseline should also identify each visible gateway name. No gateway settings need to be changed for this audit.

## Current decision

```text
R1 Step-01: closed
R1 Step-02 Shipping V2: closed
R1 Step-03 Payment V2: read-only delta audit complete
Step-03 code modification: NOT STARTED
Immediate next action: runtime Step-03 baseline evidence at 1366 / 390
Checkout: Not done
```
