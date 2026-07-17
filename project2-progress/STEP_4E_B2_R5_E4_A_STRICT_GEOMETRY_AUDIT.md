# Step 4E-B2-R5-E4-A · Strict Cart Geometry Measurement Audit

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E3 empty-Cart parity：Passed / closed.
R5-E4-A1 first rendered measurement：Complete.
R5-E4-A2 winning ancestor/container trace：Complete.
R5-E4-A：Complete / closed.
Current executable phase：R5-E4-B in-place strict geometry correction.
Cart page status：Not done.
```

Records:

```text
project2-progress/STEP_4E_B2_R5_E4_A1_MEASUREMENT_RESULT.md
project2-progress/STEP_4E_B2_R5_E4_A2_ANCESTOR_TRACE_RESULT.md
project2-progress/STEP_4E_B2_R5_E4_B_STRICT_GEOMETRY_CORRECTION.md
```

## Strict reference

```text
maximum frame: 1440px
outer desktop gutters: 48px
main columns: 7fr / 5fr
wide-desktop column gap: 80px
title → count: approximately 88px
count → main row: approximately 120px
```

## Final measured evidence

```text
window inner width: 1315px
document client width: 1300px
scrollbar width: 15px
wrapper outer width: 1164px
wrapper outer gutters: 68px / 68px
internal form / gap / summary: 609px / 80px / 435px
title → count: 8px
count → main row: 93px
```

## Exact width owner

The trace confirmed:

```text
.entry-content padding-left/right: 20px / 20px
.entry-content > .woocommerce padding-left/right: 20px / 20px
all higher ancestors: full 1300px client width with no horizontal padding
```

Current calculation:

```text
1300 - 40 parent padding = 1260
1260 - 96 Cart width formula = 1164 outer width
1164 - 40 wrapper padding = 1124 internal grid width
609 + 80 + 435 = 1124
```

Correct target:

```text
1204px Cart outer/internal width
48px / 48px outer gutters
approximately 656px / 468px tracks
80px column gap
```

The earlier provisional 1219px width based on `window.innerWidth` is superseded; CSS layout percentages use the 1300px document client width.

## Exact vertical finding

```text
title → count requires +80px
count → main row requires approximately +27px
```

Because the real DOM combines title and count inside one heading wrapper, R5-E4-B uses desktop-only internal spacing rather than setting the parent row-gap to 80px blindly.

## Decision

```text
- retain --sf-cart-max: 1440px
- retain width calc(100% - 96px)
- retain 7fr / 5fr
- retain 80px wide-desktop column gap
- correct only the two inherited padding owners and the two measured vertical distances
- protect phone and accepted empty-Cart behavior
```

R5-E4-A authorizes no PHP, JavaScript, Header or template change.