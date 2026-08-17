# Step 4F · Step04 A/B Test — A-Method Batching Correction

Date: 2026-08-16

## Correction

The first A-group instruction incorrectly reduced the historical/manual method to a micro-step workflow:

```text
change one tiny fragment
→ upload
→ wait for validation
→ receive next tiny fragment
```

This is not a fair representation of the user's established efficient manual workflow and would artificially bias the speed comparison against Method A.

## Correct A-group delivery model

For one coherent file/batch where edits do not have a real destructive or state dependency:

```text
provide all bounded manual anchored replacement Parts for that file/batch at once
→ user performs all edits in one pass
→ save once
→ upload the resulting file(s) once
→ perform consolidated validation
```

Split only where a later edit genuinely depends on the validated result of an earlier edit.

## Test timing correction

The previously issued single-line `A-Part 1` instruction is not counted as the official A-group timed sample.

The official A-group timer starts when the consolidated manual replacement package is delivered.

## Fairness rule

Both A and B groups must:
- start from the same verified 2.7.13 baseline copies;
- target the same Step04 2.7.15 candidate outcome;
- produce byte/SHA-identical final files;
- exclude preparation/setup time from the measured user execution time;
- compare user execution time, number of interactions, errors/rework, and verification burden.

Status: CORRECTION LOCKED.
