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
R5-E5-FIX3 Coupon / Apply / Update de-boxing：Passed.
R5-E5-FIX3 implied-frame runtime acceptance：Failed.
Current executable phase：R5-E5-FIX4 remove the terminal product divider and compact the native utility row.
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

## Current deployed R5-E5-FIX3 artifact

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

FIX3 successfully changed the Coupon input and Apply / Update controls into editorial utilities, but the runtime screenshot still shows an implied left-column frame.

The remaining geometry is:

```text
- final product row still ends with a full-width divider
- td.actions still owns the full left-column width
- Coupon begins at the far-left edge
- justify-content: space-between pins Update Cart to the far-right edge
```

The visual axis therefore remains closed even without boxed controls.

## Current operation · R5-E5-FIX4

Follow exactly:

```text
project2-progress/STEP_4E_B2_R5_E5_FIX3_RUNTIME_REJECTION_AND_FIX4.md
```

Start from:

```text
spatial-flow(34).css
```

FIX4 ownership:

```text
- product dividers become inter-item separators only
- the final product row before actions has no terminal divider
- Coupon / Apply / Update become a compact left-aligned group
- Update Cart no longer defines the far-right edge
- no change to phone owner, BlockUI, totals, geometry or WooCommerce behavior
```

Predicted exact artifact:

```text
Size: 698,352 bytes
Logical lines: 23,413
SHA256: 6377f0686c9b7a992c440e0c855bfa409cdcd45359f33695f896fa048d5f6737
Braces: 3,639 / 3,639
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

Do not deploy before exact edited-file validation.

Do not modify PHP, JavaScript, templates, Cart geometry, BlockUI, totals, breadcrumb, recommendation logic, Header/Footer or version 2.7.8.

## Remaining sequence

```text
R5-E5-FIX4 manual edit + exact artifact validation
→ R5-E5 runtime Coupon / Update / loading / notice / Undo acceptance
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```