# Step 4F · Crypto V0.2.9 BIG BATCH A Runtime A/B Pass

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime evidence supplied by user

The user installed Spatial Flow Crypto Pay Trial V0.2.9 and completed the compressed BIG BATCH A runtime sequence through groups A and B.

### Group A — legacy OFF-path regression

User result: PASS.

The accepted legacy behavior remained functional with `Project 2 Crypto Workspace = OFF`, including the previously required old-path regression set.

### Group B — Workspace ON entry

User result: PASS.

Observed runtime order:

```text
Checkout Crypto selection
→ one WooCommerce order
→ order-pay URL
→ dedicated temporary Crypto Workspace shell
```

User-supplied screenshot shows order `#3616` on a WooCommerce order-pay URL under `/checkout-2-2/order-pay/3616/` with the temporary V0.2.9 backend shell text:

```text
Secure Crypto Payment Workspace
Crypto Workspace backend authorization is ready.
The Crypto Workspace backend contract is available for Project 2 integration.
Final payment controls are intentionally not rendered by this plugin batch.
```

The screenshot does not show the default WooCommerce gateway-selection form or a duplicate Pay button. It also correctly does not show a final Invoice amount/address/Hash UI because that belongs to BIG BATCH B.

## Current gate

```text
V0.2.9 source/security review: PASS
Runtime Group A: PASS
Runtime Group B: PASS
Runtime Group C backend contract test: NEXT
Runtime Group D rollback bridge: PENDING
BIG BATCH A final runtime acceptance: NOT YET CLOSED
```

The next check should be compressed into one browser-console backend-contract script against the currently open authorized Workspace. The script should prefer non-destructive checks so the current unpaid order can still be used for the final rollback-bridge test.