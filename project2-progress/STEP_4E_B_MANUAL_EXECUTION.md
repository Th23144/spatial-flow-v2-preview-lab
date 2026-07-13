# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion：Rejected and rolled back exactly.
Step 4E-B2-R1 dependency re-audit：Complete.
Step 4E-B2-R2 / FIX1 / FIX2 / FIX3：Historical temporary takeover sequence complete.
Step 4E-B2-R4 native functional regression：Passed before canonical replacement.
Step 4E-B2-R5-A1 visual-gap and ownership audit：Complete.
Step 4E-B2-R5-B canonical in-place replacement：Applied exactly.
R5-B strict visual gate：Not passed.
Current executable step：Step 4E-B2-R5-B1 mobile remove-control contrast correction.
Historical Cart CSS deletion：Blocked.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_B1_MOBILE_REMOVE_CONTRAST.md
project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
```

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no Cart template override
- no Cart JavaScript unless a reproduced native interaction defect requires it
- no routine append-only Cart visual patch
- corrections inside the canonical layer must be in-place replacements
- no historical cleanup before the complete R5-B visual/function gate passes
- no claim of final desktop/mobile acceptance while known blockers remain
- V2 mobile references are guidance, not authority when they produce weak phone UX
```

## Current PHP baseline

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
```

PHP remains unchanged throughout R5-B, R5-B1 and the later CSS cleanup.

## Current exact CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(11).css
Size: 811,826 bytes
Logical lines: 27,089
SHA256: 11e4c7b25cdf4c8beaf420dc4b5da1b0801a611679d4f85019bb1228d17d0b1e
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parse errors: 0
Canonical START / END: 1 / 1
Old R2 START / END: 0 / 0
FIX1 / FIX2 / FIX3 markers: 0
Cart Notice START: 1
```

Canonical range:

```text
Size: 44,703 bytes
Logical lines: 1,343
SHA256: 4ea330724a30edfd5801ff7e22d4756ba06955210fe7bc7f325ce9dcec79111b
Braces: 156 / 156
Comments: 16 / 16
```

The uploaded canonical range is byte-identical to the generated artifact. The full-file one-byte difference from the earlier prediction is only final-newline state.

## R5-B visual result

Resolved or materially improved:

```text
- trust icon shells no longer intrude into trust copy
- duplicate phone × is gone
- desktop Remove is separated below metadata
- thumbnails fill their slots more consistently
- mobile Order Summary title is integrated into the panel
- desktop / phone structure remains stable
- four real recommendation products remain
- no visible phone horizontal overflow
```

Current blocker:

```text
The one remaining phone × is too low-contrast because its shell is transparent, its border is only 12% opacity and the glyph uses a light weight against a very light card.
```

This is not a duplicate-glyph defect. It is a canonical-layer contrast and affordance defect.

## Current executable operation

### Step 4E-B2-R5-B1 · Mobile remove-control contrast correction

```text
Mode：bounded in-place replacement inside the canonical block.
File：assets/css/spatial-flow.css only.
Source of truth：spatial-flow(11).css.
Append elsewhere：forbidden.
Historical deletion：forbidden.
PHP / JS / templates / version：unchanged.
```

Authoritative instruction:

```text
project2-progress/STEP_4E_B2_R5_B1_MOBILE_REMOVE_CONTRAST.md
```

Expected corrected CSS:

```text
Size: 811,839 bytes
Logical lines: 27,089
SHA256: 08f399cb3036768a9b00089ddd5be4067432ca37af533ef81148ccf8eb85c709
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
Delta: +13 bytes / 0 lines
```

Expected corrected canonical range:

```text
Size: 44,716 bytes
SHA256: 9a81a3adc2bbdfe2d56d1b6982e6da42ec292671525d7c784fde9de8645e7593
```

## CSS debt inventory

Historical Cart visual stack remains temporarily present:

```text
15 blocks
117,141 bytes
3,798 logical lines
456 rule/media-query brace pairs
```

It cannot be deleted before the corrected canonical layer proves full visual and functional ownership.

## Correct sequence

```text
R5-B1 in-place phone remove contrast correction
→ exact file validation
→ strict desktop/mobile and native-function validation for the complete R5-B gate
→ R5-C1 through R5-C4 staged historical deletion
→ R5-D backend editability and final acceptance
```

Cart remains `Not done` until all stages pass.