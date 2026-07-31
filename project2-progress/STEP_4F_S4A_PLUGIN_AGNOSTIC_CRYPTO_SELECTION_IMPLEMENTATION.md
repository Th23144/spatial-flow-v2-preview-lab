# Project 2 · Checkout S4A Plugin-Agnostic Crypto Selection Implementation

Date: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User approval

The user approved beginning Phase S4 after confirming the distinction between:

```text
this Checkout/static-reference window
and
the separate payment-plugin selection window
```

The approved scope is S4A only:

```text
plugin-agnostic asset/network interaction specification
not a real Crypto gateway implementation
```

## New authoritative static page

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

It remains part of:

```text
Payment · Step 03 of 04
```

It is not a new Checkout step and does not introduce Step 05.

## Added supporting assets

```text
preview/spatial-flow-checkout-crypto-v1.css
preview/spatial-flow-checkout-crypto-v1.js
```

## Linked route

```text
preview/spatial-flow-checkout-payment-v1.html
→ Continue with Cryptocurrency
→ preview/spatial-flow-checkout-crypto-select-v1.html

preview/spatial-flow-checkout-crypto-select-v1.html
→ Back to Payment
→ preview/spatial-flow-checkout-payment-v1.html
```

The Payment page body structure was not changed. The existing shared Checkout JavaScript now routes the approved payment button to S4A and preserves the same session-state object.

## Implemented S4A interaction contract

```text
initial state:
- no asset selected
- network area unavailable
- Continue button disabled

asset selected:
- example networks become visible
- selected asset appears in Payment details
- Continue button remains disabled

network selected:
- selected network appears in Payment details
- Continue button becomes enabled

asset changed:
- previous network selection is cleared
- network must be chosen again

return and revisit:
- prototype draft selection is retained in sessionStorage
- address, contact, confirmed shipping and totals remain available
```

## Static example data

The page contains interaction examples for:

```text
USDT
USDC
BTC

TRON
Ethereum
Solana
Bitcoin
```

Every asset and network is explicitly labeled as:

```text
static example only
not confirmed by gateway
```

These examples do not document or imply real payment-plugin support.

## Payment-details contract represented by S4A

```text
order total
selected asset
selected network
Crypto amount: gateway calculated
network fee: gateway supplied
quote status: no quote requested
network compatibility warning
```

The order total is synchronized with the confirmed Step 02 shipping cost in the shared static session state.

## Explicitly not implemented

```text
real WooCommerce order creation
real gateway request
wallet address
QR code
exchange-rate request
rate lock
quote expiry
network fee calculation
Crypto invoice
blockchain monitoring
webhook
payment confirmation
order-status mutation
Step 04 navigation
```

Clicking the enabled final button stops at the S4A boundary and displays a notice confirming that no real payment object was created.

## Preserved architecture

```text
01 / 02 / 03 approved structures remain unchanged
03 Payment remains the active Checkout step
Before it leaves. retains Address + Contact + confirmed Shipping Method
Order Summary remains WooCommerce-context reference information
mobile Editorial Commerce visual language is reused
no decorative vertical accent strip
no additional payment method is invented
```

## Repository change audit

Comparison base:

```text
79b2eca6d7d220ead05f6173a1250308a9463977
```

Implementation head before this record:

```text
412e4b302cd58073725a82c586d1428d9dbf3f3a
```

Changed files:

```text
preview/spatial-flow-checkout-crypto-select-v1.html
- new

preview/spatial-flow-checkout-crypto-v1.css
- new

preview/spatial-flow-checkout-crypto-v1.js
- new

preview/spatial-flow-checkout-flow-v1.js
- bounded routing/state hydration change
```

Unchanged:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
real WordPress / WooCommerce source
```

## Commits

```text
Crypto CSS:
2c14242084cde5ff58a4a56e935fa91fcc938f14

Crypto interaction JS initial:
c117d31b46efe1a9b0f5f34cf2b616bf8057bfbb

S4A HTML:
cd59c7b4b21e814d74026f52cc56b92a977ab69c

Shared Checkout handoff:
f9d97566f933343c4ac169d7196a19535d889583

S4A order-total synchronization:
412e4b302cd58073725a82c586d1428d9dbf3f3a
```

## Final acceptance

The user reviewed the completed S4A page and confirmed:

```text
visual review: passed
interaction review: passed
static-example limitation: understood and accepted
```

Authoritative acceptance record:

```text
project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
```

Acceptance commit:

```text
3d7ff20d457b45f3b7ab513b4e157306caa26f3d
```

## Current gate

```text
S4A implementation: complete
S4A visual review: passed
S4A interaction review: passed
S4A: accepted and closed
S4B plugin-capability alignment: blocked until plugin decision exists
S5 Invoice / Waiting: not authorized
Checkout page status: Not done
```

The next required input is the capability handoff from the separate payment-plugin selection work. No S5 or real gateway work should begin before S4B determines whether the selected gateway uses a custom, embedded or hosted invoice flow.
