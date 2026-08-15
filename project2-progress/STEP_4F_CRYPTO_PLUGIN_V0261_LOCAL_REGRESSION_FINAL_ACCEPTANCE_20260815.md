# Step 4F · Crypto Plugin V0.2.6.1 Local Regression Final Acceptance

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Final user confirmation

The user completed the remaining read-only WordPress option check:

```text
wp option get sf_crypto_workspace_token_epoch --url=https://spatialflow.local
```

Observed value:

```text
1
```

This matches the reviewed V0.2.6.1 source contract.

## Final regression result

The complete V0.2.6.1 compatibility regression is now accepted:

```text
- plugin active as V0.2.6.1
- existing Gateway settings preserved
- Project 2 Crypto Workspace setting present
- legacy Checkout Crypto submission still creates one order
- unresolved Crypto order remains on-hold
- legacy /crypto-pay/ route remains authoritative
- Invoice creation remains functional
- Sandbox success reaches processing / WooCommerce result
- order notes / legacy behavior remain normal
- toggling the Project 2 Crypto Workspace setting does not activate a half-built Workspace route
- sf_crypto_workspace_token_epoch = 1
```

## Scope consequence

This acceptance proves only that V0.2.6.1 is a safe compatibility/scaffolding upgrade over V0.2.5.

It does NOT prove or implement:

```text
- real order-pay Workspace
- REST Workspace routes
- Workspace Token signing/validation
- server-side Project-2 Workspace bootstrap
- Invoice REST service
- Submit Transaction Hash REST operation
- Payment Status REST operation
- order-scoped advisory lock
- live S5/S6 server-state integration
```

Those capabilities remain Plugin Step-2+ work.

## Current stop point

```text
V0.2.6.1 local compatibility regression: FINAL ACCEPTED / CLOSED
Step 03 full payment-system integration: NOT COMPLETE
Batch 7: PAUSED
Next authorized planning target: Crypto Plugin Step 2 / real Step-03 Workspace implementation gate
No live Step-03 theme modification is authorized by this acceptance record.
```
