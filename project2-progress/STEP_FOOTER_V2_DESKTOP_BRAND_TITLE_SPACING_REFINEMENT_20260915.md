# Footer V2 — Desktop brand title spacing refinement — 2026-09-15

## User feedback
The user flagged the desktop `Considered Objects, Sent With Care.` block as visually cramped after the Footer V2 runtime/visual pass.

## Design diagnosis
This is a local typography/spacing issue, not a Footer V2 structural failure.

Current desktop treatment makes the heading too dense because:
- the heading is constrained to a narrow `max-width`,
- the serif size is relatively large,
- line-height is very tight,
- the description begins too close beneath it.

## Correction direction
Desktop only:
- widen the heading measure so it resolves into fewer lines,
- slightly relax line-height,
- add a little more separation before the descriptive sentence.

Do not change Footer copy, menu ownership, trust content, mobile accordion behavior, or overall Footer architecture.

Mobile currently reads acceptably and should remain unchanged unless a later screenshot shows a separate mobile issue.
