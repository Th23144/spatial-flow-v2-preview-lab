# Step 4F · R1 Step-02 Shipping V2 Coordinated Source Patch

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

Implement the first coordinated live-source patch for Step 02 Shipping V2 after the read-only delta audit, runtime baseline, and dynamic multi-shipping-method scalability requirement were locked.

This document defines the exact source unit and rollback identity. It does not itself install files on the live/local WordPress theme.

## Locked production behavior

WooCommerce remains authoritative for shipping availability, method IDs, labels, costs, zones, taxes, and selected state.

SAFE5 must enumerate the complete current set of native `shipping_method` inputs and build one synchronized visible Shipping card per real returned method.

The implementation is count-agnostic:

```text
1 returned method -> 1 visible card
2 returned methods -> 2 visible cards
N returned methods -> N visible cards
```

No fixed method cards, fixed prices, fixed maximum count, or placeholder methods are introduced.

After `updated_checkout`, the mirror rebuilds from the new WooCommerce response so added/removed methods do not leave stale cards.

## Source unit

Exactly four files are in this coordinated patch:

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

Excluded:

```text
assets/js/spatial-flow.js
assets/css/spatial-flow.css
woocommerce/checkout/thankyou.php
Crypto plugin
payment gateway settings
CartFlows
WPCode
Step 03 visual migration
R2 notice redesign
Order Summary full visual migration
```

## Input rollback baseline

```text
functions.php
575,903 bytes
10,888 lines
SHA256: 48fb027223df748a23c33cff312fb45fd5437ec197a539d70eae71ac37f21fb8
LF / no final newline

woocommerce/checkout/form-checkout.php
13,700 bytes
303 lines
SHA256: cdfe9d5981d0a30c0487ae27774e4327d62d67c2fb2aa57a57657dace73596f0
CRLF / no final newline

assets/js/checkout-safe5.js
24,772 bytes
819 lines
SHA256: 7d0fb1c816f565cafcd19d88be01142c95fd025b61708609cd8654b9d8d20c0d
CRLF / no final newline

assets/css/checkout-safe5.css
47,086 bytes
1,400 lines
SHA256: d0377342d32702a0da0227bf354829962d4b4cd4feef96acf3cf7a77f29dc472
CRLF / no final newline
```

## Patch responsibilities

### functions.php

Extend the existing single `Spatial Flow Checkout Page` Customizer ownership with Step-02-specific copy only:

```text
Step 02 Intro title
Step 02 Intro description
Shipping · 02 kicker
How should it travel? heading
Shipping panel explanatory note
no-method fallback
Before it leaves. title
Edit address action
Deliver to label
Contact label
Back to Address
Continue to Payment
```

Heading fields allowing italic emphasis continue to use the existing SAFE5 `<em>` sanitizer. No second Checkout admin system is created.

### form-checkout.php

Add Step-aware Intro data hooks without changing Step 01 or Step 03 commerce behavior.

Reshape Step 02 into:

```text
Shipping · 02
How should it travel?
backend-editable explanatory note
native WooCommerce shipping hook retained
one dynamic Shipping mirror host
existing Back / Continue actions retained
```

Add a Step-02-only `Before it leaves.` context card before the existing Order Summary in the right-side Checkout context.

The context card contains live Step-01 address/contact values only; no prototype customer data is hardcoded.

### checkout-safe5.js

Add Step-aware Intro title/description switching.

Add live context-card hydration from native billing/shipping fields. If `Ship to a different address?` is active, address display uses native `shipping_*` values; Contact continues to use the real billing email/phone.

Replace the old one-line Shipping mirror presentation with a count-agnostic method-card builder that:

```text
- enumerates all native shipping_method inputs
- creates one visible card for each real returned input
- parses the real WooCommerce method label and price for presentation
- maps selected state from the native input
- relays visible-card clicks to the corresponding real input
- preserves hidden single-rate inputs as selected non-interactive cards
- rebuilds after updated_checkout
- uses the backend-owned no-method fallback when WooCommerce returns no rate
```

No browser-side shipping calculation is introduced.

### checkout-safe5.css

Add one bounded `Step 02 Shipping V2` block before the existing Processing-overlay block.

The block owns only:

```text
Step-02 flat editorial panel
repeatable Shipping method cards
selected-state treatment
Before it leaves. context card
Step-02 mobile/tablet context -> Shipping -> actions -> Summary order
```

The list has no fixed height and no selector that assumes exactly one method.

## Expected patched source identity

The offline constructed patch has been syntax/structure checked and yields:

```text
functions.php
578,399 bytes
10,936 lines
SHA256: f6384647a9bc810f19085856d3c39ca8d811121041c526998901c6ff2848d5cc
LF / no final newline
PHP syntax: passed

woocommerce/checkout/form-checkout.php
16,778 bytes
337 lines
SHA256: b36dd1a244eef2256b0ef5c89001680ff389a8da8e59d216cf37f0d86d8f97cc
CRLF / no final newline
PHP syntax: passed

assets/js/checkout-safe5.js
29,725 bytes
955 lines
SHA256: 87e8b602b47427c9d03baa16bd0c69f59555929c1a21e7a4c0488e745b27032e
CRLF / no final newline
JavaScript syntax: passed

assets/css/checkout-safe5.css
58,251 bytes
1,772 lines
SHA256: 67c3b1fe4018ec1b522ae21a65068fabd2d845194df80c27e47dad0fb590b888
CRLF / no final newline
CSS braces: 220 / 220
CSS comments: 18 / 18
```

These hashes apply only if the exact audited replacements are made against the locked baseline files.

## Acceptance sequence after source integrity

Do not install a partial subset of this four-file unit.

After the user applies the replacements and uploads all four edited files:

```text
1. byte/hash/line-ending audit
2. PHP/JS/CSS structural audit
3. install all four together
4. runtime Step-02 acceptance at desktop 1366 and mobile 390/360
5. verify current one-rate case
6. verify Back/Continue and Step-01 value persistence
7. verify Before it leaves. context values
8. verify Intro switches Step 01 <-> Step 02 correctly
9. verify source is count-agnostic for future multiple rates
```

If a later temporary WooCommerce configuration permits multiple returned rates, multi-rate runtime behavior remains part of the Shipping regression matrix.

## Status

```text
Step-02 source patch: defined and offline syntax-checked
Dynamic method-count requirement: implemented in patch design
Live installation: not yet performed
Step-02 runtime acceptance: pending
R2 ugly notice defect: retained
Checkout: Not done
```
