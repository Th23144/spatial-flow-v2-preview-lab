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
Step04 2.7.21 returned-source validation: PARTIAL FAIL
functions.php 2.7.21: PASS
spatial-flow.css body-only unlock: NOT APPLIED / still identical to 2.7.20 baseline
Step04 overall closure: REOPENED narrowly for real-scroll sticky behavior
Step03 sidebar sticky investigation: DEFERRED BY USER until Step04 is finished
Step04 BACS On-hold bank-details output: NO THEME CHANGE — gateway-owned, test-only, allowed dynamic output
Checkout next action: user repeats only the bounded CSS selector insertion, returns CSS for exact validation, then rerun the exact Step04 sticky runtime diagnostic
Checkout binary status: Not done
```

## Returned-source validation result

Authoritative record:

`project2-progress/STEP_4F_STEP04_RESULT_SIDE_STICKY_2721_RETURNED_SOURCE_VALIDATION_PARTIAL_FAIL_20260829.md`

Commit:

`be02ec2f9a004a369205097e8e4ca0f0cdb3fc18`

Returned `functions.php`:

```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
SPATIAL_FLOW_CHILD_VERSION: 2.7.21
PHP syntax: PASS
```

This file is correct and must not be edited again in this correction.

Returned `spatial-flow.css`:

```text
bytes: 589058
logical lines: 20674
SHA256: 27ccdfb39e70f8a0a037e7d85756eb7179e535273ac26bb30bf96cfb4f9a9cf6
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
```

This is byte-for-byte identical to the prior accepted 2.7.20 CSS baseline. Required selector count:

```text
body:has(.sf-order-result-v3 .result-side) -> 0
```

Therefore the user's observation that CSS size did not change is correct; the CSS change was not saved/applied.

Expected corrected CSS remains:

```text
bytes: 589104
logical lines: 20675
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
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

All Step04 samples remain unlocked.

## Mandatory next action

Do not edit `functions.php` again. It is already correct at 2.7.21.

Repeat only the CSS anchored replacement in the existing `Spatial Flow Step 5O-B SAFE 2 · Sticky Ancestor Unlock` block, adding only:

```css
body:has(.sf-order-result-v3 .result-side)
```

Do not add the Step04 selector to the html selector list. Do not alter `.result-side`, align-self, max-height, mobile behavior, Step03, or Crypto.

Return only the corrected `spatial-flow.css` for exact validation.

After CSS validation, rerun `SF_STEP04_RESULT_SIDE_STICKY_RUNTIME_20260829` and require:

```text
body overflow -> clip visible
.result-side -> position:sticky; top:132px retained
valid middle scroll range -> sideTop ≈132px / lockedToTop:true
release near result-shell bottom -> normal native sticky boundary behavior
```

If body unlock alone does not activate sticky, stop and diagnose the next differential. Do not stack speculative changes.

Step03 sticky investigation remains deferred until Step04 is closed.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, `spatial-flow.css`, or plugin-owned large assets under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.
