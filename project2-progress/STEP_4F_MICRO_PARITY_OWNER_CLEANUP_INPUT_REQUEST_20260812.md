# Step 4F · Micro Parity Owner Cleanup · Input Request · 2026-08-12

Status: READY FOR OWNER-LEVEL PATCH PREPARATION · ONE LIVE FILE STILL REQUIRED

## Why this step exists
Runtime computed-style audit has already identified concrete ownership conflicts that prevent strict 1:1 parity, including:
- SAFE5 root typography inheriting an incorrect 600 weight instead of the reference 400 baseline;
- legacy Checkout Summary rules in `assets/css/spatial-flow.css` still winning against SAFE5 for `.product-quantity` and related product-row presentation;
- known SAFE5 differences such as summary sticky top, Packaging boundary-note margin, and Step 02 copy.

## Inputs already available and do not need to be re-requested
The current conversation already contains the latest accepted/live copies needed for:
- `functions.php` (current Micro Parity V1 baseline, version 2.7.11);
- `assets/css/checkout-safe5.css` (current Micro Parity V1 + outer Woo width-owner correction baseline).

No additional Console run or screenshot is required before preparing the next patch.

## One required live input
Before editing the shared stylesheet, obtain the **current live**:

`assets/css/spatial-flow.css`

Reason: previously uploaded copies are from July and cannot be trusted as the current production/manual-edit baseline. This is a large shared stylesheet and Project 2 policy requires exact-current-file inspection before bounded removal/shrinkage of legacy Checkout ownership.

## Planned next patch scope after current spatial-flow.css is supplied
1. `assets/css/spatial-flow.css`
   - identify exact legacy Checkout Summary owner blocks currently competing with SAFE5;
   - retire or narrow only the obsolete Checkout-specific ownership;
   - no whole-file replacement and no blind tail override.
2. `assets/css/checkout-safe5.css`
   - lock root typography to the reference inheritance baseline;
   - correct known source-proven Step 02 values such as sticky top and Packaging boundary-note margin;
   - merge/replace inside existing owners only.
3. `functions.php`
   - correct the known Step 02 backend-editable default copy to the formal static reference where this does not alter WooCommerce authority.

`form-checkout.php` and `checkout-safe5.js` are not expected to change in this batch unless the exact source audit proves otherwise.

## Validation standard
Each manual edit must be delivered with exact target file identity, old code/anchor, expected match count, replacement/removal, expected byte/hash result where feasible, syntax/parser checks, rollback boundary, and stop point.

Strict 1:1 remains the acceptance standard; screenshots are validation evidence, not the primary source of truth.
