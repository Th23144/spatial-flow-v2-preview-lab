# Policy Long-form Reading 02 — Centering Micro-adjustment

Date: 2026-09-24
Project: Spatial Flow V2 / 项目二换皮工程

## User decision

The user chose to return to Long-form Reading 02 and abandon Standard Extended 03 as the active direction.

Requested change:
Only correct the remaining content-centering issue. Do not redesign the long-form page.

## Change applied

Desktop long-form policy grid changed from:
- 230px sidebar + flexible document column

to:
- 230px sidebar + max 900px document column
- the sidebar + document pair is centered as one composition inside the existing 1480 body lane using `justify-content:center`

This is intentionally a geometry-only correction.

## Not changed

- Header / Footer = 1720 shell
- page body = 1480 + existing internal padding
- 6-item contents index
- long-form reading rhythm
- typography
- green accent behavior
- document header
- reading breaks
- section spacing
- table behavior
- mobile structure

## Verification

PASS:
- HTML balanced
- CSS braces balanced
- JavaScript syntax valid
- centered group rule present
- 1480 / 1720 hierarchy unchanged
- 6-item contents index retained
- no page-level fixed-width overflow found
- 620px table minimum remains intentionally localized inside its overflow wrapper

## Current gate

STANDARD EXTENDED 03 = ABANDONED AS ACTIVE DIRECTION.
LONG-FORM READING 02 = ACTIVE AGAIN / CENTERING MICRO-ADJUSTED / READY FOR USER VISUAL REVIEW.
