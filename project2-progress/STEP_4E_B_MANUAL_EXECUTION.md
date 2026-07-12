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
Step 4E-B2-R2-FIX2 bounded desktop objective：Passed exactly.
Step 4E-B2-R3-A mobile structure：Passed.
Step 4E-B2-R3-FIX3 duplicate unit price：Passed exactly.
Step 4E-B2-R4 native functional regression：Passed.
Final strict desktop/mobile visual acceptance：Reopened / not passed.
Append-only Cart visual refinement：Frozen.
Current executable step：Step 4E-B2-R5-A1 visual-gap and ownership audit / no code changes.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_A1_FINAL_VISUAL_GAP_AND_OWNERSHIP_AUDIT.md
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
project2-progress/STEP_4E_B2_R3_FIX3_VALIDATION.md
project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md
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
- no historical cleanup before the canonical block closes the current visual gaps
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

PHP remains unchanged throughout the current CSS audit and cleanup phase.

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

## Passed non-final gates

```text
Structure:
- centered desktop 7fr / 5fr frame
- one-column mobile flow
- no horizontal overflow
- stable Coupon and Order Summary structure
- four real recommendation products

Function:
- quantity/update
- remove/undo
- Coupon paths
- shipping address
- SAFE5 Checkout
- Continue Shopping
- recommendation links
- mobile Menu and Footer accordion
- no warning/fatal/blank page

Bounded correction:
- one subtotal price per mobile product card
```

These are necessary gates but do not equal final strict 1:1 approval.

## Confirmed blocking visual gaps

```text
1. desktop/mobile trust-icon shells overflow and intrude into trust-row text
2. mobile remove controls show two × glyphs
3. desktop/mobile thumbnails do not visually fill their allocated frames
4. desktop textual Remove action collides with dynamic metadata
5. wider spacing, typography and proportion differences remain against the V2 target
```

Authoritative analysis:

```text
project2-progress/STEP_4E_B2_R5_A1_FINAL_VISUAL_GAP_AND_OWNERSHIP_AUDIT.md
```

## Current CSS debt inventory

Historical Cart visual stack:

```text
15 blocks
117,141 bytes
3,798 lines
456 rule/media-query brace pairs
```

Temporary R2/FIX stack:

```text
46,765 bytes
1,470 lines
209 rule/media-query brace pairs
```

The historical stack was retained while replacement ownership was being proved. The temporary exception is frozen, but cleanup cannot start until the canonical replacement also closes the visible defects.

## Current executable step

### Step 4E-B2-R5-A1 · Final visual-gap and ownership audit

```text
Mode：no code changes.
Source of truth：spatial-flow(10).css only.
Reference：preview/spatial-flow-cart-v1.html plus current real desktop/mobile screenshots.
Instruction：project2-progress/STEP_4E_B2_R5_A1_FINAL_VISUAL_GAP_AND_OWNERSHIP_AUDIT.md.
Plan：project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md.
```

Required output:

```text
- complete desktop/mobile discrepancy matrix
- selector/declaration ownership matrix
- root cause for each confirmed blocker
- declarations still inherited from legacy
- declarations fully superseded by R2
- one canonical in-place replacement specification
- predicted canonical metrics and independent rollback
- safe staged historical deletion batches
```

## Correct sequence from here

```text
R5-A1 audit only
→ R5-B replace R2 + FIX1 + FIX2 + FIX3 in place with one canonical block
→ strict desktop/mobile and native-function validation
→ R5-C staged historical deletion
→ R5-D backend editability and final acceptance
```

No new Cart CSS is authorized during R5-A1.