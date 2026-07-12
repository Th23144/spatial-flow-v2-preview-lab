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
Step 4E-B1-E：Browser validation passed; uploaded-file validation pending.
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
project2-progress/STEP_4E_B1_E_BROWSER_VALIDATION.md
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

Last exactly validated uploaded file is `functions(7).php` after B1-D:

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

B1-E has now passed browser validation, but the edited file has not yet been uploaded for exact validation.

Expected post-B1-E result:

```text
Version: 2.7.8
Size: 551,914 bytes
Lines: 10,257
SHA256: 81f7182db06c58788ab6d6409f56e3c433d3d7aff57f2cfda213f877f3ac6749
PHP syntax: Passed
Braces: 1,195 / 1,195
Duplicate service-row frontend hook: 0
Rollback comment: 1
Service-card renderer/settings: preserved
Summary-trust hook: preserved
```

Browser result confirmed:

```text
- the three service cards below the Cart table are gone
- the Cart Totals trust cards remain
- Continue Shopping remains below Proceed to Checkout
- Cart operations remain normal
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

## 3. Current executable gate

### Step 4E-B1-E · Uploaded-file validation

```text
Status：Pending upload of the current post-B1-E functions.php.
Required：exact size, lines, hash, PHP syntax, braces, and one-line scope validation.
Expected result：551,914 bytes / 10,257 lines / SHA256 81f7182db06c58788ab6d6409f56e3c433d3d7aff57f2cfda213f877f3ac6749.
```

### Step 4E-B1-F · Editable summary heading

```text
Begin immediately after B1-E uploaded-file validation passes.
Change only WooCommerce's Cart-page summary heading through the existing sf_cart_summary_title setting.
No global translation change and no Checkout or Thank You effect.
No additional decision pause is required after validation.
```