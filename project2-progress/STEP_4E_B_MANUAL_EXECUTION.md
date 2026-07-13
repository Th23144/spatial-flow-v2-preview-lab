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
Step 4E-B2-R5-A1 visual-gap and ownership audit：Complete.
Current executable step：Step 4E-B2-R5-B canonical in-place replacement.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
project2-progress/STEP_4E_B2_R5_A1_FINAL_VISUAL_GAP_AND_OWNERSHIP_AUDIT.md
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
project2-progress/STEP_4E_B2_R3_FIX3_VALIDATION.md
project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
```

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no Cart template override
- no Cart JavaScript unless a real native interaction defect is proved
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

PHP remains unchanged throughout the current CSS replacement and cleanup phase.

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

These gates do not equal final strict 1:1 approval.

## Confirmed blocking visual gaps

```text
1. desktop/mobile trust-icon shells overflow and intrude into trust-row text
2. mobile remove controls show two × glyphs
3. desktop/mobile thumbnails do not visually fill their allocated frames
4. desktop textual Remove action collides with dynamic metadata
5. wider spacing, typography and proportion differences remain against the V2 target
```

## R5-A1 completed audit

Authoritative completed audit:

```text
project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
```

It records:

```text
- complete desktop/mobile discrepancy matrix
- selector/declaration responsibility matrix
- root causes for all confirmed blockers
- historical declarations still inherited by R2
- historical responsibilities already superseded in purpose
- exact R5-B replacement boundary and rollback
- exact R5-C1 through R5-C4 deletion metrics
```

## Current CSS debt inventory

Historical Cart visual stack:

```text
15 blocks
117,141 bytes
3,798 logical lines
456 rule/media-query brace pairs
```

Temporary R2/FIX stack:

```text
46,765 bytes
1,470 logical lines
209 rule/media-query brace pairs
```

The historical stack was retained while replacement ownership was being proved. That temporary exception is frozen. Cleanup cannot start until the canonical replacement closes the visible defects and proves full ownership.

## Current executable step

### Step 4E-B2-R5-B · Canonical Cart block replacement

```text
Mode：one bounded in-place replacement.
File：assets/css/spatial-flow.css only.
Source of truth：spatial-flow(10).css.
PHP / JS / templates：unchanged.
Append elsewhere：forbidden.
Historical deletion in this step：forbidden.
```

Replace exactly the complete current range:

```text
START:
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer START ===

END:
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

The replacement remains at the same position immediately before:

```text
/* === Step 4E Cart Notice Toast START ===
```

The canonical block must:

```text
- integrate R2 + FIX1 + FIX2 + FIX3 into one formal Cart layer
- resolve all confirmed visual blockers
- own desktop and mobile Cart presentation completely
- preserve native WooCommerce behavior and real dynamic data
- preserve the separate Cart Notice Toast
- preserve Header, Footer, Shop, Single Product and SAFE5 Checkout
```

Independent rollback:

```text
Save the complete existing 46,765-byte R2/FIX range before replacement.
If validation fails, restore only that range at the same boundary.
Do not overwrite the full stylesheet as the default rollback.
```

R5-B cannot be marked passed until exact file validation, strict desktop review, production-quality mobile review and native Cart regression all pass.

## Correct sequence from here

```text
R5-B canonical in-place replacement
→ strict desktop/mobile and native-function validation
→ R5-C staged historical deletion
→ R5-D backend editability and final acceptance
```
