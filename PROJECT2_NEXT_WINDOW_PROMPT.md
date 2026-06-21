# Project 2 · Next Window Prompt

复制下面这段给新窗口，用于完整继承 Project 2：

```text
请先读取 GitHub 仓库 `Th23144/spatial-flow-v2-preview-lab` 中的两个文件：

1. `PROJECT2_CURRENT_STATE.md`
2. `PROJECT2_NEXT_WINDOW_PROMPT.md`

读取后再继续 Project 2 · Spatial Flow V2 换皮工程。

重要基准：
- 用户已经清空旧上传文件。
- 后续上传的是服务器当前源文件拷贝到本地后的最新文件。
- 之前本窗口生成过的所有补丁、下载文件、整文件替换版本全部作废。
- 不要把旧上传文件或旧生成文件当作当前真实基准。

执行原则：
- 不再优先整文件覆盖。
- 不再优先 CSS 末尾无限追加。
- 每次先读取用户上传的当前源文件。
- 先检查文件大小、行数、关键结构。
- 再对照 GitHub 静态视觉稿源码。
- 在聊天框内直接给可复制的精确替换代码。
- 不要默认让用户下载完整文件。
- PHP：保留 WordPress / WooCommerce 功能，把功能代码嵌入 V2 视觉结构。
- CSS：优先替换旧选择器块、合并重复补丁、删除无效旧块，必要时才追加。
- 目标是逐页 1:1 迁移，不是差不多像。
- 后台可编辑性是硬边界：用户当前成品站已经做到几乎所有后期运营内容都可在后台编辑，后续换皮不能破坏这个能力。
- 能用现有动态函数、theme_mod、option、菜单、shortcode、template-part、自定义字段，就不要写死静态文案。
- 如果静态稿里有固定文案，迁移到真实站时应优先映射到已有后台可编辑来源；确实没有来源时，必须明确标注“这里暂时硬编码”，并建议后续补后台字段。

标准输出格式：

文件：xxx.php / xxx.css

【先检查】
- 文件大小
- 行数
- 关键结构

【定位】
找到从：
...
到：
...

【删除 / 替换】
把这一段删除，替换成：
...

【保留功能 / 后台可编辑性】
说明保留了哪些 WordPress / WooCommerce / Wishlist / Cart / Search / Mobile Menu 功能，以及哪些后台可编辑来源被保留。

【视觉来源】
说明对应 V2 静态稿哪一块。

【风险】
说明可能影响哪里，尤其是否会损失后台可编辑能力。

【回滚】
说明恢复哪一段或恢复哪个备份文件。

当前状态：
- Step 4B-R1 Header 精确替换：已通过。
- Step 4B-R1.1 Header 桌面导航可编辑性回补：已通过，Header 左侧导航已经回到后台菜单优先。
- WordPress 后台已截图确认菜单位置存在：`Spatial Flow Primary Menu（当前设置为：Main Header Menu）`。
- Step 4B-R2-A Footer 顶部品牌区：前台通过。
- Step 4B-R2-B Main Footer 深色 editorial 化：前台通过，用户选择深色 Footer，文字清楚。
- Step 4C-A Shop Body V2 结构审计：已完成，核心 WooCommerce loop / sorting / pagination / wishlist / taxonomy filters 均保留。
- Step 4C-B Shop Hero Editorial 结构补齐：已完成。
- Step 4C-B-FIX1 采用替换版完成：Shop hover 动态 Mega Menu 已恢复，手机端 Shop Hero 已压缩并通过。注意：没有新增 `Project2 Step 4C-B-FIX1` 两个临时 CSS 块。
- Step 4C-C The full edit 区块标题 + 商品网格上方编辑感增强：前台视觉通过。
- Step 4C-C-BACKEND1 Shop V2 Customizer 字段补齐：通过。后台 `外观 → 自定义 → Spatial Flow Shop V2` 已能编辑 Shop Hero / Product section 相关字段。
- Step 4C-D Editor’s Pick 独立区块可行性审计：通过，结论为可做，但不能硬编码商品。
- Step 4C-D-B Editor’s Pick 动态区块接入：通过。后台可开启 Editor’s Pick、选择真实 WooCommerce 商品、编辑推荐文案；前台图片/价格/链接来自真实商品；手机端暂时隐藏 Editor’s Pick，避免继续挤压首屏商品露出。

当前文案状态：
- Product section title 当前被用户改为：`The Quirt Archive`。
- 这个词看起来可能是拼写笔误；如果用户本意是“安静档案”，建议改成 `The Quiet Archive`。
- 修改路径：`外观 → 自定义 → Spatial Flow Shop V2 → Product section title`。

当前保留问题：
- Shop 手机端首屏商品露出不足：手机端 /shop/ 第一屏主要看到 Hero / 文案 / meta 信息，不是商品。当前不炸版，但转化体验不够好。
- 用户明确：这是 V2 静态视觉稿未做手机端优化导致，当前先不修，保留问题即可。
- 后续建议单独做：`Step 4C-MOBILE1 · Shop Mobile First Screen 商品露出优化`。

当前重要待办提醒：
- 用户特别提醒不要忘记后续清理/合并这两个已经新增的受控 CSS 块：
  1. `/* === Project2 Step 4B-R2-B — Main Footer Dark Editorial START === */`
  2. `/* === Project2 Step 4C-B — Shop Hero Editorial START === */`
- 不要现在为了整洁强行清理，因为 Header / Footer / Shop Hero 刚通过。
- 后续应单独做：`Step 4C-CLEAN1 · CSS 新增块合并整理`。
- CLEAN1 执行前必须让用户重新上传当前服务器最新 `spatial-flow.css`，再输出“删除哪段 / 替换哪段”的精确清理教程。

当前下一步建议：
`Step 4C-E · Shop Closing Editorial Note / 底部编辑说明区审计`

继续 Shop Body 时必须保留：
- `woocommerce_product_loop()`
- `woocommerce_catalog_ordering()`
- `woocommerce_pagination()`
- `wc_get_template_part('content', 'product')`
- 商品链接、商品图、标题、价格
- YITH Wishlist shortcode
- taxonomy / attribute 筛选链接
- 后台可编辑的 Shop hero / filter / category / contact-band 文案来源
- Editor’s Pick 真实 WooCommerce 商品来源和后台字段

Cart / Checkout / Thank You 最后做，不要提前碰。
```

## 对助手的额外提醒

如果用户说“继续项目二 / 继承项目二 / 读取 handoff”，必须先读取 `PROJECT2_CURRENT_STATE.md`，不要凭长期记忆直接继续。

如果用户重新上传文件，必须以新上传文件为唯一基准。

不要引用、使用、推荐此前生成的以下历史产物作为当前版本：

```text
project2-step-3g-shop-first-cut-*
project2-step-3g-c-shop-visual-gap-fix-*
project2-step-4a-shop-v2-structural-*
project2-step-4b-editorial-shell-*
project2-step-4b-r1-editorial-header-precise-*
```

这些历史产物最多只作为“曾经尝试过但作废”的参考。