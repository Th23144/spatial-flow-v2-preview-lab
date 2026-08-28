# Project 2 · Active Stop Point · 2026-08-28

This file is the current execution override for the active Step-04 implementation gate.

## Current authoritative stop point

```text
Step 04 production audit: COMPLETE
Step 04 Strict 1:1 visual contract: LOCKED
Step04 runtime/status matrix: MOSTLY ACCEPTED; one clean recovery sanity check remains
Step04 visible blocker A white band: CLOSED — runtime PASS
Step04 visible blocker B cancelled gateway instructions: CLOSED — runtime PASS; On-hold preserved
Step04 strict-parity V2 eight captures: RECEIVED AND NUMERICALLY AUDITED
Step04 bounded computed-parity 2.7.19 correction batch: APPLIED BY USER
Step04 2.7.19 returned-source validation: PASS EXACT
Step04 unchanged reference JSON baseline: REUSED
Step04 2.7.19 production-only four captures: RECEIVED AND NUMERICALLY RE-AUDITED
Step04 2.7.19 targeted eight deterministic deltas: ALL RUNTIME PASS
Step04 final 2.7.20 micro-parity source batch: APPLIED BY USER
Step04 2.7.20 returned-source validation: PASS EXACT
Step04 2.7.20 production-only four captures: RECEIVED; numeric final audit pending
Step04 BACS On-hold bank-details output: NO THEME CHANGE — gateway-owned, test-only, allowed dynamic output
Step04 next action: audit the four new 2.7.20 production captures against retained reference baseline
Checkout binary status: Not done
```

## Current accepted live source fingerprints

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: e45991fa5795c2a9403bf3ef12b3634db709616c3b0189ccd63ffb21585bb1a3
PHP syntax: PASS
SPATIAL_FLOW_CHILD_VERSION: 2.7.20
```

### `woocommerce/checkout/thankyou.php`

```text
bytes: 43932
logical lines: 584
SHA256: 69ea915ddbe1e3f6132715d9bfd0bf1dfde6725eca545d7c39f4916162e087fb
PHP syntax: PASS
```

### `assets/css/spatial-flow.css`

```text
bytes: 589058
logical lines: 20674
SHA256: 27ccdfb39e70f8a0a037e7d85756eb7179e535273ac26bb30bf96cfb4f9a9cf6
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
```

## 2.7.20 returned-source validation

Authoritative record:

`project2-progress/STEP_4F_STEP04_2720_RETURNED_SOURCE_VALIDATION_PASS_EXACT_20260828.md`

Commit:

`7cb0966533a862e5cae6308be281764274eabdfa`

Returned source matches the exact predicted candidate:

```text
CSS actual delta from 2.7.19: +139 bytes / +4 logical lines
CSS predicted delta: +139 bytes / +4 logical lines
functions version: exactly one 2.7.20; old 2.7.19 absent
PHP lint: PASS
CSS parser/structure: PASS
```

Exact intended bounded edits verified new 1 / old 0:

```text
A. Overview label line-height -> 1.55 !important
B. Receipt table root -> text-align:start !important
C. Receipt last column -> text-align:right !important
D. Normal receipt td -> text-align:start !important
E. Billing/shipping address copy -> text-align:start !important
```

## BACS On-hold gateway output decision

Authoritative record:

`project2-progress/STEP_4F_STEP04_BACS_BANK_DETAILS_PRESENTATION_DECISION_20260828.md`

Commit:

`f4d25fd1cd1772589ee5fd6c6f2044ce7ae54886`

Decision:

```text
- Do not modify Step04 theme/template/CSS for the current `Our Bank Details` block.
- On-hold payment instructions are semantically appropriate and must remain gateway-owned.
- Direct Bank Transfer/BACS is a temporary test gateway and will be disabled before production launch.
- If the BACS account-name value is an admin-centric placeholder (`我的账户` / `测试账户`), optionally change only the WooCommerce BACS setting to a neutral test label; do not create Step04 code for it.
- Before production launch, disable BACS and remove/replace test-only account details if retained test/staging orders could remain reachable.
- Gateway-owned BACS content is excluded from strict static S7 parity scoring, except for Step04-owned surrounding container/boundary behavior.
```

## Prior 2.7.19 runtime convergence

Authoritative record:

`project2-progress/STEP_4F_STEP04_2719_PRODUCTION_ONLY_FOUR_CAPTURE_NUMERIC_REAUDIT_AND_FINAL_MICRO_DELTA_20260828.md`

Commit:

`1eb32942fe0f1d91822ef4f1923732b7bb70eb36`

The previous four production captures proved all earlier eight deterministic deltas converged:

```text
1. Overview strong 18px / 20.88px: PASS
2. Facts dt weight 400: PASS
3. Timeline h3 23px / 24.84px: PASS
4. Address h3 8px / 12.4px / 1.44px: PASS
5. Receipt Summary heading line-height 48.05px: PASS
6. Result Panel max-width none: PASS
7. <=420 final Overview item grid-column 1 / -1: PASS
8. Summary price white-space normal: PASS
```

The only remaining strict residuals at that point were:

```text
A. Overview label line-height
B. Receipt-table logical start/right alignment ownership
C. Billing/shipping address logical start alignment ownership
```

These are now present in accepted 2.7.20 source and require runtime confirmation only.

## Dynamic differences excluded from strict CSS parity

Do not force these to match static reference values:

```text
- static reference product count vs real Woo order product count
- real product title/meta wrapping
- different real totals rows, fees, refund ledger or shipping rows
- actual Payment Facts values/order where driven by Woo data
- real product image vs static placeholder
- state-appropriate On-hold gateway output, including BACS bank instructions
- copy-length-dependent heights
- table column widths driven by real content
- absolute page Y differences caused by production site/header shell; Step04 geometry is compared relative to breadcrumb
```

Raw index-based differences in table cells, Payment Facts borders, and Summary rows must be compared by semantic role rather than array position.

## Runtime/status evidence already accepted

```text
Processing / confirmed state semantics: PASS
Completed state semantics: PASS
Pending state semantics: PASS
On-hold state semantics: PASS
Failed state semantics: PASS
Cancelled state main copy: PASS
Cancelled gateway-output appropriateness: PASS
Refunded state semantics: PASS
browser/query prototype_result cannot manufacture paid state: PASS
real Woo data rendering / server-authoritative status: PASS
no duplicate native Woo order-details table: PASS
gateway hook preservation and state-appropriate rendering: PASS
```

## Strict 1:1 method

Strict parity remains CODE-FIRST:

```text
1. source/reference contract
2. runtime getComputedStyle / getBoundingClientRect
3. numeric selector/property diff
4. semantic-role alignment for dynamic Woo content
5. owner/cascade isolation
6. screenshots only as residual evidence
```

Step04 strict 1:1 remains FAIL/PENDING until the 2.7.20 four-capture production audit proves the final three computed-style residual classes have converged against the retained reference baseline and a final full computed scan finds no unexplained Step04-owned delta.

## Mandatory next action

Do not modify source now.

The four new 2.7.20 production JSON captures have been received. Audit them against the retained four reference JSON files. First verify the final three residual classes; then perform one final full computed scan. Do not regenerate reference JSON and do not rerun the 17-step runtime matrix.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Changing only its status later does not remove that refund object. #3621 remains unsuitable for the remaining clean payable-amount/recovery sanity check.

After strict visual parity closes, perform only one clean-order recovery sanity check with a fresh order that was never Refunded.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 computed parity and the clean recovery sanity check close, fix/revalidate the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
