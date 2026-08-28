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
Step04 2.7.19 targeted eight deterministic deltas: ALL RUNTIME PASS
Step04 final 2.7.20 micro-parity source batch: APPLIED BY USER
Step04 2.7.20 returned-source validation: PASS EXACT
Step04 2.7.20 production-only four captures: FINAL NUMERIC AUDIT PASS
Step04 2.7.20 final three micro residual classes: ALL PASS
Step04 final full computed-style scan: PASS — no unexplained Step04-owned delta
Step04 computed-style strict parity: PASS
Step04 final residual screenshot review: PENDING
Step04 BACS On-hold bank-details output: NO THEME CHANGE — gateway-owned, test-only, allowed dynamic output
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

## 2.7.20 final four-production JSON audit

Authoritative record:

`project2-progress/STEP_4F_STEP04_2720_FOUR_PRODUCTION_JSON_FINAL_AUDIT_PASS_20260828.md`

Commit:

`4be92dea07e214674eab2adfc40ffa92348c5559`

Environment gate:

```text
Desktop: 1920×991, document client width 1905, DPR1, visualViewport scale 1
Mobile: 390×844, DPR3, visualViewport scale 1
Reference baseline unchanged and reused
```

Final 2.7.20 residual convergence:

```text
A. .result-overview li span line-height
   REF 10.85px
   LIVE 10.85px
   PASS

B. Receipt table logical alignment
   root / thead / tbody / tfoot / non-final td: start == start
   final value column: right == right
   PASS

C. Billing/shipping address logical alignment
   REF start
   LIVE start
   PASS
```

Final full computed-style sweep:

```text
PASS — no unexplained Step04-owned computed-style property mismatch remains in the captured selector/property contract.
```

Stable/static selectors outside dynamic Woo data regions have zero unexplained non-geometry style-property deltas.

Dynamic regions were compared by semantic role rather than raw index. Common Receipt, Payment Facts, Receipt Summary and payment/status roles show no style-property mismatch.

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
- cumulative downstream Y positions driven by preceding real-content height
- absolute page Y differences caused by production site/header shell; Step04 geometry is compared relative to breadcrumb
```

Order #3621 remains financially polluted by a real refund ledger and is not suitable for the remaining clean payable/recovery sanity check.

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
- If the BACS account-name value is an admin-centric placeholder, optionally change only the WooCommerce BACS setting.
- Gateway-owned BACS content is excluded from strict static S7 parity scoring except for Step04-owned surrounding container/boundary behavior.
```

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

Computed-style strict parity is now PASS. Step04 strict 1:1 is not formally closed until the final residual screenshot review confirms no remaining visible defect outside the locked dynamic-data/gateway exclusions.

## Mandatory next action

Do not modify source.

Perform the final current-version screenshot residual review against the unchanged Confirmed/Pending references. This is not another 17-step matrix and does not require new reference captures. Only if a visible mismatch remains should the exact selector/property owner be isolated before any correction.

After Step04 visual closure, perform only one clean-order recovery sanity check using a fresh order that was never Refunded. Do not use #3621.

Then fix/revalidate the Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.
