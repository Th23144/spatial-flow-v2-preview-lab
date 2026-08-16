# Step 4F · BIG BATCH B · V0.3.0 Plugin Candidate + Main Payment Host Structural Gap

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Status

```text
BIG BATCH B: ACTIVE
Crypto backend baseline: V0.2.9 FINAL ACCEPTED
Plugin presentation candidate: V0.3.0 BUILT / STATIC CHECKED
Main live Step-03 selected-payment host panel: REQUIRED BEFORE RUNTIME ACCEPTANCE
Step 04: NOT STARTED
```

This is one coordinated BIG BATCH B candidate. It is not a final acceptance record.

## 2. Plugin candidate identity

Output:

```text
spatial-flow-crypto-pay-trial-v0.3.0.zip
SHA256: d7227f52ddd4f1949b1860348b56a956f47723f3d64d5c052f34a2c1ab58fdb9
ZIP root: spatial-flow-crypto-pay/
```

V0.3.0 is based on the accepted V0.2.9 backend.

Changed/added relative to V0.2.9:

```text
spatial-flow-crypto-pay.php
templates/crypto-order-pay-workspace.php
assets/project2-crypto-workspace.css   [new]
assets/project2-crypto-workspace.js    [new]
```

All backend/security/service classes remain byte-identical to V0.2.9.

## 3. V0.3.0 Workspace frontend behavior

The candidate replaces the temporary backend-ready shell with the accepted Project-2 Step-03 customer Workspace model and uses real V0.2.9 REST truth.

Implemented presentation/runtime states:

```text
Preparing Invoice
automatic one-time Create or Reuse
Waiting for payment
USDT / TRON server truth
server amount
server receiver address
copy amount/address
TRON-only warning
required Transaction Hash verification
explicit Refresh
focus recovery without interval polling
verification_failed
retryable temporary verification error
manual_review
terminal/cancelled
paid-confirmed transition
manager Sandbox control only when backend permits
recovery-link copy
```

Confirmed-payment transition remains:

```text
browser reloads the already-authorized order-pay page
→ V0.2.9 server boundary
→ canonical WooCommerce Step-04 redirect
```

The browser does not manufacture a success URL.

Explicitly absent:

```text
QR
operational countdown
active expiry
replacement Invoice
automatic chain monitoring
setInterval polling
multi-asset/network selection
Step-04 implementation
```

## 4. Static safety checks completed

```text
all PHP php -l: PASS
project2-crypto-workspace.js node --check: PASS
CSS braces: 187 / 187
setInterval: absent
external CDN/font/script/image URLs in new Workspace assets/template: absent
ZIP path safety/root: PASS
backend V0.2.9 service/security files: byte-identical
```

## 5. Main live Step-03 structural parity gap found

The accepted static Payment Host includes:

```text
payment-method list
selected-method panel
one final action zone
```

The current live `woocommerce/checkout/form-checkout.php` correctly mounts native WooCommerce payment methods and one native Place Order button, but it does not yet render the accepted generic selected-payment panel.

This is a real structure-level parity gap, not merely a CSS mismatch.

The new live panel must remain descriptor-driven and gateway-agnostic:

```text
Crypto selected:
- title: Cryptocurrency
- family: Cryptocurrency
- description: fixed USDT/TRON dedicated Step-03 Workspace truth
- settlement: USDT · TRON / TRC20
- presentation: Dedicated workspace
- native #place_order label: Continue to secure Crypto payment →

Any other eligible WooCommerce gateway:
- title from native WooCommerce label
- family: WooCommerce gateway
- description from native payment_box where available, otherwise safe provider-controlled fallback
- settlement: Selected gateway
- presentation: Provider-controlled
- native #place_order original label restored
```

No inactive/future gateways may be hardcoded.

## 6. Required coordinated theme edit scope

Exactly four live-theme files are expected in the candidate integration:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
functions.php
```

Purpose:

```text
form-checkout.php
→ add selected-payment semantic panel immediately after native Woo payment mount

checkout-safe5.js
→ generic selected-gateway synchronization + native Place Order label adaptation
→ resync after updated_checkout

checkout-safe5.css
→ selected-payment panel strict visual layer
→ no new duplicate payment registry

functions.php
→ cache/version bump 2.7.13 → 2.7.14 only after the three theme assets are replaced
```

## 7. Important mobile finding

The accepted static mobile commerce layer intentionally uses stronger commerce surfaces/cards/gradients/shadows for Steps 01–03.

Therefore BIG BATCH B must not blindly flatten the mobile native payment methods merely because the desktop host is editorial and flat.

Desktop and mobile parity must be evaluated against their actual accepted reference layers.

## 8. Current stop point

Before runtime acceptance:

```text
1. install V0.3.0 candidate only after preserving V0.2.9/V0.2.7 rollback packages
2. apply the bounded four-file theme integration
3. syntax/identity check
4. enable Workspace only for runtime acceptance
5. inspect 1366 / 390 / 360 main Step-03 for normal + Crypto selected states
6. exercise Preparing / Waiting / Hash / failure / review / Sandbox / confirmed transition
7. verify normal gateway regression and Feature-Flag rollback
8. perform source/computed strict parity review
```

BIG BATCH B remains NOT COMPLETE until that runtime/source/computed acceptance passes.
