# Shop V2 — Hero two-line correction + product-card rollback implementation ready

Date: 2026-09-17

## Scope

Execute the first two items from the revised Shop defect order:

1. roll back the incorrect ordinary product-card placeholder suppression;
2. fix the root-Shop Hero title so it is controlled as two editorial lines instead of being forced into three lines by max-width.

No product-count/per-page change is included in this batch yet.

## Current evidence

### Product card
The first live product card is intentionally populated with product-owned editorial values. Those values must not be filtered merely because other products have not yet been populated.

Rollback target:
- remove the placeholder suppression array / normalization / suppression conditions;
- retain direct _sf_material / _sf_piece_reference / _sf_placement output;
- retain category fallback when Material + Reference are empty.

### Hero
Current root-Shop title source is backend-editable and defaults to:
Objects for the Quiet Room.

Current CSS still contains the failed workaround:
body.post-type-archive-product.woocommerce-shop .sf-shop-v2-hero h1 { max-width: 560px; }

This forces a three-line composition and must be removed.

The live runtime also shows inherited capitalization. Add a Shop-scoped text-transform: none.

## Controlled line-break owner

Add one backend-editable Customizer field:
Shop Hero Line 2 Starts With
Default: the

The archive template:
- reads that field only on root Shop;
- inserts one safe <br> immediately before the first matching standalone word;
- keeps the existing italic emphasis owner;
- allows only br + em in the H1 output.

Default output becomes:
Objects for
the Quiet Room.

If the configured break word is not present, the title remains intact rather than fabricating a break.

## Candidate validation

Candidate files were prepared from the latest current uploaded baselines.

Results:
- content-product.php PHP syntax: PASS
- functions.php PHP syntax: PASS
- archive-product.php PHP syntax: PASS
- CSS braces: balanced
- CSS comments: balanced
- failed Hero 560px root-Shop rule: removed
- no product-count/per-page changes in this batch

## Files

- woocommerce/content-product.php
- functions.php
- woocommerce/archive-product.php
- assets/css/spatial-flow.css

## Status

IMPLEMENTATION READY / USER TO APPLY EXACT REPLACEMENTS / SOURCE VALIDATION REQUIRED BEFORE RUNTIME REFRESH.
