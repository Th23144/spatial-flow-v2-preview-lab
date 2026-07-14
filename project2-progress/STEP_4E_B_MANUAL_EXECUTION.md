# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion-first attempt：Rejected and rolled back exactly.
Step 4E-B2-R1 dependency re-audit：Complete.
Step 4E-B2-R2 / FIX1 / FIX2 / FIX3：Historical temporary takeover sequence complete.
Step 4E-B2-R4 native functional regression：Passed.
Step 4E-B2-R5-A1 visual-gap and ownership audit：Complete.
Step 4E-B2-R5-B canonical in-place replacement：Passed.
R5-B1 through R5-B5 remove-control diagnosis and correction：Passed.
Complete R5-B gate：Closed / Passed.
R5-C1 through R5-C4 historical deletion：Passed / closed.
R5-D1 exact source and ownership gate：Passed.
R5-D2-A Customizer editability：Passed.
R5-D2-B product-level Cart subtitle：Passed.
R5-D2-C recommendation and fallback ownership：Passed.
R5-D2 backend editability/ownership：Closed / Passed.
Remaining user inspection groups：2.
Current executable phase：R5-D3 + R5-D4 combined final inspection.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
project2-progress/STEP_4E_B2_R5_D3_D4_COMBINED_FINAL_CHECKLIST.md
project2-progress/STEP_4E_B2_R5_D2_C_RECOMMENDATION_OWNERSHIP_VALIDATION.md
project2-progress/STEP_4E_B2_R5_D2_B_PRODUCT_SUBTITLE_EDITABILITY_VALIDATION.md
project2-progress/STEP_4E_B2_R5_D2_A_CUSTOMIZER_EDITABILITY_VALIDATION.md
project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
```

## Non-negotiable rule

```text
- no ZIP or complete replacement theme file
- no blind overwrite of functions.php or spatial-flow.css
- no Cart template override
- no routine append-only Cart visual patch
- no code or backend-content edit during R5-D3/R5-D4 inspection
- do not change Cart to Completed 1:1 before both remaining groups pass
- V2 mobile references are guidance; production-quality phone UX takes priority
```

## Exact accepted baselines

### PHP

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Logical lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
```

### CSS

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(18).css
Size: 695,346 bytes
Logical lines: 23,305
SHA256: 316874b203f8ce4104a1a98751f9b5fd63034fb50b0cbeb9aa0c4d2d5711020e
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

## Closed gates

```text
- canonical desktop and production-quality phone structure stable
- product thumbnails fill their slots
- desktop Remove and phone SVG remove control accepted
- trust icons no longer overlap copy
- duplicate mobile price removed
- all scheduled historical Cart visual blocks removed
- Canonical Cart and Cart Notice each exist once
- eight active Customizer text sources changed/displayed/restored
- product-level Cart subtitle changed/displayed/restored
- SAFE5 Checkout product row remained structurally normal
- four recommendation cards confirmed as real WooCommerce products
- recommendation titles/prices/images/URLs matched live products
- current Cart products excluded from recommendations
- fallback selectors 1–4 available; selector 4 saved and restored
- no test copy or temporary backend value remains
```

## Current executable work

Authoritative combined checklist:

```text
project2-progress/STEP_4E_B2_R5_D3_D4_COMBINED_FINAL_CHECKLIST.md
```

### Group 1 — R5-D3 final visual acceptance

```text
- desktop complete-page review and screenshot
- phone complete-page review and screenshot
- heading/count hierarchy
- product spacing and thumbnail crop
- desktop Remove and phone SVG ×
- quantity/subtotal/Coupon alignment
- integrated Order Summary
- trust icon/copy alignment
- four recommendation cards
- Header/Footer and no horizontal overflow
```

### Group 2 — R5-D4 final native regression

```text
- quantity/update and restoration
- remove/undo at multiple positions
- invalid Coupon
- valid Coupon when available or explicit N/A
- shipping/totals update
- Checkout round trip
- recommendation navigation
- Header BAG count synchronization
- empty-Cart behavior and restoration
- final SAFE5 Checkout verification
```

## Remaining sequence

```text
R5-D3 visual acceptance
+ R5-D4 native regression
→ R5-D5 assistant documentation and binary Cart decision
```

R5-D5 is not another user inspection round.

Cart remains `Not done` until the complete final report and screenshots are accepted.