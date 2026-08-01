# Project 2 · Checkout Mainline Correction: Return to Static Step 03

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Correction

The instruction to install `Spatial Flow Crypto Pay Trial V0.2.6.1` locally and run the legacy `/crypto-pay/` regression at this point was premature.

The Project 2 mainline is still:

```text
complete and approve the linked Checkout static reference flow
```

The user's local WordPress site still contains the old Checkout/payment presentation. Installing V0.2.6.1 now would only re-test the legacy plugin path and would not validate the new Step-03 static pages being designed.

Therefore:

```text
local V0.2.6.1 installation: paused / not currently required
legacy old-path regression: deferred
Plugin Step 2: paused
live Checkout/plugin integration: paused
```

V0.2.6.1 remains an accepted future plugin baseline package only. It is not the current Project 2 execution step.

## 2. Current authoritative Project 2 mainline

```text
S3 Steps 01 / 02 / 03: accepted and closed
S4A plugin-agnostic Crypto selector: accepted as a reference
S4B plugin capability alignment: complete
Current executable work: return to the static Step-03 Crypto subflow
```

The next static work is:

```text
1. adapt the S4A production-facing reference into a fixed USDT / TRON confirmation page
2. create the S5 static Invoice / Waiting page using only fields supported by the reviewed plugin contract
3. create only truthful manual transaction-hash verification and recovery states
4. continue to Step 04 Thank You and complete the full linked static flow
5. perform responsive and link acceptance
6. only after the static flow is approved, audit the live Checkout and resume plugin integration/runtime testing
```

## 3. S4A static target

The current multi-asset selector remains preserved as a design reference, but the gateway-aligned static page must show a fixed combination:

```text
Asset: USDT
Network: TRON / TRC20
Environment disclosure where applicable
Order amount context
Network warning
Continue to Create Crypto Invoice
```

It must not present USDC, BTC, Ethereum, Solana or Bitcoin as current selectable capabilities.

## 4. S5 static target

Project 2 may now create a static visual/interaction contract for:

```text
Invoice ID
USDT amount
TRON / TRC20 network
receiver address
copy controls
waiting-payment language
required transaction-hash submission
customer-safe verification errors
manual Refresh status
recovery-link presentation
paid-confirmed transition to Step 04
```

The first static contract must not claim current support for:

```text
QR code
live countdown
operational invoice expiry
automatic chain monitoring
confirming progress
multi-asset or multi-network selection
```

## 5. Plugin package status

```text
V0.2.6.1 package integrity: passed
Package role now: future integration baseline
Installation now: deferred
Plugin Step 2: not authorized
```

No plugin ZIP is added to this repository.

## 6. Current exact stop point

```text
Checkout: Not done
Current action: gateway-specific S4A static adaptation
Next after S4A acceptance: S5 static Invoice / Waiting
Local plugin installation: deferred until static-flow approval and live integration audit
```

This document supersedes any earlier instruction that made local V0.2.6.1 installation the immediate next Project 2 action.
