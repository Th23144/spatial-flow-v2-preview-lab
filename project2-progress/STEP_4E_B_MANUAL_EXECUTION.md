# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-F：Passed.
Step 4E-B1-G1：Passed exact file and no-visible-change validation.
Step 4E-B1-G2：Passed exact file validation and four-card browser evidence.
Step 4E-B1-G3：Instructions issued / user CSS edit pending.
Cart page status：Not done.
```

## Current authoritative records

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
project2-progress/STEP_4E_B1_G1_VALIDATION.md
project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
project2-progress/STEP_4E_B1_G2_VALIDATION.md
project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
```

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file as the implementation method
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no later substep before the previous file is re-read or exact metrics are verified
- no Cart template override
- no Cart-specific JavaScript unless a real native interaction defect is proved
```

Every executable operation must include exact anchors, exact replacement, expected delta, validation checks, visible expectation, rollback, and required evidence.

## Current PHP baseline

```text
File: functions.php
Uploaded name: functions(11).php
Version: 2.7.8
Size: 550,596 bytes
Lines: 10,248
SHA256: 1db56fccbcfaf2a744e631c5da71c14a9be66cec87d99946e906b8f3aa84366f
PHP syntax: Passed
Braces: 1,199 / 1,199
Real recommendation output count: 4
Real backend fallback selectors: 4
Dead manual sample defaults: 0
```

Browser evidence confirms four real product cards render. The unchanged three-column CSS currently produces the expected temporary 3 + 1 wrap.

## Current CSS baseline

```text
File: assets/css/spatial-flow.css
Size: 767,069 bytes
Lines: 25,742
SHA256: a8db33e2cd3e7886a12a455383fe6769cbd262e7e6d6fac8003aa46fe641a10d
Braces: 3,917 / 3,917
Comments: 397 / 397
CSS parse errors: 0
```

## Current executable step

### Step 4E-B1-G3 · Four-card recommendation layout

```text
Scope：replace the one authoritative desktop grid block with a >=1101px four-column block.
Expected result：767,120 bytes / 25,744 lines.
Expected SHA256：675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a.
Expected braces：3,918 / 3,918.
Expected comments：397 / 397.
Expected parser errors：0.
Visible result：four cards in one desktop row; existing tablet three-column and mobile one-column behavior preserved.
```

Do not begin later Cart CSS cleanup or refinement until the edited CSS and desktop/mobile evidence pass exact validation.