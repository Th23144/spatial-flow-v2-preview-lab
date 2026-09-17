# Shop Editor’s Pick CSS Replacement Validation — 2026-09-17

## Scope
Validation of the user-updated `spatial-flow.css` after replacing the full Shop Editor’s Pick CSS block.

## Uploaded candidate
- File: `spatial-flow(20260917-212408).css`
- Size: 647,756 bytes
- Lines: 22,976
- SHA-256: `a7e6d0f978fcb3375d997229219c456f4f591fa986126fe625ce3a7b25b017f3`

## Structural validation
- `{` count: 3,554
- `}` count: 3,554
- `/*` count: 276
- `*/` count: 276
- tinycss2 parse errors: 0

Result: **PASS**.

## Editor’s Pick replacement validation
The canonical `/* Editor's Pick */` block appears once and is followed by the existing `/* Product section */` marker.

Confirmed desktop values in the canonical block:
- grid: `minmax(0, 5fr) minmax(0, 7fr)`
- gap: `80px`
- `align-items: stretch`
- copy wrapper: `align-items: stretch`, `min-height: 100%`, `padding: 40px 0`
- main wrapper: `width: 100%`, `max-width: none`
- right-side kicker: `11px`, `font-weight: 300`, `.32em`, Inter stack
- heading: Cormorant Garamond stack
- body: `max-width: 58ch`
- place note: `max-width: 52ch`
- footer: normal-flow editorial cluster with `margin-top: 34px`; no forced `margin-top:auto`

Old rejected desktop values are absent from the canonical Editor’s Pick block:
- no `gap: 76px`
- no `align-items: start`
- no `max-width: 640px`

The remaining root selector occurrences are expected responsive rules only:
- `@media (max-width: 1100px)`: one-column fallback with `gap: 48px`
- `@media (max-width: 767px)`: Editor’s Pick hidden on mobile

These are not duplicate desktop blocks and should remain.

## Reference alignment
Rechecked against `preview/spatial-flow-shop-v1.html`:
- desktop Editor’s Pick uses `5fr 7fr`
- `gap: 80px`
- `align-items: stretch`
- label uses 11px, `.32em`, terracotta
- copy uses centered vertical editorial treatment with `padding: 40px 0`

## Current status
**TECHNICAL VALIDATION PASS — AWAITING RUNTIME VISUAL CHECK.**

No further CSS edits should be made before browser validation.

## Runtime check requested
Desktop Shop only, first pass:
1. Hard refresh Shop.
2. Check Editor’s Pick at the same desktop viewport used for the prior screenshot.
3. Confirm:
   - right column no longer looks shifted left,
   - right-edge whitespace is balanced,
   - kicker typography matches the reference direction,
   - short product excerpt no longer creates an awkward large dead zone,
   - price/button footer sits naturally under the editorial copy rather than being forced to the image bottom.

If those pass, continue the Shop strict 1:1 re-audit from the next visual discrepancy.
