# Shop V2 — Editor’s Pick Density and Alignment Correction — 2026-09-17

## Trigger
Runtime screenshot after the previous Editor’s Pick adaptive-content patch showed three remaining visual defects:

1. The right-side fallback kicker `SELECTED PIECE · CURRENT EDIT` did not match the static reference microtype closely enough.
2. The right content still felt visually empty with a short WooCommerce short description.
3. The previous CSS constrained the right content with `max-width: 640px` and changed the reference grid gap from `80px` to `76px`, making the right column feel shifted left while leaving unused space on the far right.

## Source validation performed before issuing another patch
Latest local CSS reviewed: `spatial-flow(20260917-211841).css`.

Structural validation:
- opening braces: 3554
- closing braces: 3554
- opening comments: 276
- closing comments: 276
- Editor’s Pick controlled block is present once and is structurally intact.

Current block confirmed to contain the previous changes, including:
- `gap: 76px`
- `align-items: start`
- `__main { max-width: 640px; }`
- `__copy` as a two-row grid with `align-content: space-between`
- kicker at `10px / 300 / .30em`

## Reference authority rechecked
`preview/spatial-flow-shop-v1.html` remains the authority for Shop visual comparison.

Reference Editor’s Pick geometry/microtype:
- columns: `5fr 7fr`
- gap: `80px`
- alignment: stretch
- copy padding: `40px 0`
- label: Inter/sans, 11px, .32em, terracotta, 20px bottom margin
- title: Cormorant Garamond, 40–64px, 8px bottom margin
- subtitle: 18px italic serif
- body: 15px / 1.8 / max 52ch
- placement: 16px italic serif
- footer: 32px gap, 24px top padding

## Correction decision
Do not move the entire right column left or narrow it with a fixed `max-width`.

Restore the reference grid position (`5fr 7fr`, 80px gap, stretch) and let the right column occupy its full available width. For variable-length product descriptions, keep the title/subtitle/body/place/footer as one compact editorial cluster rather than pinning the footer to the bottom of the image. This prevents a short description from creating a large artificial dead zone while still allowing longer descriptions to expand naturally.

No PHP changes are required for this correction. The current PHP fallback kicker and conditional content rendering remain intact.

## Scope
Only replace the complete desktop Editor’s Pick CSS block between:
- `/* Editor's Pick */`
- `/* Product section */`

Do not alter Shop global width, Header/Footer, WooCommerce data ownership, product content, or mobile approved deviations.
