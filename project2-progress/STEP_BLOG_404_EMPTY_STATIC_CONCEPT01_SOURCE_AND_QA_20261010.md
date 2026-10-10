# 项目二 · Blog 404 + Empty Category 静态设计 01

日期：2026-10-10
状态：**两份静态预览已创建；源码、导航和模拟交互 QA 已核查；等待用户实际浏览器视觉验收。无 WordPress 生产代码变更。**

## 执行上下文
用户暂定 Search05 后要求“开始”，即进入此前已锁定的 **Blog 404 / Empty State**。已完成的主商城 404 H01 是独立的生产验收结果，不许因为本轮博客 404 再改动、重新开启或错误标记未完成。

**重要区分：**
- 主商城：`spatialflow.local` / blog_id 1 — 404 H01 已完成 1:1，不重开。
- 博客子站：`blog.spatialflow.local` / blog_id 2 — 404 是另一个视觉分支，仍未生产映射。
- 博客“404” = 请求的具体 URL 找不到；博客“空分类” = 该分类确实存在，只是暂无公开文章。不得将二者混同。
- 静态 404 HTML 的宿主 HTTP 状态为正常网页预览的 200；上线映射到 WordPress 时才应正确输出 **HTTP 404**、保留站点正确的 query、header/footer，并让搜索入口查询博客而非商店。
- 非当前博客子站场景（商店/其它多站点）必须保留原 404 行为；**正式映射必须做 blog_id / `spatial_flow_is_journal_site()` 路由隔离和双站回归**。

## 项目三原版依据（只读）
- 高保真 Archive 原稿：`Th23144/ink-east-planning/preview/ink-east-articles-archive-v1.html`。页面核心样式 **12,517 字符**，EB Garamond / Noto Serif SC / JetBrains Mono，纸色 #f4ede0、墨色 #1a1611、朱砂 #a02d23，编辑性节奏、纤细分隔线、分节页眉、类别空状态和分栏阅读路径。
- 项目三另有 `apps/web/src/app/(site)/not-found.tsx`，但**只有功能型 Not Found 组件**，并非与 Archive 同等成熟度的高保真 404 静态稿。其语义“Nothing public is available here”可参考，不得声称此次 404 是项目三 1:1 复刻。
- 上述两个 Project3 源文件全部只读；项目三代码、仓库均未更改。
- 静态 Header/Footer 继承项目二已使用并讨论过的 Journal Archive01 组件。真实生产版应仍使用 WP 编辑菜单/Customizer 与已有 Footer，而不是直接拷贝 Shadow DOM 组件。

## A. Blog 404 · Concept01
**预览**：
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/1c60cf723809b53f9e607f3e1a9d1cc8ef911d11/temp-preview/Spatial-Flow-Journal-404-01.html

仓库分支：`temp-blog-notfound-empty-concept01`
文件：`temp-preview/Spatial-Flow-Journal-404-01.html`
对应文件早期提交：`9f20f6dc83f4230162cf7a0916614a9b98f1b605`，当前共同锁定快照使用 `1c60cf723809b53f9e607f3e1a9d1cc8ef911d11`。

### 设计定位
404 作为**博客独立的功能性“找回路径”页**，不是另一个 Article Archive、不是商品站 404。
- 纸色 Hero 保留原稿原生 kicker、H1 字体、中文题签、lede；左侧明说 “This page isn't here.” / 此頁·未見。
- 右侧唯一一块墨色 editorial register 使用大幅 EB Garamond `404` 和中文「查無此頁」，有必要的信息含义，而不是营销卡片。
- 下方纸色 `Find another way` 保留项目三 `section-head` 排版风格；左侧博客检索、右侧三个不带盒框的阅读入口。
- 搜索表单在**静态稿**中可直接用 GET `q` 参数跳转到已暂定 Search05 的 pinned 预览 URL；**未来 WordPress 生产映射必须改为博客真实 `/search/?q=...`**，不能拿临时 raw.githack URL 当生产地址。
- 三个入口指向已存在的临时视觉稿：Article Archive01、Category02、Journal Home03。无 VIP、Issue 或商品入口；无其它深色背景和夹白的开发条。
- 静态页预览的 `meta robots=noindex` 不等于有效 404 HTTP response；生产要验收真实状态码。

## B. Empty Category · Scenario01
**预览**：
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/1c60cf723809b53f9e607f3e1a9d1cc8ef911d11/temp-preview/Spatial-Flow-Journal-Empty-Category-01.html

仓库分支：同上
文件：`temp-preview/Spatial-Flow-Journal-Empty-Category-01.html`
固定提交：`1c60cf723809b53f9e607f3e1a9d1cc8ef911d11`

### 重要的实现约束
**这不是另外一个需要建立的 WordPress 页面模板。**
它是从已经用户视觉通过的 **Category/Topic02** 原样继承 CSS 的变体展示，默认选择 `Care & Practice`，示例公开文章数恰好为 **0**，测试不丢失分类标题、图片、描述、其它分类导航和 Footer。此空状态未来应该嵌入已有 `category.php` 的无 Post 查询分支（或已有通用 Journal article index 的统一 empty partial，需在实际源码复核后决策），而不是把实际存在的 term 错误路由成 404。
- 将无文章的主内容替换为 `空 / The shelf is quiet for now` 及真实读者可理解的解释文案；提供返回文章总目录链接；不编造“即将更新”日期。
- 无公开文章时自动**隐藏醒目首篇、文章行和分页**，显示 0 public articles；其它分类入口保持可用。
- 可以点击其它分类切回含有示例文章的场景，检查同一模板在两种情况下均正常。
- 针对旧 Category02 源码中当作用户文案显示的开发提示改成读者可理解的正式文本；不将任何示例/开发教学默认写入生产分类内容。
- CSS 完整保持 Category02 既有样式，严禁为 empty 单独换另一套字体和颜色。原版 Category02 仍为视觉通过的主候选，不回写变更。

## C. 404/empty/source QA
- 从 GitHub 当前 pinned commit 重新读取两份文件。
- Blog 404 源码 45,113 字符，CSS 4 块括号平衡；原始 Archive 主 CSS **12,517 字符一字未动**；2 个 JS 脚本语法 PASS；单个 H1、MAIN、section 开闭平衡、ID 无重复。screen-reader-only 搜索 label helper 已定义，不再暴露上次 Search04 的错误。
- Empty Category 75,188 字符，CSS 同样四块，首块 12,517 字符；3 个 JS 语法 PASS；MAIN、H1、3 section 开闭平衡、无重复 ID。其源 CSS 与获通过的 Category02 完全相同。
- Empty 交互模拟：初始 Care 是 0 篇，空状态可见、lead 和分页隐藏，3 个其它分类路径；切换 Space → 11 篇示例（首页 9 = 1 lead + 8 shelf），空状态隐藏、分页显现；切回 Care → 恢复 0 与空状态，非缓存残留。
- 404 form 的 action 指向 Search05 pin，method=GET，输入 name=q；Search05 确认可以读取 URL query string `q`。
- 实际 `raw.githack.com` 页面浏览器截图和移动端字体/图片加载无法在本工具环境中抓取（DNS/沙盒限制）。**不能宣称浏览器视觉 PASS 或 WordPress 生产端测试成功**。

## D. Tag / Author / archive routing coverage gate
已经存在并可核对的真实能力是 WordPress 分类、文章归档、站内搜索及 Posts 等；**不要预先声称现有 `tag.php`、`author.php` 或独立 404.php 一定存在**，因为本轮仅有仓库设计稿、没有重新读取用户最新已安装的 ZIP 文件目录。
生产阶段必须从最新 ZIP 审核实际 WordPress template hierarchy：
- 博客 category 分类页的真实 term + 0 `publish` 文章 → 空分类模块；
- 如博客公开 tag/author archive，确认其 `tag.php` / `author.php` / `archive.php` / `index.php` 回退所有权；仅在确实支持该页族时套统一空状态；
- 空搜索结果仍属于 Search05 自己的“no matches”，不是 404，也不是空分类；
- 未发布/私密帖子仍不能在公开检索或分类列表中泄露；
- WP 多站点博客站使用 Journal 404，而商城的已完成 404 不受影响。
- 真实断链应返回 404 状态码且不破坏 canonical/noindex/permalink 判断，避免创建虚假 200 页面。

## E. 下一步
请用户视觉比较：
1. 404：顶部标题与深色 404 印刷区的比例、纸色恢复区域的功能清晰度、桌面/手机断点，是否与 Archive01、Category02、Search05 属同一博客。
2. Empty：左侧已有分类目录、空状态与底部纸色 Other Ways In；是否在没有文章时仍然自然，且无空白跳板和假分页。
如用户认可 404 与 Empty 方向，再核对博客 taxonomy/author/tag 实际路由并进入统一视觉审查；**所有静态稿确认后才做 WordPress 映射**。
跨页面永久要求：Article04 Afterword 是文章真实内容、独立可选；映射前必须主动提醒，后台提供教学，前端无内容隐藏，独立 Reading Invitation 必须保留。参阅锁定规范。
