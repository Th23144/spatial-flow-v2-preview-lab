# Project 2 · Progress Log

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current phase

```text
Project 2 · Spatial Flow V2 visual replacement / 换皮工程继续推进
```

## Current active step

```text
Step 4C-REWORK1 · Shop desktop + mobile controlled 1:1 rework：Passed
Next step: Pending user instruction
```

Decision:

```text
Step 4D Single Product is completed and cleaned.
The user corrected the old Shop status and required a true desktop + mobile rework instead of treating earlier lightweight layout work as final acceptance.
The old layered Shop CSS was removed and replaced through a manual, controlled CSS-range workflow.
The final CSS structure, desktop screenshots, mobile screenshots, and functional regression checks all passed.
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

## Shop rework result

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

Validated final CSS:

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

Version confirmed by user:

```text
SPATIAL_FLOW_CHILD_VERSION = 2.7.6
```

### Step 4C-REWORK1-B3 · Desktop/mobile browser and regression validation

```text
Passed
```

Screenshot evidence supplied by user:

```text
1. Desktop Shop top area
2. Desktop Shop full page
3. Mobile Shop first screen
4. Mobile Shop full page
```

Accepted result:

```text
- Desktop Hero, metadata, toolbar, Editor’s Pick, product grid, pagination, closing note, contact band, and footer render normally.
- Mobile density is reduced and products appear earlier.
- Mobile two-column product grid remains readable.
- No horizontal overflow.
- Filters, sorting, Editor’s Pick link, product links, wishlist, and pagination work.
- Single Product, Cart, and SAFE5 Checkout regression checks show no issue.
```

Validation record:

```text
project2-progress/STEP_4C_REWORK1_B2_VALIDATION.md
```

## Backend editability result

```text
Passed.
```

The Shop rework remains visual-only and preserves backend-editable content sources:

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

No product names, prices, product IDs, Hero copy, Editor’s Pick copy, business links, image URLs, or taxonomy values were hardcoded into the new CSS.

The static reference's editorial per-product place note remains intentionally unimplemented rather than fabricated. If added later, it must use a real backend-editable per-product field rendered dynamically by `content-product.php`.

Deferred long sections remain documented in `project2-progress/DEFERRED_PLANS.md`.
