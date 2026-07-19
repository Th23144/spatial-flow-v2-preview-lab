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
R5-E4-D A1 breadcrumb defaults：Passed.
R5-E4-D A2 breadcrumb Customizer controls：Passed.
R5-E4-D A3 recommendation exclusion field/save logic：Passed.
Current executable phase：Complete A4 + A5 + CSS B1–B4, then upload both edited files.
Cart page status：Not done.
```

## Accepted deployed baselines

```text
functions.php
Accepted deployed source: functions(14).php / functions(15).php
Version: 2.7.8
Size: 552,215 bytes
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070

assets/js/spatial-flow.js
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Accepted deployed source: spatial-flow(24).css / spatial-flow(25).css
Size: 696,069 bytes
SHA256: 412d6b20993a101e73b0fae9b7a26abc4941b5e8f6eb032c1c38689dfc823436
```

## Current manually edited PHP artifact

```text
functions(16).php
Version: 2.7.8
Size: 553,377 bytes
Logical lines: 10,319
SHA256: ee759dcff385708f5cbec341fcea52b9803fa85489579b81c9b586ee96b54c26
Braces: 1,209 / 1,209
PHP syntax: Passed
Line endings: LF
Final newline: absent
```

Full-file comparison with `functions(15).php` confirms only A1–A3 were applied. No unrelated code changed.

Validation record:

```text
project2-progress/STEP_4E_B2_R5_E4_D_A1_A3_PARTIAL_VALIDATION.md
```

## Remaining R5-E4-D operation

```text
A4 add Cart breadcrumb renderer at woocommerce_before_cart priority 5
A5 require image-ready and non-excluded recommendation products
A5 remove the generated fallback marketing sentence
A5 enlarge both dynamic candidate pools
B1 assign #f6f1eb to Cart-scoped Astra/page wrappers
B2 give breadcrumb full-grid ownership
B3 add desktop breadcrumb styling inside Canonical Cart
B4 add phone breadcrumb calibration inside Canonical Cart
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

## Corrected completed-file gate

A3 was implemented through the safer whole-block replacement. Therefore the earlier provisional PHP metrics are superseded.

Expected completed PHP:

```text
Size: 555,129 bytes
Logical lines: 10,365
SHA256: b101b33f6a327c53a2714855ec212bc6b973b3ea815acf619f832d2f407de458
Braces: 1,215 / 1,215
PHP syntax: Passed
Version: 2.7.8
```

Expected completed CSS:

```text
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
R5-E4-D complete manual edit + exact pre-deploy validation
→ deployment + backend product-image/exclusion action
→ R5-E4-C4 strict desktop + phone visual rerun
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```