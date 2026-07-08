# Step 4C-REWORK1-B · Shop Implementation Candidate

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
In progress. Candidate prepared for local testing; not accepted yet.
User requested manual replacement instructions instead of a full replacement-file workflow.
```

## Goal

```text
Move Shop desktop + mobile closer to `preview/spatial-flow-shop-v1.html` without touching WooCommerce product loop, filters, sorting, pagination, wishlist, cart, checkout, payment, or order logic.
```

## Candidate file

```text
spatial-flow-step4c-rework1-b.css
```

This is a local candidate derived from the user-uploaded current latest:

```text
assets/css/spatial-flow.css
```

The candidate file is only for review / fallback. The preferred workflow now is:

```text
Provide precise manual replacement instructions for the Shop CSS range instead of asking the user to overwrite the whole CSS file blindly.
```

## Baseline stats

```text
Original file: spatial-flow.css
Original size: 791,785 bytes
Original lines: 26,632
Original SHA256: e6ea57cab4d1cf2342929f1fd74d78c41eff10141d434010b8106d7ed395cb58
```

## Candidate stats

```text
Candidate file: spatial-flow-step4c-rework1-b.css
Candidate size: 766,431 bytes
Candidate lines: 25,735
Candidate SHA256: e12fb6cb282f7b53916e73760804216cdc89215abe7ad6d8a7d7a1cbc0cc7008
```

Patch file:

```text
step4c-rework1-b-css-rebase.patch
Patch size: 116,159 bytes
Patch SHA256: 3cc80e3266431c9c9fd55e72f62df8401f58a18c26d89ec03b3804852c1ea916
```

CSS brace sanity check:

```text
Opening braces: 3917
Closing braces: 3917
```

## Files changed in the candidate

```text
assets/css/spatial-flow.css only
```

No PHP candidate was generated in this step.

Reason:

```text
The current `woocommerce/archive-product.php` already exposes the required dynamic structure and class hooks: hero, meta, filterbar, sort, optional editor pick, product section head, WooCommerce product loop, pagination, closing note, and contact band.
The first rework candidate can therefore be CSS-only.
```

## CSS cleanup / replacement performed

The candidate removes these older layered Shop visual systems from `spatial-flow.css`:

```text
- Phase Shop Visual 1
- Phase Shop Visual 2
- Phase Shop Visual 2.1 FIX
- Product Archive Visual Scope Fix / re-scoped Phase Shop Visual 2 and 2.1 rules
- Project2 Step 4C-B — Shop Hero Editorial
```

It replaces them with one controlled block:

```text
Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase
```

Manual replacement rule:

```text
Do not append this block to the end of `spatial-flow.css`.
Do not overwrite the whole file unless the user explicitly chooses that workflow.
Preferred: find the existing Shop visual CSS range and replace only that range with the new controlled Shop block.
```

## Intended visual changes

### Desktop

```text
- Wider 1440px reference width.
- Open hero with 1.1fr / 1fr grid and 96px gap.
- Open metadata row instead of boxed meta cards.
- Open toolbar with text-like filters instead of rounded control panel.
- Editor’s Pick becomes an open editorial section instead of a rounded feature card.
- Product grid becomes open editorial cards instead of rounded shadow tiles.
- Product image ratio becomes 4/5.
- Product title uses serif typography.
- Pagination gets more generous editorial spacing.
- Closing note becomes a wider open two-column note.
```

### Mobile

```text
- Hero is shortened.
- Secondary body paragraph is hidden on mobile to bring products up earlier.
- Meta and filters are reduced in height.
- Editor’s Pick is hidden on mobile for first-screen product exposure.
- Product grid stays two columns above very narrow width, then falls to one column under 360px.
```

## Explicitly not changed

```text
- woocommerce/archive-product.php
- functions.php
- content-product.php
- checkout-safe5.css
- WooCommerce loop
- Taxonomy filter URLs
- Sorting dropdown
- Pagination logic
- Wishlist plugin behavior
- Add-to-cart behavior
- Cart / Checkout / Payment / Orders
```

## Known limitations

```text
- Product cards cannot fully match the static reference's editorial place-note unless `content-product.php` is later extended to output a real per-product meta field such as `_sf_placement`.
- Missing / placeholder product images will still weaken visual fidelity. This is a content/data quality issue, not only CSS.
- The candidate should be tested locally before being marked Passed.
```

## Local test instructions

Preferred manual workflow:

```text
1. Keep the current local `spatial-flow.css` open.
2. Find the existing Shop visual CSS range.
3. Replace only that Shop range with the controlled Step 4C-REWORK1-B Shop block.
4. Do not touch unrelated Header, Footer, Single Product, Cart, Checkout, Blog, Wishlist, or utility CSS.
5. Bump the theme asset version in `functions.php` if needed, for example 2.7.9 → 2.8.0.
6. Hard refresh `/shop/` on desktop and mobile.
```

Fallback whole-file workflow:

```text
Only use `spatial-flow-step4c-rework1-b.css` as a full replacement file if the user explicitly chooses the full-file replacement workflow.
```

## Required validation

```text
Desktop:
- Header remains normal.
- Shop hero matches the open static reference rhythm more closely.
- Filter dropdowns still open and links work.
- Sorting dropdown still works.
- Editor’s Pick still links to the selected product.
- Product grid links work.
- Wishlist heart still works.
- Pagination works.
- Closing note/contact/footer flow remains normal.

Mobile:
- Products appear earlier than before.
- Filter controls do not break horizontal layout.
- Filter details panels remain usable.
- Two-column product grid remains readable.
- Wishlist heart still works.
- Product links work.
- No horizontal overflow.

Regression:
- Product detail page unaffected.
- Cart unaffected.
- SAFE5 Checkout unaffected.
```

## Next status rule

If local test passes:

```text
Step 4C-REWORK1-B · Shop CSS controlled rebase candidate：Passed
```

If local test finds visual issues:

```text
Record precise screenshot issue and continue with Step 4C-REWORK1-B-FIX1.
```
