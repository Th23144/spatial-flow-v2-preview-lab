# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion：Rejected and rolled back exactly.
Step 4E-B2-R1 dependency re-audit：Complete.
Step 4E-B2-R2 consolidation：Present and structurally valid.
Step 4E-B2-R2-FIX1 desktop structure：Passed.
Step 4E-B2-R2-FIX2 desktop detail：Passed exactly.
Step 4E-B2-R3-A mobile structure：Passed.
Step 4E-B2-R4 native functional regression：Passed by user confirmation.
Mobile detail audit：Reopened for duplicate unit-price display.
Current executable step：Step 4E-B2-R3-FIX3.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md
project2-progress/STEP_4E_B2_R3_A_MOBILE_BASELINE_AUDIT.md
project2-progress/STEP_4E_B2_R3_FIX3_MOBILE_DUPLICATE_PRICE.md
project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
project2-progress/snippets/STEP_4E_B2_R3_FIX3_MOBILE_DUPLICATE_PRICE.css
```

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no Cart template override
- no Cart JavaScript unless a real native interaction defect is proved
- no large structural CSS deletion before replacement ownership is validated
- no claim of mobile completion while a visible defect remains
- V2 mobile static references are guidance, not authority when they produce weak phone UX
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

PHP remains unchanged throughout this fix.

## Current CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(9).css
Size: 813,392 bytes
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8
Braces: 4,125 / 4,125
Comments: 403 / 403
CSS parse errors: 0
R2 markers: 1 / 1
FIX1 markers: 1 / 1
FIX2 markers: 1 / 1
```

## Passed gates

```text
Desktop:
- centered 7fr / 5fr layout
- product-row alignment
- Coupon action row
- integrated Order Summary
- four-product recommendation row
- Header and Footer intact

Mobile structure:
- one-column flow
- no horizontal overflow
- visible quantity/remove controls
- stacked Coupon controls
- full-width Order Summary
- single-column recommendations
- Footer intact

Native behavior:
- quantity/update
- remove/undo
- Coupon paths
- shipping address
- SAFE5 Checkout link
- Continue Shopping
- recommendation links
- mobile Menu and Footer accordion
- no warnings or blank page
```

## Reopened mobile detail defect

Each mobile product card currently shows:

```text
unit price
subtotal
```

With quantity 1 both values match and appear duplicated.

Root cause: an older, more-specific mobile selector re-enables `td.product-price`; desktop FIX2 suppresses it only at 1101px and wider.

## Current executable step

### Step 4E-B2-R3-FIX3 · Mobile Duplicate Unit Price Removal

```text
File：assets/css/spatial-flow.css only.
Mode：one phone-only selector group.
Snippet：project2-progress/snippets/STEP_4E_B2_R3_FIX3_MOBILE_DUPLICATE_PRICE.css.
Instruction：project2-progress/STEP_4E_B2_R3_FIX3_MOBILE_DUPLICATE_PRICE.md.
Insertion point：immediately before the main B2-R2 END marker, after FIX2.
Desktop impact：None intended.
Legacy deletion：Forbidden.
```

Expected complete stylesheet:

```text
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Braces: 4,127 / 4,127
Comments: 405 / 405
CSS parse errors: 0
```

Validation requirement:

```text
- one price remains per mobile Cart item
- remaining value is the subtotal and changes after quantity update
- no horizontal overflow
- desktop unchanged
- exact file metrics pass
```

Do not begin backend-editability or final Cart acceptance until FIX3 passes.