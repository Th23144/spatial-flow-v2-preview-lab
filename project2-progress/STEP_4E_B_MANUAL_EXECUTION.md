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
Step 4E-B2-R3-A mobile baseline audit：Pending.
Native functional validation on current baseline：Pending.
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
project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md
project2-progress/STEP_4E_B2_R3_A_MOBILE_BASELINE_AUDIT.md
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

This file exactly matches the predicted FIX2 result. The user's manual insertion was exact.

## Desktop acceptance result

```text
Passed:
- Astra width chain remains released
- centered 7fr / 5fr composition remains stable
- product-row proportions and alignment improved
- duplicate desktop product-price cells suppressed
- Coupon action bar stable
- Order Summary heading integrated
- recommendation images/cards aligned in one live four-product row
- Header and Footer intact
- no desktop overlap or collapse visible

Accepted dynamic differences:
- live WooCommerce titles, metadata, prices, shipping and totals
- real WooCommerce missing-image placeholder on the fourth recommendation
```

Desktop FIX2 is accepted for progression. No more desktop changes are authorized unless mobile or functional regression reveals a concrete desktop defect.

## Current executable step

### Step 4E-B2-R3-A · Mobile current-baseline audit

```text
Mode：visual audit only / no file changes.
Baseline：spatial-flow(9).css.
Viewport：430 CSS px or narrower.
Required：one full-page mobile Cart screenshot.
Also report：horizontal overflow yes/no; missing/unusable native controls yes/no.
```

The screenshot must include:

```text
- mobile Header
- Your Bag heading and live count
- Cart product rows
- quantity and remove controls
- Coupon / Apply Coupon / Update Cart
- complete Order Summary
- Proceed to Checkout / Continue Shopping
- four trust rows
- recommendation heading and cards
- mobile Footer
```

After the mobile audit:

```text
- acceptable mobile result → full native functional regression
- bounded mobile defects → one mobile-only correction range
- severe defect → independently removable mobile correction layer
```

Do not remove any old Cart CSS until desktop, mobile and native functional validation all pass.