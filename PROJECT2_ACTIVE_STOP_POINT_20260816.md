# Project 2 · Active Stop Point · 2026-08-29

This file is the current execution override for the active Step-04 / Checkout closure gate.

## Current authoritative stop point

```text
Step 04 production audit: COMPLETE
Step04 computed-style strict parity: PASS
Step04 final screenshot residual review: PASS for the captured static/residual contract
Step04 clean Pending-payment recovery sanity: PASS
Step04 desktop result-side sticky runtime behavior: REOPENED / FAIL-PENDING-DIAGNOSIS
Step04 overall closure: REOPENED narrowly for real-scroll sticky behavior
Step04 BACS On-hold bank-details output: NO THEME CHANGE — gateway-owned, test-only, allowed dynamic output
Checkout next action: diagnose/fix Step04 desktop result-side sticky behavior before returning to Crypto V0.3.0 typography follow-up
Checkout binary status: Not done
```

## Why Step04 was narrowly reopened

The user reported that the desktop right Receipt Summary sidebar does not actually remain pinned/sticky at the top while scrolling.

Prior JSON/computed audits proved the declared style contract, not live scroll behavior. Retained evidence shows:

```text
.result-side {
  position: sticky;
  top: 132px;
}
```

but real live content can make the sidebar taller than the usable viewport sticky region. Example retained On-hold desktop capture:

```text
viewport height: 991px
.result-side height: about 1105px
sticky top inset: 132px
```

Therefore `position: sticky` in computed style is not sufficient acceptance evidence.

Authoritative reopen record:

`project2-progress/STEP_4F_STEP04_RESULT_SIDE_STICKY_RUNTIME_REOPEN_20260829.md`

Commit:

`cfc4a83c706045f4bf9719aad9d23a2d84e4f627`

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

The final screenshot review is no longer sufficient to close the whole Step04 because it did not exercise real scroll positions of the desktop sidebar.

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

## Mandatory next action — desktop sticky runtime diagnostic

Do not modify source yet.

Run one bounded desktop diagnostic on a real Step04 page and capture:

```text
- viewport height/width and scrollY
- `.result-side` height and computed position/top/bottom
- `.result-summary` height
- `.result-shell` bounds
- ancestor overflow / transform / contain
- `.result-side` viewport top at multiple scroll positions
- whether it ever locks to the intended top inset
```

The current leading hypothesis is that the live sidebar is too tall for the available sticky viewport, particularly when gateway-owned content is present. Confirm before choosing a fix.

After the sticky behavior is fixed and runtime-accepted, return to the already-open Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch. Checkout cannot be marked `Completed 1:1` until both are closed.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, `spatial-flow.css`, or plugin-owned large assets under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.
