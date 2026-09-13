# Project 2 · Multi-file execution correction · 2026-09-13

## User correction
The current CSS-only repair is an exception made for safety because the Header V2 CSS edit was already interrupted/truncated mid-execution.

Going forward, when one coherent feature requires changes across multiple files, the implementation should be issued and executed as one complete multi-file batch rather than artificially split into separate file-by-file rounds.

## Standing rule

```text
One coherent feature / one coherent step
→ include every necessary file in that step
→ user applies the complete bounded set together
→ user returns all modified files together
→ assistant performs one combined source gate
→ then one consolidated runtime/visual acceptance batch
```

Do not split work merely because it touches `functions.php`, `header.php`, CSS, and JavaScript.

## Safety exception
The current Header V2 CSS repair remains isolated only because:

```text
- functions.php and header.php edits were already applied;
- CSS was interrupted/truncated mid-rule;
- JavaScript had not started;
- continuing into JS before repairing CSS would make the working state harder to audit safely.
```

Therefore the immediate sequence remains:

```text
repair and complete current CSS
→ validate CSS structure
→ then complete remaining Header V2 JavaScript
→ return the complete final four-file Header V2 set together
→ combined source gate
```

This exception must not be used as precedent for future unnecessary file-by-file execution.