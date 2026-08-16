# Step 4F · Crypto V0.3.0 BIG BATCH B · B2 Partial Runtime Evidence

Date: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
B2 — Hash / failure presentation + manager Sandbox success
Current status: PARTIAL PASS / ONE FINAL IDEMPOTENCY CHECK PENDING
Source/config changes during this gate: NONE
Project 2 Crypto Workspace: ON
Test order: #3618
```

## Evidence supplied by user

### 1. Malformed Transaction Hash guard

User expanded `I HAVE COMPLETED THE TRANSFER`, entered:

```text
123
```

Observed UI validation:

```text
Enter the 64-character TRON transaction hash from your wallet or exchange history.
```

Decision:

```text
PASS
```

The clearly malformed value is rejected before payment can be treated as confirmed. No paid/result transition was triggered from the malformed value.

### 2. Manager Sandbox simulated success

User then used the manager-only Sandbox success path for the same Crypto test order.

Observed WooCommerce canonical result page:

```text
Order number: 3618
Status: Processing
Payment method: Pay with Crypto
Total: $28.99
```

The page also contains the explicit local-test notice:

```text
Sandbox crypto payment simulated.
This order was marked paid by admin-only test mode. No real blockchain payment was made.
```

Observed result route is the normal Project-2/WooCommerce order-received surface rather than a browser-fabricated fake paid state.

Decision so far:

```text
malformed-hash guard: PASS
Sandbox server-confirmed paid transition: PASS
same test order #3618 preserved through transition: PASS
WooCommerce Processing state: PASS
canonical result surface reached: PASS
```

## Remaining B2 check

B2 is not formally closed until the user performs one harmless browser refresh of the successful result page and confirms:

```text
same order #3618 remains
status remains paid / Processing
no second WooCommerce order is created
no return to Waiting for Payment
no repeated payment requirement
no visible duplicate settlement side effect
```

This is the final runtime idempotency/recovery check for B2.

## Deferred state note

`verification_failed`, `retryable`, and `manual_review` are not being artificially forced with arbitrary real-chain hashes. The accepted V0.2.9 backend contract already covers those mappings; V0.3.0 will keep them as source-mapped/runtime-not-reproduced in this compressed local gate unless a retained safe fixture becomes available.

## Stop point

Do not enter B3 yet.

Next action:

```text
refresh the current successful #3618 result page once
report whether the same order/status remains and whether any duplicate order/settlement appears
```
