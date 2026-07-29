# Step 4E-B2-R5-E6-N2-C · Pre-Deploy CSS Validation

Last updated: 2026-07-29  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Uploaded artifact: spatial-flow(43).css
N2-C exact artifact validation: Passed.
Deployment: Authorized for assets/css/spatial-flow.css only.
Runtime acceptance: Not executed yet.
Cart page status: Not done.
```

## 1. Exact artifact identity

```text
Size: 703,035 bytes
SHA256: 79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd
UTF-8 decode: Passed
LF newline count: 23,542
Locked project logical-line count including the terminal empty line: 23,543
Final newline: Present
Opening / closing braces: 3,653 / 3,653
Opening / closing comments: 338 / 338
CSS parser errors: 0
```

The SHA256 exactly matches the locked expected N2-C artifact. Therefore the uploaded file is byte-for-byte the planned component-coverage result.

## 2. Replacement-marker validation

```text
Old N2 START marker: 0
Old N2 END marker: 0
New N2-C START marker: 1
New N2-C END marker: 1
```

The old approved Option A block was removed and the N2-C replacement block exists exactly once. No duplicate Notice block is present.

## 3. Component coverage validation

The validated N2-C block covers the standard Cart page-level WooCommerce Notice owners:

```text
- direct `.woocommerce-message:not(:has(.wc-forward))`
- direct `.woocommerce-info`
- direct `.woocommerce-error`
```

The native error structure is handled as a component:

```text
ul.woocommerce-error[role="alert"]
└─ one or more direct li children
```

The file retains:

```text
- `.wc-forward` added-to-cart message suppression
- native `.restore-item` URL / nonce / Undo lifecycle
- native WooCommerce text and ARIA roles
- message / info / error semantic marker differentiation
- multi-item error-list support
```

## 4. Coupon status preservation

The previously validated Order Summary Coupon mirror selectors remain present exactly once:

```text
.sf-cart-summary-coupon__status
.sf-cart-summary-coupon__status:empty
.sf-cart-summary-coupon__status.is-error
.sf-cart-summary-coupon__status.is-success
```

N2-C does not replace or remove the N2-A inline Coupon status treatment.

## 5. Authorized deployment

Deploy only:

```text
Source artifact: spatial-flow(43).css
Destination: assets/css/spatial-flow.css
Required destination SHA256:
79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd
```

Before replacement, retain the current deployed N2 file as rollback:

```text
Current deployed SHA256:
fbe26aee2be439099ccaf61a998d6a8695b74174cb046f07a4677887f99d7f81
```

Deployment constraints:

```text
- replace the complete destination CSS file
- do not append the N2-C block manually again
- do not edit the unscoped global WooCommerce Notice rule
- do not edit functions.php
- do not edit assets/js/spatial-flow.js
- do not edit WooCommerce templates or plugins
- do not change version 2.7.8
- do not execute cancelled FIX4
```

## 6. Post-deployment gate

After deployment and cache clearing, execute bounded runtime acceptance:

```text
1. confirm Cart page loads cleanly
2. trigger postcode / ZIP validation error and verify the generic error band
3. confirm multi-line wrapping, no white rounded surface, no shadow, no overflow
4. recheck Cart updated and Shipping costs updated for regression
5. continue Remove / Undo, Coupon and responsive acceptance only after the error component passes
```

No final Cart binary decision is authorized by this validation. Cart remains `Not done`.
