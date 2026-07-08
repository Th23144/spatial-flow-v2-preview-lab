# Step 4C-REWORK1-A · Shop Mismatch List + Replacement Plan

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
In progress.
```

## Source of truth

Static visual reference:

```text
preview/spatial-flow-shop-v1.html
```

Current local implementation inputs:

```text
woocommerce/archive-product.php
assets/css/spatial-flow.css
```

Current correction:

```text
Earlier Shop Step 4C records are partial structure/layout passes, not final 1:1 visual acceptance.
```

## Current file baseline

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

## Static reference traits to match

### 1. Shop Hero

Reference:

```text
- Max width: 1440px
- Padding: 64px top / 56px side / 80px bottom
- Desktop grid: 1.1fr / 1fr
- Gap: 96px
- Border-bottom rhythm
- Left: small terracotta kicker, huge serif title, meta row below title
- Right: lede/body/signoff aligned near bottom
```

Current mismatch:

```text
- Current hero is visually smaller and compressed.
- Current meta cards are boxed/pill-like instead of quiet open editorial metadata.
- Current desktop spacing does not breathe like the reference.
- Current mobile first screen is overloaded before products appear.
```

### 2. Toolbar / filters

Reference:

```text
- Open horizontal toolbar
- Max width: 1440px
- Padding: 36px / 56px
- Border-bottom rhythm
- Filters are text-like editorial controls with active underline / simple state
- Sort is right-aligned, compact, not a large rounded panel
```

Current mismatch:

```text
- Current controls are inside a rounded bordered panel.
- Current filter pills are visually heavier than the reference.
- Mobile controls take too much vertical space before products.
```

### 3. Editor’s Pick

Reference:

```text
- Open full-width editorial section
- Padding: 80px / 56px
- Desktop grid: 5fr / 7fr
- Gap: 80px
- Border-bottom rhythm
- Image aspect ratio: 4/5
- Text side is vertically centered, large serif title, italic subline, placement note, price/button footer
```

Current mismatch:

```text
- Current Editor’s Pick is inside a rounded card/panel.
- Current section feels like a feature card, not an open editorial spread.
- Desktop top stack is functional but not 1:1.
```

### 4. Product section head

Reference:

```text
- Padding: 80px / 56px / 24px
- Section head is open, wide, and horizontally balanced.
- Title is serif, around 40px, not oversized relative to the grid.
- Count sits on the opposite side.
```

Current mismatch:

```text
- Current title section is visually closer than the hero but still inherits current V2 styling.
- Mobile title appears only after too much hero/filter content.
```

### 5. Product grid / cards

Reference:

```text
- 4 columns on desktop
- Gap: 56px row / 40px column
- Product cards are open editorial cards, not rounded white tiles with heavy shadow.
- Product image ratio: 4/5
- Title uses serif typography
- Subtext/place note visible and editorial
- Hover quick action appears over image
```

Current mismatch:

```text
- Current cards are rounded white tiles with shadows.
- Current card text is smaller and more ecommerce-card-like.
- Wishlist heart placement is acceptable functionally, but the card visual does not match reference.
- Placeholder images make the page look visually weaker; this is content/data quality, not only CSS.
```

### 6. Pagination

Reference:

```text
- Pagination has generous top/bottom spacing.
- It sits inside a bordered rhythm block with previous/next style behavior.
```

Current mismatch:

```text
- Current WooCommerce pagination is functional but not fully reference-matched.
```

### 7. Closing note

Reference:

```text
- Open two-column footer note.
- Serif left copy, right paragraph/button.
- More spacious editorial rhythm.
```

Current mismatch:

```text
- Current closing note is close in content but still lives within current theme treatment and needs spacing/typography alignment.
```

## Replacement strategy

### Decision

```text
Do not add another tiny patch on top of Phase Shop Visual 1 / 2 / 2.1.
Use a controlled Shop CSS rebase block and minor PHP class/structure adjustments only where the current markup prevents 1:1 alignment.
```

### File strategy

```text
1. `woocommerce/archive-product.php`
   - Keep WooCommerce product loop, taxonomy filters, sorting, pagination, editor pick product source, closing note, and contact band.
   - Adjust markup/classes only if needed to match static reference structure.
   - Do not hardcode product data.

2. `assets/css/spatial-flow.css`
   - Replace/merge Shop-specific visual blocks, especially Phase Shop Visual 1 / 2 / 2.1.
   - Create one controlled Step 4C-REWORK1 Shop block.
   - Preserve unrelated Header, Footer, Single Product, Cart, Checkout, Blog, Wishlist, and global styles.

3. `functions.php`
   - Only touch if a version bump or Customizer field is required.
```

## Proposed implementation steps

### Step 4C-REWORK1-B · PHP structure alignment

Goal:

```text
Bring `archive-product.php` closer to the static reference while preserving dynamic WooCommerce behavior.
```

Likely changes:

```text
- Convert `.sf-shop-v2-hero-meta` output from boxed card feel to an open metadata row via CSS; PHP may stay unchanged.
- Keep `.sf-shop-v2-controls` but style it as the static toolbar instead of rounded panel.
- Keep optional Editor’s Pick logic but style as open `.pick` reference structure.
- Keep WooCommerce loop exactly intact.
- Consider adding class hooks for product-section head and count if current hooks are insufficient.
```

### Step 4C-REWORK1-C · CSS controlled Shop rebase

Goal:

```text
Replace the current layered Shop visual system with one controlled block matching `preview/spatial-flow-shop-v1.html` as closely as possible.
```

Required cleanup:

```text
- Neutralize or replace Phase Shop Visual 1.
- Neutralize or replace Phase Shop Visual 2.
- Neutralize or replace Phase Shop Visual 2.1 FIX.
- Do not delete unrelated Shop backend/loop logic.
```

### Step 4C-REWORK1-D · Mobile adaptation

Goal:

```text
Make mobile usable while respecting the reference hierarchy.
```

Mobile direction:

```text
- Reduce hero vertical load.
- Collapse metadata and filters into a shorter rhythm.
- Let product section appear earlier.
- Keep two-column product grid if readable; otherwise controlled one-column under very narrow width.
- Do not break filters/sorting/details panels.
```

### Step 4C-REWORK1-E · Regression

Required checks:

```text
- Desktop Shop top/hero
- Desktop Editor’s Pick
- Desktop product grid
- Desktop pagination
- Desktop closing note/contact/footer flow
- Mobile first screen
- Mobile filters/details panels
- Mobile product grid
- Product card links
- Wishlist heart
- Sorting dropdown
- Taxonomy filter links
- Pagination
- Add to cart/product link behavior
- Cart/Checkout remain unaffected
```

## Risk notes

```text
- Current `spatial-flow.css` is large and contains layered historical Shop CSS, so replacement must be precise.
- Current product image quality / missing placeholders will affect visual match even after CSS. That is a content/data issue, not a CSS failure.
- Wishlist plugin DOM must not be intercepted or rewritten.
- WooCommerce loop must remain native.
```

## Next action

```text
Prepare Step 4C-REWORK1-B implementation instructions for `archive-product.php` and `assets/css/spatial-flow.css`.
Do not write production file changes until the replacement plan is accepted.
```
