# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-F：Passed.
Step 4E-B1-G1：Passed exact file and no-visible-change validation.
Step 4E-B1-G2：Passed exact file validation and four-card browser evidence.
Step 4E-B1-G3：Passed exact CSS validation and user-confirmed desktop/mobile validation; screenshots not supplied.
Step 4E-B1-H：Instructions issued / user PHP edit pending.
Cart page status：Not done.
```

## Current authoritative records

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
project2-progress/STEP_4E_B1_G1_VALIDATION.md
project2-progress/STEP_4E_B1_G2_FOUR_REAL_RECOMMENDATIONS.md
project2-progress/STEP_4E_B1_G2_VALIDATION.md
project2-progress/STEP_4E_B1_G3_FOUR_COLUMN_LAYOUT.md
project2-progress/STEP_4E_B1_G3_VALIDATION.md
project2-progress/STEP_4E_B1_H_CART_CONTEXT_FALLBACK.md
```

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file as the implementation method
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no later substep before the previous file is re-read or exact metrics are verified
- no Cart template override
- no Cart-specific JavaScript unless a real native interaction defect is proved
```

Every executable operation must include exact anchors, exact replacement, expected delta, validation checks, visible expectation, rollback, and required evidence.

## Current PHP baseline

```text
File: functions.php
Uploaded name: functions(11).php
Version: 2.7.8
Size: 550,596 bytes
Lines: 10,248
SHA256: 1db56fccbcfaf2a744e631c5da71c14a9be66cec87d99946e906b8f3aa84366f
PHP syntax: Passed
Braces: 1,199 / 1,199
Real recommendation output count: 4
Real backend fallback selectors: 4
Dead manual sample defaults: 0
```

## Current CSS baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(4).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parse errors: 0
Desktop four-column block: 1
Old authoritative unwrapped three-column block: 0
```

The user confirmed desktop and mobile rendering are normal. No screenshots were supplied; this is recorded as user-confirmed browser validation.

## Current executable step

### Step 4E-B1-H · Cart-only product-context fallback safety

```text
Scope：change one exact fallback block inside spatial_flow_cart_visual_2_product_meta_text().
Purpose：Cart must not fabricate “Crystal piece · Modern spatial living” when no real source exists.
Preserve：_sf_cart_item_meta, category, selected variations, real configured attributes, and the prior SAFE5 Checkout fallback.
Expected result：550,884 bytes / 10,256 lines.
Expected SHA256：dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d.
Expected braces：1,200 / 1,200.
Expected PHP syntax：Passed.
```

Do not begin the B2 Cart CSS deletion batches until the edited PHP and Cart/SAFE5 behavior pass validation.
