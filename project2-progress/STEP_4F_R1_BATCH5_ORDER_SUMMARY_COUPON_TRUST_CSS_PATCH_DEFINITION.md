# Step 4F · R1 Batch-5 Order Summary / Coupon / Trust CSS Patch Definition

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Basis

This patch follows the completed Batch-5 read-only audit.

It is intentionally CSS-only and replaces one bounded existing Summary region in place. No PHP, JavaScript, shared CSS or plugin code is changed.

## Exact pre-change source

```text
assets/css/checkout-safe5.css
73,900 bytes
2,360 lines
SHA256: a3a83cd5f8ac3c76d1c333fd05debe338176fb1ea76604e0c8a4e0f94595ad39
CRLF
no final newline
```

## Replacement boundary

Replace exactly from:

```text
/* Summary */
```

through the byte immediately before:

```text
/* Step 02 Shipping V2: editorial panel, dynamic methods, and address context. */
```

The old bounded region identity is:

```text
7,672 bytes
198 newline characters
SHA256: 7eb2c44856a55e0281d0cae61274fb52635bdac68f6d2cd9e4601b846d9e9222
```

The replacement region identity is:

```text
22,308 bytes
538 newline characters
SHA256: 5cbc152281e16e8f6822579f73227309b194b6fbaa18a788778ad454a1e0f5a7
```

The Airwallex currency-switch suppression remains present inside the replacement region.

## Exact post-change source target

```text
assets/css/checkout-safe5.css
88,536 bytes
2,700 lines
SHA256: c3480532356b13245fd89dff300a04940ac51e60d91557e4d4e16d78e16077d4
CRLF
no final newline
```

Structural checks performed on the offline build:

```text
CSS braces: 327 / 327
CSS comments: 22 / 22
tinycss2 parse errors: 0
prefix before /* Summary */: byte-identical to accepted Step-03 baseline
suffix from Step-02 Shipping V2 marker onward: byte-identical to accepted Step-03 baseline
```

## Intended visual changes

```text
- desktop Summary becomes a square warm editorial surface instead of a rounded white card
- Summary heading hierarchy becomes lighter/serif/editorial
- coupon toggle/panel/input/apply surfaces become square and integrated
- coupon validity remains WooCommerce/server-backed
- native order-review table remains the only product/totals source
- product rows get a bounded SAFE5 layout owner over the historical shared Checkout cascade
- real thumbnails become square editorial thumbnails
- real title/context/variation/quantity/price remain dynamic
- tfoot rows preserve all WooCommerce-produced rows, including coupon/tax/shipping rows when present
- order total gets the accepted stronger hierarchy
- WooCommerce remove-coupon link remains visible/usable when produced
- Trust keeps all three backend-editable live title/description pairs but loses the nested rounded-card stack
- mobile 390/360 keeps the accepted square warm Summary surface and safe wrapping
```

## Explicit non-changes

```text
functions.php: 0
form-checkout.php: 0
checkout-safe5.js: 0
spatial-flow.css: 0
spatial-flow.js: 0
thankyou.php: 0
Crypto plugin: 0
WooCommerce coupon/product/shipping/tax data: 0
```

No fake tax row, fake line item, fake total, fake trust disclaimer or browser-authored coupon amount is introduced.

## Installation gate

The edited CSS should be uploaded for byte/hash/source-integrity audit before installation.

Do not install a file that does not match the exact post-change target above.

## Runtime acceptance after installation

Batch 5 remains open until the user completes the combined Summary/Coupon/Trust acceptance:

```text
1366 Summary + sticky state
390 Summary
360 Summary
real item readability
real totals
coupon open
empty coupon
invalid coupon
valid coupon when available
remove coupon
totals restore
no duplicate coupon control/notice
Trust presentation
no clipping/overflow
```

The known global Checkout notice/error styling defect remains R2 and is not silently closed by this Summary patch.
