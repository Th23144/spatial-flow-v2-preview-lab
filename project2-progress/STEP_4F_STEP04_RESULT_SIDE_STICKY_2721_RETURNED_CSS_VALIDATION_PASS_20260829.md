# Project 2 · Step04 Result-Side Sticky · 2.7.21 Returned CSS Validation PASS · 2026-08-29

## Trigger

User re-saved and returned only `assets/css/spatial-flow.css` after the prior returned-source validation proved the Step04 body-only selector had not actually been applied.

## Returned CSS validation

Returned file:

```text
assets/css/spatial-flow.css
bytes: 589104
logical lines: 20675
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 top-level parse errors: 0
```

Required Step04 selector:

```css
body:has(.sf-order-result-v3 .result-side)
```

Count:

```text
1
```

The selector is present in the existing `Spatial Flow Step 5O-B SAFE 2 · Sticky Ancestor Unlock` desktop media block and is body-only. No Step04 html selector was added in this correction.

## Expected fingerprint comparison

The returned CSS exactly matches the precomputed 2.7.21 expected fingerprint:

```text
expected bytes: 589104 -> actual 589104
expected lines: 20675 -> actual 20675
expected SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
actual SHA256:   45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
```

## Paired functions.php state

The immediately prior returned `functions.php` already passed at:

```text
SPATIAL_FLOW_CHILD_VERSION: 2.7.21
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
PHP syntax: PASS
```

Do not edit it again for this batch.

## Result

```text
2.7.21 returned source validation: PASS
CSS body-only sticky ancestor unlock: APPLIED EXACTLY
functions.php 2.7.21 cache bump: PASS
Runtime behavior: NOT YET ACCEPTED
```

## Mandatory next action

Reload the Step04 Pending-payment/order-result desktop page with the 2.7.21 assets and rerun the exact existing diagnostic:

`SF_STEP04_RESULT_SIDE_STICKY_RUNTIME_20260829`

Acceptance conditions:

```text
body computed overflow -> clip visible
.result-side -> position: sticky; top: 132px retained
valid middle scroll range -> sideTop ≈ 132px / lockedToTop: true
near result-shell end -> normal native sticky release
```

Do not modify any additional source before this runtime result is known.

Step03 remains explicitly deferred until Step04 is closed.
