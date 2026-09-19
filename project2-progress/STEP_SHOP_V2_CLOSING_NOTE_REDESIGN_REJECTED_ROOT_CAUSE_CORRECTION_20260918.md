# Shop V2 — Closing Note redesign attempts rejected / root-cause correction

Date: 2026-09-18

## Correction

Two assistant-proposed redesign previews were rejected by the user as visually worse.

The correct authority is the repository static reference, not a new invented composition.

## Exact reference evidence

`preview/spatial-flow-shop-v1.html` already uses the same basic Closing Note structure:
- max-width: 1440px;
- padding: 80px 56px 120px;
- grid-template-columns: 1fr 1fr;
- gap: 80px;
- align-items: start;
- right column padding-top: 14px;
- right paragraph max-width: 48ch.

The reference therefore does NOT support the attempted 7/5 redesign, stacked editorial redesign, or extra horizontal offset.

## Actual visual divergence discovered

The current production left Closing Note copy is longer than the reference copy.

Reference left copy:
`Don't see it here? The studios we work with make a few things a year. Tell us what room you're trying to settle, and we'll write back.`

Current production screenshot includes an added tail:
`...and we will write back with a quieter path through the collection.`

This additional phrase materially increases the left column's height and visual weight, which makes the original balanced 1fr/1fr composition read poorly.

The temporary 48px/80px desktop right-column inset further moves the production layout away from the reference and should be reverted.

## Correct next direction

1. Return the desktop Closing Note CSS to the reference geometry; remove the added desktop padding-left offset.
2. Keep the user-approved overall site width decision; do not globally narrow the Shop.
3. Restore the Closing Note text through its backend-editable Customizer fields to the shorter reference copy, if the user approves.
4. Re-check runtime before any further CSS redesign.

Status:
REDESIGN ATTEMPTS REJECTED / ROOT CAUSE CORRECTED / RETURN TO REFERENCE.