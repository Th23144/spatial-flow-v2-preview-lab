# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion-first attempt：Rejected and rolled back exactly.
Step 4E-B2-R1 dependency re-audit：Complete.
Step 4E-B2-R2 / FIX1 / FIX2 / FIX3：Historical temporary takeover sequence complete.
Step 4E-B2-R4 native functional regression：Passed.
Step 4E-B2-R5-A1 visual-gap and ownership audit：Complete.
Step 4E-B2-R5-B canonical in-place replacement：Passed.
R5-B1 / B2 / B3 / B4 / B5 remove-control diagnosis and correction：Complete.
R5-B5 Remove / Undo / Restore recheck：Passed.
Complete R5-B gate：Closed / Passed.
Current executable step：Step 4E-B2-R5-C1 bounded legacy deletion.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_C1_LEGACY_CART_VISUAL_1_DELETION.md
project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
project2-progress/STEP_4E_B2_R5_B5_REMOVE_ICON_REFINEMENT.md
project2-progress/STEP_4E_B2_R5_B4_REMOVE_ICON_OWNERSHIP.md
project2-progress/STEP_4E_B2_R5_B3_DIAGNOSIS_RESULT.md
project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
```

## Non-negotiable execution rule

```text
- no ZIP or complete replacement theme file
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no Cart template override
- no Cart JavaScript unless a reproduced native interaction defect requires it
- no routine append-only Cart visual patch
- use bounded in-place replacement/removal only
- every deletion batch must be independently reversible
- validate the edited file before browser acceptance
- do not begin the next deletion batch before the current batch passes
- do not change Cart to Completed 1:1 before R5-D
- V2 mobile references are guidance; production-quality phone UX takes priority
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

PHP remains unchanged throughout R5-C cleanup.

## Current exactly validated CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(14).css
Size: 812,489 bytes
Logical lines: 27,104
SHA256: 53c2efa74e6975912191f0e522f97ce5ec2a8148fc8f808a8c481492d07e5c59
Braces: 4,075 / 4,075
Comments: 413 / 413
CSS parser errors: 0
Canonical START / END: 1 / 1
Old R2 / FIX markers: 0
Cart Notice START: 1
```

## Closed R5-B gate

The accepted canonical layer now owns the active Cart presentation.

Confirmed:

```text
- desktop structure stable
- production-quality phone structure stable
- product thumbnails fill their slots
- desktop Remove has an independent action row
- phone remove control uses one persistent refined Astra SVG
- trust icons no longer overflow into copy
- duplicate mobile price removed
- quantity, Coupon, address, checkout, recommendation and navigation functions passed
- final targeted Remove / Undo / Restore recheck passed
```

Routine Cart visual appends remain forbidden.

## CSS debt inventory before R5-C1

Historical Cart stack still present:

```text
15 blocks
117,141 bytes
3,798 logical lines
456 rule/media-query brace pairs
```

Cleanup sequence:

```text
R5-C1：Cart Visual 1 through 1.4.1
R5-C2：Cart Visual 2-D through 2-D.8
R5-C3：Cart Visual 2-E
R5-C4：Cart Visual 3
```

## Current executable operation

### Step 4E-B2-R5-C1 · Delete Cart Visual 1 through 1.4.1

Authoritative instructions:

```text
project2-progress/STEP_4E_B2_R5_C1_LEGACY_CART_VISUAL_1_DELETION.md
```

Exact deletion markers:

```css
START:
/* === Cart Visual 1 START ===

END:
/* === Cart Visual 1.4.1 ACTION BUTTON OVERLAP FIX END === */
```

Deleted range:

```text
35,692 bytes
1,212 logical lines
SHA256: 4ca2a01bba053a9e04a509474d27122d2f77d78a50927b932a55520da64253b2
```

Expected file after exact deletion:

```text
Size: 776,797 bytes
Logical lines: 25,893
SHA256: 73d3cf9a76b9c3f5359254b4612948b735ae2b9157063a359e05f80dc8a9db73
Braces: 3,921 / 3,921
Comments: 384 / 384
CSS parser errors: 0
```

Bounded rollback source:

```text
project2-progress/rollback/STEP_4E_B2_R5_C1_CART_VISUAL_1_TO_1_4_1.css
```

## Remaining sequence

```text
R5-C1 exact deletion + desktop/phone/targeted-function validation
→ R5-C2 exact deletion + validation
→ R5-C3 exact deletion + validation
→ R5-C4 exact deletion + validation
→ R5-D backend editability + strict desktop/mobile + full functional acceptance
→ binary Cart status decision
```

Cart remains `Not done` until the complete sequence passes.