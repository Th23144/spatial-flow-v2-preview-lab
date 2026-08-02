# Step 4F · R0 Functional Smoke Test

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Scope

This is a pre-change smoke test of the current legacy Checkout baseline.

```text
No source file is changed.
No WordPress/WooCommerce setting is changed.
No gateway is enabled, disabled or reordered.
Passing does not accept the current design.
It proves the baseline can be restored and retested after R1.
```

Current enabled gateways from the R0 runtime export:

```text
bacs — title: 测试
spatial_flow_crypto — title: Pay with Crypto
```

## 2. Test A · Normal WooCommerce order path

Use the enabled `bacs` gateway titled `测试`.

Required observations:

```text
A1. Cart proceeds to /checkout-2-2/.
A2. Step 01 billing/contact fields render.
A3. Required-field and malformed-email validation are present.
A4. Step 02 shipping method(s) and totals render/update.
A5. Step 03 renders the enabled gateways dynamically.
A6. Current legacy Review step is reachable.
A7. Native Place Order creates one order only.
A8. WooCommerce redirects to the current order-received page.
A9. Order exists in WooCommerce admin with expected gateway and status.
```

Evidence requested:

```text
- one screenshot of Step 03 showing both enabled gateways
- one screenshot of the legacy Review step with Place Order
- one screenshot of the resulting order-received page with address bar
- order number, gateway title and resulting WooCommerce status in text
```

Do not expose customer personal information; test values may be used or sensitive fields may be obscured.

## 3. Test B · Current Crypto V0.2.5 Sandbox path

Run only after Test A is recorded.

Required observations:

```text
B1. Select Pay with Crypto in Step 03.
B2. Native Place Order creates one WooCommerce order.
B3. Order enters on-hold before verified payment.
B4. Redirect reaches the current /crypto-pay/ legacy page.
B5. Existing invoice creation/reuse interface loads.
B6. Administrator-only Sandbox success control is available under the supplied local settings.
B7. Sandbox success calls the existing server path and reaches WooCommerce order-received.
B8. Resulting order status and notes are recorded.
```

Evidence requested:

```text
- screenshot of /crypto-pay/ with address bar
- order number and initial on-hold status
- screenshot of order-received after Sandbox success
- final WooCommerce order status and relevant order-note summary
```

No real chain transfer is required in R0.

## 4. R0 completion rule

R0 closes only when both Test A and Test B are recorded, or when a concrete existing-baseline defect is documented and explicitly carried into R1/R6.

```text
R0 functional smoke test: awaiting Test A
R1: blocked and not started
Runtime source modification: none
Checkout: Not done
```
