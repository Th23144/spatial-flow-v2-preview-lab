# 项目二 · Blog 全站主导航与可见文案 R1 精修（静态候选，待用户视觉确认）

日期：2026-10-10
用户请求：“非常好，我看了，没问题，开始下一轮”，指上一轮七页源码视觉一致性审计通过并授权继续解决 P1 导航与开发者占位问题。
状态：**导航语义/开发者可见文案 R1 已实现；原始七页静态稿保持不变；源码 QA 通过；等待用户亲自做桌面/手机预览；WordPress 没有映射、也没有做实时生产验收。**

## 0. 新旧并排对照审核台
**R1 审核总入口：**
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/57b1208fddaf18b7dc84ee4725a2b01ac4a3e6dc/temp-preview/journal-r1/Journal-Old-vs-R1-Review-Board.html

- 左侧为锁定原稿，右侧为 R1 修订候选；可选择任意七页，宽度 1440、1024、430、390、360、320。
- 若 Chrome 因跨域 iframe 安全策略阻止嵌套，点击审核台上“直接打开页面”；工具本身不是产品页面。
- 原稿 SHA 不动，R1 每份为新文件，所有 R1 文件在独立分支 `temp-blog-nav-copy-clean-r1-20261010`；跨页链接**使用该独立分支稳定引用**，用户打开每个 R1 可以在本次七页之间往返。
- 审核台 HTML 已锁定到独立提交；R1 页面使用分支链接便于连接完整预览族。**分支若未来修改，URL 可能对应更新版本**；需要长期钉死某一版时，须单独使用固定 Git commit。不得混淆这两种链接。

## 1. 每张 R1 静态稿（仅本轮独立分支）
| 页面 | 对照路径 | R1 预览 |
|---|---|---|
| Home03 | `temp-preview/Spatial-Flow-Journal-Editorial-Adaptation-03.html` | https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/temp-blog-nav-copy-clean-r1-20261010/temp-preview/journal-r1/Journal-Home-R1.html |
| Archive01 | `temp-preview/Spatial-Flow-Journal-Articles-Archive-01.html` | https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/temp-blog-nav-copy-clean-r1-20261010/temp-preview/journal-r1/Journal-Archive-R1.html |
| Article04 | `temp-preview/Spatial-Flow-Journal-Single-Article-04.html` | https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/temp-blog-nav-copy-clean-r1-20261010/temp-preview/journal-r1/Journal-Article-R1.html |
| Category02 | `temp-preview/Spatial-Flow-Journal-Category-Topic-02.html` | https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/temp-blog-nav-copy-clean-r1-20261010/temp-preview/journal-r1/Journal-Category-R1.html |
| Search05 | `temp-preview/Spatial-Flow-Journal-Search-05.html` | https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/temp-blog-nav-copy-clean-r1-20261010/temp-preview/journal-r1/Journal-Search-R1.html |
| Blog40401 | `temp-preview/Spatial-Flow-Journal-404-01.html` | https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/temp-blog-nav-copy-clean-r1-20261010/temp-preview/journal-r1/Journal-404-R1.html |
| Empty01 | `temp-preview/Spatial-Flow-Journal-Empty-Category-01.html` | https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/temp-blog-nav-copy-clean-r1-20261010/temp-preview/journal-r1/Journal-Empty-R1.html |

### 2. 主导航 (Information Architecture / IA) 统一定位
静态 preview R1 的一级导航固定为：
| Label | 确定的信息含义 | R1 预览目标 |
|---|---|---|
| Journal | 期刊正式入口、总首页 | R1 Home `#top` |
| Featured | 期刊首页的编辑精选与导读 | R1 Home `#issues` |
| Articles | 独立完整文章目录，不是首页摘选 | R1 Archive `#shelf` |
| Topics | **全部分类的入口/总索引**，不是其中某一个分类详情 | R1 Home `#archive` |

**关键选择：** 项目当前没有另做一张独立 Topics 总目录主页面，但 Home03 本来就已有四张真实可见的 reading paths 卡片；因此将 Topics **暂时**视为 Home03 `#archive` 的对应板块，待实际 WP 站点路由确定时复核。不能把任意单个 Category02 误当整个 Topics。

Footer 的 Featured writing / Latest stories / Reading paths / Field notes / Guides 与上述目标统一，四个真实类型的 footer 链接进入相应分类预览。Home 的 4 个分类卡片原本全部指向本页 `#articles`，R1 按 category space/materials/living/care 各自重定向到 Category R1。

分类 R1 静态稿支持 `?category=space|materials|living|care`，页面 JS 会选择正确类别并更新标题、中文题签、摄影、数量、文章和空状态。**这只是静态演示 URL 机制，不是要求 WordPress 以后使用 query string 来表达 category。** 真实生产应使用 WP term permalink / taxonomy 真实过滤。

Footer 与 Header 的原始 Shadow DOM **CSS 保留；原始 Header/Foot 视觉层级和排版不变**。
额外修复：导航高亮可以表达栏目归属，但 `aria-current=page` 只有在导航 href 解析为当前页面的 origin、pathname、query 均相同才输出，避免在 Article、Category 等内容详情误称其属于导航目标页面。

### 3. 被清理的读者可见开发/演示文字
- **Home03：** 移除 `Sample editorial text` 与 `A visual study` 两处显眼编辑标注；原有文章封面和首页叙事不动。修正第四张分类卡上 `READINGI` 的拼写瑕疵。
- **Archive01：** 删除 Hero 下方 `Visual study — sample article data...` 注释条和书架下方 `Design demonstration...` 开发横条；`illustrative pieces`、`sample subjects`、可见目录数量统一为自然的读者语义。Demo 弹窗语气中性化。
- **Single Article04：** 伪作者简介中的 `This is a design placeholder...` 替换为期刊自身的一般介绍，假“作者标签”改为中性栏目图章；足注中的 WordPress 实现解释改为与文章语句对应的**原创解释性注释，绝非虚构外部引文**；图片副标题、metadata 不再写开发说明；文末 Copy preview link 改为 Copy link。**正式 WordPress 仍必须使用真实 post author / bio、实际内容足注，不能直接把预览品牌文案写死为作者。**
- **Category02：** 分类左栏的 WP 开发者解释、摄影图注 `not live content`、零文章状态里的“应如何实现”解释改成读者正常理解的分类/空架文案。分类标题、照片、版式和分类控件未改。
- **Search05：** 轻量统一导航、筛选状态；Search 主体布局、墨色 Inquiry、Shelf、所有 CSS 均保持不动。
- **Blog40401：** 原来恢复路径直接指向 Search05 原稿和分类单页，R1 指向本次 Search R1 和 Topics 总入口；墨色 404 印刷板及表单设计不变。
- **Empty01：** Category 原版视觉及默认 care=0 的空状态保留；共享 IA 修复、分类 URL 支持和示例阅读态验证。
- Dispatch 演示表单上的非真实发送免责声明不再作为视觉条带持续占据读者界面（改为隐藏描述）；**JS 提交时仍明确反馈：静态预览并未发送任何内容**，避免误导。正式 WP 应接回现有经过 nonce/honeypot 校验的真实后台处理器，非自动订阅/邮件发送。

### 4. 保护不变量（强制）
- 原始 7 份静态设计的全部外层 CSS **逐字保留**。没有调整字号/宽度/字体/配色；每个页面仍保留一样数量的 CSS 块，Header Shadow CSS 精确为 4805 字符，Footer Shadow CSS 6698 字符，均未更改。
- 任何一张已选设计（Home03 / Archive01 / Article04 / Category02 / Search05 / 40401 / Empty01）**未在其旧路径写入或覆盖**，全部是 `temp-preview/journal-r1/*` 文件。
- Article04 的 `support-band editorial-coda`（真正后记的视觉部分）和 `support-band public-reading-invite`（公开阅读邀请）两个结构未删除、未合并。**映射时 Afterword 是可选 per-post 真实内容**，前台不预填静态占位；用户特别要求映射时主动教学，规则见 `project2-progress/LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md`。
- Blog404 只用于 Multisite 博客子站，**不能覆盖主商城已验收 404 H01**；Blog Empty 是 HTTP 200 存在的 category 且 0 publish，绝不可误投 404。
- WordPress 真实搜索 `/search/?q=` 与 WP native `?s=` 不同；Archive 内搜索控件目前只是静态样例过滤，不可与全站搜索混淆。

### 5. QA 结果与留待用户的视觉关口
已在保存后 **从 GitHub 重新读取 R1 全七份**：
- 原始完整 CSS **7/7 与锁定原稿一致**；header/footer shadow CSS 7/7 大小一致；
- 7/7 导航四个目标准确；旧五份静态设计 URL 残留 **0/7**；
- 所有外部演示图片 URL 数量保持不变（未擅改素材）；
- 7/7 全部 JS 脚本语法 PASS；各仅一个 H1、一个 main、所有 ID 唯一；
- 跨页链接从旧原稿迁移共 29 处，避免从修订页再次跳回旧页；
- 分类模拟交互：Space 11 篇、Materials 6 篇、Everyday Living 4 篇、Care 0 篇；Care 时隐藏 lead 和分页；未知 query 参数回退到该预览的默认分类；
- 404 的 GET + q 路由仍指向本次 Search R1；
- 浏览器真实抓图因本环境对 raw.githack / GitHub 外网的访问限制无法自动完成；**桌面与手机实际视觉/键盘/文字溢出仍须用户浏览器验收**。

本轮结论：**R1 静态源修订已完成；等待用户验收；尚未开始 WordPress 生产映射，也没有发布到线上网站**。
此前七页源码审计的两项问题（导航目的地不一致、可见开发者说明）已有独立候选修订；真实 WP 日期归档 is_date 查询修复和后台编辑权/Multisite 隔离仍是正式换皮前的阻断项，不能宣称完成。

## 6. 下一步
请用户在 R1 审核台**选 Home、Archive、Article、Category**重点看前后差异，另检查 Search05 视觉是否被维持。
如果本轮视觉/链接认可，明确将七页 R1 作为“网站博客静态设计全族待映射候选”（注意不是 WordPress 实际生产通过）。随后申请并审查最新用户安装版 child theme ZIP，做映射 Owner/后台可编辑/跨站隔离/日期归档/SEO/真实搜索约束清单，然后才在**隔离的分支**推进 WP 1:1，逐页回归和人工验收。不能跳过用户对正式映射的确认。
