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
R5-B1 through R5-B5 remove-control diagnosis and correction：Passed.
Complete R5-B gate：Closed / Passed.
R5-C1 Cart Visual 1 through 1.4.1 deletion：Passed.
Current executable step：Step 4E-B2-R5-C2 bounded legacy deletion.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_C2_LEGACY_CART_VISUAL_2D_DELETION.md
project2-progress/STEP_4E_B2_R5_C1_VALIDATION.md
project2-progress/STEP_4E_B2_R5_C1_LEGACY_CART_VISUAL_1_DELETION.md
project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
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
Uploaded name: spatial-flow(15).css
Size: 776,795 bytes
Logical lines: 25,891
SHA256: 60cc0237ac69d45dd290bf86584f4a69a0ff672541540e8ba49a18b3c3b270bf
Braces: 3,921 / 3,921
Comments: 384 / 384
CSS parser errors: 0
```

The two-byte difference from the R5-C1 theoretical hash is an accepted removal of two empty newline characters at the deletion boundary. No selector, declaration or comment boundary changed.

## Closed gates

Confirmed through R5-C1:

```text
- canonical desktop structure stable
- production-quality phone structure stable
- product thumbnails fill their slots
- desktop Remove has an independent action row
- phone remove control uses one persistent refined Astra SVG
- trust icons no longer overflow into copy
- duplicate mobile price removed
- quantity, Coupon, checkout and navigation functions passed
- Cart Visual 1 through 1.4.1 no longer exists
```

Routine Cart visual appends remain forbidden.

## Remaining historical CSS debt

After R5-C1:

```text
R5-C2：Cart Visual 2-D through 2-D.8
R5-C3：Cart Visual 2-E
R5-C4：Cart Visual 3
```

## Current executable operation

### Step 4E-B2-R5-C2 · Delete Cart Visual 2-D through 2-D.8

Authoritative instructions:

```text
project2-progress/STEP_4E_B2_R5_C2_LEGACY_CART_VISUAL_2D_DELETION.md
```

Exact deletion markers:

```css
START:
/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===

END:
/* === Cart Visual 2-D.8 STABLE COUPON ROLLBACK + OVAL SUPPRESS END === */
```

Deleted range identity:

```text
Size: 67,757 bytes
Logical lines: 2,128
SHA256: 0dbddf8801c08d5b73193d5dc2acd3de5d423aaac3dc05f2e9d5ad8df04d7f7c
Braces: 232 / 232
Comments: 33 / 33
```

Expected file after exact deletion from the accepted R5-C1 baseline:

```text
Size: 709,038 bytes
Logical lines: 23,764
SHA256: 8246c99795fb778ad87e310f63d66d48665fbb7009ba2c2a88f0856de2be79f2
Braces: 3,689 / 3,689
Comments: 351 / 351
CSS parser errors: 0
```

Create a separate local bounded rollback copy of the selected range before deleting it.

## Remaining sequence

```text
R5-C2 deletion + exact file / desktop / phone / targeted-function validation
→ R5-C3 deletion + validation
→ R5-C4 deletion + validation
→ R5-D backend editability + strict desktop/mobile + full native-function acceptance
→ binary Cart status decision
```

Cart remains `Not done` until the complete sequence passes.