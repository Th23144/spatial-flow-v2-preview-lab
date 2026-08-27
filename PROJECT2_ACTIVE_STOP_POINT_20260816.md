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
Step04 strict 1:1 delta audit: COMPLETE
Step04 strict 1:1 correction batch: APPLIED BY USER
Step04 strict 1:1 correction source validation: PASS
Step04 strict 1:1 round-2 structural visual regression: PASS
Step04 strict 1:1 final acceptance: REOPENED FOR CODE-FIRST COMPUTED PARITY AUDIT
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
```

## Strict 1:1 correction and round-2 review

Authoritative audit/correction record:

`project2-progress/STEP_4F_STEP04_STRICT_1_TO_1_DELTA_AUDIT_COMPLETE_AND_CORRECTION_BATCH_20260826.md`

Round-2 runtime review record:

`project2-progress/STEP_4F_STEP04_STRICT_1_TO_1_RUNTIME_REVALIDATION_ROUND2_20260826.md`

The four post-fix live captures show that the deterministic cascade blockers are corrected:

```text
- legacy white transition band removed
- old opaque Woo/Astra Order Receipt card surface removed
- receipt table visually follows flat/square reference geometry
- billing/shipping address typography follows the smaller reference treatment
- desktop main/summary composition remains coherent
- 390px overview/facts/timeline/address/summary collapse remains coherent
```

These observations are structural regression evidence only. They are NOT strict 1:1 acceptance.

## Strict 1:1 acceptance methodology — CODE-FIRST

Authoritative correction record:

`project2-progress/STEP_4F_STEP04_STRICT_1_TO_1_CODE_FIRST_ACCEPTANCE_METHOD_CORRECTION_20260826.md`

Strict 1:1 must not be accepted by visual inspection alone. Required order:

```text
1. extract reference source contract
2. normalized reference-vs-production CSS property diff
3. same-viewport runtime getComputedStyle + getBoundingClientRect capture
4. numeric computed-style / geometry diff
5. screenshot/pixel review only as final residual check
6. PASS only if remaining deltas are zero or explicitly allowed production deviations
```

The already supplied paired screenshots remain useful evidence, but do not close strict 1:1 by themselves.

## Mandatory next action — code/computed parity audit

Do NOT modify source and do NOT rerun the full 17-step runtime matrix.

Compare the approved S7 reference and live Step04 at desktop and mobile 390x844 using a deterministic runtime diagnostic that captures, for the same target selectors:

```text
bounding rect x/y/width/height
computed display/position/grid-template-columns/gap/align-items
margin/padding
font-family/font-size/font-weight/font-style/line-height/letter-spacing
color/background/border/border-radius/box-shadow
sticky top and responsive state
```

Target selectors include breadcrumb, result-intro/title/lede/authority, checkout steps, result-shell/status/overview, panels/table/facts/timeline/addresses, result-side/summary/actions.

Only after a concrete numeric/source delta is identified may another CSS correction batch be issued.

Allowed production deviations that do not by themselves fail strict visual parity:

- real WooCommerce order values/items/totals/addresses;
- gateway-owned Thank You output;
- already-accepted site-wide live header/footer components;
- production-only state semantics outside S7 Confirmed/Pending.

These deviations do not waive Step04-owned geometry/typography/style parity.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Later changing only the order status back to Pending/Processing does not delete that refund object. Therefore #3621 remains unsuitable for clean payable-amount/recovery assertions.

## Explicit prohibition / default boundary

Do NOT instruct the user to overwrite full generated `functions.php`, `thankyou.php`, or `spatial-flow.css` files under the default workflow. Continue manual anchored replacements unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 acceptance and the remaining clean recovery sanity check close, fix and revalidate the reopened V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
