# Final Production Wishlist — Manual Step A Verification + Batch Granularity Correction

Date: 2026-10-03
Project: Spatial Flow V2 / Project 2

## Returned file verified

User returned:
`functions(20261003-063948).php`

Verification result:
- bytes: 634,106
- logical lines: 12,138
- SHA256: `515e250d206043fb4e4b1af4d6977e4fa7b1190b38c3672597aa1c9744e805fb`
- PHP syntax: PASS
- Wishlist shell start anchor count: 1
- Wishlist shell end anchor count: 1
- H02 shell marker present
- Collection Index mount present
- mobile jump-selector mount present

This exactly matches the simulated expected Step A output.

Status:
WISHLIST FUNCTIONS SHELL STEP A = VERIFIED / PASS.

## User workflow correction

The user explicitly requests that future production work should NOT be artificially split file-by-file when one logical step naturally spans multiple source files.

New execution rule:

- one logical page/batch step may include several required files together;
- for each included file, still provide:
  - exact current baseline;
  - exact old anchor/block;
  - expected match count;
  - complete replacement/addition;
  - expected resulting bytes/lines/hash where deterministic;
  - rollback boundary;
- user may edit all files in that logical batch once;
- user then returns all changed files together for one combined verification gate;
- only after the combined batch passes do we move to the next page/batch.

This supersedes the overly granular "one file = one step" interpretation.

## Immediate implication

For the remainder of Wishlist production mapping, CSS + JS + final version bump should be delivered as ONE logical Wishlist completion batch rather than separate file-by-file steps.

No Search mapping begins until that combined Wishlist batch is runtime-verified.
