# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A PHP settings only：Passed.
Step 4E-B1-B unhooked heading/count renderer：Instructions issued / user edit pending.
Current local source of truth：Validated uploaded functions.php version 2.7.8.
Cart page status：Not done.
```

Authoritative exact-range map:

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
```

Current substep records:

```text
project2-progress/STEP_4E_B1_A_VALIDATION.md
project2-progress/STEP_4E_B1_B_UNHOOKED_HEADING_RENDERER.md
```

## 1. Why this protocol exists

The withdrawn candidate changed two large files at once:

```text
functions.php: +1,188 bytes / +46 lines
spatial-flow.css: -90,402 bytes / -2,759 lines
```

Static checks passed, but blind whole-file replacement created an unacceptable rollback surface. All Cart work must now use manual, staged, exact-range operations.

## 2. Non-negotiable delivery rule

For Step 4E-B:

```text
- no ZIP or complete replacement file as the implementation method
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no later substep before the previous file is re-read or exact metrics are verified
- no Cart template override
- no Cart-specific JavaScript unless a real native interaction defect is proved
```

Every executable instruction must include:

```text
Step name
Purpose
File
Current baseline version/hash
START anchor
END anchor
Exact delete/replace instruction
Exact inserted content
Expected size/line delta
Syntax/balance checks
Visible expectation
What must not change
Independent rollback
Evidence required before continuing
```

## 3. Current baselines

```text
functions.php
Version: 2.7.8
Size: 548,377 bytes
Lines: 10,175
SHA256: 0b2c1ea9dcad518a949f3a7a26974f0e937e7da8bf3ddd2ac7d924e3111d4c64
PHP syntax: Passed
Braces: 1,182 / 1,182

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

## 4. Staged implementation

### Step 4E-B0 · Exact manual map

```text
Status：Complete.
Code changes：None.
Record：project2-progress/STEP_4E_B0_MANUAL_MAP.md
```

### Step 4E-B1-A · PHP settings only

```text
Status：Passed.
Added editable Cart heading/count/summary fields and the fourth fallback product selector.
Cart and SAFE5 Checkout remained unchanged.
Record：project2-progress/STEP_4E_B1_A_VALIDATION.md
```

### Step 4E-B1-B · New heading/count renderer only

```text
Status：Instructions issued / user edit pending.
Add the renderer without hooking it.
Keep the old intro renderer and frontend output unchanged.
Record：project2-progress/STEP_4E_B1_B_UNHOOKED_HEADING_RENDERER.md
```

### Step 4E-B1-C · Hook switch

```text
Unhook only the old intro output.
Hook only the validated new heading/count renderer.
Keep the legacy function/settings for rollback.
Proceed directly after B1-B file validation; no additional decision pause is required.
```