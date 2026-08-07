# Step 4F · R1 Step-03 Payment V2 Runtime Baseline and Coordinated Patch

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user supplied the requested pre-migration live Step-03 screenshots at desktop and mobile after navigating through Step 01 -> Step 02 -> Step 03.

This record locks the observed runtime baseline and the first bounded coordinated Step-03 migration patch.

## Runtime facts confirmed by screenshots

The live Step 03 currently exposes **two real WooCommerce payment-method entries** at the same time:

```text
- one method whose customer-facing label is currently “测试”
- Pay with Crypto
```

The screenshots prove multi-gateway presence at runtime, but they do **not** prove the internal gateway ID of the “测试” method. No implementation may hardcode or infer that ID from the label.

Also confirmed:

```text
- the currently selected first gateway expands its native WooCommerce payment box
- native privacy copy is visible
- native Terms checkbox is visible
- native #place_order is visible exactly once
- Back to Shipping is visible
- desktop and phone both retain the real native payment list
- Order Summary remains server/WooCommerce-backed
```

## Live-to-reference defects confirmed

Compared with the accepted Step-03 static authority:

```text
1. Intro still shows generic Checkout copy instead of Step-03 Payment copy.
2. Step-03 heading still shows Step 3 · Payment / Payment Method instead of Payment · 03 / How should it settle?
3. desktop Payment area is still the old rounded white SAFE5 payment surface.
4. the native methods have not yet been migrated into the accepted editorial payment-host visual language.
5. Step 03 lacks the accepted Before it leaves. context card containing Deliver to / Contact / confirmed Shipping method.
6. the old legacy sf-checkout-trust block is still injected after #place_order and visually duplicates the shared Summary trust surface.
7. the legacy trust block also carries its old privacy/support note, creating a second non-reference copy surface below payment.
```

The WordPress logged-in admin bar visible in the supplied screenshots is an administrator-only environment surface and is not classified as a Checkout visual defect.

## Payment ownership decision

The live implementation will **not** create a synthetic mirror list for payment methods.

WooCommerce native payment DOM remains authoritative:

```text
ul.payment_methods
li.wc_payment_method
input[name="payment_method"]
gateway-owned .payment_box fields / iframe / nonce content
native Terms / privacy
native #place_order
```

The theme will restyle that real list in place.

Therefore:

```text
WooCommerce exposes 1 eligible gateway -> 1 real visual method card
WooCommerce exposes 2 eligible gateways -> 2 real visual method cards
WooCommerce exposes N eligible gateways -> N real visual method cards
```

No fixed count, gateway ID, method label, Crypto-only branch, fake Card/Wallet entry, or hardcoded test gateway is added.

This satisfies the previously locked future-gateway extensibility contract while preserving unknown-gateway native fallback behavior.

## Crypto boundary

Spatial Flow Crypto Pay Trial remains V0.2.5 and is untouched.

Current real Crypto path remains:

```text
Step 03 native payment selection
-> native Place Order
-> WooCommerce order creation
-> spatial_flow_crypto process_payment()
-> /crypto-pay/
```

No S5 / future order-pay Workspace behavior is imported into the live theme in this patch.

## Exact pre-change live source baseline

```text
functions.php
578,399 bytes
10,936 lines
SHA256: f6384647a9bc810f19085856d3c39ca8d811121041c526998901c6ff2848d5cc
LF / no final newline

woocommerce/checkout/form-checkout.php
16,778 bytes
337 lines
SHA256: b36dd1a244eef2256b0ef5c89001680ff389a8da8e59d216cf37f0d86d8f97cc
CRLF / no final newline

assets/js/checkout-safe5.js
29,725 bytes
955 lines
SHA256: 87e8b602b47427c9d03baa16bd0c69f59555929c1a21e7a4c0488e745b27032e
CRLF / no final newline

assets/css/checkout-safe5.css
58,287 bytes
1,773 lines
SHA256: 83034751260b235cf91caacafb477d3732a2e5f78c1a19077f6d0e1875dab130
CRLF / no final newline
```

## Coordinated patch scope

Changed files:

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

No changes to:

```text
assets/js/spatial-flow.js
assets/css/spatial-flow.css
woocommerce/checkout/thankyou.php
Crypto plugin
gateway settings
CartFlows
WPCode
Step 01 native field ownership
Step 02 Shipping implementation
```

## Backend-editable Step-03 copy additions

The existing single `Spatial Flow Checkout Page` Customizer section gains normal SAFE5 ownership for:

```text
Step 03 Intro title
Step 03 Intro description
Step 03 panel kicker
Step 03 panel title
Step 03 panel description
Step 03 Shipping-method context label
Step 03 Shipping-method Edit action
Back to Shipping
```

Existing shared context settings remain reused for:

```text
Before it leaves.
Deliver to
Contact
Edit address
```

WooCommerce gateway labels, gateway descriptions/fields, shipping method name/price, totals, Terms and Place Order are not converted into static theme copy.

## Template behavior

Step 03 becomes:

```text
Secure checkout · Step 03 of 04
Choose the payment.
Payment · 03
How should it settle?
truthful live payment-host note
native WooCommerce payment methods
native Terms/privacy
native Place Order
Back to Shipping
```

A dedicated Step-03 context card is added without changing the already accepted Step-02 card DOM.

Step-03 context:

```text
Before it leaves.
├─ Deliver to + Edit address
└─ Contact
   Shipping method + Edit
```

All values come from current Step-01 fields and the currently selected native WooCommerce shipping method.

## JavaScript behavior

Step 03 gains live context synchronization only.

Confirmed design:

```text
- Step-03 Intro title/description switch through the existing step-aware Intro contract
- Step-02 context remains visible only on Step 02
- Step-03 context remains visible only on Step 03
- Step-03 address/contact are read from the existing WooCommerce customer fields
- selected Shipping method is read from the native shipping_method inputs
- shipping method name/price use the already existing WooCommerce-label parser
- updated_checkout refreshes the Step-03 context
- country/state refresh also refreshes Step-03 context
- no payment success, gateway selection, nonce, or submission logic is replaced
```

## Payment visual migration

The real WooCommerce payment DOM is restyled in place:

```text
#payment -> flat transparent host
ul.payment_methods -> unbounded method stack
li.wc_payment_method -> editorial method cards
selected li -> selected border/background via native checked radio
.payment_box -> bounded selected-method detail surface
Terms/privacy -> preserved native text
#place_order -> one square authoritative primary action
```

The obsolete legacy `.sf-checkout-payment-note` and `.sf-checkout-trust` surfaces are hidden **only inside the SAFE5 payment mount**. Their PHP is not deleted in R1 and the Summary trust surface is not touched.

## Exact post-patch source targets

The coordinated offline build produced:

```text
functions.php
580,074 bytes
10,966 lines
SHA256: 978b9cc033e5ab241127bde5d77e843d4b85dd08722148a703fbf2cf3d105c58
LF / no final newline

woocommerce/checkout/form-checkout.php
19,685 bytes
381 lines
SHA256: 5b285cd74e4f0aacca5339d8a9095ab23a1be1b5c4f248d5bedc83ed2b146572
CRLF / no final newline

assets/js/checkout-safe5.js
32,655 bytes
1,024 lines
SHA256: 66479f8cc357f7c9cda1ffd92cc45a6c908a589c27395d96efbd21d5d5683d9c
CRLF / no final newline

assets/css/checkout-safe5.css
73,313 bytes
2,360 lines
SHA256: 6b88c82e80ac2888f59432cdd7f20ee1bb251c8c465cd1255c72be2a7f407a16
CRLF / no final newline
```

Syntax / structure checks:

```text
functions.php PHP syntax: passed
form-checkout.php PHP syntax: passed
checkout-safe5.js JavaScript syntax: passed
CSS braces: 284 / 284
CSS comments: 19 / 19
```

Search audit confirms the coordinated patch contains none of these hardcoded runtime fixtures:

```text
测试
Pay with Crypto
spatial_flow_crypto
$8.99
payment_method_bacs
flat_rate
```

## Installation rule

The four edited files are one coordinated source unit.

Do not install only a subset.

Before installation the user should submit all four edited files for byte/hash/source-integrity audit.

## Runtime acceptance after installation

One combined Batch-4 acceptance will cover:

```text
1. desktop 1366 Step 03
2. mobile 390 and 360 Step 03
3. both currently enabled native gateways remain visible
4. switching between the two gateways works
5. selected gateway payment_box remains usable
6. Terms rejection remains functional
7. native Place Order exists once
8. Back to Shipping works and state persists
9. Before it leaves. shows actual address/contact/shipping method
10. Edit address / Edit shipping return to the correct step
11. Step 03 backend copy representative save/render/clear-to-default
12. no clipping / overflow / gateway-content loss
```

Order creation and Crypto redirect remain part of the later consolidated R1 end-to-end batch unless a Step-03 defect requires earlier retest.

## Status

```text
Step-03 runtime baseline: captured
Two real gateway entries: confirmed at runtime
Dynamic-gateway design: locked to native WooCommerce list
Step-03 coordinated patch: built and syntax-audited offline
Installation: not yet authorized until user-edited files are uploaded and audited
R1 Step-03 Payment V2: in progress
Checkout: Not done
```
