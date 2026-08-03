# Step 4F · R1 Step 03 Payment Layout Regression

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Runtime evidence

User-supplied full-page screenshot after navigating:

```text
Address → Shipping → Payment
```

Initial failure observed:

```text
- Address and Shipping complete
- Payment active
- Confirmed pending
- both enabled gateways rendered: 测试 + Pay with Crypto
- one native Place Order button rendered
- terms/privacy content rendered
- Order Summary remained visible with $36.00 subtotal + $8.99 shipping = $44.99 total
- three checkout trust items below Place Order collapsed to near-min-content width
- trust item copy wrapped one character per line
- the left column became thousands of pixels tall
```

Initial classification:

```text
Step 03 gateway rendering: passed
Single native Place Order presence: passed from screenshot
Step 03 layout integrity: failed severely
R1 runtime acceptance: blocked
Order submission prohibited until corrected
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

The native `.place-order` row remained inside the WooCommerce/theme payment layout context. The existing function:

```text
spatial_flow_checkout_visual_trust()
```

is attached to:

```text
woocommerce_review_order_after_submit
```

Therefore the three `.sf-checkout-trust__item` cards are children of `.place-order`.

When `.place-order` remained inside `#payment`, inherited WooCommerce/theme flex/layout behavior compressed the trust section to its min-content width. The button still spanned the row because `#place_order` had `width: 100%`, while the trust cards shrank and wrapped character-by-character.

This was an implementation regression caused by incomplete normalization of the native `.place-order` host. It was not a gateway, total, database or Crypto failure.

## 3. Applied bounded correction

The existing `.place-order` selector block was replaced in place with explicit Step-03 host normalization:

```text
- display: block
- width: 100%
- max-width: none
- float: none
- clear: both
```

The injected `.sf-checkout-trust` section received:

```text
- width: 100%
- min-width: 0
```

No PHP or JavaScript change was required.

## 4. Audited CSS result

Installed pre-fix R1 CSS:

```text
assets/css/checkout-safe5.css
20,931 bytes
599 lines
SHA256: e1c855fd9044132982a084e7d0b95472c2fd50e233620b6dad9322c774797174
```

Corrected CSS:

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

## 5. Post-fix runtime evidence

User-supplied Step-03 screenshot after applying the bounded CSS replacement confirms:

```text
- the left column returned to normal page height
- Secure Checkout, Shipping Shown Before Payment and Easy Returns render at normal width
- trust-card copy no longer wraps one character per line
- both enabled gateways remain visible
- one native Place Order button remains visible
- terms/privacy content remains visible
- Order Summary remains visible
- total remains $44.99
- Back to Shipping remains available
```

Post-fix classification:

```text
Step 03 catastrophic layout regression: corrected
Step 03 initial layout integrity: passed from screenshot
Gateway rendering: passed
Single native Place Order presence: passed
Order submission path: not yet tested
Terms-error routing: not yet tested
Duplicate-order prevention: not yet tested
Crypto /crypto-pay/ redirect: not yet tested
Checkout: Not done
```

## 6. Remaining R1 defects and gates

Still open:

```text
- Step 02 Back control says BACK TO INFORMATION instead of BACK TO ADDRESS
- Terms rejection must remain visible in Step 03
- normal test gateway must create exactly one order
- repeat-click/processing behavior must not create a duplicate order
- Crypto must still redirect to legacy /crypto-pay/
- strict V2 visual migration has not started
```

## 7. Current stop point

```text
R1 package installed
Step 01 render: passed
Step 02 initial render: passed with back-label copy defect
Step 03 gateway/Place Order presence: passed
Step 03 layout regression: corrected and screenshot-verified
Next: test Terms rejection without creating an order
R1-D visual migration: not started
R2: blocked
Checkout: Not done
```
