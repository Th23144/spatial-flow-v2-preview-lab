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
Step 4E-B1-C heading hook switch：Instructions issued / user edit pending.
Current local source of truth：Validated uploaded functions.php version 2.7.8.
Cart page status：Not done.
```

## Authoritative records

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
project2-progress/STEP_4E_B1_A_VALIDATION.md
project2-progress/STEP_4E_B1_B_UNHOOKED_HEADING_RENDERER.md
project2-progress/STEP_4E_B1_C_HEADING_HOOK_SWITCH.md
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

```text
functions.php
Version: 2.7.8
Size: 550,221 bytes
Lines: 10,215
SHA256: e6bb2759bb3ac25ef12a2379ba29995243fe8554f2e93b3fd82b3b4c29158578
PHP syntax: Passed
Braces: 1,187 / 1,187

assets/css/spatial-flow.css
Size: 767,069 bytes
Lines: 25,742
SHA256: a8db33e2cd3e7886a12a455383fe6769cbd262e7e6d6fac8003aa46fe641a10d

assets/js/spatial-flow.js
Size: 70,828 bytes
Lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
```

If any local baseline has changed, the newest file must be supplied before instructions continue.

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
The new renderer exists once and remains unhooked.
Cart and SAFE5 Checkout remained unchanged.
```

### Step 4E-B1-C · Hook switch

```text
Status：Instructions issued / user edit pending.
Change only the active woocommerce_before_cart callback:
spatial_flow_cart_visual_2_intro → spatial_flow_cart_v2_heading.
Keep the legacy function and settings for one-line rollback.
```

Expected intermediate frontend result:

```text
- old intro block removed
- old top Continue Shopping action temporarily removed
- new backend-editable Your bag. heading shown
- live total cart quantity shown
- no final Cart CSS judgment yet
```

### Step 4E-B1-D · Continue Shopping relocation

```text
Begin only after B1-C file and browser validation.
Move Continue Shopping into the correct native checkout-actions area.
Proceed directly after validation; no additional decision pause is required.
```