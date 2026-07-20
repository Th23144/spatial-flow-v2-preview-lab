# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-20  
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
R5-E4 strict geometry, canvas, breadcrumb and recommendation visual rebase：Passed / closed.
R5-E5 notice source audit and first CSS artifact：Passed technically / failed visually.
R5-E5-FIX1 source and exact CSS validation：Passed.
R5-E5-FIX1 runtime frame removal：Failed / warm rectangular wash still perceptible.
R5-E5-FIX2 static-reference comparison and exact artifact validation：Passed.
R5-E5-FIX2 BlockUI filled wash removal：Passed.
R5-E5-FIX2 residual composition acceptance：Failed / implied frame remained.
R5-E5-FIX3 exact CSS artifact validation：Passed.
Current executable phase：Deploy spatial-flow(34).css and run Coupon / Update / loading / notice / Undo runtime acceptance.
Cart page status：Not done.
```

## Accepted stable baselines

```text
functions.php
Deployed artifact: functions(17).php
Version: 2.7.8
Size: 555,130 bytes
Logical lines: 10,366
SHA256: ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86
PHP syntax: Passed
Braces: 1,215 / 1,215

assets/css/spatial-flow.css
Last runtime-accepted Cart visual artifact before R5-E5: spatial-flow(26).css
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
CSS parser errors: 0

assets/js/spatial-flow.js
Unchanged accepted baseline
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
```

## Current deployed R5-E5-FIX2 artifact

```text
spatial-flow(32).css
Size: 697,616 bytes
Logical lines: 23,387
SHA256: 2fa292d96e7e35a3d633dbe5bd8334e73fdb2432bbd6c8e6576a1424e170f55d
Braces: 3,636 / 3,636
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

Its BlockUI backgrounds are transparent and the painted loading wash is removed. The remaining implied frame came from the full-width product divider immediately followed by three closed rectangular Coupon / Apply / Update controls.

## Validated R5-E5-FIX3 candidate

```text
spatial-flow(34).css
Size: 698,076 bytes
Logical lines: 23,406
SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
Braces: 3,638 / 3,638
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

Exact validation record:

```text
project2-progress/STEP_4E_B2_R5_E5_FIX3_PRE_DEPLOY_VALIDATION.md
```

Validated ownership:

```text
Desktop Coupon / Update owner: lines 22,048–22,138
Mobile Coupon / Update owner: lines 22,889–22,917
Native loading state: starts line 23,012
Canonical Cart END: line 23,050
Cart Notice: lines 23,052–23,158
```

The candidate preserves the product divider, native Coupon and Update Cart functions, transparent BlockUI, restrained loader, editorial notice and native Undo. It changes the Coupon input and Apply / Update controls from closed boxes to static-reference-aligned editorial utilities.

## Deployment operation

Replace only:

```text
assets/css/spatial-flow.css
← spatial-flow(34).css
```

Do not modify PHP, JavaScript, templates, Cart geometry, product divider, BlockUI, totals, breadcrumb, recommendation logic, Header/Footer or version 2.7.8.

## Runtime acceptance gate

```text
1. Coupon is an underline field, not a closed input box
2. Apply Coupon and Update Cart are quiet text actions, not bordered rectangles
3. implied left-column frame is materially removed
4. product-row divider remains
5. native Coupon and Update Cart behavior remains functional
6. disabled Update Cart remains visibly disabled
7. quantity update shows no BlockUI rectangle and only the restrained loader
8. update/remove notice remains editorial and native Undo restores the item
9. mobile Coupon row is readable and has no horizontal overflow
10. Cart geometry, totals, breadcrumb, recommendations, Header and Footer remain unchanged
```

## Remaining sequence

```text
R5-E5-FIX3 runtime Coupon / Update / loading / notice / Undo acceptance
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```