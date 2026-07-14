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
R5-C1 Cart Visual 1 through 1.4.1 deletion：Passed.
R5-C2 Cart Visual 2-D through 2-D.8 deletion：Passed.
R5-C3 Cart Visual 2-E deletion：Passed.
R5-C4 Cart Visual 3 deletion：Passed.
R5-C historical cleanup：Closed / Passed.
R5-D1 exact source and ownership gate：Passed.
Current executable step：R5-D2-A active Customizer editability test.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
project2-progress/STEP_4E_B2_R5_C4_LEGACY_CART_VISUAL_3_DELETION.md
project2-progress/STEP_4E_B2_R5_C3_VALIDATION.md
project2-progress/STEP_4E_B2_R5_C2_VALIDATION.md
project2-progress/STEP_4E_B2_R5_C1_VALIDATION.md
project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
```

## Non-negotiable execution rule

```text
- no ZIP or complete replacement theme file
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no Cart template override
- no Cart JavaScript unless a reproduced native interaction defect requires it
- no routine append-only Cart visual patch
- use bounded in-place replacement/removal only
- every code operation must be independently reversible
- validate an edited file before browser acceptance
- do not change Cart to Completed 1:1 before all R5-D gates pass
- V2 mobile references are guidance; production-quality phone UX takes priority
```

## Current PHP baseline

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

PHP remains unchanged throughout R5-C and at the start of R5-D.

## Current exactly validated CSS baseline

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

The two-byte difference from the R5-C4 theoretical hash is an accepted removal of two empty newline characters immediately before the Checkout Visual Final marker. No selector, declaration or comment boundary changed.

## Closed R5-B and R5-C gates

Confirmed:

```text
- canonical desktop structure stable
- production-quality phone structure stable
- product thumbnails fill their slots
- desktop Remove has an independent action row
- phone remove control uses one persistent refined Astra SVG
- trust icons no longer overflow into copy
- duplicate mobile price removed
- quantity, Coupon, checkout and navigation functions passed
- Cart Visual 1 through 1.4.1 no longer exists
- Cart Visual 2-D through 2-D.8 no longer exists
- Cart Visual 2-E no longer exists
- Cart Visual 3 no longer exists
- Canonical Cart START / END exists exactly once
- Cart Notice START / END exists exactly once
```

Routine Cart visual appends remain forbidden.

## Current executable operation

### Step 4E-B2-R5-D2-A · Active Customizer editability test

Authoritative instructions:

```text
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
```

Open:

```text
WordPress Admin
→ Appearance
→ Customize
→ Spatial Flow Cart Page
```

First copy the current values of these fields into a local note:

```text
Cart heading · lead text
Cart count · plural format
Order summary heading
Continue shopping button text
Trust item 1 title
Payment note
Recommendation section title
View-all button text
```

Temporarily use:

```text
Cart heading · lead text: Test
Cart count · plural format: %s pieces · editability test
Order summary heading: Order summary test
Continue shopping button text: Continue shopping test
Trust item 1 title: Trust title test
Payment note: Payment note editability test
Recommendation section title: Complete your space test
View-all button text: View all test
```

Publish once, force-refresh Cart and verify all eight temporary values appear in the correct visible areas. Then restore every original value, publish again and verify no test text remains.

Do not change URLs, product selectors, enable/disable switches, service-card settings, PHP, CSS, JavaScript, templates or version 2.7.8.

## Remaining sequence

```text
R5-D2-A active Customizer editability
→ R5-D2-B product-level Cart subtitle editability
→ R5-D2-C dynamic recommendation ownership
→ R5-D3 strict desktop and production-quality mobile visual acceptance
→ R5-D4 final native Cart regression
→ R5-D5 binary Cart status decision
```

Cart remains `Not done` until the complete sequence passes.