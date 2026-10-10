# 项目二 · Blog Search 04 — 从项目三高保真原稿直接适配

日期：2026-10-09
状态：**Search04 新静态预览已生成、源码/模拟交互 QA 通过；等待用户视觉验收。WordPress 未修改。**

## 本轮用户反馈和纠错
用户明确指出：前三版 Search01/02/03 与已认可的其它期刊页面视觉差异太大，要求“你好歹模仿项目3做一个啊”。其要点不是反对功能重组或原创，而是拒绝脱离项目三确定的整体视觉语言。

**严禁把 Search01、02、03 当成已通过或生产待映射版本。**

## Search 04 预览
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/dba4090b35ed6d494aac408279b3b8a4f5a3879a/temp-preview/Spatial-Flow-Journal-Search-04.html

临时分支：`temp-blog-search-project3-inspired-04`
文件：`temp-preview/Spatial-Flow-Journal-Search-04.html`
锁定静态候选提交：`dba4090b35ed6d494aac408279b3b8a4f5a3879a`

对照母版（项目三只读）：
https://raw.githack.com/Th23144/ink-east-planning/main/preview/ink-east-articles-archive-v1.html
源码：`Th23144/ink-east-planning/preview/ink-east-articles-archive-v1.html`。

## 本轮实际做法
不是按照感觉重写相似版式，而是直接继承项目三初代 Articles Archive 源码中的 **12,517 字符主 CSS 原样** 和 EB Garamond、Noto Serif SC、JetBrains Mono 字体链接，再使用已经被用户认可的项目二 Archive01 的静态 Header/Footer JS 组件。

保留原版五段阅读节奏：
1. **纸色 Hero** —— 原版 kicker、H1、中文题签、lede；实际搜索框仅作为 Hero 下方功能模块；
2. **墨色双栏 band-dark / issue-anchor** —— 原版 Latest Issue 的构图和色彩比例；替换为真正有用的 `The Inquiry / 此字·此線`，左侧当前查询词与结果说明，右侧 Articles/Topics/Pages 实际样例计数及类型筛选入口，不保留虚假的 Issue 语义；
3. **纸色 The Shelf** —— 原稿 `shelf-item` 三栏文章排版（编号、英文标题、中文副标题、摘要、标签、类型），而不是自造新卡片排版；支持过滤和起始/空匹配；
4. **纸色 Browse by Path** —— 与原稿相同三列栏目形式，连接已经存在的 Archive01、Category02、Blog Home03 临时预览；
5. **原版编辑式 Footer** —— 统一项目二 approved shell；没有又添加独立深色 Dispatch 导致双黑段夹浅条。

注意：Search04 的深色区只在搜索有非空匹配时显示；起始或无结果时直接由搜索 Hero 进入纸色书架状态。

## 功能边界
- WordPress 生产真实 `/search/?q=...` 路由：博客文章最多 9、独立页面最多 6、分类主题最多 12；产品不在博客结果中。原生 `?s=` 搜索保留，未修改。
- 演示数据来自旧 Search03 的 17 条明确示例，**不是 WordPress 真实已发布内容**。
- 搜索 Enter/提交、示例词、清空、All/Articles/Topics/Pages 分组筛选、结果预览弹窗及零匹配状态均在本地样例上工作。正式生产每条结果需链接到 WordPress 正确真实 permalink，演示使用 modal 避免伪造目标链接。
- 共享 Preview Header/Footer 内旧 `#featured`/`#shelf`/`#paths` 锚点已修复为正确的 Archive01/Category02 静态预览页面地址。
- 项目三仓库始终**只读**；WordPress 子主题未动。

## 已核对的测试结果
- GitHub 原稿直接读取：原始 CSS = 12,517 字符；Search04 原样继承。
- 新静态源文件约 52,411 字符，3 个 JS 脚本语法全部通过，4 CSS 块括号平衡，单 H1，三个 section 标签平衡且无重复 ID。
- 模拟 DOM 交互：默认 `space` 匹配 9 条 / Articles 6、Topics 1、Pages 2；`stone` 匹配 6 条；不存在的词进入空状态且隐藏墨色概览；清空进入“尚未搜索”状态；样例按钮恢复查询，Topics 过滤后显示 1 条，结果弹窗打开与关闭正常。
- 确认页内没有遗留无效 `href="#paths"`、`href="#featured"`、`href="#shelf"`。
- **没有真实 Chromium 浏览器视觉截图验证，也未经过用户视觉验收**；不得报告完成视觉 1:1 或生产映射。

## 当前下一关
用户需要实际将 Search04 与项目三原版和项目二已通过 Archive01 / Category02 对比。只有用户认可后才锁定 Search 静态视觉；否则针对真正的构图差异继续修正，不得再次自造另一套字形/颜色系统。

## 永久提醒（Article04 Afterword）
后记 = 每篇文章可选的**真实内容**，不是固定装饰。进入 WP 映射时必须主动提醒用户，并在后台提供用途教学、前端未填写则隐藏，不得让预览占位感悟成为线上默认文案。详见 `project2-progress/LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md`。
