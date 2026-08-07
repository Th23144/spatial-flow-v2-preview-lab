# Step 4F · R1 Step-03 Payment V2 CSS Target Correction

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user reported that the submitted Step-03 `checkout-safe5.css` did not match the previously published byte/hash target.

A byte-level reverse audit was performed against the accepted pre-Step-03 CSS baseline.

## Finding

The submitted CSS is structurally correct. The previously published target identity was wrong.

Previous accepted baseline:

```text
assets/css/checkout-safe5.css
58,287 bytes
1,773 lines
SHA256: 83034751260b235cf91caacafb477d3732a2e5f78c1a19077f6d0e1875dab130
CRLF
no final newline
```

Submitted Step-03 CSS:

```text
assets/css/checkout-safe5.css
73,900 bytes
2,360 lines
SHA256: a3a83cd5f8ac3c76d1c333fd05debe338176fb1ea76604e0c8a4e0f94595ad39
CRLF
no final newline
CSS braces: 284 / 284
CSS comments: 19 / 19
```

The bounded Step-03 block begins at:

```text
/* Step 03 Payment V2: native gateway host and completed-context card. */
```

and ends immediately before:

```text
/* Processing overlay */
```

Its actual identity is:

```text
15,613 bytes
587 newline characters
SHA256: cabd496445ddde42aa761997f931c63a16407ae6b1e5d63eac23156886bf5a78
```

Removing exactly that block from the submitted file restores the prior accepted baseline byte-for-byte:

```text
58,287 bytes
1,773 lines
SHA256: 83034751260b235cf91caacafb477d3732a2e5f78c1a19077f6d0e1875dab130
```

## Root cause

The prior target calculation used the inserted block after newline normalization to LF:

```text
normalized block bytes: 15,026
actual CRLF block bytes: 15,613
差值: 587 bytes
```

The block contains 587 newline characters. Each CRLF newline contributes one additional `\r` byte compared with LF, producing the exact 587-byte discrepancy.

Therefore the previously published target:

```text
73,313 bytes
SHA256: 6b88c82e80ac2888f59432cdd7f20ee1bb251c8c465cd1255c72be2a7f407a16
```

is invalid and superseded.

## Correct Step-03 four-file source identities

```text
functions.php
580,074 bytes
10,966 lines
SHA256: 978b9cc033e5ab241127bde5d77e843d4b85dd08722148a703fbf2cf3d105c58

woocommerce/checkout/form-checkout.php
19,685 bytes
381 lines
SHA256: 5b285cd74e4f0aacca5339d8a9095ab23a1be1b5c4f248d5bedc83ed2b146572

assets/js/checkout-safe5.js
32,655 bytes
1,024 lines
SHA256: 66479f8cc357f7c9cda1ffd92cc45a6c908a589c27395d96efbd21d5d5683d9c

assets/css/checkout-safe5.css
73,900 bytes
2,360 lines
SHA256: a3a83cd5f8ac3c76d1c333fd05debe338176fb1ea76604e0c8a4e0f94595ad39
```

The other three submitted files match the previously published targets exactly.

## Status

```text
Step-03 CSS source: accepted after corrected byte/hash audit
Four-file coordinated source unit: source-integrity ready
Installation: may proceed only as all four files together
Runtime Step-03 acceptance: not yet performed
Checkout: Not done
```
