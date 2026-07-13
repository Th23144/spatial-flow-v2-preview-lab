# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion：Rejected and rolled back exactly.
Step 4E-B2-R1 dependency re-audit：Complete.
Step 4E-B2-R2 / FIX1 / FIX2 / FIX3：Historical temporary takeover sequence complete.
Step 4E-B2-R4 native functional regression：Passed before canonical replacement.
Step 4E-B2-R5-A1 visual-gap and ownership audit：Complete.
Step 4E-B2-R5-B canonical in-place replacement：Applied exactly.
R5-B1 remove shell contrast：Applied.
R5-B2 forced black pseudo-glyph：Applied by user but visually failed.
Observed behavior：black × briefly appears during hard refresh, then disappears after full load.
Current executable step：Step 4E-B2-R5-B3 live cascade / post-load ownership diagnosis.
Further blind CSS changes：Frozen.
Historical Cart CSS deletion：Blocked.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_B3_LIVE_CASCADE_DIAGNOSIS.md
project2-progress/STEP_4E_B2_R5_B2_MOBILE_REMOVE_BLACK_GLYPH.md
project2-progress/STEP_4E_B2_R5_B1_MOBILE_REMOVE_CONTRAST.md
project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
```

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no Cart template override
- no Cart JavaScript unless a reproduced native interaction defect requires it
- no routine append-only Cart visual patch
- corrections inside the canonical layer must be bounded in-place replacements
- no further CSS declaration guess before the final live cascade owner is identified
- no historical cleanup before the complete R5-B visual/function gate passes
- no claim of final desktop/mobile acceptance while known blockers remain
- V2 mobile references are guidance, not authority when they produce weak phone UX
```

## Current PHP baseline

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
```

PHP remains unchanged throughout the current CSS diagnosis and cleanup phase.

## Last exactly validated CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(11).css
Size: 811,826 bytes
Logical lines: 27,089
SHA256: 11e4c7b25cdf4c8beaf420dc4b5da1b0801a611679d4f85019bb1228d17d0b1e
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parse errors: 0
Canonical START / END: 1 / 1
Old R2 START / END: 0 / 0
FIX1 / FIX2 / FIX3 markers: 0
Cart Notice START: 1
```

## Expected current local CSS after R5-B1 + R5-B2

The user has applied both bounded changes locally, but the newest file has not yet been uploaded for exact validation.

Expected R5-B2 state if applied exactly:

```text
Size: 812,142 bytes
Logical lines: 27,098
SHA256: de6ddce6c42cf9fc50fb583caa3d3f5ea46931f75f4d805cdf74ab158f61196d
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
```

## Current reproduced blocker

```text
- white 32 × 32px remove shell remains visible
- duplicate native glyph is gone
- one black pseudo-glyph appears briefly during hard refresh
- after final page load, the glyph disappears
```

This evidence proves that the source declaration is parsed and can render. The defect is now classified as a final cascade/state/position problem, not a simple color or font-weight problem.

Possible cause classes remain unconfirmed until live DevTools evidence exists:

```text
- later stylesheet or inline rule
- post-load state/class selector
- WooCommerce fragment replacement
- Astra/WPCode/customizer source loaded after the child stylesheet
- final position/transform placing the pseudo-element outside the clipped shell
```

## Current executable operation

### Step 4E-B2-R5-B3 · Live cascade diagnosis

```text
Mode：browser diagnosis only / no code changes.
File upload required：current spatial-flow.css after R5-B2.
Browser evidence required：fully loaded remove link, ::after Styles and Computed values.
Append elsewhere：forbidden.
Historical deletion：forbidden.
PHP / JS / templates / version：unchanged.
```

Authoritative instruction:

```text
project2-progress/STEP_4E_B2_R5_B3_LIVE_CASCADE_DIAGNOSIS.md
```

After the glyph disappears, capture:

```text
1. selected native <a class="remove"> node
2. all matched `a.remove::after` rules in Styles
3. Computed values/source links for content, display, visibility, opacity, color,
   -webkit-text-fill-color, font-size, position, transform and z-index
```

Do not make another CSS edit until the exact winning source is identified.

## CSS debt inventory

Historical Cart visual stack remains temporarily present:

```text
15 blocks
117,141 bytes
3,798 logical lines
456 rule/media-query brace pairs
```

It cannot be deleted before the corrected canonical layer proves full visual and functional ownership.

## Correct sequence

```text
R5-B3 live cascade diagnosis
→ bounded correction of the identified final owner
→ exact file validation
→ strict desktop/mobile and native-function validation for the complete R5-B gate
→ R5-C1 through R5-C4 staged historical deletion
→ R5-D backend editability and final acceptance
```

Cart remains `Not done` until all stages pass.