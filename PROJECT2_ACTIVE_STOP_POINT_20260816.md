# Project 2 · Active Stop Point · 2026-08-27

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
Step04 initial returned-source validation: PASS
Step04 runtime/status matrix: MOSTLY ACCEPTED; one clean recovery sanity check remains
Step04 strict 1:1 round-2 structural visual regression: PASS AS STRUCTURAL EVIDENCE ONLY
Step04 code-first computed parity audit: COMPLETE
Step04 first strict 1:1 computed result: FAIL — deterministic CSS deltas identified
Step04 bounded computed-parity CSS correction: APPLIED BY USER
Step04 computed-parity correction returned-source validation: PASS EXACT
Step04 next action: rerun the same 8 computed parity captures only
Checkout binary status: Not done
```

## Current accepted live source fingerprints

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: c93ddf3ea896ff32d4904a8ef41e0a85923e1dc49a09542e99989a89faf67b3b
PHP syntax: PASS
SPATIAL_FLOW_CHILD_VERSION: 2.7.17
```

### `woocommerce/checkout/thankyou.php`

```text
bytes: 43715
logical lines: 579
SHA256: 47f5b9e4e1bdd063eb7c0dddc8b6b8ce7e3e726ab394abcb660a5c91ca6f68ee
PHP syntax: PASS
```

### `assets/css/spatial-flow.css`

```text
bytes: 588493
logical lines: 20661
SHA256: e1cf15a54e9d34e3ae1fea144398f4ef9187227e3aff23b16863bf6fdc9708bc
brace balance: 3281 / 3281
comment balance: 275 / 275
tinycss2 errors: 0
```

## Returned-source validation result

Authoritative record:

`project2-progress/STEP_4F_STEP04_COMPUTED_PARITY_CORRECTION_RETURNED_SOURCE_VALIDATION_PASS_20260827.md`

The user-returned `functions.php` and `spatial-flow.css` match the previously predicted post-edit fingerprints exactly. No unexpected source delta was found.

The Step5F canonical owner now contains the intended computed-parity corrections, including explicit ownership for root typography, Order Overview typography, Receipt panel/table typography, heading text-transform, paragraph margins, summary heading ownership, footer weight, and result-action line-height.

## Runtime/status evidence accepted so far

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
```

## Strict 1:1 method

Strict parity remains CODE-FIRST:

```text
1. reference source contract
2. runtime getComputedStyle / getBoundingClientRect
3. numeric diff
4. screenshots only as residual evidence
```

The previous 8-capture computed audit identified deterministic CSS-owned mismatches. Those source corrections are now applied and source-validated exactly.

## Mandatory next action

Do NOT modify source and do NOT rerun the full 17-step matrix.

Rerun only the same eight computed parity captures:

```text
1. Confirmed reference desktop
2. Processing production desktop
3. Confirmed reference mobile 390x844
4. Processing production mobile 390x844
5. Pending reference desktop
6. Pending production desktop
7. Pending reference mobile 390x844
8. Pending production mobile 390x844
```

Then perform numeric source/computed comparison using the same selector set and same-viewport geometry/typography/style fields.

PASS requires zero remaining deterministic Step04-owned computed deltas, except explicitly allowed dynamic production deviations.

Allowed deviations:
- real WooCommerce values/items/totals/addresses;
- gateway-owned Thank You output;
- already-accepted live global header/footer;
- production-only status semantics outside static Confirmed/Pending.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Changing only its status later does not remove that refund object. #3621 is unsuitable for the remaining clean payable-amount/recovery sanity check.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 computed parity and the clean recovery sanity check close, fix/revalidate the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
