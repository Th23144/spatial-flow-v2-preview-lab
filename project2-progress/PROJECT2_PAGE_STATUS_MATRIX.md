# Project 2 · Page Status Matrix

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

This file is the authoritative page-level status map for Project 2.

It separates three different meanings that older notes sometimes mixed together:

```text
A. Current-pass 1:1 Passed
   The real WordPress/WooCommerce page was reworked against the V2 static reference, browser-tested, functionally regressed, and checked for backend editability.

B. Historical implementation completed / current-pass revalidation still needed
   The page or workflow was previously rebuilt or accepted in Project 2, but it has not yet been re-audited under the current exact-replacement / current-file / backend-editability standard.

C. Static reference only / not currently implemented or not confirmed
   A V2 static HTML reference exists, but the real WordPress page has not been confirmed as a current-pass 1:1 implementation.
```

Static references available in the repository:

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

| Area | Status | What is already implemented |
|---|---|---|
| Main-site Header | A · Current-pass 1:1 Passed | Editorial header replacement; backend menu priority through `wp_nav_menu`; Search, Saved/Wishlist, Bag/Cart, mobile drawer, Shop hover mega menu, and blog-subsite branch preserved. |
| Main-site Footer | A · Current-pass Passed | Top brand area and dark editorial footer; dynamic footer menus, trust/legal sections, backend-editable text functions, and blog-subsite branch preserved. |
| Blog Header/Footer branch | B · Preserved, independent current-pass visual revalidation still needed | Branch logic was preserved and regression-checked for breakage, but the blog shell has not been independently closed as a current-pass 1:1 page family. |

## 2. Main commerce pages

| Page | Static reference | Status | Current meaning |
|---|---|---|---|
| Home | `preview/spatial-flow-v1.html` | B · Historical visual implementation exists; current-pass revalidation needed | Earlier Project 2 work exists, but the repository does not yet contain a recent current-file 1:1 closure record comparable to Shop/Product. |
| Shop archive | `preview/spatial-flow-shop-v1.html` | A · Current-pass 1:1 Passed | Desktop + mobile controlled rebase completed; old layered Shop CSS removed; Hero, metadata, filters/sort, Editor’s Pick, product grid, pagination, closing note, and backend editability passed. Pagination FIX1 also passed. |
| Single Product | `preview/spatial-flow-product-v1.html` | A · Current-pass 1:1 Passed | Hero, Gallery, Summary, options, quantity, Product Attributes, The Piece, Related Products, add-to-cart feedback, desktop/mobile regression, backend field mapping, and controlled CSS cleanup passed. |
| Cart | `preview/spatial-flow-cart-v1.html` | B · Functional/historical work exists; full current-pass 1:1 not done | Cart flow, quantity/remove/coupon path, add-to-cart entry, and earlier visual fixes exist. Full desktop/mobile 1:1 re-audit is the current active step: `Step 4E-A`. |
| Checkout | `preview/spatial-flow-checkout-v1.html` | B · SAFE5 functional rebuild passed; current-pass 1:1 re-audit still needed | SAFE5 multi-step checkout, validation, shipping, payment step, policy checkbox, coupon, order summary, and cart-to-checkout flow are stable. This high-risk page has not yet been re-closed against the current exact-replacement standard. |
| Thank You | `preview/spatial-flow-thank-you-v1.html` | B · Historical V2 implementation passed; current-pass revalidation needed | Earlier native Thank You V2 and order-flow checks passed, but no recent current-file 1:1 closure record exists. |

## 3. Account / customer utility pages

| Page | Static reference | Status | Current meaning |
|---|---|---|---|
| Wishlist | `preview/spatial-flow-wishlist-v1.html` | B · Historical implementation passed; current-pass revalidation needed | Wishlist page and Saved entry were previously completed; YITH behavior must remain dynamic. |
| Track Order | `preview/spatial-flow-track-order-v1.html` | B · Historical native rebuild passed; current-pass revalidation needed | Native Track Order flow was previously rebuilt and tested. |
| Account | `preview/spatial-flow-account-v1.html` | C · Intentionally not active | Project 2 currently does not enable a full registration/login account system; guest checkout remains the active operating model. |
| Search | `preview/spatial-flow-search-v1.html` | B · Historical implementation passed; current-pass revalidation needed | Main-site/blog search separation, pagination, and mobile result cards were previously fixed. |
| 404 | `preview/spatial-flow-404-v1.html` | C · Static reference exists; real-page current-pass status not confirmed | Needs a real WordPress 404 template audit and backend-safe mapping where applicable. |

## 4. Brand / service / support pages

| Page | Static reference | Status | Current meaning |
|---|---|---|---|
| About Us | `preview/spatial-flow-about-v1.html` | B · Historical implementation completed; current-pass revalidation needed | Earlier About page work passed, including navigation integration. |
| Services | `preview/spatial-flow-services-v1.html` | B · Historical native rebuild passed; current-pass revalidation needed | Services page was previously rebuilt natively and accepted. |
| FAQ / Help | `preview/spatial-flow-faq-v1.html` | B · Historical implementation passed; current-pass revalidation needed | FAQ/Help and related navigation were previously completed. |
| Contact | `preview/spatial-flow-contact-v1.html` | B · Forms and page workflow completed; current-pass visual revalidation needed | Contact and related forms are operational; current exact 1:1 closure is not recorded. |
| Utility / policy pages | `preview/spatial-flow-utility-policy-v1.html` | B/C · Mixed | Refund/Returns and policy/help work existed historically, but the full utility-policy page family has not been normalized and revalidated under one current-pass record. |

## 5. Blog / Journal pages

| Page family | Static reference | Status | Current meaning |
|---|---|---|---|
| Blog home | `preview/spatial-flow-blog-home-v1.html` | B · Static direct-port accepted; live current-pass audit needed | Static design was accepted and blog functionality exists, but current real-page 1:1 closure is not authoritative yet. |
| Blog issue | `preview/spatial-flow-blog-issue-v1.html` | B · Static direct-port accepted; live current-pass audit needed | Must preserve WordPress post/category/issue data sources. |
| Blog article | `preview/spatial-flow-blog-article-v1.html` | B · Static direct-port accepted; live current-pass audit needed | Must preserve article content, metadata, search, forms, and editorial operations. |

## 6. Previously completed functional modules that are not standalone page closures

```text
- Add-to-cart Lift & Settle visual feedback: Passed.
- Simple and variable product add-to-cart regression: Passed.
- Header Bag count/cart bump: Passed.
- Product backend field mapping and Customizer editability: Passed.
- Shop Customizer fields and dynamic Editor’s Pick product selection: Passed.
- Product Guidance / Join Us / Contact Us / Contact the Editor / Journal Dispatch forms: operational from earlier Project 2 work.
- SAFE5 Coupon: Passed.
- Crypto payment path / Thank You / order-status regression: historically passed in the deployment phase.
- Mobile menu folding, side navigation, search separation, and several support-page navigation fixes: historically passed.
```

## 7. What the recent named steps actually implemented

### Step 4B · Shared shell

```text
- Header precise replacement.
- Restored backend-editable desktop navigation.
- Preserved Search / Wishlist / Cart / mobile drawer / blog branch.
- Footer top brand merge.
- Main footer converted to dark editorial treatment while preserving dynamic menus and editable text sources.
```

### Step 4C · Shop

```text
- Audited WooCommerce archive structure and preserved native loop/sorting/pagination/filter behavior.
- Added backend-editable Shop Hero, metadata, section heading, and Editor’s Pick controls.
- Editor’s Pick uses a real selected WooCommerce product; image, price, and URL are dynamic.
- Reworked desktop and mobile against `spatial-flow-shop-v1.html`.
- Removed old layered Shop CSS and inserted one controlled Shop block.
- Reduced mobile first-screen density.
- Fixed the pagination selector bug so page numbers render horizontally.
- Preserved backend editability and avoided fake per-product place notes.
```

### Step 4D · Single Product

```text
- Reworked desktop Hero / Gallery / Summary hierarchy.
- Preserved simple and variable product behavior, inventory, price, quantity, and add-to-cart.
- Restored/validated Product Attributes and Placement Suggestion backend mappings.
- Made Product Attributes headings and card labels Customizer-editable.
- Added The Piece from the WooCommerce long description.
- Implemented an explicit PHP drop-cap wrapper that supports nested editor markup.
- Reworked Related Products / Complete The Room.
- Ran full desktop/mobile/simple/variable/cart/checkout regression.
- Performed controlled Single Product CSS consolidation.
```

### Step 4E · Cart

```text
Not yet implemented as a current-pass 1:1 page.
`Step 4E-A` is only the current-state audit entry point.
No new Cart production code should be changed until current screenshots/files are audited against `preview/spatial-flow-cart-v1.html`.
```

## 8. Current execution order

The next step is indeed the Cart page, but it starts with audit rather than immediate modification:

```text
Step 4E-A · Cart desktop + mobile current-state audit
→ Cart controlled 1:1 implementation
→ Cart regression
→ Checkout current-pass re-audit
→ Thank You current-pass re-audit
→ remaining Home / utility / support / blog page-family audits according to risk and dependency
```

The assistant should continue this documented sequence automatically. The user should only be asked to choose when there is a genuine visual, operational, or business decision—not for generic permission to continue.

## 9. Hard boundary for every remaining page

```text
- Backend editability must be preserved.
- Existing WordPress/WooCommerce functions are the source of truth.
- Do not hardcode product names, prices, totals, shipping methods, coupon values, URLs, menus, forms, or operational copy when a dynamic/editable source exists.
- Current local files uploaded by the user are the only implementation baseline.
- Inspect file size, line count, structure, and static reference before editing.
- Prefer precise range replacement over whole-file replacement or endless append-only CSS.
```
