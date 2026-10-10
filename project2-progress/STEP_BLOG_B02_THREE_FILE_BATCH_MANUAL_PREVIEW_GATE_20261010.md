# Journal B0-2 · 三文件同一步集中交付 / 手动精确替换（2026-10-10）

## 原先锁定规则，不是新规则
用户纠正：每次**完整步骤**必须把需要修改的全部文件的**手动精确搜索/替换教程一次性交付**，不能一个文件一轮。之前仓库已有相同规定，不再标榜“新增模式”。严禁把 ZIP、整份 PHP、整体主题作为替换交付。

## 本轮完整步骤与源码基线
- B0-1 用户修改的 `template-parts/journal-index.php` 已做源码比较，本轮**不再重复改**。
- 2.7.105 child theme ZIP 是三个目标文件的审计基线。网站当前磁盘 SHA 需用户在操作前确认。
- 本轮 B0-2 的全部文件合计 **3 个文件 / 5 段精确替换**：`functions.php`（2 段）、`front-page.php`（1 段）、`archive.php`（2 段）；CSS、JS、Woo、其余模板 **0 处**。
- 目的：日期归档主查询调整到 9 篇（与 B0-1 二次查询吻合）；所有相关钩子限定 Journal 子站；首页不再使用硬编码“blog ID 非 1 就是 Journal”；Tag/Author/Date 标题和描述读取真实上下文。**不是 R3 视觉 1:1 映射通过**。

## 隔离候选结果
| File | Old bytes/lines/SHA256 | Candidate bytes/lines/SHA256 |
|---|---|---|
| functions.php | 765847 / 16682 / `b03e7097e892b88955ba16807cc9cb7ac87e9646677d21bd13dbceaa405e3568` | 766159 / 16684 / `0312405c6a054717eead5f968dd8465193aacf43497c495dc5e8495876a3c8f8` |
| front-page.php | 16657 / 126 / `9a1f497e4c237413e81b996cb328aa680410d3f11763e2bcde76a0cf0f054352` | 16769 / 130 / `f426872edd98a3147b7866b5069bd7aa40dc1594247ce44a52ba1e54e13aaddd` |
| archive.php | 1711 / 24 / `0c56293a849dee35317fcd8e8186c17b7436402ea7a44b3fcc9a08f817aec1de` | 2224 / 35 / `5cd203b37287d6d5b94b5b22d046ac719e6356a487cf0299586256fa42b4b737` |

- 各段 old code 在 ZIP 中精确出现 1 次。
- 隔离修改后 3/3 `php -l` 通过。
- 假 Query 的条件测试覆盖 Journal home/category/tag/author/date/search、其它站点隔离、管理员/非主查询/商品搜索隔离。
- 所有改动与旧源码的 diff 均限于五个定位段；不存在真实站点运行或视觉验收的声明。

## 交付与状态
本轮用户端配套说明文档：`Journal_B02_完整步骤_3文件手动替换教程.md`（为同一轮完整手动修改教程，不是主题 ZIP/替换包），包含 5 段旧/新代码，详细命中、SHA、回滚、跨站回归。用户实际应用与功能验收**待完成**。
后续 Journal Home R3 才进入七页的严格 1:1 页面视觉/真实数据映射；现有 R3 浏览器验收仍待用户确认。
