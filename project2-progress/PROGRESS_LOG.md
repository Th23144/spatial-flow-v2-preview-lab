# Project 2 · Progress Log

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current phase

```text
Step 4D · Single Product / 商品详情页 1:1 换皮主体已完成
```

## Current active step

```text
Step 4D-CLEAN1 · Single Product CSS consolidation / 商品详情页 CSS 受控清理：In progress
```

Decision:

```text
Only The Piece has been implemented now.
Story Behind, Care Ritual, and Reviews remain deferred plans, not current required blocks.
The user chose controlled CSS cleanup before continuing to the next visual page/module.
```

## Passed / accepted steps in current Single Product phase

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
```

## Important implementation notes

### Add-to-cart D

```text
- The add-to-cart success feedback is visual only.
- WooCommerce remains responsible for add-to-cart behavior.
- Do not intercept, replace, or manually reimplement WooCommerce cart logic.
- Passed states included flyer, seal, cart-pop, cart bump, simple product, variable product, cart, checkout, and mobile regression.
```

### Product backend editability cleanup

```text
- Product Story eyebrow / heading / fallback text were legacy leftovers and have been removed from the Customizer surface.
- Product Attributes content now comes from per-product fields.
- Product Attributes heading and card labels are Customizer-editable.
- Trust Strip remains Customizer-editable.
- Placement Suggestion title is Customizer-editable.
- Placement Suggestion content is per-product editable.
```

### Product Attributes field mapping

```text
Customizer:
- Product Attributes eyebrow
- Product Attributes section heading
- Product Attributes Material card title
- Product Attributes Suitable Space card title
- Product Attributes Care & Maintenance card title
- Product Attributes Gift Service card title

Per product:
- Summary · Placement Suggestion
- Product Attributes · Material
- Product Attributes · Suitable Space
- Product Attributes · Care & Maintenance
- Product Attributes · Gift Service
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

## Current implementation summary

### Step 4D-1-F · The Piece

Status:

```text
Passed.
```

Purpose:

```text
Add one editorial long-description block between Product Attributes and Related Products / Complete The Room.
```

Data source:

```text
WooCommerce product long description / the_content
```

Reason:

```text
This is the most operationally realistic long editorial section. It functions as a high-quality product detail introduction without forcing the user to invent a full fictional product story for every SKU.
```

Implementation boundary:

```text
- Story Behind was not added.
- Care Ritual was not added.
- Quiet Notes / Reviews were not added.
- No fake makers, fake origin stories, fake customer notes, or fake product background stories were hardcoded.
- If the WooCommerce long description is empty, The Piece section should not render.
```

Drop-cap implementation note:

```text
The drop cap uses an explicit PHP-inserted `.sf-product-v2-piece__dropcap` span instead of CSS `::first-letter`.
This fixed edited WooCommerce descriptions where the first visible text may be wrapped in nested inline markup such as `<strong>` or `<span>`.
The duplicate CSS `::first-letter` selectors must not be restored.
```

## Regression summary

### Step 4D-1-G · Single Product full-page regression

Status:

```text
Passed.
```

Regression covered:

```text
- Desktop layout
- Mobile layout
- Simple product
- Variable product
- Gallery / thumbnails / arrows / counter
- Quantity stepper
- Add to Cart success feedback
- Header Bag count
- The Piece display when long description exists
- The Piece hidden state when long description is empty
- Product Attributes backend fields
- Related Products layout
- Cart and Checkout entry from the product page
```

Only issue found during regression:

```text
Step 4D-1-G-FIX1 · Hide checkout add-to-cart success notice：Passed
The carried WooCommerce "has been added to your cart / View cart" success message was hidden on SAFE5 Checkout after entering Checkout from the product-page add-to-cart success mini window.
Correct implementation location: `checkout-safe5.css`, not the global `spatial-flow.css`.
The fix must not hide SAFE5 validation notices, coupon messages, payment errors, required-field errors, or other blocking checkout notices.
```

## Step 4D handoff / sync manifest

Status:

```text
Passed.
```

Dedicated handoff file:

```text
project2-progress/STEP_4D_SYNC_MANIFEST.md
```

Step 4D server sync file set:

```text
woocommerce/single-product.php
assets/css/spatial-flow.css
functions.php
assets/css/checkout-safe5.css
```

## Current cleanup step

### Step 4D-CLEAN1 · Single Product CSS consolidation

Status:

```text
In progress.
```

Scope:

```text
- Inspect current latest `assets/css/spatial-flow.css`.
- Only clean / consolidate Single Product related CSS blocks.
- Do not clean SAFE5 Checkout CSS in this step.
- Do not change `single-product.php`, `functions.php`, cart logic, checkout logic, payment logic, or WooCommerce order logic.
```

Required input before editing:

```text
User should upload the current latest local `assets/css/spatial-flow.css` after all Step 4D fixes.
```

Deferred long sections are documented in `project2-progress/DEFERRED_PLANS.md`.
