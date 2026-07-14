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
R5-D2-A active Customizer editability：Passed.
Current executable step：R5-D2-B product-level Cart subtitle editability.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
project2-progress/STEP_4E_B2_R5_D2_A_CUSTOMIZER_EDITABILITY_VALIDATION.md
project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
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

PHP remains unchanged through the current acceptance tests.

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

## Closed gates

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
- all scheduled historical Cart visual blocks removed
- Canonical Cart START / END exists exactly once
- Cart Notice START / END exists exactly once
- eight active Customizer text sources were changed, displayed and restored successfully
- no test Customizer copy remains
```

Routine Cart visual appends remain forbidden.

## Current executable operation

### Step 4E-B2-R5-D2-B · Product-level Cart subtitle editability

Authoritative instructions:

```text
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
```

Source:

```text
WordPress Admin
→ Products
→ edit one product currently in Cart
→ Product data
→ General
→ Cart subtitle / product context
```

Procedure:

```text
1. Choose the first product currently shown in Cart.
2. Search and open that exact product in Products → All Products.
3. Copy the current Cart subtitle / product context value into a local note.
4. If the current field is blank, record that the original value is blank.
5. Change only this field to: R5-D2-B subtitle test
6. Update the product.
7. Force-refresh Cart and confirm the unique text appears below the correct product title.
8. Open SAFE5 Checkout and confirm the product row remains structurally normal.
9. Restore the exact original field value; restore blank if it was blank.
10. Update the product again.
11. Force-refresh Cart and SAFE5 Checkout.
12. Confirm the test text is gone and the original dynamic context has returned.
```

Do not change product title, price, stock, SKU, categories, attributes, variations, descriptions, images, Cart contents, Customizer, PHP, CSS, JavaScript, templates or version 2.7.8.

## Remaining sequence

```text
R5-D2-B product-level Cart subtitle editability
→ R5-D2-C dynamic recommendation ownership
→ R5-D3 strict desktop and production-quality mobile visual acceptance
→ R5-D4 final native Cart regression
→ R5-D5 binary Cart status decision
```

Cart remains `Not done` until the complete sequence passes.