# Policy Standard Extended 03 — Short Template Natural Extension

Date: 2026-09-24
Project: Spatial Flow V2 / 项目二换皮工程

## Purpose

After Long-form Reading 02 still felt visually strange, the user approved a new test based on a simpler rule:

Use the accepted short Policy template as the parent layout and only extend the amount of content. Do not create a second long-form visual system.

## Artifact

Branch:
`temp-policy-wishlist-led-01`

File:
`temp-preview/Spatial-Flow-Policy-Standard-Extended-03.html`

## What changed

Only content density was increased:
- 9 policy sections
- 9 contents items
- long paragraphs
- bullet list
- ordered process list
- H4 utility subheads
- policy table
- support route

## What did NOT change

The page keeps the short template geometry:
- Header / Footer shell = 1720px
- page body = 1480px + internal padding
- policy grid = 230px sidebar + flexible document column
- document max width = 900px
- same document header / update-date placement
- same section rhythm
- same green italic editorial emphasis
- same mobile behavior

There is no `longform-v2` override and no special long-form grid.

## Static verification

PASS:
- HTML structure balanced
- CSS braces balanced
- JavaScript syntax valid
- standard 230px + flexible policy grid retained
- 900px document cap retained
- 1480 / 1720 hierarchy retained
- table remains isolated in overflow-x wrapper
- no fixed page-level width over 390px
- 620px table min-width is intentional and localized

## Current gate

SHORT POLICY TEMPLATE = visual direction acceptable.
LONG-FORM 01 = FAIL.
LONG-FORM READING 02 = FAIL / layout concept abandoned.
STANDARD EXTENDED 03 = READY FOR USER VISUAL REVIEW.
