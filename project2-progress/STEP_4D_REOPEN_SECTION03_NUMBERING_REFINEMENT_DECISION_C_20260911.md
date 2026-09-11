# Project 2 · Step 4D REOPEN · Section 03 numbering refinement decision C · 2026-09-11

## Trigger
After Section 03 · Care & Ritual was fully accepted and closed, the user reviewed a non-production HTML comparison of two bounded visual alternatives for the unit numbering treatment:
- Option B: 01 / 02 / 03 aligned with the unit title
- Option C: remove unit numbering entirely

The user explicitly selected **Option C**.

## Locked visual decision
Remove the per-unit numbering from Section 03.

Final unit presentation should keep:
- Section · 03 kicker
- main `Care, And A Little Ritual.` heading
- `The Everyday.` / `The Seasonal.` / `The Repair.` unit titles
- product-specific care body copy
- existing desktop three-column layout
- existing <=900px / mobile one-column stack and separators
- existing hide-the-entire-section behavior when all three body fields are empty

Remove only the visual numbering layer (`i. / ii. / iii.`).

## Source review against current returned files
The current uploaded `single-product.php` renders the number only through:

```php
<span class="sf-product-v2-care__number">
    <?php echo esc_html( $sf_section03_unit['number'] ); ?>
</span>
```

The current uploaded `spatial-flow.css` contains a dedicated `.sf-product-v2-care__number` rule used only for that visual layer.

Therefore Option C can be implemented as a bounded two-file cleanup:
1. `woocommerce/single-product.php`: remove the numbering `<span>` only.
2. `assets/css/spatial-flow.css`: remove the now-dead `.sf-product-v2-care__number` rule only.

No Section 03 backend fields, save logic, data model, visibility logic, unit titles, body content, grid, responsive stack, WooCommerce behavior, or other product-page sections are to be changed.

## Cache/version note
Because `spatial-flow.css` changes, the child-theme asset version should be bumped in `functions.php` from `2.7.39` to `2.7.40` so the live site receives the cleaned stylesheet deterministically. No other `functions.php` logic is authorized to change.

## Acceptance gate
After the bounded edit returns:
- source review / syntax / structure pass
- desktop: no unit numbers; three columns and titles/bodies unchanged
- 390px mobile: no unit numbers; one-column stack and separators unchanged
- all-three-bodies-empty behavior still hides the whole Section 03

Only then close the numbering refinement.

## Current state
Decision C: LOCKED
Implementation: NOT YET APPLIED
Section 03 prior accepted implementation remains the protected baseline until the bounded refinement passes.
