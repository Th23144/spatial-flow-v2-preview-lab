# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-12  
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
Step 4E-B2-R2 insertion：Present and structurally valid.
Step 4E-B2-R2-FIX1 exact file：Passed.
Step 4E-B2-R2-FIX1 desktop structure：Passed.
Step 4E-B2-R2-FIX2 instructions：Issued / user insertion pending.
Mobile/functional validation on current baseline：Pending.
Old B2-A2 deletion-first continuation：Withdrawn permanently.
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
project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
project2-progress/STEP_4E_B2_R2_VISUAL_VALIDATION.md
project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md
project2-progress/STEP_4E_B2_R2_FIX1_VALIDATION.md
project2-progress/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.md
project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css
project2-progress/snippets/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.css
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

Every executable operation must include exact anchors, expected delta, parser/balance checks, visible expectation, independent rollback and required evidence.

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

PHP remains unchanged throughout B2.

## Current exact CSS baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(8).css
Size: 804,062 bytes
Logical lines: 26,925
SHA256: e6e053efad50191dfd147ca72b0cf76888eeae194f156f4b634b02e6186edb86
Braces: 4,076 / 4,076
Comments: 401 / 401
CSS parse errors: 0
R2 START / END markers: 1 / 1
FIX1 START / END markers: 1 / 1
```

This file exactly matches the expected FIX1 size and SHA256. The user's manual insertion was exact.

## FIX1 validation result

```text
Passed:
- Astra outer width chain released
- Cart frame centered
- 7fr / 5fr product-list + Order Summary structure visible
- recommendation dark shell overridden
- recommendation text readable
- four live WooCommerce recommendations remain
- Header intact

Still pending:
- desktop spacing and typography 1:1 refinement
- product-row proportions, meta/remove placement and alignment
- Order Summary heading/internal rhythm
- Coupon/action-row exact sizing
- recommendation media/text/CTA alignment
- mobile screenshot and mobile validation
- native quantity/remove/Coupon/shipping/Checkout/Continue Shopping regression
- SAFE5 Checkout no-regression confirmation
```

FIX1 passed only its narrow structural purpose. It does not complete the Cart page.

## Current executable step

### Step 4E-B2-R2-FIX2 · Desktop 1:1 detail pass

```text
Mode：one bounded desktop-only insertion inside the existing R2 ownership range.
File：assets/css/spatial-flow.css only.
Current exact baseline：spatial-flow(8).css.
Snippet：project2-progress/snippets/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.css.
Instruction：project2-progress/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.md.
Insertion point：immediately before the existing main B2-R2 END marker.
Legacy deletion：Forbidden.
PHP / JS / templates：No changes.
Mobile rules：No changes; every FIX2 rule is inside min-width 1101px.
```

Exact FIX2 snippet:

```text
Size: 9,328 bytes
Logical lines: 279
SHA256: 359a1012bb1c39a402747a429117068ca9af94b9410ad0e3b61b9cb26d929f6a
Braces: 49 / 49
Comments: 2 / 2
CSS parse errors: 0
```

Expected stylesheet after exact insertion:

```text
Size: 813,392 bytes
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8
Braces: 4,125 / 4,125
Comments: 403 / 403
CSS parse errors: 0
```

FIX2 addresses only:

```text
- desktop Cart spacing and typography
- product-row columns, image scale, padding and alignment
- metadata/remove placement and duplicate product-price suppression
- Order Summary title integration and vertical rhythm
- Coupon/action-row dimensions
- recommendation square media, typography and price/CTA alignment
```

Required evidence after FIX2:

```text
- edited spatial-flow.css
- desktop Cart screenshot including heading, all visible rows, complete summary and all four recommendations
- exact file metrics and parser/balance checks
- confirmation that no native Cart control disappeared
- confirmation that Header/Footer remained normal
```

Mobile and full native functional validation follow only after the desktop bounded pass is accepted.

Do not remove any old Cart CSS until desktop, mobile and native functional validation all pass.