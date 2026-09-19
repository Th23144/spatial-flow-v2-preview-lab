# Step 4G — Shop and DIY are sibling branches under the shared brand Home

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User architecture correction

The user explicitly clarified that:

- the ecommerce commercial-entry light homepage;
- the DIY light-experience homepage

are the SAME architectural level.

They are two sibling branches under the shared brand/global Home.

They are NOT:
- Shop -> Studio;
- ecommerce Home -> DIY subpage;
- Shop Landing owning the Studio experience.

## Correct architecture

```text
                 SHARED BRAND HOME
                       /      \
                      /        \
                     /          \
        SHOP LIGHT HOME      DIY LIGHT HOME
        + PRODUCT ARCHIVE    + BUILDER EXPERIENCE
```

Both may cross-link to each other when useful, but neither owns the other.

## Immediate design consequence for Shop Hybrid

The Shop Landing + Product Archive Hybrid must NOT treat Custom Studio as an internal Shop discovery axis.

Therefore the prior candidate discovery set:

`OBJECT / SPACE / MATERIAL / CUSTOM`

is corrected to:

`OBJECT / SPACE / MATERIAL`

Studio remains available only as:
- global navigation;
- restrained sibling cross-link where contextually useful;
- never a major Shop-owned promotional section.

## Immediate design consequence for DIY

The DIY light-experience homepage will later be designed independently as the sibling commercial/creative branch of the same brand system.

It should share:
- creative point of view;
- typography discipline;
- motion weight;
- object treatment;
- spacing logic;
- global shell where appropriate;

but NOT the same page composition.

## Status

GLOBAL HOME = DEFERRED
SHOP HYBRID = ACTIVE
DIY LIGHT HOME = SIBLING, SEPARATE DESIGN TASK
SHOP DOES NOT OWN STUDIO

This record supersedes earlier Shop-grammar text that treated Custom Studio as an in-Shop discovery state.
