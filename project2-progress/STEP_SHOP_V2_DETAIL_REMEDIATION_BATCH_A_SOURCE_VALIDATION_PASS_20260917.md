# Shop V2 Detail Remediation — Batch A Source Validation PASS — 2026-09-17

## Scope
Validation of the latest user-edited Shop Batch A source files before runtime screenshot review.

## Latest CSS validation
Reviewed latest uploaded `spatial-flow.css` after the missing Hero emphasis rule was added.

Confirmed:
- `.sf-shop-v2-hero h1 em` exists exactly once in the latest CSS.
- It uses `color: var(--sf-shop-rework-blue) !important;`.
- It uses `font-style: italic;` and `font-weight: 300;`.
- The rule is placed immediately after the controlled Shop Hero `h1` rule and before Hero meta rules.
- Structural counts on the latest CSS: `{` = 3551, `}` = 3551; `/*` = 276, `*/` = 276.
- CSS parser validation reported zero parse errors.
- No duplicate `.sf-shop-v2-hero h1 em` selector was found.

## Batch A source state
Prior validation already confirmed:
- `functions.php` child version bumped to `2.7.49`.
- Root Shop Hero Title and Hero Italic Word Customizer ownership added.
- `archive-product.php` root Shop editorial title, breadcrumb identity, and Editor’s Pick product-meta ownership were integrated.
- Shop warm canvas, local typography baseline, Hero body/signoff and Editor’s Pick typography ownership rules were added.

## Status
**SOURCE VALIDATION: PASS**

The previously identified missing Hero emphasis CSS has now been corrected. No further source correction is required before runtime review.

## Next step
Refresh the Shop page and perform runtime visual review for Batch A, focusing on:
1. warm paper canvas,
2. root Shop Hero title and blue/italic `Quiet`,
3. Hero body/signoff font weight,
4. Editor’s Pick right-column hierarchy and font weight,
5. desktop and mobile rendering.

Do not change the approved wider Shop container width during this pass.
