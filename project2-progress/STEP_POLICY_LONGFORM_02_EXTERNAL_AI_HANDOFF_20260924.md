# Policy Long-form 02 Handoff to External AI

Date: 2026-09-24
Project: Spatial Flow V2 / 项目二换皮工程

## User decision

The user decided to stop further in-house design iteration on the long-form Policy page and hand this page to another AI.

## Final baseline before handoff

Artifact:
`temp-preview/Spatial-Flow-Policy-Longform-Reading-02.html`

Branch:
`temp-policy-wishlist-led-01`

The last centering experiment was reverted.

The left Contents / Sections navigation has been restored to its prior accepted position:
- policy shell = 230px sidebar + flexible document column
- no whole-grid `justify-content:center`
- no empty third grid column
- sidebar sticky behavior retained

## Handoff instruction

The next AI must:
- keep the sidebar position unchanged
- keep Header / Footer and the 1480 body system unchanged
- work only on the right article / document composition
- solve visual balance of effective reading width, document start point, metadata, lede and long-text rhythm
- avoid mechanical whole-grid centering
- avoid recreating the earlier empty third-column failure
- preserve responsive behavior and localized table scrolling

## Current status

SHORT POLICY TEMPLATE = visually acceptable.
LONG-FORM 01 = failed pressure test.
STANDARD EXTENDED 03 = abandoned.
LONG-FORM READING 02 = HANDOFF BASELINE / EXTERNAL AI DESIGN PASS REQUIRED.

No production WordPress mapping has been performed.
