# Footer V2 — Mobile Brand Subtitle Left Alignment Fix

Date: 2026-09-15

## Context

Final mobile visual review found that the brand subtitle under `SPATIAL FLOW` remained horizontally centered within its own max-width block, while the rest of the mobile Footer uses a left-aligned editorial axis.

The cause is an older generic mobile rule on `.sf-v2-brand-mark span` that sets `margin-left: auto; margin-right: auto;`. The newer main-site Footer rule did not explicitly reset those margins, so the subtitle remained visually inset.

## Decision

Keep the current subtitle copy and wrapping behavior. Do not change desktop. Do not change wording, font size, spacing, Footer IA, trust rail, menu behavior, legal row, or Blog Footer.

On mobile main-site Footer only, explicitly reset the brand subtitle horizontal margins to zero so it aligns with the left edge of the `SPATIAL FLOW` wordmark and the rest of the editorial information flow.

## Exact CSS delta

Inside the existing `@media (max-width: 767px)` main Footer block, update:

```css
  .sf-v2-footer--main .sf-v2-brand-mark span {
    max-width: 300px;
    margin-top: 12px !important;
    font-size: 7px !important;
    line-height: 1.6 !important;
    letter-spacing: .18em !important;
  }
```

to:

```css
  .sf-v2-footer--main .sf-v2-brand-mark span {
    max-width: 300px;
    margin-top: 12px !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    font-size: 7px !important;
    line-height: 1.6 !important;
    letter-spacing: .18em !important;
  }
```

## Scope

- Main-site Footer mobile only.
- No desktop change.
- No PHP change.
- No JS change.
- No copy change.
- No Blog Footer change.

Status: READY FOR MANUAL APPLY + RUNTIME VISUAL CHECK.
