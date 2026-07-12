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
Step 4E-B1-E：Passed exact file and browser validation.
Step 4E-B1-F：Passed exact file and browser validation.
Step 4E-B1-G1：Instructions issued / user edit pending.
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
project2-progress/STEP_4E_B1_E_VALIDATION.md
project2-progress/STEP_4E_B1_F_EDITABLE_SUMMARY_HEADING.md
project2-progress/STEP_4E_B1_F_VALIDATION.md
project2-progress/STEP_4E_B1_G1_DEAD_FALLBACK_CLEANUP.md
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

Uploaded `functions(9).php` after B1-F:

```text
Version: 2.7.8
Size: 552,680 bytes
Lines: 10,275
SHA256: 47db168431d3d57818c5bc1fbd0dffcc1f405d394e3f70162eb50e1df2b47070
PHP syntax: Passed
Braces: 1,199 / 1,199
Active heading hook: 1
Old intro hook: 0
Count-format normalization: 1
Heading renderer: 1
Heading markup before count markup: Yes
Continue Shopping hook: 1
Duplicate service-row frontend hook: 0
B1-E rollback comment: 1
Editable Cart summary heading filter: 1
Service-card renderer/settings: preserved
Summary-trust hook: 1
```

Browser result confirmed:

```text
- Your Bag. is above the live count
- Continue Shopping is below Proceed to Checkout
- the duplicate three-card service row is gone
- the right summary heading now displays Order Summary
- Cart operations remain normal
- SAFE5 Checkout and Thank You remain unaffected
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

If the exact B1-G1 anchor is missing or duplicated, the newest local file must be supplied before editing.

## 3. Current executable step

### Step 4E-B1-G1 · Dead manual recommendation fallback cleanup

```text
Status：Instructions issued / user edit pending.
Scope：delete only the unused sf_cart_next_1_*, sf_cart_next_2_*, and sf_cart_next_3_* invented sample defaults.
Visible result：none; the current real WooCommerce recommendation output remains unchanged.
Expected result：550,596 bytes / 10,248 lines / SHA256 b1590c87947fa3671c5f63ebf3a47e828062a0023d87b93d647205456fb38203.
Required：PHP syntax passes, braces remain 1,199 / 1,199, and all four sf_cart_next_default_product_* controls remain present.
```

### Step 4E-B1-G2 · Four real recommendation products

```text
Begin only after B1-G1 uploaded-file and no-visible-change browser validation pass.
Change the real recommendation count and backend-selected fallback loop from three to four products.
Do not modify CSS in the same operation.
```

### Step 4E-B1-G3 · Four-card recommendation layout

```text
Begin only after B1-G2 file validation.
Handle the desktop four-card CSS layout as a separate controlled CSS operation.
Do not append a new historical Cart patch stack.
```