# STEP_SHOP_V2_BATCH_A_SOURCE_VERIFICATION_HOLD_ONE_MISSING_HERO_EMPHASIS_RULE_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

BATCH A SOURCE VERIFICATION: HOLD FOR ONE SMALL CORRECTION

The user's uploaded current files were checked before runtime screenshot validation:

- `functions.php`
- `woocommerce/archive-product.php`
- `assets/css/spatial-flow.css`

No runtime acceptance is claimed by this record.

## Verified PASS items

### PHP syntax

Both uploaded PHP files passed `php -l`:

- functions.php: PASS
- archive-product.php: PASS

### CSS structural integrity

- `{` count: 3550
- `}` count: 3550
- `/*` count: 276
- `*/` count: 276

PASS: braces and comments are balanced.

### functions.php

Verified:

- `SPATIAL_FLOW_CHILD_VERSION = 2.7.49`
- `sf_shop_v2_hero_title` Customizer owner exists
- `sf_shop_v2_hero_emphasis` Customizer owner exists
- default Hero title = `Objects for the Quiet Room.`
- default emphasized word = `Quiet`

### archive-product.php

Verified:

- root-Shop detection exists
- root Shop Hero title uses the new backend-editable owner
- Hero emphasis word is wrapped in `<em>` through a controlled allowlist
- breadcrumb now supports `Home / Shop / editorial identity` on root Shop
- archive/taxonomy pages preserve real archive context
- Editor's Pick right-side eyebrow no longer duplicates left stamp
- Editor's Pick reads `_sf_piece_reference`
- Editor's Pick reads `_sf_material`
- Editor's Pick reads `_sf_placement`
- short description fallback is present
- existing manual theme-mod overrides remain respected
- Woo product owner remains intact

### spatial-flow.css

Verified:

- Shop deep beige token `#ede7df` added
- Shop body/canvas background ownership added
- `.site-content`, `.ast-container`, `.content-area`, `.site-main`, `.sf-shop-v2` Shop-scoped background ownership added
- `.sf-shop-v2` local Inter 300 baseline added
- approved wider Shop container rule remains unchanged
- Hero ordinary body paragraph now has explicit Inter / 300 ownership
- Hero signoff now has explicit serif italic / 300 ownership
- Editor's Pick subtitle/body/place now have explicit typography ownership
- Editor's Pick price micro-label changed from JetBrains Mono to Inter
- prior image zoom removal remains intact

## One missing rule found before runtime

The PHP now outputs the root Hero emphasized word as:

```html
<em>Quiet</em>
```

but the current uploaded CSS has no Shop-scoped rule for the Hero `h1 em` element.

Without this rule, the browser will normally italicize the word, but it will inherit the parent H1 ink color instead of the reference bluestone color.

Required final correction before runtime validation:

```css
:is(body.post-type-archive-product.woocommerce-shop, body.tax-product_cat, body.tax-product_tag, body[class*=" tax-pa_"], body[class*=" tax-pa-"]) .sf-shop-v2-hero h1 em {
  color: var(--sf-shop-rework-blue) !important;
  font-style: italic;
  font-weight: 300;
}
```

## Boundary

Do not change the approved wider Shop width.
Do not reopen Header/Footer.
Do not continue with lower-page detail tuning until this one missing Hero emphasis rule is corrected and Batch A runtime evidence is captured.
