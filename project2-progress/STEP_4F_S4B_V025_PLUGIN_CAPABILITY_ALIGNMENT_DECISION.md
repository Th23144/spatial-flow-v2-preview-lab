# Project 2 · Checkout S4B V0.2.5 Payment-Plugin Capability Alignment Decision

Date: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Decision status

```text
Phase S4A: accepted and closed
Phase S4B capability handoff: received and reviewed
Phase S4B architecture decision: approved baseline
S4A production adaptation: not started
Phase S5 static implementation: not started
Live Checkout implementation: not started
Checkout page status: Not done
```

This document converts the separate payment-plugin handoff into the authoritative Project 2 Checkout architecture baseline.

## 2. Reviewed external baseline

Plugin package:

```text
Spatial Flow Crypto Pay Trial
Version: 0.2.5
Plugin directory: spatial-flow-crypto-pay
Package: spatial-flow-crypto-pay-trial-v0.2.5.zip
SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

Reviewed package files:

```text
spatial-flow-crypto-pay/spatial-flow-crypto-pay.php
spatial-flow-crypto-pay/templates/crypto-pay-page.php
spatial-flow-crypto-pay/assets/crypto-pay.css
spatial-flow-crypto-pay/assets/crypto-pay.js
```

The external handoff report and the uploaded V0.2.5 ZIP agree on the core architecture described below.

The ZIP itself is not added to this repository. Project 2 records only the capability decision and integration boundaries.

## 3. Confirmed plugin identity and WooCommerce integration

```text
Gateway class: SF_Crypto_Pay_Gateway
Gateway ID: spatial_flow_crypto
Gateway type: Classic WC_Payment_Gateway
Default customer-facing title: Pay with Crypto
Primary current asset: USDT
Primary current network family: TRON
```

The plugin currently uses:

```text
woocommerce_payment_gateways
woocommerce_update_options_payment_gateways_spatial_flow_crypto
WC_Payment_Gateway::process_payment()
WordPress admin-post actions
WooCommerce payment_complete()
WooCommerce order-received / Thank You result
```

The current plugin does not expose:

```text
REST API
AJAX JSON API
WooCommerce Blocks payment registration
headless invoice endpoint
payment-status polling endpoint
asset-list endpoint
network-list endpoint
webhook endpoint
WebSocket / SSE status stream
```

## 4. Confirmed current payment flow

The current V0.2.5 implementation executes this technical sequence:

```text
WooCommerce Checkout submission
→ WooCommerce creates the order
→ SF_Crypto_Pay_Gateway::process_payment(order_id)
→ order enters on-hold
→ customer is redirected to the plugin-created /crypto-pay/ page
→ customer clicks Generate Payment Invoice
→ server creates or reuses a Crypto invoice
→ page displays USDT / TRON payment information
→ customer transfers externally
→ customer manually submits the transaction hash
→ WordPress server synchronously queries TronGrid
→ server validates token, receiver, amount, time and duplicate use
→ failure keeps order on-hold and records the rejection
→ success calls payment_complete(tx_hash)
→ WooCommerce normally moves the order to processing
→ customer enters WooCommerce Order Received / Thank You
```

Authoritative implications:

```text
- the WooCommerce order exists before the Crypto invoice is created
- the order remains on-hold while payment is unresolved
- the browser does not have authority to mark payment successful
- payment success remains server-controlled
- the current plugin requires customer-submitted tx hash
- closing the browser stops all payment detection because no server worker, Cron or webhook exists
```

## 5. Confirmed asset and network capability

### Current real production-facing capability

```text
Asset: USDT
Network: TRON / TRC20
```

### Configured TRON environment modes

```text
mainnet
nile
shasta
```

These modes are selected globally by the administrator. They are not customer-selectable per order.

Current customer selection limitations:

```text
- Generate Invoice does not accept asset
- Generate Invoice does not accept network
- the plugin has no per-order asset/network data model
- the plugin has no dynamic asset/network capability endpoint
- current network/token buttons in the plugin template are presentation only
```

Not currently implemented as real payment capabilities:

```text
USDC
BTC
Ethereum payment
Solana payment
Bitcoin network payment
BNB Chain payment
Base payment
Arbitrum payment
customer-selectable multi-network routing
```

## 6. S4A compatibility decision

Authoritative choice:

```text
C. S4A must be reduced to a pre-invoice confirmation surface for the current plugin.
```

The accepted S4A static reference remains valuable as a design and interaction study, but its multi-asset and multi-network choices must not be transferred into the real V0.2.5-backed implementation.

### Production-facing S4A target under the current plugin

```text
Cryptocurrency payment
Asset: USDT
Network: TRON / TRC20
Order total
Current environment disclosure where applicable
Network compatibility warning
Continue to secure Crypto payment workspace
```

For an administrator-controlled test environment, the customer-facing environment label may instead disclose:

```text
Test USDT
TRON Nile Testnet
```

The customer must not choose Mainnet, Nile or Shasta. Environment ownership remains administrative.

### S4A visual elements that may remain

```text
editorial-commerce layout
payment summary
asset and network confirmation rows
risk disclosure
order amount context
primary Continue action
Back to payment methods
responsive composition
```

### S4A behavior that must not enter production under V0.2.5

```text
USDT / USDC / BTC switching
TRON / Ethereum / Solana / Bitcoin switching
asset search as real capability
network filtering as real capability
customer-submitted asset parameter
customer-submitted network parameter
claim that the plugin validates arbitrary asset/network pairs
```

The original S4A example selector remains an accepted static reference, not the gateway-specific final page.

## 7. S5 Invoice / Waiting decision

Authoritative choice:

```text
B. Project 2 may own the visual shell, but plugin/server data and payment authority remain mandatory.
```

Project 2 may design:

```text
Step-03 payment workspace shell
invoice summary
asset/network confirmation
amount presentation
receiver-address presentation
copy controls
QR placement if later supplied
waiting-payment status language
manual tx-hash fallback field
error and rejection presentation
mobile and desktop responsive behavior
Back / recovery navigation
```

The plugin or WordPress server must own:

```text
WooCommerce Order ID and Order Key validation
invoice creation and reuse
invoice ID
true order amount
true expected Crypto amount
receiver address
chain/token environment
invoice persistence
transaction-hash verification
old-transaction rejection
receiver validation
duplicate-transaction protection
payment success decision
payment_complete()
WooCommerce order-status mutation
Sandbox permission enforcement
```

The existing independent `/crypto-pay/` page is not visually authoritative and may later be replaced or integrated into the Step-03 visual system. Its server-side payment logic must not be bypassed.

## 8. User-visible and technical flow alignment

The locked user-visible business sequence remains:

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

The truthful technical sequence for the current classic WooCommerce gateway is:

```text
01 Address
→ 02 Shipping
→ 03 Payment method confirmation
→ submit WooCommerce Checkout
→ WooCommerce order is created and placed on-hold
→ Step-03 Crypto invoice / waiting workspace
→ server verifies payment
→ payment_complete()
→ 04 Order Confirmed / Thank You / Receipt
```

Therefore:

```text
- order creation occurs during Step 03 before payment confirmation
- Crypto invoice / waiting remains a Step-03 subview
- on-hold is not Step 04 success
- Step 04 is reached only after server-authoritative successful payment
```

## 9. Current Quote / Invoice capability lock

Implemented now:

```text
read WooCommerce order total
create invoice ID
persist invoice row
store fiat amount/currency
map numeric order total directly to USDT amount
store and display receiver address
store expires_at timestamp
store payment status
manually verify submitted tx hash
```

Not implemented now:

```text
real fiat-to-Crypto market quote
Quote ID
rate lock
non-USD-safe conversion
network-fee calculation
QR generation
active countdown
server-enforced invoice expiry
automatic payment detection
confirming state and confirmation count
underpayment accumulation
overpayment workflow
late-payment workflow
server worker / WP-Cron / webhook
```

`expires_at`, `minimum_confirmations`, `confirmations`, `tx_submitted`, `manual_review` and similar dormant or future-facing fields must not be represented as completed operational behavior without new implementation and testing.

## 10. S4B integration contract required before page modification

Before the accepted S4A static page is adapted and before S5 is built, the payment-plugin workstream must produce a bounded integration contract for the next plugin revision.

Minimum required contract:

```text
1. create-or-reuse invoice server operation
2. retrieve current invoice server operation
3. normalized invoice response fields
4. manual tx-hash submission operation retained as fallback
5. normalized error codes and customer-safe messages
6. Sandbox behavior through the same response contract
7. order and order-key authorization rules
8. server-authoritative success and order-state rules
9. unfinished-payment recovery behavior
10. explicit declaration of whether automatic status polling is included or deferred
```

Minimum normalized invoice response fields:

```text
order_id
order_key authorization result
invoice_id
payment_method
asset_code
network_code
network_label
environment
fiat_currency
fiat_amount
expected_amount_decimal
receiver_address
status
expires_at if operational
transaction_hash if present
reject_code if present
reject_message if present
sandbox flag
order_received_url only after authorized success
```

The exact transport may later be:

```text
REST
authenticated WordPress AJAX
JSON-producing admin-post compatibility layer
server-rendered PHP integration
```

No transport is approved merely by this document. Security, WooCommerce ownership and recoverability determine the final choice.

## 11. Explicit non-goals for the next bounded plugin revision

Do not expand the immediate integration contract into an uncontrolled payment-platform rewrite.

Not required for the first Project 2 integration revision:

```text
multi-asset launch
multi-chain launch
BTC
USDC
wallet connection
WalletConnect
TronLink invocation
MetaMask
automatic refunds
address pool
HD wallet
production rate provider
full webhook architecture
payment worker fleet
WooCommerce Blocks registration
```

These may become later payment-system phases after the fixed USDT/TRON path is integrated safely.

## 12. Test and evidence boundaries

Actually tested in earlier plugin work:

```text
WooCommerce gateway presence and order creation
on-hold waiting state
independent Crypto payment page
invoice creation and display
receiver-mismatch rejection
old-transaction rejection
no-token-log rejection
TRON address-format normalization
Sandbox administrator-only success path
payment_complete() leading to processing
Thank You navigation
order notes
```

Implemented but not fully tested:

```text
real new Mainnet positive USDT payment
Nile real transfer
Shasta configured transfer
several rejection and API-error branches
```

Not confirmed by local testing:

```text
real email delivery
specific stock reduction behavior
complete V0.2.5 regression
```

## 13. Repository implementation boundary

This S4B decision does not authorize the following yet:

```text
modifying preview/spatial-flow-checkout-crypto-select-v1.html
creating preview/spatial-flow-checkout-crypto-invoice-v1.html
modifying live WordPress Checkout
modifying the payment plugin
changing WooCommerce settings
changing version 2.7.8
```

The next bounded operation is documentation and contract preparation for the separate payment-plugin workstream.

After the plugin-side integration contract is reviewed and approved:

```text
S4A gateway-specific adaptation
→ S5 static Invoice / Waiting shell
→ S6 confirming and recovery architecture based on actual plugin states
→ remaining static-flow acceptance
→ live Checkout ownership audit and reconstruction
```

## 14. Current exact next action

```text
Prepare and approve a strict payment-plugin integration-contract prompt based on this S4B decision.
Do not ask the plugin workstream to generate code until the contract scope and response fields are accepted.
```
