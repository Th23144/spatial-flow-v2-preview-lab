# Step 4D Reopen B2 — Separator Removal Correct; Spacing Drift Root Cause (2026-09-06)

## Context
After B2 Product Attributes was converted from boxed cards to a flat information band, a duplicate full-width separator appeared before Section 01. The first correction changed `.single-product .sf-product-v2-piece` from a top border to `border-top: 0`.

## Visual comparison result
The latest current-page screenshot and the reference screenshot were compared directly.

The separator removal itself was **correct**:
- Reference: Product Attributes information band has its own top and bottom full-width rules.
- Reference: Section 01 has a separate short rule only above the left editorial aside.
- Current after correction: same separator hierarchy is present.

Therefore the removed line must **not** be restored.

## Remaining mismatch
The current page has too much vertical whitespace between the Product Attributes bottom rule and the Section 01 short left rule.

Root cause in current CSS:
```css
.single-product .sf-product-v2-piece {
  margin-top: clamp(52px, 6vw, 92px);
  padding: clamp(52px, 6vw, 92px) 0;
  border-top: 0;
  border-bottom: 1px solid rgba(31,25,22,.1);
}
```

The section still stacks a large `margin-top` plus a large `padding-top` before the internal aside line:
```css
.single-product .sf-product-v2-piece__aside {
  border-top: 1px solid rgba(31,25,22,.12);
  padding-top: 24px;
}
```

So once the duplicate full-width top rule was removed, the oversized spacing became more obvious.

## Authority decision
- Keep Product Attributes bottom full-width rule.
- Keep Section 01 left-aside short rule.
- Keep `.sf-product-v2-piece { border-top: 0; }`.
- Do **not** restore the removed full-width Section 01 top border.
- Next correction should address only the vertical spacing between B2 and Section 01, preferably by reducing/removing one of the stacked `margin-top` / top padding values as part of the Section 01 visual alignment work.

## Status
- B2 separator hierarchy: PASS.
- B2-to-Section01 spacing: OPEN.
- Section 01 remains scheduled for B3 strict visual realignment against the reference.
