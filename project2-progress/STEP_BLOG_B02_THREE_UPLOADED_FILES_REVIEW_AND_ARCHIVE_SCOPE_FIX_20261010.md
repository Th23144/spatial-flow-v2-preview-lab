# Journal B0-2 · 用户上传三份修改后 PHP 审查与归档跨站隔离纠正

日期：2026-10-10
状态：**三个上传文件符合上一轮五处手动替换候选；PHP 语法全部通过；发现一处 archive.php 原方案的跨站隔离遗漏；真实 WordPress 运行验收待完成。**

## 精确输入 / 核对基线
本轮用户上传：
- `functions(20261010-145347).php`，文件角色 `functions.php`
- `front-page.php`
- `archive.php`

旧基线：用户在本窗口上传的 `spatial-flow-astra-child-v1.2-main-journal(3).zip`，版本 `2.7.105`。逐字节 diff 结果：
- functions.php：旧 765847 bytes/16682 lines；新 **766159 bytes/16684 lines**，SHA256 **0312405c6a054717eead5f968dd8465193aacf43497c495dc5e8495876a3c8f8**；恰好 2 diff hunks。
- front-page.php：旧 16657 bytes/126 lines；新 **16769 bytes/130 lines**，SHA256 **f426872edd98a3147b7866b5069bd7aa40dc1594247ce44a52ba1e54e13aaddd**；恰好 1 diff hunk。
- archive.php：旧 1711 bytes/24 lines；新 **2224 bytes/35 lines**，SHA256 **5cd203b37287d6d5b94b5b22d046ac719e6356a487cf0299586256fa42b4b737**；恰好 1 diff hunk（原定 2 个紧邻替换段落合并为一个 diff hunk）。
- 三文件上传 SHA256 与已核算的 B0-2 候选**逐一一致**，无其它改动；`php -l` 3/3 通过。
- 额外复核此前 B0-1 `journal-index.php` 3674B/90L/SHA256 `0740ae4383d7806e44736f2fa20ccfd53a71009cbeb1acd4bb41daf7e74dd362`，仍匹配此前核查。
- PHP mock：15/15 PASS。Journal 的 home/category/tag/author/date/search、商品查询隔离、非 Journal、secondary query 与原有 false-404 行为均通过模拟。不是 WP 端到端或浏览器测试。

## 发现的问题：archive.php 新逻辑未限制 Journal 子站

用户目前文件中：
```php
$sf_contextual_archive = is_tag() || is_author() || is_date();
```
共享子主题的 `archive.php` 在主站原生 tag/author/date archive 也可被选中；这段新增代码会在非 Journal 站点覆盖之前的标题/简介渲染。虽然不是 WooCommerce 产品 archive，但触犯“主商城/非 Journal 不受 Blog 改动波及”的项目二边界。因此需要一个**同一步 B0-2 内的精确补正（非新功能、新步骤）**。

定位目标：`wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/archive.php`

旧代码（恰好一个命中）：
```php
$sf_contextual_archive = is_tag() || is_author() || is_date();
```

新代码：
```php
$sf_contextual_archive = function_exists( 'spatial_flow_is_journal_site' )
    && spatial_flow_is_journal_site()
    && ( is_tag() || is_author() || is_date() );
```

预期结果（基于用户上传当前原文件，仅这行替换）：
- archive.php 2224→**2323 bytes**，35→**37 lines**，+99 bytes/+2 lines
- SHA256 **1a29380cbad8f2ad1f7c58ccb34e71c410170f1323c98caeda5b3aa4060a8af5**
- 候选 PHP `php -l` PASS。
- 文件其它内容不需重复修改；`functions.php` 和 `front-page.php` 无需调整。

## 仍待核的旧架构风险
- `spatial_flow_is_journal_site()` 依赖 `spatial_flow_blog_site_id()` 对 `get_sites(['number'=>50])` 的 `blog.` 域名匹配和“首个非主站”的回退。两站部署可能正常，但在未来加站/换域时未强绑定。**B0-2 修改了调用方，没有彻底修复识别函数**，不得误称“站点识别彻底无风险”。
- 真实 Blog ID、Settings→Reading、博客分页链接/HTTP、主站回归和 R3 的视觉映射/浏览器 QA 尚未在本轮验证。

结论：**手动替换精确性 PASS；建议先做 archive.php 子站条件补正，再进行 B0-2 生产浏览器回归；暂不宣布 Completed 1:1。**
