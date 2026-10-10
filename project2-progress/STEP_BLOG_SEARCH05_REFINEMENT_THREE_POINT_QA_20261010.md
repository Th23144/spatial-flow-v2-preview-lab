# 项目二 · Search05：Search04 认可方向上的三点精修（待视觉验收）

日期：2026-10-10（用户当地）。
状态：**Search05 静态预览已完成，源代码和模拟交互通过，等待用户视觉验收；没有改 WordPress 生产代码。**

## 直接用户指令
上一轮用户对已修复 Search04 的评价：“这版还凑合，你认为呢？”
助手提出：墨色 Inquiry 区域偏高、右侧入口与下方筛选职责重复、结果书架标题/内容类别/摘要阅读层级仍可精修；建议继续用 Search04 修正版精修，保持项目3原版字体、配色和整体布局。
用户：“开始吧”。
**不得将“还凑合”当作封版通过；本轮只执行这三处约定。**

## 固定对照
Search04 已修复对照，永久版本：
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/bb5391d8240a7264c6f5bcbb7c1e333eb23c5231/temp-preview/Spatial-Flow-Journal-Search-04.html

本轮 Search05 新独立预览：
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/e0017a00c283dc6c99ce590c509fbf8f5bc45686/temp-preview/Spatial-Flow-Journal-Search-05.html

新分支：`temp-blog-search04-refinement-05`
新文件：`temp-preview/Spatial-Flow-Journal-Search-05.html`
锁定版本提交：`e0017a00c283dc6c99ce590c509fbf8f5bc45686`

## 三处定点精修
1. **墨色 The Inquiry 减重，不推翻视觉语言。** 仍继承项目3的 `band-dark` / `issue-anchor` 双栏、朱砂和中文大字标志。局部缩小上下 padding（约 76px → 53/58px，移动端另设）、区块标题到内容间距、各内部段落的 vertical rhythm、右侧条目 padding（18 → 12px），CTA 略收紧。目的：让搜索框及下方结果书架更显重点，减轻仅 9 个结果却占过大墨色面积的问题。
2. **上下职责分开，避免双重筛选。** 深色右栏 Articles / Reading Subjects / Journal Pages 改为 `overview-line` 静态清单，展示精确的搜索匹配分组数量，尾字全部为 **MATCHES**；不再具有 `data-scope`、锚点或鼠标指针行为。暗色栏辅以简短 `Narrow the results in the shelf below.` 文案。真正的 All / Articles / Topics / Pages 筛选仅保留在纸色 The Shelf 的 `REFINE RESULTS / 篩 選` 工具行中。**不能依靠没有命中的 class 样式或默认按钮样式**。
3. **文章结果内部层级精修，不换字体。** 书架仍直接复用项目3 `shelf-item` 版式与 24px EB Garamond 标题；在标题上方加小字 `result-context`（文章所属分类/页面类型），保留原本中文标题、摘要和右侧类型/入口标签；删除摘要下面重复的主题 tag，摘要 line-height 稍收紧。未改变 archive CSS 规则和标题字体家族。

## 测试和保护
- 保存后从 pinned commit 重新读取，文件 57,833 字符。
- 继承项目3原始 Archive 主 CSS **12,517 字符、完全未改动**；4 内联 CSS 块括号平衡；3 JS 脚本语法校验 PASS。
- 所有 ID 唯一；1 main、1 H1；3 section 标签对称。
- 墨色 `class="block band-dark search-snapshot"` 与 CSS `.search-snapshot ...` 匹配（吸取此前 id/class 不一致的教训），新增静态清单结构一共 3 个、旧顶部链接筛选数量 0。
- 搜索路由保留 `/search/?q=...`；用户真实 WP 搜索的 Articles、Pages、Categories 分组限制没有变化。
- DOM 模拟：`space` 9 条（文章 6、主题 1、页面 2），底部 Topics 筛选显示 1；`stone` 6；随机无结果 0 且隐藏墨色区；清空搜索显示初始态；`care` 5 条；结果弹窗开启/关闭正确；所有展示行都包含新增 `result-context`。
- **源代码与模拟交互 QA 不等于真实浏览器视觉 QA**。当前运行容器无法访问 GitHub Raw/Githack 域名来做 Playwright 全页面截图，必须等待用户在实际桌面和手机端视觉确认。
- 项目3源仓库只读。Search01–03 不合格且不可作为生产候选。Search04 修正版保持可独立回退。
- WP 生产版本以及 Multisite 主站/博客子站均未修改。

## 后续执行
用户先审阅 Search05 vs Search04 细节。若认可，锁定 Search 视觉设计并进入下一张 Blog 404/empty 页面；否则只修订 Search05 的具体视觉问题，不重新发明一套页面。
严格继承 Article04 Afterword 规则：正式映射前主动提醒用户，后台提供实际用途教学提示；前台仅显示该文章真实后记，留空隐藏，不将视觉占位写死发布。
