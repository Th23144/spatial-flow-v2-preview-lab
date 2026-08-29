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
Step02 working-control sticky diagnostic: PASS
Step02 vs Step04 differential diagnosis: COMPLETE
Step04 zero-stick root cause: body-level sticky ancestor unlock missing in order-received scope
Step04 2.7.21 body-only correction batch: ISSUED / AWAITING USER APPLY
Step04 overall closure: REOPENED narrowly for real-scroll sticky behavior
Step03 sidebar sticky investigation: DEFERRED BY USER until Step04 is finished
Step04 BACS On-hold bank-details output: NO THEME CHANGE — gateway-owned, test-only, allowed dynamic output
Checkout next action: user applies bounded body-only Sticky Ancestor Unlock + 2.7.21 cache bump, returns both files for exact source validation, then rerun the exact Step04 sticky runtime diagnostic
Checkout binary status: Not done
```

## Active correction batch

Authoritative record:

`project2-progress/STEP_4F_STEP04_RESULT_SIDE_STICKY_2721_BODY_ONLY_CORRECTION_BATCH_20260829.md`

Commit:

`aa94a7a7f55526f684ffeaa5dfbd36eb49b53b5e`

The corrected first-pass change is intentionally body-only. Do not add an html-level Step04 selector in this batch because the Step02 working control proves `html` may remain `overflow:hidden auto` while native sticky works. Do not alter align-self, max-height, internal scroll, Step03, or Crypto.

Predicted returned-source fingerprints:

```text
spatial-flow.css
bytes: 589104
logical lines: 20675
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
brace balance: 3282/3282
comment balance: 275/275
tinycss2 errors: 0

functions.php
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
SPATIAL_FLOW_CHILD_VERSION: 2.7.21
PHP syntax expected: PASS
```

## Differential result — Step02 working control versus Step04 failure

Authoritative result:

`project2-progress/STEP_4F_STEP02_VS_STEP04_STICKY_DIFFERENTIAL_RESULT_20260829.md`

Commit:

`c1fbe610c36a34b507a66584c219a9b842767041`

Working Step02 runtime:

```text
sticky owner: aside.sf-safe5-summary
position: sticky
top: 136px
align-self: start
owner height: 866.75px
usable viewport below top: 855px
body overflow: clip visible
html overflow: hidden auto
```

Actual sticky activation:

```text
scrollY 511 -> ownerTop 136 -> locked true
scrollY 791 -> ownerTop 136 -> locked true
```

The owner later releases at the containing shell boundary, which is correct native sticky behavior.

Failing Step04 runtime:

```text
sticky owner: .result-side
position: sticky
top: 132px
align-self: auto
side height: 891.75px
usable viewport below top: 859px
body overflow: hidden auto
html overflow: hidden auto
```

All Step04 samples remain unlocked and the side moves one-for-one with normal document flow.

Decisive tested differential:

```text
working Step02 body: overflow-x: clip; overflow-y: visible
failing Step04 body: overflow-x: hidden; overflow-y: auto
```

Important narrowing:

```text
html remains hidden/auto even on the working Step02 page, so html is not the decisive current-runtime differentiator.
The working control proves that body-level Sticky Ancestor Unlock is sufficient for native sticky to activate in the current Chromium runtime.
```

Sidebar height is also not the zero-stick blocker: Step02's owner is slightly taller than its nominal usable viewport region yet still sticks correctly.

`align-self:start` versus `auto` is not the current leading cause because Step04 `.result-side` is not stretched to shell height. Do not alter it speculatively in the first correction.

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

User applies the issued body-only correction and returns `spatial-flow.css` + `functions.php` together. Validate exact source before runtime testing.

After source validation, rerun `SF_STEP04_RESULT_SIDE_STICKY_RUNTIME_20260829` and require:

```text
body overflow -> clip visible
.result-side -> position:sticky; top:132px retained
valid middle scroll range -> sideTop ≈132px / lockedToTop:true
release near result-shell bottom -> normal native sticky boundary behavior
```

If body unlock alone does not activate sticky, stop and diagnose the next differential. Do not stack speculative changes.

Step03 sticky investigation remains deferred until Step04 is closed.

After Step04 sticky runtime passes and Step04 closes again, return to the already-open Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch. Checkout cannot be marked `Completed 1:1` until both are closed.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, `spatial-flow.css`, or plugin-owned large assets under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.
