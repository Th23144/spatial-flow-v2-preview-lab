# Project 2 · Step04 Result Side Sticky · 2.7.21 Body-Only Correction Batch · 2026-08-29

## Trigger

User explicitly approved starting Step04 sticky correction after the Step02 working-control differential audit.

## Root-cause lock

Working Step02 proves native sticky activates even while `html` remains `overflow:hidden auto`. The decisive current-runtime difference is the body scope:

```text
Step02 working body: overflow-x: clip; overflow-y: visible
Step04 failing body: overflow-x: hidden; overflow-y: auto
```

Step02 owner also exceeds its nominal usable viewport region slightly and still sticks, so sidebar height is not the zero-stick blocker. Do not change max-height/internal scrolling in this batch.

Do not change Step04 `align-self` in this first correction; the failing `.result-side` is not stretched to shell height, and no evidence requires that extra variable yet.

## Current accepted source baseline

### `assets/css/spatial-flow.css`

```text
bytes: 589058
logical lines: 20674
SHA256: 27ccdfb39e70f8a0a037e7d85756eb7179e535273ac26bb30bf96cfb4f9a9cf6
brace balance: 3282/3282
comment balance: 275/275
tinycss2 errors: 0
```

Current Step5O-B SAFE2 selector list contains no Step04 order-result selector. The exact existing selector block is uniquely owned and the new Step04 selector is absent.

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: e45991fa5795c2a9403bf3ef12b3634db709616c3b0189ccd63ffb21585bb1a3
SPATIAL_FLOW_CHILD_VERSION: 2.7.20
PHP syntax: PASS
```

## Bounded correction

### CSS

Edit only the existing `Spatial Flow Step 5O-B SAFE 2 · Sticky Ancestor Unlock` selector list.

Do **not** add an `html:has(.sf-order-result-v3 .result-side)` selector in this corrected batch. The working Step02 control proved the current Chromium runtime does not require html-level unlock for this behavior.

Add only:

```css
body:has(.sf-order-result-v3 .result-side)
```

to the existing SAFE2 body selector list so Step04 receives the same body-level overflow contract as working Step02:

```css
overflow-x: clip !important;
overflow-y: visible !important;
```

Predicted corrected CSS result from the accepted 2.7.20 baseline:

```text
bytes: 589104
logical lines: 20675
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
byte delta: +46
line delta: +1
brace balance: 3282/3282
comment balance: 275/275
tinycss2 errors: 0
```

### functions.php

Change only the child-theme cache version:

```text
2.7.20 -> 2.7.21
```

Predicted result:

```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
PHP syntax expected: PASS
```

## Explicit non-scope

Do not modify:

```text
- `.result-side { position: sticky; top:132px; }`
- Step04 markup/template
- mobile `<=1120px` static behavior
- align-self
- max-height / internal scrolling
- Woo order status / recovery / BACS output
- Step03
- Crypto plugin
```

## Post-edit gate

User returns both edited files together. Validate exact bytes / lines / SHA256 / CSS parser / PHP syntax before runtime testing.

Then hard refresh Step04 desktop and rerun the exact existing Step04 sticky runtime diagnostic. Acceptance requires:

```text
- body computed overflow becomes `clip visible`
- `.result-side` remains `position:sticky; top:132px`
- at least one valid middle scroll range where sideTop ≈ 132px and lockedToTop:true
- normal release near the `.result-shell` bottom boundary
```

If body unlock succeeds but sticky still does not activate, stop and diagnose the next differential. Do not stack speculative changes.
