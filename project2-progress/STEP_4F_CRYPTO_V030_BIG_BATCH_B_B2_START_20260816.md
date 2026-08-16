# Step 4F · Crypto V0.3.0 BIG BATCH B · B2 Start

Date: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
B1: FINAL PASS
B2: OPEN
B3: NOT STARTED
Project 2 Crypto Workspace: ON for controlled local acceptance
No source edit authorized at B2 start
```

## B1 closure carried forward

B1 established that V0.3.0 customer Workspace entry, Waiting state, server amount/address truth, recovery/reopen behavior, explicit Refresh Status request path, and supplied desktop/mobile runtime surfaces are functioning sufficiently to continue.

The apparent Refresh Status no-op was diagnosed as a UX feedback issue rather than a functional failure: two manual clicks produced two `payment-status` fetches, both HTTP 200, initiated by `project2-crypto-workspace.js?ver=0.3.0`. No source change is required before B2.

## B2 scope

B2 validates only:

```text
1. malformed Transaction Hash rejection without settlement
2. runtime presentation of supported negative/retryable/manual-review mappings where safely reproducible
3. manager-only Sandbox success path
4. one-order / at-most-once settlement regression
5. transition to canonical WooCommerce paid/result route
```

## Explicit boundaries

```text
Do not edit plugin code.
Do not edit theme code.
Do not invent browser-side success/failure states.
Do not spend a new real blockchain transfer.
Do not treat Step 04 visual/status matrix as part of B2.
Do not proceed to B3 until B2 result is recorded.
```

The existing V0.2.9 backend/security baseline remains FINAL ACCEPTED and is not being re-opened by this runtime presentation test.

## Current test order

B1 order observed by user: `#3618`.

Use the same order if it remains unpaid and suitable. If Sandbox success is performed on it, B3 rollback proof must later use a separate unpaid Crypto order.
