# Project 2 · Strict 1:1 Acceptance Policy

Last updated: 2026-07-14  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Core rule

`1:1` does not mean “similar”, “same style”, “not broken”, or “roughly aligned”.

For every Project 2 page, `Completed 1:1` requires the real WordPress/WooCommerce page to reproduce the approved static source with strict geometric, typographic and spatial fidelity while preserving real backend data and native functions.

## Static source is the visual contract

Unless an exception below applies, the approved static HTML/CSS controls:

```text
- page frame and maximum width
- side gutters
- grid ratios
- row and column gaps
- section heights and vertical rhythm
- heading/count spacing
- font family, size, weight, line-height and italic treatment
- borders, rules and background surfaces
- product-image proportions
- action placement
- recommendation layout
- desktop and responsive breakpoints
```

A page cannot pass because it merely has the same colors, fonts or general composition.

## Permitted deviations

A deviation is permitted only when it belongs to one of these categories:

```text
1. The static source contains fake/sample commerce data, while the real page must use WooCommerce products, prices, totals, shipping, Coupon, URLs and notices.
2. The static source lacks a function that the current production page must retain.
3. The user has explicitly approved a different treatment earlier.
4. The static mobile source is weak or unsafe and a production-quality phone correction is required.
5. Accessibility, native WooCommerce behavior or backend editability requires a controlled structural adaptation.
```

Every deviation must be narrow, documented and visually integrated. It is not permission to approximate the rest of the page.

## Comparison protocol

Strict review must use equivalent conditions:

```text
- browser zoom: 100%
- same viewport width for static and real page
- page fully loaded
- no open DevTools changing the viewport unless both pages use the same DevTools dimensions
- no stale cache
- full-page desktop and phone screenshots
```

Where source CSS provides exact values, those values take priority over eyeballing screenshots.

## Dynamic-slot rule

Static sample identity may be replaced by real dynamic output, but the slot must retain the approved geometry.

Examples:

```text
- real product title may wrap differently, but its column and spacing must match
- real shipping rows may be longer, but the Order Summary frame must match
- native Undo must remain functional, but its treatment must fit the approved visual system
- backend-editable copy remains editable, but its typography and placement must match
```

## Cart-specific clarification

The approved Cart static source uses:

```text
maximum frame: 1440px
reference side gutters: 48px
main columns: 7fr / 5fr
grid gap: 80px in both row and column directions
```

The `gap: 80px` declaration is not only a desktop column gap. It also creates the large vertical separation between:

```text
- Your bag title row and piece-count row
- piece-count rule and the product/Order Summary row
```

Any implementation that sets the Cart row gap to zero and compresses those rows cannot be accepted as strict 1:1, even if the content and colors look similar.

## Binary status

Only these statuses remain valid:

```text
Completed 1:1
Not done
```

A structurally stable but visually approximate page remains `Not done`.
