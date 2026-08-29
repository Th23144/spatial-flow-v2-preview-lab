# Project 2 · Active Stop Point · 2026-08-29

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
Step04 final residual screenshot review: PASS
Step04 Strict 1:1: CLOSED
Step04 BACS On-hold bank-details output: NO THEME CHANGE — gateway-owned, test-only, allowed dynamic output
Checkout next action: one clean-order recovery sanity check using WooCommerce Pending payment (`pending` / 待付款) only; do not use On-hold (`on-hold` / 保留)
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

## Step04 final visual closure

Authoritative record:

`project2-progress/STEP_4F_STEP04_FINAL_SCREENSHOT_RESIDUAL_REVIEW_PASS_AND_STRICT_1_TO_1_CLOSE_20260828.md`

Commit:

`3c8b4b63a267da7456ce22e53a8a75b0ca3c4968`

Final conclusion:

```text
Step04 computed-style strict parity: PASS
Step04 final screenshot residual review: PASS
Step04 Strict 1:1: CLOSED
```

The four current-version production full-page screenshots were reviewed:

- Processing Desktop
- Processing Mobile
- On-hold Desktop
- On-hold Mobile

No unexplained Step04-owned visible residual remained. The unrelated mistakenly uploaded image was excluded.

Allowed dynamic Woo/gateway differences remain excluded from strict static parity scoring, including real order values, refund/shipping/gift-packaging rows, real addresses, copy-length-driven heights, real product assets and state-appropriate On-hold BACS output.

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

## BACS On-hold gateway output decision

Authoritative record:

`project2-progress/STEP_4F_STEP04_BACS_BANK_DETAILS_PRESENTATION_DECISION_20260828.md`

Commit:

`f4d25fd1cd1772589ee5fd6c6f2044ce7ae54886`

Decision:

```text
- Do not modify Step04 theme/template/CSS for the current `Our Bank Details` block.
- On-hold payment instructions are semantically appropriate and remain gateway-owned.
- Direct Bank Transfer/BACS is a temporary test gateway and will be disabled before production launch.
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

## Clean recovery status clarification

Authoritative record:

`project2-progress/STEP_4F_STEP04_CLEAN_RECOVERY_STATUS_CLARIFICATION_20260829.md`

Commit:

`df60a0b936038b519952283ddb7219cab0d4d489`

The remaining clean recovery sanity check is specifically for WooCommerce `Pending payment` (`pending` / 待付款), not `On-hold` (`on-hold` / 保留).

`On-hold` is a separate accepted Step04 state. Its lack of `Return to payment` / `Retry payment` is expected and is not a defect. The clean recovery test exists to validate the `$order->needs_payment()` path and canonical same-order `order-pay` route.

For this final sanity check, use only `Pending payment` to avoid ambiguity. Do not use `Failed` even if a particular configuration also exposes recovery there.

## Mandatory next action — one clean-order recovery sanity check

Do not modify source.

Create/use one fresh order that has never entered `Refunded` and whose payable total is non-zero. Do not use #3621.

Verify only this bounded flow:

```text
1. Fresh order exists with a non-zero payable total.
2. Set/leave the order status specifically as WooCommerce Pending payment (`pending` / 待付款).
3. Open the Step04 Order Result page for that same order.
4. Confirm Step04 shows the recovery CTA (`Return to payment` or `Retry payment`).
5. Use that CTA.
6. Confirm WooCommerce opens the canonical order-pay route for the same order.
7. Confirm the same order number is retained.
8. Confirm the payable amount remains the same non-zero amount.
9. Stop. Do not complete payment. Do not set this clean order to Refunded.
```

Do not use `On-hold` / `保留` for this test. Do not rerun the 17-step matrix.

After this clean recovery sanity check passes, proceed to the already-open Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch on desktop/mobile.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Changing only its status later does not remove that refund object. #3621 remains unsuitable for the clean payable/recovery sanity check.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.

## Crypto visual follow-up

After the clean recovery sanity check closes, fix/revalidate the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
