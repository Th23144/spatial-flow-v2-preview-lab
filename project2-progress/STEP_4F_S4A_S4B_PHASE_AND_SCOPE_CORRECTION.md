# Project 2 · Checkout S4A / S4B Phase and Scope Correction

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative phase status

```text
S4A: accepted and closed
S4B: current active phase
S5: not started
Plugin Step 2: paused / not part of the current Project 2 execution step
Local plugin installation: deferred
Checkout: Not done
```

## 2. S4A remains closed

Authoritative S4A acceptance:

```text
project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
```

Accepted S4A artifact:

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

S4A proved the plugin-agnostic asset/network interaction and was explicitly accepted by the user.

It must not be:

```text
reopened
renamed as unfinished
replaced silently
called the current phase
```

## 3. What S4B actually is

S4B is the payment-plugin capability-alignment phase.

Its purpose is to convert the accepted S4A design language into a gateway-truthful Project 2 payment handoff based on the actual plugin capability.

The reviewed gateway baseline established:

```text
Plugin: Spatial Flow Crypto Pay Trial
Gateway ID: spatial_flow_crypto
Current real asset: USDT
Current real network: TRON / TRC20
Environment: administrator-selected mainnet / nile / shasta
Customer asset/network selection: not supported
Invoice creation: after WooCommerce order creation
Payment verification: customer submits TRON transaction hash
Success authority: server calls payment_complete()
```

## 4. S4B work already completed

The following S4B inputs and decisions are already complete:

```text
- V0.2.5 plugin capability handoff received
- V0.2.5 source reviewed
- S4A compatibility choice C approved
- S5 ownership choice B approved
- order / invoice / payment ownership boundaries documented
- plugin integration contract reviewed
- future plugin implementation plan documented
```

These records remain valid as S4B architecture evidence.

## 5. Work that exceeded S4B scope

The following later work was useful future preparation but was not required to continue the Project 2 static Checkout flow:

```text
V0.2.6 module-skeleton package
V0.2.6.1 compatibility correction
local legacy-plugin regression planning
future Plugin Step 2 planning
```

These artifacts are parked as future live-integration preparation.

They must not become the current Project 2 gate and must not force the user to install the old-page plugin while the new Checkout reference flow is still unfinished.

## 6. Current S4B executable deliverable

The current executable S4B task is not to reopen S4A.

It is to produce the gateway-aligned Step-03 confirmation reference derived from the accepted S4A design language while preserving the accepted S4A artifact as historical reference.

The S4B gateway-aligned reference must truthfully show:

```text
Cryptocurrency
Asset: USDT
Network: TRON / TRC20
administrator-controlled environment disclosure where appropriate
order amount context
network compatibility warning
Continue to Create Crypto Invoice
Back to payment methods
```

It must not present these as current selectable capabilities:

```text
USDC
BTC
Ethereum
Solana
Bitcoin
customer-selectable mainnet / nile / shasta
```

The S4B implementation should be a separate bounded artifact or an explicitly versioned gateway-aligned derivative. It must not silently destroy the accepted S4A reference.

## 7. Correct next sequence

```text
S4A accepted and closed
→ finish S4B gateway-aligned Step-03 confirmation reference
→ user reviews and accepts S4B
→ begin S5 Invoice / Waiting static reference
→ continue truthful transaction-hash verification and recovery states
→ Step 04 Thank You
→ full static-flow link and responsive acceptance
→ later live Checkout/plugin integration
```

## 8. Explicit cancellations

The following statements are cancelled:

```text
"return to S4A"
"S4A gateway-specific adaptation is the current phase"
"local V0.2.6.1 installation is the immediate next Project 2 step"
"Plugin Step 2 is the current mainline gate"
```

## 9. Current exact action

```text
Create the S4B gateway-aligned fixed USDT / TRON Step-03 confirmation reference as one bounded repository change.
Do not modify the accepted S4A artifact in the same change.
Do not install or continue developing the plugin in this phase.
```
