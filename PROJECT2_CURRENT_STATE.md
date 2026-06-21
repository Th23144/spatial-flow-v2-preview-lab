# Project 2 · Spatial Flow V2 换皮工程 · Current State

Last updated: 2026-06-21
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 0. 当前最高优先级结论

用户已经明确：后续上传给 ChatGPT 的文件，是用户从**当前服务器线上源文件**拷贝到本地电脑后的最新文件。用户已清空存储库里的旧上传文件，目的是避免读取到错误基准。

因此：

- 之前本窗口生成过的所有下载文件、补丁文件、整文件替换版本、Step 4A / Step 4B 临时产物全部作废。
- 之前上传过的旧 `header.php`、`footer.php`、`spatial-flow.css`、`archive-product.php`、`content-product.php` 等文件不能再被当作当前真实基准。
- 后续所有修改必须以用户**重新上传的服务器当前源文件**为唯一基准。
- 后续所有代码输出必须默认在聊天框内给出可复制的“精确替换方案”，不要默认让用户下载完整文件。

## 1. 项目定位

项目名称：Project 2 · Spatial Flow V2 视觉替换 / 换皮工程。

项目目标：

- 将 GitHub 仓库中的 V2 静态视觉稿逐页迁移到真实 WordPress / WooCommerce 站点。
- 保留现有 WordPress / WooCommerce / Wishlist / Cart / Checkout / Blog 等真实功能。
- 目标是逐页接近 1:1，而不是做一个“大概像”的全局皮肤包。
- **必须保留成品站已有的后台可编辑能力。用户当前成品站已经做到几乎所有后期运营内容都可以在 WordPress 后台 / Customizer / 菜单 / 主题设置 / 可编辑字段中维护，这一点不可丢。**

长期边界：

- 不把 Project 3 · Ink & East 的长期源码站功能混进 Project 2。
- Project 2 是换皮工程，不是重建站，不是新建系统。
- 后续服务器真实修改必须谨慎、可回滚、小步验收。

## 2. 可用静态视觉稿来源

主视觉仓库：`Th23144/spatial-flow-v2-preview-lab`

核心静态稿路径：

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

注意：静态稿是视觉源，不是可直接覆盖真实 WordPress 的业务代码。迁移时要把真实功能代码作为动态插槽嵌入静态视觉结构。

## 3. 新执行原则：精确替换，不再补丁堆山

从现在开始，后续全部按以下原则执行：

1. 不再优先整文件覆盖。
2. 不再优先 CSS 末尾无限追加。
3. 每次先读取用户重新上传的当前服务器源文件。
4. 先检查文件大小、行数、关键结构。
5. 再对照 GitHub 静态视觉稿源码。
6. 输出聊天框内可复制的精确替换方案。
7. PHP 改动必须保留功能代码，把 WordPress / WooCommerce 功能嵌入 V2 视觉结构。
8. CSS 改动优先：替换旧选择器块、合并重复补丁、删除无效旧块、必要时才追加。
9. 每次只改一个小范围，完成后用户截图验收。
10. 完整文件下载只作为备用，不作为默认方案。
11. **后台可编辑性是硬边界：不得把原本可后台编辑的文案、链接、菜单、Footer 栏目、按钮、表单提示、运营说明、站点配置等改成不可维护的硬编码静态内容。**
12. 如果静态稿里有固定文案，迁移到真实站时应优先映射到现有函数、theme_mod、菜单、option、shortcode、WP 内容或已有自定义字段；确实没有可编辑来源时，必须明确说明“这里暂时硬编码”，并建议后续补后台字段。

### 3.1 后台可编辑性保护原则

执行时必须主动检查：

```text
- 是否存在 get_theme_mod / spatial_flow_*_text / spatial_flow_*_mod / option / menu / shortcode / template-part 等可编辑来源
- 是否存在 has_nav_menu / wp_nav_menu 等后台菜单位置
- 是否存在后台可配置 URL / 文案函数
- 是否存在表单、订阅、contact、footer、journal、product guidance 等后台管理记录或可编辑文案
```

改代码时必须遵守：

```text
1. 能用现有动态函数，就不要写死静态文案。
2. 能保留 wp_nav_menu，就不要替换成纯静态 <ul>。
3. 能保留 theme_mod / option，就不要删掉。
4. 视觉结构可以换，但后台控制入口不能丢。
5. 如果为了临时对齐视觉必须硬编码，要在输出中明确标注风险，并提供后续后台字段化计划。
```

标准输出里的【保留功能】必须扩展为：

```text
【保留功能 / 后台可编辑性】
说明保留了哪些 WordPress / WooCommerce 功能，以及哪些后台可编辑来源被保留。
```

## 4. 当前修改基准已归零

当前真实状态不是此前生成过的任何一个版本。

作废内容包括但不限于：

```text
project2-step-3g-shop-first-cut-*
project2-step-3g-c-shop-visual-gap-fix-*
project2-step-4a-shop-v2-structural-*
project2-step-4b-editorial-shell-*
project2-step-4b-r1-editorial-header-precise-*
```

这些内容可以作为历史参考，但不能作为当前要上传覆盖的源文件。

## 5. 当前已完成

### 5.1 Header / Footer 外壳

- Step 4B-R1 · Header 精确替换：用户已执行并检查通过。
- Step 4B-R1.1 · Header 桌面导航可编辑性回补：已完成。Header 桌面左侧导航已改成 `wp_nav_menu` / 后台菜单优先，静态 fallback 备用。
- 后台菜单位置截图已确认存在：`Spatial Flow Primary Menu（当前设置为：Main Header Menu）`。
- Header hover Shop 动态 Mega Menu 曾因 V2 Header 使用 `.sf-v2-primary-menu` 而失效，后续通过**替换旧 CSS 选择器**恢复，没有新增 `Project2 Step 4C-B-FIX1` 临时块。

Header 已检查通过范围：

```text
首页 Header
Shop Header
Search 是否能打开
Saved 是否跳 Wishlist
Bag 是否跳 Cart
手机端 Menu 是否能打开
Blog 子站是否明显炸版
Cart / Checkout 是否能打开
电脑端鼠标 hover Shop 后动态分类弹窗是否恢复
```

- Step 4B-R2-A · Footer 顶部品牌区精确合并：前台通过，后台未单独检查，但未删除 footer 菜单位置。
- Step 4B-R2-B · Main Footer 深色 editorial 化：前台通过。用户选择 B：改成深色 Footer。检查结果：文字清楚，页面正常。

### 5.2 Shop Body / Hero

- Step 4C-A · Shop Body V2 结构审计：已完成。
  - `archive-product.php` 和 `content-product.php` 功能结构正常。
  - `woocommerce_product_loop()`、`woocommerce_catalog_ordering()`、`wc_get_template_part( 'content', 'product' )`、`woocommerce_pagination()`、YITH Wishlist shortcode、taxonomy filters 均需保留。
- Step 4C-B · Shop Hero Editorial 结构补齐：已完成。
  - `archive-product.php` 顶部 Hero 已改成更接近静态稿的 Breadcrumb + Hero copy + Meta + Editorial body。
  - Hero 文案改成 `get_theme_mod()` 优先：`sf_shop_v2_kicker`、`sf_shop_v2_pieces_meta`、`sf_shop_v2_makers_meta`、`sf_shop_v2_origin_meta`、`sf_shop_v2_lede`、`sf_shop_v2_body`、`sf_shop_v2_signoff`。
- Step 4C-B 后用户反馈手机端不炸版但不够合理：Hero 首屏过长，Pieces / Makers / Origin 信息过散。
- Step 4C-B-FIX1 已采用**替换版**执行：
  - 没有新增 `/* === Project2 Step 4C-B-FIX1 — V2 Header Dynamic Shop Mega Restore START === */`。
  - 没有新增 `/* === Project2 Step 4C-B-FIX1 — Mobile Shop Hero Density START === */`。
  - 已通过替换原有 selector / 替换 Step 4C-B 内部手机端 media block 的方式完成。
  - 用户反馈：Shop hover 弹窗恢复，手机端 Hero 修复后都没问题。

## 6. 当前必须记住的后续清理任务

用户特别提醒：之前对话中曾新增以下两个受控 CSS 块，后续不要忘记评估是否可以替换/合并，而不是长期堆叠：

```text
/* === Project2 Step 4B-R2-B — Main Footer Dark Editorial START === */
/* === Project2 Step 4C-B — Shop Hero Editorial START === */
```

处理原则：

- `Step 4B-R2-B Footer Dark Editorial`：理论上可以后续合并回 Footer V2 主样式区，删除/替换浅色主站 footer 样式。
- `Step 4C-B Shop Hero Editorial`：这是配合 `archive-product.php` 新增结构的组件样式，不一定能简单替换旧块；可以后续整理进 Shop V2 主样式区或 Product Archive Visual Scope Fix 区。
- 当前不要马上清理，因为 Header / Footer / Shop Hero 刚通过。应后续单独做：

```text
Step 4C-CLEAN1 · CSS 新增块合并整理
```

执行 CLEAN1 前必须让用户重新上传当前服务器最新 `spatial-flow.css`，并输出“删除哪一段、替换哪一段”的清理版教程。

## 7. 推荐下一步

下一步建议执行：

```text
Step 4C-C · The full edit 区块标题 + 商品网格上方编辑感增强
```

目标：继续贴近 `preview/spatial-flow-shop-v1.html` 的 Shop Body，但仍然不碰 WooCommerce loop 逻辑。

执行前建议让用户上传当前最新：

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/woocommerce/archive-product.php
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/woocommerce/content-product.php
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/spatial-flow.css
```

## 8. Header 迁移方向

目标视觉来源主要来自 `preview/spatial-flow-shop-v1.html` 的 top nav / brand / utilities / masthead 风格。

目标 Header 气质：

```text
顶部细线信息栏
中间大号 SPATIAL FLOW 字标
左侧栏目导航
右侧 Search / Account or Saved / Bag
整体像 editorial magazine masthead
```

但必须保留真实功能与后台可编辑性：

```text
WordPress 菜单 / 菜单位置
搜索按钮和搜索面板
Wishlist / Saved 链接
Cart / Bag 链接
移动端 Menu 按钮
移动端 drawer
博客子站分支逻辑
可后台编辑的 topbar / header 文案来源
Shop hover 动态 Mega Menu
```

## 9. Footer 迁移方向

Footer 不要推倒重写。用户当前主题 Footer 已包含 V2 footer 菜单、trust card、legal section、博客子站分支、后台可编辑文案函数。

原则：

- 能保留动态菜单就保留。
- 能替换外观 wrapper 就替换。
- 不要删除已有后台可编辑菜单位置。
- 不要删除 `spatial_flow_footer_v2_text` / `spatial_flow_footer_v2_mod` 等后台可编辑来源。
- 不要影响博客子站 footer 分支。
- 主站 Footer 已深色化，Blog Footer 是否深色化后续另行判断，不要默认误伤 Blog Footer。

## 10. Shop 迁移方向

Shop 应以 `preview/spatial-flow-shop-v1.html` 为主结构，把真实 WooCommerce 功能嵌入，而不是在旧 WooCommerce 结构上不断加 CSS。

必须保留：

```text
woocommerce_product_loop()
woocommerce_catalog_ordering()
woocommerce_pagination()
wc_get_template_part('content', 'product')
商品链接
商品图
商品标题
价格
YITH Wishlist shortcode
筛选链接
后台可编辑的 Shop hero / filter / category / contact-band 文案来源，如当前主题已有
```

下一步 Shop Body 可以继续补：

```text
The full edit 区块标题
商品网格上方 editorial count / section head
Editor's Pick 是否要做：需要谨慎，因为要保留真实商品来源，不要硬编码商品
Closing editorial note 是否要做：可优先映射到现有 product-contact-band 或后台可编辑文案
```

## 11. 高风险边界

Cart / Checkout / Thank You 最后做，不要提前碰。

禁止轻率改动：

```text
Checkout form submit
Payment gateway DOM
Terms checkbox
wc-ajax=checkout
Order creation
Shipping/payment/order review DOM
Cart quantity/coupon/remove 行为
Woo notices
updated_checkout / checkout_error
```

## 12. 新窗口接续方式

新窗口启动时，用户只需说：

```text
读取 GitHub 仓库 Th23144/spatial-flow-v2-preview-lab 的 PROJECT2_CURRENT_STATE.md 和 PROJECT2_NEXT_WINDOW_PROMPT.md，继承项目二进度。
```

新窗口必须先读取这两个文件，再继续任务。