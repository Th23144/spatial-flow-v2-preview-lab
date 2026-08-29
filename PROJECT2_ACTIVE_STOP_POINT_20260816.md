# Project 2 · Active Stop Point · 2026-08-29

This file is the current execution override for the active Step-04 / Checkout closure gate.

## Current authoritative stop point

```text
Step 04 production audit: COMPLETE
Step04 computed-style strict parity: PASS
Step04 final screenshot residual review: PASS for the captured static/residual contract
Step04 clean Pending-payment recovery sanity: PASS
Step04 desktop result-side sticky runtime behavior: FAIL — prior non-activation proven; awaiting 2.7.21 retest
Step04 sticky diagnostic: COMPLETE
Step02 working-control sticky diagnostic: PASS
Step02 vs Step04 differential diagnosis: COMPLETE
Step04 zero-stick root cause candidate: body-level sticky ancestor unlock missing in order-received scope
Step04 2.7.21 returned-source validation: PASS
functions.php 2.7.21: PASS
spatial-flow.css body-only unlock: PASS / exact expected fingerprint
Step04 overall closure: REOPENED narrowly for real-scroll sticky behavior
Step03 sidebar sticky investigation: DEFERRED BY USER until Step04 is finished
Checkout next action: reload Step04 desktop with 2.7.21 assets and rerun exact SF_STEP04_RESULT_SIDE_STICKY_RUNTIME_20260829 diagnostic; do not change more source before runtime result
Checkout binary status: Not done
```

## 2.7.21 returned CSS validation PASS

Authoritative record:

`project2-progress/STEP_4F_STEP04_RESULT_SIDE_STICKY_2721_RETURNED_CSS_VALIDATION_PASS_20260829.md`

Commit:

`42f006f3e69a97f4072635a2df02c860a8d6993d`

Returned CSS:

```text
bytes: 589104
logical lines: 20675
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
body:has(.sf-order-result-v3 .result-side) count: 1
```

This exactly matches the precomputed 2.7.21 expected CSS fingerprint.

Previously returned `functions.php` remains accepted:

```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
SPATIAL_FLOW_CHILD_VERSION: 2.7.21
PHP syntax: PASS
```

Do not edit either source again before runtime retest.

## Mandatory next action

Reload the Step04 Pending-payment/order-result desktop page so 2.7.21 assets are active, then rerun the exact existing diagnostic:

`SF_STEP04_RESULT_SIDE_STICKY_RUNTIME_20260829`

Acceptance requires:

```text
body overflow -> clip visible
.result-side -> position: sticky; top: 132px retained
valid middle scroll range -> sideTop ≈ 132px / lockedToTop: true
near result-shell end -> normal native sticky release
```

If the body unlock is active but sticky still does not activate, stop and diagnose the next differential. Do not stack speculative changes.

Step03 sticky investigation remains deferred until Step04 closes.
