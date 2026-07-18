# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-18  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Step 4E-B0 manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion-first attempt：Rejected / rolled back.
R5-B canonical implementation：Passed as cleaned baseline, not final 1:1.
R5-C1 through R5-C4 cleanup：Passed / closed.
R5-D1 source/ownership：Passed.
R5-D2 editability/dynamic ownership：Passed / closed.
R5-D3 strict visual acceptance：Failed / reopened.
R5-D4 native regression：Failed / reopened.
R5-D5 binary decision：Blocked.
R5-E1 exact source/state audit：Complete.
R5-E2 synchronized live counts：Passed / closed.
R5-E3 empty-Cart parity：Passed / closed.
R5-E4-A1 first geometry measurement：Complete.
R5-E4-A2 ancestor/container trace：Complete.
R5-E4-B strict geometry artifact：Passed / deployed.
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 wrapper/source ownership：Passed.
R5-E4-B-FIX1 exact CSS artifact：Passed.
Current executable phase：Deploy spatial-flow(24).css and confirm strict runtime geometry.
Cart page status：Not done.
```

## Accepted code baselines

```text
functions.php
Version: 2.7.8
Size: 552,215 bytes
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070

assets/js/spatial-flow.js
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Current deployed artifact before FIX1: spatial-flow(23).css
Validated deployment artifact: spatial-flow(24).css
Size: 696,069 bytes
Logical lines: 23,335
SHA256: 412d6b20993a101e73b0fae9b7a26abc4941b5e8f6eb032c1c38689dfc823436
Braces: 3,626 / 3,626
Comments: 340 / 340
CSS parser errors: 0
```

## Accepted geometry retained

```text
parent width: 1300px
current wrapper before FIX1: 1200px
form / gap / summary: 653 / 80 / 467
title → count: 88px
count → main row: 120px
```

Passed:

```text
- 7fr / 5fr rendered relationship
- 80px desktop column gap
- 88px title-to-count rhythm
- 120px count-to-main-row rhythm
- inherited parent/wrapper padding removal
```

## Exact FIX1 artifact proof

Only this four-line rule was added inside the existing desktop geometry block:

```css
body.woocommerce-cart .entry-content > .woocommerce {
  max-width: var(--sf-cart-max) !important;
}
```

Removing it restores the accepted `spatial-flow(23).css` SHA256 exactly. No unrelated CSS changed.

## Current operation

Deploy `spatial-flow(24).css` as `assets/css/spatial-flow.css`, clear cache, and remeasure the same non-empty desktop Cart at 100% zoom.

Expected:

```text
wrapper border/content width: 1204 / 1204
left/right gutters: 48 / 48
form: approximately 656
summary: approximately 468
column gap: 80
title → count: 88
count → main row: 120
computed max-width: 1440px
```

Also smoke-check phone non-empty Cart and both accepted empty-Cart states for regression.

## Remaining sequence

```text
R5-E4-B-FIX1 strict runtime measurement
→ R5-E4-C3 desktop + phone visual acceptance
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict acceptance
→ binary Cart status decision
```