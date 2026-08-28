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
Step04 visible blocker A white band: CLOSED — runtime PASS after #main.site-main ownership correction
Step04 visible blocker B cancelled gateway instructions: CLOSED — runtime PASS; Cancelled hidden and On-hold preserved
Step04 strict-parity V2 eight captures: RECEIVED AND NUMERICALLY AUDITED
Step04 strict-parity V2 result: FAIL — bounded deterministic CSS/cascade deltas remain
Step04 next action: one consolidated manual anchored CSS correction batch + cache version bump
Checkout binary status: Not done
```

## Current accepted live source fingerprints

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: 4d5e807a75a5f5548ee69639f6bc6070eef4d1c30d80f54970d3057a7dae6125
PHP syntax: PASS
SPATIAL_FLOW_CHILD_VERSION: 2.7.18
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
bytes: 588629
logical lines: 20666
SHA256: 7cad3472f4ee53b672b4ce1d2d27bb2641b9b34e5541b48e39f145fcb956a8d8
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
```

## Latest strict-parity V2 audit

Authoritative record:

`project2-progress/STEP_4F_STEP04_STRICT_PARITY_V2_EIGHT_CAPTURE_NUMERIC_AUDIT_FAIL_20260827.md`

Commit:

`9e0ed18d214e07e9b49f9dafad2e1714f85a711a`

All eight captures used the same diagnostic version and matched viewport/DPR/visualViewport conditions.

Confirmed reference is paired to Processing production. Pending reference is paired to On-hold production only for the shared Pending-family visual contract; state-copy differences are excluded.

### Deterministic remaining blockers

```text
1. .result-overview li strong
   REF 18px / 20.88px
   LIVE 22.4px / 33.6px

2. .result-facts dt
   REF weight 400
   LIVE weight 600

3. .result-timeline h3
   REF 23px / 24.84px
   LIVE desktop 15.4px / 16.632px
   LIVE mobile 14.0448px / 15.1684px

4. .result-address-card h3
   REF 8px / 12.4px / letter 1.44px
   LIVE desktop 15.4px / 17.71px / 2.772px
   LIVE mobile 14.0448px / 16.1515px / 2.52806px

5. .result-summary__head h3
   REF line-height 48.05px
   LIVE 35.65px

6. .result-panel
   REF max-width none
   LIVE max-width 800px

7. <=420px final Overview item
   REF grid-column 1 / -1
   LIVE auto

8. .result-summary__price
   REF white-space normal
   LIVE nowrap
```

### Excluded dynamic differences

Do not treat these as CSS failures:

```text
- 3 static reference products vs 1 real Woo product
- real product title/meta wrapping
- different real totals rows including Gift Packaging / Refund
- real Payment Facts field values/order
- real Shipping summary row
- real product image vs static radial placeholder
- On-hold gateway output
- copy-length-dependent heights
- table column widths driven by real content
```

LTR `left` vs logical `start` is not promoted to a blocker in this correction batch unless it remains as the only final residual.

## Latest visible-blocker runtime closure

Authoritative record:

`project2-progress/STEP_4F_STEP04_VISIBLE_BLOCKERS_RUNTIME_PASS_AND_COMPUTED_PARITY_RESUME_20260827.md`

Commit:

`53d6fa8e438dafe7d3559cebc240368ee9953d6c`

Runtime PASS:

```text
A. White band below header: GONE
B. Cancelled order gateway-specific payment instructions: ABSENT
C. On-hold BACS gateway-specific payment instructions: PRESERVED
```

## Runtime/status evidence accepted so far

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
1. obvious blocker elimination and owner proof
2. reference source contract
3. runtime getComputedStyle / getBoundingClientRect
4. numeric diff
5. screenshots only as residual evidence
```

Step04 strict 1:1 remains FAIL/PENDING until deterministic computed deltas are eliminated or explicitly documented as permitted production-only deviations.

## Mandatory next action

Do NOT rerun the full 17-step matrix and do NOT regenerate the eight captures yet.

Issue one coherent manual anchored source batch:

```text
A. assets/css/spatial-flow.css
   - reclaim Overview strong font-size/line-height
   - set Facts dt weight 400
   - reclaim Timeline h3 23px/1.08
   - reclaim Address-card h3 8px/root-like line-height
   - set Summary heading line-height 1.55
   - remove result-panel max-width:800 leak
   - restore <=420 Overview last item grid-column 1/-1
   - remove production-only Summary price nowrap

B. functions.php
   - cache version bump 2.7.18 → 2.7.19
```

No `thankyou.php` change is required by this numeric audit.

After the user returns both edited files, validate size/lines/SHA/syntax/parser together. Then rerun the same eight captures and perform the next numeric diff.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Changing only its status later does not remove that refund object. #3621 remains unsuitable for the remaining clean payable-amount/recovery sanity check.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 computed parity and the clean recovery sanity check close, fix/revalidate the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
