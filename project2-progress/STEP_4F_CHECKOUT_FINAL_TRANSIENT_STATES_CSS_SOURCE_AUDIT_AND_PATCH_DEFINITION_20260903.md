# Step 4F — Checkout final transient states CSS source audit and patch definition — 2026-09-03

## Returned current CSS
User returned the currently installed `assets/css/checkout-safe5.css` after the Step01 anti-FOUC and Step03/Summary BlockUI loading fixes.

Validated identity:

```text
bytes: 150818
logical lines: 4905
line endings: CRLF
SHA256: b84d25fe2c3436e8b8f6df34aa7ff063bce6f18e5867fdca2c05b7a759ee74c6
brace balance: 585 / 585
```

The current file contains exactly one canonical owner for each relevant area:

```text
carried add-to-cart success notice block
SAFE5 step-level validation notice block
SAFE5 AJAX BlockUI visual block
Processing overlay block
```

No new bottom-of-file patch is authorized.

## Defect A — carried add-to-cart success notice can flash before SAFE5 root

Current selector requires `.woocommerce-message` to be inside `.sf-safe5-checkout`.

`form-checkout.php` executes `woocommerce_before_checkout_form` before opening `.sf-safe5-checkout`, so an add-to-cart success message emitted by WooCommerce can exist outside the SAFE5 root during direct Product -> mini-cart -> Checkout navigation.

Fix scope:
- replace the existing notice selector in place
- keep the `body.woocommerce-checkout:not(.woocommerce-order-received)` boundary
- remove only the unnecessary `.sf-safe5-checkout` descendant requirement
- continue matching only success messages carrying `a.wc-forward`
- do not hide validation, coupon, payment or server errors

## Defect B — Step-level error surface is legacy rounded red SaaS styling

Current block uses:

```text
pink background
red border/text
14px radius
shadow
heavy 750 weight
```

R2 already records this as a deferred visual-quality defect, not an accepted final state.

Fix direction:
- preserve the existing `.sf-safe5-step-notice` owner and JS/server text
- keep notice directly below the step bar
- use a square SAFE5 editorial surface
- use SAFE5 paper/ink/clay tokens
- no shadow
- no replacement or suppression of WooCommerce/server truth
- desktop and mobile remain readable

## Defect C — Processing Payment modal is visually outside the accepted SAFE5 language

Current processing overlay uses:

```text
8px backdrop blur
white rounded 26px modal
large shadow
52px / 4px spinner
```

The submit lock itself remains required and must not be removed.

Fix direction:
- CSS only
- keep fixed full-screen interaction lock and current JS lifecycle
- replace the rounded white modal with square SAFE5 paper/editorial styling
- reduce blur/shadow language
- use SAFE5 serif/sans typography for existing backend-editable processing copy
- reduce spinner scale while preserving clear progress feedback
- add a bounded mobile adjustment inside the same Processing component block

## Files allowed in this bounded correction

```text
assets/css/checkout-safe5.css only
```

No changes to:

```text
checkout-safe5.js
form-checkout.php
functions.php
WooCommerce payment/gateway/order logic
Crypto plugin
```

## Validation gate after user returns edited CSS

Assistant must verify:

```text
only the three intended canonical blocks changed
CSS parses cleanly
brace balance remains valid
no existing accepted BlockUI/Step01/Packaging/Payment selectors drift
```

Then runtime acceptance is limited to:

```text
1. Terms-not-accepted error: desktop + 390px
2. Place Order Processing Payment state: desktop + 390px
3. Product mini-cart direct Checkout: no carried add-to-cart success notice flash
```

Do not rerun the full Step01/02/03/04 suite unless one of these bounded changes causes new evidence of regression.
