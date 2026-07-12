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
Step 4E-B1-G3：Passed exact CSS validation and user-confirmed desktop/mobile validation; screenshots not supplied.
Step 4E-B1-H：Exact PHP validation passed; Cart no-visible-regression confirmed; SAFE5 Checkout product-row confirmation pending.
Cart page status：Not done.
```

## Current authoritative records

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
project2-progress/STEP_4E_B1_G1_VALIDATION.md
project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
project2-progress/STEP_4E_B1_G2_VALIDATION.md
project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
project2-progress/STEP_4E_B1_G3_VALIDATION.md
project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
project2-progress/STEP_4E_B1_H_VALIDATION.md
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
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
Real recommendation output count: 4
Real backend fallback selectors: 4
Dead manual sample defaults: 0
Cart fabricated context fallback: removed outside Checkout context
```

The current Cart products contain real category/attribute context, so the user-reported lack of a visible Cart change is expected and accepted as no visible Cart regression.

## Current CSS baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(4).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parse errors: 0
Desktop four-column block: 1
Old authoritative unwrapped three-column block: 0
```

## Current validation gate

### Step 4E-B1-H · SAFE5 Checkout confirmation

```text
Completed:
- manual PHP replacement
- exact size, line, SHA256, brace and php -l validation
- Cart page no-visible-regression confirmation

Still required:
- explicit SAFE5 Checkout product-row confirmation
```

Required SAFE5 check:

```text
- product names remain normal
- product-row context/subtitle remains normal
- thumbnails remain normal
- quantities and totals remain normal
- no PHP warning or checkout layout regression appears
```

No screenshot is required. A direct textual confirmation is sufficient.

Do not begin Step 4E-B2-A1 until this final B1-H gate passes.

## Next planned executable step after the gate

```text
Step 4E-B2-A1 · Remove legacy Cart base CSS layers
```

This will be a deletion-only manual operation with exact START/END markers, predicted size/line delta, parser checks, independent rollback, and no simultaneous CSS insertion.
