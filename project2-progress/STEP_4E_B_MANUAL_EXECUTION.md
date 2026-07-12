# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion：Executed exactly but rejected after browser collapse.
Step 4E-B2-A1 rollback：Passed exactly at browser and file levels.
Step 4E-B2-R1 dependency re-audit：Complete.
Old B2-A2 deletion-first continuation：Withdrawn permanently.
Next executable code step：Step 4E-B2-R2.
Cart page status：Not done.
```

## Current authoritative records

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
project2-progress/STEP_4E_B1_H_VALIDATION.md
project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
```

The failure-and-rollback records supersede the prior deletion-first B2 plan.

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file as the implementation method
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no later substep before the previous file is re-read or exact metrics are verified
- no Cart template override
- no Cart-specific JavaScript unless a real native interaction defect is proved
- no large structural CSS deletion before a validated replacement owns the same layout responsibility
- no deletion in the same operation that first introduces the replacement structure
```

Every executable operation must include exact anchors, expected delta, parser/balance checks, visible expectation, independent rollback, and required evidence.

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
```

PHP remained unchanged throughout B2-A1 and its rollback.

## Current accepted CSS baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(6).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parse errors: 0
```

Exact comparison:

```text
spatial-flow(6).css == accepted spatial-flow(4).css byte-for-byte：True
Different bytes：0
```

## Rejected B2-A1 output

```text
Uploaded name: spatial-flow(5).css
Size: 731,426 bytes
Lines: 24,531
SHA256: ff341433f0b57881da4962028e5242fa1f5b56fdc40e3c08d7222811870a3487
Braces: 3,764 / 3,764
Comments: 368 / 368
CSS parse errors: 0
Browser result: Failed
```

The rejected output exactly matched the requested deletion. The user made no editing error.

## Dependency re-audit result

The accepted CSS contains 15 named Cart visual blocks totaling approximately:

```text
3,780 lines
117,124 bytes
456 rule/media braces
37 media-query declarations
```

Current desktop/mobile behavior is produced by cascade interaction across those layers. Critical structure is shared across the old and later blocks, so another deletion-first batch is prohibited.

Authoritative map:

```text
project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
```

## Current executable phase

### Step 4E-B2-R2 · Complete scoped Cart V2 consolidation layer

```text
Mode：replacement layer first; deletion forbidden in this operation.
File：assets/css/spatial-flow.css only.
Scope：body.woocommerce-cart only.
Required ownership：desktop frame/grid, table columns, action row, totals, mobile cards, recommendation breakpoints.
Insertion marker：must be fixed and exact.
Validation：file metrics + CSS parser + desktop/mobile + native Cart controls.
Legacy cleanup：only after B2-R2 passes.
```

B2-R2 manual CSS has not yet been issued. It must first be generated and statically validated against the exact `spatial-flow(6).css` baseline.

No user edit is required during the B2-R2 design pass.