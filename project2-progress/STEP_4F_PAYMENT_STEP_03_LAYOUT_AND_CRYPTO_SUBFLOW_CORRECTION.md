# Step 4F · Payment Step 03 Layout and Crypto Subflow Correction

Last updated: 2026-07-30  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Cart: Completed 1:1
Checkout: Not done
Gate 0 architecture: Approved, still being fully specified
Gate 1 audit: Paused
Current source edit: None
```

## 1. Visual correction — desktop is two columns, not three

The explanatory mockup that showed:

```text
Deliver / Shipping | Payment Methods | Order Summary
```

as three desktop columns is rejected as a formal reference.

The authoritative desktop structure is:

```text
Left main column: payment workspace
Right column: sticky final Order Summary
```

The left main column contains, in vertical order:

```text
- Deliver-to summary + Edit
- Shipping-method summary + Edit
- wallet methods when eligible
- regular payment-method selector
- selected payment-method content
- terms / privacy consent
- one final payment or order-submission action
```

The address and shipping summaries are sections inside the left payment column. They are not a third rail or separate desktop column.

Recommended desktop proportion remains aligned with the approved commerce language:

```text
Left payment workspace: approximately 7fr
Right final Order Summary: approximately 5fr
Gap: approximately 72–80px at desktop reference width
```

## 2. Payment-method family distinction

Payment methods must not be forced into one identical accordion pattern.

```text
Card / wallet:
small input surface or gateway-controlled sheet; suitable for inline presentation

Cryptocurrency:
large catalog + quote + invoice + chain-confirmation lifecycle; not suitable for a simple inline accordion

Bank transfer:
offline / delayed-confirmation instruction flow; no online payment fields
```

WooCommerce remains the registry and processing authority, but each gateway family may use a different presentation and handoff pattern.

## 3. Correct Step 03 main payment view

The main Step 03 view shows only concise payment-method entry points:

```text
Wallets when eligible
Credit / Debit Card
Cryptocurrency
Direct Bank Transfer when intentionally enabled
Future gateways
```

### Card

Selecting Card may expand secure gateway-owned fields inside the left column.

### Cryptocurrency

Selecting Cryptocurrency must not expand the complete chain/token catalog inline below the radio option.

Instead, the selected card presents a concise summary and one transition action:

```text
Cryptocurrency
Choose from supported digital assets and networks.
[ Continue with Cryptocurrency ]
```

The user then enters a dedicated Crypto Payment Workspace that remains functionally part of Step 03.

## 4. Dedicated Crypto Payment Workspace

The Crypto Payment Workspace is a dedicated subview, not a fourth or fifth business step.

It may replace the normal Step 03 body while preserving:

```text
- the same Checkout session
- the same WooCommerce order / order draft
- Step 03 as the active progress state
- a Back to payment methods action
- the final Order Summary and amount authority
```

It should not be a small modal or narrow dropdown because the supported asset/network catalog may be large.

### Recommended two-column Crypto Workspace

```text
Left main column:
asset search and selection
network selection
quote details
invoice / payment status

Right column:
sticky order amount and final Order Summary
```

The two-column rule therefore remains intact.

## 5. Asset and network selection order

Do not expose arbitrary blockchain and token combinations.

The UI must be driven by a backend-supported payment-pair registry:

```text
asset + allowed network pairs
```

Recommended customer flow:

```text
1. Search or choose the asset the customer wants to send
2. Choose one enabled network for that asset
3. Review quote, rate-lock duration and network warning
4. Create the payment invoice
```

Example:

```text
USDT
→ TRC20 / ERC20 / BEP20 only when each pair is actually enabled
```

A network filter may exist, but the primary interaction should support token/asset search because customers commonly know the asset they intend to pay with before choosing the transport network.

The selector should support:

```text
- search by asset name or symbol
- optional network filter chips
- favorites / recently used pairs when appropriate
- backend-controlled visibility and ordering
- clear network badges on every supported pair
- explicit warning against sending on another network
```

## 6. Crypto Workspace states

### State A — choose asset and network

```text
Search assets
Supported asset list
Selected asset
Allowed network list
Estimated crypto amount
Rate-lock duration
Continue / Create invoice
```

### State B — invoice created / awaiting payment

```text
asset
network
exact amount
receiving address
QR code
invoice ID
expiry countdown
copy amount
copy address
change payment method
```

### State C — transaction detected / confirming

```text
Payment detected
Confirming on chain
confirmed amount
transaction hash when available
no false success claim
```

### State D — confirmed

```text
server / gateway verification confirms payment
→ Step 04 Order Confirmed / Thank You / Receipt
```

### Recovery states

```text
expired
underpaid
overpaid
wrong asset / wrong network report
failed
cancelled
```

These remain in Step 03 and provide only safe actions such as:

```text
Create new invoice
Retry
Choose another payment method
Contact support
```

## 7. Routing rule

A dedicated internal page or route for the Crypto Payment Workspace is allowed, but it must be treated as a Step 03 subroute, not a new Checkout business step.

Acceptable conceptual forms:

```text
same Checkout URL with internal state
or
order-pay / gateway-specific Step 03 subroute
```

The exact URL is not locked before the live ownership audit.

Regardless of route:

```text
- no repeated address collection
- no repeated shipping selection
- no second generic payment-method page after payment commitment
- no duplicate order creation
- no independent crypto-success page with a conflicting definition of success
```

## 8. Locked visual rule

```text
Main Step 03 desktop:
2 columns only

Left:
Deliver-to + Shipping summaries + payment method area

Right:
final Order Summary

Crypto selected:
transition to a dedicated two-column Crypto Payment Workspace
not a long inline accordion
```

## 9. Evidence and implementation boundary

This correction supersedes the prior explanatory image wherever that image implied:

```text
- a three-column desktop Checkout
- complete cryptocurrency asset/network selection inside a small inline accordion
```

No PHP, JavaScript, CSS, template, gateway or database change is authorized by this document.

Do not proceed to Gate 1 until the remaining Step 03 layout, crypto selector behavior, invoice behavior and result-page contract are explicitly approved.