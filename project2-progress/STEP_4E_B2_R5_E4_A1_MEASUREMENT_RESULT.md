# Step 4E-B2-R5-E4-A1 · Strict Geometry Measurement Result

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-A1 first rendered measurement：Complete.
R5-E4-A2 winning ancestor/container trace：Required.
Code change：None.
Cart page status：Not done.
```

## User-supplied measurement

```text
viewport_css_px: 1315
device_pixel_ratio: 1
wrapper_width: 1164
left_gutter: 68
right_gutter: 83
form_width: 609
summary_width: 435
rendered_column_gap: 80
title_to_count: 8
count_to_main_row: 93
```

## Evaluation

### Main columns and column gap

```text
Rendered column gap: 80px → matches the approved static source.
Form + summary sizing remains compatible with an approximately 7fr / 5fr split after subtracting the 80px gap.
```

These values do not justify changing the 80px desktop column gap.

### Wrapper width and gutters

At viewport 1315 CSS px, the declared strict formula predicts:

```text
expected wrapper width = 1315 - 96 = 1219px
expected nominal side gutters = 48px
```

Measured:

```text
wrapper width = 1164px
left gutter = 68px
right gutter = 83px
```

The right/left difference is consistent with scrollbar or viewport/client-width accounting, but the wrapper remains approximately 40px narrower than the intended width even after normalizing the scrollbar difference.

This strongly indicates that `width: calc(100% - 96px)` is resolving against a parent content box that is already inset by about 20px on each side, rather than against the full viewport/content canvas.

Do not change `--sf-cart-max` or the 48px formula yet. The winning ancestor/padding owner must be identified first.

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

This confirms the user-reported missing large title-area whitespace and matches the source audit finding that `row-gap: 0` compresses the heading/count sequence.

## Decision

```text
- 80px desktop column gap：retain.
- 7fr / 5fr main relationship：retain unless later computed-grid trace disproves it.
- wrapper width：do not modify blindly; run ancestor/container trace.
- title/count/main-row vertical rhythm：confirmed blocking strict 1:1 mismatch; correct in R5-E4-B.
```

## R5-E4-A2 required trace

The next console trace must record the wrapper and its ancestors with:

```text
- rendered width / left / right
- computed width and max-width
- padding-left / padding-right
- margin-left / margin-right
- display and box-sizing
- viewport innerWidth and documentElement.clientWidth
```

No CSS edit is authorized before the owner trace is recorded.