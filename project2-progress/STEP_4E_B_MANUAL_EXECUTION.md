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
Current executable phase：R5-E5 Cart Notice in-place refinement.
Cart page status：Not done.
```

## Accepted deployed baselines

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
Deployed artifact: spatial-flow(26).css
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

## Closed R5-E4 result

```text
- live Header BAG and Your Bag counts passed
- transition-to-empty and direct-empty parity passed
- phone empty message centering passed
- desktop width matches completed Shop width
- 7fr / 5fr relationship and 80px gap passed
- 88px title-to-count and 120px count-to-main rhythm passed
- warm Cart canvas passed
- HOME / YOUR BAG breadcrumb and HOME link passed
- image-less and explicitly excluded recommendations are suppressed
- unauthored recommendation descriptions remain blank
- real image-ready recommendation cards render when inventory permits
- quantity, remove, Undo, coupon, totals, shipping and checkout navigation passed
- Shop, Single Product and SAFE5 Checkout regressions passed
```

Runtime record:

```text
project2-progress/STEP_4E_B2_R5_E4_C4_RUNTIME_ACCEPTANCE.md
```

## Current operation · R5-E5

Modify only the existing bounded range:

```text
/* === Step 4E Cart Notice Toast START === */
...
/* === Step 4E Cart Notice Toast END === */
```

Follow exactly:

```text
project2-progress/STEP_4E_B2_R5_E5_CART_NOTICE_REFINEMENT.md
```

The edit replaces the rounded floating-pill visual with a full-width editorial status row while preserving native WooCommerce Restore / Undo behavior.

Do not modify PHP, JavaScript, templates, Cart geometry, breadcrumb, recommendation logic, Header/Footer or version 2.7.8.

## Remaining sequence

```text
R5-E5 manual CSS replacement + exact pre-deploy validation
→ R5-E5 runtime notice/Undo validation
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```