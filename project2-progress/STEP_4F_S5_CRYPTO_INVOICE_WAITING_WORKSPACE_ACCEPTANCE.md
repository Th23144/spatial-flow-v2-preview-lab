# Project 2 · S5 Crypto Invoice / Waiting Workspace Acceptance

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User decision

The user reviewed the S5 Crypto Invoice / Waiting Workspace and confirmed that the current direct flow is acceptable:

```text
Step 03 Payment
→ Continue to secure Crypto payment
→ S5 Invoice / Waiting Workspace
```

The user understood and accepted that no redundant intermediate USDT / TRON confirmation page is required while the current gateway supports only one fixed payment pair.

## 2. Accepted S5 artifact

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
```

Accepted current first-phase presentation:

```text
Waiting for payment
Order / Invoice context
USDT amount
TRON / TRC20
receiver address
copy controls
transfer instructions
required Transaction Hash submission
manual Refresh status
payment recovery link
right-side pending-payment summary
```

## 3. Accepted routing meaning

The static transition is visually direct, but the future live implementation must perform this server-owned sequence behind the single action:

```text
submit WooCommerce Checkout
→ create order
→ order becomes on-hold
→ process_payment()
→ open order-pay-based Step-03 Crypto Workspace
→ create or restore one active invoice
→ render server-authoritative amount and receiver address
```

The browser transition alone is never payment authority.

## 4. Accepted omission of redundant page

The following remains prohibited:

```text
Step 03 Payment
→ fixed USDT / TRON confirmation page
→ second generic Continue/Create Invoice action
→ payment workspace
```

Because the current customer cannot choose another asset or network, this would add no useful decision and would behave like an unnecessary second review step.

## 5. Future multi-asset consequence

The user also confirmed the requirement that future additional assets and networks must not require rebuilding Checkout.

Locked direction:

```text
one supported pair
→ automatically bypass asset/network selection
→ open Invoice / Waiting Workspace

multiple supported pairs
→ open independent Crypto Workspace selection state
→ choose a backend-confirmed asset/network pair
→ create invoice
→ continue inside the same Crypto Workspace shell
```

The accepted S4A selector remains the interaction reference. A separate future-architecture Crypto Workspace preview may combine S4A selection and S5 invoice/waiting states, but it must remain outside the current linked payment flow until the plugin truly supports multiple payment pairs.

## 6. Current phase status

```text
S5: accepted and closed as current fixed USDT / TRON static reference
Independent future multi-asset Crypto Workspace preview: authorized as a separate non-production artifact
S6 real supported verification/recovery states: next formal phase
Live Checkout/plugin integration: not started
Checkout: Not done
```
