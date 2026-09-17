# Shop V2 Editor's Pick — Vertical Composition Pass Start + Candidate Validation

Date: 2026-09-17

## Context

Runtime visual review after the prior Editor's Pick horizontal correction showed the remaining issue is vertical composition rather than horizontal positioning.

Current accepted horizontal frame remains unchanged:

- 5fr / 7fr columns
- 80px gap
- current wider Shop page width preserved
- no product-data changes

## Problem

With a short product excerpt, the Editor's Pick right column currently centers the entire content cluster vertically. This leaves visually weak empty space below the footer.

The intended correction is to preserve the main editorial content near the top and use the footer (price + View Piece / optional Studio Note) as the lower visual anchor. Any flexible breathing space should live between the main content and footer, not beneath the footer.

## Candidate implementation

Only the controlled `/* Editor's Pick */` CSS block is changed.

Key mechanics:

- `.sf-shop-v2-editor-pick__copy` becomes a three-row grid: `auto minmax(40px, 1fr) auto`
- `.sf-shop-v2-editor-pick__main` is explicitly placed on row 1
- `.sf-shop-v2-editor-pick__footer` is explicitly placed on row 3 and aligned to the bottom
- horizontal 5fr / 7fr / 80px geometry is unchanged
- typography and product-data ownership are unchanged

## Pre-execution validation

Validated against the user's latest uploaded CSS `spatial-flow(20260917-212408).css`.

Candidate full-file checks:

- opening braces: 3554
- closing braces: 3554
- opening comments: 276
- closing comments: 276
- CSS parser errors: 0
- `/* Editor's Pick */` marker count: 1
- `/* Product section */` marker count: 1
- no `margin-top:auto` footer hack

Status: CANDIDATE SOURCE VALIDATED / AWAITING USER REPLACEMENT AND POST-EDIT SOURCE VALIDATION.
