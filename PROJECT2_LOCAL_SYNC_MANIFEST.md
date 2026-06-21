# Project 2 · Local Sync Manifest

Last updated: 2026-06-21

## 0. 当前执行基准

用户说明：从 Project 2 重新开始精确替换步骤后，用户已将服务器文件和本地文件同步。后续修改均基于**本地运行环境**执行；视觉替换全部完成后，再由用户把本地文件同步/覆盖到服务器。

因此，后续描述应使用：

```text
当前本地最新文件
```

不要再误称为“服务器最新文件”，除非用户明确说明已经同步到服务器。

后续每一步必须记录：

```text
1. 改动步骤
2. 改动文件
3. 对应服务器覆盖路径
4. 改动性质：PHP / CSS / Customizer / Template Part
5. 是否需要最终同步到服务器
6. 是否只是审计、未改文件
```

## 1. 当前需要最终同步到服务器的文件清单

以下为当前已发生实际改动、视觉替换完成后需要同步到服务器的文件。

### 1.1 `header.php`

服务器路径：

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/header.php
```

已改动：

```text
Step 4B-R1 · Header 精确替换
Step 4B-R1.1 · Header 桌面导航可编辑性回补
```

改动性质：

```text
PHP / Header template
```

保留/恢复能力：

```text
wp_nav_menu / 后台菜单优先
Search
Wishlist / Saved
Cart / Bag
Mobile drawer
Blog 子站分支逻辑
Shop hover dynamic mega menu 输出条件
```

同步状态：

```text
需要最终同步
```

### 1.2 `footer.php`

服务器路径：

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/footer.php
```

已改动：

```text
Step 4B-R2-A · Footer 顶部品牌区精确合并
```

改动性质：

```text
PHP / Footer template
```

保留能力：

```text
Footer 菜单位置
spatial_flow_footer_v2_text / spatial_flow_footer_v2_mod 等后台可编辑来源
主站 / Blog Footer 分支逻辑
```

同步状态：

```text
需要最终同步
```

### 1.3 `spatial-flow.css`

服务器路径：

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/spatial-flow.css
```

已改动：

```text
Step 4B-R2-A · Footer 顶部品牌区样式
Step 4B-R2-B · Main Footer Dark Editorial
Step 4C-B · Shop Hero Editorial
Step 4C-B-FIX1 · V2 Header Shop dynamic mega selector restore（替换版，未新增 FIX 块）
Step 4C-B-FIX1 · Mobile Shop Hero Density（替换版，未新增 FIX 块）
Step 4C-C · The full edit / Product section head styles
Step 4C-D-B · Editor’s Pick dynamic block styles
```

改动性质：

```text
CSS / visual layer
```

注意：

```text
已新增受控 CSS 块：
- Project2 Step 4B-R2-B — Main Footer Dark Editorial
- Project2 Step 4C-B — Shop Hero Editorial

用户要求后续不要忘记评估是否能合并/替换，不要长期堆叠。
后续单独执行：Step 4C-CLEAN1 · CSS 新增块合并整理。
```

同步状态：

```text
需要最终同步
```

### 1.4 `archive-product.php`

服务器路径：

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/woocommerce/archive-product.php
```

已改动：

```text
Step 4C-B · Shop Hero Editorial 结构补齐
Step 4C-C · The full edit 区块标题 + 商品网格上方编辑感增强
Step 4C-D-B · Editor’s Pick 动态区块接入
```

改动性质：

```text
PHP / WooCommerce archive template
```

保留能力：

```text
woocommerce_product_loop()
woocommerce_catalog_ordering()
woocommerce_product_loop_start()
wc_get_template_part('content','product')
woocommerce_product_loop_end()
woocommerce_pagination()
do_action('woocommerce_no_products_found')
taxonomy / attribute filters
```

同步状态：

```text
需要最终同步
```

### 1.5 `functions.php`

服务器路径：

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/functions.php
```

已改动：

```text
Step 4C-C-BACKEND1 · Shop V2 Customizer 字段补齐
Step 4C-D-B · Editor’s Pick Customizer 字段补齐
```

改动性质：

```text
PHP / Customizer registration
```

新增后台入口：

```text
外观 → 自定义 → Spatial Flow Shop V2
```

新增/使用字段：

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

同步状态：

```text
需要最终同步
```

## 2. 当前已上传但尚未确认改动的文件

### 2.1 `product-contact-band.php`

本地/服务器路径：

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/template-parts/product-contact-band.php
```

当前用途：

```text
Step 4C-E · Shop Closing Editorial Note / 底部编辑说明区审计
```

当前状态：

```text
已上传用于审计；尚未执行改动。
若后续 Step 4C-E-B 修改该文件，需加入最终同步清单。
```

## 3. 当前已通过的 Shop Body 状态

```text
Step 4C-B · Shop Hero Editorial：通过
Step 4C-C · The full edit / The Quiet Archive：通过
Step 4C-C-BACKEND1 · Shop V2 Customizer 字段补齐：通过
Step 4C-D · Editor’s Pick 可行性审计：通过
Step 4C-D-B · Editor’s Pick 动态区块接入：通过
```

当前文案状态：

```text
Product section title：The Quiet Archive
```

## 4. 当前保留问题

```text
Shop Mobile UX 保留问题：
手机端 /shop/ 第一屏主要看到 Hero / 文案 / meta 信息，不是商品。
当前不炸版，但首屏商品露出不足。
原因：V2 静态视觉稿偏桌面 editorial，没有针对手机端商品转化做足优化。
当前先不修，后续单独做：Step 4C-MOBILE1 · Shop Mobile First Screen 商品露出优化。
```

## 5. 当前下一步

```text
Step 4C-E · Shop Closing Editorial Note / 底部编辑说明区审计
```

当前已上传用于审计的文件：

```text
functions.php
archive-product.php
spatial-flow.css
product-contact-band.php
```

执行原则：

```text
不硬编码。
先审计 product-contact-band 是否可复用。
优先保留 / 复用后台可编辑来源。
不影响 WooCommerce loop / pagination / filters / Editor’s Pick。
Cart / Checkout / payment / orders 不碰。
```