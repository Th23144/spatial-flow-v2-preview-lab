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
Step04 visible blocker A white band: OWNER PROVEN — #main.site-main 20px/44px padding + white background
Step04 visible blocker B cancelled gateway instructions: SOURCE OWNER PROVEN — ungated gateway-specific Thank You hook output
Step04 visible-blocker correction batch: APPLIED BY USER
Step04 visible-blocker correction returned-source validation: PASS
Step04 eight-capture computed rerun: PAUSED
Step04 next action: narrow runtime recheck of white band + Cancelled gateway output + On-hold gateway preservation
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

## Latest accepted source correction

Authoritative record:

`project2-progress/STEP_4F_STEP04_VISIBLE_BLOCKER_CORRECTION_RETURNED_SOURCE_VALIDATION_20260827.md`

Commit:

`0824e4a77602f3933fd43b9b949cb0699c20d032`

Validated source ownership:

```text
White-band owner:
#main.site-main is now part of the Step5F page-frame reset and has Step04 beige background ownership.

Gateway-output gate:
show gateway-specific payment instructions when:
- $order->needs_payment() is true; OR
- status is on-hold

hide gateway-specific payment instructions for settled/terminal states including:
- processing
- completed
- cancelled
- refunded

General woocommerce_thankyou output remains preserved independently.
```

## Runtime/status evidence accepted so far

```text
Processing / confirmed state semantics: PASS
Completed state semantics: PASS
Pending state semantics: PASS
On-hold state semantics: PASS
Failed state semantics: PASS
Cancelled state main copy: PASS; gateway-output fix source-validated, runtime recheck pending
Refunded state semantics: PASS
browser/query prototype_result cannot manufacture paid state: PASS
real Woo data rendering / server-authoritative status: PASS
no duplicate native Woo order-details table: PASS
gateway hook preservation: source-preserved; state-appropriate runtime recheck pending
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

## Mandatory next action

Do NOT rerun the full 17-step matrix or the eight computed-parity captures yet.

Run one narrow visible-blocker runtime recheck after hard refresh / cache-version 2.7.18 load:

```text
A. Any Step04 desktop page:
   - confirm the white horizontal band below the accepted header is gone.

B. Cancelled BACS order:
   - confirm `Our Bank Details` / gateway-specific payment instructions are absent.

C. On-hold BACS order:
   - confirm `Our Bank Details` / gateway-specific payment instructions are still present.
```

Return these three observations/screenshots together. If all pass, record the visible blockers CLOSED and resume the same eight computed-parity captures.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Changing only its status later does not remove that refund object. #3621 remains unsuitable for the remaining clean payable-amount/recovery sanity check.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 computed parity and the clean recovery sanity check close, fix/revalidate the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
