# Project 2 · Rejected S4B Redundant USDT / TRON Confirmation Page and Rollback

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Final status

```text
Implementation: rejected by user
Visual review: failed before acceptance
Flow decision: invalid
Three preview files: removed
S4A: remains accepted and closed
S4B capability alignment and corrected integration contract: remain valid
S5 Invoice / Waiting: not started
Checkout: Not done
```

## 2. Rejected implementation

The rejected group created:

```text
preview/spatial-flow-checkout-crypto-gateway-v1.html
preview/spatial-flow-checkout-crypto-gateway-v1.css
preview/spatial-flow-checkout-crypto-gateway-v1.js
```

It rendered a separate fixed-USDT / TRON confirmation page after the main Step-03 Payment page.

The user rejected this direction because it reduced the prior Checkout/payment architecture work to two fixed capability cards and added an unnecessary confirmation surface.

## 3. Why it was architecturally wrong

The locked Step-03 architecture states:

```text
- Step 03 is the payment page and final Checkout commitment surface
- payment methods are concise entry points inside Step 03
- Card / wallet may expose compact inline gateway fields
- Cryptocurrency must not expand a large token/network/invoice lifecycle inline
- Cryptocurrency enters a dedicated Step-03 Crypto Payment Workspace
- there is one final Pay / Place order action
- there is no second generic confirmation click or separate review page
```

The rejected page produced the wrong sequence:

```text
Step 03 Payment
→ Continue with Cryptocurrency
→ separate fixed USDT / TRON confirmation page
→ Continue to Create Crypto Invoice
```

That sequence introduced a redundant second confirmation action even though the reviewed plugin supports only one fixed route:

```text
USDT on TRON / TRC20
```

Because the customer has no asset or network choice, there is nothing to select or reconfirm on an intermediate page.

## 4. Correct gateway-aligned sequence

The correct sequence remains:

```text
Step 03 Payment page
→ customer selects Cryptocurrency as the payment method
→ one final payment / place-order action
→ WooCommerce creates the order
→ order enters on-hold
→ process_payment() opens the dedicated Step-03 Crypto Workspace
→ plugin/server automatically creates or restores the fixed USDT / TRON invoice
→ workspace displays exact amount, receiver address and required transaction-hash action
→ server verifies payment
→ payment_complete()
→ Step 04 WooCommerce Order Received / Thank You
```

The dedicated Workspace is not an inline accordion and is not a fifth business step.

## 5. S4A meaning remains unchanged

Accepted S4A remains:

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

Its multi-asset / network selector is a plugin-agnostic interaction reference for a possible future gateway catalog.

Under the current fixed USDT / TRON plugin capability:

```text
- S4A is not inserted as a required production page
- USDT / TRON is not presented as two customer choices
- the customer does not choose Mainnet / Nile / Shasta
- the main flow may bypass asset/network selection entirely
```

## 6. What S4B actually completed

S4B is the payment-plugin capability-alignment and integration-contract phase.

Already completed S4B outputs include:

```text
- V0.2.5 source and capability review
- confirmation of fixed USDT / TRON capability
- confirmation that Crypto requires a dedicated Step-03 Workspace
- Project 2 / plugin / WooCommerce ownership split
- order-pay recovery direction
- invoice, transaction-hash, status and rollback contract
- corrected authorization, idempotency and first-phase state rules
```

S4B did not require an additional fixed-route confirmation page.

## 7. Rollback commits

```text
Remove HTML:
b246a99b93afd9d7466ef3f2826c94e7b6e59961

Remove CSS:
4fe0eb73108e174bffdb18d01df875b0a9d5198f

Remove JS:
e443c959f8a0a3da3aa2d2c3aef12031450c2589
```

No accepted S4A, Step 01, Step 02, Step 03, shared Checkout script, plugin source or live WordPress file was changed by the rollback.

## 8. Current stop point

```text
Do not create another intermediate currency/network confirmation page.
Do not reopen S4A.
Do not install the plugin merely to test the old visual page.

Next static design target:
S5 dedicated Step-03 Invoice / Waiting Workspace shell,
using the completed S4B integration contract and fixed USDT / TRON server-owned data model.

Before S5 implementation, the main Step-03 payment entry copy/action must be reviewed only as a bounded handoff adjustment; its accepted overall structure remains locked.
```
