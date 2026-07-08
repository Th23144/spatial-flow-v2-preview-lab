# Step 4C-REWORK1 · Shop Full-Page 1:1 Rework Audit

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user reviewed the current Shop page and corrected the project record:

```text
Shop desktop is also not actually done. The prior work only changed layout/format lightly and is still far from the static 1:1 reference. Do not let older documentation imply that Shop is already visually accepted.
```

## Current status correction

```text
Earlier Step 4C Shop records should be treated as partial implementation / structure pass, not final 1:1 visual acceptance.
```

This supersedes the temporary mobile-only step:

```text
Step 4C-MOBILE1 · Shop Mobile First Screen 商品露出优化
```

New active step:

```text
Step 4C-REWORK1 · Shop desktop + mobile 1:1 rework audit：In progress
```

## Grounded file audit

Uploaded current local files:

```text
woocommerce/archive-product.php
assets/css/spatial-flow.css
```

### `woocommerce/archive-product.php`

Current structure includes:

```text
- `.sf-shop-v2-hero`
- `.sf-shop-v2-hero-meta`
- `.sf-shop-v2-controls`
- optional `.sf-shop-v2-editor-pick`
- `.sf-shop-v2-products`
- optional `.sf-shop-v2-closing-note`
- `template-parts/product-contact-band`
```

Interpretation:

```text
The PHP is a functional V2 archive shell that preserves WooCommerce loop output and dynamic fields, but it is not enough by itself to guarantee static-reference 1:1 fidelity.
```

### `assets/css/spatial-flow.css`

Current Shop CSS contains layered historical blocks:

```text
- Phase Shop Visual 1
- Phase Shop Visual 2
- Phase Shop Visual 2.1 FIX
```

Interpretation:

```text
These were incremental styling passes, not a completed controlled 1:1 Shop replacement. Their coexistence also means the Shop visual layer needs a deliberate rebase instead of another small append-only patch.
```

## Screenshot findings from user

Mobile screenshot 1:

```text
The first screen is consumed by header, breadcrumb, Hero title, meta cards, editorial copy, and filter controls. Product cards do not appear in the first screen.
```

Mobile screenshot 2:

```text
Product cards appear only after scrolling down to The Quiet Archive section. The product grid itself is usable, but the page rhythm is not conversion-first on mobile.
```

User additionally states:

```text
Desktop Shop is also far from 1:1 and should not be considered passed.
```

## Corrected scope

This is no longer only a mobile first-screen cleanup.

Actual scope:

```text
- Re-audit Shop desktop against the static reference.
- Re-audit Shop mobile against product exposure and static reference constraints.
- Treat the current archive as a partial V2 implementation, not an accepted 1:1 page.
- Preserve WooCommerce product loop, dynamic filters, sorting, pagination, product links, wishlist, add-to-cart, cart, checkout, payment, and orders.
- No plugin changes.
- No hardcoded product data.
```

Likely files:

```text
woocommerce/archive-product.php
assets/css/spatial-flow.css
functions.php only if Customizer fields or asset version need updating
```

## Required next input before editing

```text
Need desktop Shop screenshot(s), preferably current desktop /shop/ full page or at least top + product-grid areas.
Need the intended static reference target for Shop, likely `preview/spatial-flow-shop-v1.html`, before making 1:1 replacement decisions.
```

## Implementation rule

```text
Do not add another tiny patch on top of Phase Shop Visual 1 / 2 / 2.1.
First produce a desktop + mobile mismatch list, then replace/merge Shop-specific CSS in a controlled block.
```
