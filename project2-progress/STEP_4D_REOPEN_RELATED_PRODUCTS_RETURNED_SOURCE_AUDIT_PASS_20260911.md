# Project 2 · Step 4D-REOPEN · Related Products returned source audit PASS · 2026-09-11

## Scope

Source gate for the three manually returned files from the Related Products strict-reference remediation.

Returned files:

- `functions.php`
- `woocommerce/single-product.php`
- `assets/css/spatial-flow.css`

Baseline used for exact whole-file comparison:

- accepted `functions.php` v2.7.41 returned on 2026-09-11 13:05
- accepted `single-product.php` returned on 2026-09-11 12:50 after Option C numbering removal
- accepted `spatial-flow.css` v2.7.41 returned on 2026-09-11 13:05 after Section 03 strict-reference border correction

## Returned identities

### functions.php

```text
bytes: 622,421
logical lines: 11,891
SHA256: 837a9a3f574f57292725e22074e44d8470e864017ce138c13edda69e048a73e5
SPATIAL_FLOW_CHILD_VERSION: 2.7.42
php -l: PASS
```

Exact whole-file diff against accepted v2.7.41 baseline:

```text
one change only:
2.7.41 -> 2.7.42
```

No other functions.php content changed.

### woocommerce/single-product.php

```text
bytes: 38,460
logical lines: 765
SHA256: e3a25b490179861f7b32bea093c99be65a9c69f4d8fb00c848ff9fa8899d996f
php -l: PASS
```

Exact whole-file diff contains one contiguous hunk only, replacing the prior Related Products output block.

Verified returned implementation:

- preserves `$related_products` and its existing dynamic source
- computes real Shop URL with WooCommerce permalink fallback
- renders reference-aligned heading `Pieces of a similar weight.`
- renders `View the full edit →`
- keeps each related product image, title, price and permalink dynamic
- reads WooCommerce SKU dynamically
- reads existing `_sf_piece_edition` product meta dynamically
- reads existing `_sf_placement` product meta dynamically
- omits missing SKU/edition/placement rather than fabricating content
- removes the prior category-label / `Explore` card composition
- no cart, variation, checkout, Section 01/02/03, or other template ownership changed

### assets/css/spatial-flow.css

```text
bytes: 603,308
logical lines: 21,348
SHA256: 2b947f8e9cdb7341293a63c21e24828f11651430587701865b987374c860b353
brace balance: 3352 / 3352
comment balance: 280 / 280
tinycss2 top-level parse errors: 0
```

Exact whole-file diff against the accepted v2.7.41 baseline contains one contiguous hunk only: the existing Step 4D-1-E Related Products block was replaced in place.

Verified canonical block behavior:

- open editorial shell; no white-card frame/background/shadow on Related cards
- 4:5 image surface
- desktop 4-column grid
- <=1100px 3 columns
- <=720px 2 columns
- <=480px 1 column
- reference-style heading and top-right shop link treatment
- title / SKU+edition / price / placement-note hierarchy
- hover `View piece →` image overlay
- no append-only repair block was added

## Legacy cascade check

Older unscoped Related Products repair blocks still exist later in the stylesheet, as already documented technical debt.

They were intentionally not deleted in this bounded step.

The returned canonical block uses `.single-product .sf-related-products ...` scoped selectors and, for conflict-prone grid/image/card properties, higher specificity plus the required `!important` ownership. Current source inspection therefore shows no known later rule with equal/higher Single Product specificity that overrides the intended canonical Related Products block.

Legacy cleanup remains a separate post-visual-acceptance task; this PASS does not close that debt.

## Result

```text
RELATED PRODUCTS RETURNED SOURCE GATE: PASS
```

Runtime/visual acceptance is now authorized.

Required next evidence:

1. fresh desktop screenshot of the full Related Products block
2. fresh 390px mobile screenshot of the Related Products block
3. verify real product data behavior, especially whether available SKU / edition / placement fields render correctly and missing values hide cleanly
4. compare against `preview/spatial-flow-product-v1.html`

Do not proceed to Gift CTA / Closing Editor's Note until Related Products runtime acceptance is complete.
