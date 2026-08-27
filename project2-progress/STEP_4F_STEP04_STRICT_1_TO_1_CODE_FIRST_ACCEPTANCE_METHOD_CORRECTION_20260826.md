# Step 4F · Step04 Strict 1:1 Acceptance Method Correction · 2026-08-26

## Trigger
The user explicitly corrected the acceptance methodology: strict 1:1 means micro-level parity and must not be accepted from visual inspection alone.

## Correct acceptance method
Strict 1:1 for Step04 is now code-first and runtime-computed, with screenshots as final rendering evidence only.

Authoritative order:

```text
1. reference source contract extraction
2. normalized production-vs-reference CSS property diff
3. same-viewport runtime computed-style + DOM geometry capture
4. numeric comparison of computed values / bounding boxes
5. pixel/screenshot review as final residual/regression check
6. PASS only if code/computed deltas are zero or explicitly allowed production deviations
```

Visual similarity, structural coherence, or a human screenshot review alone must never produce `Strict 1:1: PASS`.

## What must be compared numerically
At minimum for the approved S7 Confirmed and Pending layouts:

- width / max-width / min-width
- x/y / top/left/right/bottom / bounding rect
- display / position / grid-template-columns / gap / align-items
- margin / padding
- font-family / font-size / font-weight / font-style / line-height / letter-spacing
- color / background / border / border-radius / box-shadow
- sticky/static ownership and top offset
- responsive breakpoint results at desktop and 390x844

Target selectors include breadcrumb, result-intro, result-title, result-lede, authority note, checkout steps, result-shell, result-status, result-overview, result-panel/head/table, result-facts, result-timeline, result-addresses/cards, result-side, result-summary and result-actions.

## Allowed deviations
Do not compare literal dynamic Woo values as if they were static design values. Allowed production differences remain:

- order number/date/email/items/totals/addresses;
- gateway-owned Thank You content;
- production-only status semantics outside S7 Confirmed/Pending;
- already-accepted live site-wide header/footer components.

These do not waive geometry/typography/style parity for the Step04-owned components.

## Current consequence
The previous `paired screenshot visual comparison` gate is superseded as the sole acceptance gate. The eight paired screenshots remain useful residual evidence, but they are insufficient by themselves.

The next action is to run a code/computed-style parity audit. No source modification should occur until a concrete numeric/source delta is identified.
