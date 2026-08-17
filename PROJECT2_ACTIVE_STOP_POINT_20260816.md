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
Step04 manual anchored deployment: APPLIED BY USER
Step04 returned-source validation: PASS
Step04 runtime/status matrix: OPEN
Step04 strict 1:1 runtime visual acceptance: OPEN
Checkout binary status: Not done
```

## Accepted returned live source fingerprints

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: 568a904d67e2b2ed2c099b8c64e6b15a0f59c344d8f59253083bba742940f741
PHP syntax: PASS
SPATIAL_FLOW_CHILD_VERSION: 2.7.15
```

This differs from the internal audited candidate only by two removed empty lines between the Step5F END marker and the next Track Order block. Formatting-only; accepted.

### `woocommerce/checkout/thankyou.php`

```text
bytes: 43715
logical lines: 579
SHA256: 47f5b9e4e1bdd063eb7c0dddc8b6b8ce7e3e726ab394abcb660a5c91ca6f68ee
PHP syntax: PASS
```

This differs from the internal audited candidate only by the absence of the final trailing LF. Formatting-only; accepted.

### `assets/css/spatial-flow.css`

```text
bytes: 587216
logical lines: 20639
SHA256: cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9
brace balance: 3283 / 3283
comment balance: 275 / 275
tinycss2 errors: 0
```

This exactly matches the audited strict-reference candidate.

Detailed result record:

`project2-progress/STEP_4F_STEP04_MANUAL_DEPLOYMENT_SOURCE_VALIDATION_PASS_20260816.md`

## Mandatory next action

Run Step04 runtime/status/strict-1:1 validation as **one consolidated batch**.

Do not split Processing, Pending, Failed, Cancelled, Refunded, desktop/mobile, or recovery checks into separate conversational rounds unless a real blocking defect makes later tests unsafe.

Runtime batch must cover:

```text
processing / confirmed
completed
pending
on-hold
failed
cancelled
refunded
needs_payment same-order recovery CTA
gateway/general Woo Thank You hook preservation
real Woo order data rendering
desktop strict-reference parity for Confirmed and Pending
mobile strict-reference parity for Confirmed and Pending
browser/query cannot manufacture paid state
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

## Strict 1:1 requirement

The approved static Step-04 reference remains the visual contract. Source validation does not equal visual acceptance. Geometry, typography, spacing, responsive breakpoints and hierarchy must still be runtime-compared.

## Crypto visual follow-up

After Step 04 runtime/visual acceptance closes, the reopened V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch must be fixed and revalidated before Checkout may be marked Completed 1:1.
