# Step 4D-REOPEN · Related Products runtime-correction returned source audit start

Date: 2026-09-11

## Stage

Related Products / `Pieces of a similar weight.` strict 1:1 remediation — second returned-source audit after runtime rejection.

## User returned

- `functions(20260911-142303).php`
- `spatial-flow(20260911-142302).css`

## Intended bounded delta from the immediately previous accepted source baseline

`functions.php`
- child version only: `2.7.42 -> 2.7.43`

`assets/css/spatial-flow.css`
- in the existing scoped Related Products block only:
  - add `box-sizing: border-box;`
  - change desktop section padding `96px 0` -> `96px 56px`
  - add `text-transform: none !important;` to the Related Products heading
- keep the existing `@media (max-width: 1100px)` padding override at `96px 0`

No template change is authorized in this correction round.

## Audit gate

Before runtime retest, verify whole-file diff against the immediately prior returned files, PHP syntax, CSS structural balance/parser status, and confirm no unrelated edits.

Status: AUDIT STARTED / RESULT PENDING
