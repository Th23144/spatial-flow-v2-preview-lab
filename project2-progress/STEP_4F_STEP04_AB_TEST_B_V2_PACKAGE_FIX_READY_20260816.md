# Step 4F · Step04 A/B Test — Method B V2 Package Fix Ready

Date: 2026-08-16

## V1 failure addressed

V1 failed because ZIP extraction omitted empty `LOGS/` / `BACKUP/` directories and the PowerShell script assumed `LOGS/` already existed.

## V2 fix

The PowerShell runtime now creates both required working directories itself before any log or backup action:

- `LOGS/`
- `BACKUP/`

The ZIP also includes placeholder files in both directories, but runtime self-creation is the actual safety guarantee.

## Revalidation

Package-side reconstruction was rerun against the same exact Step04 A/B baseline/candidate pair.

Results:

- functions.php: PASS — 13 machine patch hunks
- thankyou.php: PASS — 33 machine patch hunks
- spatial-flow.css: PASS — 62 machine patch hunks
- runtime LOGS/BACKUP self-creation check: PASS

## V2 artifact

`STEP04_AB_B_AUTOMATED_PATCH_V2.zip`

SHA256:
`23787708ef0caaee9bc01bb23f9ae893522a7c0273ef069088546a4a18fd9fa9`

## Timing

The failed V1 attempt remains recorded as a Method B first-build reliability defect but is excluded from the official Method B user execution time.

The official B timer restarts when the user begins executing the corrected V2 package.

Status: V2 READY FOR OFFICIAL METHOD B TIMED RUN.
