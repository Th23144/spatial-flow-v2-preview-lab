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
Step04 strict 1:1 runtime visual acceptance: REOPENED / NOT PASSED
Step04 strict 1:1 delta audit: COMPLETE
Step04 strict 1:1 correction batch: READY FOR USER MANUAL APPLICATION
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

### `woocommerce/checkout/thankyou.php`

```text
bytes: 43715
logical lines: 579
SHA256: 47f5b9e4e1bdd063eb7c0dddc8b6b8ce7e3e726ab394abcb660a5c91ca6f68ee
PHP syntax: PASS
```

### `assets/css/spatial-flow.css`

```text
bytes: 587216
logical lines: 20639
SHA256: cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9
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

Strict 1:1 visual acceptance remains reopened. Structural/responsive coherence is not strict parity.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Later changing only the order status back to Pending/Processing does not delete that refund object. Therefore #3621 remains unsuitable for clean payable-amount/recovery assertions.

## Strict 1:1 delta audit result

Authoritative record:

`project2-progress/STEP_4F_STEP04_STRICT_1_TO_1_DELTA_AUDIT_COMPLETE_AND_CORRECTION_BATCH_20260826.md`

Deterministic blockers identified:

```text
1. legacy Order Received wrapper top/bottom padding survives and creates white transition bands
2. production Woo/Astra `.woocommerce-order-details` surface collides with the transparent reference result panel
3. global `.woocommerce-checkout table.shop_table` 22px !important radius can beat the lower-specificity strict receipt-table selector
4. legacy Order Received `.woocommerce-customer-details address` 14px typography beats the strict 11px address rule
```

Current core Step04 source already matches the static reference for intro/shell ratios, 72px gaps, major typography targets, overview/facts/timeline grids, summary target, and responsive breakpoints. Those values are not to be speculatively changed before the deterministic cascade blockers are removed and re-screened.

## Mandatory next action — manual strict-parity correction batch

Do NOT start the remaining clean-order recovery sanity check yet.

Deliver/apply one same-batch manual anchored correction set:

```text
A. spatial-flow.css — authoritative host wrapper margin/padding reset
B. spatial-flow.css — authoritative result-panel surface reset
C. spatial-flow.css — receipt-table specificity/overflow reset
D. spatial-flow.css — customer-address specificity/typography reset
E. functions.php — cache version 2.7.15 -> 2.7.16
```

Expected corrected CSS internal audit fingerprint:

```text
bytes: 587405
logical lines: 20635
SHA256: 307958483ead674b91799908d5e64b3a4407154cc0fd1d394354dac4fdc013f8
brace balance: 3281 / 3281
comment balance: 275 / 275
tinycss2 errors: 0
```

After the user returns both edited files, validate source once. Then re-capture only:

```text
Confirmed desktop
Confirmed mobile 390px
Pending desktop
Pending mobile 390px
```

for strict 1:1 reacceptance.

Only after strict visual parity closes should the one clean-order recovery sanity check run.

## Explicit prohibition / default boundary

Do NOT instruct the user to overwrite full generated `functions.php`, `thankyou.php`, or `spatial-flow.css` files under the default workflow. Continue manual anchored replacements unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 correction and the remaining clean recovery sanity check close, fix and revalidate the reopened V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
