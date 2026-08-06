# Step 4F · R1 SAFE5 Backend Copy JavaScript Scope Correction

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

Before issuing the paired `form-checkout.php` patch, the active SAFE5 JavaScript was re-audited against the mandatory backend-editability requirement.

## Confirmed hidden owner

`assets/js/checkout-safe5.js` rewrites the visible Intro kicker on every `showStep()` call:

```javascript
introKicker.textContent = "Secure checkout · Step " + ...
```

Therefore a PHP-only editable Intro label would appear briefly and then be overwritten by JavaScript. The previously documented three-file installation unit was incomplete.

The native Order notes placeholder does not require a new JavaScript owner because the existing `woocommerce_checkout_fields` filter already consumes `sf_checkout_v3_order_notes_placeholder`, and the SAFE5 script only supplies a placeholder when the native field has none.

## Correct coordinated unit

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

No live file may be installed until all four sources pass integrity review.

## Audited baselines

```text
functions.php prepared backend-copy source
575,903 bytes
10,888 newline-count lines
SHA256: 48fb027223df748a23c33cff312fb45fd5437ec197a539d70eae71ac37f21fb8

held strict-copy form-checkout.php
9,855 bytes
286 newline characters / 287 conceptual lines
SHA256: 9060a69bb556f34ba3c6748048032b0a2608b245e875ce2177e5b9283c67759b

accepted current checkout-safe5.js
24,683 bytes
817 newline characters / 818 conceptual lines
SHA256: 368ed12b7f6771d532c25bd54b65cf3276ce297bc9d2390a62bd45eec6fa1e4d

held strict-copy checkout-safe5.css
47,086 bytes
1,399 newline characters / 1,400 conceptual lines
SHA256: d0377342d32702a0da0227bf354829962d4b4cd4feef96acf3cf7a77f29dc472
```

## Corrected prepared targets

```text
form-checkout.php
13,700 bytes
302 newline characters / 303 conceptual lines
SHA256: cdfe9d5981d0a30c0487ae27774e4327d62d67c2fb2aa57a57657dace73596f0
PHP lint: pass
CRLF / no terminal newline

checkout-safe5.js
24,772 bytes
818 newline characters / 819 conceptual lines
SHA256: 7d0fb1c816f565cafcd19d88be01142c95fd025b61708609cd8654b9d8d20c0d
JavaScript syntax: pass
CRLF / no terminal newline
```

The CSS remains unchanged from the held strict-copy source.

## Template behavior

The template uses one local fallback getter so partial source inspection remains safe, but the accepted installation remains coordinated. It reads all forty mapped presentation-copy surfaces through `spatial_flow_safe5_copy()` when available. The three editorial headings allow only `<em>`.

The root element exposes only the editable Intro base label to JavaScript:

```html
data-sf-safe5-intro-label="..."
```

JavaScript then combines that backend-owned label with code-generated structural progress:

```text
<editable intro label> · Step 01 of 04
```

## Status

```text
Previous three-file unit: revoked
Correct four-file unit: defined
functions.php source: passed
form-checkout.php source: prepared, user edit pending
checkout-safe5.js source: prepared, user edit pending
checkout-safe5.css source: held and unchanged
Live installation: prohibited
D2B2: open
Step 02 Shipping V2: blocked
Checkout: Not done
```
