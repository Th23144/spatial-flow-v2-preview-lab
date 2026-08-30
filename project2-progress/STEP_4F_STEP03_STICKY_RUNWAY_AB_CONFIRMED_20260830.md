# Project 2 · Step03 Sticky Runway A/B Confirmed · 2026-08-30

## Trigger

The user ran the non-destructive Step03 sticky runway A/B diagnostic on the live desktop Payment page.

## Baseline production geometry

```text
owner: aside.sf-safe5-summary
position: sticky
top: 136px
align-self: start
body overflow-x: clip
body overflow-y: visible
owner height: 1012.047px
shell height: 1166.047px
shell minus owner: 154px
viewport: 991px
usable viewport below sticky top: 855px
```

Baseline scroll samples never entered the sticky lock phase. Representative points:

```text
scrollY 412 -> ownerTop 216.375 -> locked false
scrollY 512 -> ownerTop 116.375 -> locked false
scrollY 642 -> ownerTop -13.625 -> locked false
scrollY 1070 -> ownerTop -441.625 -> locked false
```

`baselineLockCount = 0`.

## Expanded-runway diagnostic

The diagnostic changed only the containing `.sf-safe5-shell` min-height in DevTools, temporarily increasing shell height to 2413px while keeping unchanged:

- the sticky owner
- `position: sticky`
- `top: 136px`
- body overflow
- order-review ownership
- actual checkout content

Expanded geometry:

```text
owner height: 1012.047px
shell height: 2413px
shell minus owner: 1400.953px
```

Sticky then activated normally:

```text
scrollY 512  -> ownerTop 136 -> locked true
scrollY 642  -> ownerTop 136 -> locked true
scrollY 1070 -> ownerTop 136 -> locked true
scrollY 1470 -> ownerTop 136 -> locked true
```

Near the containing-block end it released normally and remained inside shell.

```text
baselineLockCount = 0
expandedLockCount = 4
baselineEverLocked = false
expandedEverLocked = true
interpretation = RUNWAY_HYPOTHESIS_CONFIRMED
restored = true
```

## Conclusion

Step03 root cause is now locked:

- sticky owner is correct;
- sticky CSS is correct;
- body overflow unlock is already correct;
- ancestor overflow/transform/contain chain is not blocking;
- failure occurs because the live Step03 `.sf-safe5-shell` is only slightly taller than the full right-side sticky group, leaving insufficient containing-block vertical runway for the entire `.sf-safe5-summary` to enter and sustain its `top:136px` sticky phase.

This is materially different from Step04's previous root cause.

## Important implementation boundary

Do **not** solve production by assigning an arbitrary large `min-height` to `.sf-safe5-shell`. The A/B min-height was diagnostic-only. A permanent artificial runway would create unexplained blank vertical space and violate strict 1:1/product truth.

The source fix must preserve the Step03 reference architecture and determine the smallest production-safe way to provide real sticky runway or equivalent ownership behavior without fake empty space, business-logic changes, duplicated payment UI, or mobile regression.

## Next action

Perform a focused source/architecture audit of the live Step03 layout owner(s) before issuing any replacement code. Determine why the left Payment column is too short relative to the full right group and whether the correct fix is a bounded Step03-only layout/ownership adjustment rather than synthetic shell height.

No further runtime diagnosis is required before that source audit.
