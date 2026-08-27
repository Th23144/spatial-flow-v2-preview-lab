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
Step04 visible blocker A white band: OWNER PROVEN — #main.site-main has 20px top / 44px bottom padding and white background
Step04 visible blocker B cancelled gateway instructions: SOURCE OWNER PROVEN — gateway-specific Thank You hook rendered without status gating
Step04 eight-capture computed rerun: PAUSED until both visible blockers are fixed/revalidated
Step04 next action: one consolidated manual anchored correction batch for CSS + thankyou.php + cache version bump
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

## Latest white-band diagnostic

Authoritative record:

`project2-progress/STEP_4F_STEP04_WHITE_BAND_OWNER_DIAGNOSTIC_PASS_AND_GATEWAY_OUTPUT_FIX_GATE_20260827.md`

Runtime proof:

```text
#primary top: 166px
#main.site-main top: 166px
article top: 186px
.sf-order-result-v3 top: 186px
```

`#main.site-main` computed:

```text
padding-top: 20px
padding-bottom: 44px
background-color: rgb(255,255,255)
```

The 20px white band therefore comes from `#main.site-main`. The 44px bottom padding is the same unowned wrapper behavior and should be reset at the same time.

## Gateway-output status gate

Current template preserves the gateway-specific `woocommerce_thankyou_{gateway}` hook but renders its captured output for all order states. That is why a Cancelled BACS order still shows `Our Bank Details`.

Required gate:

```text
show gateway-specific payment instructions when:
- $order->needs_payment() is true; OR
- status is on-hold

hide gateway-specific payment instructions for terminal/settled states such as:
- processing
- completed
- cancelled
- refunded
```

Keep general `woocommerce_thankyou` output preserved independently.

## Runtime/status evidence accepted so far

```text
Processing / confirmed state semantics: PASS
Completed state semantics: PASS
Pending state semantics: PASS
On-hold state semantics: PASS
Failed state semantics: PASS
Cancelled state main copy: PASS; stale gateway payment instructions: REOPENED
Refunded state semantics: PASS
browser/query prototype_result cannot manufacture paid state: PASS
real Woo data rendering / server-authoritative status: PASS
no duplicate native Woo order-details table: PASS
gateway hook preservation: preserved; state-appropriate gateway instruction rendering awaiting correction
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

Issue one consolidated manual anchored correction batch:

```text
A. assets/css/spatial-flow.css
   - add #main.site-main to Step5F page-frame reset
   - remove its inherited 20px top / 44px bottom padding
   - make its background #f6f1eb

B. woocommerce/checkout/thankyou.php
   - gate gateway-specific payment hook capture using needs_payment() OR on-hold
   - preserve general woocommerce_thankyou output

C. functions.php
   - bump 2.7.17 → 2.7.18
```

After the user returns all three edited files, validate size/lines/SHA/syntax/parser together. Then visually recheck only the white band and Cancelled gateway-output blocker. Resume the eight computed parity captures only after those two blockers pass.

Do not rerun the full 17-step matrix.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Changing only its status later does not remove that refund object. #3621 is unsuitable for the remaining clean payable-amount/recovery sanity check.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 computed parity and the clean recovery sanity check close, fix/revalidate the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
