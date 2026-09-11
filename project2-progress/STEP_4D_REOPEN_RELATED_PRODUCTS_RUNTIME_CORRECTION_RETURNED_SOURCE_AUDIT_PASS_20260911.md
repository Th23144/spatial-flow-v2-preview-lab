# Step 4D-REOPEN · Related Products runtime-correction returned source audit PASS

Date: 2026-09-11

## Verdict

SOURCE PASS.

The two returned files were compared against the immediately previous returned baseline (`functions(20260911-140819).php` and `spatial-flow(20260911-140817).css`). The diff is exactly the bounded runtime-correction delta and contains no unrelated edits.

## Whole-file diff result

### functions.php
Only one change exists:

```text
SPATIAL_FLOW_CHILD_VERSION 2.7.42 -> 2.7.43
```

Identity:

```text
bytes: 622,421
logical lines: 11,890
SHA256: b18b498cab1752ef79477f97ef3ee463aea073e4279c9f8919b315ab573f7eb1
PHP lint: PASS — No syntax errors detected
```

### spatial-flow.css
Only one contiguous diff hunk exists inside the existing scoped Related Products block:

```text
+ box-sizing: border-box;
padding: 96px 0 -> 96px 56px;
+ text-transform: none !important;
```

No other CSS changed.

Identity / structure:

```text
bytes: 603,372
logical lines: 21,350
SHA256: 6adb041dd0942c1dcfcd8aa17a0ea8ebb9cb430dfb5a4776adc458579c378161
brace balance: 3352 / 3352
comment balance: 280 / 280
tinycss2 top-level parse errors: 0
```

The existing `@media (max-width: 1100px)` Related Products padding override remains unchanged, so this correction affects the wide desktop composition while preserving the previously bounded tablet/mobile behavior.

## Protected scope

No changes were made in this correction round to:
- `woocommerce/single-product.php`
- WooCommerce related-product selection/query ownership
- image/title/price/permalink/SKU ownership
- `_sf_piece_edition`
- `_sf_placement`
- Section 01 / 02 / 03
- Add to Cart / variations / Wishlist / checkout

## Runtime next gate

Install the returned v2.7.43 source and retest:
- wide desktop Related Products geometry against the reference
- heading capitalization (`Pieces of a similar weight.`)
- 390px mobile regression
- dynamic SKU / Edition / Placement rows only where real backend values exist

Related Products remains `NOT 1:1` until fresh runtime evidence passes.

Status: SOURCE PASS / RUNTIME RETEST AUTHORIZED
