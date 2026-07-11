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
Step 4E-B1-C heading hook switch：Applied; visual validation found count-placeholder defect.
Step 4E-B1-C-FIX1 count-placeholder correction：Instructions issued / user edit pending.
Step 4E-B1-D：Blocked until FIX1 validation passes.
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

## 2. Current baselines

Last uploaded and validated file before the one-line B1-C hook switch:

```text
functions.php
Version: 2.7.8
Size: 550,221 bytes
Lines: 10,215
SHA256: e6bb2759bb3ac25ef12a2379ba29995243fe8554f2e93b3fd82b3b4c29158578
PHP syntax: Passed
Braces: 1,187 / 1,187
```

Derived post-B1-C working baseline after the exact callback replacement:

```text
functions.php
Version: 2.7.8
Size: 550,217 bytes
Lines: 10,215
SHA256: dae763ce72595d168f5fb93324124a4a53a2aaf5861341c3958e4fb9f0b0a6fb
Braces: 1,187 / 1,187
```

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

If the exact current anchor is missing or duplicated, the newest local file must be supplied before editing.

## 3. Staged implementation

### Step 4E-B1-A · PHP settings only

```text
Status：Passed.
Added editable Cart heading/count/summary fields and the fourth fallback product selector.
Cart and SAFE5 Checkout remained unchanged.
```

### Step 4E-B1-B · New heading/count renderer only

```text
Status：Passed.
Exact uploaded-file SHA matched the prediction.
The new renderer exists once and was initially unhooked.
Cart and SAFE5 Checkout remained unchanged.
```

### Step 4E-B1-C · Hook switch

```text
Status：Applied; browser result partially passed.
Legacy intro disappeared and new heading appeared once.
Live count failed because get_theme_mod() expanded %s into the parent-theme URI.
```

### Step 4E-B1-C-FIX1 · Count placeholder correction

```text
Status：Instructions issued / user edit pending.
Scope：replace only spatial_flow_cart_visual_2_setting().
Expected post-FIX1 result：550,874 bytes / 10,231 lines / SHA256 d171d463f4b56f047a1e28cbe5b6d7b02c2fbdf4f5a716c9d5139caa90dae7c4.
Required result：numeric live quantity, plural update, singular display, SAFE5 Checkout unchanged.
```

### Step 4E-B1-D · Continue Shopping relocation

```text
Begin only after FIX1 browser and uploaded-file validation pass.
Move Continue Shopping into the correct native checkout-actions area.
Proceed directly after validation; no additional decision pause is required.
```