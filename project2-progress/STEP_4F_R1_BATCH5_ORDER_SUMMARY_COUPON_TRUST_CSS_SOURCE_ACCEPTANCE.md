# Step 4F · R1 Batch-5 Order Summary / Coupon / Trust CSS Source Acceptance

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user uploaded the edited `assets/css/checkout-safe5.css` candidate for the Batch-5 Order Summary / Coupon / Trust migration.

This record is source-integrity acceptance only. It does not claim runtime visual or functional acceptance.

## Expected target

The authorized Batch-5 CSS replacement definition requires:

```text
assets/css/checkout-safe5.css
88,536 bytes
2,700 lines
SHA256: c3480532356b13245fd89dff300a04940ac51e60d91557e4d4e16d78e16077d4
CRLF
no final newline
CSS braces: 327 / 327
CSS comments: 22 / 22
```

## Uploaded candidate audit

Measured uploaded file:

```text
88,536 bytes
2,700 lines
SHA256: c3480532356b13245fd89dff300a04940ac51e60d91557e4d4e16d78e16077d4
CRLF newline count: 2,699
final newline: absent
CSS braces: 327 / 327
CSS comments: 22 / 22
```

Marker audit:

```text
/* Summary */: 1
Batch-5 Summary marker: 1
Step-02 Shipping V2 marker: 1
Airwallex currency-switch suppression marker: 1
```

The uploaded candidate therefore matches the exact authorized offline target byte-for-byte by SHA256 and all structural checks.

Because the whole-file SHA256 equals the predeclared target, the prefix before the Summary replacement and the suffix beginning at the Step-02 Shipping V2 marker are necessarily the same as the audited offline build. No extra source drift is present in this candidate.

## Scope integrity

Accepted source change:

```text
checkout-safe5.css only
bounded Summary / Coupon / Trust replacement
```

No Batch-5 source change is authorized or required to:

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/spatial-flow.css
assets/js/spatial-flow.js
woocommerce/checkout/thankyou.php
Crypto plugin
gateway settings
WooCommerce product/shipping/tax/coupon data
```

## Decision

```text
Batch-5 CSS source integrity: accepted
Installation: authorized on local site
Runtime acceptance: pending
Batch 5: open
Checkout: Not done
```

After installation, the next gate is one consolidated runtime acceptance covering desktop/mobile Summary presentation, sticky behavior, real line-item/totals integrity, Coupon open/error/valid/remove behavior where available, Trust presentation, duplicate-control/notice checks, and overflow/clipping.
