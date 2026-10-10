# 项目二 · Blog Journal 七页统一视觉 / 结构 / 路由源代码审计

日期：2026-10-10
执行依据：用户在 Blog 404 / Empty 静态方案评价“这两个还可以”之后，要求“开始”，即执行博客各页面族的**统一设计审计阶段**。本次是源码/静态结构审查；**未擅自改写七份已选设计、未进入 WP 生产映射**。

## 一、锁定对照与唯一候选集
| 页面族 | 已讨论状态（不得擅自升级） | 当前源 |
|---|---|---|
| Journal Home | Concept03 “这版还可以”，可继续但未正式封版 | `e493b97d44285d29abe96f3dce9d105cbee84ce6/temp-preview/Spatial-Flow-Journal-Editorial-Adaptation-03.html` |
| Articles Archive | Concept01 足以继续，待总审 | `0ba8e02ea9e560283818334a8845c43a2c9d2cd2/temp-preview/Spatial-Flow-Journal-Articles-Archive-01.html` |
| Single Article | Concept04 用户确认 “好了，就这版了” 的视觉方向 | `e61b90c1430955713a23b8aea656649abe772b9e/temp-preview/Spatial-Flow-Journal-Single-Article-04.html` |
| Category / Topic | Concept02 用户“可以”，静态视觉已通过推进 | `64e4f937d06d9513a8b7bb2c688d4cb143897135/temp-preview/Spatial-Flow-Journal-Category-Topic-02.html` |
| Search | Concept05 用户“先暂定这一版吧”，不等于封版 | `e0017a00c283dc6c99ce590c509fbf8f5bc45686/temp-preview/Spatial-Flow-Journal-Search-05.html` |
| Blog 404 | Concept01 用户“这两个还可以”，方向可用 | `1c60cf723809b53f9e607f3e1a9d1cc8ef911d11/temp-preview/Spatial-Flow-Journal-404-01.html` |
| Empty Category | 与 404 同时方向可用 | `1c60cf723809b53f9e607f3e1a9d1cc8ef911d11/temp-preview/Spatial-Flow-Journal-Empty-Category-01.html` |

仓库：`Th23144/spatial-flow-v2-preview-lab`。源均通过 GitHub connector 以锁定 SHA 精确读取。项目三原稿 `Th23144/ink-east-planning/preview/ink-east-articles-archive-v1.html` 只读。

### 可视对照工具（新增，**不是新的产品页面设计**）
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/f9dba5bd59ee54c85faaeea57da3b208eb6e2540/temp-preview/Spatial-Flow-Journal-7Page-Visual-QA-Board-01.html

两栏可选任意七份文件，切换宽度 1440 / 1024 / 430 / 390 / 360 / 320，并通过 pinned 源页链接在独立标签直接打开。浏览器 iframe 如被平台拦截，点击独立页面链接即可。这个工具只是人工视觉检查辅助，不能算浏览器自动验收。

## 二、已经通过的“静态源事实”与合理差异
1. **纸色/墨色/朱砂色 token 一致：** 所有 7 页共有 `--paper:#f4ede0`、`--paper-light:#faf5e9`、`--ink:#1a1611`、`--seal:#a02d23`，连同 `--ink-soft` / `--ink-faint`、`--rule` / `--rule-soft` 的系统一致。
2. **字体家族一致：** EB Garamond（英文）、Noto Serif SC（中文）、JetBrains Mono（期刊编号/功能说明）。Home/Article CSS 书写方式不同于 Archive/Category/Search 的精简版，但 token 值没有改变，不应无理由改字体。
3. **Header/Footer 真正共享样式：** 七份静态稿均含一个 `ink-east-public-nav` 和 `ink-east-footer`；从各脚本提取的 Nav Shadow CSS 长度**4,805 字符且七份逐字相同**，Footer Shadow CSS 长度**6,698 字符且七份逐字相同**。JS 文件长度差别来自菜单 href 等内容，不应误报为视觉错版。
4. **主内容结构：** 七页均有且仅有一处 `<h1>` 和一个 `<main>`，静态 ID 无重复。视觉层级从编辑封面到长文、总目录、分类、搜索、404、空分类各有合理角色差异。
5. **合理宽度不同于错版：** Single Article04 的正文阅读栏 `--col:680px` 是控制行长的刻意设计；Archive、Category、Search 适合全幅列表；Home 的大封面是独立 editorial entrance。**不要全站强行指定单一 max-width**，也不要为了偏好“宽页面”而破坏阅读舒适度。
6. **Empty01 继承 Category02 样式，未另造独立字体/背景页。** 博客 404 使用墨色印刷编号区与纸色恢复路径，仅博客子站独立映射。

## 三、已确定问题，按严重度划分

### P1 — 上线前必须解决，部分直接影响当前静态整体观感

**P1-01 / Header 与内容页链接的全站语义尚未统一。**
Shadow CSS 完全一致，但菜单目的地不是同一信息架构：
- Home03 全站 Header `Articles` → 当前首页局部 `#articles`（精选文章区域），**并非已存在的完整 Archive01**；其它页一般直达 Archive01。
- Home03 `Topics` → 首页 `#archive` 的分类入口；Archive01 → `#paths` 的主题过滤入口；Article04 → Archive01 `#paths`；Search05/404 → 单个 Category02 页的 `#category-index`。**同一个名为 Topics 的主导航标签对应了不等价的内容类型**（主题集合 vs 某一个分类详情）。
- 需要先明确 canonical 文章归档和 canonical 主题索引的位置，再统一菜单/CTA 的语义。不能在尚未建立真实 Topic index 前把某个 Category 详情冒充全部 Topics。静态源暂不直接改动，生产映射以后端 WP menu permalink + taxonomy 真实归属为准。

**P1-02 / 多页存在真实可见的开发者占位说明，而非网站编辑文案。**
- Archive01 的 `.archive-note` 在 Hero 下直接展示 “Visual study — sample article data. Live article counts and titles will come from WordPress.”，`.preview-note` 在文章列表下展示“Design demonstration...WordPress implementation...”。这两处是**页面上的可见条带**，会影响已经建立的期刊沉浸感。之前用户明确反对 Category 旧稿的开发说明条式布局。
- Category02 的 `.rail-note` 写着 “Subjects are real WordPress categories in production...”，图注仍有 “Visual study / not live content” 及空状态中的 WordPress 开发教学。与使用者阅读语境不符。Empty01 已单独移走大部分读者可见的开发文字，但不能替代 Category02 主原稿的生产清理。
- Article04 的 Author bio 写着 “This is a design placeholder...WordPress author...”，角标 “No fabricated portrait”，脚注解释 “This article is demonstration editorial copy...”；这些都是用于说明假数据真实性的**静态预览资料**，不得在生产站保留为作者信息、脚注或发布内容。
- Home03 仍有 “Spatial Flow · Sample editorial text”、 “Selected writings · A visual study”；Dispatch 下有“Visual preview only...” 说明（其对不发送表单的诚实提醒在静态稿中必要，但生产应交由真实状态/规则呈现）。
- **正确处理方式：** 静态作者注释/README 可以保留真实性声明，正式前端仅使用真实内容或自然的编辑文案；确实无资料则隐藏，不要直接删掉功能含义。尤其不能静默把预览的假引言、假作者、假 footnote 写入 WP。
- 这项属于“读者文本与视觉系统一致性”，不是换颜色修补。审计阶段不覆盖已认可原稿，以免再次损害选定版本。

**P1-03 / WordPress 真实所有权、Multisite 隔离及数据真实性为生产映射关口。**
- `/search/?q=` 与原生 `?s=` 路由必须区分，Search05 目前只是本地 JavaScript 样例检索。Archive01 内的 `name=s` 检索是静态书架局部过滤器，不是全站 `q` 检索。生产应明确它究竟属于本页过滤还是站内搜索，不混成两个互相冲突的查询行为。
- 真正 Blog404 必须返回 HTTP 404，仅博客使用 Journal 版本；已完成 1:1 的商城 404 H01 绝对不能被覆盖。空分类依旧是真实存在的 WP category 页面（不改成 404），并隐藏空列表和分页。
- 已有 ZIP 审计发现 `journal-index.php` 有 tag/author 限制，却缺 date 年月日 filter；日期归档有可能错误列出所有文章，必须修复真实数据条件，不准只换标题。生产前需重新核对当前已安装文件版本。
- Dispatch 的静态预览表单禁止让人误以为真的发送电子邮件；WP 已有提交至后台数据库的处理器，应沿用实际 AJAX/nonce/honeypot 流程，不声称自动订阅/投递。
- 单篇文章 `Afterword`（后记）= 可选**真实每篇文章内容**，无内容时整体隐藏；WordPress 后台需提示写作目的并教用户编辑，绝不预填前台鸡汤/占位。它与关联阅读后方的 **Public Reading Invitation** 必须保留为相互独立的两个模块。锁定规范：`project2-progress/LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md`。

### P2 — 视觉统一的实机审查关口，现阶段仅能标为待验证

**P2-01 / 响应式断点来源不同。**
- Home03 重点用 1100 / 720 / 400；Article04 1100 / 900 / 720 / 420 / 370；Archive/Category 借助源 CSS 900 / 600 / 390、Category 还有 1150；Search05 用 730 / 520；404 用 1090 / 780 / 480。
- 不同断点并非错误，取决于各布局何时需要坍缩；但在 **1024 / 430 / 390 / 360 / 320** 左右可能出现特定宽度挤压、错行、过多留白、切换突变，源代码无法证明不存在。
- 必须使用真实浏览器尺寸核对 Nav/Footer、Home 视觉首屏、Category 侧栏折叠、Article 阅读侧边栏与长标题、Search 结果和筛选行、404 编号面板与 form、Empty 的空内容高度，以及水平溢出与点击区域。

**P2-02 / 设计重量差异有依据，不能机械归零。**
- Home 封面与多段 editorial 问题/照片，Archive 有一段墨色精选与后部 Dispatch，Category 用图像 Hero + 正文目录，Search 用收紧的 Inquiry 深色概览，Article 有长文阅读链，404 用有限的墨色编码牌。
- 不应要求所有页相同墨色面积、相同 Hero 高度或相同最大宽度。需要观察的是转页时的 Header 标尺、共享装饰符与纸色/墨色交替频率，避免重现用户之前明确否定的“黑色区域夹窄白条”现象。

**P2-03 / 外链图像、字体、键盘及移动真机。**
- 多份照片来自 Unsplash 演示 URL，且图片加载/字体使用第三方资源。在实际 WordPress 要替换为媒体库合法真实素材，并确保 fallback。
- 点击、键盘焦点、回退、空列表状态、处理 noindex/404 status 的实际网络响应、Dispatch 提交、移动端页脚 Accordion 和 WP 自带菜单都需浏览器/站点运行时测试。
- 快照中已覆盖源文件的单 H1、main、ID 和共享样式，但不等于可点击 / 浏览器 QA。

## 四、浏览器实测限制（明确而非假装成功）
本次尝试用当前容器的 Chromium/Playwright 打开 raw.githack 锁定预览，实际得到：
`Page.goto: net::ERR_BLOCKED_BY_ADMINISTRATOR`。
使用 requests 访问 raw.githubusercontent.com/raw.githack.com 亦遇网络 DNS/连接限制。所以**不能声明上述 7 页已在 1440/1024/430/390/360/320 真正浏览器截图 PASS**。
已制作只读的七页对照审核台，方便用户侧真实浏览器逐页并排查看并回报具体差异。审计现阶段为：
**SOURCE DESIGN SYSTEM AUDIT COMPLETE / BROWSER VISUAL RUNTIME QA PENDING / WP MAPPING NOT STARTED**。

## 五、综合审计结论及建议顺序
1. **保留七份已经选定的页面设计。** 共同的色彩、字体、Header/Footer 样式已经稳定，全文重做得不偿失。
2. **先锁定主导航信息架构**（Journal / Featured / All Articles / Topics 各自指向何处），再把其它 CTA 统一到真实站点的对应页面；将纯开发解释迁出读者界面。优先复核 Home / Archive / Category / Article 四页。
3. 在没有用户要求之前，不直接覆盖任何 pinned 已认可文件。准备单独、差异受控的审计修订稿，完整对照给用户验收。
4. 通过这轮内容/入口清理后，用用户实际桌面与移动浏览器执行全站 1440、1024、430、390、360（320 为风险兜底）的对照检查。避免因不同断点而过度概念重构。
5. 真实 WordPress 映射 **另行开始**，先使用最新已安装 ZIP 源码重新做 owner 和 diff 关口，确保 Multisite 主站已完成换皮项目不退步、后台全部核心可编辑、真实内容真实数据，Tag/Author/Date 等 URL 语义一致。

### 严格状态定义
- 首页03：初步认可；Archive01：已可继续，待统一验收；Article04：静态视觉通过；Category02：静态视觉通过；Search05：**暂定**；40401 与 Empty01：**方向认可**。
- “静态视觉通过 / 暂定 / 方向认可”均不等于“WordPress 1:1 生产映射完成”。
- 本轮不更动七份设计源，不动项目三仓库，不触碰本地或线上 WP。
