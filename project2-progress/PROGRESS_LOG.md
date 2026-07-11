# Project 2 · Progress Log

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current phase

```text
Project 2 · Spatial Flow V2 visual replacement / 换皮工程继续推进
```

## Current active step

```text
Step 4E-A · Cart desktop + mobile 1:1 current-state audit：In progress
Step 4E-A1 · Cart static reference decomposition：Passed
```

Decision:

```text
Step 4D Single Product is completed and cleaned.
Step 4C Shop desktop + mobile controlled rework is now fully passed, including the pagination follow-up fix.
The assistant should continue the documented commerce-page sequence automatically and only ask the user to choose at genuine visual/product decision points.
The next page is Cart.
```

## Passed / accepted steps in Single Product phase

```text
Step 4D-Interrupt · Add-to-cart 成功反馈修复：Passed
Step 4D-1-A · 商品详情页桌面 Hero 框架校正：Passed
Step 4D-1-B · 右侧 Summary 字体层级与间距 1:1：Passed
Step 4D-Control-A · 商品详情页后台字段映射审计：Passed
Step 4D-Control-B · 清理 Product Story 残留 + 修复 Product Attributes 字段来源：Passed
Step 4D-Control-C · Product Attributes 标题后台字段化：Passed
Step 4D-1-C · 左侧 Gallery 细节 1:1：Passed
Step 4D-1-C-MOBILE1 · Mobile Gallery 主图填充修复：Passed
Step 4D-1-D · Product Attributes 区视觉 1:1 细修：Passed
Step 4D-1-D-FIX1 · Quantity 小空缺 + Attributes 双分隔线修复：Passed
Step 4D-1-E · Related Products / Complete The Room 区视觉 1:1 细修：Passed
Step 4D-1-F · The Piece 商品正文 editorial 区接入：Passed
Step 4D-1-F-FIX5 · The Piece nested editor markup drop-cap：Passed
Step 4D-1-G-FIX1 · Hide checkout add-to-cart success notice：Passed
Step 4D-1-G · Single Product full-page regression / 商品详情页全页回归检查：Passed
Step 4D-2 · Single Product handoff / sync manifest update：Passed
Step 4D-CLEAN1 · Single Product CSS consolidation / 商品详情页 CSS 受控清理：Passed
```

## Important implementation notes

### Add-to-cart D

```text
- The add-to-cart success feedback is visual only.
- WooCommerce remains responsible for add-to-cart behavior.
- Do not intercept, replace, or manually reimplement WooCommerce cart logic.
```

### Single Product / The Piece

```text
- The Piece data source is WooCommerce product long description / the_content.
- The Piece is hidden when the product long description is empty.
- The Piece drop cap uses an explicit PHP-inserted `.sf-product-v2-piece__dropcap` span, not CSS `::first-letter`.
- Story Behind, Care Ritual, and Reviews remain deferred and must not be faked.
```

### Checkout SAFE5 note

```text
- The checkout add-to-cart carried success notice fix belongs in `checkout-safe5.css`, not global `spatial-flow.css`.
- Do not hide SAFE5 validation notices, coupon messages, payment errors, required-field errors, or other blocking checkout notices.
```

### CSS policy now active

```text
CSS changes must not default to append-only.
Prefer in-place replacement of existing selector blocks.
Merge duplicate patches when safe.
Delete obsolete old blocks only in controlled cleanup passes.
Append only when the component is genuinely new or explicitly temporary.
```

See:

```text
PROJECT2_CSS_MAINTENANCE_POLICY.md
```

## Shop rework final status

### Step 4C-REWORK1-B1 · Delete old Shop CSS ranges

```text
Passed
```

Verified intermediate CSS:

```text
Size: 719,231 bytes
Lines: 24,695
SHA256: e55736867bcd0b70c2c3dd6d6547c3efba6dc6e0d74549cb5b692e6d593a45db
Opening braces: 3,780
Closing braces: 3,780
CSS parse errors: 0
```

Old Shop block search result:

```text
Phase Shop Visual 1: 0
Phase Shop Visual 2: 0
Phase Shop Visual 2.1 FIX: 0
Product Archive Visual Scope Fix: 0
Project2 Step 4C-B — Shop Hero Editorial: 0
```

### Step 4C-REWORK1-B2 · Insert controlled Shop CSS block

```text
Passed
```

Validated CSS before pagination follow-up:

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(1).css
Size: 766,416 bytes
Lines: 25,727
SHA256: 4abe753b251319c730b4c66520ae4cc0287fa9f0b3d239f016ba4ca5a7b7baee
Opening braces: 3,917
Closing braces: 3,917
CSS parse errors: 0
```

Controlled block:

```text
Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase
START count: 1
END count: 1
```

### Step 4C-REWORK1-B3 · Desktop/mobile browser validation

```text
Passed after pagination follow-up fix
```

Accepted result:

```text
- Desktop Hero, metadata, toolbar, Editor’s Pick, product grid, closing note, contact band, and footer render normally.
- Mobile density is reduced and products appear earlier.
- Mobile two-column product grid remains readable.
- No horizontal overflow.
- Filters, sorting, Editor’s Pick link, product links, wishlist, and pagination links work.
- Single Product, Cart, and SAFE5 Checkout regression checks show no issue.
```

### Step 4C-REWORK1-B3-FIX1 · Shop pagination horizontal layout

```text
Passed
```

Root cause and correction:

```text
- Broad `nav.woocommerce-pagination .page-numbers` selector matched both parent `<ul>` and child controls.
- Item styling was narrowed to `a.page-numbers` / `span.page-numbers`.
- Parent `ul.page-numbers` was normalized to a full-width horizontal flex row.
- Pagination `li` items were normalized to auto width with no flex growth.
- User confirmed the pagination now renders correctly.
```

Fix record:

```text
project2-progress/STEP_4C_REWORK1_B3_FIX1_PAGINATION.md
```

## Backend editability result for Shop

```text
Passed and unchanged by the pagination fix.
```

The Shop rework preserves backend-editable content sources:

```text
sf_shop_v2_kicker
sf_shop_v2_pieces_meta
sf_shop_v2_makers_meta
sf_shop_v2_origin_meta
sf_shop_v2_lede
sf_shop_v2_body
sf_shop_v2_signoff
sf_shop_v2_section_kicker
sf_shop_v2_section_title
sf_shop_v2_editor_pick_enabled
sf_shop_v2_editor_pick_product
sf_shop_v2_editor_pick_kicker
sf_shop_v2_editor_pick_title
sf_shop_v2_editor_pick_subtitle
sf_shop_v2_editor_pick_body
sf_shop_v2_editor_pick_place
sf_shop_v2_editor_pick_note_text
sf_shop_v2_editor_pick_note_url
```

No product names, prices, product IDs, Hero copy, Editor’s Pick copy, business links, image URLs, or taxonomy values are hardcoded into the new CSS.

The static reference's editorial per-product place note remains intentionally unimplemented rather than fabricated. If added later, it must use a real backend-editable per-product field rendered dynamically by `content-product.php`.

## Current Cart audit

Audit file:

```text
project2-progress/STEP_4E_CART_REWORK_AUDIT.md
```

Static reference:

```text
preview/spatial-flow-cart-v1.html
```

Scope:

```text
- Audit current desktop and mobile Cart against the static reference before editing.
- Preserve WooCommerce quantity, remove, coupon, totals, shipping, notices, cross-sells, and checkout behavior.
- Preserve backend-editable/dynamic sources.
- Do not hardcode products, prices, totals, coupon values, shipping methods, or checkout URLs.
- Do not affect Checkout, payment, orders, or emails.
```

### Step 4E-A1 · Static reference decomposition

```text
Passed.
```

Recorded conclusions:

```text
- The reference uses an open 7fr / 5fr desktop Cart layout with editorial item rows and a sticky summary.
- Tablet/mobile collapse to one column and the summary returns to normal document flow.
- Product image/title/SKU/variation/quantity/remove/price/totals/shipping/tax/checkout/cross-sells must remain dynamic.
- Coupon/update-cart/notices/empty-cart/stock validation are real WooCommerce requirements even though the sample HTML does not model all of them.
- Fixed products, totals, free-shipping state, Stripe claim, trust copy, place notes, Save for later, and recommendation items must not be copied as production data.
- Existing Header/Footer remain the accepted shared shell and must not be rebuilt inside the Cart template.
- No real Cart code was changed in Step 4E-A1.
```

Required current-state inputs:

```text
1. Desktop Cart first-screen screenshot.
2. Desktop Cart full-page screenshot.
3. Mobile Cart first-screen screenshot.
4. Mobile Cart full-page screenshot.
5. Current latest `assets/css/spatial-flow.css` after the pagination fix.
6. Current latest `assets/js/spatial-flow.js` if Cart interactions depend on it.
7. Any Cart-specific PHP/template file only if the theme actually overrides one.
```

Current evidence state:

```text
- Static reference：Available and decomposed.
- Current Cart screenshots：Not yet provided in this 4E-A pass.
- Current local CSS/JS/PHP baseline：Not yet provided in this 4E-A pass.
```

Next:

```text
Step 4E-A2 · Inspect the real current Cart screenshots and latest local Cart-related files, then write the desktop/mobile mismatch matrix before implementation.
```

Deferred long sections remain documented in `project2-progress/DEFERRED_PLANS.md`.
