# Shop V2 — Closing Note Typography V3 preview refinement

Date: 2026-09-19

## User correction

The V2 preview did not move the right group far enough and misinterpreted the left-side density problem.

User clarified:
- right outer whitespace should visually balance the left outer whitespace;
- the left-side problem is not merely section padding;
- the main editorial sentence was wrapping into too many lines, making the left stack unnecessarily tall and crowded.

## V3 visual-study correction

No production source changed.

V3 changes only the external HTML study:

1. Right-side balance
- remove the ineffective padding-left-only treatment;
- set the right content group to justify to the section's outer right edge;
- its right edge now lands on the same 56px inner gutter used by the left block's left edge;
- this gives explicit left/right outer-gutter parity instead of another vague incremental shift.

2. Left-side vertical density
- remove the artificial 15.5ch max-width that forced the emphasized sentence into excessive line wrapping;
- let the emphasis use the full left column;
- reduce the emphasis size slightly so the sentence resolves in fewer lines;
- relax the body width cap so supporting copy also wraps less;
- retain hierarchy without making the left column into a tall stack.

3. Preserved
- existing two-column basic composition;
- restrained kicker/rule ornament;
- existing CTA concept;
- no cards, panels, background blocks, large CTA redesign, Micro Bar, or structural replacement.

## Artifact

External visual study:
`shop-closing-note-typography-v3.html`

The file is intentionally not committed to the repository; only the decision/progress record is stored here.

## Status

V3 VISUAL STUDY READY / AWAITING USER REVIEW / NO PRODUCTION SOURCE CHANGE.
