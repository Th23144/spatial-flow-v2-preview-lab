# Step 4E-B2-R5-E4-C2 · Corrected Full Geometry Result

Last updated: 2026-07-17  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-B deployed CSS：Active.
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 width-owner confirmation：Pending one wrapper computed-value check.
Cart page status：Not done.
```

## User-supplied measurement

```text
window_inner_width: 1315
document_client_width: 1300
scrollbar_width: 15

wrapper border-box width: 1200
wrapper content-box width: 1200
wrapper left/right outer gutters: 50 / 50
parent entry-content border/content width: 1300 / 1300

form_width: 653
summary_width: 467
rendered_column_gap: 80
title_to_count: 88
count_to_main_row: 120
```

## Accepted results

The strict vertical and track geometry now match the approved source targets:

```text
form + gap + summary: 653 + 80 + 467 = 1200
7fr / 5fr relationship: correct within rounding
rendered column gap: 80px exact
title → count: 88px exact
count → main row: 120px exact
parent inherited padding: removed
wrapper inherited padding: removed
```

Therefore the missing title-area whitespace and compressed main-row rhythm are corrected at rendered level.

## Remaining width question

The wrapper is still:

```text
1200px wide
50px / 50px gutters
```

The strict formula based on the 1300px document layout width would otherwise produce:

```text
1204px wide
48px / 48px gutters
```

The supplied table visibly indicates the wrapper `css_width` and/or `max_width` begins with `12…`, but the cells are truncated in the screenshot. Strict acceptance requires the complete computed value before deciding whether:

```text
- a winning 1200px max-width is the remaining owner, or
- the 1200px result comes from another exact computed-width constraint
```

## Required final evidence

No prototype or unrelated object expansion is needed.

Provide only one of these:

```text
A. Expand the `wrapper` object one level and show `css_width` and `max_width`.
B. Horizontally scroll the first console table until the complete `css_width` and `max_width` cells for the wrapper row are visible.
```

No additional CSS change is authorized until that one computed-value check is recorded.