# Step 4F · R1 Step-02 Shipping Runtime Baseline and Implementation Scope

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

After the read-only Step-02 live-to-reference delta audit, the user supplied the requested current live screenshots at desktop and mobile widths before any Step-02 source edit.

Evidence supplied:

```text
Desktop: current live Step 02 Shipping
Mobile: current live Step 02 Shipping
```

## Runtime facts confirmed by screenshots

### 1. No visible duplicate Shipping-address form in Step 02

The current Step-02 live view shows:

```text
Step 2 · Delivery
Shipping Details
one visible worldwide flat-rate method
Back to Address
Continue to Payment
Order Summary
```

It does **not** visibly show a second first-name/address/country/state shipping-address field set.

Therefore the immediate Step-02 migration does not need to remove, relocate or visually suppress a duplicate address form merely to match the supplied baseline.

This is a screenshot-level runtime conclusion only. It does not redefine WooCommerce ownership or authorize deleting `woocommerce_checkout_shipping()` from the template.

### 2. Real live shipping method is present

The visible configured method is the current WooCommerce worldwide flat-rate method at `$8.99`.

The live label contains the store-configured method text and amount. This remains WooCommerce-owned data.

The static reference methods (`Standard tracked delivery`, `Priority tracked delivery`, `Studio collection`, `Free`, `$18.00`) remain prototype examples only and must not be copied into production.

### 3. Current Step-02 visual state is materially behind the accepted reference

Confirmed visible mismatches:

```text
- Intro still says Checkout instead of Step-02-specific Choose the journey.
- Intro supporting paragraph remains Step-01 copy.
- main Shipping surface is a white rounded card rather than the flat editorial panel.
- visible method is an unstructured rectangular text button rather than the accepted shipping-option card hierarchy.
- Before it leaves. address/contact confirmation context card is absent.
- desktop left/right visual balance differs from the accepted Step-02 reference.
- mobile Step-02 card is functional but still lacks the accepted method-card hierarchy and context card.
```

### 4. Existing navigation/order behavior is retained

The supplied screenshots confirm current placement:

```text
Desktop:
Shipping surface → actions on left
Order Summary on right

Mobile:
Shipping surface
→ Continue to Payment
→ Back to Address
→ Order Summary
```

The accepted mobile primary-before-secondary action order is retained.

## Implementation decision

The Step-02 migration will **not** start by changing WooCommerce shipping-field ownership.

The bounded implementation will concentrate on four presentation/coordination owners:

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

### Template responsibilities

Add/reshape only Step-02 presentation structure required for:

```text
- Step-02-specific Intro copy hooks
- flat editorial Shipping panel
- method mirror host
- Before it leaves. context card host
- existing Back to Address / Continue to Payment controls
```

WooCommerce native shipping authority remains untouched.

### JavaScript responsibilities

Keep the native `shipping_method` inputs as the sole source of truth.

Enhance the synchronized presentation layer so it can:

```text
- render the returned WooCommerce method as a structured Shipping option card
- preserve selected state
- relay click/change to the real native shipping method
- survive updated_checkout
- populate the Step-02 context card from the current native Step-01 customer values
- update Step-02-specific Intro presentation when Step 02 is active
- restore Step-01 Intro when navigating back
```

No browser-side shipping amount or availability truth may be invented.

### CSS responsibilities

Migrate only Step-02 visual surfaces toward the already accepted static authority:

```text
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-context-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

Required visual families:

```text
- flat editorial panel
- Shipping · 02 / How should it travel? hierarchy
- structured shipping-option card with selected state and price hierarchy
- Before it leaves. context card
- desktop two-column integration with existing shared shell
- mobile context → Shipping → actions → Summary order
```

### Backend-editability responsibilities

Step-02-specific presentation copy that does not already have an adequate SAFE5 setting must be added to the existing single `Spatial Flow Checkout Page` Customizer section.

No second admin system is permitted.

## Explicit exclusions

This group does not include:

```text
Step 03 Payment migration
R2 notice/error redesign
Order Summary full visual migration
Coupon lifecycle changes
Thank You/result states
Crypto plugin changes
shared spatial-flow.css cleanup
CartFlows
WPCode
payment gateway configuration
```

## Current rollback/source baseline

```text
functions.php
575,903 bytes
SHA256: 48fb027223df748a23c33cff312fb45fd5437ec197a539d70eae71ac37f21fb8

woocommerce/checkout/form-checkout.php
13,700 bytes
SHA256: cdfe9d5981d0a30c0487ae27774e4327d62d67c2fb2aa57a57657dace73596f0

assets/js/checkout-safe5.js
24,772 bytes
SHA256: 7d0fb1c816f565cafcd19d88be01142c95fd025b61708609cd8654b9d8d20c0d

assets/css/checkout-safe5.css
47,086 bytes
SHA256: d0377342d32702a0da0227bf354829962d4b4cd4feef96acf3cf7a77f29dc472
```

## Next action

The runtime baseline is sufficient to leave read-only audit mode.

Next bounded action:

```text
prepare the first coordinated Step-02 source patch against the four accepted live baselines
```

No live installation occurs until the edited sources are individually integrity-audited.

## Status

```text
Step-02 read-only delta audit: completed
Step-02 runtime baseline: completed
Duplicate visible Shipping-address blocker: not present in supplied baseline
Step-02 implementation scope: locked
Step-02 source implementation: next
R2 ugly notice defect: retained
Checkout: Not done
```
