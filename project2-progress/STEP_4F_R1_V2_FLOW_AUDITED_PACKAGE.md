# Step 4F · R1 V2-Flow Audited Package

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User requirement re-locked

```text
All live page operation experience must strictly follow the accepted Project 2 V2 repository reference pages.
```

For Checkout, the visible progression is:

```text
01 Address
→ 02 Shipping
→ 03 Payment
→ 04 Confirmed
```

Operational meaning:

```text
- Address, Shipping and Payment are the only interactive Checkout input stages.
- Confirmed remains visible in progress as the fourth result stage.
- Confirmed is non-interactive on Checkout.
- No Step-04 input/view exists.
- The real Confirmed state is rendered only by the WooCommerce order result after server-authoritative order/payment processing.
```

## 2. Previous package superseded

Do not use:

```text
project2-checkout-r1-minimal-audited-20260802.zip
SHA256: aad2b0d5bb9b1dfcc2a8565f01c47de662e38c248e96f299e3bfe71d16b5a906
```

Reason:

```text
It removed the visible Confirmed progress item and converted the progress grid to three columns.
That does not strictly match the accepted V2 reference flow.
```

## 3. Corrected package identity

```text
Package: project2-checkout-r1-v2-flow-audited-20260802.zip
ZIP bytes: 16,062
ZIP SHA256: c2a7cfce51fd8e404ede7f9854df178169167f55fe666d97b9c0df59bb2c27f4
```

Archive contents:

```text
README.txt
manifest.json
STEP_4F_R1_V2_FLOW.patch
theme/woocommerce/checkout/form-checkout.php
theme/assets/js/checkout-safe5.js
theme/assets/css/checkout-safe5.css
```

Audit result:

```text
- six normal text files only
- no executable or installer
- no additional PHP entry point
- no binary payload
- no secret-bearing file
- no path traversal or symlink entry
- suspicious-token scan found no eval/base64_decode/shell execution/remote-request addition
```

## 4. Exact R0-to-candidate file audit

| File | R0 bytes / lines | Candidate bytes / lines | Delta | Explanation |
|---|---:|---:|---:|---|
| `form-checkout.php` | 9,140 / 278 | 7,787 / 237 | -1,353 bytes / -41 lines | Review input DOM and forward control removed; fourth progress item retained and renamed Confirmed. |
| `checkout-safe5.js` | 24,463 / 780 | 20,659 / 668 | -3,804 bytes / -112 lines | Obsolete Review population and Place Order relocation removed; Enter-key bypass guard corrected. |
| `checkout-safe5.css` | 20,936 / 599 | 20,931 / 599 | -5 bytes / 0 lines | Only existing Place Order selectors retargeted to the native Step-03 payment host. Four-column progress remains unchanged. |

Candidate hashes:

```text
form-checkout.php
c1fc8ca89b17744660fc5c2de893debae89e7141d4661ad6d5cb846b429756e8

checkout-safe5.js
48feecd27d3da5a921b822734b48b6885e3ce1fe8b0a195b5ef9af81bc999f04

checkout-safe5.css
e1c855fd9044132982a084e7d0b95472c2fd50e233620b6dad9322c774797174
```

## 5. Exact change boundary

### Template

```text
- progress label Information → Address
- progress item Review → Confirmed
- Confirmed progress item is disabled and has no navigation target
- Step-04 Review DOM removed
- Review-order forward button removed
- native `woocommerce_checkout_payment()` remains in Step 03
- real `.place-order` / `#place_order` remains inside the native Step-03 payment host
- all WooCommerce authority hooks and order-review output remain
```

Preserved authority calls:

```text
woocommerce_before_checkout_form
woocommerce_checkout_before_customer_details
woocommerce_checkout_billing
woocommerce_checkout_shipping
woocommerce_checkout_payment
woocommerce_checkout_after_customer_details
woocommerce_checkout_before_order_review_heading
woocommerce_checkout_before_order_review
woocommerce_order_review
woocommerce_checkout_after_order_review
woocommerce_after_checkout_form
```

### JavaScript

Removed only obsolete Review ownership:

```text
fillReview()
relocatePlaceOrder()
all calls to those functions
Step-4 terms/error routing
```

Preserved without functional rewrite:

```text
showStep()
validateStep()
required/email validation
shipping validation
payment validation
syncShippingMirror()
bindCoupon() and WooCommerce Coupon AJAX
native updated_checkout event
native checkout_error event
processing overlay
native WooCommerce form submit
```

Additional strict-flow correction:

```text
Pressing Enter on Address or Shipping cannot jump directly to Payment submission.
The active step validates first and advances by one stage only.
```

### CSS

```text
- four-column V2 progress remains unchanged on desktop and mobile
- no bottom append
- no breakpoint change
- no field-grid rewrite
- no design-token rewrite
- no Airwallex-rule change
- no R1-D visual migration
- only Place Order selectors are retargeted from deleted Review target to Step-03 payment mount
```

## 6. Specific commerce behavior audit

### Address change → shipping/totals refresh

```text
Source status: preserved
```

The package does not alter WooCommerce address-field update ownership. Existing real shipping selection still triggers native `change` and `update_checkout` events. Runtime verification remains mandatory.

### `updated_checkout` → payment region remains available

```text
Source status: structurally improved
```

The native payment fragment is no longer moved out of `#payment`. WooCommerce may replace its normal payment fragment and keep it in Step 03. The existing `updated_checkout` listener remains and resynchronizes the shipping mirror.

### Coupon application and total refresh

```text
Source status: unchanged
```

`bindCoupon()`, WooCommerce `apply_coupon` AJAX, nonce use and the subsequent `update_checkout` trigger are byte-for-byte unchanged.

### Error routing

```text
Source status: preserved with one required correction
```

Existing billing/shipping/payment error inference remains. Terms/privacy errors now route to Step 03 instead of removed Step 04.

### Terms error visibility

```text
Source status: preserved in Step 03
```

The capture guard blocks submit when terms are missing, keeps the customer on Step 03 and displays the existing SAFE5 notice.

### Place Order authority

```text
Source status: preserved
```

No Place Order clone is created. No relocation is performed. The single real WooCommerce `#place_order` stays inside the native payment output in Step 03.

### Duplicate-order risk

```text
Source status: no new duplicate-submit path found
Runtime status: must be tested
```

The package adds no second submit button, no synthetic order request and no second WooCommerce submit call. Absolute absence of duplicate orders still requires a one-click and repeat-click local regression test.

### Crypto redirect

```text
Source status: preserved
Runtime status: must be tested
```

The package does not change gateway selection, WooCommerce submit, gateway IDs, redirects or Crypto V0.2.5. The expected legacy `/crypto-pay/` handoff remains the required runtime test.

## 7. Static validation

```text
form-checkout.php: php -l pass
checkout-safe5.js: node --check pass
checkout-safe5.css: tinycss2 errors = 0
CSS braces: 83 / 83
CSS comments: 12 / 12
manifest hashes: exact match
```

Forbidden obsolete references are absent:

```text
no data-sf-safe5-view="4"
no data-sf-safe5-next="4"
no data-sf-safe5-step-go="4"
no fillReview
no relocatePlaceOrder
no Place Order relocation target
no current !== 4 submit guard
no showStep(root, 4)
```

Required V2/live references remain:

```text
Address / Shipping / Payment / Confirmed progress
Step 01 / 02 / 03 views
Confirmed disabled result stage
woocommerce_checkout_payment()
woocommerce_order_review()
native Step-03 #place_order
syncShippingMirror()
bindCoupon()
update_checkout
updated_checkout
checkout_error
```

## 8. Honest safety classification

The package may be described as:

```text
source-audited
minimal-diff
V2-flow-aligned
reversible
acceptable for local-site installation and regression testing
```

It may not be described as:

```text
absolute zero-risk
runtime-proven before installation
final visual 1:1 acceptance
production-ready
```

Final visual and interaction closure still requires the later bounded V2 visual migration plus real 1366 / 390 / 360 browser acceptance.

## 9. Current status

```text
Broad first candidate: prohibited
Three-column minimal candidate: superseded and prohibited
Corrected V2-flow package: issued
Runtime installation: not yet performed
Browser regression: not yet performed
Checkout: Not done
```
