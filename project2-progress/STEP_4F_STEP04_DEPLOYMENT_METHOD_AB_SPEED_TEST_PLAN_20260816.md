# Project 2 · Step 04 Deployment Method A/B Speed Test Plan

Date: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User decision under test

The user wants a controlled variable test before choosing the long-term Project-2 deployment method.

Compare:

- Group A — existing manual anchored replacement workflow
- Group B — verified automatic patch workflow with two-stage verification

The final method is NOT chosen yet.

## Experimental rule

Both groups must start from the SAME verified 2.7.13 baseline copies and must target the SAME Step-04 2.7.15 source candidate.

The experiment must not use the live theme as the test surface. Use offline duplicate working copies so neither group can contaminate production/local runtime state.

Baseline fingerprints:

```text
functions.php
609,465 bytes
11,657 logical lines
SHA256 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631

woocommerce/checkout/thankyou.php
23,174 bytes
341 logical lines
SHA256 6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa

assets/css/spatial-flow.css
577,717 bytes
20,284 logical lines
SHA256 4d54dcfc1bee2f55bbdd93df1e31cc0e155d6b9cdff917f141086bc25a2bb4b3
```

Target candidate fingerprints:

```text
functions.php
612,015 bytes
11,691 logical lines
SHA256 e1b4842345d7ccfa5057f4dc568dbd1705cf13f86606b78c81c009c3a521891f

woocommerce/checkout/thankyou.php
43,716 bytes
579 logical lines
SHA256 4aee09c6f26420c388d15da9a4a12fe247b49a70bdb065725f5d705553ab90cc

assets/css/spatial-flow.css
587,216 bytes
20,639 logical lines
SHA256 cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9
```

## Group A — Manual anchored replacement

Workflow:

```text
assistant gives bounded replacement Part
→ user manually searches exact old anchor/code
→ user confirms expected match count
→ user replaces manually in Kiro
→ user returns/supplies edited file
→ assistant validates size/lines/SHA/syntax
→ next Part
```

Use the actual Project-2 manual replacement policy. Do not simplify Group A merely to make the test easier.

## Group B — Verified automatic patch

Two-stage workflow:

### Stage 1 — CHECK ONLY

Must make NO modifications.

Checks:

```text
baseline files match expected SHA
patch source/target identities match
full machine diff available
all changed hunks are covered by Change Manifest
all hunks stay inside approved scope/whitelist
protected Project-2 areas show zero unintended changes
required local execution capability is available
```

Only if Stage 1 is PASS may Stage 2 be offered.

### Stage 2 — APPLY + VERIFY

```text
create backup
→ apply patch to offline duplicate baseline
→ verify exact target bytes/lines/SHA
→ run applicable PHP/CSS structural checks
→ if any check fails, restore the duplicate from backup
```

The first A/B experiment must remain offline; it must not modify the live child theme.

## Objective correctness condition

The experiment has a decisive correctness check:

```text
Group A output SHA == target candidate SHA
AND
Group B output SHA == target candidate SHA
```

If both are exact, both methods produced byte-identical candidate files.

If either differs, that method records an execution error and must be diagnosed before timing conclusions are trusted.

## Metrics

Measure at minimum:

```text
1. user active time
2. assistant waiting/verification rounds
3. total elapsed interaction time
4. number of manual search/replace operations
5. number of files the user must return for validation
6. mistakes/mismatched anchors/retries
7. final SHA correctness
8. user confidence / ease-of-review
```

Timing should begin only when the user starts actual Group execution and end when that group's three output files pass exact target verification.

Do not count planning time that only one method happens to require because it was developed first; compare repeatable operational time.

## Order-bias control

The user may run either group first, but record the order because the second group may benefit from familiarity with the change scope.

For the final long-term choice, speed is not the only criterion. Consider:

```text
- correctness
- auditability
- rollback clarity
- user confidence
- cognitive/manual burden
- repeatability across future large files
```

## Live deployment after experiment

Do NOT deploy both methods to live.

After the A/B test is complete and the user chooses the preferred method, use only the chosen method to perform the real Step-04 deployment from the still-untouched verified live baseline.

Then return-source verify and begin the consolidated Step-04 runtime/1:1 acceptance batch.

## Status

```text
A/B plan: LOCKED
Group A execution: NOT STARTED
Group B execution: NOT STARTED
Live Step04 deployment: NOT STARTED
Final Project-2 deployment method: UNDECIDED
```
