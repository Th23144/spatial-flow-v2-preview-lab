# Step 4F · R1 Malformed Email Runtime Evidence

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

User-supplied live local Checkout screenshot after entering a malformed email address and attempting to continue from Step 01.

```text
Active stage: Address
Observed email value: malformed address ending with @
Checkout status: Not done
```

## 2. Confirmed runtime behavior

The screenshot confirms:

```text
- Address remains active
- Shipping remains pending
- Payment remains pending
- Confirmed remains pending
- no navigation to Step 02 occurred
- a visible error notice appears above the Checkout body
- billing/contact fields remain rendered
- Order Summary remains rendered
```

Observed notice:

```text
Please enter a valid email address.
```

Classification:

```text
Malformed-email detection: passed
Step-01 retention: passed
Premature Step-02 navigation: not observed
Visible validation notice: passed
```

## 3. Evidence boundary

The screenshot proves the visible runtime block and stage retention. It does not independently prove server-side email validation for a direct crafted request, which remains WooCommerce authority and is outside this screenshot gate.

## 4. Remaining R1 gates

```text
- directly observe address-driven shipping/totals recalculation
- observe selected shipping-rate persistence after updated_checkout
- perform 1366 / 390 / 360 runtime review
- execute bounded strict V2 visual migration
```

Coupon source remains unchanged and retains its later planned commerce regression.

## 5. Current decision

```text
Malformed-email runtime gate: passed
R1 interaction regression: continues
Next gate: address-driven shipping/totals recalculation and persistence
Checkout: Not done
```
