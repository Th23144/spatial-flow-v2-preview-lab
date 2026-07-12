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
Step 4E-B2-R2 insertion：Present and structurally valid.
Step 4E-B2-R2 desktop visual：Failed / correction required.
Step 4E-B2-R2-FIX1：Instructions issued / user insertion pending.
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
project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css
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

## Current CSS baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(7).css
Size: 800,567 bytes
Lines: 26,829
SHA256: fd1a0a43364070b04818e140572ac5447201d0b58476f234b0d329157c687864
Braces: 4,063 / 4,063
Comments: 399 / 399
CSS parse errors: 0
R2 START / END markers: 1 / 1
Original baseline bytes removed: 0
```

The file differs from the earlier theoretical R2 size/hash, but it contains one structurally complete parsed insertion and no original CSS deletion. The browser proves the layer is active.

## R2 desktop validation result

```text
Passed portions:
- native Cart title suppressed
- Your Bag and live count rendered
- new product-row structure active
- Order Summary panel active
- Continue Shopping present
- four real recommendation products remain
- Header and Footer intact

Blocking issues:
- Astra article/content ancestor still constrains the Cart to the left portion of the desktop viewport
- product rows are compressed inside that narrow ancestor
- historical higher-specificity recommendation selectors retain the dark rounded shell
- new dark recommendation text is low-contrast on the retained dark shell
```

No rollback is required. The failure is limited to two CSS ownership gaps.

## Current executable step

### Step 4E-B2-R2-FIX1 · Outer Width + Recommendation Specificity

```text
Mode：small insertion inside the existing R2 range.
File：assets/css/spatial-flow.css only.
Snippet：project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css
Instruction：project2-progress/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.md
Insertion point：immediately before the existing B2-R2 END marker.
Current exact baseline：spatial-flow(7).css.
Expected result size：804,062 bytes.
Expected result lines：26,925.
Expected SHA256：e6e053efad50191dfd147ca72b0cf76888eeae194f156f4b634b02e6186edb86.
Expected braces：4,076 / 4,076.
Expected comments：401 / 401.
Expected parser errors：0.
```

Required evidence after FIX1:

```text
- edited spatial-flow.css
- desktop Cart screenshot
- mobile Cart screenshot
- native quantity/remove/coupon/shipping/checkout/continue-shopping confirmation
- Header/Footer/Shop/Single Product/SAFE5 Checkout no-regression confirmation
```

Do not remove any old Cart CSS until FIX1 and the complete R2 desktop/mobile/functional validation pass.