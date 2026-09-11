# Project 2 · Step 4D-REOPEN · Hero Gallery returned-source audit START · 2026-09-11

## Current stage

The user returned the four manually edited live-theme source files for the approved Hero Gallery / Reference ownership batch:

```text
functions.php
woocommerce/single-product.php
assets/css/spatial-flow.css
assets/js/spatial-flow.js
```

## Governing implementation decision

Approved behavior:
- remove the large-image round prev/next controls and numeric counter;
- keep the main image visually quiet;
- show a fixed four-thumbnail viewport;
- when total gallery images exceed four, show subtle thumbnail-rail prev/next controls;
- rail moves one thumbnail at a time;
- clicking a thumbnail changes the main image;
- four or fewer images must show no thumbnail navigation controls;
- Hero public identifier uses `_sf_piece_reference`, not WooCommerce SKU;
- no fake reference/badge content;
- Woo variation/cart ownership remains unchanged.

## Audit gate

Before any browser/runtime test, verify:
1. file identity and hashes;
2. PHP syntax for `functions.php` and `woocommerce/single-product.php`;
3. JS syntax for `assets/js/spatial-flow.js`;
4. CSS brace/comment/parser integrity;
5. exact diff scope against the latest returned live baselines available in this conversation;
6. no unintended changes outside the bounded Hero Gallery / metadata batch;
7. variation-image integration remains compatible with removal of the old gallery counter.

## Current stop point

```text
RETURNED SOURCE AUDIT IN PROGRESS
RUNTIME TESTING NOT AUTHORIZED YET
```

## Exact next action

Complete the four-file source audit and record PASS / FAIL before instructing runtime testing.
