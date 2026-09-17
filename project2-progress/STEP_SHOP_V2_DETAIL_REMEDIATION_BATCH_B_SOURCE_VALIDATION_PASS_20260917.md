# STEP_SHOP_V2_DETAIL_REMEDIATION_BATCH_B_SOURCE_VALIDATION_PASS_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

BATCH B SOURCE VALIDATION: PASS

Runtime validation is still pending.

## Files validated

- `functions.php`
- `woocommerce/archive-product.php`
- `assets/css/spatial-flow.css`

## Confirmed implementation

### functions.php

- `SPATIAL_FLOW_CHILD_VERSION` = `2.7.50`.
- `sf_shop_v2_editor_pick_emphasis` Customizer field exists exactly once.
- Field label: `Editor’s Pick Italic Word`.
- Existing `sf_shop_v2_hero_title` default remains `Objects for the Quiet Room.`.
- Existing `sf_shop_v2_hero_emphasis` default remains `Quiet`.

### archive-product.php

Editor’s Pick now follows product-owned data first:

- subtitle: `_sf_material` first, Shop-level subtitle fallback second;
- body: WooCommerce product short description first, Shop-level body fallback second;
- placement: `_sf_placement` first, Shop-level placement fallback second;
- right-side eyebrow: `_sf_piece_reference` directly; no fabricated `Selected piece · current edit` fallback;
- empty right-side eyebrow is conditionally omitted;
- controlled Editor’s Pick title emphasis uses `sf_shop_v2_editor_pick_emphasis` and only permits an `<em>` wrapper in output.

WooCommerce product ownership remains intact.

### spatial-flow.css

- Root Shop Hero title has a root-Shop-only `max-width: 560px` measure.
- Global Shop/container width was not changed.
- Editor’s Pick H2 `<em>` receives the Shop bluestone color and italic styling.
- CSS brace counts are balanced.
- CSS comment delimiter counts are balanced.

## Static validation

Local syntax checks on the uploaded files:

```text
archive-product.php: PHP syntax PASS
functions.php: PHP syntax PASS
spatial-flow.css: { 3553 / } 3553
spatial-flow.css: /* 276 / */ 276
```

## Important runtime caveat

The `functions.php` default for Shop Hero Title is correct, but an already-saved Customizer theme-mod can override that default. Runtime should therefore verify the actual saved value is exactly:

```text
Objects for the Quiet Room.
```

and the italic word is:

```text
Quiet
```

## Next

Hard-refresh Shop and validate:

1. desktop Hero title line break / capitalization;
2. Editor’s Pick right-side eyebrow behavior when `_sf_piece_reference` is empty or populated;
3. product-owned Material / Short Description / Placement rendering;
4. optional Editor’s Pick italic-word styling;
5. mobile Hero remains stable.

No further code changes are authorized before runtime evidence.
