# Header V2 Search Visual Oddness Refinement — 2026-09-14

## User feedback
The latest editorial search treatment is visibly improved, but the user still reports that it feels "怪怪的" (visually odd).

## Design diagnosis
The problem is not the typography direction anymore. The current panel sits in an ambiguous state between a detached floating card and a true header extension:
- too wide and too shallow;
- floats 20px below the action cluster instead of reading as attached to the header;
- the outer bordered rectangle plus internal underlines create a receipt/form-strip feeling;
- the SEARCH submit area reads like a separate cell rather than one composed search control;
- the panel shadow/box still makes it feel like an inserted component rather than part of the masthead system.

## Approved refinement direction
Do not change Search logic, route, markup, PHP or JS. CSS-only refinement:
- attach the panel closer to the header;
- reduce width and vertical excess;
- remove full-card border/shadow emphasis;
- use a single editorial baseline across input + submit;
- keep warm paper background and serif input typography;
- keep interaction behavior unchanged.

## Status
Header remains `Not done`.
This is a narrow visual refinement only, not a structural reopen.
