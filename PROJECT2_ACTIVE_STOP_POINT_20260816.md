# Project 2 · Active Stop Point · 2026-08-29

This file is the current execution override for the active Step-04 / Checkout closure gate.

## Current authoritative stop point

```text
Step 04 production audit: COMPLETE
Step04 computed-style strict parity: PASS
Step04 final screenshot residual review: PASS for the captured static/residual contract
Step04 clean Pending-payment recovery sanity: PASS
Step04 desktop result-side sticky runtime activation: PASS on 2.7.21
Step04 2.7.21 body-only Sticky Ancestor Unlock: EFFECTIVE
Step04 sticky root cause: CONFIRMED — missing body-level sticky ancestor unlock in order-received scope
Step04 sticky bottom-boundary release: not directly sampled yet
Step04 overall closure: REOPENED only for optional/formal bottom-boundary release proof
Step03 sidebar sticky investigation: DEFERRED BY USER until Step04 is finished
Checkout next action: if strict runtime closure is desired, perform one bottom-boundary sanity check only; no source changes. After Step04 closes, proceed to deferred Step03 sticky issue / existing Crypto typography follow-up according to user direction.
Checkout binary status: Not done
```

## 2.7.21 sticky runtime activation PASS

Authoritative record:

`project2-progress/STEP_4F_STEP04_STICKY_2721_RUNTIME_RETEST_ACTIVATION_PASS_20260829.md`

Commit:

`c5506796f987c41f2dd464699132646ce39a8f05`

Production Step04 desktop runtime:

```text
viewport: 1920 × 991
body overflow: clip visible
html overflow: hidden auto
.result-side position: sticky
top: 132px
side height: 891.75px
usable viewport below top: 859px
```

Observed activation:

```text
scrollY 0    -> sideTop 672.281 -> locked false
scrollY 360  -> sideTop 312.281 -> locked false
scrollY 502  -> sideTop 170.281 -> locked false
scrollY 827  -> sideTop 132     -> locked true
scrollY 1164 -> sideTop 132     -> locked true
scrollY 1464 -> sideTop 132     -> locked true
```

This proves the 2.7.21 body-only correction restored native sticky activation and confirms the body overflow environment was the zero-stick blocker.

The current retest does not directly cross the containing-shell release threshold: the last sample still has shell bottom at 1117.609px while side bottom is 1023.75px. Therefore no further CSS change is warranted; only a single bottom-boundary sanity check may be used if formal closure requires explicit release proof.

## Current accepted live source fingerprints

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
SPATIAL_FLOW_CHILD_VERSION: 2.7.21
PHP syntax: PASS
```

### `assets/css/spatial-flow.css`

```text
bytes: 589104
logical lines: 20675
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
body:has(.sf-order-result-v3 .result-side) count: 1
```

## Retained Step04 accepted evidence

```text
- strict computed-style parity: PASS
- final screenshot residual review: PASS
- clean Pending-payment recovery to same order-pay/order/amount: PASS
- white-band blocker: CLOSED
- cancelled gateway instructions blocker: CLOSED
- status semantics matrix: PASS
- real Woo data rendering: PASS
- no duplicate order-details table: PASS
- gateway hook preservation: PASS
```

## Step03 boundary

Do not diagnose or modify Step03 sticky behavior until Step04 is formally closed. User explicitly deferred Step03 until then.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, `spatial-flow.css`, or plugin-owned large assets under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.
