# Policy Long-form Reading 02 Layout Diagnosis — No Fix Yet

Date: 2026-09-23
Project: Spatial Flow V2 / 项目二换皮工程

User reported that Long-form Reading 02 is visibly left-biased compared with the accepted short Policy template and leaves excessive empty space on the right.

This diagnosis records the issue only. No visual/code fix is performed in this step.

## Root cause

The global 1480 body wrapper is unchanged and still centered.

The deviation is inside the Long-form 02 policy grid.

Short template:
`grid-template-columns: 230px minmax(0,1fr)`
with the policy document capped at 900px.

Long-form 02:
`grid-template-columns: 190px minmax(0,820px) minmax(0,1fr)`

The third grid column is intentionally empty. Because the document is explicitly placed in column 2, the remaining flexible column sits entirely to the right. This shifts the visual mass of sidebar + document to the left instead of keeping the content composition balanced inside the 1480 body lane.

## Additional contributors

- document maximum width changed from 900px to 820px
- sidebar width changed from 230px to 190px
- the long-form grid adds a second inter-column gap before the empty flexible third track
- at <=1200px the layout becomes two columns, but the 820px document still remains left-anchored in the second track
- at <=1040px the layout becomes one column, while the 820px max-width document has no explicit centering rule, so the left-lock tendency can remain

## Scope

Header, Footer, top hero and the 1480 centered wrapper are not the cause.

The defect is localized to the Long-form 02 internal reading grid / document alignment strategy.

## Status

LONG-FORM READING 02 = LAYOUT BALANCE DEFECT CONFIRMED.
NO FIX APPLIED YET.
