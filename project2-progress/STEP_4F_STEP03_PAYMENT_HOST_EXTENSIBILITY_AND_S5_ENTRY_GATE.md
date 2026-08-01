# Project 2 · Step 03 Payment Host Extensibility and S5 Entry Gate

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Purpose

This document answers two questions:

```text
1. What is the immediate next Project 2 Checkout task?
2. Can future payment methods be added without rebuilding the Step-03 page?
```

It does not authorize live WordPress, WooCommerce, plugin or production CSS changes.

## 2. Current audit result

The accepted Step-03 static page already contains a reusable visual shell:

```text
preview/spatial-flow-checkout-payment-v1.html
```

Existing reusable structure:

```text
left Step-03 payment workspace
payment-methods container
payment-method item pattern
selected-method entry area
one final Checkout action
right final Order Summary
accepted Address / Contact / Shipping context
accepted desktop and mobile composition
```

Therefore the complete page does not need to be redesigned when a future payment gateway is enabled.

However, runtime extensibility is not yet complete.

Current limitations:

```text
- the static HTML contains one hard-coded Cryptocurrency method
- the method description still refers to choosing supported assets/networks
- the shared static JavaScript contains Crypto-specific routing behavior
- no formal gateway descriptor or presentation-mode registry exists
- no generic selected-gateway renderer contract exists
- no generic final-action label/behavior contract exists
```

Conclusion:

```text
Visual/layout reservation: present
Gateway/runtime reservation: incomplete
```

## 3. Authoritative Step-03 role

Step 03 remains one reusable payment host for all actually enabled WooCommerce gateways.

It must provide:

```text
- eligible payment methods supplied by WooCommerce
- gateway-specific fields or handoff
- final order summary and total
- terms/privacy consent where required
- one final Pay / Place order action
```

It must not become a permanently Crypto-specific page merely because Cryptocurrency is currently the only confirmed active method.

It must also not display fake inactive methods for visual fullness.

## 4. WooCommerce remains the gateway registry

Future payment methods must come from the actual WooCommerce gateway registry and eligibility rules.

Project 2 must not maintain a separate hard-coded master list that can drift from WooCommerce.

Authoritative sources in live implementation:

```text
WooCommerce available/eligible gateways
selected gateway ID
Gateway-owned validation and processing
WooCommerce order and payment status
```

Project 2 owns presentation and bounded gateway-family adapters, not gateway truth.

## 5. Extensible payment-host contract

The final Step-03 host must conceptually expose these stable regions:

```text
Payment Host
├─ Express Wallet Zone, rendered only when an eligible real wallet exists
├─ Payment Method List, generated from eligible WooCommerce gateways
├─ Selected Method Panel, rendered according to gateway presentation mode
└─ Final Action Zone, one authoritative payment/order action
```

These are stable host regions, not four mandatory visible boxes.

When only one real gateway exists, the page may show only that one method. Empty regions must not create blank visual placeholders.

## 6. Gateway descriptor contract

Every enabled gateway entering the Project-2 Step-03 host must resolve to a normalized descriptor such as:

```text
gateway_id
customer_title
customer_description
family
presentation_mode
icon or brand mark when legitimately supplied
action_label
supports_inline_fields
supports_redirect
supports_dedicated_workspace
supports_offline_instructions
eligible
```

The descriptor is a presentation adapter around real WooCommerce gateway capability. It does not replace the Gateway object.

## 7. Presentation modes

The payment host must support these gateway-family modes without rebuilding the page.

### A. Inline secure fields

Typical use:

```text
Credit / Debit Card
```

Behavior:

```text
select method
→ render gateway-owned secure fields in Selected Method Panel
→ one final Pay action
```

Project 2 must not collect raw card data itself.

### B. Express wallet

Typical use:

```text
Apple Pay
Google Pay
```

Behavior:

```text
render only when the real gateway/browser/device reports eligibility
→ use the shared payment host/result architecture
```

No inactive wallet placeholder is shown.

### C. Redirect or hosted handoff

Typical use:

```text
PayPal or another redirect gateway when later enabled
```

Behavior:

```text
select method
→ concise gateway summary
→ one final action
→ gateway redirect/hosted flow
→ canonical WooCommerce result
```

### D. Dedicated workspace

Current use:

```text
Cryptocurrency
```

Behavior:

```text
select Cryptocurrency in the Step-03 host
→ concise handoff only
→ one final payment/order action
→ WooCommerce creates the order
→ gateway process_payment()
→ dedicated Step-03 Crypto Workspace
```

The full asset/network/invoice/transfer/verification lifecycle must not default-expand inline.

### E. Offline / delayed instructions

Typical use:

```text
Direct Bank Transfer when intentionally enabled
```

Behavior:

```text
select method
→ concise explanation
→ one final Place order action
→ order enters the correct unpaid/on-hold state
→ result page uses payment-pending language
```

## 8. Unknown or newly installed gateways

A newly installed gateway must not require cloning the entire Checkout page.

Required fallback rule:

```text
1. WooCommerce determines whether the gateway is available.
2. Project 2 looks for a registered presentation adapter.
3. If an adapter exists, use its approved family presentation.
4. If no adapter exists, preserve a safe WooCommerce-native rendering fallback inside the Selected Method Panel.
5. Do not silently hide an eligible gateway merely because Project 2 has no bespoke design yet.
```

A new gateway may still need one small adapter for polished visual integration, but it must not require rebuilding Address, Shipping, Order Summary, progress steps or the whole Payment page.

## 9. Final-action contract

Step 03 always has one authoritative final action.

Its customer label and behavior may change by selected gateway:

```text
Card: Pay now
Crypto: Continue to secure Crypto payment
Redirect gateway: Continue to [Gateway]
Bank transfer: Place order
```

But the host must maintain one action zone and one order-submission path.

Prohibited:

```text
method selection
→ generic Continue
→ second generic Review/Confirm page
→ another final Pay button
```

Gateway-specific Workspace actions after order creation are not a second generic Checkout confirmation. They are payment-completion actions inside the same Step-03 lifecycle.

## 10. Current Cryptocurrency mapping

Current confirmed gateway:

```text
gateway_id: spatial_flow_crypto
family: cryptocurrency
presentation_mode: dedicated_workspace
asset: USDT
network: TRON / TRC20
customer asset/network selection: unavailable
```

Current main Step-03 entry should eventually communicate only:

```text
Cryptocurrency
USDT on TRON / TRC20
Complete payment in a secure dedicated workspace
```

It must not say that the customer will choose among supported assets or networks under the present gateway.

## 11. Immediate next bounded task

Before creating and linking S5, perform one bounded Step-03 Payment Host extensibility pass.

Allowed scope:

```text
1. lock a generic payment-method descriptor/adapter model for the static reference
2. correct the current Cryptocurrency description to fixed USDT / TRON truth
3. preserve the existing payment-method list as a reusable host
4. add or confirm a generic selected-method panel boundary without visual restructuring
5. replace hard-coded Crypto-only static routing logic with a small registry-driven handoff model
6. keep only Cryptocurrency visibly rendered because it is the only confirmed active method
7. preserve the accepted two-column layout, context card, Order Summary and mobile composition
```

Not allowed in this pass:

```text
- adding fake Card, Apple Pay, Google Pay, PayPal or Bank Transfer entries
- redesigning Step 03
- modifying live WooCommerce or plugin files
- creating S5 in the same change group
- changing Step 01 or Step 02
- reopening S3 visual acceptance
```

## 12. Sequence after the host pass

```text
Step-03 Payment Host extensibility pass
→ user verifies that the visible page is unchanged except truthful Crypto copy/behavior
→ S5 dedicated Step-03 Invoice / Waiting Workspace shell
→ supported verification/recovery states
→ Step 04 result
→ full static link/responsive acceptance
→ live Checkout ownership audit
→ dynamic WooCommerce gateway integration
```

## 13. Acceptance criteria for future gateway extensibility

This gate passes only when all are true:

```text
- Step 03 remains a generic payment host
- only truly enabled methods are shown
- adding a future gateway does not require rebuilding the whole page
- each gateway family can choose inline, wallet, redirect, workspace or offline presentation
- unknown eligible gateways have a safe native fallback
- one final action zone remains authoritative
- Crypto remains a dedicated Workspace handoff, not a default-open accordion
- current fixed USDT / TRON truth is accurately represented
- accepted Step-03 visual structure remains intact
```

## 14. Current stop point

```text
S3: accepted and closed
S4A: accepted and closed
S4B capability alignment and integration contract: completed
Current next bounded work: Step-03 Payment Host extensibility pass
S5: begins only after that bounded pass is accepted
Live Checkout/plugin integration: deferred
Checkout: Not done
```
