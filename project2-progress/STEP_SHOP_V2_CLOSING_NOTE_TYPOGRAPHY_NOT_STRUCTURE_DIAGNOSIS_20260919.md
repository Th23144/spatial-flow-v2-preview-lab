# Shop V2 — Closing Note diagnosis corrected to typography/composition, not structure

Date: 2026-09-19

## User clarification

The current Closing Note structure is acceptable. The problem is aesthetic: it reads like two large blocks of text pasted onto the page.

## Revised diagnosis

Do NOT replace the two-column composition and do NOT remove the block.

The real issue is lack of internal typographic hierarchy and grouping.

Current backend already has separable content owners:
- Closing Note Kicker
- Closing Note Intro
- Closing Note Emphasis
- Closing Note Body
- Closing Note Side Text
- Closing Note Button Text
- Closing Note Button URL

The strict-reference pass previously flattened Intro + Emphasis + Body into one flowing sentence and removed the visible kicker. That improved 1:1 fidelity but also removed useful editorial hierarchy.

## New design direction

Keep the existing open two-column layout and CTA function, but redesign only the typographic composition:
- restore a subtle small kicker / section label;
- render Intro, Emphasis and Body as distinct typographic layers instead of one undifferentiated paragraph;
- preserve the emphasis field as the main serif/italic visual anchor;
- make Body smaller and quieter so the left side is not one wall of large text;
- give the right Side Text a clear local anchor/rule and tighter readable measure;
- keep the CTA visually attached to the right copy;
- use rules/spacing, not cards, boxes, gradients or new background panels;
- remove the temporary desktop right-offset experiment.

## Status

STRUCTURE RETAINED / TYPOGRAPHIC COMPOSITION REOPENED.