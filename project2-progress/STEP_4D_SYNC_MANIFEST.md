# Step 4D · Single Product Sync Manifest

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

This file records the Step 4D final handoff / sync state after the Single Product full-page regression passed.

Root manifest note:

```text
PROJECT2_LOCAL_SYNC_MANIFEST.md still contains older 4B/4C baseline history. This Step 4D supplemental manifest is the current single-product handoff record.
```

## Passed scope

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
```

## Files that must be synced to server for Step 4D

### 1. `woocommerce/single-product.php`

Server path:

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/woocommerce/single-product.php
```

Change type:

```text
PHP / WooCommerce single product template
```

Step 4D responsibilities:

```text
- Hero / summary structure
- Gallery output support
- Placement Suggestion placement
- Product Attributes output
- Related Products / Complete The Room placement
- The Piece editorial section between Product Attributes and Related Products
- The Piece data source: WooCommerce product long description / the_content
- The Piece hidden state when long description is empty
- The Piece explicit drop-cap wrapper `.sf-product-v2-piece__dropcap`
```

Important boundary:

```text
Do not add Story Behind, Care Ritual, or Reviews here yet.
Do not hardcode fake maker stories, fake origin stories, fake user notes, or fake reviews.
```

### 2. `assets/css/spatial-flow.css`

Server path:

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/spatial-flow.css
```

Change type:

```text
CSS / Single Product visual layer
```

Step 4D responsibilities:

```text
- Single product desktop Hero / Summary visual system
- Gallery visual details
- Mobile gallery fill fix
- Product Attributes visual polish
- Quantity control visual fix
- Related Products / Complete The Room visual polish
- The Piece visual system
- The Piece `.sf-product-v2-piece__dropcap` styling
```

Important boundary:

```text
Do not restore `.sf-product-v2-piece__body ... ::first-letter`.
The Piece drop cap must use `.sf-product-v2-piece__dropcap` only.
Checkout SAFE5-specific styling should not be added here.
```

### 3. `functions.php`

Server path:

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/functions.php
```

Change type:

```text
PHP / Customizer registration / product meta fields / asset version
```

Step 4D responsibilities:

```text
- Product Story legacy Customizer fields cleaned from active surface
- Product Attributes heading / card labels made Customizer-editable
- Product Attributes content mapped to per-product fields
- Placement Suggestion title remains Customizer-editable
- Placement Suggestion content remains per-product editable
- Trust Strip remains Customizer-editable
- Version bump used to refresh changed CSS/PHP assets
```

Customizer fields relevant to Single Product:

```text
- Product Attributes eyebrow
- Product Attributes section heading
- Product Attributes Material card title
- Product Attributes Suitable Space card title
- Product Attributes Care & Maintenance card title
- Product Attributes Gift Service card title
- Placement Suggestion title
- Trust Strip titles/texts
```

Per-product fields relevant to Single Product:

```text
- Summary · Placement Suggestion
- Product Attributes · Material
- Product Attributes · Suitable Space
- Product Attributes · Care & Maintenance
- Product Attributes · Gift Service
- WooCommerce long description / the_content for The Piece
```

### 4. `assets/css/checkout-safe5.css`

Server path:

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/checkout-safe5.css
```

Change type:

```text
CSS / SAFE5 Checkout page only
```

Step 4D regression fix:

```text
Step 4D-1-G-FIX1 · Hide checkout add-to-cart success notice
```

Fix details:

```text
When entering Checkout directly from the product-page add-to-cart success mini window, WooCommerce carried the normal “has been added to your cart / View cart” success notice into SAFE5 Checkout.
The notice was hidden on SAFE5 Checkout only.
```

Important boundary:

```text
Correct file: checkout-safe5.css
Incorrect file for this fix: spatial-flow.css
Do not hide SAFE5 validation notices, coupon messages, payment errors, required-field errors, or other blocking checkout notices.
```

## Regression result

```text
Step 4D-1-G · Single Product full-page regression：Passed
```

Regression covered:

```text
Desktop layout
Mobile layout
Simple product
Variable product
Gallery / thumbnails / arrows / counter
Quantity stepper
Add to Cart success feedback
Header Bag count
The Piece display when long description exists
The Piece hidden state when long description is empty
Product Attributes backend fields
Related Products layout
Cart and Checkout entry from the product page
```

Only issue found:

```text
Checkout carried add-to-cart success notice.
Fixed in checkout-safe5.css.
```

## Sync status

```text
Step 4D file set is ready for final local-to-server sync when the user decides to deploy this batch.
```

## Next decision

```text
User decision needed:
- Continue to next visual page/module, or
- Run controlled CSS cleanup: Step 4D-CLEAN1 / Project2-CLEAN-CSS.
```
