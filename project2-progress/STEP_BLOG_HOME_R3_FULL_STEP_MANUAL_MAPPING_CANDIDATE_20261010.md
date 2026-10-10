# Journal Home R3 · 一次交付完整步骤（手动代码映射候选）

日期：2026-10-10。严格保留用户早已确定的“完整步骤→所有修改文件一次性教程；用户自己手动精准搜索/替换”原则，不再误称为新模式。

## 当前交付范围（全部 4 个文件）

1. **新建** `assets/css/journal-home-r3.css` ← 本候选分支 `project2-candidates/journal-home-r3/assets/css/journal-home-r3.css`。
2. **新建** `template-parts/journal-r3-home.php` ← 本候选分支 `project2-candidates/journal-home-r3/template-parts/journal-r3-home.php`。
3. **有界插入** `functions.php`：在唯一 `function spatial_flow_main_blog_id(){` 锚点前插入 `Project2 Journal Home R3 isolated owner` owner block。上传的 B0-2 最新基线 `functions(20261010-145347).php`，766159B/16684L/SHA256 `0312405c6a054717eead5f968dd8465193aacf43497c495dc5e8495876a3c8f8`；内测候选 776484B/16837L/SHA256 `0738910827a9c18fbc625a9d7d4f7237f6e8dd628dfb499d9b1c5b0e2b0ff926`；本地 `php -l` PASS。
4. **有界替换** `page-templates/journal-hub.php`：保留顶部 `Template Name`，替换 `get_header();` 至 `get_footer();` 的渲染正文为 `get_header(); get_template_part('template-parts/journal-r3-home'); get_footer();`。ZIP 旧 1942B/27L/SHA256 `a5d194120ee9bdd480bd408ff38acbe6d81e256f0ef3c89d1b49f7dcc924f9ea`；内测 140B/7L/SHA256 `9114926da781efc0db231beeff222312e2614243ee1dc46883239be437473db7`；本地 `php -l` PASS。

用户用一个可下载 Markdown 教程同步获得四文件修改范围、两份新源码的 GitHub 精确链接、函数追加 owner block 全代码、hub 原/新精确代码、备份和回滚、统一验收清单：`Journal_Home_R3_完整步骤_四文件手动映射教程.md`（在当轮对话附件交付）。

## 实现核查点

- R3 CSS 第一套原稿主样式保持原文，另外提取 identity/adaptation 两个小 style 块；在单独文件中加载，非全站 CSS 叠加。原始静态 `noindex` 不进入生产 PHP。
- Journal Home 覆盖的独立 header/footer 只在该页展示：其它页面仍旧，暂不声称跨七页统一或 1:1 完成。
- 8 条目录、3 张精选、4 个编辑问答、分类书架绑定公开 WP posts/categories；不再复用原型固定文章/伪链接；WP 页面菜单位置可配置。
- 首页 cover/编辑说明/阅读路径/Dispatch 文案与真实 Post meta、category meta 有后台编辑入口。
- Dispatch 替换原型假表单，复用 `spatial_flow_journal_dispatch_submit`、nonce、honeypot、已有 JS AJAX Modal；**不声称具备邮件订阅发送功能**。
- 封面使用已有 `sf_journal_hero_img`，实际 Post 图片和分类取实时数据。
- 首页 Search 不单独添加，因为 R3 审定的 Home 静态稿未包含独立搜索框。

## 技术验证状态

- `functions.php` 改动在本地确切 B0-2 上传文件上合成，字节/行数/ SHA256，`php -l` PASS。
- `journal-hub.php` 以 ZIP 原件为基线隔离替换，字节/行数/SHA256，`php -l` PASS。
- 新 PHP 模板由隔离 GitHub 文本候选生成，已检查 PHP 标签 80/80 闭合、R3 模块存在、导航/footer JSON 变量存在、无 raw.githack.com 和原型假表单；同时写入 `.github/workflows/journal-r3-candidate-syntax.yml` 自动 PHP lint 条件。**本轮尚未拿到此新模板可确认的 PHP lint 运行成功报告，不得说三份 PHP 都已通过语法**。必须由用户手动落地前先 `php -l template-parts/journal-r3-home.php` 通过；否则不得执行 hub 的激活改动。
- 无真实 WordPress、本地浏览器截图、Layout 像素级 1:1 及 Submit 数据库终验。不改变正式主题，不合并主分支。

## 执行顺序
新 CSS → 新 PHP → 函数块 → 先校验新 PHP → 最后 hub 启用 → 整步 QA。若失败先还原 hub 激活段，再回滚函数 owner block。主站首页/商城/结账/支付不可被影响。

## 继续任务
用户完成并上传本步骤实际手动修改后的文件，逐字节对比四份，再进行 WP 实机 QA，确认 1:1 是否 PASS。之后 Archive R3 按同一完整步骤集中交付全部文件教程。
