# Step 4F · Step04 A/B Test — Method B Automated Patch Package Ready

Date: 2026-08-16

## Package

`STEP04_AB_B_AUTOMATED_PATCH.zip`

- ZIP bytes: 272311
- ZIP SHA256: `0b5d425366c66a2698d741ad7d59f1e40a4e1d770a6af4dd0bb2835c5f6bbb75`

## Test safety boundary

This B-group package is deliberately sandboxed:

```text
it modifies only bundled TEST-TARGET copies
it contains no live WordPress theme path
it cannot modify the user's live Project 2 theme in this A/B experiment
```

## Two-step operator flow

### Step 1 — CHECK ONLY

Run:
`01-CHECK-ONLY.bat`

Required result:
`SAFE TO APPLY: YES`

CHECK is read-only. It verifies exact baseline SHA values, validates patch payload checksums and delete ranges, applies the patch in memory, and proves the simulated results equal the published 2.7.15 candidate SHA values.

### Step 2 — APPLY + POSTFLIGHT

Run:
`02-APPLY.bat`

It:
- repeats preflight;
- creates timestamped backups;
- applies only manifest-declared byte-range patch operations;
- verifies all final candidate SHAs;
- checks CSS brace/comment balance;
- runs PHP lint when `php.exe` is available in PATH;
- automatically restores the entire three-file batch if a required final identity/structure check fails;
- writes `LOGS/POSTFLIGHT-RESULT.txt`.

Required result:
`POSTFLIGHT: PASS`

## Transparent audit contents

Package includes:
- `PATCH-MANIFEST.json`
- `CHANGE-MANIFEST.md`
- `AUDIT/FULL-DIFF-functions.php.diff`
- `AUDIT/FULL-DIFF-thankyou.php.diff`
- `AUDIT/FULL-DIFF-spatial-flow.css.diff`
- inspectable PowerShell source under `CORE/`

Generated exact patch operation counts:
- functions.php: 13 machine byte-range hunks
- thankyou.php: 33 machine byte-range hunks
- spatial-flow.css: 62 machine byte-range hunks

The higher machine-hunk count compared with the human 5-Part package reflects granular diff opcodes, not additional authorised product scope.

## Build-time verification

Before packaging, every manifest patch set was independently applied to the exact baseline bytes and asserted byte-identical to its corresponding candidate file.

Expected final SHA256:
- functions.php: `e1b4842345d7ccfa5057f4dc568dbd1705cf13f86606b78c81c009c3a521891f`
- thankyou.php: `4aee09c6f26420c388d15da9a4a12fe247b49a70bdb065725f5d705553ab90cc`
- spatial-flow.css: `cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9`

## Timing rule

Package preparation/build time is excluded.

User execution timer begins when they begin Step 1 after extracting the package and stops when Step 2 displays final PASS/FAIL.

Method A benchmark remains:
- 5 minutes
- 0 functional errors
- 0 functional rework
- two non-functional whitespace differences accepted

Status: METHOD B PACKAGE READY FOR USER TIMED EXECUTION.
