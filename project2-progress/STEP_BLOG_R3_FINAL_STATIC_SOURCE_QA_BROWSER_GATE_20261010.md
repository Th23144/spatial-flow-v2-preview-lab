# 项目二 · Journal R3 静态最终源码验收 / 实机视觉待核（2026-10-10）

## 状态

**R3 源码级静态检查完成；待用户浏览器的桌面 / 移动视觉关口。** 不等于七页最终设计封版，不等于 WordPress 映射或生产验收。

用户在 R2 说明后回答“开始”，沿用已经锁定的顺序：**静态最终 QA → 用户视觉确认 → 最新 child theme 源码与映射 Owner 审计 → WordPress 隔离映射与生产验收**。

**R3 分支**：`temp-blog-static-final-qa-r3-20261010`。原来七份锁定的 Home03、Archive01、Article04、Category02、Search05、Blog40401、Empty01 以及 R1、R2 文件均未被覆盖。

**R3 独立目录**：`temp-preview/journal-r3/`，包含：
- `Journal-Home-R3.html`
- `Journal-Archive-R3.html`
- `Journal-Article-R3.html`
- `Journal-Category-R3.html`
- `Journal-Search-R3.html`
- `Journal-404-R3.html`
- `Journal-Empty-R3.html`
- `Journal-Old-vs-R3-Review-Board.html`

固定审核台预览：
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/532e42c8086f33649fa559f2b51e7d2562164592/temp-preview/journal-r3/Journal-Old-vs-R3-Review-Board.html

## R3 与 R2 精准差异

R2 已完成一级导航及分类入口和页面可见开发文案清理，但本轮实查存在补充问题：

1. **Featured 语义修正**：七页一级导航以前都指向 Home `#issues`（首页目录/引介），而首页真正的 Featured Entries 是 `#articles`。七页统一将 Featured 目标改成 `Journal-Home-R3.html#articles`，不再把目录当成精选文章。
2. **Home 的 “Browse the shelf” 修正**：原指向 Home `#archive`（阅读路径 / Topics 分类集合），改成独立 Archive `#shelf`（文章总目录）。保留 Topics → Home `#archive`。
3. **Search 的 “Thematic doors / Reading Paths” CTA 修正**：原错误指向单个 Category 页面，改成 Home `#archive` 全主题入口。各单独分类的 footer 链接仍进入其各自 Category。
4. **静态分类分享链接状态一致**：Category / Empty 的分类切换写入浏览器 `?category=space|materials|living|care`，并同步 `document.title`，避免浏览器看到类别 A，复制链接后回到类别 B。只限静态预览；生产 WordPress 必须使用真实 term permalinks 而不是此参数作为正式分类路径。
5. **Search 分享链接状态一致**：静态搜索输入后在 URL 中同步 `?q=`；Clear 则保留空 `q=`，确保刷新后仍能表达清空状态（静态页无 q 时沿用默认展示示例）。正式检索仍必须走 WP `/search/?q=` 对接真实数据。
6. **浏览器标签/摘要的开发字样清理**：七页 `<title>` 移除 Concept/Study/Refinement 等原型版本字样；静态 metadata 改为正常读者说明，**不代表真实文章、分类数据已经上线**；正式 WP 必须使用真实文章 / term 的动态 SEO 数据。
7. **公开预览避免搜索索引**：七份 R3 静态稿设有 `robots noindex`（404 仍保留其原有 noindex）。正式 WordPress 映射时不能把所有页的静态 noindex 无差别复制到生产；须按正式 SEO 策略决定。

**全部七页 CSS 与 R2 逐字相同。未修改原有宽度、字号、字体、纸色 / 墨色 / 朱砂、Header/Footer 样式。**

## 静态源代码实际校验结果（保存后从 GitHub 回读）

| 项目 | 结果 |
|---|---|
| 七份 R3 HTML 存在 | 7 / 7 |
| 与 R2 的内联 CSS 比对 | 7 / 7 完全相同 |
| 内嵌 JavaScript 语法解析 | 7 / 7 无语法错误 |
| 每页单一 H1 / Main | 7 / 7 |
| 重复 ID | 0 |
| 静态跨页 R3 链接（Home16、Archive10、Article20、Category15、Search16、40414、Empty15） | 共 106 个；目标页面与静态锚点检查 0 错误 |
| 一级导航 Journal/Featured/Articles/Topics 的三类关键目标 | 7 / 7 语义一致 |
| 四张首页分类卡片各自引用独立 `?category=` 值 | space/materials/living/care 均覆盖 |
| Footer R1 遗留的 `VISUAL STUDY · NOT LIVE DATA` 和 `Working visual proposal` | R3 七页均不再有 |
| 单篇 Afterword 与 Reading Invitation | 两个独立结构仍存在 |
| 分类 URL/浏览器标题同步、搜索 URL 同步 | 已在源脚本插入并通过语法检查 |
| 搜索页 Reading Paths 聚合入口与 404 检索目标 | 静态路由指向各自 R3 正确入口 |
| 浏览器标签标题版本文案 | 7 / 7 清理 |
| 公开预览 robots noindex | 7 / 7 |

Archive 首页三篇 `#entry-a01/2/3` 属于 **JS 动态创建的 Shelf item ID**，不能用“首屏原始 HTML 没有 id”便断言为断链。Category `#read-` 链接在 JS 模板中会被 `data-post` 点击事件拦截并打开预览 Dialog。两者已按源实现方式核对，不列为静态坏链。

## 实机测试仍未完成，严禁虚报 PASS

当前容器内 Chromium 和 Playwright 可以启动，但网络无法解析 `raw.githubusercontent.com` / `raw.githack.com` 域名；Web 页面读取工具也无法访问本次 RawGitHack 预览地址。GitHub 连接器能够直接读取源码，不等于浏览器已真实渲染页面。因此当前**未**完成真实页面 1440 / 1024 / 430 / 390 / 360 / 320px 的截图核对和键盘运行行为检查。

用户需要打开 R3 对照审核台，在实际浏览器中看七页（重点 Home/Archive/Article/Category/Search）并检查：
1. Header/Footer 视觉、跨页跳转、Home 四类 Reading Paths、Search 结果、404 检索与恢复路径；
2. Home Featured 确实滚动到首页真实精选文章区，而不是章节目录；首页“Browse the shelf”进入完整 Archive；Search Reading Paths 进入四类主题总入口；
3. Category Space/Materials/Living/Care 切换及 URL、标题、内容数量；空 Care 隐藏分页；Search 搜索与清空后的 URL/刷新行为；
4. 1440/1024/430/390/360/320 宽度无横向溢出、文字截断、按钮错位；手机导航、Footer 展开、Dialog 焦点及 Escape 关闭；
5. 单篇文章 Afterword 和 Reading Invitation 仍在原位置，未合并。

## WordPress 映射前的阻断清单（未实施）

- 必须取得并重新核查**最新实际安装版** Astra child theme；此前 `2.7.105` 左右的 ZIP 只是旧快照。
- 不修改项目三参考仓库，禁止静态示例数据当正式发布。
- 逐一落实文章、分类、作者、图像、Footer、Afterword 的真实后台编辑 Owner；Afterword **每篇文章可选、无正文即隐藏、后台有教学说明、与 Reading Invitation 独立**，进入映射前主动提醒用户。
- Blog 404 只应用在 Multisite Journal 子站，主商城已验收 404 H01 必须保持不变；真实 Blog 404 返回 HTTP 404，存在但无文章的 category 仍为 HTTP 200。
- `/search/?q=` 与 WP `?s=` 不混合，Search、Archive、Category 必须只显示真实公开内容；日期归档 `journal-index.php` 的 `is_date` 年月日查询缺失需修复。
- Dispatch 不能伪称邮件已发送，保留实际 nonce / honeypot / 数据存储处理器；生产 SEO 只按真实策略 noindex，不能原封复制演示页的 `noindex`。

### 执行结论

**R3 为最终静态源候选，源码一致性已完成。实机浏览器及用户视觉认可仍未达关口；禁止直接进入生产映射。**
