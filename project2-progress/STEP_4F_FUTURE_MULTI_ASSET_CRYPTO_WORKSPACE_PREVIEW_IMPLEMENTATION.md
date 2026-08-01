# Project 2 · Standalone Future Multi-Asset Crypto Workspace Preview

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Status

```text
S5 current fixed USDT / TRON Workspace: accepted and closed
Future multi-asset Crypto Workspace preview: implemented
Preview review: required
Current Checkout route integration: intentionally none
S6 supported verification/recovery states: next formal phase
Live plugin integration: not started
Checkout: Not done
```

## 2. Purpose

The user requested a visible independent Crypto Workspace page showing how future multiple assets and networks can enter the same Step-03 payment workspace without rebuilding Checkout.

This artifact combines the accepted interaction concepts from:

```text
S4A asset/network selection reference
+
S5 Invoice / Waiting Workspace reference
```

into one dedicated future-architecture preview.

## 3. New artifact

```text
preview/spatial-flow-checkout-crypto-workspace-future-v1.html
preview/spatial-flow-checkout-crypto-workspace-future-v1.css
preview/spatial-flow-checkout-crypto-workspace-future-v1.js
```

The page is not linked from:

```text
preview/spatial-flow-checkout-payment-v1.html
```

The current authoritative fixed route remains:

```text
Step 03 Payment
→ current USDT / TRON S5 Workspace
```

## 4. Demonstrated future flow

The preview demonstrates one Step-03 Workspace with internal states:

```text
Choose payment pair
→ Preparing Crypto payment
→ Invoice and transfer
→ Submit transaction identifier
→ server-authoritative verification boundary
```

No additional Checkout business step is introduced.

## 5. Payment-pair examples

Displayed examples:

```text
USDT
- TRON / TRC20: marked as the current supported pair
- Ethereum / ERC20: future example only
- BNB Chain / BEP20: future example only

USDC
- Ethereum / ERC20: future example only
- Solana: future example only

BTC
- Bitcoin: future example only
```

The page repeatedly states that non-TRON examples are not currently enabled.

## 6. Interaction contract

Implemented static interactions:

```text
search example assets
select asset
render only that asset's example networks
clear network when asset changes
show selected pair in the sticky summary
prevent invoice continuation until a complete pair exists
show a brief Preparing state
render selected pair into the Invoice / Waiting shell
adapt amount, address and verification label by pair
copy prototype amount/address
submit a prototype transaction identifier
manual Refresh status
copy preview recovery link
reset to payment-pair selection
```

No real gateway, quote, order, invoice or chain request occurs.

## 7. Architecture boundary

The future production implementation must obtain payment pairs from a server-owned registry such as:

```text
asset code
asset name
network code
network name
enabled
sort order
receiver/address contract
amount/quote contract
verification adapter
customer warning
```

The HTML examples are not the production registry.

## 8. Truthful isolation

The preview is deliberately isolated because the current plugin still supports only:

```text
USDT on TRON / TRC20
```

Therefore:

```text
- it does not replace current S5
- it does not alter Step-03 routing
- it does not expose future examples as enabled Checkout options
- it does not modify S4A
- it does not modify the Crypto plugin
```

## 9. Reused visual foundations

The page loads:

```text
spatial-flow-checkout-flow-v1.css
spatial-flow-checkout-context-v1.css
spatial-flow-checkout-mobile-commerce-v1.css
spatial-flow-checkout-crypto-v1.css
spatial-flow-checkout-crypto-invoice-v1.css
spatial-flow-checkout-crypto-workspace-future-v1.css
```

This preserves the accepted Checkout, selector and S5 visual language while adding only the future integrated Workspace composition.

## 10. Commits

```text
S5 acceptance record:
c3c9da514fbaf56fa17b77f77ff881ab6ea1a766

Future Workspace CSS:
15e438afe8faca82ba29f1758c77ee93056945ec

Future Workspace JS:
9eb9689646088b577a54bef04c2116645a02eb60

Future Workspace HTML:
9e76b1513e45e78c6ec108d23a36753db67dfce6

Style dependency correction:
0247cfe029e609dfa153e87addbeda85c36b4e7f
```

## 11. Range audit

Compared:

```text
Base: f0ca203a52f76d4c9f265aa9744edb08a43a8a6d
Head: 0247cfe029e609dfa153e87addbeda85c36b4e7f
```

Added only:

```text
future Workspace HTML
future Workspace CSS
future Workspace JS
S5 acceptance record
```

Unchanged:

```text
Step 01
Step 02
Step 03 Payment host
S4A selector
current S5 Invoice / Waiting page
shared Checkout JS
payment plugin
live WordPress/WooCommerce source
Project 2 version 2.7.8
```

## 12. Review gate

Review the standalone preview for:

```text
whether the independent Workspace concept is visually clear
whether selection and Invoice states feel like one Step-03 workspace
whether future examples are clearly separated from current support
whether the internal Preparing transition is appropriate
whether the right Order Summary remains useful
390px and 360px usability
```

## 13. Current stop point

```text
Future Workspace preview: waiting for user review
Current payment flow: unchanged
S6: not started in this bounded group
Checkout: Not done
```
