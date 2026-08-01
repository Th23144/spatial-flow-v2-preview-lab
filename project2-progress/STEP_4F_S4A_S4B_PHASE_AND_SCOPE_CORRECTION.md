# Project 2 · Checkout S4A / S4B Phase and Scope Correction

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative phase status

```text
S3 main Step-03 Payment page: accepted and closed
S4A plugin-agnostic asset/network interaction reference: accepted and closed
S4B payment-plugin capability alignment and corrected integration contract: completed
S5 dedicated Step-03 Invoice / Waiting Workspace shell: not started
Plugin live integration: deferred
Checkout: Not done
```

## 2. Main Step 03 is the payment page

The authoritative Step-03 purpose is:

```text
- show available payment methods
- show payment-method-specific fields or handoff
- show final order summary and total
- provide one final Pay / Place order action
```

The current static page shows only Cryptocurrency because it is the only confirmed active method. That does not convert Step 03 into a cryptocurrency-only product architecture.

The payment-method region must remain capable of supporting future confirmed methods such as:

```text
Card / wallet
Cryptocurrency
Bank transfer when intentionally enabled
other future WooCommerce gateways
```

No unconfirmed method is displayed as active merely to fill the page.

## 3. Payment families do not share one inline-expansion model

Locked distinction:

```text
Card / wallet:
compact gateway fields may appear inline inside Step 03

Cryptocurrency:
asset/network/invoice/transfer/verification is a large lifecycle
and must not default-expand as one long inline accordion

Bank transfer:
offline instruction / delayed-confirmation flow
```

Therefore selecting Cryptocurrency presents a concise entry/handoff in the main Step-03 payment page, then enters a dedicated Crypto Payment Workspace that is still visually and functionally Step 03.

## 4. S4A remains closed

Accepted S4A artifact:

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

S4A proved a generic interaction model for gateways that may support:

```text
asset search and selection
asset-dependent network selection
selection reset
selection summary
continue only after a valid pair
```

Its USDT / USDC / BTC and TRON / Ethereum / Solana / Bitcoin entries are static examples only.

S4A is not the current gateway implementation and is not reopened.

## 5. What S4B actually determined

S4B reviewed the real plugin and established:

```text
Plugin: Spatial Flow Crypto Pay Trial
Gateway ID: spatial_flow_crypto
Current asset: USDT
Current network: TRON / TRC20
Environment: administrator-selected mainnet / nile / shasta
Customer asset/network selection: not supported
WooCommerce order is created before the invoice
Unpaid state: on-hold
Invoice: create or reuse after order creation
Verification: customer submits TRON transaction hash
Server authority: retained TronGrid validation + payment_complete()
```

S4B also approved:

```text
server-rendered Step-03 workspace bootstrap
same-origin REST operations
WooCommerce order-pay recovery route
old /crypto-pay/ path retained as rollback
one active invoice per unpaid order
no fake automatic monitoring
no operational countdown / expiry in the first revision
no QR in the first revision
transaction-hash submission as the required verification action
```

## 6. Critical gateway-alignment consequence

Because the current plugin supports only one fixed pair:

```text
USDT on TRON / TRC20
```

the customer has no asset or network decision to make.

Therefore the generic S4A selector is bypassed in the current production-facing flow. It is not replaced with another intermediate page containing two fixed cards.

The rejected sequence is:

```text
Step 03 Payment
→ Continue with Cryptocurrency
→ fixed USDT / TRON confirmation page
→ Continue to Create Crypto Invoice
```

That would create a redundant second confirmation click and behave like a separate review step.

## 7. Correct current flow

```text
Step 03 Payment
→ concise Cryptocurrency entry/handoff
→ one final payment / place-order action
→ WooCommerce creates the order
→ order becomes on-hold
→ process_payment() opens the dedicated Step-03 Crypto Workspace
→ workspace automatically creates or restores the USDT / TRON invoice
→ customer transfers funds and submits the transaction hash
→ server verifies and calls payment_complete()
→ Step 04 WooCommerce Order Received / Thank You
```

The Crypto Workspace:

```text
- remains Step 03
- preserves the order summary and Checkout identity
- is not a small inline accordion
- is not Step 04 or Step 05
- does not ask for address or shipping again
- does not create a duplicate order
```

## 8. Correct next static work

The next full static surface is:

```text
S5 dedicated Step-03 Invoice / Waiting Workspace shell
```

It must represent only plugin-supported first-phase data and actions:

```text
invoice ID
USDT amount
TRON / TRC20
active environment disclosure
receiver address
copy amount / address
waiting-payment instructions
required TRON transaction-hash field
manual Refresh status
customer-safe deterministic rejection messages
recovery-link presentation
paid-confirmed transition to Step 04
```

It must not claim:

```text
QR
live countdown
operational expiry
automatic chain monitoring
confirmation-count progress
multi-asset or customer-selectable networks
```

Before S5 is linked, only a bounded copy/action correction may be made to the accepted main Step-03 payment entry. Its two-column structure, context card, order summary and accepted mobile composition remain locked.

## 9. Rejected implementation and rollback

The attempted separate fixed-USDT / TRON confirmation page was rejected and removed.

Authoritative rollback record:

```text
project2-progress/STEP_4F_S4B_GATEWAY_ALIGNED_USDT_TRON_STATIC_IMPLEMENTATION.md
```

## 10. Current exact stop point

```text
S4A: accepted and closed
S4B: completed as capability alignment + integration contract
Rejected extra confirmation page: removed
S5: next full static page
Plugin installation and Plugin Step 2: not current work
Live Checkout: not started
Checkout: Not done
```
