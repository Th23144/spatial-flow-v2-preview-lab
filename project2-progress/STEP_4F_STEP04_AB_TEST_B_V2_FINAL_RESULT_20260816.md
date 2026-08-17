# Step 4F · Step04 A/B Test — Method B V2 Final Result

Date: 2026-08-16

## User-observed execution time

User reported: **less than 1 minute**.

The generated logs show:
- PRECHECK timestamp: 20:45:16
- POSTFLIGHT timestamp: 20:46:02
- log-to-log elapsed interval: 46 seconds

This is consistent with the user's report, but the user's own stopwatch is the authoritative human execution-time measurement.

## PRECHECK

All three exact 2.7.13 baseline copies matched their approved SHA256 values.

- functions.php baseline SHA: `62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631`
- thankyou.php baseline SHA: `6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa`
- spatial-flow.css baseline SHA: `4d54dcfc1bee2f55bbdd93df1e31cc0e155d6b9cdff917f141086bc25a2bb4b3`

Patch simulation reproduced the approved candidates:
- functions.php target SHA: `e1b4842345d7ccfa5057f4dc568dbd1705cf13f86606b78c81c009c3a521891f`
- thankyou.php target SHA: `4aee09c6f26420c388d15da9a4a12fe247b49a70bdb065725f5d705553ab90cc`
- spatial-flow.css target SHA: `cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9`

PRECHECK result: `SAFE TO APPLY: YES`.
CHECK mode confirmed read-only for target files.

## APPLY / POSTFLIGHT

Automatic timestamped backup created.

All three resulting files matched exact approved candidate SHA256 values.

PHP lint:
- functions.php: PASS
- thankyou.php: PASS

CSS structural validation:
- braces: 3283 / 3283
- comments: 275 / 275
- PASS

Final:
- `POSTFLIGHT: PASS`
- `ROLLBACK USED: NO`

## Important interpretation

The user reported that they did not visually feel any change. This is expected and not a failure: Method B was intentionally executed only against files bundled under `TEST-TARGET` inside the A/B package. It did not know or modify the live WordPress theme path, and no browser/runtime page was changed during this sandbox benchmark.

## Reliability note

Method B V1 had one package implementation defect: ZIP extraction omitted an empty `LOGS` directory and the script failed when attempting to write the precheck log. No target files were modified. V2 corrected this by creating runtime working directories itself and then passed fully.

For fair evaluation, keep two separate metrics:
1. successful user execution speed: <1 minute (logs span 46 seconds);
2. automation implementation maturity: one V1 tool defect requiring one package revision before the successful V2 run.

Status: METHOD B V2 SUCCESSFULLY COMPLETED.
