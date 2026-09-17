# Shop V2 — Product card placeholder suppression READY

Date: 2026-09-17

## Trigger

Post-freeze Product Section / Cards source re-audit found one bounded real defect:
content-product.php can currently render stored editor-label / placeholder-like values as if they were genuine card editorial content.

Known values already observed on the selected product:
- Product Attributes · Material
- Summary · Placement Suggestion

Editor's Pick already suppresses these exact values, but ordinary Shop cards do not.

## Planned bounded correction

Target file:
woocommerce/content-product.php

Behavior:
- read _sf_material / _sf_piece_reference / _sf_placement as before;
- normalize Material + Placement for exact placeholder comparison;
- suppress only the two known placeholder-like strings;
- keep real _sf_piece_reference;
- if Material + Reference are both empty after suppression, retain the existing real Woo product-category fallback;
- keep real Placement when non-placeholder;
- no CSS change;
- no JS change;
- no WooCommerce loop/price/link/Wishlist change.

## Candidate validation

A candidate based on the user's latest uploaded content-product.php was syntax checked locally:

PHP syntax: PASS

Diff is bounded to the metadata preparation block only.

## Next action

User applies one exact OLD -> NEW replacement in content-product.php.
Then return the file for source validation before runtime testing.

Status:
IMPLEMENTATION READY / NOT YET APPLIED.
