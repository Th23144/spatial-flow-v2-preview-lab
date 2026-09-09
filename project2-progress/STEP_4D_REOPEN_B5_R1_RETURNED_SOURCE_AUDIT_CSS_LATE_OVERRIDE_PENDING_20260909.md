# Step 4D · Reopen B5-R1 Returned Source Audit · CSS Late Override Pending · 2026-09-09

## Scope
User returned the three manually patched Single Product B5-R1 files for source validation before any frontend test:
- `functions.php`
- `woocommerce/single-product.php`
- `assets/css/spatial-flow.css`

## Source checks
### functions.php
- Theme version changed to `2.7.38`.
- `_sf_piece_edition` backend description now documents reuse by Hero metadata.
- PHP lint: PASS.
- Returned file SHA256: `c1c26b265a79459b7359effc1064522366e28a49fcc6d7b4fe649cfd51ee6d1e`.

### single-product.php
- Native WooCommerce SKU is now used directly; the old `No. <product ID>` fallback variable is removed.
- Hero metadata is assembled from SKU, real product category, and the existing `_sf_piece_edition` field.
- Numeric-leading edition values such as `9 of one` produce Hero copy `Edition of 9`; nonnumeric values fall back to `Edition · <value>`.
- Duplicate standalone category kicker markup is removed.
- PHP lint: PASS.
- Returned file SHA256: `f5af25ff3f28d399f4c38b40ee169531575af9551530e6fab174aca8665575ad`.

### spatial-flow.css
- Brace count is balanced: 3339 opening / 3339 closing.
- The intended new base Hero metadata rule is present (`#a8745c`, 10px, 400, 22px bottom gap).
- However, later desktop-only Step 4D-1-A / Step 4D-1-B rules still override it with `!important` declarations:
  - later `.sf-product-v2-meta-top` uses 28px bottom gap, gray color, 11px, weight 500;
  - an obsolete `.sf-product-summary > .sf-kicker` desktop rule remains;
  - later desktop `h1` rules restore 12px / 14px top margin.
- Therefore the CSS source is **not accepted yet** and frontend testing must not begin.
- Returned file SHA256: `f68cbf4bdd72f79b9fc559fad1b926bca528725b4eb1f86b2cb28968606a3afd`.

## Decision
B5-R1 returned-source gate is **PARTIAL PASS / CSS CORRECTION REQUIRED**.

Do not test frontend yet. Correct the later desktop override rules first, then re-audit the returned CSS. No PHP rewrite is required unless new evidence appears.
