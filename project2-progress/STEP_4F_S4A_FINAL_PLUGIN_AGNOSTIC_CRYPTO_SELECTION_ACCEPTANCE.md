# Project 2 · Checkout S4A Final Plugin-Agnostic Crypto Selection Acceptance

Date: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Final user decision

The user reviewed the S4A Crypto asset/network selection page and confirmed that its visual presentation and interaction behavior are acceptable.

The user also explicitly confirmed their understanding that all currently displayed assets and networks are examples only.

Final decision:

```text
S4A visual review: passed
S4A interaction review: passed
S4A example-data disclosure: understood and accepted
S4A: accepted and closed
Checkout page status: Not done
```

## Accepted authoritative artifact

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

Supporting assets:

```text
preview/spatial-flow-checkout-crypto-v1.css
preview/spatial-flow-checkout-crypto-v1.js
```

The bounded Step-03 handoff is provided by:

```text
preview/spatial-flow-checkout-flow-v1.js
```

## Accepted interaction contract

```text
initial state:
- no asset selected
- network area unavailable
- Continue disabled

asset selected:
- example networks become available
- selected asset appears in Payment details
- Continue remains disabled

asset and network selected:
- both selections appear in Payment details
- Continue becomes enabled

asset changed:
- previous network is cleared
- a new network must be selected

return and revisit:
- the prototype draft is retained in sessionStorage
- address, contact, shipping and order total remain available
```

## Example-data limitation remains locked

The following are static interaction examples only:

```text
USDT
USDC
BTC
TRON
Ethereum
Solana
Bitcoin
```

They do not prove, document or imply support by the future selected gateway.

The authoritative production list must later come from the selected payment plugin or gateway capability.

## Explicitly outside the accepted S4A scope

S4A does not implement or approve:

```text
real WooCommerce order creation
real gateway request
real supported-asset inventory
real supported-network inventory
exchange-rate request
quote or rate lock
wallet address
QR code
network-fee calculation
Crypto invoice
blockchain monitoring
webhook
payment confirmation
order-status mutation
Step 04 confirmation
```

## Next phase

The next phase is:

```text
Phase S4B — Payment-plugin capability alignment
```

S4B is blocked until the separate payment-plugin selection work supplies a concrete capability decision.

Required capability handoff:

```text
1. selected plugin / gateway name and version
2. whether it supports a custom asset/network selection UI
3. whether it exposes an API, SDK, shortcode, block, iframe or hosted redirect
4. whether asset and network lists are dynamic or fixed
5. whether asset/network selection occurs on our page or on the gateway page
6. fields returned when creating a quote or invoice
7. whether the gateway owns the invoice / waiting screen
8. wallet-address and QR-code ownership
9. quote-expiry and rate-lock behavior
10. webhook / callback behavior
11. WooCommerce order-status mapping
12. underpayment, overpayment, expiry, failure and cancellation behavior
13. return URL and order-received behavior
14. sandbox or test-mode capability
```

## S5 gate

```text
Phase S5 Invoice / Waiting: not authorized yet
```

Reason:

The selected plugin may provide its own hosted invoice, embedded component or redirect. Building a presumed custom S5 before S4B could duplicate the gateway UI or create an implementation that cannot be connected safely.

## Locked next sequence

```text
S4A accepted and closed
→ obtain payment-plugin capability handoff
→ complete S4B capability alignment
→ decide whether S5 is custom, embedded, hosted or unnecessary
→ continue the remaining Crypto payment-state references
```

No real WordPress, WooCommerce or payment-plugin source was changed by this acceptance decision.
