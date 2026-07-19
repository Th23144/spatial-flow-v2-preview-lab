# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-18  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Step 4E-B0 manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion-first attempt：Rejected / rolled back.
R5-B canonical implementation：Passed as cleaned baseline, not final 1:1.
R5-C1 through R5-C4 cleanup：Passed / closed.
R5-D1 source/ownership：Passed.
R5-D2 editability/dynamic ownership：Passed / closed.
R5-D3 strict visual acceptance：Failed / reopened.
R5-D4 native regression：Failed / reopened.
R5-D5 binary decision：Blocked.
R5-E1 exact source/state audit：Complete.
R5-E2 synchronized live counts：Passed / closed.
R5-E3 empty-Cart parity：Passed / closed.
R5-E4-A1 first geometry measurement：Complete.
R5-E4-A2 ancestor/container trace：Complete.
R5-E4-B strict geometry artifact：Passed / deployed.
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 wrapper/source ownership：Passed.
R5-E4-B-FIX1 artifact and runtime width：Passed / closed.
R5-E4-C3 full-page visual review：Failed / residuals reopened.
R5-E4-D current server-source validation：Passed.
R5-E4-D source diagnosis and manual correction guide：Complete / ready.
Current executable phase：Perform exact manual R5-E4-D edits and upload both edited files for pre-deploy validation.
Cart page status：Not done.
```

## Accepted current uploaded/deployed baselines

```text
functions.php
Uploaded source name: functions(15).php
Exact match to functions(14).php accepted baseline: Yes
Version: 2.7.8
Size: 552,215 bytes
Logical lines: 10,292
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070
Braces: 1,208 / 1,208
PHP syntax: Passed

assets/js/spatial-flow.js
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Uploaded source name: spatial-flow(25).css
Exact match to spatial-flow(24).css accepted baseline: Yes
Size: 696,069 bytes
Logical lines: 23,335
SHA256: 412d6b20993a101e73b0fae9b7a26abc4941b5e8f6eb032c1c38689dfc823436
Braces: 3,626 / 3,626
Comments: 340 / 340
CSS parser errors: 0
```

The uploaded names changed, but the source bytes did not. These are safe current-server modification baselines.

## Accepted geometry

```text
- Cart width matches the completed Shop frame
- 7fr / 5fr rendered relationship passed
- 80px desktop column gap passed
- 88px title-to-count rhythm passed
- 120px count-to-main-row rhythm passed
- inherited parent/wrapper padding removal passed
```

## R5-E4-D exact source diagnosis

```text
1. Warm canvas variable exists, but Astra/page wrappers do not receive a Cart-scoped background owner.
2. No Cart breadcrumb renderer exists; the existing Cart heading begins at woocommerce_before_cart priority 6.
3. Recommendation eligibility does not require a real image and has no product-level exclusion control.
4. Image-less recommendations intentionally render the package/cube icon.
5. A generated fallback marketing sentence still appears when a product has no authored description.
6. The Natural Silver Obsidian white label/arrow fragment is part of its current product image/crop, not Cart CSS.
```

## Current exact operation

Follow only:

```text
project2-progress/STEP_4E_B2_R5_E4_D_SOURCE_AUDIT_AND_MANUAL_FIX.md
```

Manual changes are limited to:

```text
functions.php
- backend-editable HOME / YOUR BAG breadcrumb labels
- Cart breadcrumb renderer at priority 5
- product-level Exclude from Cart recommendations checkbox
- require a valid product image for recommendation eligibility
- enlarge candidate pools to keep four image-ready dynamic cards
- omit unauthored recommendation description instead of generating a claim

assets/css/spatial-flow.css
- assign #f6f1eb to Cart-scoped Astra/page wrappers
- give breadcrumb full-grid ownership
- add desktop/phone breadcrumb styling inside Canonical Cart
```

Do not modify:

```text
assets/js/spatial-flow.js
header.php
WooCommerce templates
Checkout SAFE5
Cart geometry values
Cart Notice block
Header/Footer
version 2.7.8
```

## Predicted edited-file gate

```text
functions.php
Size: 555,041 bytes
Logical lines: 10,351
SHA256: dfded9e0d3d0c4a2cc8c2ac7898953ee43b77d487c700bdbe5ae616c07f73d0a
Braces: 1,215 / 1,215
PHP syntax: Passed

assets/css/spatial-flow.css
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
CSS parser errors: 0
```

Do not deploy before exact uploaded-file validation.

## Backend action after deployment

```text
Natural Silver Obsidian Bracelet:
- replace/crop the featured image, or enable Exclude from Cart recommendations

Natural Malachite Mixed Bead Bracelet:
- image-less products will be excluded automatically
- a real featured image can later restore eligibility
```

## Remaining sequence

```text
R5-E4-D manual edit + exact pre-deploy validation
→ R5-E4-D deployment + backend image/exclusion action
→ R5-E4-C4 strict desktop + phone visual rerun
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```