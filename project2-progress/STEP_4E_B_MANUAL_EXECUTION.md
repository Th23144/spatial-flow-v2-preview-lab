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
Step 4E-B2-R2-FIX2 exact file：Passed exactly.
Step 4E-B2-R2-FIX2 desktop detail pass：Accepted.
Step 4E-B2-R3-A mobile baseline audit：Passed.
Horizontal overflow：No.
Mobile FIX3：Not required.
Step 4E-B2-R4 native functional regression：Active.
Old B2-A2 deletion-first continuation：Withdrawn permanently.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
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
project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md
project2-progress/STEP_4E_B2_R3_A_MOBILE_BASELINE_AUDIT.md
project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
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
- mobile static references are guidance, not authority when they produce poor phone UX
```

Every executable operation must include exact anchors, expected delta, parser/balance checks, visible expectation, independent rollback and required evidence.

## Mobile design-quality rule

Project 2 mobile review now follows this hierarchy:

```text
1. preserve native behavior and real dynamic data
2. prevent overflow, clipping, overlap and unusable controls
3. preserve Spatial Flow visual language
4. use professional visual judgment for spacing, readability, density and touch targets
5. follow V2 static mobile composition only where it is genuinely well designed
```

A later mobile aesthetic re-audit is required for Shop archive and Single Product. Their current binary status is unchanged until a concrete defect is found.

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
Uploaded name: spatial-flow(9).css
Size: 813,392 bytes
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8
Braces: 4,125 / 4,125
Comments: 403 / 403
CSS parse errors: 0
R2 START / END markers: 1 / 1
FIX1 START / END markers: 1 / 1
FIX2 START / END markers: 1 / 1
```

This file exactly matches the predicted FIX2 result.

## Desktop acceptance result

```text
- centered 7fr / 5fr composition stable
- product-row proportions and alignment improved
- duplicate desktop product-price cells suppressed
- Coupon action bar stable
- Order Summary heading integrated
- four live WooCommerce recommendations aligned
- Header and Footer intact
- no desktop overlap or collapse
```

Accepted live-data differences include real WooCommerce titles, metadata, prices, shipping, totals and the real missing-image placeholder.

## Mobile acceptance result

```text
- one-column mobile Cart flow stable
- product rows remain inside viewport
- quantity and circular remove controls visible
- Coupon controls stack without clipping
- full-width non-sticky Order Summary
- recommendations single-column with no half-card exposure
- Footer intact
- horizontal overflow：No
```

No mobile-only FIX3 is required.

## Current executable step

### Step 4E-B2-R4 · Native Cart functional regression

```text
Mode：plain-language interaction tests / no file changes unless a defect is reproduced.
Baseline：spatial-flow(9).css + functions.php 2.7.8.
Instruction：project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md.
```

Required checks:

```text
- quantity plus/minus and Update Cart
- remove item and Undo/Restore
- invalid Coupon error path
- valid Coupon apply/remove when available
- Change address and shipping refresh
- Proceed to Checkout and SAFE5 load
- Continue Shopping
- recommendation links
- mobile Menu and Footer accordions
- final overflow/warning safety check
```

Do not remove any old Cart CSS until desktop, mobile and native functional validation all pass.