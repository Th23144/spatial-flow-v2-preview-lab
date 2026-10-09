# 项目二 · Blog Search 静态概念稿 01 — 范围、设计判断及源码 QA

日期：2026-10-09
状态：**静态预览已制作，等待用户视觉验收；未进行 WordPress 生产映射。**

## 1. 当前页面
Search Concept 01:
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/8fd39d6fb4864b0bec0a4fdfbd28ac54b17a4754/temp-preview/Spatial-Flow-Journal-Search-01.html

分支：`temp-blog-search-concept01`
文件：`temp-preview/Spatial-Flow-Journal-Search-01.html`
提交：`8fd39d6fb4864b0bec0a4fdfbd28ac54b17a4754`

## 2. 上一页已批准
Category/Topic Concept 02 已被用户明确答复“可以”，只作为**静态视觉通过**，未映射生产。
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/64e4f937d06d9513a8b7bb2c688d4cb143897135/temp-preview/Spatial-Flow-Journal-Category-Topic-02.html

其它静态家族：Blog Home 03 初步认可；Article Archive 01 允许进入下一张；Single Article 04 视觉选择完成、Afterword 内容规则另外锁定。不要把任何静态通过错误标为 WordPress 1:1 完工。

## 3. 只读源码依据
### 当前用户上传 WordPress 子主题 v2.7.105（唯一的生产行为基线）
- `page-templates/global-search.php`: 真的 `/search/?q=...` 搜索，调用 `spatial_flow_split_search_results()`，当前博客上下文为 `journal`，不应该显示主站商店产品。
- `functions.php`: Journal 分组查询能力分别为 **已发布文章最多 9 条 / 博客页面最多 6 条 / 文章分类最多 12 条**，没有独立的服务器端搜索分页。真实条数为当前处理器返回值，不保证全站穷尽总数。
- 该全局搜索还有无关键词起始态、无结果态、结果类型筛选（All / Journal / Pages / Topics）；搜索页说明文字以及状态文案部分有 WordPress Customizer 编辑归属。
- `search.php` + `template-parts/journal-index.php`: 是另一条传统 WordPress `?s=...` 帖子搜索兼容路径，9 posts/page；**不能把二者误当成同一个路由，更不能为了视觉把 q/s 混改**。
- 博客必须与商店主站 Multisite 相互隔离，主站搜索不能被新设计改坏。

### 项目三只读设计参考
- `Th23144/ink-east-planning/apps/web/src/app/(site)/search/page.tsx` 存在，但只是功能基础稿，没有成熟期刊视觉；不得宣称有精确原版 1:1 设计。
- 视觉基线借用项目三早期 `preview/ink-east-articles-archive-v1.html` 的纸色 #f4ede0、墨色 #1a1611、朱砂 #a02d23、EB Garamond／Noto Serif SC、mono 编号与细线目录。
- 与 Concept 03、Archive 01、Category 02 共用只读静态 Shell 导航、纸色 Colophon Footer。项目三仓库没有修改。

## 4. 本版设计判断
1. 搜索页首先是**检索工具**：大幅编辑式 “Find a thread.” 标题保留品牌感；高权重的检索输入是真实视觉与行为主角，不再叠一个与任务无关的摄影封面。
2. 纸色中通过横线、页眉、窄栏说明、横向文库式结果来分层；不重复之前被用户指出的“大黑色块＋白色框卡片＋夹白条”错误。
3. 与归档页有相同设计 Token，但并非复制 Archive 或 Category：明确展示起始、找到、无匹配三状态；展示 All / Articles / Topics / Pages 类型筛选。
4. 原产品限制真实可执行：Blog 的结果不显示 products；匹配条数受现有 WP 处理器的 9/6/12 上限控制；**静态样稿不提供搜索结果分页**。
5. 预览使用 17 条明确的样例素材，默认关键词 `space`；支持输入、Enter、示例关键词、清除、结果过滤、弹窗阅读条目预览。原型不向 WordPress 发请求，也不伪造实际 Post URL。
6. 不强制加入 Newsletter/Dispatch：现有真实 `global-search.php` 是独立搜索页，不以 Dispatch 作为必须模块，维持工具页的安静收束和共享原版纸色 Footer。

## 5. 源码与交互检查
- GitHub 文件读回成功：**59,305 字符**。
- 原版 Archive 12,517 字符主 CSS 完全保留，后接局部 Search 专属样式，不涉及 WordPress `spatial-flow.css`。
- HTML 单 H1，2 section 开闭平衡；4 style 块花括号平衡；3 内联 JS 片段语法检查 PASS。
- 受控 DOM 模拟检查通过：
  - 默认 `space`：9 条样例、3 组；
  - 搜索 `stone`：6 条、2 组；
  - 搜索 `zznoentry`：正确进入空状态；
  - 清空：进入初始空搜索状态；
  - 点击搜索建议：恢复 `space` 样例；
  - 切换 Topics：只显示分类组的 1 条样例；
  - 点击样例结果：预览弹窗打开和关闭。
- 没有进行实际 Chrome 桌面/390/360/320px 视觉截图，也没有 WordPress 真站搜索测试；**不可宣称浏览器视觉通过或生产功能已修改**。

## 6. 下一步
用户视觉验收 Search 01（标题/搜索输入比例、横向文章列表、三状态、页脚与其它页面一致性）。
通过后进行 Blog 404 / Empty & Tag/Author taxonomy 兼容界面的静态设计与审查；只有确认了独立 Issue 内容模型才做 Issue 页面。
所有博客页静态稿完成后进行全家族视觉审计，再开始 WordPress 生产映射。

## 7. 永久提醒：Afterword
用户锁定：Article04 的 Afterword = 每篇文章可选的**真实文章内容**，不是固定样板装饰。映射前必须主动提醒用户，后台显示用途教学，正式前端无后记则隐藏，不能输出占位感悟；同时独立保留 Reading Invitation。
详见 `project2-progress/LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md`。
