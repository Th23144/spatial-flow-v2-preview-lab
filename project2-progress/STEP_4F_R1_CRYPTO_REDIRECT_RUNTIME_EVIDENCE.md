# Step 4F · R1 Crypto Redirect Runtime Evidence

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

User-supplied live local screenshot after completing:

```text
Address → Shipping → Payment
→ select Pay with Crypto
→ accept Terms
→ click the single native Place Order control once
```

Observed result:

```text
Route: /crypto-pay/
Observed order: #3576
Observed order total: USD 44.99
Observed network: TRON Nile Testnet
Observed token: Test USDT
Observed action: Generate Payment Invoice
Checkout status: Not done
```

The screenshot exposed a WooCommerce order key in the browser address bar. The key is intentionally not copied into this repository record.

## 2. Confirmed runtime behavior

The screenshot confirms:

```text
- Step 03 successfully handed the order to the existing Spatial Flow Crypto Pay Trial V0.2.5 flow
- the legacy /crypto-pay/ route loaded
- order #3576 is associated with the Crypto page
- the displayed order total remains USD 44.99
- TRON Nile Testnet remains selected
- Test USDT remains available
- the Generate Payment Invoice control renders
- no PHP white screen or fatal route failure is visible
```

Classification:

```text
Crypto gateway selection: passed
Native Checkout submit to Crypto gateway: passed
Legacy /crypto-pay/ redirect: passed
Crypto V0.2.5 initial page render: passed
Invoice generation: not tested in this R1 gate
Sandbox completion: not tested in this R1 gate
```

R1 required only proof that removing Review and retaining native Place Order did not break the existing Crypto redirect. That requirement is satisfied.

## 3. Evidence boundary

This screenshot does not prove:

```text
- invoice generation after pressing Generate Payment Invoice
- Sandbox success after invoice generation
- final Processing result state
- WooCommerce admin order notes
```

Those capabilities were already baseline-tested during R0. They remain available for the later dedicated Crypto regression/decision group and are not required to repeat for this bounded R1 redirect gate.

## 4. Remaining R1 items

Still open:

```text
- Step 02 back control says BACK TO INFORMATION instead of BACK TO ADDRESS
- malformed-email blocking should be rechecked after the R1 source change
- address-driven shipping/totals recalculation should be observed directly
- selected shipping-rate persistence after updated_checkout should be observed
- responsive 1366 / 390 / 360 runtime review remains open
- strict V2 visual migration has not started
```

## 5. Current decision

```text
Normal test order route: passed
Visible duplicate-order check: passed
Crypto /crypto-pay/ redirect: passed
R1 core submit architecture: passed
R1 remains open for the listed corrections and remaining interaction/visual gates
Checkout: Not done
```
