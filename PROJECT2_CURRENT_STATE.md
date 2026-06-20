# Project 2 · Spatial Flow V2 换皮工程 · Current State

Last updated: 2026-06-20
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

用户新增要求：当前成品站已经做到几乎所有后期运营内容都可在后台编辑，后续换皮不能破坏这个能力。

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

用户已按 Step 4B-R1 执行 Header 精确替换，并反馈检查没有问题。

已检查通过范围：

```text
首页 Header
Shop Header
Search 是否能打开
Saved 是否跳 Wishlist
Bag 是否跳 Cart
手机端 Menu 是否能打开
Blog 子站是否明显炸版
Cart / Checkout 是否能打开
```

注意：该 Header 版本里部分桌面导航文字采用 editorial 固定链接/文案方式。后续如需进一步提升后台可编辑性，应优先把桌面 Header 左侧栏目映射回 `wp_nav_menu` 或现有后台菜单位置，而不是长期硬编码。

## 6. 推荐下一步

下一步建议执行：

```text
Step 4B-R2 · Header 可编辑性回补 / Footer 精确合并前审计
```

建议先让用户上传或确认当前最新：

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/header.php
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/footer.php
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/spatial-flow.css
```

执行顺序建议：

1. 先审计 Header 替换后是否丢失后台菜单可编辑性。
2. 如丢失，应把桌面 Header 左侧栏目改回后台菜单优先、静态 fallback 备用。
3. Header 可编辑性确认后，再做 Footer 精确合并。
4. Header/Footer 外壳通过后，再回头修 Shop body。
5. Shop 完成后，再进入 Product。
6. Cart / Checkout / Thank You 最后单独走高风险安全流程。

## 7. Header 迁移方向

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
```

## 8. Footer 迁移方向

Footer 不要一开始推倒重写。用户当前主题 Footer 可能已包含 V2 footer 菜单、trust card、legal section、博客子站分支、后台可编辑文案函数。应先检查当前服务器文件。

原则：

- 能保留动态菜单就保留。
- 能替换外观 wrapper 就替换。
- 不要删除已有后台可编辑菜单位置。
- 不要删除 `spatial_flow_footer_v2_text` / `spatial_flow_footer_v2_mod` 等后台可编辑来源。
- 不要影响博客子站 footer 分支。

## 9. Shop 迁移方向

此前截图反馈显示：Shop 功能能打开，但视觉与目标差距大。关键原因不是单个小块，而是整体气质：Header/Footer 未对齐、Hero 文案不对、商品图素材差异、商品卡层级未完全贴近 V2。

后续 Shop 应以 `preview/spatial-flow-shop-v1.html` 为主结构，把真实 WooCommerce 功能嵌入，而不是在旧 WooCommerce 结构上不断加 CSS。

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

## 10. 高风险边界

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

## 11. 新窗口接续方式

新窗口启动时，用户只需说：

```text
读取 GitHub 仓库 Th23144/spatial-flow-v2-preview-lab 的 PROJECT2_CURRENT_STATE.md 和 PROJECT2_NEXT_WINDOW_PROMPT.md，继承项目二进度。
```

新窗口必须先读取这两个文件，再继续任务。
