# Step 4F · Step04 A/B Test — Method B V1 Preflight Failure

Date: 2026-08-16

## Observed result

The first Method B package failed during `01-CHECK-ONLY.bat` on the user's Windows machine with:

`DirectoryNotFoundException`

while attempting to write:

`LOGS/PRECHECK-RESULT.txt`

## Root cause

The package build created `LOGS/` and `BACKUP/` as empty directories, but the ZIP archive included files only. Standard ZIP extraction therefore did not recreate those empty directories.

The PowerShell script assumed `LOGS/` already existed and attempted to write the preflight log without first creating the directory.

## Classification

- User error: NO
- Windows / PowerShell environment deficiency: NO
- Patch scope / candidate integrity failure: NO evidence
- Method B tool implementation defect: YES
- Live website touched: NO
- Test target files modified by this failed CHECK run: NO

## Timing treatment

This failed run is excluded from Method B user execution time because the failure was caused by the supplied tool package itself.

However, the failure is retained as a Method B reliability / first-build defect in the final A/B comparison.

## Required fix

The runtime script must create required working directories itself before any logging or backup operation:

- `LOGS/`
- `BACKUP/`

The corrected package must be freshly generated and the official Method B timed run must restart from a clean 2.7.13 bundled baseline.

Status: V1 FAILED / FIX REQUIRED.
