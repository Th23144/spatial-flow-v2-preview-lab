# Step 4E-B2-R5-E4-C2 · Corrected Full Geometry Result

Last updated: 2026-07-17  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-B deployed CSS：Active.
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 wrapper computed-value confirmation：Passed.
Current executable step：Identify the exact stylesheet rule that supplies max-width: 1200px.
Cart page status：Not done.
```

Width-owner record:

```text
project2-progress/STEP_4E_B2_R5_E4_C2_WIDTH_OWNER_CONFIRMATION.md
```

## User-supplied measurement

```text
window_inner_width: 1315
document_client_width: 1300
scrollbar_width: 15

wrapper border-box width: 1200
wrapper content-box width: 1200
wrapper left/right outer gutters: 50 / 50
wrapper css_width: 1200px
wrapper max_width: 1200px
wrapper padding-left/right: 0px / 0px
wrapper border-left/right: 0px / 0px
wrapper margin-left/right: 50px / 50px
wrapper box-sizing: border-box
parent entry-content border/content width: 1300 / 1300

form_width: 653
summary_width: 467
rendered_column_gap: 80
title_to_count: 88
count_to_main_row: 120
```

## Accepted results

The strict vertical and track geometry match the approved source targets:

```text
form + gap + summary: 653 + 80 + 467 = 1200
7fr / 5fr relationship: correct within rounding
rendered column gap: 80px exact
title → count: 88px exact
count → main row: 120px exact
parent inherited padding: removed
wrapper inherited padding: removed
```

The missing title-area whitespace and compressed main-row rhythm are corrected at rendered level.

## Confirmed remaining width owner

The remaining mismatch is exactly:

```text
strict formula target at 1300px client width: 1204px
current computed css_width: 1200px
current computed max_width: 1200px
current outer gutters: 50px / 50px
```

This proves that a direct winning `max-width: 1200px` declaration caps the Cart wrapper. The result is not caused by borders, padding, parent width or scrollbar accounting.

## Required final source evidence

Identify the exact matching rule that supplies `max-width: 1200px` to:

```text
body.woocommerce-cart .entry-content > .woocommerce
```

Required output:

```text
selector
max-width value
!important priority
stylesheet source
active media condition
```

No CSS change is authorized until that one source rule is identified. After identification, correct only that exact owner and retain the accepted 7fr / 5fr, 80px, 88px and 120px geometry.