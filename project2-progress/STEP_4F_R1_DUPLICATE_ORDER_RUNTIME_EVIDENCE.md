# Step 4F · R1 Duplicate-Order Runtime Evidence

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

User-supplied WooCommerce Orders list screenshot after the normal test-gateway submission that produced order `#3575`.

```text
Observed result order from prior screenshot: #3575
Observed result total: $44.99
Observed result status: On hold / 保留
Checkout status: Not done
```

## 2. Orders-list evidence

The screenshot shows the newest visible orders in descending sequence:

```text
#3575 — 8 minutes ago — 保留 — $44.99
#3574 — 17 hours ago — 正在处理 — $20.99
#3573 — 17 hours ago — 保留 — $20.99
#3572 — 17 hours ago — 保留 — $20.99
#3571 — 17 hours ago — 保留 — $44.99
```

The list therefore confirms:

```text
- #3575 is the only newly created order from the current normal-payment test
- no adjacent #3576 or second same-time $44.99 order exists
- the next older order is #3574 from approximately 17 hours earlier
- the one-click normal submission did not create a visible duplicate order
```

The payment-method column is not shown in this Orders-list view, but the immediately preceding order-result screenshot independently tied `#3575` to gateway `测试`, total `$44.99`, and status `On hold`.

## 3. Classification

```text
Normal one-click order creation: passed
Visible duplicate-order check: passed
Observed resulting order: #3575 only
Immediate adjacent duplicate: not present
```

This evidence covers the tested one-click submission. It does not constitute a deliberate rapid-repeat-click stress test; that broader stress case remains appropriate for later full regression if required.

## 4. Remaining R1 gates

```text
- Crypto gateway must still create one order and redirect to legacy /crypto-pay/
- Step 02 Back control must change from BACK TO INFORMATION to BACK TO ADDRESS
- strict V2 visual/interaction migration remains pending
- On-hold result copy remains assigned to R4
```

## 5. Current decision

```text
Duplicate-order runtime gate for the normal one-click order: passed
Next gate: Crypto V0.2.5 legacy /crypto-pay/ redirect regression
Checkout: Not done
```
