# Step 4F · Spatial Flow Crypto Pay Trial V0.3.0 · BIG BATCH B Final Accepted

Date: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Final status

```text
Spatial Flow Crypto Pay Trial V0.3.0
BIG BATCH B — Project-2 customer Workspace integration
SOURCE / STATIC VALIDATION: PASS
B1 runtime Waiting/recovery/responsive: PASS
B2 malformed-hash + Sandbox settlement: PASS
B3 Feature-Flag rollback + normal-gateway regression: PASS
FINAL STATUS: ACCEPTED / CLOSED
```

## Accepted plugin identity

```text
Plugin: Spatial Flow Crypto Pay Trial
Version: 0.3.0
Gateway ID: spatial_flow_crypto
ZIP: spatial-flow-crypto-pay-trial-v0.3.0.zip
ZIP SHA256: d7227f52ddd4f1949b1860348b56a956f47723f3d64d5c052f34a2c1ab58fdb9
```

V0.3.0 remains layered on the FINAL ACCEPTED V0.2.9 backend/security contract.

## Important correction retained

The attempted theme-side generic `Selected Payment` presentation layer was rejected after post-install/runtime review and was byte-exact rolled back before this runtime cycle.

Final accepted architecture remains:

```text
main Step 03
-> native dynamic WooCommerce gateway list
-> selected gateway's native payment_box/provider-owned controls
-> native Terms/privacy
-> exactly one native Place Order

Crypto after Woo order creation
-> official WooCommerce order-pay boundary
-> plugin-owned V0.3.0 Crypto Workspace
```

No hardcoded `spatial_flow_crypto` presentation layer exists in the theme.

## B1 accepted evidence

Runtime order:

```text
#3618
```

Accepted:

```text
V0.3.0 Workspace entry
one Woo order
Waiting for Payment
server-authoritative USDT/TRON amount/address
Woo order context / summary
responsive desktop/mobile presentation
refresh/reopen recovery
explicit Refresh Status request
```

Refresh Status diagnosis proved one click -> one `payment-status` fetch and HTTP 200. Lack of visible "refreshed" feedback is classified as a non-blocking UX feedback omission, not a functional failure.

## B2 accepted evidence

Using order `#3618`:

```text
malformed transaction hash `123`
-> correctly rejected by 64-character TRON hash validation
-> no settlement / no false success

manager Sandbox successful payment
-> server-authoritative settlement
-> WooCommerce order status Processing
-> canonical WooCommerce Order Result / Thank You page
-> refresh remains same order/status
-> no second order
```

The retained V0.2.9 backend contract remains authority for verification_failed / retryable / manual_review states. No unsafe arbitrary real-chain transaction hashes were invented merely to force those visual states.

## B3 accepted evidence

Rollback sample:

```text
#3619
```

With Workspace ON, the order reached unpaid V0.3.0 Waiting. After:

```text
Project 2 Crypto Workspace: ON -> OFF
```

the same order returned to the legacy Crypto payment surface, preserving order identity and unpaid state.

New Crypto Checkout while OFF also remained on the legacy route.

The only non-Crypto gateway currently available locally is `Test Payment`. Its provider-owned behavior immediately settled the test order and redirected to canonical Thank You / Order Result. Screenshot evidence includes order `#3620`. This is accepted as a successful normal-Woo-gateway regression, not a defect.

## Accepted customer/runtime contract

V0.3.0 now becomes the accepted next plugin baseline for the payment-owner window, including:

```text
V0.2.9 backend/security invariants
Woo order-pay Crypto Workspace boundary
customer-facing Project-2 Workspace
Preparing Invoice -> automatic Create/Reuse -> Waiting
server-authoritative fixed USDT/TRON invoice truth
copy amount/address
TRON-only warning
manual transaction-hash workflow
malformed-hash client guard
explicit Refresh Status
focus/refresh/reopen recovery without timed polling
manager-only Sandbox presentation
server-confirmed paid transition to canonical Woo result
Feature Flag immediate rollback to legacy /crypto-pay/
normal gateway isolation from Crypto presentation
```

## Explicitly still deferred / not production-complete

```text
real-time fiat -> USDT quote/rate lock
QR
operational countdown
Invoice expiry enforcement
replacement Invoice lifecycle
automatic chain/address monitoring
Cron / Worker / Webhook
WalletConnect
multi-asset customer selection
multi-network customer selection
full production Step-04 WooCommerce Order Result status matrix
```

The current prototype still uses the WooCommerce numeric order total as the USDT numeric amount. This remains a production-readiness issue if final shop currency policy is not deliberately compatible.

## Final local configuration

Leave after this local acceptance cycle:

```text
Project 2 Crypto Workspace = OFF
```

V0.3.0 stays installed/candidate baseline; the Feature Flag controls runtime exposure.

## Ownership / next major system

Payment plugin evolution transfers back to the dedicated payment-development window through a self-contained handoff file.

Project 2 next major Checkout system is separate:

```text
Step 04 — real WooCommerce Order Result / status matrix
```

BIG BATCH B is closed and must not be reopened merely to redesign Step 04.
