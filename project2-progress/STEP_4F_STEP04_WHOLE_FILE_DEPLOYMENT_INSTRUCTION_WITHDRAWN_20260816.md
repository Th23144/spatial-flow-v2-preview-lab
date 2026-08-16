# Project 2 · Step 04 Whole-File Deployment Instruction Withdrawn

Date: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Previous user-facing instruction to overwrite:
- functions.php
- woocommerce/checkout/thankyou.php
- assets/css/spatial-flow.css
with generated full-file candidates

STATUS: WITHDRAWN / MUST NOT BE APPLIED
```

## Reason

The instruction violated the locked Project-2 implementation policies:

- `PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md`
- `PROJECT2_CSS_MAINTENANCE_POLICY.md`

These policies require Project-2 live changes to default to bounded manual anchored replacement and explicitly prohibit routine whole-file overwrite instructions for large theme files and Checkout templates unless the user explicitly requests that method for the current step.

The user did not request full-file replacement.

## Correct interpretation of the generated 2.7.15 candidates

The generated candidate files may remain only as INTERNAL comparison/diff/audit artifacts.

They are NOT user-facing deployment packages and MUST NOT be used to overwrite current runtime files.

## Correct deployment workflow from this point

For every bounded change:

```text
identify one bounded part
-> exact runtime file path
-> current bytes / logical lines / SHA256 / syntax state
-> exact old code or exact START/END anchors
-> expected match count
-> STOP if match count differs
-> exact replacement code
-> expected byte delta / line delta
-> user saves manually
-> returned live file validation
-> actual bytes / lines / SHA256 / syntax or parser validation
-> independent rollback code
-> STOP before next part
```

For CSS:

```text
replace the existing owned Step-5F Result block in place using exact START/END anchors
DO NOT append another full visual layer
DO NOT overwrite the full spatial-flow.css file
```

For `functions.php`:

```text
use bounded replacements only
DO NOT overwrite the full file
```

For `woocommerce/checkout/thankyou.php`:

Although the file is smaller than functions.php/spatial-flow.css, it is explicitly covered by the Checkout-template whole-file prohibition. Deployment must therefore also be issued as anchored replacement parts rather than blind whole-file overwrite.

## Strict 1:1 remains mandatory

Withdrawal of the deployment method does NOT withdraw the Step-04 1:1 target.

The approved static Step-04 source remains the visual contract. The live WooCommerce result page must reproduce its geometry, typography, spacing and responsive composition while keeping Woo/server order truth and backend editability.

## Current stop point

```text
Step-04 audit: COMPLETE
Strict 1:1 contract: LOCKED
2.7.15 full candidates: INTERNAL AUDIT ARTIFACTS ONLY
Whole-file deployment instruction: WITHDRAWN
No user runtime edit is authorized from those full-file candidates
Next action: derive bounded manual anchored replacement parts from the verified live baselines and internal candidate diff
```
