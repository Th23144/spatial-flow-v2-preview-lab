# 项目二 · Journal 七页 WordPress 正式映射前审计（只读，非实施）

日期：2026-10-10
状态：**PRE-MAPPING AUDIT PREPARED / LATEST INSTALLED CHILD THEME UNVERIFIED / WP MAPPING NOT STARTED / R3 BROWSER VISUAL QA PENDING**

## 0. 本次审查的证据、来源边界和禁止事项

1. 设计基线：项目二独立分支 `temp-blog-static-final-qa-r3-20261010`，固定 commit `2c1a2cde0f1c456661346d28d105f91862a7785b`；其中七份 R3 是静态候选，**源代码审核已通过，用户真实桌面/移动端最终视觉验收尚未明确通过**。
2. 功能旧快照：Library 保存的 `functions(20261009-084852).php`（`SPATIAL_FLOW_CHILD_VERSION = '2.7.105'`）、`global-search.php` 和独立 `404.php`；这几份文件不构成同一个完整版本的已验证安装包。
3. GitHub 项目二预览仓库的 `main` 与 R3 分支均不含 `*.php` 或完整 child-theme ZIP，因此**不能通过预览仓库推断当前已安装 WordPress 子主题**。
4. 先前仓库记录 `STEP_BLOG_404_EMPTY01_DIRECTION_ACCEPTED_TAXONOMY_ROUTING_AUDIT_20261010.md` 报告基于此前上传的旧 ZIP（约 2.7.105）：存在 `home.php`、`archive.php`、`category.php`、`single.php`、`search.php`、`404.php`、`template-parts/journal-index.php`、`page-templates/global-search.php`。本轮未取得最新完整 ZIP，**旧审计中的结构是历史来源事实，不是当前已安装验证**。
5. WordPress 官方主题层级参考：https://developer.wordpress.org/themes/classic-themes/basics/template-hierarchy/ ；https://developer.wordpress.org/themes/classic-themes/functionality/custom-front-page-templates/ ；`WP_Query` 日期字段参考：https://developer.wordpress.org/reference/classes/wp_query/ 。

**本次只写审计文档**。不改历史七页原稿、R1/R2/R3、WordPress、主商城、项目三或线上域名；不为尚未审核的 ZIP 凭空写实施补丁。

## 1. 首要架构结论：Journal Home 与 Articles Archive 属于两个独立 URL/页面责任

**不允许把 Journal 首页和全量归档同时当成 `home.php` 的同一种渲染。**

WP 经典主题规则：
- `home.php` 是**博客 Posts Index**，无论是否在根路径。
- `front-page.php` 若存在，优先于 `home.php`。
- Settings → Reading 配置 “A static page”：Front page 和 Posts page 可选择不同页面。Posts page 应由 `home.php` 负责，设置到 Posts page 的任意自定义页面模板不能被当作其最终渲染依据。

**推荐而非已经执行的最小配置方案（最终需核最新子主题文件与站点 Reading 设置）：**
- Journal Home：博客子站独立的**静态 Front page**，对应 R3 `Journal-Home-R3.html`；沿用相应可编辑 Page/Front-page Owner。若需新增或使用 `front-page.php`，务必限定博客子站并回归主商城首页。不能贸然新增共享根 `front-page.php` 导致两个站点同时变化。
- Articles Archive：博客子站独立的**Posts page**，对应 R3 `Journal-Archive-R3.html`，生产用 `home.php` 实现已发布文章总索引，可保留 WP 正常分页行为。
- 若当前 Reading 配置/路由无法兼容上述推荐，先审查实际设置和模板层级，再按最小变更另做正式 Archive Page 模板；不凭空锁死 URL 为 `/articles/`，也不提前建新频道。

## 2. 七页 → WordPress 真实 Owner / 动态内容 / 零数据状态（暂定映射合同）

| 静态页 | 推荐或历史责任入口 | 必须来自 WordPress 的数据 | 零数据/路由要求 |
|---|---|---|---|
| R3 Home | 博客 Front page / Page 及其模板；**实际路由待 Reading 确认** | 首页编辑文案、媒体库图片、精选已发布 posts/编辑选择、四个真实 category term link、可编辑公共导航/模块 | 无已发布文章时隐藏精选虚卡；编辑模块保留合理内容，不伪造 Issue/作者/统计 |
| R3 Archive | Posts page `home.php`（推荐）；旧版 `home.php` 已作为索引 | 真实 `post` 查询、排序、分页、标题、摘要、分类、图片 | 无内容显示文章目录空状态；页码和主查询一致，不制造虚假文章 |
| R3 Article | `single.php` / 文章主查询 | Post 标题、正文、媒体附件、作者、日期、分类、可用脚注/引用、相关阅读、前后文章、可选 Afterword | 不存在文章走真实 404；无真实作者资料/图像不得造假；Afterword 留空整块隐藏 |
| R3 Category | `category.php` + 列表/zero-state 模板 | 实际 `WP_Term` 名称、介绍、图像/配置、该 term 的公开文章及分页 | term 有效且零公开文章→ HTTP 200，隐藏空列表和分页；term 不存在→正常 404 |
| R3 Search | 已有 `page-templates/global-search.php` 配合博客独立的 `/search/?q=` 页面 | 博客公开 `post`、可公开 `page`、真实 category terms，严格与商城产品分流 | 查询空/无结果/分组结果独立处理；不可把 R3 JS 样本、示例数字写死 |
| R3 404 | 共享根 `404.php` 内博客专用条件或隔离 template-part | 真实博客搜索、首页、Archive/Topics 的 permalink | 返回 HTTP 404；**不可覆盖主商城已正式 1:1 的 H01** |
| R3 Empty | **不是新的 WordPress 页面**；是 `category.php` 的有效零文章状态 | 与真实分类对象一致的 term 信息 | HTTP 200，有意义的空架说明，零假文章，无空分页 |

### Tag / Author / Date（复用，不臆造新页面）

旧 ZIP 的 `archive.php` → `template-parts/journal-index.php` 负责通用归档。Tag、Author、Date 在真实 WordPress URL 应有准确的上下文标题/Query。优先复用 Archive 或 Category 阅读结构，不分别设计三个全新页面：
- Tag：保留当前 term 限制和真实 name/description，公开文章 0 条时正确空状态；
- Author：按真实 author ID 限制，展示真实署名，禁止虚构作者简介；
- Date：旧 `journal-index.php` 手动查询缺年月日筛选；**在当前 WP 版本再次证实后**必须修复，确保 date archive 不列出全部文章。推荐尽量利用 WP main query 或完整透传 year/monthnum/day 与 paged，禁止只换 Hero 文字。WordPress 规范字段见官方 `WP_Query`。
- 主查询与二次查询不能各自使用不同筛选/分页条件，防止第 2 页空列表或错误 HTTP 404。

## 3. 与已存在业务代码的精确相容性

### 3A. Multisite Site Resolver （旧单文件中有直接证据）

`functions(20261009-084852).php` 里的 `spatial_flow_blog_site_id()`：
- 通过 `get_sites(['number'=>50])` 枚举，跳过主站；
- 优先匹配 domain 含 `blog.` 的站点；
- 找不到则选第一个非主站；再退回主站 ID。
`spatial_flow_is_journal_site()` 使用 `get_current_blog_id() === spatial_flow_blog_site_id()`。

**风险评估：** 这在当前仅有指定商城/博客两站时可能运行正常，但不是可扩展的、强绑定的 Journal 身份鉴别；新增子站、站点域名迁移、域名映射时，可能错误识别或 fallback 到主站。正式映射前需使用实际 Multisite `sites` 数据确定稳定的身份来源（显式已配置站点 ID/受控设置或经过核验的映射），而不是把 `blog_id=2` 作为无验证的硬编码。所有 Blog-only 模板和数据动作共享同一可靠边界。

### 3B. 已实现的 Search 分流不要重造

同一旧 `functions.php` 已有 `spatial_flow_split_search_results($query)`：
- journal 上：`products=[]`，`articles` 限 9、`pages` 限 6、`topics` 限 12；
- main 上：`products`、main pages、main taxonomy topics，不应混入博客文章。
`global-search.php` 从 `q` 构造查询，依据 `spatial_flow_split_search_context()` 输出 `journal/main` 样式；`search.php` 及 WordPress `?s=` 是另一条原生搜索路线。

**必须重新确认**：真实 search Page 配置、URL 生成、公开权限、不同用户状态、特定短词/符号/空词、分页、已删除内容、搜索结果 title/term URL，不是只验证静态 R3 搜索框能过滤假数据。尤其避免把商城搜索模板直接套进博客。

### 3C. Journal Dispatch 已有真实数据库流程

旧 `functions.php` 提供博客限定的 `sf_dispatch_entry` 私有 CPT，AJAX action `spatial_flow_journal_dispatch_submit`，`wp_verify_nonce`、honeypot、邮箱/主题校验与 `wp_insert_post`。数据保存 `_sf_dispatch_email`、`_sf_dispatch_topic`、`_sf_dispatch_source_url`，不是 Newsletter 服务、不是自动向用户发邮件。R3 的静态表单不可原样拷贝上线。映射前需复核模板 `template-parts/journal-dispatch-band.php` 与现有 handler 的 name、nonce、状态提示、前后端验证、反垃圾/限流与数据保护要求。

### 3D. 公共可编辑模块不直接写死

旧函数中已有 `spatial_flow_journal_copy()` 取 `sf_journal_copy_*` Theme Mod，`spatial_flow_footer_mod()` 取 `sf_footer_*`，另有 Footer / Mobile menu 相关 Customizer 设置。R3 Shadow DOM 内的静态 Header/Footer 只是视觉稿，不可将硬编码 GitHub URL、纯预览静态链接或模拟标语作为正式运营数据。正式应优先复用 WordPress Menu、Customizer 和正确的 Site/Term/Post permalink，避免双份菜单与双份 Footer。

### 3E. Afterword 独立内容合同（强制映射前主动提醒）

项目二锁定：`project2-progress/LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md`。

**Afterword 是当前 Post 的可选真实后记，不是前端固定装饰。后台有明确编辑说明；有真实有效正文才渲染，留空则整个区块隐藏；标题/真实署名可选。不得把静态文案 “Leave the room with one small question” 或 “A Note from the Editors” 作为全站默认内容。**

`Reading Invitation` 是另一独立的公共阅读引导，位于相关阅读后方；不得因为 Afterword 不存在而删除它。

单独旧 `functions.php` 内搜索 `afterword` 没有命中，**只说明该单文件中未查到命名实现**，不能据此断定完整子主题或插件里不存在。正式映射先核最新 zip，再确定 Gutenberg/Meta/其他可编辑机制，真实插入/清空测试为强制闸门。

## 4. 必查阻断点（按 P0 / P1）

| 级别 | 检查项目 | 是否可直接实施 |
|---|---|---|
| P0 | **最新实际安装 child theme 的完整 ZIP / commit 或可验证源码及版本** | **不能：尚未取得** |
| P0 | **博客 Reading: Front page 与 Posts page 的真实配置、permalink** | **不能：尚未取得** |
| P0 | **Multisite 当前全部站点 ID / 域名归属以及模板 Site Resolver** | **不能：旧源码需与现状比对** |
| P0 | 保持已上线商城 404 H01、商城首页、Header/Footer、Shop/Checkout/Crypto 不回归 | 正式修改前需定义 Main-site 回归用例 |
| P0 | 博客 404 真实状态码与子站独立路由 | 等真实模板与测试 |
| P0 | 文章 Afterword WP 编辑 Owner / 留空隐藏 / 内容真实性 | 等真实编辑控件、映射实现 |
| P1 | `journal-index.php` 是否仍存在 date filter 缺失及分页二次查询冲突 | 旧审计已提示，需新源码复核 |
| P1 | Blog Search q / native s 与 Main Search 的隔离及 SEO | 有旧实现参考，待最新源码验证 |
| P1 | Category 真实 term/zero-state，Author/Tag/Date context | 需要真实模板与测试 |
| P1 | Dispatch 真实 AJAX/nonce/honeypot/持久化及访客提示 | 有旧实现参考，待真实交互验证 |
| P1 | R3 浏览器 1440/1024/430/390/360/320px 视觉、焦点/弹窗/交互 | **尚未最终完成** |
| P1 | 后台可编辑、媒体合法、动态标题/SEO、R3 noindex 不进正式站 | 待 WP QA |

## 5. 具体下一次动手顺序（最小改动）

1. 获取**最新完整**子主题 ZIP，核 `style.css`/版本号、`functions.php`、模板层级、header/footer、template-parts、资产及 hooks；产生逐文件差异表。可保留现有真实站点备份。审计前禁止上传替换主题文件。
2. 检查博客设置 `Settings → Reading`，现有 Front page / Posts page 的真实归属，并确认 Multisite blog ID/siteurl。
3. 先锁定 Home / Archive 的 URL Owner 与栏目导航。
4. 对 `search.php`、`global-search.php`、`journal-index.php`、`404.php` 做功能 P0/P1 修复方案，单独隔离分支，不影响主站。
5. 建立可编辑字段 Owner Matrix（哪些是 WP Post / term / user / Theme Mod / Menu / 运行状态），不要复制静态样例数据库。
6. 映射前明确检查 Afterword 教学规则，再逐页制作、验收，保留主商城回归记录和响应式核查。
7. 用户 R3 实际视觉关口需补全；此任务授权进行**技术前审计**，不等于授权将 R3 直接覆盖 WP 或宣布最终设计封版。

## 6. 本轮核查的明确结论

**已经完成：**
- 已把 R3 七页归入 WordPress 模板/业务 Owner 责任矩阵；
- 通过 Library 的 2.7.105 单独 `functions.php` 核实 Multisite 站点发现规则、两站搜索分流、Journal Dispatch 存储、Customizer 部分接口和 Afterword 命名未见；
- 通过旧审计确认日期归档风险为生产必须复核项；
- 根据 WordPress 官方模板层级，指出 Home 与 Archive 不能不做 Reading 分流直接映射同一 `home.php`。

**没有完成且不得冒称完成：**
- 2026-10-10 实际安装子主题最新完整源码的获取和 diff；
- 当前真实博客 Reading/站点 ID/数据库配置核验；
- R3 实机浏览器最终视觉与交互验收；
- WordPress 生产映射、单元/集成/生产级回归。

推荐状态：**PRE-MAPPING OWNERSHIP AUDIT WRITTEN / SOURCE GATE BLOCKED / R3 VISUAL GATE PENDING**。
