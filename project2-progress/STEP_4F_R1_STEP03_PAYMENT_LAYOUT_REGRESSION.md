# Step 4F · R1 Step 03 Payment Layout Regression

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Runtime evidence

User-supplied full-page screenshot after navigating:

```text
Address → Shipping → Payment
```

Observed:

```text
- Address and Shipping are complete
- Payment is active
- Confirmed remains pending
- both enabled gateways render: 测试 + Pay with Crypto
- one native Place Order button renders
- terms/privacy content renders
- Order Summary remains visible with $36.00 subtotal + $8.99 shipping = $44.99 total
- three checkout trust items below Place Order collapse to near-min-content width
- trust item copy wraps one character per line
- the left column becomes thousands of pixels tall
```

Classification:

```text
Step 03 gateway rendering: passed
Single native Place Order presence: passed from screenshot
Step 03 layout integrity: failed severely
R1 runtime acceptance: blocked
Do not submit an order in this state
Checkout: Not done
```

## 2. Root cause

The corrected R1 package removed JavaScript relocation and left the native WooCommerce `.place-order` row inside `#payment`, which is architecturally correct.

The package retargeted only these SAFE5 selectors:

```css
.sf-safe5-place-order-target .place-order
→ .sf-safe5-payment-mount .place-order

.sf-safe5-place-order-target #place_order
→ .sf-safe5-payment-mount #place_order
```

However, the native `.place-order` row remains inside the WooCommerce/theme payment layout context. The existing function:

```text
spatial_flow_checkout_visual_trust()
```

is attached to:

```text
woocommerce_review_order_after_submit
```

Therefore the three `.sf-checkout-trust__item` cards are children of `.place-order`.

When `.place-order` remains inside `#payment`, inherited WooCommerce/theme flex/layout behavior can compress the trust section to its min-content width. The button still spans the row because `#place_order` has `width: 100%`, while the trust cards shrink and wrap character-by-character.

Evidence supporting this diagnosis:

```text
- the only CSS change in the package was the Place Order selector retarget
- the failure begins immediately below the native Place Order button
- the affected content is exactly the trust section inserted by woocommerce_review_order_after_submit
- the same trust content rendered correctly when the complete .place-order row was previously moved outside #payment
```

This is an implementation regression caused by incomplete normalization of the native `.place-order` host. It is not a gateway, total, database or Crypto failure.

## 3. Required correction

The `.place-order` host must be explicitly normalized inside Step 03:

```text
- display: block
- width: 100%
- max-width: none
- float: none
- clear: both
```

The injected `.sf-checkout-trust` section must also receive:

```text
- width: 100%
- min-width: 0
```

No PHP or JavaScript change is required for this defect.

## 4. Audited CSS hotfix candidate

Current installed R1 CSS baseline:

```text
assets/css/checkout-safe5.css
20,931 bytes
599 lines
SHA256: e1c855fd9044132982a084e7d0b95472c2fd50e233620b6dad9322c774797174
```

Audited hotfix candidate:

```text
21,238 bytes
609 lines
Delta: +307 bytes / +10 lines
SHA256: adcd779a7e41676096fc40ae75cf67174ee038d156f853c5873c5528807d5d73
```

Validation:

```text
CSS parser errors: 0
Brace balance: 84 / 84
Comment balance: 12 / 12
Exact replacement anchor count: 1
Bottom append: no
Breakpoint changes: no
Field-grid changes: no
PHP changes: none
JavaScript changes: none
```

## 5. Current stop point

```text
R1 package installed
Step 01 render: passed
Step 02 initial render: passed with Back-to-Information copy defect
Step 03 gateway/Place Order presence: passed
Step 03 layout: failed severely
Order submission: prohibited until corrected
Next: apply one bounded CSS replacement and re-test Step 03
R1-D visual migration: not started
R2: blocked
Checkout: Not done
```
