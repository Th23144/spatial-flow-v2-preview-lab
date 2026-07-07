# Project 2 · Progress Log

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current phase

```text
Step 4D · Single Product / 商品详情页 1:1 换皮进行中
```

## Current active step

```text
Step 4D-1-F · The Piece 商品正文 editorial 区接入：In progress
Step 4D-1-F-FIX5 · The Piece nested editor markup drop-cap：In progress
```

Decision:

```text
Only The Piece will be implemented now.
Story Behind, Care Ritual, and Reviews are deferred plans, not current required blocks.
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

## Current implementation

### Step 4D-1-F · The Piece

Status:

```text
In progress. Do not mark Passed until the user confirms desktop/mobile screenshots and product editing behavior.
```

Purpose:

```text
Add one editorial long-description block between Product Attributes and Related Products / Complete The Room.
```

Recommended data source:

```text
WooCommerce product long description / the_content
```

Reason:

```text
This is the most operationally realistic long editorial section. It can function as a high-quality product detail introduction without forcing the user to invent a full fictional product story for every SKU.
```

Implementation boundary:

```text
- Do not add Story Behind.
- Do not add Care Ritual.
- Do not add Quiet Notes / Reviews.
- Do not hardcode fake makers, fake origin stories, fake customer notes, or fake product background stories.
- If the WooCommerce long description is empty, The Piece section should not render.
```

Current issue and fix direction:

```text
Step 4D-1-F-FIX5 · The Piece nested editor markup drop-cap
After removing duplicate CSS pseudo-element selectors, unedited product descriptions recover, but edited descriptions still lack the drop cap.
This means the explicit `.sf-product-v2-piece__dropcap` PHP wrapper is not being inserted for edited descriptions.
Likely cause: edited content begins with nested inline markup inside the first paragraph, such as `<p><strong>This...</strong></p>`, so the previous PHP regex only matching text directly after `<p>` misses it.
Fix direction: replace the PHP wrapper logic with a nested-markup tolerant first-paragraph wrapper that can insert the dropcap span inside the first visible text node after opening inline tags.
```

Deferred long sections are documented in `project2-progress/DEFERRED_PLANS.md`.
