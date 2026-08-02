# Step 4F · R1 Minimal Audited Package Candidate

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User decisions and clarified risk boundary

User decisions:

```text
- Airwallex will not be used again and its plugin is planned for later removal.
- Responsive behavior may change when required to match the accepted reference and mobile quality target.
- Convenience of a replacement package is preferred when the package can be source-audited, bounded and reversible.
- The withdrawn first candidate remains prohibited; no risk will be taken with that broad rewrite.
```

Clarification:

```text
A responsive breakpoint is the browser/viewport width at which the page changes layout mode.
It is related to visible page width, but it is not the same as the content container width.
Breakpoint changes are acceptable only when the resulting 1366 / 390 / 360 layouts pass the accepted visual and usability gates.
```

Dynamic WooCommerce/gateway fields means fields inserted at runtime into the native Checkout/payment DOM, for example:

```text
- card-number / expiry / CVC fields
- wallet buttons
- bank-transfer instructions
- gateway consent and authentication fields
- plugin-generated validation/error rows
```

Current enabled gateways are `bacs` and `spatial_flow_crypto`, so the immediate field-injection risk is limited. However, WooPayments/card support is still a future business requirement. R1 therefore must preserve the native `woocommerce_checkout_payment()` host and avoid a broad CSS grid rewrite that assumes only the currently visible fields.

Airwallex-specific future compatibility is no longer an acceptance requirement, but R1 does not uninstall or alter the plugin. The existing Airwallex suppression CSS remains unchanged in this minimal candidate.

## 2. Delivery decision

Chosen method:

```text
minimal, fully diff-audited replacement ZIP
```

Reason:

```text
- materially more convenient than many manual replacements
- generated from exact R0 source hashes
- only approved R1-A/B/C functional regions differ
- no R1-D visual rewrite is included
- all deltas are explained
- R0 rollback package remains authoritative
```

This is not claimed to be absolute zero-risk before local runtime testing. It is classified as:

```text
source-audited
bounded
reversible
ready for local-site validation
```

## 3. Package identity

```text
Package: project2-checkout-r1-minimal-audited-20260802.zip
ZIP bytes: 17,029
ZIP SHA256: aad2b0d5bb9b1dfcc2a8565f01c47de662e38c248e96f299e3bfe71d16b5a906
```

Archive contents:

```text
README.txt
manifest.json
STEP_4F_R1_MINIMAL.patch
theme/woocommerce/checkout/form-checkout.php
theme/assets/js/checkout-safe5.js
theme/assets/css/checkout-safe5.css
```

No executable, plugin installer, additional PHP entry point, secret file or unknown binary is included.

## 4. Exact file-size audit

| File | R0 bytes / lines | Candidate bytes / lines | Delta | Explanation |
|---|---:|---:|---:|---|
| `form-checkout.php` | 9,140 / 278 | 7,654 / 232 | -1,486 bytes / -46 lines | Removes the complete obsolete Review navigation/DOM and Place Order relocation target. No replacement visual DOM is added. |
| `checkout-safe5.js` | 24,463 / 780 | 20,574 / 665 | -3,889 bytes / -115 lines | Removes only `fillReview()` and `relocatePlaceOrder()` plus their obsolete call sites; keeps validation, shipping mirror, Coupon AJAX, notices and WooCommerce event code. |
| `checkout-safe5.css` | 20,936 / 599 | 20,931 / 599 | -5 bytes / 0 lines | Changes two four-column declarations to three columns and retargets existing Place Order selectors from the deleted Review target to the Step-03 payment mount. |

Candidate hashes:

```text
form-checkout.php
6ee51c5fed95476270a7dd98399d97eb45fd97655b3ee132749221ad6f209d1b

checkout-safe5.js
3cf49000b3e80b4d8e542e6f0b285b1eab5191a7c82175c0774afcad770eb239

checkout-safe5.css
bfa37eae69bfd70f60e5f685f62c132737928c914f5c23bc6904c9d722d4f99d
```

## 5. Exact change boundary

### Template

```text
- renames Step 1 navigation label to Contact / Address
- removes the Step 4 Review navigation item
- keeps `woocommerce_checkout_payment()` in Step 3
- changes the authority comment to state that native `.place-order` remains in Step 3
- removes the Review forward button
- removes the complete Review DOM and Place Order relocation target
- preserves the existing Step 01, Step 02, Step 03, Coupon, order summary, trust, processing overlay and all WooCommerce hooks
```

### JavaScript

Removed:

```text
fillReview()
relocatePlaceOrder()
all direct calls to those two functions
Step-4 submit routing
Step-4 terms/error routing
```

Preserved without behavioral rewrite:

```text
showStep()
validateStep()
required/email validation
shipping-method validation
payment-method validation
SAFE5 notice creation and movement
syncShippingMirror()
bindCoupon() and Coupon AJAX
checkout_error handling
updated_checkout handling, except obsolete Review/relocation calls
processing overlay behavior
all non-obsolete explanatory comments
```

### CSS

```text
- desktop step grid: four columns → three columns
- mobile step grid: four columns → three columns
- Place Order selectors: removed Review target → existing Step-03 payment mount
- no bottom append
- no token rewrite
- no field-grid rewrite
- no breakpoint change
- no Airwallex-rule change
- no visual R1-D migration
```

## 6. Static validation

```text
form-checkout.php: php -l pass
checkout-safe5.js: node --check pass
checkout-safe5.css: tinycss2 parse errors = 0
CSS braces: 83 / 83
CSS comments: 12 / 12
```

Forbidden obsolete references scan:

```text
no data-sf-safe5-view="4"
no data-sf-safe5-next="4"
no data-sf-safe5-step-go="4"
no fillReview
no relocatePlaceOrder
no data-sf-safe5-place-order-target
no sf-safe5-place-order-target selector
no current !== 4 submit guard
no showStep(root, 4)
```

Required authority references remain:

```text
woocommerce_checkout_payment()
woocommerce_order_review()
Step 01 / 02 / 03 views
native Step-03 #place_order styling
syncShippingMirror()
bindCoupon()
```

## 7. Actual impact of the withdrawn first candidate

The first candidate was not proven malicious. Its practical risks were:

```text
CSS:
- could change nearly the entire Checkout appearance at once
- could alter tablet/mobile layout and dynamic field geometry
- could make plugin fields cramped, hidden, overlapped or visually inconsistent

PHP:
- could change selectors/DOM relied on by CSS and JavaScript
- introduced hardcoded copy before backend-editability work
- made regression attribution difficult because architecture and visual DOM changed together

JavaScript:
- could affect AJAX fragment refresh, error routing, Coupon, shipping mirror and duplicate-order behavior
- removed all comments and rewrote unrelated event code
- syntax passed, but dynamic behavior was not proven
```

The minimal candidate avoids those risks by leaving all unrelated behavior and visual ownership unchanged.

## 8. Remaining runtime gate

After local replacement of all three files together, stop and test:

```text
- Step 01 → Step 02 → Step 03 only
- no Review navigation or Review DOM
- both currently enabled gateways render
- native Place Order appears exactly once in Step 03
- malformed email remains blocked
- shipping method and total update
- terms error remains in Step 03
- normal test order creates one order
- Crypto still redirects to legacy /crypto-pay/
- no duplicate order
```

R1-D visual migration to the accepted reference remains separate and begins only after this functional shell passes.

## 9. Current status

```text
Withdrawn first candidate: prohibited
Minimal audited package: issued as local validation candidate
Runtime installation: not yet performed
Browser regression: not yet performed
R1-D visual migration: not started
R2: blocked
Checkout: Not done
```
