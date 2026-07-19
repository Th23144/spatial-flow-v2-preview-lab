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
R5-E5-FIX2 static-reference comparison：Complete.
R5-E5-FIX2 exact CSS artifact validation：Passed.
Current executable phase：Deploy spatial-flow(32).css and run loading / notice / Undo runtime acceptance.
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
Last runtime-accepted Cart visual artifact: spatial-flow(26).css
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

## R5-E5-FIX1 runtime-rejected artifact

```text
spatial-flow(31).css
Size: 697,642 bytes
Logical lines: 23,387
SHA256: 74afc4c8f3989c37aa937581687423de3d9ae34294034e363e0cd2cee66e87f7
Braces: 3,636 / 3,636
Comments: 337 / 337
CSS parser errors: 0
```

The artifact is structurally correct, but its loading-state rules still paint the full form and totals rectangles with 78% opaque warm backgrounds. That replaces the white card with a beige card rather than eliminating the rectangular wash.

## Static-reference conclusion

Authoritative reference:

```text
preview/spatial-flow-cart-v1.html
```

The reference uses one uninterrupted warm page canvas. The left Cart owner has no background, border, padding, radius or shadow; item rows are transparent with only bottom dividers. The right Order Summary is the only intentionally filled Cart surface. No loading card or full-form wash exists.

The current Canonical Cart desktop form and item rows already follow that structure. Therefore do not rebuild the form, table, item rows, width, 7fr / 5fr tracks, 80px gap or coupon behavior. Remove only the BlockUI wash.

## R5-E5-FIX2 validated candidate

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

Exact validation record:

```text
project2-progress/STEP_4E_B2_R5_E5_FIX2_PRE_DEPLOY_VALIDATION.md
```

Both BlockUI surface backgrounds are transparent. The previous two warm rgba declarations are absent. `opacity: 1`, native blocking, the 18px loader, editorial notice and native Undo remain unchanged.

## Deployment operation

Replace only:

```text
assets/css/spatial-flow.css
← spatial-flow(32).css
```

Do not modify PHP, JavaScript, templates, Cart geometry, breadcrumb, recommendation logic, Header/Footer or version 2.7.8.

## Runtime acceptance gate

```text
1. no rectangular wash appears over the Cart form during quantity update
2. no rectangular wash appears over Order Summary during refresh
3. only the restrained 18px loader remains visible
4. native update blocking remains functional
5. editorial notice and native Undo remain functional
6. live BAG / Your Bag counts remain synchronized
7. Cart geometry, breadcrumb, recommendations, Header and Footer remain unchanged
8. phone loading state has no overflow or flash panel
```

## Remaining sequence

```text
R5-E5-FIX2 runtime loading / notice / Undo acceptance
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```