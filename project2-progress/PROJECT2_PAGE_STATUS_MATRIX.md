# Project 2 · Page Status Matrix

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

This is the authoritative page-level status map for Project 2.

## Status rule

Only two page statuses are allowed:

```text
1. Completed 1:1
   The real WordPress / WooCommerce page has completed the current exact-replacement pass, desktop/mobile browser validation, functional regression, and backend-editability validation.

2. Not done
   Any page that has not completed the full current 1:1 standard.
```

Important:

```text
Historical implementation, old visual work, functional fixes, accepted static HTML, or partial redesign do not count as page completion.
If the real page has not completed the current 1:1 acceptance process, mark it as Not done.
```

Static references available:

```text
preview/spatial-flow-v1.html
preview/spatial-flow-shop-v1.html
preview/spatial-flow-product-v1.html
preview/spatial-flow-cart-v1.html
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-thank-you-v1.html
preview/spatial-flow-account-v1.html
preview/spatial-flow-wishlist-v1.html
preview/spatial-flow-track-order-v1.html
preview/spatial-flow-about-v1.html
preview/spatial-flow-services-v1.html
preview/spatial-flow-faq-v1.html
preview/spatial-flow-contact-v1.html
preview/spatial-flow-search-v1.html
preview/spatial-flow-404-v1.html
preview/spatial-flow-utility-policy-v1.html
preview/spatial-flow-blog-home-v1.html
preview/spatial-flow-blog-issue-v1.html
preview/spatial-flow-blog-article-v1.html
```

## 1. Shared global shell

| Area | Status | Accepted scope |
|---|---|---|
| Main-site Header | Completed 1:1 | Editorial header replacement; backend menu priority through `wp_nav_menu`; Search, Saved/Wishlist, Bag/Cart, mobile drawer, Shop hover mega menu, and blog-subsite branch preserved. |
| Main-site Footer | Completed 1:1 | Top brand area and dark editorial footer; dynamic footer menus, trust/legal sections, backend-editable text functions, and blog-subsite branch preserved. |
| Blog Header/Footer branch | Not done | Branch logic is preserved, but the blog shell has not completed an independent current 1:1 acceptance pass. |

## 2. Main commerce pages

| Page | Static reference | Status | Notes |
|---|---|---|---|
| Home | `preview/spatial-flow-v1.html` | Not done | Earlier work does not count as current 1:1 completion. |
| Shop archive | `preview/spatial-flow-shop-v1.html` | Completed 1:1 | Desktop/mobile controlled rebase, Hero, metadata, filters/sort, dynamic Editor’s Pick, product grid, pagination, closing note, regression, and backend editability passed. |
| Single Product | `preview/spatial-flow-product-v1.html` | Completed 1:1 | Hero, Gallery, Summary, options, Product Attributes, The Piece, Related Products, add-to-cart feedback, desktop/mobile regression, backend mappings, and controlled CSS cleanup passed. |
| Cart | `preview/spatial-flow-cart-v1.html` | Not done | Current active page. `Step 4E-A` is only the audit entry point. |
| Checkout | `preview/spatial-flow-checkout-v1.html` | Not done | SAFE5 functionality exists, but the page has not completed the current 1:1 acceptance pass. |
| Thank You | `preview/spatial-flow-thank-you-v1.html` | Not done | Earlier implementation does not count as current 1:1 completion. |

## 3. Account / customer utility pages

| Page | Static reference | Status | Notes |
|---|---|---|---|
| Wishlist | `preview/spatial-flow-wishlist-v1.html` | Not done | Earlier YITH integration work exists, but current 1:1 acceptance is incomplete. |
| Track Order | `preview/spatial-flow-track-order-v1.html` | Not done | Earlier native rebuild does not count as current 1:1 completion. |
| Account | `preview/spatial-flow-account-v1.html` | Not done | Intentionally inactive under the current guest-checkout operating model. |
| Search | `preview/spatial-flow-search-v1.html` | Not done | Earlier search fixes exist, but current 1:1 acceptance is incomplete. |
| 404 | `preview/spatial-flow-404-v1.html` | Not done | Static reference exists; real-page 1:1 implementation is not completed. |

## 4. Brand / service / support pages

| Page | Static reference | Status | Notes |
|---|---|---|---|
| About Us | `preview/spatial-flow-about-v1.html` | Not done | Historical work does not count as current 1:1 completion. |
| Services | `preview/spatial-flow-services-v1.html` | Not done | Historical native rebuild does not count as current 1:1 completion. |
| FAQ / Help | `preview/spatial-flow-faq-v1.html` | Not done | Historical work does not count as current 1:1 completion. |
| Contact | `preview/spatial-flow-contact-v1.html` | Not done | Forms may be operational, but page-level current 1:1 acceptance is incomplete. |
| Utility / policy pages | `preview/spatial-flow-utility-policy-v1.html` | Not done | The page family has not completed a unified current 1:1 pass. |

## 5. Blog / Journal pages

| Page family | Static reference | Status | Notes |
|---|---|---|---|
| Blog home | `preview/spatial-flow-blog-home-v1.html` | Not done | Static design acceptance does not equal live-page 1:1 completion. |
| Blog issue | `preview/spatial-flow-blog-issue-v1.html` | Not done | Live WordPress data integration has not completed current 1:1 acceptance. |
| Blog article | `preview/spatial-flow-blog-article-v1.html` | Not done | Live article page has not completed current 1:1 acceptance. |

## 6. Completed page count

Completed 1:1:

```text
- Main-site Header
- Main-site Footer
- Shop archive
- Single Product
```

All other pages and page families are currently:

```text
Not done
```

## 7. Functional modules do not change page status

The following may be completed as functions, but they do not make an unfinished page count as Completed 1:1:

```text
- Add-to-cart Lift & Settle feedback
- Simple / variable product add-to-cart regression
- Header Bag count / cart bump
- Shop and Product backend fields
- Product Guidance / Join Us / Contact forms
- SAFE5 Coupon
- Crypto payment / order-status flows
- Search separation / mobile-menu / navigation fixes
```

## 8. Current execution order

```text
Cart audit and controlled 1:1 implementation
→ Cart regression and closure
→ Checkout current 1:1 implementation / closure
→ Thank You current 1:1 implementation / closure
→ Home
→ Wishlist / Track Order / Search / 404
→ About / Services / FAQ / Contact / policy pages
→ Blog home / issue / article and blog shell
```

The assistant should continue this sequence automatically and only ask the user to choose at genuine visual, operational, or business decision points.

## 9. Hard boundary

```text
- Backend editability must be preserved.
- Existing WordPress/WooCommerce functions are the source of truth.
- Do not hardcode products, prices, totals, shipping methods, coupon values, URLs, menus, forms, or operational copy when dynamic/editable sources exist.
- Current local files uploaded by the user are the only implementation baseline.
- Inspect file size, line count, structure, and static reference before editing.
- Prefer precise range replacement over whole-file replacement or endless append-only CSS.
```
