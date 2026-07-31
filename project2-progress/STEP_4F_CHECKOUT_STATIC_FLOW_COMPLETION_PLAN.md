# Step 4F · Checkout Static Flow Completion Plan

Last updated: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Current status

```text
Cart: Completed 1:1
Checkout: Not done
Phase S3: accepted and closed
Phase S4A: accepted and closed as a plugin-agnostic static reference
Phase S4B V0.2.5 capability alignment: completed
Current gate: payment-plugin integration contract proposal
S4A gateway-specific adaptation: not started
S5 Invoice / Waiting: not started
Live Checkout source work: paused
```

No live Checkout PHP, JavaScript, CartFlows, WooCommerce gateway or broad production CSS change is authorized while the linked static flow and plugin contract remain incomplete.

## 2. Terminology lock

`V2` refers to Project 2 and this repository:

```text
Th23144/spatial-flow-v2-preview-lab
```

It does not mean a separate `checkout-v2` product, directory or page family.

All authoritative Checkout static files remain inside:

```text
preview/
```

## 3. Locked business progression

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Authoritative distinction:

```text
Steps 01–03 = Checkout
Step 04 = post-payment confirmed result
```

Step 04 is not Review and must not ask the customer to confirm or pay again.

Crypto invoice, waiting, verification and recovery remain Step-03 subviews.

## 4. Current authoritative static files

### Main Checkout sequence

```text
preview/spatial-flow-checkout-v1.html
  Step 01 Contact / Address

preview/spatial-flow-checkout-shipping-v1.html
  Step 02 Shipping

preview/spatial-flow-checkout-payment-v1.html
  Step 03 Payment entry

preview/spatial-flow-thank-you-v1.html
  Future Step 04 Order Confirmed / Thank You / Receipt
```

### Current Crypto reference

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

This file is an accepted plugin-agnostic interaction reference. It is not yet the final gateway-specific implementation.

### Planned gateway-aligned Step-03 subviews

Final file count and state pages must follow the approved plugin contract. The likely static family remains:

```text
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-confirming-v1.html
preview/spatial-flow-checkout-crypto-expired-v1.html
preview/spatial-flow-checkout-crypto-failed-v1.html
```

However, a page must not be created merely because it appeared in an early generic plan. It must correspond to a real plugin-supported state or a clearly labeled future architecture state.

## 5. Current linked flow

```text
Cart
→ 01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ fixed Crypto confirmation under the current V0.2.5 capability
→ WooCommerce order creation
→ Step-03 Crypto invoice / waiting workspace
→ server-authoritative payment verification
→ 04 Order Confirmed
```

Back navigation:

```text
02 Shipping → 01 Address
03 Payment → 02 Shipping
Crypto Step-03 subview → 03 Payment where operationally safe
```

Recovery navigation must be based on actual plugin states and WooCommerce order status, not static browser state alone.

## 6. Accepted 01 / 02 / 03 architecture

### Step 01

```text
Contact
Delivery address
Optional order note
Continue to Shipping
Order Summary
```

### Step 02

```text
completed Address + Contact context
Shipping selection
Back to Address
Continue to Payment
Order Summary with selected shipping total
```

The upper `Before it leaves.` card does not show Shipping Method while Shipping is still being selected.

### Step 03

```text
completed Address + Contact + confirmed Shipping Method context
Payment method region
Cryptocurrency as the currently confirmed method
Back to Shipping
gateway handoff action
Order Summary
```

Desktop uses two columns. Mobile preserves the accepted internal two-column context-card information grid.

## 7. Structure-locked visual baseline

Authoritative stylesheet:

```text
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

Accepted visual scope:

```text
Desktop Step 01 field icons
Mobile 01 / 02 / 03 warm layered commerce surfaces
paper-like form fields and option surfaces
stone-green selected states and primary CTAs
stronger Order Summary hierarchy
subtle context-card linework
```

Passed review:

```text
Desktop Step 01 icons
390px Steps 01 / 02 / 03
360px Steps 01 / 02 / 03
```

Forbidden without explicit new approval:

```text
accepted-page DOM restructuring
field or section reordering
invented payment methods
changed transaction semantics
decorative vertical accent strips
changes to accepted Step-03 context spacing
```

## 8. S4A plugin-agnostic reference

Authoritative records:

```text
project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
```

The accepted prototype demonstrates:

```text
asset selection
asset-dependent network display
network selection
selection reset when the asset changes
button enablement only after both selections
sessionStorage continuity
```

All displayed assets and networks are static examples. The reference creates no real WooCommerce order, invoice, address, quote, transaction or payment confirmation.

## 9. S4B V0.2.5 capability baseline

Authoritative decision:

```text
project2-progress/STEP_4F_S4B_V025_PLUGIN_CAPABILITY_ALIGNMENT_DECISION.md
```

Reviewed plugin:

```text
Spatial Flow Crypto Pay Trial 0.2.5
Gateway class: SF_Crypto_Pay_Gateway
Gateway ID: spatial_flow_crypto
Classic WC_Payment_Gateway
Package SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

Current real capability:

```text
Asset: USDT
Network: TRON / TRC20
Environment: administrator-selected mainnet / nile / shasta
Order: created before Crypto invoice
Waiting order status: on-hold
Invoice: generated or reused after order creation
Payment proof: customer manually submits tx hash
Verification: WordPress server queries TronGrid
Success: payment_complete()
Result: WooCommerce Order Received / Thank You
```

Current plugin does not provide:

```text
dynamic asset/network API
customer-selectable multi-network routing
REST or AJAX Invoice API
automatic chain monitoring
server worker or WP-Cron confirmation
webhook
QR generation
real fiat-to-Crypto quote
rate lock
operational countdown / expiry state
confirmation-count stream
WooCommerce Blocks payment registration
```

## 10. Gateway-specific S4A contract

Authoritative decision:

```text
Choice C:
S4A becomes a fixed pre-invoice confirmation surface under V0.2.5.
```

Production-facing content:

```text
Cryptocurrency
Asset: USDT
Network: TRON / TRC20
Order total
environment disclosure where applicable
network compatibility warning
Continue to Crypto payment workspace
```

For an administrator-controlled Nile environment, the page may truthfully disclose:

```text
Test USDT
TRON Nile Testnet
```

The customer must not choose Mainnet, Nile or Shasta. Environment selection remains a backend setting.

The following accepted S4A prototype functions must not be transferred into current production behavior:

```text
USDC or BTC selection
Ethereum, Solana or Bitcoin network selection
asset search as a real catalog
customer-controlled network filtering
asset/network parameters accepted without server support
```

## 11. Gateway-aligned S5 contract

Authoritative decision:

```text
Choice B:
Project 2 owns the visual shell; plugin/server owns true data and payment authority.
```

Project 2 may design:

```text
invoice summary
USDT / TRON confirmation
amount presentation
receiver-address presentation
copy controls
QR placement if later implemented
waiting-payment language
manual tx-hash fallback field
rejection and retry presentation
responsive desktop and mobile layout
```

Plugin/server must own:

```text
Order ID and Order Key authorization
invoice creation and reuse
invoice ID
true order and expected Crypto amount
receiver address
network environment
invoice persistence
transaction verification
old-transaction protection
receiver and token validation
duplicate-transaction protection
Sandbox permission
payment success decision
payment_complete()
WooCommerce status mutation
```

The current independent `/crypto-pay/` visual page may be replaced or integrated. Its server authority must not be bypassed.

## 12. Order-creation truth

The user-visible flow remains four business steps, but the technical sequence for the classic gateway is:

```text
Step 03 payment confirmation
→ submit WooCommerce Checkout
→ WooCommerce order created
→ order becomes on-hold
→ create or restore Crypto invoice
→ show Step-03 payment workspace
→ server verifies payment
→ payment_complete()
→ Step 04 confirmed result
```

Therefore:

```text
- WooCommerce order creation occurs before Crypto payment confirmation
- an on-hold order is not a confirmed result
- the browser cannot promote the order to Step 04
- only server-authoritative success may produce the Order Received result
```

## 13. Plugin integration-contract gate

Prepared prompt:

```text
project2-progress/STEP_4F_S4B_PAYMENT_PLUGIN_INTEGRATION_CONTRACT_PROMPT_PROPOSAL.md
```

The separate payment-plugin workstream must first propose contracts for:

```text
Create or Reuse Invoice
Get Current Invoice
Submit Transaction Hash
Get Payment Status
Sandbox Simulate Success
Recover Unfinished Payment
normalized customer-safe errors
server-authoritative success response
```

The proposal must define:

```text
transport method
input fields
response fields
Order Key / nonce / capability authorization
idempotency
invoice persistence
WooCommerce order-status effects
refresh and unfinished-payment recovery
Sandbox restrictions
```

No new plugin ZIP or version is authorized until Project 2 reviews this contract.

## 14. Current and future state boundaries

Implemented or evidenced now:

```text
waiting_payment
paid_confirmed
on-hold WooCommerce waiting state
processing after payment_complete() for normal physical products
server rejection codes for invalid submitted transactions
```

Not to be represented as completed current behavior:

```text
automatic payment_detected
live confirming counts
operational expired state
automatic underpaid accumulation
overpaid workflow
late-paid workflow
cancelled-after-payment workflow
manual_review state machine
```

S6 pages must reflect only states supported by the approved plugin contract or be explicitly labeled future architecture references.

## 15. Responsive acceptance

Every authoritative state must be reviewed at:

```text
1366 × 768 and desktop full-page composition
390 × 844
360 × 800
```

Required mobile qualities:

```text
no horizontal overflow
clear active-step hierarchy
readable address, shipping and payment context
usable amount and address copy controls
usable manual tx-hash fallback
no obscured primary actions
truthful status and recovery messages
```

## 16. Current corrected build order

```text
S1 — Step 01 Contact / Address: implemented
→ S2 — Shipping: implemented
→ S3 — Payment: implemented
→ S3 Mobile Commerce Surface: accepted and closed
→ S4A — plugin-agnostic selector: accepted and closed as a reference
→ S4B — V0.2.5 capability alignment: completed
→ S4B contract proposal: current gate
→ S4A gateway-specific fixed USDT/TRON adaptation
→ S5 gateway-aligned Invoice / Waiting shell
→ S6 only real supported verification and recovery states
→ S7 Step 04 Order Confirmed / Thank You
→ S8 full relative-link and session-state audit
→ S9 1366 / 390 / 360 static acceptance
→ live Checkout ownership audit
→ functional reconstruction preserving WooCommerce and plugin authority
→ Sandbox and recovery testing
→ final 1:1 closure
```

One bounded group is reviewed at a time.

## 17. Hard boundaries before live implementation

```text
- do not modify live Checkout PHP
- do not modify live Checkout JavaScript
- do not modify CartFlows configuration
- do not modify the payment plugin
- do not begin broad live Checkout CSS replacement
- do not create a fake headless payment API
- do not hardcode unimplemented assets or networks as live
- do not treat sessionStorage or browser state as payment authority
- do not create S5 before the integration contract is reviewed
- do not mark Checkout Completed 1:1
```

After the complete static and contract sequence passes approval:

```text
live ownership audit
→ plugin integration implementation
→ gateway Sandbox and recovery testing
→ production visual replacement
→ backend editability and order-lifecycle closure
```

## 18. Current exact next action

```text
Send the approved integration-contract prompt to the separate payment-plugin window.
Receive its contract proposal.
Review the transport, authorization, response schema, idempotency and recovery model.
Do not authorize plugin code generation before that review passes.
```
