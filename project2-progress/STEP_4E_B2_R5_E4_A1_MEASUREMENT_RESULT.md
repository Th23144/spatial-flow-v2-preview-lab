# Step 4E-B2-R5-E4-A1 · Strict Geometry Measurement Result

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-A1 first rendered measurement：Complete.
R5-E4-A2 winning ancestor/container trace：Complete.
Current executable phase：R5-E4-B in-place strict geometry correction.
Code change：None.
Cart page status：Not done.
```

A2 owner record:

```text
project2-progress/STEP_4E_B2_R5_E4_A2_ANCESTOR_TRACE_RESULT.md
```

## User-supplied measurement

```text
window inner width: 1315
document client width: 1300
scrollbar width: 15
wrapper width: 1164
left/right wrapper gutters relative to client width: 68 / 68
form width: 609
summary width: 435
rendered column gap: 80
title to count: 8
count to main row: 93
```

## Final evaluation

### Main columns and column gap

```text
Rendered column gap: 80px → matches the approved static source.
609px + 80px + 435px = 1124px internal grid width.
The tracks remain compatible with the intended 7fr / 5fr relationship.
```

Do not change the 80px wide-desktop column gap.

### Wrapper width and gutters

CSS layout percentages resolve against `document.documentElement.clientWidth`, not `window.innerWidth` including the scrollbar.

At client width 1300px, the strict target is:

```text
expected wrapper width: 1300 - 96 = 1204px
expected left/right outer gutters: 48px / 48px
```

Measured:

```text
wrapper width: 1164px
left/right outer gutters: 68px / 68px
```

The exact 40px deficit is caused by `.entry-content` retaining 20px left/right padding before the child width formula resolves.

The wrapper itself also retains 20px left/right padding, reducing the internal grid by another 40px. Both owners were confirmed by A2.

The earlier provisional 1219px target based on `window.innerWidth = 1315px` is superseded.

### Vertical rhythm

Measured:

```text
title → count: 8px
count → main row: 93px
```

Approved strict reference rhythm:

```text
title → count: approximately 88px
count → main row: approximately 120px
```

Therefore:

```text
title → count is short by approximately 80px
count → main row is short by approximately 27px
```

## Decision

```text
- retain 1440px maximum frame
- retain 48px outer desktop gutter formula
- retain 80px column gap
- retain 7fr / 5fr relationship
- remove the two inherited 20px horizontal padding owners only above 1100px
- reproduce 88px / 120px rendered vertical rhythm with desktop-only bounded spacing
```

Exact manual correction:

```text
project2-progress/STEP_4E_B2_R5_E4_B_STRICT_GEOMETRY_CORRECTION.md
```