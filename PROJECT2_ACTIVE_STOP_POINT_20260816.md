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
Step04 visible blocker A: REOPENED — white horizontal band below accepted header
Step04 visible blocker B: REOPENED — cancelled order still renders gateway-specific bank-transfer instructions
Step04 eight-capture computed rerun: PAUSED until both visible blockers are fixed/revalidated
Step04 next action: one targeted wrapper-chain diagnostic for white-band owner, then one consolidated manual anchored correction batch
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

## Latest visible blocker evidence

Authoritative record:

`project2-progress/STEP_4F_STEP04_VISIBLE_BLOCKERS_REOPEN_WHITE_BAND_AND_CANCELLED_GATEWAY_OUTPUT_20260827.md`

The user supplied current desktop screenshots showing two blockers that are visible before any fine computed-parity rerun:

1. a white horizontal band between the accepted global header and the beige Step04 surface;
2. `Our Bank Details` still rendered on a Cancelled order.

The second issue is a semantic/business-state defect. Current Step04 captures `woocommerce_thankyou_{gateway}` output and renders the resulting gateway-specific content whenever non-empty, even for terminal states. Hook preservation remains required, but terminal states must not display stale/actionable payment instructions.

The white-band owner is not yet proven. Current Step5F resets descendants including `.site-content .ast-container`, `#primary`, `.entry-content` and `.entry-content > .woocommerce`, but the screenshot indicates a residual parent-wrapper surface/gap. Do not patch by guesswork.

## Runtime/status evidence accepted so far

```text
Processing / confirmed state semantics: PASS
Completed state semantics: PASS
Pending state semantics: PASS
On-hold state semantics: PASS
Failed state semantics: PASS
Cancelled state semantics: PASS for main Step04 state copy, but gateway-output appropriateness REOPENED
Refunded state semantics: PASS
browser/query prototype_result cannot manufacture paid state: PASS
real Woo data rendering / server-authoritative status: PASS
no duplicate native Woo order-details table: PASS
gateway hook preservation: preserved, but state-appropriate rendering REOPENED
```

## Strict 1:1 method

Strict parity remains CODE-FIRST:

```text
1. reference source contract
2. runtime getComputedStyle / getBoundingClientRect
3. numeric diff
4. screenshots only as residual evidence
```

However, obvious visible blockers take precedence over rerunning the full eight computed captures. The eight-capture gate is paused until these blockers are resolved.

## Mandatory next action

Do NOT modify source blindly and do NOT rerun the full 17-step matrix or the eight computed-parity captures yet.

Run one targeted console diagnostic on the current production Step04 page for the wrapper chain:

```text
#page
.site
.site-content
.site-content > .ast-container
#primary
#main
.site-main
article
.ast-article-single
.entry-content
.entry-content > .woocommerce
.sf-order-result-v3
.woocommerce-breadcrumb
```

Capture rect top/bottom/height plus margin/padding/background/display. Use this to prove the exact white-band owner.

Then issue one consolidated manual anchored correction batch covering:

1. the proven white-band CSS owner in `assets/css/spatial-flow.css`;
2. state-gated gateway-specific payment output in `woocommerce/checkout/thankyou.php`, while preserving general non-payment Thank You hook output;
3. one cache/version bump in `functions.php`.

After returned-source validation, recheck these two visible blockers first. Only then resume the same eight computed parity captures.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Changing only its status later does not remove that refund object. #3621 is unsuitable for the remaining clean payable-amount/recovery sanity check.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 computed parity and the clean recovery sanity check close, fix/revalidate the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
