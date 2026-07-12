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
Step 4E-B2-R2 consolidation：Present and structurally valid.
Step 4E-B2-R2-FIX1 desktop structure：Passed.
Step 4E-B2-R2-FIX2 desktop detail：Passed exactly.
Step 4E-B2-R3-A mobile structure：Passed.
Step 4E-B2-R3-FIX3 duplicate unit price：Passed exactly.
Step 4E-B2-R4 native functional regression：Passed.
Append-only Cart visual refinement：Frozen.
Current executable step：Step 4E-B2-R5-A ownership and cleanup audit / no code changes.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R3_FIX3_VALIDATION.md
project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
```

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no Cart template override
- no Cart JavaScript unless a real native interaction defect is proved
- no large structural CSS deletion before replacement ownership is validated
- no routine FIX4 or further append-only visual patch
- no claim of completion before cleanup, backend editability and final acceptance pass
- V2 mobile static references are guidance, not authority when they produce weak phone UX
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

PHP remains unchanged throughout B2 cleanup.

## Current exact CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Braces: 4,127 / 4,127
Comments: 405 / 405
CSS parse errors: 0
R2 markers: 1 / 1
FIX1 markers: 1 / 1
FIX2 markers: 1 / 1
FIX3 markers: 1 / 1
```

## Passed browser and functional gates

```text
Desktop:
- centered 7fr / 5fr layout
- stable product rows and Coupon controls
- integrated summary structure
- four real recommendation products
- Header and Footer intact

Mobile:
- one-column flow
- no horizontal overflow
- one subtotal price per product card
- visible quantity/remove controls
- stacked Coupon controls
- full-width Order Summary
- single-column recommendations
- Footer intact

Native behavior:
- quantity/update
- remove/undo
- Coupon paths
- shipping address
- SAFE5 Checkout
- Continue Shopping
- recommendation links
- mobile Menu and Footer accordion
- no warning/fatal/blank page
```

## Current CSS debt inventory

Historical Cart visual stack:

```text
15 blocks
117,141 bytes
3,798 lines
456 rule/media-query brace pairs
```

Validated R2/FIX stack:

```text
46,765 bytes
1,470 lines
209 rule/media-query brace pairs
```

The historical stack was intentionally retained while R2 was being proven because the earlier deletion-first attempt collapsed the page. That temporary exception is now closed.

## Current executable step

### Step 4E-B2-R5-A · Ownership and cleanup audit

```text
Mode：no code changes.
Source of truth：spatial-flow(10).css only.
Instruction：project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md.
```

Required audit output:

```text
- responsibility matrix for each Cart component
- declarations R2 still inherits from legacy
- declarations fully superseded by R2
- exact canonical replacement boundary
- safe small deletion batches
- predicted metrics and rollback for each operation
```

No new Cart CSS is authorized during R5-A.