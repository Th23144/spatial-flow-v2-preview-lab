# Step 4C-REWORK1-B · Shop Rework Implementation Candidate

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Candidate prepared; waiting for user local test confirmation.
```

## Baseline files audited

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

## Candidate output

```text
Candidate CSS file: spatial-flow-step4c-rework1-b.css
- Size: 799,796 bytes
- Lines: 26,902
- SHA256: 7584afe14119608a72fe843d60b83fd255f08ae7f6503b2873ca945289a35416

Diff file: step4c-rework1-b-spatial-flow.diff
- Size: 60,127 bytes
- SHA256: fe9305498da6680b8e7641d21eb36b02ae9e00b83dbede3e7f23149acca75b55
```

## File strategy

### `archive-product.php`

```text
No PHP change in this first implementation candidate.
```

Reason:

```text
The current archive template already exposes enough stable hooks/classes for this pass:
- `.sf-shop-v2-hero`
- `.sf-shop-v2-hero-meta`
- `.sf-shop-v2-controls`
- `.sf-shop-v2-editor-pick`
- `.sf-shop-v2-products`
- `.sf-shop-v2-section-head`
- `.sf-shop-v2-closing-note`

Changing PHP now would add risk before proving the controlled CSS rebase.
```

### `assets/css/spatial-flow.css`

```text
Replace the old layered Shop visual block range:
- `/* === Phase Shop Visual 1 START === */`
through
- `/* === Phase Shop Visual 2.1 FIX END === */`

with the new controlled block:
- `/* === Step 4C-REWORK1-B Shop Desktop + Mobile 1:1 Rebase START === */`
through
- `/* === Step 4C-REWORK1-B Shop Desktop + Mobile 1:1 Rebase END === */`
```

## Candidate behavior

### Desktop

```text
- Re-expands Shop width to the static-reference 1440px rhythm.
- Converts Hero into an open editorial 1.1fr / 1fr grid with border-bottom rhythm.
- Converts boxed meta cards into open metadata row.
- Converts controls from rounded panel into open editorial toolbar.
- Converts Editor’s Pick from rounded card into open 5fr / 7fr editorial spread.
- Converts product cards from rounded shadow cards into open editorial product cards.
- Keeps product images at 4/5 aspect ratio.
- Adds CSS-only hover quick action over product image link.
- Aligns pagination and closing note closer to the static reference.
```

### Mobile

```text
- Reduces hero vertical load.
- Keeps metadata compact.
- Hides the secondary hero paragraph on mobile to reduce first-screen density.
- Keeps filters usable but less tall.
- Hides Editor’s Pick on mobile so product cards appear sooner.
- Keeps two-column product grid on mobile for product exposure.
```

## Preserved boundaries

```text
- No WooCommerce product loop rewrite.
- No taxonomy/filter URL logic change.
- No sorting logic change.
- No pagination logic change.
- No wishlist engine rewrite.
- No add-to-cart/cart/checkout/payment/order logic change.
- No plugin changes.
- No hardcoded product data.
- No Checkout SAFE5 CSS changes.
- No Single Product CSS changes.
```

## Known limitation

```text
Product image quality and placeholder coverage still affect visual match.
CSS can align spacing and structure, but missing/placeholder product imagery remains a content/data issue.
```

## Required local test

After replacing local `assets/css/spatial-flow.css` with the candidate and bumping the asset version if needed, test:

```text
1. Desktop Shop top / Hero
2. Desktop toolbar filters and sort
3. Desktop Editor’s Pick
4. Desktop product grid and first 20 products
5. Desktop pagination
6. Desktop closing note + contact band + footer
7. Mobile first screen
8. Mobile filters/details panels
9. Mobile product grid
10. Wishlist heart state
11. Product card click-through
12. Sorting dropdown
13. Taxonomy filter links
14. Pagination links
15. Cart and Checkout remain unaffected
```

## Next status rule

```text
If the candidate passes local test, mark:
Step 4C-REWORK1-B · Shop rework CSS candidate：Passed

If visual mismatch remains, collect screenshots and revise the candidate before marking Passed.
```
