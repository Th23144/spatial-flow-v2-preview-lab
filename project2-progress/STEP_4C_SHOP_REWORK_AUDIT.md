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

File size / line audit:

```text
archive-product.php
- Size: 14,932 bytes
- Lines: 320
- SHA256: 2fb0c980b39f8bf7c80b5ca3adabfed29ac78a786047c9bfe57db81d4985be1b

spatial-flow.css
- Size: 791,785 bytes
- Lines: 26,632
- SHA256: e6ea57cab4d1cf2342929f1fd74d78c41eff10141d434010b8106d7ed395cb58
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

Uploaded screenshot evidence:

```text
Mobile first screen screenshot: 374 × 811 px, 111,722 bytes
Mobile product-grid screenshot: 374 × 811 px, 122,355 bytes
Desktop top screenshot: 1920 × 1080 px, 474,064 bytes
Desktop full-page screenshot: 664 × 2048 px, 178,388 bytes
```

Mobile screenshot 1:

```text
The first screen is consumed by header, breadcrumb, Hero title, meta cards, editorial copy, and filter controls. Product cards do not appear in the first screen.
```

Mobile screenshot 2:

```text
Product cards appear only after scrolling down to The Quiet Archive section. The product grid itself is usable, but the page rhythm is not conversion-first on mobile.
```

Desktop screenshots:

```text
The desktop page is functional and visually coherent, but it is still not the static Shop 1:1 target.
The current desktop top area is too compressed vertically compared with the static reference: hero and toolbar are smaller, boxed, and closer together.
The current Editor’s Pick is inside a rounded card/panel, while the static reference is an open full-width editorial section with a 5fr/7fr grid and border rhythm.
The current product cards are rounded card tiles with shadows, while the static reference product grid is more open and editorial: 4/5 image ratio, larger spacing, serif titles, visible place notes, and hover quick action.
```

User additionally states:

```text
Desktop Shop is also far from 1:1 and should not be considered passed.
```

## Static reference target

Confirmed reference file:

```text
preview/spatial-flow-shop-v1.html
```

Important reference traits:

```text
- Hero: max-width 1440px, 64px/56px/80px spacing, 1.1fr / 1fr grid, 96px gap, border-bottom.
- Toolbar: max-width 1440px, horizontal filters + sort, 36px/56px spacing, border-bottom.
- Editor’s Pick: max-width 1440px, 80px/56px spacing, 5fr / 7fr grid, 80px gap, open editorial section with border-bottom.
- Product section: 80px top spacing, 4-column grid, 56px row gap / 40px column gap.
- Product cards: 4/5 image ratio, open layout instead of rounded panel cards, serif title, italic subtext/place note, hover quick action.
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
No more screenshots are required for the first audit pass. The user has provided mobile first-screen, mobile product-grid, desktop top, and desktop full-page screenshots.
```

## Implementation rule

```text
Do not add another tiny patch on top of Phase Shop Visual 1 / 2 / 2.1.
First produce a desktop + mobile mismatch list, then replace/merge Shop-specific CSS in a controlled block.
```

## Next action

```text
Prepare Step 4C-REWORK1-A mismatch list and replacement plan before editing files.
```
