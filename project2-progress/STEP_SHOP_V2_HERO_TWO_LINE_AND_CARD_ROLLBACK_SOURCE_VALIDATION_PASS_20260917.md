# Shop V2 — Hero two-line + card rollback source validation PASS

Date: 2026-09-17

## User clarification

The user manually reverted content-product.php.

## Files validated

- woocommerce/content-product.php
- woocommerce/archive-product.php
- assets/css/spatial-flow.css

## Validation result

PASS.

### content-product.php
- PHP syntax: PASS.
- recently added placeholder-suppression logic is absent.
- direct _sf_material / _sf_piece_reference / _sf_placement ownership is restored.
- category fallback remains intact.
- no duplicate card markup introduced.

### archive-product.php
- PHP syntax: PASS.
- root-Shop Hero title still comes from the existing backend-editable hero_title owner.
- hero_emphasis remains the editable emphasis anchor.
- one controlled preg_replace inserts a safe br before the word immediately preceding the emphasis term.
- H1 allows only br + em.
- default runtime generation verified:
  Objects for <br>the <em>Quiet</em> Room.
- no new Customizer field was added.

### spatial-flow.css
- braces balanced: 3553 / 3553.
- comments balanced: 276 / 276.
- root-Shop Hero max-width: 560px workaround is absent.
- Shop Hero H1 now includes text-transform: none !important.
- remaining max-width: 560px declarations belong to unrelated components and must not be removed.

## Batch boundary

No products-per-page change has been made yet.
No Shop contact-band change has been made yet.
Frozen Custom Studio / DIY Signature Feature remains untouched.

## Next step

Runtime-check the Shop Hero only:
- title should render as exactly two lines:
  Objects for
  the Quiet Room.
- Quiet remains italic/accented.
- lowercase for/the must remain lowercase.
- approved wider Shop frame remains unchanged.

If runtime passes, proceed immediately to the real WooCommerce 12-products-per-page change.

Status:
SOURCE VALIDATION PASS / AWAITING HERO RUNTIME CHECK.
