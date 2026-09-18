# Shop V2 — Mobile 01 Filter / Sort wrap fix IMPLEMENTATION READY

Date: 2026-09-18

## Target file

assets/css/spatial-flow.css

## Exact bounded change

Inside the existing <=767px Shop controlled-rebase block:

Replace the mobile filterbar rule:
- flex-wrap: nowrap;
- gap: 22px;
- overflow-x: auto;
- padding-bottom: 6px;
- scrollbar-width: none;

with:
- flex-wrap: wrap;
- gap: 12px 18px;
- overflow-x: visible;
- padding-bottom: 0;

Delete the now-unused mobile ::-webkit-scrollbar hiding rule for sf-shop-v2-filterbar.

Keep:
- white-space: nowrap on each filter label;
- fixed mobile filter panel overlay;
- current sort grid and full-width native Woo select;
- all desktop toolbar rules unchanged.

## Expected runtime

- no clipped horizontal filter rail;
- all filter groups visible through natural wrapping;
- individual filter labels do not split across lines;
- Sort remains a separate compact row below filters;
- opening a filter still uses the existing fixed overlay panel;
- no WooCommerce query/filter/sort ownership changes.

## Status

IMPLEMENTATION READY / CSS ONLY / SOURCE VALIDATION REQUIRED.