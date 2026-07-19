# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-19  
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
R5-E4-D A1–A5 PHP correction：Passed.
R5-E4-D CSS B1–B4 correction：Passed.
R5-E4-D complete pre-deploy validation：Passed.
Current executable phase：Deploy only functions(17).php and spatial-flow(26).css, perform backend product action, then run R5-E4-C4.
Cart page status：Not done.
```

## Accepted currently deployed baselines

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

These remain the deployed baseline until the user completes the authorized replacement.

## Validated deployment artifacts

### functions(17).php

```text
Version: 2.7.8
Size: 555,130 bytes
Logical lines: 10,366
SHA256: ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86
Braces: 1,215 / 1,215
PHP syntax: Passed
Line endings: LF
Final newline: absent
```

Full-file comparison with `functions(16).php` confirms only A4 and A5 were added. A1–A3 had already passed in the partial artifact.

### spatial-flow(26).css

```text
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
CSS parser errors: 0
Line endings: LF
Final newline: present
```

Full-file comparison with `spatial-flow(25).css` confirms only B1–B4 were added.

Validation record:

```text
project2-progress/STEP_4E_B2_R5_E4_D_A1_A3_PARTIAL_VALIDATION.md
project2-progress/STEP_4E_B2_R5_E4_D_PRE_DEPLOY_VALIDATION.md
```

## Corrected PHP metric note

The earlier predicted PHP gate of `555,129 bytes / 10,365 lines / b101...` omitted one blank line that was present in the issued A5 replacement. `functions(17).php` matches the issued code exactly. The corrected accepted artifact is:

```text
555,130 bytes
10,366 logical lines
ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86
```

No further PHP edit is required.

## Authorized replacement

Replace only:

```text
functions.php <- functions(17).php
assets/css/spatial-flow.css <- spatial-flow(26).css
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

## Backend action after deployment

```text
Natural Silver Obsidian Bracelet:
- enable Exclude from Cart recommendations and save, or replace/crop its featured image

Natural Malachite Mixed Bead Bracelet:
- remains automatically excluded while no valid featured image exists
```

## R5-E4-C4 runtime gate

```text
- warm Cart canvas on desktop and phone
- HOME / YOUR BAG breadcrumb and working HOME link
- strict accepted width / 7fr-5fr / 80px gap / 88px / 120px geometry preserved
- four real image-ready recommendation cards when inventory permits
- no cube/package placeholder
- excluded products absent
- no generated description for unauthored products
- quantity / remove / Undo / coupon / totals / shipping / checkout navigation pass
- both empty-Cart paths pass
- Shop / Single Product / SAFE5 Checkout show no regression
```

## Remaining sequence

```text
Authorized deployment + backend product action
→ R5-E4-C4 strict desktop + phone visual rerun
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```
