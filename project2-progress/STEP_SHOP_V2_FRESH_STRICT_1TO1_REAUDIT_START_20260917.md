# STEP_SHOP_V2_FRESH_STRICT_1TO1_REAUDIT_START_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

FRESH STRICT 1:1 RE-AUDIT STARTED

Current binary page status remains:

```text
Shop archive: Not done
```

No production source edits are authorized by this record.

## Why this re-audit is required

The historical controlled Shop rework completed on 2026-07-10 and was accepted at that time, but the user later explicitly reopened Shop on 2026-09-03. Under the project precedence rule, the later reopen overrides the earlier pass record.

The strict acceptance policy remains authoritative: visual similarity is insufficient; the real WooCommerce Shop must reproduce the approved static reference with strict geometry / typography / spacing while preserving real data and native functions.

## Source of truth

Static visual contract:

```text
preview/spatial-flow-shop-v1.html
```

Historical implementation owners:

```text
woocommerce/archive-product.php
woocommerce/content-product.php
assets/css/spatial-flow.css
functions.php
assets/js/spatial-flow.js
```

## Protected completed global systems

Do not reopen or rewrite these absent a concrete regression:

```text
Main-site Header V2: CLOSED
Main-site Footer V2: CLOSED
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / Order Result: Completed 1:1
```

## Known historical Shop implementation baseline

The July controlled rework established:

- open editorial Hero;
- reference-style horizontal filter/sort toolbar;
- open Editor's Pick composition;
- 4-column desktop product grid;
- 4/5 product imagery;
- open editorial product cards;
- WooCommerce-native product loop / sorting / pagination;
- backend-editable Hero and Editor's Pick ownership;
- responsive two-column product layout on ordinary mobile widths;
- runtime preservation of product links, Wishlist, sorting, taxonomy filters and pagination.

These are historical evidence only, not current acceptance.

## Historical user decisions that must be preserved during the fresh audit

- Shop mobile first-screen product exposure was previously identified as a concern; later rework reduced hero/filter vertical load so products appear earlier.
- Filter popups must behave mutually exclusively: opening one closes the others; outside click and Escape close open filters.
- Parent product category remains the primary classification while selected attribute terms remain visible as subordinate labels.
- Featured / Selected Filters must be individually cancellable while preserving the remaining active filters.
- WooCommerce taxonomy / layered-nav query ownership must be preserved; do not reintroduce the older `sf_filter` / `sf_filter_group` model.
- Wishlist behavior must remain YITH-owned and must not be intercepted or rewritten.
- Product data, prices, URLs and filter values remain real WooCommerce data.

## Known unresolved Shop item

### Per-product Editorial Place Note

The static reference contains an editorial place / placement note under product-card identity.

The previous Shop rework intentionally did not fabricate it because there was no dedicated backend-editable product owner.

Fresh audit rule:

```text
Do not hardcode sample reference copy.
```

If this reference layer is retained for the current version, it must use a real per-product backend-editable field and dynamic output from `woocommerce/content-product.php` (historical suggested owner: `_sf_placement`, subject to source-owner verification against the current Single Product / Related Products implementation).

## Fresh audit scope

The re-audit will compare current live Shop against the static reference in these blocks:

1. Breadcrumb / page entry transition below the CLOSED Header.
2. Hero geometry, typography, metadata row, lede/body/signoff and vertical rhythm.
3. Filter/sort toolbar visual fidelity and interaction behavior.
4. Editor's Pick geometry, image ratio, editorial copy hierarchy, price/action row and editable ownership.
5. Product-section heading/count geometry.
6. Product grid geometry and responsive breakpoints.
7. Product-card image treatment, title, price, badges, Wishlist, quick action and editorial note layer.
8. Pagination geometry and interaction.
9. Closing note / contact-band transition into the CLOSED Footer.
10. Desktop, tablet and phone overflow / spacing regression.
11. Backend editability and WooCommerce data ownership.

## Execution rule

First capture the current local source baseline and fresh runtime evidence. Do not patch from historical assumptions.

Only after the fresh mismatch list is grounded should implementation begin.
