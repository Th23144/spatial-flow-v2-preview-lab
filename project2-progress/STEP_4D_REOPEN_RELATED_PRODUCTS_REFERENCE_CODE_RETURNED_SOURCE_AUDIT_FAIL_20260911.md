# Project 2 · Step 4D-REOPEN · Related Products Reference / Piece Code returned source audit FAIL · 2026-09-11

## Scope
Audit of the user's returned files after separating the public-facing Related Products reference code from WooCommerce SKU.

Returned files:
- `functions(20260911-192901).php`
- `single-product(20260911-192900).php`

Fresh runtime screenshot was also reviewed.

## Baseline comparison
Compared against the immediately previous accepted local/source baselines available in the working session:

### functions.php baseline
- bytes: 622,421
- logical lines: 11,891
- SHA256: `b18b498cab1752ef79477f97ef3ee463aea073e4279c9f8919b315ab573f7eb1`
- child version: `2.7.43`

### single-product.php baseline
- bytes: 38,460
- logical lines: 765
- SHA256: `e3a25b490179861f7b32bea093c99be65a9c69f4d8fb00c848ff9fa8899d996f`

## Returned identities

### functions.php
- bytes: 622,811
- logical lines: 11,896
- SHA256: `d9e3177fad9c0fe7a4d7922b2085ada68ad57cec775498c9444297a4e4f45809`
- PHP lint: PASS

Expected functional additions are present:
- new backend-editable `_sf_piece_reference` field labeled `Reference / Piece Code`
- clear description that this is public-facing and separate from WooCommerce SKU
- `_sf_piece_reference` added to the existing save array

However, the version line was returned as:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.44 ' );
```

There is an unintended trailing space inside the version string. The required value is exactly:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.44' );
```

This is a bounded source defect. PHP syntax still passes, but the returned source does not exactly match the authorized delta and the version string should not carry whitespace.

### single-product.php
- bytes: 38,499
- logical lines: 765
- SHA256: `19c1ed07d7584f72993293dd05a4d7dc1343ecf3823e016599b6bcedc60bc838`
- PHP lint: PASS

Whole-file diff is clean and limited to the authorized Related Products ownership change:
- `$sf_related_sku` was replaced with `$sf_related_reference`
- source now reads `_sf_piece_reference`
- meta output uses `$sf_related_reference` + edition
- no other template region changed

## Runtime screenshot findings
The fresh desktop screenshot confirms:
- `VIEW PIECE →` hover state renders on the first product image: PASS
- public code `SF-OB-001` renders beneath `Natural Obsidian Bracelet`: PASS
- placement note renders beneath price with the intended editorial treatment: PASS
- four-column reference geometry remains intact: PASS
- title / `View the full edit →` remain intact: PASS

Because the returned template reads `_sf_piece_reference`, the screenshot is valid evidence that the public Reference / Piece Code path is functioning independently from the previous SKU-based Related Products output.

Edition is not visible in the screenshot; this is expected if the test product's Edition field is empty. Empty edition handling therefore remains valid and no fake Edition should be added for visual parity.

## Gate result

```text
Reference / Piece Code runtime path: PASS
VIEW PIECE hover: PASS
single-product.php source: PASS
functions.php PHP syntax: PASS
functions.php exact source gate: FAIL (trailing space in 2.7.44 version string)
Overall returned source gate: FAIL / one-line correction required
```

## Required correction
Change only:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.44 ' );
```

to:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.44' );
```

Do not change any other code.

## Stop point

```text
Step 4D-REOPEN · Related Products strict 1:1 remediation
Reference / Piece Code ownership: runtime proven
Hover state: runtime proven
Returned source gate: FAIL only because of trailing whitespace in version string
```

## Exact next action
User corrects the single version line in `functions.php` and returns that file only → re-audit identity/syntax → if exact, mark source gate PASS and proceed to final Related Products closure assessment.
