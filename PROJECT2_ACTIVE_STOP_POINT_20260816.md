# Project 2 · Active Stop Point · 2026-08-29

This file is the current execution override for the active Step-04 / Checkout closure gate.

## Current authoritative stop point

```text
Step 04 production audit: COMPLETE
Step04 computed-style strict parity: PASS
Step04 final screenshot residual review: PASS for the captured static/residual contract
Step04 clean Pending-payment recovery sanity: PASS
Step04 desktop result-side sticky runtime behavior: FAIL — non-activation proven
Step04 sticky diagnostic: COMPLETE
Step04 proposed source correction: PAUSED
Step01/Step02 vs Step04 differential diagnosis: ACTIVE — one known-working Step01/02 control capture required before final root-cause lock
Step04 overall closure: REOPENED narrowly for real-scroll sticky behavior
Step03 sidebar sticky investigation: DEFERRED BY USER until Step04 is finished
Step04 BACS On-hold bank-details output: NO THEME CHANGE — gateway-owned, test-only, allowed dynamic output
Checkout next action: capture one working Step01/Step02 desktop sticky control and diff its runtime/ancestor conditions against failing Step04
Checkout binary status: Not done
```

## Architectural clarification — Step01/02 versus Step04

Authoritative clarification:

`project2-progress/STEP_4F_CHECKOUT_STICKY_BEHAVIOR_CROSS_STEP_ARCHITECTURE_CLARIFICATION_20260829.md`

Commit:

`64a868685b5235fa276d0e69342ce7cb204d91f4`

Locked clarification:

```text
Step01/Step02 and Step04 are not the same runtime page/template.
Step01/Step02 are ordinary Checkout form states and use the normal Checkout shell/right summary implementation.
Step04 is the WooCommerce order-received/result endpoint and uses `.sf-order-result-v3 > .result-shell > .result-side`.
They share a visual contract/information architecture, but the right-side panel is not one single DOM/component instance reused through all four steps.
Therefore sticky/ancestor/runtime behavior can differ by step even when the panels look intentionally consistent.
Step03 remains deferred until Step04 closes.
```

## Differential diagnostic start

Authoritative start record:

`project2-progress/STEP_4F_STEP01_VS_STEP04_STICKY_DIFFERENTIAL_DIAGNOSTIC_START_20260829.md`

Commit:

`2162d6929abc2f1aa80d88b305a48b549885d12a`

Use one known-working Step01 or Step02 desktop page as control, preferably Step02 if convenient. Capture its sticky owner, ancestor overflow/transform/contain, sidebar/shell geometry and actual locked viewport positions. Compare to the already-captured Step04 failure before any source correction.

## Step04 sticky runtime evidence already proven

Authoritative diagnostic conclusion:

`project2-progress/STEP_4F_STEP04_RESULT_SIDE_STICKY_RUNTIME_DIAGNOSTIC_CONCLUSION_20260829.md`

Commit:

`ed13c31b469f0eacbe15c0e7115130b96904e0b5`

Live runtime evidence on 1920×991 desktop:

```text
.result-side computed position: sticky
.result-side computed top: 132px
.result-side height: 891.75px
usable viewport below top inset: 859px
```

Yet every scroll sample remained unlocked:

```text
scrollY 314  -> sideTop 358.281 -> locked false
scrollY 402  -> sideTop 270.281 -> locked false
scrollY 502  -> sideTop 170.281 -> locked false
scrollY 827  -> sideTop -154.719 -> locked false
scrollY 1171 -> sideTop -498.719 -> locked false
scrollY 1466 -> sideTop -793.719 -> locked false
```

The sidebar moves one-for-one with `.result-shell`, so native sticky never activates.

The Step04 ancestor audit found:

```text
body -> overflow: hidden auto
html -> overflow: hidden auto
```

with ordinary Step04/Astra ancestors otherwise `overflow:visible`, `transform:none`, `contain:none`.

Important correction: because the user confirms Step01/Step02 sticky currently works on the same site, html/body overflow is now treated as a candidate/participating condition rather than the final unique root cause until a working Step01/02 control is captured and compared.

Do not apply the previously prepared 2.7.21 overflow-unlock change until this differential is resolved.

## Retained accepted Step04 evidence

These remain accepted and must not be reopened without a separate concrete regression:

```text
- white-band blocker: CLOSED / PASS
- cancelled gateway instructions blocker: CLOSED / PASS
- Processing / Completed / Pending / On-hold / Failed / Cancelled / Refunded semantics: PASS
- browser/query tamper cannot manufacture paid state: PASS
- real Woo data rendering: PASS
- no duplicate Woo order-details table: PASS
- gateway hook preservation: PASS
- 2.7.20 final computed-style scan: PASS
- final three computed micro-residuals: PASS
- clean Pending-payment recovery to same order-pay/order/amount: PASS
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

## Clean recovery closure retained

Authoritative record:

`project2-progress/STEP_4F_STEP04_CLEAN_ORDER_RECOVERY_SANITY_PASS_20260829.md`

Commit:

`68576bcaa1db34c1c73d038e44824978ed820e06`

Locked result:

```text
Status tested: WooCommerce Pending payment (`pending` / 待付款)
Fresh never-Refunded order: yes
Original payable total: non-zero
Step04 recovery CTA: present
Recovery target: canonical WooCommerce order-pay
Same order number: preserved
Same non-zero payable amount: preserved
Payment completed: no
Refund mutation: no
```

`On-hold` (`on-hold` / 保留) remains a separate accepted Step04 state and is not expected to expose the recovery CTA.

## BACS On-hold gateway output decision retained

Authoritative record:

`project2-progress/STEP_4F_STEP04_BACS_BANK_DETAILS_PRESENTATION_DECISION_20260828.md`

Commit:

`f4d25fd1cd1772589ee5fd6c6f2044ce7ae54886`

Decision remains:

```text
- Do not modify Step04 theme/template/CSS merely to restyle/remove `Our Bank Details`.
- On-hold payment instructions are gateway-owned and semantically appropriate.
- Direct Bank Transfer/BACS is temporary test-only and will be disabled before production launch.
```

## Mandatory next action

Do not modify source.

Run one working-control sticky diagnostic on Step01 or Step02 desktop at 1920×991 / 100% zoom. Compare against Step04. Only after that comparison may the Step04 root cause and correction be locked.

Step03 sticky investigation remains deferred until Step04 is closed.

After Step04 sticky runtime passes and Step04 closes again, return to the already-open Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch. Checkout cannot be marked `Completed 1:1` until both are closed.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, `spatial-flow.css`, or plugin-owned large assets under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.
