# Step 4F · Pre-Batch-6 Step-04 Confirmation and Packaging Service Scope Decision

Date: 2026-08-08  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

Immediately after Batch 5 Order Summary / Coupon / Trust was accepted and closed, the user paused before Batch 6 to confirm two items:

1. whether the Project 2 reference set contains a Step-04 page and how the live commerce site is supposed to implement it;
2. a previously omitted requirement: customers must be able to choose a packaging service.

## Step 04 repository truth

The repository does contain a dedicated Step-04 static reference:

```text
preview/spatial-flow-thank-you-v1.html
preview/spatial-flow-thank-you-v1.css
preview/spatial-flow-thank-you-v1.js
```

The locked flow is:

```text
01 Address
-> 02 Shipping
-> 03 Payment
-> 04 WooCommerce order result / Thank You / Receipt
```

Step 04 is NOT a fourth Checkout input/review screen. It is the server-owned WooCommerce order-received result after order/payment processing.

The accepted static result family currently demonstrates at least:

```text
Confirmed
Pending / on-hold
```

The live R4 implementation is explicitly broader and must classify real WooCommerce server states, including:

```text
processing / completed -> Confirmed
pending / on-hold -> Pending / unpaid
failed -> Failed / recovery when safe
cancelled -> Cancelled
refunded -> Refunded/support semantics
Sandbox Crypto success -> canonical paid result
```

Browser/query state must never decide real payment success.

Step 04 is intentionally deferred until its later implementation stage. The user may inspect the existing static reference now, but Step 04 design/implementation changes are not part of the current packaging task.

## Packaging service requirement

New user requirement:

```text
The commerce site must allow the customer to choose product packaging.
```

No packaging implementation currently exists in the repository search baseline.

### Critical terminology boundary

The current feature is **PRODUCT PACKAGING**, not courier / transport packaging.

```text
Transport packaging
= the outer parcel / shipping carton / courier protection used to send the order
= multiple product packages for one address may still travel together in one outer parcel
= not customer-configured by this feature

Product packaging
= the packaging directly around or presenting the purchased products
= may be standard or gift-oriented
= customers may decide which purchased units are packaged together or separately
= this is the feature being specified here
```

The two layers must remain logically independent. Choosing separate product packages must not imply separate shipments.

## Provisional accepted direction · Product Packaging Groups

On 2026-08-08 the user provisionally accepted the following direction, with the explicit note that it may be adjusted later.

The earlier binary choice:

```text
A. one packaging choice for the whole order
B. one packaging choice per cart item
```

is superseded.

The current provisional model is **Product Packaging Groups**.

A checkout order may contain one or more product packaging groups. Each group may contain one or more purchased units.

Example:

```text
Order contains products A, B, C, D, E

Package Group 1
- A
- B
- Standard Packaging

Package Group 2
- C
- Gift Packaging
- Gift message

Package Group 3
- D
- E
- Gift Packaging
- Gift message
```

All three product packages may still travel together in one transport parcel to the same shipping address.

### Quantity allocation requirement

The model must operate on cart-item quantities, not only product IDs.

Example:

```text
Ash Quartz Bracelet x3

Package Group 1
- quantity 2
- Standard Packaging

Package Group 2
- quantity 1
- Gift Packaging
```

Therefore the durable model must be capable of representing:

```text
cart item / variation identity
+ quantity allocation
+ package group identity
+ packaging tier
+ optional packaging metadata
```

A simple `product_id -> packaging choice` mapping is insufficient.

## Packaging tiers

The user currently wants two product-packaging tiers.

### 1. Standard Packaging

```text
Standard / normal product packaging
Price: Free
Personalized-name feature: ENABLED by default for the first implementation
```

Standard Packaging may include a customer-supplied personalized name/signature on the product packaging.

This feature must remain administratively switchable so operations can disable it later without a checkout architecture rewrite.

Required configurable controls should support, where appropriate:

```text
Enabled / disabled
Customer-facing label
Description
Character limit
Optional price policy
```

Initial implementation default:

```text
Enabled = true
Price = Free unless later changed by operations
```

When disabled later, the customer-facing personalized-name input must disappear cleanly while Standard Packaging itself remains available.

### 2. Gift Packaging

```text
More refined gift-oriented product packaging
Initial placeholder price: $9.00 per Gift Packaging Group
```

The `$9.00` value is an implementation/testing placeholder only, not a locked commercial price. It must be editable from the existing commerce/admin configuration so operations can replace it later without code changes.

Gift Packaging is expected to support a per-package gift-card / message field.

Each gift packaging group should own its own message so one order can contain multiple gifts for different recipients.

Final production price, message-length limit, and final copy remain operational/product decisions.

### Provisional fee semantics

The recommended provisional fee model is per **Gift Packaging Group**, not blindly per product quantity.

Example:

```text
A + B in one Gift Packaging Group
-> one gift-packaging fee

A in Gift Package 1
B in Gift Package 2
-> two gift-packaging fees
```

This matches the physical packaging unit more closely than charging once per line item. This fee semantic remains adjustable before implementation is locked.

## Recommended owner and placement

Product packaging remains owned by WooCommerce commerce state and is presented in **Step 02 Shipping**, before Step 03 Payment.

Recommended live flow:

```text
Step 02 Shipping
  - shipping method
  - product packaging
    - default standard packaging
    - optional Customize Packaging interaction
    - package groups when customization is needed
  - Continue to Payment
```

Reason:

```text
Product packaging is a fulfillment decision, not a payment-gateway decision.
Any paid Gift Packaging must be known before Payment so Step 03 already shows the final server-backed amount.
```

For ordinary orders, the default UI should remain lightweight. Customers who do not need special packaging should not be forced through a complex grouping workflow.

A future front-end pattern may therefore use a simple default such as:

```text
Standard packaging included
Personalized name [input shown by default while feature is enabled]
[ Customize packaging ]
```

and only expose package grouping when customization is requested.

## Required commerce ownership

The packaging choice must not be a browser-only visual toggle.

Required properties:

```text
- WooCommerce/session owns the active packaging-group state
- grouping survives Step 02 -> Step 03
- paid packaging fees are calculated server-side
- totals refresh through WooCommerce
- Batch-5 Order Summary displays packaging fee truth when applicable
- Step 03 uses the resulting final amount
- packaging groups are copied into durable WooCommerce order data
- admin can inspect the selected grouping, tier, quantity allocation, personalized name and gift message
- customer-facing order result/email/order details can expose the durable order truth where semantically appropriate
- backend presentation labels/options/prices/availability remain editable according to Project 2 backend-editability requirements
- no second Checkout backend system is introduced
```

## Compatibility reserve

The commerce site may eventually sell products that cannot physically share the same product package.

The data model should therefore leave room for an internal packaging-compatibility / packaging-class concept, for example:

```text
Jewelry
Small Object
Textile
Oversized
```

This does NOT require a complex customer-facing compatibility system in the first implementation. It is an architecture reserve so later packaging rules do not require replacing the underlying model.

## Decisions still open before live implementation is locked

The following remain intentionally unresolved:

```text
- final production Gift Packaging price (current implementation placeholder: $9.00)
- final personalized-name label / character limit / copy
- final Gift Message label / character limit / copy
- any physical capacity or compatibility limits for a single product package
```

The Standard Packaging personalized-name feature is now explicitly **enabled by default** for the initial implementation, while retaining an admin on/off control.

The provisional Product Packaging Groups direction may be refined if the user changes product or fulfillment requirements.

## Regression impact

This feature changes order totals and durable order data, so it must be implemented BEFORE Batch 6 final R1 end-to-end acceptance.

Batch 6 therefore remains paused.

After packaging implementation, at minimum revalidate:

```text
- Step 02 packaging UI at 1366 / 390 / 360
- default Standard Packaging path without customization
- default personalized-name field when enabled
- clean disappearance of personalized-name field when admin setting is disabled
- grouping / regrouping behavior with multiple products
- same-line quantity splitting across groups
- selection persistence
- WooCommerce total recalculation
- Standard-only order has no unintended fee
- one Gift Packaging Group charges exactly one configured fee
- multiple Gift Packaging Groups charge the correct configured fee count
- Batch-5 Summary packaging fee/total rendering
- Step 03 final amount
- normal test order contains durable packaging-group truth exactly once
- personalized names remain attached to the correct Standard package group
- gift messages remain attached to their correct Gift package groups
- Crypto on-hold order contains the same packaging truth and correct total
- Step-04 result/order details can read the durable order truth later in R4
```

Batch 5 remains historically closed for the accepted pre-packaging baseline; the new feature requires a targeted Summary regression rather than pretending the new fee row was previously tested.

## Sequence decision

Current sequence remains:

```text
Batch 5: CLOSED
-> Product Packaging Groups specification (CURRENT)
-> Product Packaging Groups bounded implementation + targeted runtime acceptance
-> Batch 6: R1 final end-to-end acceptance
-> Batch 7: R2 notice/error ownership
-> Batch 9: R4 Step-04 live result-status matrix
```

Checkout remains:

```text
Not done
```
