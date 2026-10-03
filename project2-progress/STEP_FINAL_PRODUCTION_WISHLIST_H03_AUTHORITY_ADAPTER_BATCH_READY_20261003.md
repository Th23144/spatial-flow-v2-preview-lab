# Final Production Wishlist — H03 Authority Adapter Multi-file Batch Ready

Date: 2026-10-03
Project: Spatial Flow V2 / Project 2

## Purpose

Replace the rejected visible-YITH-table approach with a true authority adapter.

YITH / WooCommerce remain the state and action owners, but the visible Wishlist composition is rebuilt to match `preview/spatial-flow-wishlist-harmonized-v1.html` structurally.

## Current verified baselines

`functions.php`
- bytes: 634,112
- lines: 12,138
- SHA256: `fa20f350ad1c25c2ed5d52baf2ed78f61c7180f85edc9b47658f5a37e8c18428`

`assets/css/spatial-flow.css`
- bytes: 620,413
- lines: 21,982
- SHA256: `e3a449417476bfd44fb9fdbb368eef2217f1be9906986df47bd8301c21e237b3`

`assets/js/spatial-flow.js`
- bytes: 96,849
- lines: 2,965
- SHA256: `ff855ead51af7e46ff79f1344cf2152d9eaa054900e59777594cacdd55942584`

## Batch contents

### functions.php
- bump version 2.7.51 -> 2.7.52;
- add one-time migration for known legacy Wishlist Customizer copy, so saved old values cannot override the accepted authority defaults;
- derive real Woo product metadata (image/category/short description/permalink) from YITH row product IDs;
- replace H02 shell with H03 shell containing:
  - authority intro/toolbar/index/jump;
  - visible authority room;
  - hidden native YITH source;
  - product metadata JSON;
  - persistent empty state.

### CSS
- replace entire H02 + Runtime Compatibility Fix 01 block with one canonical H03 authority block;
- port accepted authority geometry for intro / toolbar / index / first item / later items / metadata / blurb / actions / responsive behavior;
- hidden YITH source has no visible layout responsibility.

### JS
- replace H02 index-only logic with H03 adapter;
- build visible `.item`-style editorial spreads from live YITH rows plus real Woo metadata;
- proxy Add/Select Options and Release actions to the real hidden YITH/Woo controls;
- rebuild after live wishlist mutations;
- preserve real product URL, price, stock, and empty-state transitions.

## Simulated output

`functions.php`
- bytes: 639,859
- lines: 12,254
- SHA256: `bc905fdf9748400bf927749d2e610ee2de8fecfccb3720d0f8320cabe8378858`
- `php -l`: PASS

`assets/css/spatial-flow.css`
- bytes: 608,459
- lines: 21,650
- SHA256: `9d0d9edaa44cb50ffe34d15d58f59b37c179bc0d5537d605af6b96a0f0d73672`
- CSS brace delta: 0

`assets/js/spatial-flow.js`
- bytes: 103,389
- lines: 3,105
- SHA256: `7f26c420fa2ad8ec010cea17e06e715edf737361c288385a722c5012fb0646fe`
- Node syntax: PASS

## Deployment protocol

Manual anchored multi-file replacement in one logical step.
User edits all three files, then returns all three together for combined verification.

Do not proceed to Search until H03 source and runtime Wishlist are accepted.