# Step 4F · Checkout Geometry Diagnostic — Partial Result

Date: 2026-08-11
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Evidence received

The user supplied matching console geometry captures for:

1. Real local SAFE5 Checkout Step 02
2. Canonical repository reference Checkout Step 02

Page screenshots were also supplied, but this partial diagnosis intentionally relies only on console captures 1–2 as requested.

## Measured real local geometry

Viewport:

```text
innerWidth: 1365
innerHeight: 991
dpr: 1
```

SAFE5:

```text
.sf-safe5-intro
left 46.5
right 1303.5
width 1257
padding L/R 56 / 56
gap 80

.sf-safe5-shell
left 46.5
right 1303.5
width 1257
padding L/R 56 / 56
grid 621.25px / 443.75px
gap 80px

.sf-safe5-main
left 102.5
right 723.75
width 621.25

.sf-safe5-summary
left 803.75
right 1247.5
width 443.75
```

## Measured canonical reference geometry

Viewport:

```text
innerWidth: 1386
innerHeight: 991
dpr: 1
```

Reference:

```text
.checkout-intro
left 0
right 1371
width 1371
padding L/R 56 / 56
gap 80

.checkout-shell
left 0
right 1371
width 1371
padding L/R 56 / 56
grid 687.75px / 491.25px
gap 80px

.checkout-main
left 56
right 743.75
width 687.75
```

The 15px difference between `innerWidth` and the 1371px reference shell is consistent with the browser scrollbar/client-width distinction and is not treated as a design mismatch.

## Diagnostic conclusion

The SAFE5 internal geometry is not the source of the mismatch.

Confirmed matching internals:

```text
- 56px horizontal inner padding
- 80px desktop inter-column gap
- approximately 7:5 main/summary relationship
```

The real site is being constrained before those values are applied.

At the local viewport, the real SAFE5 frame is only 1257px wide and begins 46.5px inside the usable page frame. The canonical reference frame occupies the full usable page width before applying its own 56px internal gutter.

Consequences:

```text
local main: 621.25px
reference main: 687.75px

local summary: 443.75px
reference summary: 491.25px
```

This is large enough to materially distort strict 1:1 judgment of Packaging typography, wrapping, component density and Summary composition.

## Classification

```text
Global Checkout width mismatch: CONFIRMED
SAFE5 7:5 / 80px internal grid: NOT THE ROOT CAUSE
Likely owner: a shared WordPress/Astra ancestor wrapping `.sf-safe5-checkout`
Exact ancestor selector: PENDING DIRECT RUNTIME IDENTIFICATION
```

Do not change the accepted SAFE5 `1440 / 56 / 7:5 / 80` values merely to compensate for the external constraint.

## Sequence adjustment

The remaining overall-width/geometry investigation is now justified to move ahead of further Packaging micro-visual tuning.

Next:

```text
1. Identify the exact local ancestor constraining `.sf-safe5-checkout`.
2. Remove/bypass that constraint on real Checkout only.
3. Re-run the same geometry measurement.
4. Only after the real frame matches the canonical frame, resume Packaging strict 1:1 micro-refinement.
```

This is an execution-order adjustment, not a new permanent user constraint and not a redesign of the accepted Checkout geometry.
