# Step 4E-B2-R5-E4-A2 · Ancestor / Container Trace Result

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-A1 first geometry measurement：Complete.
R5-E4-A2 winning ancestor/container trace：Complete.
Current executable phase：R5-E4-B in-place strict geometry correction.
Code change in A2：None.
Cart page status：Not done.
```

## Trace evidence

```text
window.innerWidth: 1315px
document.documentElement.clientWidth: 1300px
scrollbar width: 15px
```

Relevant hierarchy:

```text
depth 0: div.woocommerce
- rendered outer width: 1164px
- left: 68px
- right gap relative to document client width: 68px
- padding-left/right: 20px / 20px
- margin-left/right: 48px / 48px
- display: grid
- box-sizing: border-box

depth 1: div.entry-content.clear
- rendered width: 1300px
- left/right: 0px / 0px
- padding-left/right: 20px / 20px
- display: block
- box-sizing: border-box
```

All higher ancestors are full document-client width and carry no horizontal padding.

## Exact owner finding

The narrow Cart is caused by two independent inherited 20px horizontal paddings:

```text
1. .entry-content contributes 20px left + 20px right before the Cart width formula resolves.
2. .entry-content > .woocommerce contributes another 20px left + 20px right inside the Cart grid border box.
```

Current geometry:

```text
document client width: 1300px
entry-content content box: 1260px
Cart outer width: 1260 - 96 = 1164px
Cart outer left: 20 + 48 = 68px
Cart internal grid width: 1164 - 40 = 1124px
tracks: 609px + 80px + 435px = 1124px
```

This exactly matches the measured runtime result.

## Correct strict target

CSS percentages resolve against the document layout viewport (`clientWidth`), not `window.innerWidth` including the scrollbar.

At document client width 1300px, the correct target is:

```text
Cart outer width: 1300 - 96 = 1204px
Cart left/right outer gutters: 48px / 48px
Cart internal grid width: 1204px
column gap: 80px
7fr track: approximately 656px
5fr track: approximately 468px
```

The earlier provisional 1219px width based on `window.innerWidth = 1315px` is superseded. The 15px scrollbar must not be included in the CSS layout-width formula.

## Vertical rhythm finding retained

```text
Measured title → count: 8px
Strict target: approximately 88px
Required increase: 80px

Measured count → main row: 93px
Strict target: approximately 120px
Required increase: approximately 27px
```

Because the real DOM combines title and count inside one heading wrapper, the static grid rhythm must be reproduced with bounded desktop-only internal spacing rather than blindly changing the parent `row-gap` to 80px.

## Decision

R5-E4-B may correct only:

```text
- desktop/tablet-wide inherited horizontal padding owners
- title-to-count desktop spacing
- count-to-main desktop spacing
```

R5-E4-B must retain:

```text
- 1440px maximum frame
- 48px outer desktop gutter formula
- 7fr / 5fr tracks
- 80px wide-desktop column gap
- phone geometry and accepted empty-Cart behavior
- native WooCommerce markup and functionality
```
