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
Step 4E-B1-C heading hook switch：Applied.
Step 4E-B1-C-FIX1：Passed file validation; removed theme URI but left a leading percent sign.
Step 4E-B1-C-FIX2：Passed exact file and browser validation.
Step 4E-B1-C-FIX3：Passed exact file and browser validation; V2 order now matched.
Step 4E-B1-D：Passed exact file and browser validation.
Step 4E-B1-E：Instructions issued / user edit pending.
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
project2-progress/STEP_4E_B1_D_CONTINUE_SHOPPING_RELOCATION.md
project2-progress/STEP_4E_B1_D_VALIDATION.md
project2-progress/STEP_4E_B1_E_SERVICE_ROW_UNHOOK.md
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

Uploaded `functions(7).php` after B1-D:

```text
Version: 2.7.8
Size: 551,894 bytes
Lines: 10,257
SHA256: 213850d5a39b1d7394bae1a6e537961a1ad4c78795b9c5a36bae939d7f75ee18
PHP syntax: Passed
Braces: 1,195 / 1,195
Active heading hook: 1
Old intro hook: 0
Count-format normalization: 1
Heading renderer: 1
Heading markup before count markup: Yes
Custom woocommerce_proceed_to_checkout hook: 1
Duplicate service-row frontend hook: 1
```

Browser result:

```text
Your Bag.
2 pieces · ready to go

PROCEED TO CHECKOUT
Continue Shopping
```

B1-D is correct: Continue Shopping appears once below the native checkout button, and the user confirmed the Cart and links are normal. Final secondary-button styling remains deferred to the controlled Cart CSS rebase.

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

If the exact B1-E hook line is missing or duplicated, the newest local file must be supplied before editing.

## 3. Current executable step

### Step 4E-B1-E · Duplicate service-row unhook

```text
Status：Instructions issued / user edit pending.
Scope：replace only the woocommerce_after_cart_table service-card hook with a rollback comment.
Expected result：551,914 bytes / 10,257 lines / SHA256 81f7182db06c58788ab6d6409f56e3c433d3d7aff57f2cfda213f877f3ac6749.
Required browser result：the three service cards below the Cart table disappear; Cart Totals trust cards and all operational controls remain.
```

### Step 4E-B1-F · Editable summary heading

```text
Begin only after B1-E browser and uploaded-file validation pass.
Change only WooCommerce's Cart-page summary heading through the existing sf_cart_summary_title setting.
No global translation change and no Checkout or Thank You effect.
Proceed directly after validation; no additional decision pause is required.
```
