# Care Guide Filtered Category 04 — Build Start

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Trigger

User confirms the next step should solve the remaining problem in Category-first 03:
although categories exist, all category content is still laid out simultaneously on one long page.

## Goal

Keep Care Guide as ONE WordPress page / one backend-editable content surface, while changing the front-end experience to:

Category chooser → selected category content → relevant secondary guidance → Support.

## Interaction model

Primary choices:
- Jewelry
- Crystal Objects
- Home Pieces
- Unsure / Need Help

Only the selected category's main care content should be visually active / exposed at a time.

The implementation should:
- avoid creating separate WordPress pages;
- preserve direct-link/hash behavior where possible;
- remain usable without JavaScript (all content available as fallback);
- keep accessibility semantics and keyboard usability;
- avoid SaaS tab/card visual language;
- use the existing editorial row system.

## Guardrails

- no new care claims;
- no fabricated products/materials/services;
- no production mapping;
- retain current real content-model boundaries;
- do not reintroduce About-style manifesto language.

## Status

FILTERED CATEGORY 04 BUILD = ACTIVE.
