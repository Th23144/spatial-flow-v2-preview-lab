# Project 2 · Active Stop Point · 2026-08-16

This file is the current execution override for the active Step-04 implementation gate.

## Current authoritative stop point

```text
Step 04 production audit: COMPLETE
Step 04 Strict 1:1 visual contract: LOCKED
Current live baselines: VERIFIED
Generated 2.7.15 full-file candidates: INTERNAL AUDIT ARTIFACTS ONLY
Previous user-facing whole-file overwrite instruction: WITHDRAWN
User has NOT authorised full-file replacement
Checkout binary status: Not done
```

## Mandatory next action

```text
Derive bounded manual anchored replacements from the verified live baselines and the internal 2.7.15 candidate diff.

For each part provide:
- exact runtime path
- current bytes / lines / SHA256 / syntax state
- exact old code or START/END anchors
- expected unique match count
- STOP if count differs
- exact replacement code
- expected byte / line delta
- save instruction
- returned live-file validation
- actual bytes / lines / SHA256 / parser state
- exact rollback/reverse replacement
- STOP before advancing
```

## Explicit prohibition

Do NOT instruct the user to overwrite any of these with generated complete candidates:

```text
functions.php
woocommerce/checkout/thankyou.php
assets/css/spatial-flow.css
```

Complete candidates may be used only internally for comparison, diff derivation, audit and expected-output verification.

## CSS-specific requirement

Replace the currently-owned Step-5F Result block in `assets/css/spatial-flow.css` in place using exact START/END anchors. Do not append a second result visual layer and do not overwrite the full stylesheet.

## Strict 1:1 requirement

The approved static Step-04 reference remains the visual contract. Manual deployment method does not relax 1:1 requirements for geometry, typography, spacing, responsive breakpoints or hierarchy.

## Crypto visual follow-up

After Step 04 closes, the reopened V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch must be fixed and revalidated before Checkout may be marked Completed 1:1.
