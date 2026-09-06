# Step 4D Reopen · B2 Product Attributes information-band patch definition

Date: 2026-09-06

## Objective
Rework the current Single Product Product Attributes area from a framed/card-like module into the flat editorial information-band direction of `preview/spatial-flow-product-v1.html`.

## User-approved direction
- Remove the large frontend `Material, Space, And Care` heading treatment.
- Remove white/card surfaces and per-cell box framing.
- Preserve the real backend-editable per-product values and existing title ownership.
- Keep the section visually lightweight: top/bottom editorial rules, four columns on desktop, responsive collapse on smaller viewports.

## Source ownership
Current template output is in `woocommerce/single-product.php` under `.sf-product-v2-attributes`.
Current visible card/frame ownership is in the canonical Single Product block in `assets/css/spatial-flow.css`:
- `.sf-product-v2-attributes__head`
- `.sf-product-v2-attributes__grid`
- `.sf-product-v2-attribute-card`

Per-product data remains sourced from:
- `_sf_material`
- `_sf_suitable_space`
- `_sf_care`
- `_sf_gift_service`

Global labels remain owned by existing Customizer settings. No data migration and no new backend system.

## Implementation boundary
1. Remove only the frontend head block from `single-product.php`; retain the section `aria-label` based on the existing eyebrow setting.
2. Replace the canonical Product Attributes CSS block instead of appending another late override.
3. Keep four columns desktop, two columns tablet, one column mobile for the first pass; remove all card backgrounds and vertical box borders.
4. Bump theme asset version only for cache invalidation.
5. Do not touch Section 01+, Related Products, variation logic, cart logic, or checkout.

## Acceptance
Returned source must pass exact-diff and syntax/structure checks before runtime testing.
Runtime acceptance will use desktop + 390px mobile only; no third routine viewport will be added unless a visible defect creates a specific diagnostic need.