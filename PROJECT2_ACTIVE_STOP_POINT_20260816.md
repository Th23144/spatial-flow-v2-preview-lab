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
Step04 strict 1:1 round-2 structural visual regression: PASS AS STRUCTURAL EVIDENCE ONLY
Step04 code-first computed parity audit: COMPLETE
Step04 strict 1:1 computed result: FAIL — deterministic CSS deltas remain
Step04 next action: bounded CSS parity correction + cache version bump
Checkout binary status: Not done
```

## Current accepted live source fingerprints

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: ef28d7c51ec8e03649b75a2f1183420e14d1a9c139568353f9509673739770ed
PHP syntax: PASS
SPATIAL_FLOW_CHILD_VERSION: 2.7.16
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
bytes: 587405
logical lines: 20635
SHA256: 307958483ead674b91799908d5e64b3a4407154cc0fd1d394354dac4fdc013f8
brace balance: 3281 / 3281
comment balance: 275 / 275
tinycss2 errors: 0
```

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

Strict parity is CODE-FIRST:

```text
1. reference source contract
2. runtime getComputedStyle / getBoundingClientRect
3. numeric diff
4. screenshots only as residual evidence
```

Authoritative computed audit record:

`project2-progress/STEP_4F_STEP04_COMPUTED_PARITY_AUDIT_FAIL_AND_CSS_CORRECTION_GATE_20260826.md`

Eight supplied JSON captures were sorted into:

```text
Confirmed reference desktop ↔ Processing production desktop
Confirmed reference 390x844 ↔ Processing production 390x844
Pending reference desktop ↔ Pending production desktop
Pending reference 390x844 ↔ Pending production 390x844
```

Viewport/DPR/scale and all Step04 CSS variables match. Core max-width, gutters, desktop intro columns, 72px gaps, title metrics, shell ratio and mobile one-column breakpoints are substantially aligned.

However strict 1:1 is NOT passed because deterministic computed CSS mismatches remain:

```text
A. Step04 root font-size/line-height: reference 16px/24.8px; live desktop 14px/21.7px; live mobile 12.768px/19.7904px
B. result-overview li font metrics leak from Woo order_details
C. result-title and panel h2 text-transform: reference none; live capitalize
D. theme paragraph bottom margins leak into lede/authority/panel copy/summary note
E. first Receipt panel inherits Woo/system font family instead of Inter
F. order-table footer cells inherit Woo/system font and weight 500 instead of Inter/400
G. result-action line-height is coded 1.2; reference computes from 1.55
```

These are CSS-owned. No PHP status/business logic or `thankyou.php` semantic change is required.

## Mandatory next action

Issue one consolidated manual anchored correction batch for `assets/css/spatial-flow.css`, followed only by a cache-version bump in `functions.php`.

Do not overwrite whole files. Do not rerun the full 17-step matrix.

After returned-source validation, rerun the same eight computed parity captures. PASS requires zero remaining deterministic Step04-owned computed deltas, except explicitly allowed dynamic production deviations.

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
