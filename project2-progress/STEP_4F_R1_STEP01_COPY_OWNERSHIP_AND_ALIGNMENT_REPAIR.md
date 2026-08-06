# Step 4F · R1 Step 01 Copy Ownership and Strict Alignment Repair

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user authorized the final Step-01 copy-alignment group after the rhythm, warm-canvas, textarea and checkbox repair passed runtime review.

## Source ownership audit

Audited live source baseline:

```text
woocommerce/checkout/form-checkout.php
9,847 bytes
287 lines
SHA256: 81e81fb9d35e0aa41311686c51d0bae276bfc017f042d5b633ad41724c82bfa2

assets/css/checkout-safe5.css
47,050 bytes
1,399 lines
SHA256: 404bcbc408c33cd502019a623cd1bf1c483e974690b05aa486b297790d57bd16
```

The three panel headings are already sentence case in `form-checkout.php`:

```html
<h2>Where should we <em>write</em>?</h2>
<h2>Send it to this <em>room</em>.</h2>
<h2>A practical <em>detail</em>.</h2>
```

The title-case runtime rendering is therefore not a PHP copy defect. It is inherited global heading capitalization. The bounded fix is an explicit Checkout-only `text-transform: none !important` on `.sf-safe5-address-panel__head h2`.

## True PHP copy mismatches

Reference authority: `preview/spatial-flow-checkout-v1.html`.

Required replacements:

```text
Current Delivery note:
These fields remain WooCommerce-owned and are used to calculate shipping methods, tax and delivery eligibility.

Reference Delivery note:
These fields represent the address WooCommerce will later use to calculate shipping methods, tax and delivery eligibility.
```

```text
Current back action: ← Return to cart
Reference back action: ← Back to Bag
```

A further semantic mismatch was found during this audit:

```text
Current source: Continue to shipping →
Reference source: Continue to Shipping →
```

The button is visually uppercased by CSS, but the source and accessible text must still match the accepted reference exactly.

## Native-copy exclusions retained

The following remain native WooCommerce-owned and are not rewritten in this group:

```text
billing/shipping field labels
required markers
Country / State dynamic values
Ship to a different address? control
Order notes native label / optional marker / placeholder
```

The accepted ownership policy forbids replacing those native operational fields merely to imitate static preview copy.

## Bounded files

```text
woocommerce/checkout/form-checkout.php
assets/css/checkout-safe5.css
```

No JavaScript change is required.

## Expected post-change integrity

```text
form-checkout.php
9,855 bytes
287 lines
SHA256: 9060a69bb556f34ba3c6748048032b0a2608b245e875ce2177e5b9283c67759b
CRLF
no final newline
```

```text
checkout-safe5.css
47,086 bytes
1,400 lines
SHA256: d0377342d32702a0da0227bf354829962d4b4cd4feef96acf3cf7a77f29dc472
CRLF
no final newline
```

## Runtime acceptance boundary

After source integrity passes, only two screenshots are required:

```text
1. 1366px Step 01 from Contact heading through actions
2. 390px Step 01 from Contact heading through actions
```

Acceptance checks:

```text
Where should we write?
Send it to this room.
A practical detail.
reference Delivery explanatory sentence
Back to Bag
Continue to Shipping source preserved without functional regression
no typography, spacing, width, field or button-order regression
```

## Status

```text
Copy ownership audit: complete
Repair definition: complete
D2B2: open
Step 02 Shipping V2: blocked
Checkout: Not done
```
