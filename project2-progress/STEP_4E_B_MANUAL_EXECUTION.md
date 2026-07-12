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
Step 4E-B1-H：Passed exact PHP, Cart, and accepted SAFE5 gate validation.
Step 4E-B2-A1：Instructions issued / user CSS deletion pending.
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
project2-progress/STEP_4E_B1_H_VALIDATION.md
project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
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

Every executable operation must include exact anchors, exact replacement or deletion, expected delta, validation checks, visible expectation, rollback, and required evidence.

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
Real recommendation output count: 4
Real backend fallback selectors: 4
Dead manual sample defaults: 0
Cart fabricated context fallback: removed outside Checkout context
```

B1-H is fully accepted. The user instructed the project to enter the next step after the final SAFE5 gate was requested.

## Current CSS baseline before B2-A1

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

## Current executable step

### Step 4E-B2-A1 · Remove legacy Cart base CSS layers

```text
Mode：deletion only.
START：/* === Cart Visual 1 START ===
END：/* === Cart Visual 1.4.1 ACTION BUTTON OVERLAP FIX END === */
Also delete：the one immediately following blank line.
Stop before：/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===
Expected deletion：35,694 bytes / 1,213 lines.
Expected result：731,426 bytes / 24,531 lines.
Expected SHA256：ff341433f0b57881da4962028e5242fa1f5b56fdc40e3c08d7222811870a3487.
Expected braces：3,764 / 3,764.
Expected comments：368 / 368.
Expected CSS parser errors：0.
```

Authoritative instruction file:

```text
project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
```

Do not insert new Cart CSS in B2-A1. Do not begin B2-A2 until the edited CSS passes exact file validation.