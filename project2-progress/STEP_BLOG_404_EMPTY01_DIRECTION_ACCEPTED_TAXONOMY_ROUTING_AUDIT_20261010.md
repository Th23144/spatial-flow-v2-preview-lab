# 项目二 · Blog 404 / Empty Category 01 视觉方向认可 & WP 路由审计

记录日期：2026-10-10

## 用户原话与准确状态
用户审阅 Blog 404 Concept01 与 Empty Category Scenario01 后答复：**“这两个还可以”**。
标记两者为 **DIRECTION ACCEPTED / 静态视觉方向可继续推进**；非最终封版，也非 WordPress 1:1 生产映射通过。静态阶段先冻结、不再主动改动，未来还需和 Blog Home03、Article Archive01、Single Article04、Category02、Search05 统一视觉和响应式审查。

### 两份静态预览（锁定快照）
- **Blog 404 01**:
  https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/1c60cf723809b53f9e607f3e1a9d1cc8ef911d11/temp-preview/Spatial-Flow-Journal-404-01.html
- **Empty Category 01**:
  https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/1c60cf723809b53f9e607f3e1a9d1cc8ef911d11/temp-preview/Spatial-Flow-Journal-Empty-Category-01.html
- 当前 Search05 是 **PROVISIONAL / 暂定**，不是已封版。

## 真实子主题文件的只读路由审计
审计依据：此前用户上传、保存在当前环境的 `spatial-flow-astra-child-v1.2-main-journal(2).zip`，为当时测试版本约 2.7.105 的快照。**这是 ZIP 文件内容验证，不等于已登录最新 WordPress 站点确认其当前启用内容完全一致**。
- ZIP 包含 **30 个 PHP 文件**。根模板中实际包含 `404.php`、`archive.php`、`category.php`、`home.php`、`search.php`、`single.php`，以及公共 `template-parts/journal-index.php`。
- ZIP 根目录 **不存在 `tag.php`、`author.php`、`date.php`、`taxonomy.php` 或 `index.php` 专用文件**。WordPress 原生 Template Hierarchy 将标签、作者、日期等归档在缺少更专门子主题覆盖时交由通用 `archive.php`（如无其它父主题更专门模板覆盖，WP 会按照模板层级选中实际可用的文件；正式映射前需复查父主题与过滤器）。
- `archive.php` 使用共享 `journal-index.php` 绘制列表和导航，Hero 却统一写成 “Guides for modern spatial living” 一类通用标题。**Tag、Author、Date 当前视觉缺少对应真实 term/author/date 的明确标识**，不能直接宣称页面设计已适配。
- `journal-index.php` 独立构造 `WP_Query`（post_type=post、post_status=publish、posts_per_page=9、分页开启），能够依据：
  1. `is_category()` 添加 `cat`;
  2. `is_tag()` 添加 `tag_id`;
  3. `is_author()` 添加 `author`;
  4. `is_search()` 添加 `s`。
  **没有 `is_date()/is_year()/is_month()/is_day()` 或对应年月日筛选条件**。因此日期归档进入 `archive.php` 后，视觉列表很可能变成不受日期约束的“全部文章”，与 URL 所表示的日期不一致。此为真实功能完整性问题，必须在映射阶段校正；不能仅换标题。
- 根部 `404.php` 已存在，而且内容明确服务**商城 H01**：`spatial_flow_main_site_url('/search/')`、`spatial_flow_shop_url()`、商品/客服恢复链接；**没有 `spatial_flow_is_journal_site()` 分支**。在 Multisite 两站共享主题的情况下，不能直接用博客 404 静态代码覆盖该文件，否则会破坏已完成 1:1 的主站 404。映射需仅为 blog_id=2 加入隔离分支/局部模板。正式博客 404 必须返回 HTTP 404 状态，并将 q 搜索指向博客真实 `/search/?q=...`，非预览 URL。
- `category.php` 为真实分类标题、描述和图片读取，且内部列表复用 `journal-index.php`；这个 index 已经有 no-results fallback，可将认可的 Empty 视觉映射到这条空状态路径，**不需要新建第二个 WordPress Empty 页面**。
- `home.php` 为真正 All Articles 文章索引；`search.php` 为原生 `?s` 路由，`page-templates/global-search.php` 为另外的 `/search/?q` 分组检索，勿混改。内容需从已发布 Post 获取，不可用静态预览示例代替。
- `single.php` 当前显示真实分类，但经源代码搜索未发现 `get_the_tag_list()` 或 `get_author_posts_url()` 等文章作者/标签归档入口。这说明 Tag/Author **有查询兼容，不代表已策划为一级发现入口**。不为设计完整感臆造新频道。

### 路由处理决定与剩余核对
| Route | Current source | Next design / mapping need |
|---|---|---|
| Blog not-found | Shared existing `404.php` renders main-shop H01 | 静态 404 01 方向认可；生产 Blog-only 分支，主站 regression |
| Blog empty category | `category.php` + `journal-index.php` | 复用 Category02 + Empty01，无新页面；保留合法公开 term 的 HTTP 200 |
| Tag archive | `archive.php` → `journal-index.php` `tag_id` | 复用 Archive 行布局，补 term context / empty；后期确认是否有公开入口 |
| Author archive | `archive.php` → `journal-index.php` `author` | 复用 Archive，补作者名/描述及真实 permalink；不凭空创建作者主页功能 |
| Date archive | `archive.php` → `journal-index.php` | 查询缺年月日筛选，明确列为映射时必须修复的潜在严重一致性问题 |
| Native search | `search.php` and WP `?s` | 兼容保留，不混同 Global Search05 q 路由 |
| Global search | `page-templates/global-search.php` `/search/?q=` | Search05 暂定，需从实时已发布 Post/Page/Category 获取， no fake pagination |

## 推荐的下一阶段
**先不要为了 Tag/Author/Date 各制作一张高保真新视觉稿。** 现有 Wiki/Blog 体量与 404/Category/Archive 视觉足够提供复用基础；先把 Tag/Author/Date 的源路由归属锁清楚（已得到 ZIP 源码证据），再进行静态页面家族统一一致性审计（顶部/底部/字号/宽度/墨色分配、移动端 390/430/360，必要时 320）。

家族大审查完成后，再开始真实 WordPress 生产映射，含每项后台编辑权、实际 q/s 搜索、404 状态码、日期归档、空文章的零内容隐藏与跨站隔离。

### 跨页面不可丢失的锁定原则
Single Article04 的 Afterword = **每篇文章可选的真实正文后记，不是设计占位**。映射前主动提醒用户并提供后台教学；未填写则前台整个模块不输出。后记与公共 Reading Invitation 是两个独立模块，不得合并。无 VIP、假 Issue、Newsletter 自动发送承诺。
