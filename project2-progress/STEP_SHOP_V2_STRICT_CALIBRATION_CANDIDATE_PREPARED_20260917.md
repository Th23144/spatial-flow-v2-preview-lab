# STEP_SHOP_V2_STRICT_CALIBRATION_CANDIDATE_PREPARED_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

LOCAL CANDIDATE PREPARED / SYNTAX-CHECKED / NOT YET APPLIED BY USER

## Current uploaded baselines

```text
woocommerce/archive-product.php
320 lines / 14,932 bytes
SHA256 2fb0c980b39f8bf7c80b5ca3adabfed29ac78a786047c9bfe57db81d4985be1b

woocommerce/content-product.php
39 lines / 1,509 bytes
SHA256 6d5f34b4f9c1c7bd10def58d8d0abe48b5bff56a1a1e37117955cf7bf93afd89

assets/css/spatial-flow.css
22,725 lines / 636,651 bytes
SHA256 3082798392d291092fc14e46b9d59345f1cd8ce15362cc023ab1053707657d6b

functions.php
12,124 lines / 635,169 bytes
SHA256 f99a318072f53adb8bdf4e9d566124430a2e02dbc164e578a0d9b87a7406829a
```

## Prepared candidate identities

```text
archive-product.php candidate
336 lines / 15,557 bytes
SHA256 39c7aa5b98d2ecbe2a9d958979ad190a8aee293d73202ba2bca55d65f058324a

content-product.php candidate
67 lines / 2,682 bytes
SHA256 e7779d34de7128ffe33c01e62fe3640c52f732348fdeeff48d9776a8df76dc6e

spatial-flow.css candidate
22,904 lines / 644,866 bytes
SHA256 65c9ca557f8f2c092da075ddf6b7126297fc75f2feaabf82afb119d1a9ea1354

functions.php candidate
12,124 lines / 635,169 bytes
SHA256 41f35b3dd98689e9c5474861774624fdd564c195aceea4a625fe481d5c04c227
```

## Validation performed

```text
php -l archive-product.php candidate: PASS
php -l content-product.php candidate: PASS
php -l functions.php candidate: PASS
CSS opening braces = closing braces: PASS
Controlled Shop START marker count: 1
Controlled Shop END marker count: 1
```

## Candidate scope

- current wider Shop frame rule intentionally unchanged;
- no JavaScript changes;
- no WooCommerce product-loop ownership replacement;
- no YITH Wishlist ownership replacement;
- no fabricated product data;
- no Header/Footer changes;
- no Single Product/Cart/Checkout changes.

Next action: user applies the documented manual OLD -> NEW replacements, then performs a hard refresh and fresh desktop/mobile runtime review.
