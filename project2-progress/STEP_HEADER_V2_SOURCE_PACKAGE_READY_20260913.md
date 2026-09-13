# Project 2 · Header V2 source package READY · 2026-09-13

## Status
The production implementation package has been generated against the user's latest server-source baseline.
This record means SOURCE PACKAGE READY only. It does not mean live-site PASS or Header closure.

## Baseline
- `functions.php`: 2.7.46 current server source
- `header.php`: current server source supplied 2026-09-12
- `assets/css/spatial-flow.css`: current server source supplied 2026-09-12
- `assets/js/spatial-flow.js`: current server source supplied 2026-09-12

## Intended production delta
- bump child-theme version 2.7.46 → 2.7.47;
- Main-site Header gets a dedicated near-full-width shell and true-center 3-column geometry;
- tablet <=1100 exits full desktop primary nav and uses Menu + centered logo + Search/Bag;
- mobile <=767 uses Menu + centered logo + Bag;
- desktop Shop mega becomes an attached editorial discovery layer using real WooCommerce taxonomy data;
- Color and Zodiac become compact disclosures instead of permanently flattening all terms;
- Main mobile drawer becomes grouped Primary / Shopping / Support;
- Checkout is intentionally excluded from permanent global navigation;
- Main mobile Shop supports deeper progressive panels for product category / purpose / five elements / color / zodiac;
- existing `sf_primary` remains the editable source for Main mobile Primary links;
- existing `sf_mobile` is preserved and is reused only to source matching Track Order / FAQ / Contact support links in the new Main mobile drawer; the cluttered admin menu itself is NOT deleted here;
- top-left issue line, center editorial line, logo subtitle and Shop editorial line gain Customizer ownership in the existing Header/Footer settings section;
- Search, YITH wishlist URL, Woo Bag URL/count, Woo taxonomy/filter URL authority remain preserved;
- Journal Header stays on the legacy branch and is not redesigned in this pass;
- old Header dynamic-mega CSS is bounded-replaced; old dedicated mobile drawer containment patch is removed from the generated CSS package; Journal mobile accordion remains available.

## Generated package
`SPATIAL_FLOW_HEADER_V2_2.7.47_PATCH.zip`

Generated file identity:

```text
header.php
21,777 bytes
SHA256 882e85d547085a2dfde6db3008d450e579802f0f292e98a461d071dda023d539

functions.php
630,934 bytes
SHA256 5b64080f9658535937eb69b1feea428c05e1da1f32de97beeadeb44ed26a90d5

assets/css/spatial-flow.css
609,555 bytes
SHA256 0c9826f82164f358bb076e36fc738922c85ee15841b3884266e580e6a97692e8

assets/js/spatial-flow.js
87,921 bytes
SHA256 ee874672ea98c5d27e413b90bbd082c12bcdaa33892997aa1590e2b20bb2e722

ZIP
207,814 bytes
SHA256 0a48fc4274c85c4f06bc52f93aaac51e9c848c392b1a6249d009e74d3cc40a90
```

## Local static validation before handoff
- patched `functions.php`: `php -l` PASS;
- patched `header.php`: `php -l` PASS;
- patched `spatial-flow.js`: `node --check` PASS.

CSS has been source-reviewed, but browser/runtime rendering is still pending.

## User apply instruction
Replace only these four child-theme files with the package versions:
1. `header.php`
2. `functions.php`
3. `assets/css/spatial-flow.css`
4. `assets/js/spatial-flow.js`

Do not modify Checkout SAFE5, Cart, Single Product, payment/order logic, WooCommerce URLs/templates, or database records in this step.

## Required next gate
After the user applies the package, obtain the four fresh live files back and verify:
- exact file identity / expected version;
- PHP + JS syntax;
- no unintended source drift.

Only then proceed to runtime desktop/tablet/mobile Header acceptance.
