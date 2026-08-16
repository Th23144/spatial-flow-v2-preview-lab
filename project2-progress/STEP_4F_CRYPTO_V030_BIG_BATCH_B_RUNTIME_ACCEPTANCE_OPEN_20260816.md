# Step 4F · Crypto V0.3.0 BIG BATCH B Runtime Acceptance — OPEN

Date: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Spatial Flow Crypto Pay Trial V0.3.0 BIG BATCH B runtime acceptance: OPEN
Runtime actions performed in this step-opening record: NO
Theme Selected Payment rollback prerequisite: PASS / CLOSED
V0.3.0 plugin candidate: KEEP
V0.2.9 backend/security contract: KEEP / CLOSED
Project 2 Crypto Workspace feature flag: OFF at opening
Legacy /crypto-pay/ rollback path: must remain available
```

## Prerequisite gate

The immediately preceding rejected theme-side Selected Payment experiment has been manually removed and byte-exact validated in:

```text
project2-progress/STEP_4F_SELECTED_PAYMENT_THEME_ROLLBACK_VALIDATION_20260816.md
```

All four theme files returned to the accepted 2.7.13 baseline and no `spatial_flow_crypto` theme registry residue remains.

Therefore the V0.3.0 Workspace runtime acceptance gate may now open without reopening the main Step-03 theme architecture.

## Scope of BIG BATCH B runtime acceptance

This cycle is for the **plugin-owned customer Crypto order-pay Workspace**, not for redesigning the theme Checkout payment host.

The runtime cycle must validate, using the existing accepted backend/security contract where applicable:

```text
Feature Flag OFF baseline and legacy rollback compatibility
controlled Feature Flag ON activation
Crypto order transition from main Woo Step 03 into plugin-owned order-pay Workspace
Workspace bootstrap / authorization / real order truth
Create or Reuse Invoice behavior
Waiting-for-payment presentation
manual transaction-hash submission path
server-returned verification states
retryable / verification-failed / manual-review presentation where safely reproducible
explicit Refresh status
window-focus / reopen recovery
multi-tab / duplicate-action safety where applicable
manager-only Sandbox success path
server-confirmed payment → canonical WooCommerce result path
no browser-authored paid result
no timed polling regression
exactly one WooCommerce order / no duplicate settlement regression
Feature Flag OFF rollback after ON-cycle testing
```

This list is a scope inventory, not yet the user test instruction. Exact browser/admin actions must be reconstructed from the latest V0.3.0/BIG-BATCH-B source and repository contract before controlled enablement.

## Hard boundaries

```text
- Do not change the four accepted theme files merely to make V0.3.0 pass.
- Do not reintroduce a theme-side Selected Payment layer.
- Do not hardcode Crypto into the theme payment registry.
- Do not redesign the V0.2.9 backend/security contract during this acceptance cycle.
- Do not infer payment success from browser state.
- Do not create a second WooCommerce order for the same checkout attempt.
- Do not delete legacy /crypto-pay/ rollback compatibility.
- Do not add timed polling.
- Do not move native WooCommerce Place Order out of the accepted Step-03 host.
- Keep Project 2 Crypto Workspace OFF until the controlled-enable point in the validated test procedure.
```

## Current stop point

```text
BIG BATCH B runtime acceptance: formally OPEN
Runtime mutation/testing: not started
Feature flag: OFF
```

## Exact next action

Read and reconcile the latest V0.3.0 candidate/build/handoff/post-install audit records and the accepted V0.2.9 runtime/security contract, then issue one consolidated source-backed BIG BATCH B browser/admin acceptance checklist.

Only after that checklist is locked may the user perform the controlled Feature Flag ON step.
