# Project 2 · Cross-Window Ownership Handoff Policy

Last updated: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

Project 2 sometimes has to change code that is primarily owned by another long-running work window in order to complete storefront integration.

That is allowed when it saves time and keeps the integration coherent, but it must not silently break the other window's development baseline or force that window to absorb the entire Project-2 repository history.

## Standing rule

Whenever Project 2 completes work that materially overlaps another window's primary responsibility, Project 2 must create an explicit continuation handoff before the overlapping task is considered closed.

Examples include:

```text
payment-plugin development
future payment-gateway integration
email/infrastructure work
independent app/subsite code
other dedicated subsystem workstreams
```

## Standalone delivery rule

The default handoff interface for another long-running subsystem window is **one self-contained standalone handoff document**.

```text
Project 2 repository = internal audit/history source
Standalone handoff file = external owner window's normal resume input
```

The Project-2 window must give the standalone handoff directly to the user as a downloadable file so the user can forward/drop it into the owner window.

The owner window must **not** be required to broadly read or continuously monitor the Project-2 repository merely to resume its subsystem work.

A good standalone handoff must contain enough context to resume correctly without opening Project-2 history. Repository paths, commit SHAs and source records may be included as optional audit references, but they are not the required intake workflow.

If a later Project-2 change materially alters the handed-off subsystem before the owner window resumes, create a refreshed standalone handoff/delta instead of telling that window to reread the repository.

## Required handoff contents

The standalone handoff must state at minimum:

```text
1. subsystem / owner-window identity
2. prior accepted version/baseline
3. new version/baseline
4. exact files, package or subsystem changed
5. behavior added/changed
6. behavior deliberately unchanged
7. runtime/security/business-contract boundaries retained
8. tests already passed
9. tests still pending
10. known limitations/deferred work
11. rollback path
12. current feature flags / enabled-disabled state when relevant
13. exact resume point / freeze point
14. which window owns subsequent work
15. any Project-2 integration dependency the owner must not overwrite
16. optional repository audit references, without making repository reading mandatory
```

If a binary/package version changed, include package SHA256 when available.

## Ownership rule

A temporary overlap does not transfer long-term ownership.

The primary subsystem window remains responsible for its normal future work unless the user explicitly reassigns ownership.

For payment specifically:

```text
Dedicated payment-development window:
- all future payment methods
- payment-plugin evolution
- gateway/provider integrations
- payment security/regression
- production payment rollout

Project 2:
- storefront visual/system integration
- Checkout presentation
- accepted 01/02/03/04 composition
- integration-specific compatibility fixes
```

The payment-development window should receive the current standalone payment handoff from the user and work from that document. It is not expected to read Project-2 progress files as an ongoing dependency.

## Concurrency rule

Do not let two windows independently advance the same subsystem from different baselines.

After a Project-2 overlap:

```text
Project 2 records overlap
→ Project 2 produces standalone handoff
→ user forwards handoff to primary-owner window
→ owner window resumes/follows the handoff's explicit freeze/resume point
```

Do not resume from the old version unless performing an explicit rollback.

If Project 2 is still runtime-validating the new subsystem candidate, the standalone handoff must say so explicitly and must identify whether the owner window should freeze that candidate until Project 2 sends the acceptance delta.

## Current first application

The first formal application was:

```text
project2-progress/STEP_4F_CRYPTO_V029_TO_V030_PAYMENT_WINDOW_HANDOFF_20260816.md
```

It records the Project-2 BIG BATCH B overlap that moved Spatial Flow Crypto Pay Trial from V0.2.9 to V0.3.0.

Because the user has now required standalone delivery, Project 2 must also issue a refreshed self-contained payment-window handoff that includes the later BIG BATCH B theme-audit correction and can be downloaded/forwarded without requiring repository reading.
