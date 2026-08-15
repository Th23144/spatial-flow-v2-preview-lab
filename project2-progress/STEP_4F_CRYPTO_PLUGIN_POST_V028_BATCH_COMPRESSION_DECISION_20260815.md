# Step 4F · Crypto Plugin Post-V0.2.8 Batch Compression Decision

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user explicitly requested fewer micro-steps because repeated cycles of:

```text
generate ZIP -> return to Project 2 -> source review -> install -> local test -> repeat
```

were consuming more time than the remaining risk justified.

## Current position

- V0.2.7 / Plugin Step 2A is locally accepted and closed.
- V0.2.8 / Plugin Step 2B has been delivered at source-package level.
- V0.2.8 adds the feature-flagged WooCommerce order-pay Workspace bootstrap boundary only.
- V0.2.8 still has no Workspace REST, Invoice Create/Reuse REST, Hash Verification REST, Payment Status REST, Sandbox REST, settlement lock completion, rate limiting, or final Project-2 S5/S6 visual integration.
- Last locally accepted rollback baseline remains V0.2.7.

## Revised development strategy

The earlier decomposition:

```text
Step 3 — Invoice service + Create/Reuse REST
Step 4 — Payment service + Submit Hash + verification states + rate limiting
Step 5 — Status/Sandbox/recovery REST + settlement locking completion
Step 6 — Project-2 S5/S6 visual integration
```

is replaced for execution efficiency by two larger batches:

```text
BIG BATCH A — Crypto Workspace Backend Complete
BIG BATCH B — Project-2 Step-03 Live Visual/System Integration
```

Historical Step 3/4/5 labels remain useful as internal subdomains inside BIG BATCH A, but they no longer require separate ZIP/version/install/acceptance cycles.

## BIG BATCH A — one plugin delivery

Use the returned V0.2.8 source package as the development baseline.

One plugin release should complete, in one implementation batch:

```text
1. shared Invoice Service extraction
2. Create or Reuse Invoice operation
3. Workspace/Get Current Invoice operation
4. REST controller and unified response model
5. X-SF-Workspace-Token permission checks
6. same-origin Guest request protection
7. order-scoped MySQL advisory lock family
8. idempotent Invoice creation/reuse
9. shared Transaction Verification / Settlement Service
10. Submit Transaction Hash REST
11. retained TronGrid verification core
12. deterministic verification_failed mapping
13. retryable temporary-error behavior without destructive state mutation
14. duplicate transaction protection
15. transaction-hash rate limiting
16. payment_complete() at-most-once protection
17. success/order-note idempotency
18. Get Payment Status REST without chain polling
19. manager-only Sandbox REST using Workspace Token + WP REST nonce + manage_woocommerce
20. recovery/bootstrap action contract
21. legacy admin-post functions converted to compatibility wrappers around shared services where safe
22. legacy /crypto-pay/ remains functional
23. Feature Flag OFF remains immediate rollback
24. paid/cancelled/refunded/terminal-state rejection and canonical redirects
25. refresh/reopen/multi-tab idempotency
```

Still excluded from BIG BATCH A:

```text
- final Project-2 S5/S6 appearance
- Checkout theme modifications
- QR
- operational countdown / expired / replacement invoice
- automatic chain monitoring
- Cron / Worker / Webhook
- multi-asset / selectable networks
- Step 04 implementation
```

## Local-testing compression

Do NOT require a separate local-install acceptance cycle for V0.2.8 if BIG BATCH A is immediately produced from it and passes Project-2 source review.

Rationale:

- V0.2.8 is an intermediate integration scaffold.
- the user wants to avoid repetitive install cycles.
- BIG BATCH A will necessarily exercise the same order-pay/bootstrap boundary plus all downstream operations.

Therefore:

```text
V0.2.8: source-level intermediate baseline
Last locally accepted rollback: V0.2.7
Next local install/test target: BIG BATCH A final plugin package
```

If BIG BATCH A fails source review or local runtime regression, rollback target remains the already locally accepted V0.2.7 package, not an unproven V0.2.8 installation.

## BIG BATCH B — one Project-2 integration batch

After BIG BATCH A backend is accepted, Project 2 should complete Step 03 as one integrated site batch rather than splitting S5/S6 into many micro-passes.

This batch should include:

```text
- main Step-03 Payment Host final strict parity review
- real WooCommerce gateway rendering / fallback architecture
- Crypto fixed USDT/TRON presentation
- Preparing Invoice
- Waiting for Payment
- transaction-hash verification UI
- verification_failed / retryable / manual_review / cancelled / recovery states
- paid_confirmed transition to canonical Step 04
- live plugin REST/data connection
- no fake monitoring / no fake expiry
- responsive 1366 / 390 / 360 acceptance
- source/computed micro-1:1 acceptance
- normal gateway regression
- Crypto end-to-end regression
```

Step 04 remains a separate major project because its production contract is a WooCommerce real-order-status matrix and should not be mixed into Step-03 payment implementation.

## New high-level route

```text
V0.2.7 locally accepted
→ V0.2.8 source scaffold returned
→ BIG BATCH A: complete Crypto Workspace backend in one plugin release
→ one Project-2 source/security review
→ one local comprehensive plugin regression
→ BIG BATCH B: complete live Step-03 integration/visual system in one site batch
→ Batch 7 notice/error ownership
→ Step 04 real WooCommerce result-state system
→ cleanup / full commerce regression / final Checkout closure
```

## Risk policy

Compression does NOT mean removing review or rollback boundaries.

It means:

```text
fewer implementation packages
fewer installs
fewer user round-trips
one larger automated/source review per coherent subsystem
one larger local end-to-end acceptance per coherent subsystem
```

Security-critical invariants remain mandatory and must be validated inside BIG BATCH A before delivery.
