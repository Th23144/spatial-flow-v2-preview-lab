# Step 4F · Crypto V0.3.0 BIG BATCH B · B2 Final Pass

Date: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
BIG BATCH B B2: FINAL PASS
Plugin: Spatial Flow Crypto Pay Trial V0.3.0
Test order: #3618
Workspace flag during B2: ON
```

## Runtime evidence accepted

### 1. Malformed transaction hash guard

User entered a clearly invalid TRON transaction hash value (`123`).

Observed customer UI response:

```text
Enter the 64-character TRON transaction hash from your wallet or exchange history.
```

Result:

```text
Malformed hash rejected before any false payment success
Order remained unpaid at that point
No canonical result redirect was triggered by invalid input
PASS
```

No arbitrary real-chain transaction hash was introduced only to manufacture additional failure states.

`verification_failed`, retryable temporary failure and `manual_review` remain source-mapped to the accepted V0.2.9 backend contract where no retained safe runtime fixture was available in the current handoff material.

### 2. Manager Sandbox success path

The manager-only `SIMULATE SUCCESSFUL PAYMENT` action was exercised once on order `#3618`.

Observed WooCommerce result state:

```text
Order number: 3618
WooCommerce status: Processing
Payment method: Pay with Crypto
Total: $28.99
Canonical order-result / Thank You surface reached
Sandbox payment notice present
```

The browser reached the normal WooCommerce result route only after the server-authoritative Sandbox settlement path completed.

Result:

```text
Sandbox server settlement: PASS
Processing transition: PASS
Canonical result transition: PASS
No second Woo order observed: PASS
```

### 3. Post-success refresh / idempotency check

User refreshed the final successful order-result page.

User reported the refresh as normal.

Accepted interpretation under the explicit B2 test contract:

```text
same order #3618 retained
Processing state retained
no return to Waiting for Payment
no second WooCommerce order created
no duplicate customer payment flow restarted
```

Result:

```text
Post-success refresh/idempotency runtime check: PASS
```

## B2 decision

```text
Malformed Hash presentation: PASS
Sandbox success: PASS
Canonical paid transition: PASS
Post-success refresh/idempotency: PASS
B2 FINAL STATUS: PASS / CLOSED
```

No theme/plugin source change is required from B2.

## Next gate

Proceed to B3 only after this record exists:

```text
B3 — Feature Flag OFF rollback bridge + final normal/Crypto regression
```

B3 must use a separate unpaid Crypto order for rollback proof. Do not use paid order #3618 as the rollback specimen.
