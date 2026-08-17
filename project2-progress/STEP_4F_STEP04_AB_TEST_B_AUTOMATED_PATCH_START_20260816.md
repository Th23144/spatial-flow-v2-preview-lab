# Step 4F · Step04 A/B Test — Method B Automated Patch Start

Date: 2026-08-16
Local start context: after user accepted A-group result and explicitly said to begin B-group.

## Purpose

Run the second arm of the Step04 deployment-method comparison using an automated, transparent patch workflow rather than manual copy/paste.

## Fairness controls

Method B must:
- start from the same verified 2.7.13 baseline sources used for Method A;
- target the same Step04 2.7.15 candidate outcome;
- keep package-preparation time outside the user's measured execution time;
- measure only user execution of the CHECK/APPLY workflow;
- compare speed, interaction count, human error/rework, transparency, and verification burden against Method A.

## Baseline identity

functions.php
- bytes: 609465
- SHA256: 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631

woocommerce/checkout/thankyou.php
- bytes: 23174
- SHA256: 6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa

assets/css/spatial-flow.css
- bytes: 577717
- SHA256: 4d54dcfc1bee2f55bbdd93df1e31cc0e155d6b9cdff917f141086bc25a2bb4b3

## Candidate identity

functions.php
- bytes: 612015
- SHA256: e1b4842345d7ccfa5057f4dc568dbd1705cf13f86606b78c81c009c3a521891f

woocommerce/checkout/thankyou.php
- bytes: 43716
- SHA256: 4aee09c6f26420c388d15da9a4a12fe247b49a70bdb065725f5d705553ab90cc

assets/css/spatial-flow.css
- bytes: 587216
- SHA256: cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9

## Required B-group behavior

1. `01-CHECK-ONLY.bat`
   - MUST NOT modify target files.
   - verify exact baseline SHA values;
   - verify the patch can transform the exact baseline into the published candidate SHAs in memory;
   - report PASS/FAIL.

2. `02-APPLY.bat`
   - re-run preflight;
   - create timestamped backups;
   - apply only the audited patch payload;
   - verify all resulting SHAs;
   - run available syntax/structure checks;
   - rollback the entire batch if any required postflight identity check fails;
   - write a result log.

## Transparency artifacts

The delivery must include human-readable full diffs and a change manifest so the automated script cannot be treated as a black box.

## Current Method A benchmark

- user execution time: 5 minutes
- functional/logic replacement errors: 0
- functional rework: 0
- non-functional whitespace differences: 2, accepted as formatting-only and not counted as failure

Status: METHOD B PREPARATION STARTED.
