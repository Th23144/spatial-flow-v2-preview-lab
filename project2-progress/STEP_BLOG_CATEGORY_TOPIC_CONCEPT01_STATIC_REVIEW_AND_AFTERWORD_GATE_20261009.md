# 项目二 · Blog Category / Topic — Static Concept 01 & Afterword Mapping Gate

日期：2026-10-09
状态：**Category/Topic 静态稿已生成；待用户视觉验收。无生产 WordPress 修改。**

## 一、用户新增的 Afterword 映射要求（已锁定，不得遗漏）
用户说：“以后映射这个板块的时候，一定要提醒我，或者说映射的时候，这里的文案本身就呈现教学的文案而不是现在这种的占位。”

已将此要求写进：
`project2-progress/LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md`，小节 **5A / MAPPING REMINDER GATE**。

**执行要求：** Single Article 正式映射前，主动提醒用户 Afterword 是每篇文章可选的真实内容而不是固定装饰；WordPress 后台必须有用法说明/编辑教学，可用带“不会发布”的示例；正式文章前端必须只渲染真实已保存后记，无内容则隐藏；不得预填样板感悟，不得固定署名，不得因此删掉另一个已被用户认可的 Reading Invitation。实际映射要验收填入/清空/前端显示隐藏。

## 二、已认可的页面阶段
- Blog Home — Editorial Adaptation 03，用户初步认可，非最终封版。
- Articles Archive — Concept 01，用户明确允许进入下一张。
- Single Article — **04**，用户明确说“好了，就这版了”；Afterword 内容合同另外锁定。仍未做 WordPress 生产映射。
- 当前轮次：Category / Topic（分类与专题），按整体静态稿先行原则继续。

## 三、静态 Category / Topic 候选
**预览：** https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/8e4bab375350499b48fa2ee2c3f3aba8efc6533e/temp-preview/Spatial-Flow-Journal-Category-Topic-01.html

预览仓库：`Th23144/spatial-flow-v2-preview-lab`
分支：`temp-blog-category-topic-concept01`
文件：`temp-preview/Spatial-Flow-Journal-Category-Topic-01.html`
版本：`8e4bab375350499b48fa2ee2c3f3aba8efc6533e`

### 已有 WordPress 真实能力
来自用户最新版子主题 ZIP v2.7.105：
- `category.php` 通过 `get_queried_object()`、`single_cat_title()`、`category_description()` 输出分类名、描述，并使用 `spatial_flow_journal_category_image_url()` 获得**对应分类图片**（无图片时以 Journal hero 回退）。
- `template-parts/journal-index.php` 使用 `WP_Query` 查询**已发布** Posts，按分类 ID 查询，每页 9 篇，保留 WP 原生分页。
- `spatial_flow_journal_topic_nav_html()` 生成**真实分类导航**，不需要新建 Topic CPT。
- `archive.php` 也使用上述文章索引，但 Category Detail 与 All Articles Archive 应有明确不同的导航目的和信息层次。
- `template-parts/journal-dispatch-band.php` 继续拥有现有 email/topic/nonce/honeypot/AJAX 逻辑，前端样式映射时不可替换功能。

### 设计独立判断
- **不能复制 Project 3 现有 `apps/web/src/app/(site)/topics/[slug]/page.tsx` 的 V0 卡片和普通 Heading 作为视觉标准**。该源码页仅说明“专题名 + 描述 + 公开文章列表”数据概念，不是与项目三原始期刊稿同质量的设计。
- 项目三早期 `preview/ink-east-articles-archive-v1.html` 原版 12,517 字符主 CSS 被直接沿用，保证共通的旧纸、墨、朱砂、英文衬线、中文注释与 thin-rule 语言。
- 这张是**具体 Category 详情页**，不是全站文章总归档：保留每个分类独立题名、描述与图片，主角是该分类文章；通过独立大标题+图版创建识别度；右侧图版不能变成产品广告位。
- 分类文章第一条仅是**查询结果中的首篇/最新文章**，视觉突出但不自称“人工编辑精选”；当页仍然严格只显示 9 篇（首篇 + 其余最多 8 篇）。
- 左侧分类导航与底部 Other Ways In 以分类真实公开链接为将来生产 owner；当前四分类只是用于静态预览的示例，不能硬编码四个分类数量。
- 未发现本轮必须另外新建 Issue、Collection 或 Topic CPT；不应为页面漂亮而导入项目三完整专题平台。
- 浏览页面目标的层次为：公共 Header → Breadcrumb → 带图片的 Category Hero → 主题字句 → 分类真实文章书架（9/page + 空状态）→ 其它分类路径 → Journal Dispatch → 公共 Footer。

### 静态交互与 QA
- 测试数据：Spaces & Arrangement 11 篇、Materials & Crystals 6 篇、Everyday Living 4 篇、Care & Practice 0 篇，全部明确为**设计演示文章**，不声称已存在于 WordPress。
- 默认分类第一页实际渲染：**1 个醒目首篇 + 8 个书架项目**（共 9），第二页：**1 + 1**（共 2）；栏目切换分别正确显示 6/4/0 篇。
- 静态切换将分类图片、描述、分类号、中文题签、文章列表、侧边状态与相关路径同步更新。
- 空分类隐藏第一篇与分页、展示静态空状态。
- 模拟 article-preview dialog 不虚构真实 Post permalink；链接到单独已有的 Single Article 04 视觉稿，仅用于参考。
- Dispatch 表单在静态稿中阻止提交，明示不会发送。生产 WordPress 应保留已有表单 handler。
- 从 pinned GitHub commit 重新读取：76,235 字符，原始归档核心 CSS 12,517 字符完整保留，3 个内联 JS 程序语法通过，HTML 1 H1、1 MAIN、3 个 section 开合成对、无重复 ID；各静态交互测试通过。
- **未完成实际浏览器截图、字体/图片加载和手机端视觉验收**，不能称 1:1 视觉 PASS。
- Project3 仓库严格只读；未修改任何正式 WordPress 主题文件。已撤销的 Header/Footer SAFE1 测试版不计入完成。

## 四、接下来的审批顺序
1. 用户打开 Category / Topic Concept01，评估独立分类的大片图版、大标题、文章列表、阅读路径，手机端实际效果。
2. 若有审美问题，在临时静态稿里精确修改；获得认可后记录此页状态。
3. 依序静态设计：Blog Search → 404 / Empty & Taxonomy coverage → Issue 只在有真实内容模型时单独制作。
4. 所有页面视觉统一审查，最终 **才**做 WordPress 生产映射。
