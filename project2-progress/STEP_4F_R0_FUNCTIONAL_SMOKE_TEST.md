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

Gateway used:

```text
Gateway ID: bacs
Displayed title: 测试
```

### Recorded evidence

The user supplied three screenshots from one completed baseline order path.

#### Step 03 Payment

Observed:

```text
- legacy four-step indicator remains active
- Information and Shipping are marked complete
- Step 03 Payment is active
- both enabled gateways render dynamically:
  - 测试
  - Pay with Crypto
- 测试 is selected
- the server-backed Order Summary displays:
  - product: Black Onyx Bracelet with Stainless Steel Connectors
  - subtotal: $36.00
  - shipping: $8.99
  - total: $44.99
- the current forward action is REVIEW ORDER
```

This confirms the front-end runtime availability result matches the R0 gateway export for the tested cart/session.

#### Legacy Step 04 Review

Observed:

```text
- Step 04 Review is reachable
- Contact, shipping address, shipping method and payment method are summarized
- payment method is 测试
- native terms checkbox is present
- one visible PLACE ORDER control is present
- Order Summary remains synchronized at $44.99
```

This confirms the exact legacy behavior that R1 will remove: native Place Order is currently presented in the rejected Review input step.

#### Resulting order-received page

Observed order data:

```text
Order number: 3571
Date displayed: August 2, 2026
Payment method: 测试
Order status displayed: On hold
Total: $44.99
```

The successful appearance of a new order-received page after the Review submit proves that the observed baseline path created a WooCommerce order and reached the current result template.

### Test A result

| Check | Result | Evidence boundary |
|---|---|---|
| A1. Checkout route/page loads | Pass | Existing confirmed page ID/URL plus current Checkout screenshots; the new screenshots do not include the browser URL bar. |
| A2. Step 01 fields render | Pass for workflow progression | Step 01 is marked complete and its submitted contact/address data appears in Review/result. No separate Step-01 screenshot was supplied. |
| A3. Required/email validation | Not independently evidenced | No error-state screenshot or explicit result text was supplied. This remains a later regression case; it does not block recording the completed order baseline. |
| A4. Shipping and totals render/update | Pass for final state | Shipping method and $8.99 shipping amount appear consistently in Payment, Review and result. The recalculation transition itself was not independently captured. |
| A5. Enabled gateways render dynamically | Pass | Both 测试 and Pay with Crypto are visible in Step 03. |
| A6. Legacy Review is reachable | Pass | Review screenshot supplied. |
| A7. Place Order creates an order | Pass for one observed order | Resulting order #3571 exists in the rendered WooCommerce result object. Duplicate-order absence was not independently audited in admin. |
| A8. Current order-received page loads | Pass | Full current result composition supplied. The screenshot does not include the browser URL bar. |
| A9. Expected gateway/status recorded | Pass from rendered order object | Payment method 测试; status On hold. No separate WooCommerce admin order screenshot was supplied. |

Test A core baseline conclusion:

```text
Normal WooCommerce legacy path: operational
Observed created order: #3571
Gateway: bacs / 测试
Resulting state: on-hold
Test A: recorded
```

### Defect confirmed during Test A

The order is explicitly `On hold`, but the current result composition still displays success/fulfillment language including:

```text
Your Order Has Been Received.
Your order ... is now being prepared for shipment.
Order Received — successfully placed and added to our fulfillment queue.
Carefully Prepared.
On The Way.
```

This confirms the source-audited R4 defect in real runtime output:

```text
pending / on-hold orders are presented with paid/success/fulfillment-oriented language
```

This defect is accepted only as a pre-change baseline. It must be corrected by the server-authoritative result-mapping group before Checkout can reach `Completed 1:1`.

No customer test data from the screenshots is reproduced in the repository record beyond the non-sensitive order number, total, gateway and status needed for the baseline.

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
R0 Test A: recorded
R0 Test B: pending
R0 functional smoke test: in progress
R1: blocked and not started
Runtime source modification: none
Checkout: Not done
```
