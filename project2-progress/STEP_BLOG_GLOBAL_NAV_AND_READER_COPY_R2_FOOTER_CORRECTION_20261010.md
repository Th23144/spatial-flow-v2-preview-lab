# Project 2 · Blog Journal 导航 / 读者文案清理 R2 — 单独候选与交付记录

日期：2026-10-10
状态：**R2 静态源码已写入独立 GitHub 分支；待用户视觉验收。不是 WordPress 映射完成，也不是移动端实机验收。**

## 1. 承接 / 事实

继承记录要求继续进行“主导航语义统一 + Home 四张分类卡片修复 + 前台开发者说明清理”。进入新窗口时核查到：该工作其实已在 `temp-blog-nav-copy-clean-r1-20261010` 分支生成七份 R1 及新旧审核台，且旧认可版本均未覆盖。R1 记录见 `project2-progress/STEP_BLOG_GLOBAL_NAV_AND_READER_COPY_R1_REVIEW_20261010.md`。

独立复核 R1 七份实际 HTML 发现此前审计遗漏：所有页面共享 Footer Shadow DOM 模板中的最终 `.colophon-final` 仍会输出三项读者可见开发说明：
- `© 2026 Spatial Flow Journal · Working visual proposal`
- `Set in EB Garamond, Inter &amp; Noto Serif SC`
- `VISUAL STUDY · NOT LIVE DATA`

这是实际可见的前台 JS 模板，不因静态字符串扫描省略 `<script>` 就可认定清理完成。

## 2. R2 独立改动范围

**新分支**：`temp-blog-nav-copy-clean-r2-20261010`，继承 R1，不更改 R1 分支与七份旧设计。

R2 对七页 Footer 三个 span 进行逐字替换，保持原有结构和 CSS：
- `© 2026 Spatial Flow Journal`
- `Spaces · Materials · Everyday Living`
- `JOURNAL · ARTICLES · TOPICS`

这些只是常驻公开编辑文案，不含已发布数据、虚构计数、付款与邮件承诺。项目未曾授权自动同步到 WP 菜单/页脚设置；真正上线应与可编辑的 WP Footer 内容体系对接。

七页及审核台独立创建于 `temp-preview/journal-r2/`，所有静态预览中的跨页引用指向 R2 同组文件（仍以分支 URL 引用，便于互相跳转）；静态锁定源文件和 R1 文件全部保留。

## 3. 检查与边界

提交前逐页源码验证：
- 七份原有 CSS 与对应 R1 **逐字相同（7/7）**，未修改字号、版心、颜色、Header/Footer Shadow 样式；
- 本轮发现的 Footer 3 项开发文案 **7/7 均已移出读者可见模板**；
- 新的三段 Footer 内容 **7/7 完整出现**；
- 7 页跨页引用均迁移至 R2，未残留 R1 预览路径；
- 七页仍各有一个 `<h1>` 和一个 `<main>`；
- 所有内嵌 JS 脚本做纯语法解析，7/7 未报错；
- R2 新旧审核台不残留 R1 路径。
- GitHub 写入已得到提交 SHA：`d0bf5ab668b4f1c919daa053d3ee2b96b09cdb42`。以该 commit 为独立预览固定快照，实际页面的导航链接仍引用分支，以保证可跨页预览。将来如修改分支，内部导航可能指向分支最新版，不等同于 SHA-pinned 的全快照引用。

### R2 七页
- Home: `temp-preview/journal-r2/Journal-Home-R2.html`
- Archive: `temp-preview/journal-r2/Journal-Archive-R2.html`
- Article: `temp-preview/journal-r2/Journal-Article-R2.html`
- Category: `temp-preview/journal-r2/Journal-Category-R2.html`
- Search: `temp-preview/journal-r2/Journal-Search-R2.html`
- Blog 404: `temp-preview/journal-r2/Journal-404-R2.html`
- Empty Category: `temp-preview/journal-r2/Journal-Empty-R2.html`
- Old vs R2 board: `temp-preview/journal-r2/Journal-Old-vs-R2-Review-Board.html`

固定审核台：
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/d0bf5ab668b4f1c919daa053d3ee2b96b09cdb42/temp-preview/journal-r2/Journal-Old-vs-R2-Review-Board.html

## 4. 不得越界

- 独立候选 R2 尚未得到用户视觉认可，不得自称最终设计定稿；
- 无法从当前受限运行环境连通 `raw.githack.com` 做 Chromium 真实浏览器截图；桌面/手机响应式、键盘导航和最终用户视觉需用户浏览器验收；
- 此阶段未修改 WordPress、Multisite、已完成商城 404、项目三参考库；
- Afterword 规则继续强制：正式映射必须主动提醒；后台提供清晰教学；每篇文章可选且独立可编辑，留空则前端完全隐藏，不得预填模板抒情；Reading Invitation 独立保留；
- WordPress 正式映射前需审计最新安装的子主题快照，验证 WP category permalink、`/search/?q=` 与 `?s=`，日期归档 query、作者与标签条件、真实数据、后台可编辑、404 正确 HTTP 状态以及主站/博客隔离。

## 5. 下一道用户关口

先在 R2 新旧审核台核对 Home、Archive、Article、Category 的实际文字及底部 Footer，重点检查四张 Reading Paths 跳至四个真实分类状态；Search、404、Empty 保持原结构。得到明确认可后，才可考虑将 R2 记为整个博客静态页族的下一候选，不自动触发 WordPress 生产映射。
