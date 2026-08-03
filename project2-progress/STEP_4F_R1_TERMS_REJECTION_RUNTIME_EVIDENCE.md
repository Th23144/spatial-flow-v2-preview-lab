# Step 4F · R1 Terms Rejection Runtime Evidence

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

User-supplied live local Checkout screenshot after leaving the Terms checkbox unchecked and clicking the single native `PLACE ORDER` control once.

```text
URL context: /checkout-2-2/
Active stage: Payment
Checkout status: Not done
```

## 2. Confirmed runtime behavior

The screenshot confirms:

```text
- Address remains complete
- Shipping remains complete
- Payment remains active
- Confirmed remains pending
- no navigation to an order-received or Crypto page occurred
- both enabled gateways remain visible
- the single native Place Order control remains visible
- the Terms checkbox remains unchecked
- a visible error notice appears above the Payment area
```

Observed notice:

```text
Please read and accept the terms and conditions to proceed with your order.
```

Classification:

```text
Terms rejection visibility: passed
Terms error routing to Step 03: passed
Payment stage retention: passed
Unexpected Confirmed navigation: not observed
Unexpected /crypto-pay/ navigation: not observed
```

## 3. Evidence boundary

The screenshot proves visible client/runtime rejection and lack of page navigation during this attempt.

It does not independently prove the WooCommerce admin order count or database state. Therefore:

```text
No order creation from this rejected attempt: strongly expected from the preserved submit guard, but not independently admin-verified in this screenshot
```

This boundary does not block continuing to the normal-order regression, where the before/after order number and backend result will provide stronger order-creation evidence.

## 4. Remaining open items

```text
- Step 02 back label still says BACK TO INFORMATION instead of BACK TO ADDRESS
- normal test gateway must create exactly one order
- repeat-click/processing behavior must not create a duplicate order
- Crypto must still redirect to legacy /crypto-pay/
- strict V2 visual migration has not started
```

## 5. Current decision

```text
Terms rejection runtime gate: passed
R1 functional regression: continues
Next gate: normal test gateway order creation with one click
Checkout: Not done
```
