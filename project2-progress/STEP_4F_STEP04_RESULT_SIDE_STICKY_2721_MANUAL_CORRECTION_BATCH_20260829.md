# Project 2 · Step04 Result Side Sticky · 2.7.21 Manual Correction Batch · 2026-08-29

## Basis

Runtime diagnostic proved `.sf-order-result-v3 .result-side` has the correct declared `position:sticky; top:132px`, but never activates during scroll. All ordinary ancestors are overflow-visible; `body` and `html` compute to `overflow:hidden auto` because the root stylesheet owns `overflow-x:hidden`.

This exactly matches the already-established Project 2 `Step 5O-B SAFE 2 · Sticky Ancestor Unlock` failure mode.

## Scope

CSS-only desktop ancestor unlock, plus child-theme cache version bump.

Do not alter Step04 markup, business logic, Woo status logic, gateway output, recovery behavior, Crypto plugin, mobile layout, or canonical `top:132px` sticky geometry.

## File A — `assets/css/spatial-flow.css`

Current accepted baseline:

```text
bytes: 589058
logical lines: 20674
SHA256: 27ccdfb39e70f8a0a037e7d85756eb7179e535273ac26bb30bf96cfb4f9a9cf6
brace balance: 3282/3282
comment balance: 275/275
tinycss2 errors: 0
```

Bounded edit inside existing `Spatial Flow Step 5O-B SAFE 2 · Sticky Ancestor Unlock` block only:

1. Add `html:has(.sf-order-result-v3 .result-side),` after the existing article-sidebar html selector.
2. Add `body:has(.sf-order-result-v3 .result-side)` to the corresponding body selector list before the opening brace.
3. Reuse the existing SAFE2 declarations:

```css
overflow-x: clip !important;
overflow-y: visible !important;
```

No new patch block is appended.

Predicted result:

```text
bytes: 589150
logical lines: 20676
SHA256: 7719cf801d404c3e3bcd43df8520ebb804d0839872b113ffe9c3c7b83b5d8524
byte delta: +92
line delta: +2
brace balance: 3282/3282
comment balance: 275/275
tinycss2 errors: 0
```

## File B — `functions.php`

Current accepted baseline:

```text
bytes: 612013
logical lines: 11689
SHA256: e45991fa5795c2a9403bf3ef12b3634db709616c3b0189ccd63ffb21585bb1a3
version: 2.7.20
```

Change only:

```text
2.7.20 -> 2.7.21
```

Predicted result:

```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
PHP syntax: PASS
```

## Post-edit gate

User returns both files together. Validate exact bytes/lines/SHA/parser/PHP syntax before runtime testing.

Then hard refresh Step04 desktop and rerun the same sticky diagnostic. Acceptance requires a valid middle scroll range where `.result-side` viewport top stays approximately 132px (`lockedToTop:true`).

Do not add max-height or internal sidebar scrolling in this batch. Evaluate dynamic-height usability only after native sticky activation is proven.
