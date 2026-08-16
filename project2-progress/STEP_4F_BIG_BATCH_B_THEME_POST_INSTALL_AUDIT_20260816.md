# Step 4F · BIG BATCH B Theme Post-Install Audit

Date: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user completed the four manual theme edits requested at BIG BATCH B entry and uploaded the resulting files for source validation.

Uploaded files audited:

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

## Uploaded-file source identity

```text
functions.php
609,465 bytes
11,657 logical lines
SHA256 290e4c65cfd3e37150c317ec87b69a9ffe3dc692aef4f3d130017ff668aad201
LF
no final newline
PHP syntax PASS
SPATIAL_FLOW_CHILD_VERSION 2.7.14

woocommerce/checkout/form-checkout.php
38,995 bytes
701 logical lines
SHA256 9bc7e178e87a708d1a9d8009643f2c23748735d9d89ed9257f27a7a938b110d9
CRLF
no final newline
PHP syntax PASS

assets/js/checkout-safe5.js
63,649 bytes
1,968 logical lines
SHA256 bc33e4cd9d7a875ec901eb9a6055e5117e27a9ebce711604dc70a8bbc749b342
CRLF
no final newline
node --check PASS

assets/css/checkout-safe5.css
152,975 bytes
5,008 logical lines
SHA256 511ccc91a62c70d9a0eb5908e6a346833f24872b346bf86b09176e5898490e9b
CRLF
no final newline
{ / } = 601 / 601
/* / */ = 24 / 24
tinycss2 top-level parse errors = 0
```

The user's manual replacements were mechanically successful.

## Important semantic audit result

The newly added `Selected payment` panel must **not** be accepted as final.

This is a design/ownership correction, not a user-editing error.

### 1. It reopens an already accepted Step-03 contract

The authoritative Step-03 closure already accepted the live mapping:

```text
real native WooCommerce gateway rows
selected native payment_box opens/closes correctly
gateway-owned content remains intact
native Terms/privacy
one native Place Order
```

Authority:

```text
project2-progress/STEP_4F_R1_STEP03_PAYMENT_V2_FULL_ACCEPTANCE_AND_CLOSE.md
```

That closure explicitly locks WooCommerce as owner of gateway labels, descriptions, gateway fields, Terms/privacy and Place Order.

### 2. The new theme JS hardcodes Crypto-specific gateway knowledge

The uploaded JS now contains:

```text
input.value === "spatial_flow_crypto"
Cryptocurrency
USDT · TRON / TRC20
Dedicated workspace
Continue to secure Crypto payment →
```

This conflicts with the earlier locked Step-03 rule that theme presentation remain gateway-count-agnostic and gateway-agnostic.

Crypto-specific Workspace presentation belongs to the Crypto plugin/order-pay Workspace, not to a second hardcoded theme-side gateway descriptor.

### 3. The new panel is not in the intended structural position

The template appends the panel **after** `woocommerce_checkout_payment()`.

WooCommerce's native payment output already contains the real `#payment`, native gateway list, Terms/privacy and `.place-order/#place_order`.

The current SAFE5 CSS itself confirms `.place-order` remains nested under `#payment`.

Therefore the new panel is currently rendered after the whole native `#payment` block, not between the selected gateway content and the final action as originally described.

Trying to force the panel into that position by moving the native `.place-order` row would reopen a previously removed/validated relocation pattern and risk gateway/submit regressions.

## Correct interpretation of the old static reference

The early static payment-host artifact contained a separate `payment-selected-panel` because it did not have a real WooCommerce gateway runtime.

The live Step-03 migration intentionally mapped that responsibility to:

```text
selected native WooCommerce payment method
+ selected gateway-owned .payment_box
```

It was not an accidentally missing required second information card.

The previous BIG BATCH B statement that Step 03 was missing a mandatory structural layer was therefore too aggressive and is corrected by this audit.

## Decision

```text
Four uploaded theme files: syntax/integrity PASS
New Selected-payment theme delta: REJECTED / DO NOT ACCEPT
Reason: duplicates accepted native gateway presentation, hardcodes Crypto into theme, and is structurally misplaced
```

Do not perform BIG BATCH B runtime acceptance on these four edited theme files.

## Required theme rollback target

Return only the four BIG-BATCH-B theme edits to the last accepted pre-change identities:

```text
functions.php
609,465 bytes
11,657 logical lines
SHA256 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631
SPATIAL_FLOW_CHILD_VERSION 2.7.13

woocommerce/checkout/form-checkout.php
37,981 bytes
674 logical lines
SHA256 c7af24d516ff9ca90c6cabddc546b709362a27dd91548201e58e4258f7d68f9e

assets/js/checkout-safe5.js
59,007 bytes
1,768 logical lines
SHA256 b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0

assets/css/checkout-safe5.css
148,983 bytes
4,855 logical lines
SHA256 c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a
```

This rollback removes only the newly introduced Selected-payment panel/descriptor delta and restores the already accepted Step-03 surface.

## Crypto plugin decision remains separate

Do **not** roll back V0.3.0 solely because the theme panel was rejected.

Current Crypto direction remains:

```text
V0.3.0 installed/candidate
Project 2 Crypto Workspace = OFF
```

V0.3.0 owns the actual Crypto-specific customer Workspace after WooCommerce order creation and order-pay validation.

The separate payment-owner handoff is:

```text
project2-progress/STEP_4F_CRYPTO_V029_TO_V030_PAYMENT_WINDOW_HANDOFF_20260816.md
```

## Next gate

```text
1. restore the four theme files to their accepted pre-change identities
2. verify exact bytes/lines/SHA/syntax
3. keep V0.3.0 installed and Workspace OFF
4. then begin one consolidated BIG BATCH B runtime cycle by turning Workspace ON
```

The runtime cycle must test the real plugin-owned Crypto Workspace without reopening the accepted main Step-03 gateway architecture.