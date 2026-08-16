# Project 2 · Cross-Window Ownership Handoff Policy

Date: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

Project 2 sometimes has to change code that is primarily owned by another long-running work window in order to complete storefront integration.

That is allowed when it saves time and keeps the integration coherent, but it must not silently break the other window's development baseline.

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

## Required handoff contents

The handoff must state at minimum:

```text
1. prior accepted version/baseline
2. new version/baseline
3. exact files or subsystem changed
4. behavior added/changed
5. behavior deliberately unchanged
6. runtime/security/business-contract boundaries retained
7. tests already passed
8. tests still pending
9. known limitations/deferred work
10. rollback path
11. new resume point for the primary-owner window
12. which window owns subsequent work
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

## Concurrency rule

Do not let two windows independently advance the same subsystem from different baselines.

After a Project-2 overlap:

```text
Project 2 writes handoff
→ primary-owner window reads handoff
→ primary-owner window resumes from the new baseline
```

Do not resume from the old version unless performing an explicit rollback.

## Current first application

The first formal application of this policy is:

```text
project2-progress/STEP_4F_CRYPTO_V029_TO_V030_PAYMENT_WINDOW_HANDOFF_20260816.md
```

It records the Project-2 BIG BATCH B overlap that moved Spatial Flow Crypto Pay Trial from V0.2.9 to V0.3.0.