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
Step04 remaining strict micro-deltas: 3 computed-style ownership issues
Step04 next action: one final consolidated manual anchored CSS correction + cache version 2.7.20
Checkout binary status: Not done
```

## Current accepted live source fingerprints

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: f36e767387f0306eeae6744c6d17d99f4451999916f1c8d87df6797a183a736c
PHP syntax: PASS
SPATIAL_FLOW_CHILD_VERSION: 2.7.19
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
bytes: 588919
logical lines: 20670
SHA256: cc7d4a91ede6ff9297e0a7c6f03e4f079d2705798d567895de86034fc120b3b2
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
```

## Latest production-only 2.7.19 numeric re-audit

Authoritative record:

`project2-progress/STEP_4F_STEP04_2719_PRODUCTION_ONLY_FOUR_CAPTURE_NUMERIC_REAUDIT_AND_FINAL_MICRO_DELTA_20260828.md`

Commit:

`1eb32942fe0f1d91822ef4f1923732b7bb70eb36`

The four production captures match the locked reference environment:

```text
Desktop: 1920×991, document client width 1905, DPR1, visualViewport scale 1
Mobile: 390×844, DPR3, visualViewport scale 1
```

Reference JSON remains unchanged and is reused.

### 2.7.19 targeted corrections — runtime convergence

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

### Remaining deterministic micro-deltas

```text
A. .result-overview li span
   REF line-height 10.85px
   LIVE line-height 8.12px

B. Receipt table logical alignment
   REF table/thead/tbody/tfoot/non-final td/product copy computed text-align: start
   LIVE computed text-align: left
   th remains intentionally left; final column remains intentionally right

C. .result-address-card address
   REF text-align: start
   LIVE text-align: left
```

Because the user requires microscopic computed 1:1, logical `start` vs physical `left` is now treated as a strict residual even though current LTR visual output is equivalent.

## Dynamic differences excluded from strict CSS parity

Do not force these to match static reference values:

```text
- static reference product count vs real Woo order product count
- real product title/meta wrapping
- different real totals rows, fees, refund ledger or shipping rows
- actual Payment Facts values/order where driven by Woo data
- real product image vs static placeholder
- state-appropriate On-hold gateway output
- copy-length-dependent heights
- table column widths driven by real content
- absolute page Y differences caused by production site/header shell; Step04 geometry is compared relative to breadcrumb
```

Raw index-based differences in table cells, Payment Facts borders, and Summary rows were rechecked by semantic role and are not CSS failures.

## Final bounded correction candidate

Manual anchored source batch only:

```text
A. spatial-flow.css
   1. Overview span -> line-height:1.55 !important
   2. result-order-table root -> text-align:start !important
   3. receipt last-column rule -> text-align:right !important
   4. receipt td -> text-align:start !important
   5. address address/p block -> text-align:start !important

B. functions.php
   2.7.19 -> 2.7.20
```

Expected exact candidate fingerprints:

```text
spatial-flow.css
bytes 589058
logical lines 20674
delta +139 bytes / +4 lines
SHA256 27ccdfb39e70f8a0a037e7d85756eb7179e535273ac26bb30bf96cfb4f9a9cf6
braces 3282/3282
comments 275/275
tinycss2 errors 0

functions.php
bytes 612013
logical lines 11689
SHA256 e45991fa5795c2a9403bf3ef12b3634db709616c3b0189ccd63ffb21585bb1a3
version 2.7.20
```

No `thankyou.php` change is required.

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

Step04 strict 1:1 remains FAIL/PENDING until the final micro batch is applied, returned-source validation passes, and the four production JSON captures prove convergence against the retained reference baseline.

## Mandatory next action

Issue the final one-batch manual anchored replacements for `spatial-flow.css` and `functions.php`. Do not touch `thankyou.php`. After the user returns both edited files, validate exact fingerprints and parser/syntax. Then rerun only the four production JSON captures; do not regenerate reference JSON and do not rerun the 17-step matrix.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Changing only its status later does not remove that refund object. #3621 remains unsuitable for the remaining clean payable-amount/recovery sanity check.

After strict visual parity closes, perform only one clean-order recovery sanity check with a fresh order that was never Refunded.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 computed parity and the clean recovery sanity check close, fix/revalidate the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
