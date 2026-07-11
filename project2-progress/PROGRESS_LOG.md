# Project 2 · Progress Log

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current phase

```text
Project 2 · Spatial Flow V2 visual replacement / 换皮工程继续推进
```

## Current active step

```text
Step 4C-REWORK1-B2 · Insert controlled Shop CSS block：In progress
```

Decision:

```text
Step 4D Single Product is completed and cleaned.
The user corrected the Shop status: Shop desktop is also far from 1:1 and earlier documentation should not be treated as final visual acceptance.
The previous mobile-only step was superseded by a full Shop desktop + mobile rework.
The preferred workflow is manual CSS range replacement, not whole-file replacement.
The three old layered Shop CSS ranges have now been deleted and independently verified.
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

## Current Shop rework

### Step 4C-REWORK1-B1 · Delete old Shop CSS ranges

Status:

```text
Passed.
```

Verified uploaded CSS:

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

Status:

```text
In progress.
```

Manual guide:

```text
project2-progress/STEP_4C_REWORK1_B_MANUAL_GUIDE.md
```

Block to insert:

```text
STEP_4C_REWORK1_B_SHOP_BLOCK.css
Size: 47,184 bytes
Lines: 1,031
SHA256: c5cfc6b5c17aa039a8b4fb3edfad7ba1dacc3cbf462e2f6007da3181c88508e9
```

Exact insertion point:

```text
Immediately before:
/* Step 5A-4C-R — Basic Pages Template Rebuild */
```

Safety checks already completed on the block:

```text
Opening braces: 137
Closing braces: 137
CSS parse errors: 0
All `.sf-shop-v2-*` class hooks used by the block exist in current `archive-product.php`.
```

Next action:

```text
User inserts the complete block once, bumps the theme asset version, then tests desktop/mobile Shop and functional regression.
```

Deferred long sections remain documented in `project2-progress/DEFERRED_PLANS.md`.
