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
R5-E4 strict geometry, canvas, breadcrumb and recommendation visual rebase：Passed / closed.
R5-E5 notice source audit and first CSS artifact：Passed technically / failed visually.
R5-E5-FIX1 source and exact CSS validation：Passed.
R5-E5-FIX1 runtime frame removal：Failed / warm rectangular wash still perceptible.
R5-E5-FIX2 static-reference comparison and exact artifact validation：Passed.
R5-E5-FIX2 BlockUI filled wash removal：Passed.
R5-E5-FIX2 residual composition acceptance：Failed / implied frame remains.
Current executable phase：R5-E5-FIX3 convert Coupon / Apply / Update controls from closed boxes into static-reference-aligned editorial utilities.
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

Both BlockUI backgrounds are transparent. The normal screenshot no longer shows a painted loading surface, and the left form remains on the same uninterrupted warm page canvas.

## Residual-frame diagnosis

The remaining frame perception is no longer caused by BlockUI or a form background. It is caused by composition:

```text
- full-width product-row bottom divider
- immediately aligned full-width native actions row
- closed rectangular Coupon input
- closed rectangular Apply Coupon button
- closed rectangular Update Cart button
```

This creates an implied card boundary even with a transparent form.

The product-row divider must remain because it exists in the static Cart reference. The native WooCommerce Coupon / Update row does not exist in the static reference, so its production treatment must inherit the static reference's small mono text-action language instead of introducing a second boxed control strip.

## Current operation · R5-E5-FIX3

Follow exactly:

```text
project2-progress/STEP_4E_B2_R5_E5_FIX2_RUNTIME_VISUAL_REVIEW_AND_FIX3.md
```

Start from:

```text
spatial-flow(32).css
```

Only the desktop and mobile Coupon / Update Cart owner ranges may change.

The target treatment is:

```text
- Coupon input becomes a single underline field
- Apply Coupon becomes a quiet underlined mono text action
- Update Cart becomes a quiet underlined mono text action
- no closed rectangular utility controls
- no change to product divider, width, BlockUI, totals or WooCommerce behavior
```

Predicted exact artifact:

```text
Size: 698,076 bytes
Logical lines: 23,406
SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
Braces: 3,638 / 3,638
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

Do not deploy before exact edited-file validation.

Do not modify PHP, JavaScript, templates, Cart geometry, breadcrumb, recommendation logic, Header/Footer or version 2.7.8.

## Remaining sequence

```text
R5-E5-FIX3 manual CSS edit + exact artifact validation
→ R5-E5 runtime Coupon / Update / loading / notice / Undo acceptance
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```