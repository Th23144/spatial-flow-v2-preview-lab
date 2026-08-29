# Project 2 · Active Stop Point · 2026-08-29

This file is the current execution override for the active Step-04 / Checkout closure gate.

## Current authoritative stop point

```text
Step 04 production audit: COMPLETE
Step04 computed-style strict parity: PASS
Step04 final screenshot residual review: PASS for the captured static/residual contract
Step04 clean Pending-payment recovery sanity: PASS
Step04 desktop result-side sticky runtime behavior: FAIL — owner isolated
Step04 sticky diagnostic: COMPLETE
Step04 overall closure: REOPENED narrowly for real-scroll sticky behavior
Step04 BACS On-hold bank-details output: NO THEME CHANGE — gateway-owned, test-only, allowed dynamic output
Checkout next action: apply one bounded CSS ancestor-overflow unlock for Step04 desktop sticky, validate source, then rerun sticky runtime diagnostic
Checkout binary status: Not done
```

## Sticky runtime diagnosis

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

Ancestor audit isolated the first non-visible overflow owners:

```text
body -> overflow: hidden auto
html -> overflow: hidden auto
```

All ordinary Step04/Astra ancestors between `.result-side` and body are `overflow:visible`, `transform:none`, `contain:none`.

Current root stylesheet has `html,body { overflow-x:hidden; }`, which computes the other axis to `auto` and creates the sticky ancestor failure mode.

This same project-wide failure mode is already solved elsewhere by `Spatial Flow Step 5O-B SAFE 2 · Sticky Ancestor Unlock`, which uses page-scoped:

```css
overflow-x: clip !important;
overflow-y: visible !important;
```

for html/body and visible overflow / contain:none for wrappers.

The tested sidebar being slightly taller than the usable viewport is a separate dynamic-content usability concern. It does not explain complete zero-stick behavior and must not trigger speculative max-height/internal-scroll changes before the ancestor unlock is tested.

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

## Mandatory next action — bounded desktop sticky correction

Apply one CSS-only, desktop-only, page-scoped correction using the already-established Sticky Ancestor Unlock pattern:

```text
- include Step04 `.sf-order-result-v3` in html/body overflow unlock
- keep intermediate Step04/Astra wrappers visible / contain:none only as needed
- preserve canonical `.result-side { position:sticky; top:132px; }`
- do not change mobile/static behavior
- do not add max-height/internal scrolling yet
```

After returned-source validation, rerun `SF_STEP04_RESULT_SIDE_STICKY_RUNTIME_20260829` and require `.result-side` to lock at approximately 132px through the valid middle scroll range.

Only after actual sticky activation is proven may dynamic-height usability be assessed separately.

After sticky runtime passes, return to the already-open Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch. Checkout cannot be marked `Completed 1:1` until both are closed.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, `spatial-flow.css`, or plugin-owned large assets under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.
