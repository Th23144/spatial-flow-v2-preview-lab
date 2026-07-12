# Project 2 · Mobile Design Review Policy

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

Project 2 remains a V2 reskin project, but the static V2 references are not assumed to be fully optimized on phones.

Literal visual matching is not allowed to override mobile usability, visual hierarchy or professional layout judgment.

## Mobile decision hierarchy

For every Project 2 page, evaluate mobile in this order:

```text
1. preserve native WordPress / WooCommerce behavior
2. preserve real dynamic data and backend editability
3. prevent horizontal overflow, clipping, overlap and hidden controls
4. keep touch targets usable and text readable
5. preserve the established Spatial Flow visual language
6. use professional visual judgment for spacing, hierarchy, density and composition
7. follow the V2 static mobile reference only where it is demonstrably well designed
```

A poor static mobile composition must not be reproduced merely to claim literal 1:1 similarity.

## What “Completed 1:1” means on mobile

For mobile, `Completed 1:1` means faithful to the V2 design language and content hierarchy while being production-quality on real phone widths.

It does not mean copying every static mobile measurement when doing so creates:

```text
- unreadably small text
- cramped product information
- excessive empty space
- clipped or overlapping controls
- poor touch targets
- half-visible cards
- horizontal scrolling
- awkward desktop patterns forced onto phones
```

## Required mobile review evidence

A final mobile review should inspect:

```text
- Header and navigation
- first-screen hierarchy
- complete page flow
- dynamic text wrapping
- touch controls and links
- forms and validation messages
- cards and recommendation grids
- Footer and accordion behavior
- horizontal overflow
- common widths around 390–430 CSS pixels
- a narrower fallback around 360 CSS pixels when relevant
```

## Re-audit requirement for previously completed pages

After the current Cart page reaches its functional gate, perform a focused mobile aesthetic re-audit of:

```text
- Shop archive
- Single Product
```

Their current binary status remains unchanged until the re-audit finds a concrete defect. A discovered defect reopens that page as `Not done` until corrected and revalidated.

## Remaining pages

This policy applies immediately to:

```text
- Cart
- Checkout
- Thank You
- Home
- Wishlist
- Track Order
- Account
- Search
- utility/content pages
- Blog home
- Blog issue
- Blog article
```

## Implementation rule

Mobile corrections must remain bounded and independently reversible.

```text
- inspect the actual live mobile output first
- do not guess from desktop screenshots
- do not add a broad mobile patch when one selector group is sufficient
- do not fabricate product data or imagery
- do not change native behavior to solve a visual issue
- do not delete established CSS ownership before the replacement is validated
```
