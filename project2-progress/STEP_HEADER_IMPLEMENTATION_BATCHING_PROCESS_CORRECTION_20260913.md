# Project 2 · Header implementation batching process correction · 2026-09-13

## Current stage
Main-site Header production implementation preparation.

## User correction
The user clarified that Project 2 should not split one coherent functional change into one-file-per-step micro-steps.

The established working pattern is:

```text
one coherent change / one step
→ may include multiple target files when they are part of the same implementation
→ issue all bounded edits for that step together
→ user applies the full bounded batch
→ user returns the modified files for one source-audit gate
→ only then proceed to runtime acceptance / next step
```

This supersedes the assistant's overly granular Part H1-only-per-file handling in the previous turn.

## Important boundary
This correction does NOT re-authorize blind whole-file ZIP replacement.

The deployment method remains bounded/manual source replacement unless a future full-file replacement is separately requalified under `PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md`.

## Header ownership rule preserved
- desktop primary menu owner: `sf_primary`;
- mobile menu owner: `sf_mobile`;
- do not collapse mobile ownership into `sf_primary`;
- one coherent Header implementation step may still modify `functions.php`, `header.php`, `assets/css/spatial-flow.css`, and `assets/js/spatial-flow.js` together when required.

## Current stop point
The user has already applied the first small Customizer ownership delta to `functions.php` and returned the file.

## Exact next action
1. verify the returned `functions.php`;
2. if PASS, fold that accepted delta into the coherent Header implementation batch baseline;
3. issue the remaining Header implementation edits as one multi-file bounded step rather than one file at a time.
