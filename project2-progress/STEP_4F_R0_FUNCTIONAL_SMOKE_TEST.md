# Step 4F · R0 Functional Smoke Test

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Scope

This is a pre-change smoke test of the current legacy Checkout baseline.

```text
No source file was changed.
No WordPress/WooCommerce setting was changed.
No gateway was enabled, disabled or reordered.
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

Gateway used:

```text
Gateway ID: spatial_flow_crypto
Displayed title: Pay with Crypto
Plugin: Spatial Flow Crypto Pay Trial V0.2.5
Network: TRON Nile Testnet / TRC20
Asset: Test USDT
```

### Recorded evidence

The user supplied three screenshots from one Sandbox order path.

#### Legacy Crypto entry

Observed:

```text
Order number: 3574
Legacy route: /crypto-pay/
Order total: USD 20.99
Payment amount: 20.99 Test USDT
Selected network: TRON Nile Testnet
Selected token: Test USDT
Action: GENERATE PAYMENT INVOICE
```

The screenshot contained a WooCommerce order key in the browser URL. The key is intentionally not reproduced in this repository record.

#### Generated invoice / waiting state

Observed:

```text
Order number: 3574
Status displayed: Waiting Payment
Amount: 20.99 Test USDT
Network: TRON Nile Testnet / TRC20
Invoice interface: loaded
Receiver-address field: present
Invoice ID: present
Administrator-only Sandbox Test Mode panel: present
SIMULATE SUCCESSFUL PAYMENT control: present
Transaction-hash submission interface: present
```

The receiver address, full order key and full invoice identifier are intentionally not reproduced in this repository record.

#### Result after Sandbox success

Observed from the real WooCommerce result object:

```text
Order number: 3574
Payment method: Pay with Crypto
Order status displayed: Processing
Total: $20.99
Sandbox notice: displayed
Sandbox notice states that the payment was simulated and no real blockchain payment was made
Simulated reference: displayed but not reproduced here
```

The result proves that the existing Sandbox control reached the server-side success path, transitioned the order into WooCommerce's paid/processing state and loaded the canonical order-received template.

### Test B result

| Check | Result | Evidence boundary |
|---|---|---|
| B1. Pay with Crypto selected in Checkout | Pass by resulting gateway path | The resulting order uses Pay with Crypto and reaches `/crypto-pay/`; no separate Step-03 selection screenshot was supplied for this order. |
| B2. Native Place Order creates a WooCommerce order | Pass for one observed order | Order #3574 appears throughout the Crypto and result pages. Duplicate-order absence was not independently audited in admin. |
| B3. Pre-payment order is on-hold | Supported, not independently admin-captured | V0.2.5 source contract sets the order to on-hold; the live page shows `Waiting Payment`. No separate pre-success WooCommerce admin status screenshot was supplied. |
| B4. Legacy `/crypto-pay/` route loads | Pass | Browser URL and Crypto Payment page supplied. |
| B5. Invoice creation/reuse interface loads | Pass | Generated invoice screen supplied with amount, network, address field and invoice ID. |
| B6. Administrator-only Sandbox control is available | Pass | Sandbox Test Mode panel and success control supplied while logged in as administrator. |
| B7. Sandbox success reaches WooCommerce result | Pass | Order-received result supplied after the simulation. |
| B8. Final status and Sandbox note recorded | Pass from rendered order object | Status Processing; payment method Pay with Crypto; Sandbox simulation notice displayed. No separate WooCommerce admin order-notes screenshot was supplied. |

Test B core baseline conclusion:

```text
Current Crypto V0.2.5 legacy Sandbox path: operational
Observed created order: #3574
Pre-success UI state: Waiting Payment
Expected source-owned pre-payment order state: on-hold
Sandbox result state: processing
Gateway: spatial_flow_crypto / Pay with Crypto
Canonical WooCommerce result template: loaded
Test B: recorded
```

### Security evidence boundary

The supplied screenshots visibly contained local test values including a WooCommerce order key, receiver address and invoice ID.

```text
- none of those full values are stored in the GitHub documentation
- future screenshots should obscure the order key and receiver address
- no private key, API key or secret was supplied
```

## 4. R0 functional smoke-test conclusion

```text
Test A normal WooCommerce legacy path: recorded
Test B Crypto V0.2.5 Sandbox path: recorded
Current legacy Checkout baseline: restorable and functionally observable
Known on-hold result-language defect: carried into R4
Malformed-email, exact shipping-recalculation transition, duplicate-order audit and separate admin-order screenshots: not independently captured in R0; retained as R1/R7 regression cases
R0 functional smoke test: completed
R1: not started
Runtime source modification: none
Checkout: Not done
```

Passing R0 does not approve the current four-step design or current result semantics. It closes the pre-change baseline only.
