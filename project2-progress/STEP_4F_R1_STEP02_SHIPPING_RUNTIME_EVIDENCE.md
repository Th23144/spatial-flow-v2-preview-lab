# Step 4F · R1 Step 02 Shipping Runtime Evidence

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

User-supplied desktop screenshot of the live local Checkout page after selecting `Continue to Shipping` from Step 01.

```text
URL: /checkout-2-2/
Runtime source files: corrected R1 V2-flow package
Checkout status: Not done
```

## 2. Confirmed runtime behavior

The screenshot confirms:

```text
- Address is marked complete
- Shipping is active
- Payment remains pending
- Confirmed remains visible and pending
- no Review progress item is present
- Step 02 Shipping Details renders
- one WooCommerce shipping method renders
- observed shipping method: 统一费率: $8.99
- Order Summary remains visible
- observed subtotal: $36.00
- observed shipping: $8.99
- observed total: $44.99
- Continue to Payment renders
- Back control renders
- no PHP white screen or fatal layout collapse is visible
```

The displayed total is arithmetically consistent with the screenshot:

```text
$36.00 + $8.99 = $44.99
```

This is screenshot evidence only. It does not independently prove that a changed address caused a fresh server recalculation during this exact transition.

## 3. Confirmed V2 mismatch

The back control still reads:

```text
BACK TO INFORMATION
```

The locked V2 progression is:

```text
Address → Shipping → Payment → Confirmed
```

Therefore the correct label must be:

```text
BACK TO ADDRESS
```

Classification:

```text
Navigation behavior: not yet tested from this screenshot
Visible operation copy: fails strict V2 consistency
Assigned correction: R1 bounded copy/interaction correction before R1 closure
```

This screenshot is not a final visual 1:1 acceptance. The current SAFE5 visual composition remains pending R1-D strict V2 migration.

## 4. Evidence limits

Not yet proven by this screenshot:

```text
- Back control actually returns to Step 01
- changing address causes a new shipping-method calculation
- shipping selection persistence after updated_checkout
- Step 02 → Step 03 transition
- both enabled payment gateways render after transition
- native Place Order appears exactly once
- Terms error remains visible in Step 03
- normal order creation
- duplicate-order prevention
- Crypto /crypto-pay/ redirect
```

## 5. Current decision

```text
Step 02 initial render: passed
Step 02 totals visible and internally consistent: passed
Strict V2 back-label copy: failed; correction required
R1 functional browser regression: in progress
R1-D visual migration: not started
Checkout: Not done
```

Next runtime gate:

```text
Continue to Payment
→ capture complete Step 03 screenshot
→ verify both enabled gateways and one native Place Order control
```
