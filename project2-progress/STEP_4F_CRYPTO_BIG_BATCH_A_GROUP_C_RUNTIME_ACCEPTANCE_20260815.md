# Step 4F · Crypto BIG BATCH A · Group C Runtime Acceptance

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User-provided runtime result

Current plugin under test: Spatial Flow Crypto Pay Trial V0.2.9
Order: `#3616`
Auth context: `manager`
Feature epoch: `6`
Invoice created: `inv_3616_3Ia7NFrlx2`

One-shot browser runtime harness result:

```text
pass: true
passed: 19
failed: 0
```

All 19 checks passed:

- Bootstrap schema / backend_ready
- Crypto order + gateway binding
- manual Transaction Hash required
- no fake automatic chain monitoring
- Workspace Token present
- raw WooCommerce Order Key absent from bootstrap
- no duplicate WooCommerce payment form / Place Order control
- authorized Workspace GET
- missing Workspace Token rejected with HTTP 401
- Invoice Create/Reuse initial creation
- server-authoritative USDT/TRON/amount/receiver fields returned
- second Invoice POST reused the exact same Invoice ID
- Workspace restored the same Invoice
- Payment Status remained waiting / unconfirmed
- malformed Transaction Hash rejected with HTTP 400 invalid_format
- malformed Hash did not mutate Invoice/payment state
- raw WooCommerce Order Key absent from tested REST responses
- Sandbox action contract exposed as a boolean capability

Observed runtime values:

```text
order_id: 3616
invoice_id: inv_3616_3Ia7NFrlx2
invoice status after malformed hash: waiting_payment
payment.confirmed: false
can_sandbox: true
```

## Acceptance meaning

This provides direct local-runtime evidence that the V0.2.9 Workspace backend foundation is functioning for the current manager-authenticated test order, including authorization, Invoice idempotency, safe read/write boundaries, non-destructive malformed-hash handling and Order-Key non-disclosure.

This Group-C harness intentionally did NOT:

- settle the order;
- call Sandbox success;
- submit a real chain Transaction Hash;
- call TronGrid;
- run the rate-limit threshold to exhaustion;
- test a real deterministic TronGrid rejection;
- alter the order away from its unpaid waiting state.

Those exclusions were intentional so the same unpaid order can still be used for the final rollback-bridge test.

## Current gate

```text
BIG BATCH A source/security review: PASS
Group A legacy OFF regression: PASS
Group B order-pay Workspace entry: PASS
Group C one-shot backend runtime harness: PASS (19/19)
Group D Feature Flag rollback bridge: PENDING
```

Do not mark BIG BATCH A FINAL CLOSED until Group D confirms that an existing valid unpaid order-pay URL for this Crypto order returns to legacy `/crypto-pay/` after the Workspace Feature Flag is switched OFF, with the same order preserved.
