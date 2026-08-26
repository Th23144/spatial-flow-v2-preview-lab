# Project 2 · Active Stop Point · 2026-08-26

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
Step04 runtime/status matrix: MOSTLY ACCEPTED; one clean recovery sanity check remains
Step04 strict 1:1 runtime visual acceptance: PASS for Confirmed/Pending desktop+mobile and five additional state-family captures
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

Detailed source result record:

`project2-progress/STEP_4F_STEP04_MANUAL_DEPLOYMENT_SOURCE_VALIDATION_PASS_20260816.md`

## Runtime evidence accepted so far

```text
Processing / confirmed state semantics: PASS
Completed state semantics: PASS
Pending state semantics: PASS
On-hold state semantics: PASS
Failed state semantics: PASS
Cancelled state semantics: PASS
Refunded state semantics: PASS
browser/query prototype_result cannot manufacture paid state: PASS
real Woo data rendering / server-authoritative status: PASS
no duplicate native Woo order-details table: PASS
gateway-owned Thank You output preservation: PASS
Confirmed desktop live visual composition: PASS
Confirmed mobile live responsive composition: PASS
Pending desktop live visual composition: PASS
Pending mobile live responsive composition: PASS
Completed / On-hold / Failed / Cancelled / Refunded first-screen visual family: PASS
```

Evidence records:

- `project2-progress/STEP_4F_STEP04_RUNTIME_PARTIAL_REVIEW_REFUND_LEDGER_CORRECTION_20260826.md`
- `project2-progress/STEP_4F_STEP04_RUNTIME_TEST15_17_AND_TEST12_REVIEW_20260826.md`

## Refund-ledger correction

The original reusable order #3621 entered `Refunded`. WooCommerce core created a refund ledger object for the remaining refundable amount. Later changing only the order status back to Pending/Processing does not delete that refund object, so both Step04 and order-pay correctly continue to show the refund and effective 0.00 amount.

Therefore:

```text
Order #3621 is permanently unsuitable for clean payable-amount/recovery assertions.
The old instruction to cycle one reusable order through Refunded and then reuse it is withdrawn.
Refunded should use a separate disposable order and be performed last.
```

This is WooCommerce ledger behavior, not a Step04 arithmetic defect.

## Test 12 final clarification

Test 12 exists to verify that the custom Thank You template does not suppress gateway/plugin-owned Thank You output. It is not a Crypto settlement test.

The live Pending screenshot visibly renders gateway-owned `Our Bank Details` content exactly once, while source validation confirms the template dynamically invokes both the selected gateway-specific `woocommerce_thankyou_{gateway}` hook and the general `woocommerce_thankyou` hook.

Therefore Test 12 is accepted as PASS. A separate Crypto payment/replay is not required solely for Test 12 unless an actual Crypto Thank You regression is later observed.

## Mandatory next action — NOT STARTED YET

Do not restart the 17-test suite.

When the user authorizes continuation, run only one narrow clean-order sanity check using a fresh order that has never entered Refunded:

```text
1. confirm original non-zero payable total on Pending/Processing Step04
2. on Pending or Failed, use Return to payment / Retry payment
3. confirm order-pay keeps the same order number and same non-zero payable amount
4. do not complete payment and do not set that clean order to Refunded
```

This remaining check exists only because the original recovery evidence was collected after the reused order had already been financially mutated by Refunded.

No new test is started merely by documenting this stop point.

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

The approved static Step-04 reference remains the visual contract. Dynamic Woo order values/refund rows are business-data differences and do not by themselves invalidate visual 1:1 acceptance.

## Crypto visual follow-up

After the remaining Step 04 clean recovery sanity check closes, the reopened V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch must be fixed and revalidated before Checkout may be marked Completed 1:1.
