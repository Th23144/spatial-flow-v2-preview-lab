# Project 2 · Progress Log

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current phase

```text
Project 2 · Spatial Flow V2 visual replacement / 换皮工程继续推进
```

## Current active step

```text
Step 4C-REWORK1-B · Shop rework CSS candidate：In progress
```

Decision:

```text
Step 4D Single Product is completed and cleaned.
The user corrected the Shop status: Shop desktop is also far from 1:1 and earlier documentation should not be treated as final visual acceptance.
The previous mobile-only step is superseded by a full Shop desktop + mobile rework audit.
A mismatch list and replacement plan has been prepared.
A first CSS-only implementation candidate has been prepared for local testing.
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

## Step 4D references

Dedicated handoff file:

```text
project2-progress/STEP_4D_SYNC_MANIFEST.md
```

Step 4D cleanup audit:

```text
project2-progress/STEP_4D_CLEAN1_AUDIT.md
```

Step 4D server sync file set:

```text
woocommerce/single-product.php
assets/css/spatial-flow.css
functions.php
assets/css/checkout-safe5.css
```

## Current active module

### Step 4C-REWORK1-B · Shop rework CSS candidate

Status:

```text
In progress. Candidate prepared; waiting for user local test confirmation.
```

Audit / plan / implementation files:

```text
project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
project2-progress/STEP_4C_REWORK1_A_MISMATCH_PLAN.md
project2-progress/STEP_4C_REWORK1_B_IMPLEMENTATION.md
```

Correction:

```text
Earlier Shop records are now treated as partial structure / layout passes, not final 1:1 visual acceptance.
The Shop page needs a full desktop + mobile rework against `preview/spatial-flow-shop-v1.html`.
```

Candidate file strategy:

```text
- No PHP change in this first candidate.
- `archive-product.php` already exposes enough stable hooks/classes for the first pass.
- Replace the old Shop CSS range from `Phase Shop Visual 1 START` through `Phase Shop Visual 2.1 FIX END` with one controlled `Step 4C-REWORK1-B` block.
```

Candidate output:

```text
spatial-flow-step4c-rework1-b.css
step4c-rework1-b-spatial-flow.diff
```

Scope:

```text
- Rework Shop desktop against the static reference.
- Rework Shop mobile against product exposure and static-reference constraints.
- Preserve WooCommerce product loop, filters, sorting, pagination, product links, wishlist, add-to-cart behavior, cart, checkout, payment, and orders.
- No plugin changes.
- No hardcoded product data.
```

Next action:

```text
User should replace local `assets/css/spatial-flow.css` with `spatial-flow-step4c-rework1-b.css`, bump asset version if needed, and test desktop/mobile Shop.
```

Deferred long sections remain documented in `project2-progress/DEFERRED_PLANS.md`.
