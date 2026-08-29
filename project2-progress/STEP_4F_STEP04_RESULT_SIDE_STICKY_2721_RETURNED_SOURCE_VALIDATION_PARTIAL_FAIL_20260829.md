# Project 2 · Step04 Result Side Sticky · 2.7.21 Returned Source Validation · PARTIAL FAIL · 2026-08-29

## Trigger

User returned modified `functions.php` and `spatial-flow.css` and noted that the CSS file size appeared unchanged.

## Returned file validation

### `functions.php`

Returned runtime file:

```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
SPATIAL_FLOW_CHILD_VERSION: 2.7.21
PHP syntax: PASS
```

This exactly matches the predicted 2.7.21 version-bump target.

Status: PASS.

### `assets/css/spatial-flow.css`

Returned runtime file:

```text
bytes: 589058
logical lines: 20674
SHA256: 27ccdfb39e70f8a0a037e7d85756eb7179e535273ac26bb30bf96cfb4f9a9cf6
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
```

This is byte-for-byte identical to the previously accepted 2.7.20 CSS baseline.

Required new selector count:

```text
body:has(.sf-order-result-v3 .result-side) -> 0
html:has(.sf-order-result-v3 .result-side) -> 0
```

The existing `Spatial Flow Step 5O-B SAFE 2 · Sticky Ancestor Unlock` block remains unchanged.

Status: FAIL — the intended body-only Step04 selector was not saved into the CSS file.

## Important interpretation

The user's observation that CSS size did not change is correct. This is not a file-size-reporting anomaly. The returned CSS is exactly the old baseline, so the Step04 sticky correction has not yet been applied to CSS.

No runtime sticky test should be run yet because only the cache/version bump landed while the actual CSS correction did not.

## Required correction

Repeat only the CSS anchored replacement from the 2.7.21 body-only correction batch. Do not change `functions.php` again; it is already correct at 2.7.21.

Expected corrected CSS target remains:

```text
bytes: 589104
logical lines: 20675
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
byte delta from baseline: +46
line delta: +1
```

Then return only the corrected CSS for validation.

## Status

```text
functions.php 2.7.21: PASS
spatial-flow.css Step04 body unlock: NOT APPLIED
Step04 sticky runtime test: BLOCKED until corrected CSS validates
Checkout: Not done
```
