# Step 4F · R1 Live Checkout Reconstruction

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Current authority

```text
R0: completed and closed
R1: authorized and installed for local validation
Checkout: Not done
```

Only these runtime files may change in R1:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

The following remain prohibited in R1:

```text
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
woocommerce/checkout/thankyou.php
WPCode
CartFlows
WooCommerce page ID / URL / shortcode
Spatial Flow Crypto Pay Trial V0.2.5
gateway configuration
```

## 2. Strict V2 operation flow

The user re-locked this rule:

```text
All live page operation experience must strictly follow the accepted Project 2 V2 repository reference pages.
```

Checkout progression:

```text
01 Address
→ 02 Shipping
→ 03 Payment
→ 04 Confirmed
```

Meaning:

```text
- Address, Shipping and Payment are interactive Checkout views.
- Confirmed remains visible as the fourth progress stage.
- Confirmed is disabled/non-interactive on Checkout.
- No Step-04 input view exists.
- Real confirmation is rendered only by the WooCommerce order result.
```

## 3. Candidate history

### Broad first candidate

```text
project2-checkout-r1-candidate-20260802.zip
Status: prohibited
```

Reason: mixed functional restructuring with a broad whole-file visual rewrite; CSS grew 65.23%, PHP and JavaScript changed excessive unrelated scope.

### Three-column minimal candidate

```text
project2-checkout-r1-minimal-audited-20260802.zip
SHA256: aad2b0d5bb9b1dfcc2a8565f01c47de662e38c248e96f299e3bfe71d16b5a906
Status: superseded and prohibited
```

Reason: removed the visible Confirmed progress stage and therefore did not strictly match V2.

### Corrected current package

Authoritative record:

```text
project2-progress/STEP_4F_R1_V2_FLOW_AUDITED_PACKAGE.md
```

Package:

```text
project2-checkout-r1-v2-flow-audited-20260802.zip
ZIP bytes: 16,062
SHA256: c2a7cfce51fd8e404ede7f9854df178169167f55fe666d97b9c0df59bb2c27f4
```

Classification:

```text
source-audited
minimal-diff
V2-flow-aligned
reversible
acceptable for local-site installation and regression testing
```

Not claimed:

```text
absolute zero runtime risk before installation
final visual 1:1 acceptance
production readiness
```

## 4. Corrected package file audit

| File | R0 bytes / lines | Candidate bytes / lines | Delta |
|---|---:|---:|---:|
| `form-checkout.php` | 9,140 / 278 | 7,787 / 237 | -1,353 bytes / -41 lines |
| `checkout-safe5.js` | 24,463 / 780 | 20,659 / 668 | -3,804 bytes / -112 lines |
| `checkout-safe5.css` | 20,936 / 599 | 20,931 / 599 | -5 bytes / 0 lines |

No bottom CSS append, breakpoint change, field-grid rewrite, design-token rewrite or shared-file change exists.

Post-install bounded CSS correction:

```text
checkout-safe5.css
20,931 bytes / 599 lines
→ 21,238 bytes / 609 lines
Delta: +307 bytes / +10 lines
SHA256: adcd779a7e41676096fc40ae75cf67174ee038d156f853c5873c5528807d5d73
```

The correction normalizes the native Step-03 `.place-order` host and trust section only. No PHP, JavaScript, breakpoint, field-grid or bottom-append change was made.

## 5. Locked functional boundary

```text
- progress remains Address / Shipping / Payment / Confirmed
- Review input page is removed
- Confirmed has no client navigation target
- native WooCommerce billing/contact remains Step 01
- native WooCommerce shipping remains Step 02
- native dynamic payment gateways remain Step 03
- the single real `.place-order` / `#place_order` remains inside Step 03
- no Place Order cloning or relocation
- WooCommerce submit, nonce, AJAX, gateway fields and redirects remain authoritative
- Coupon remains server-backed
- Crypto V0.2.5 legacy `/crypto-pay/` handoff remains
- pressing Enter cannot bypass Address or Shipping
```

## 6. Commerce behavior source audit

```text
Address-driven shipping/totals refresh: source ownership preserved; runtime test required
updated_checkout payment availability: native payment fragment remains in Step 03; runtime test required
Coupon AJAX and total refresh: unchanged
error routing: unchanged except Terms/Privacy now maps to Step 03
Terms error: visible and blocked in Step 03; runtime test required
Place Order: single native WooCommerce control, not cloned
Duplicate order: no new submit path found; runtime repeat-click test required
Crypto redirect: source path unchanged; runtime `/crypto-pay/` test required
```

## 7. Runtime installation evidence

Authoritative records:

```text
project2-progress/STEP_4F_R1_V2_FLOW_RUNTIME_INSTALLATION_EVIDENCE.md
project2-progress/STEP_4F_R1_STEP02_SHIPPING_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1_STEP03_PAYMENT_LAYOUT_REGRESSION.md
```

### Step 01

Screenshot confirms:

```text
- /checkout-2-2/ loads without PHP white screen
- Address / Shipping / Payment / Confirmed progress is visible
- Address is active
- old Review progress label is absent
- Step 01 billing/contact fields render
- Order Summary renders
- Continue to Shipping renders
```

### Step 02

Screenshot confirms:

```text
- Address is marked complete
- Shipping is active
- Payment and Confirmed remain pending
- no Review progress item is present
- one WooCommerce shipping method renders
- observed subtotal: $36.00
- observed shipping: $8.99
- observed total: $44.99
- Continue to Payment renders
```

The visible total is internally consistent:

```text
$36.00 + $8.99 = $44.99
```

Confirmed strict-V2 mismatch:

```text
Current label: BACK TO INFORMATION
Required label: BACK TO ADDRESS
```

### Step 03

Initial screenshot confirmed:

```text
- both enabled gateways render: 测试 + Pay with Crypto
- one native Place Order button renders
- terms/privacy content renders
- Order Summary remains visible
```

It also exposed a severe layout regression: the three trust items below Place Order collapsed to min-content width and stretched the page vertically.

After one bounded CSS replacement, a second screenshot confirms:

```text
- the left column returned to normal height
- all three trust cards render at normal width
- trust text no longer wraps character-by-character
- both gateways remain visible
- one native Place Order remains visible
- terms/privacy content remains visible
- Order Summary remains visible
- total remains $44.99
```

Classification:

```text
Step 03 catastrophic layout regression: corrected
Step 03 initial layout integrity: passed from screenshot
Gateway rendering: passed
Single native Place Order presence: passed
```

## 8. Why the visual appearance remains close to the prior page

The corrected package intentionally completed only the bounded functional shell work.

```text
R1-A/B/C: installed for local validation
R1-D strict V2 visual migration: not started
```

It preserves the existing SAFE5 appearance so that functional risk can be isolated before the full reference-page visual migration. Therefore the main visible changes are progress semantics and removal of Review ownership, not a wholesale visual redesign.

## 9. Current execution point

```text
Corrected V2-flow package: installed
Step-01 initial render: passed
Step-02 initial render and visible totals: passed
Step-03 gateways and single Place Order: passed
Step-03 layout regression: corrected and screenshot-verified
Strict V2 back-label copy: failed; correction required
Terms rejection: pending
Normal order creation: pending
Duplicate-order prevention: pending
Crypto redirect: pending
Final V2 visual migration: not started
R2: blocked
Checkout: Not done
```

Next gate:

```text
Leave Terms unchecked
→ click Place Order once
→ confirm the order is not created
→ confirm the error remains visible in Step 03
```
