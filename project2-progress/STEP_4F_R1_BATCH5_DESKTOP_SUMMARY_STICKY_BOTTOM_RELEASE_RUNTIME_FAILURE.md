# Step 4F · R1 Batch-5 Desktop Summary Sticky Bottom-Release Runtime Failure

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

After installing the accepted desktop sticky ancestor fix, the user supplied two 1920×991 desktop screenshots:

- normal mid-page state: Summary presentation is visually coherent
- page-bottom state: the sticky Summary reaches the shell/footer boundary but its lower content visibly collapses/overlaps around Shipping / Total / Trust instead of releasing cleanly

The user correctly classified this as a bug.

## What is already proven

The previous runtime diagnostic measured:

```text
viewport height: 991px
.sf-safe5-summary height: 1006.97px
configured sticky top: 112px
```

Therefore the sticky target itself is taller than the full viewport, and substantially taller than the usable sticky viewport below the 112px top inset:

```text
usable sticky space = 991 - 112 = 879px
summary height ≈ 1007px
excess ≈ 128px
```

This makes a simple `position: sticky; top:112px` target geometrically incapable of remaining fully visible while also satisfying the bottom containing-block constraint.

The body overflow correction successfully removed the original non-scrolling sticky ancestor, but it exposed this second independent constraint at the shell bottom.

## Current classification

```text
Desktop sticky engagement: repaired
Desktop sticky bottom release: failed
Batch-5 Summary/Coupon/Trust visual/content/function: otherwise passed
Batch 5: remains open
Checkout: Not done
```

## Do not patch by inference

Do not immediately change `top`, add `bottom`, add internal scrolling, or shrink the Summary.

The screenshot strongly indicates a geometry conflict, but the visible overlap must be measured to distinguish:

```text
A. sticky box clamping only
B. descendant overlap caused by an older high-specificity rule
C. table/tfoot or Trust becoming independently positioned during bottom clamp
D. a combination of oversized sticky target + legacy descendant positioning
```

## Required next diagnostic

At 1366px / 100% zoom / Step 01, scroll to the same bottom position where the bug is visible and collect:

```text
- .sf-safe5-summary rect + computed position/top/bottom/height
- .sf-safe5-summary-card rect
- #order_review rect
- table.shop_table rect
- tfoot rect
- Subtotal row rect
- Shipping row rect
- Total row rect
- .sf-safe5-trust rect
- each .sf-safe5-trust-card rect
- computed position/top/bottom/transform/margin for those nodes
- shell rect
- viewport height and current scrollY
- pairwise overlap tests among tfoot rows and Trust
```

Only after that measurement should the final bounded correction be defined.

## Status

```text
Root cause layer 1 (body overflow scroll ancestor): fixed
Root cause layer 2 (bottom release / oversized sticky target): open
Next action: one read-only bottom-state geometry diagnostic
No new source change authorized yet
```
