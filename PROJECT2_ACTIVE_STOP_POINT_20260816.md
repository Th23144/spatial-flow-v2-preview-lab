# Project 2 · Active Stop Point · 2026-08-16

This file is the current execution override for the active Step-04 implementation gate.

## Current authoritative stop point

```text
Step 04 production audit: COMPLETE
Step 04 Strict 1:1 visual contract: LOCKED
Current live baselines: VERIFIED
Generated 2.7.15 full-file candidates: INTERNAL AUDIT ARTIFACTS ONLY
Previous user-facing whole-file overwrite instruction: WITHDRAWN
Step04 deployment-method A/B test: COMPLETE
User-selected default deployment method: MANUAL ANCHORED REPLACEMENT
Automated Patch/VFR method: NOT SELECTED AS DEFAULT; use only after new explicit user authorisation
A/B test touched test copies only; live Step04 remains undeployed
Checkout binary status: Not done
```

## Mandatory next action

```text
Deploy Step04 to the verified live 2.7.13 baselines using the user-selected manual anchored replacement method.

Delivery format:
- replacement code directly in chat
- one coherent batch at a time; do not micro-split independent edits
- do not package ordinary manual replacement code into ZIP/download bundles

For each part provide:
- exact runtime path
- current bytes / lines / SHA256 / syntax state
- exact old code or START/END anchors
- expected unique match count
- STOP if count differs
- exact replacement code
- expected byte / line delta
- save instruction
- consolidated returned live-file validation
- actual bytes / lines / SHA256 / parser state
- exact rollback/reverse replacement
```

## Explicit prohibition / default boundary

Do NOT instruct the user to overwrite any of these with generated complete candidates under the default workflow:

```text
functions.php
woocommerce/checkout/thankyou.php
assets/css/spatial-flow.css
```

Complete candidates may be used internally for comparison, diff derivation, audit and expected-output verification.

Automated Patch / Verified Full-File Replacement remains an archived optional mechanism. It must not be used for a future Project 2 deployment unless the user explicitly changes the final A/B decision.

## CSS-specific requirement

Replace the currently-owned Step-5F Result block in `assets/css/spatial-flow.css` in place using exact START/END anchors. Do not append a second result visual layer and do not overwrite the full stylesheet.

## Strict 1:1 requirement

The approved static Step-04 reference remains the visual contract. Manual deployment method does not relax 1:1 requirements for geometry, typography, spacing, responsive breakpoints or hierarchy.

## Crypto visual follow-up

After Step 04 closes, the reopened V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch must be fixed and revalidated before Checkout may be marked Completed 1:1.
