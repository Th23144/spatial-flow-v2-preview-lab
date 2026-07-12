# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A PHP settings only：Passed.
Step 4E-B1-B unhooked heading/count renderer：Passed.
Step 4E-B1-C heading hook switch：Applied; browser validation exposed count-format defects.
Step 4E-B1-C-FIX1：Passed file validation; removed theme URI but left a leading percent sign.
Step 4E-B1-C-FIX2：Passed exact file validation and current quantity-2 browser output.
Step 4E-B1-C-FIX3：Instructions issued to put live count below Your Bag.
Step 4E-B1-D：Blocked until FIX3 browser + file validation passes.
Cart page status：Not done.
```

## Authoritative records

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
project2-progress/STEP_4E_B1_A_VALIDATION.md
project2-progress/STEP_4E_B1_B_UNHOOKED_HEADING_RENDERER.md
project2-progress/STEP_4E_B1_C_HEADING_HOOK_SWITCH.md
project2-progress/STEP_4E_B1_C_VISUAL_VALIDATION.md
project2-progress/STEP_4E_B1_C_FIX1_COUNT_PLACEHOLDER.md
project2-progress/STEP_4E_B1_C_FIX1_VALIDATION.md
project2-progress/STEP_4E_B1_C_FIX2_PERCENT_NORMALIZATION.md
project2-progress/STEP_4E_B1_C_FIX2_VALIDATION.md
project2-progress/STEP_4E_B1_C_FIX3_HEADING_COUNT_ORDER.md
```

## 1. Non-negotiable delivery rule

```text
- no ZIP or complete replacement file as the implementation method
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no later substep before the previous file is re-read or exact metrics are verified
- no Cart template override
- no Cart-specific JavaScript unless a real native interaction defect is proved
```

Every executable instruction must include exact anchors, exact replacement, expected delta, syntax/balance checks, visible expectation, rollback, and required evidence.

## 2. Current authoritative baseline

Uploaded `functions(5).php` after FIX2:

```text
Version: 2.7.8
Size: 550,932 bytes
Lines: 10,233
SHA256: ee531433e499b07d58aa79dda50cf6e19cea08d077858db32e353a7bbde421ba
PHP syntax: Passed
Braces: 1,190 / 1,190
Active heading hook: spatial_flow_cart_v2_heading
FIX2 normalization occurrences: 1
```

Browser result:

```text
2 pieces · ready to go
Your Bag.
```

The count value and percent-token handling are now correct, but the approved V2 reference order is the reverse:

```text
Your Bag.
2 pieces · ready to go
```

This is a PHP markup-order defect, not merely pending CSS spacing.

Unchanged assets:

```text
assets/css/spatial-flow.css
Size: 767,069 bytes
Lines: 25,742
SHA256: a8db33e2cd3e7886a12a455383fe6769cbd262e7e6d6fac8003aa46fe641a10d

assets/js/spatial-flow.js
Size: 70,828 bytes
Lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
```

If the exact FIX3 anchor is missing or duplicated, the newest local file must be supplied before editing.

## 3. Current executable step

### Step 4E-B1-C-FIX3 · Put live count below heading

```text
Status：Instructions issued / user edit pending.
Scope：reorder only the existing h1 and count paragraph blocks in spatial_flow_cart_v2_heading().
Expected result：550,932 bytes / 10,233 lines / SHA256 ef3f2e437ebbb9cbdbc1b44da20187e92bc491183ceab3e1267249308e70160c.
Required browser result：Your Bag. first, live count directly below it.
```

### Step 4E-B1-D · Continue Shopping relocation

```text
Begin only after FIX3 browser and uploaded-file validation pass.
Move Continue Shopping into the correct native checkout-actions area.
Proceed directly after validation; no additional decision pause is required.
```