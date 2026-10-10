# Journal 映射 Step B0-1 · 用户上传子主题 ZIP 实际源码审计与手动修改预检

日期：2026-10-10 · 项目二 · Spatial Flow Journal

## 证据来源与当前状态

- 用户本轮上传：`spatial-flow-astra-child-v1.2-main-journal(3).zip`，仅审计用途。
- 压缩包 SHA256：`60110878cb3b2861bcb24f2b390a9c3015586c6bf4a94b063f9d03b8ba6dd049`。
- 子主题根：`spatial-flow-astra-child-v1.2-main-journal/`。
- `functions.php` 常量 `SPATIAL_FLOW_CHILD_VERSION`：`2.7.105`。 `style.css` 主题头 `Version: 1.8.2`。**不同编号职责，不能混同**。
- ZIP 44 项（含目录）、30 个 PHP 源文件；全部用 PHP CLI `php -l` 语法检查 30/30 PASS。
- 本轮**没有修改任何 ZIP、真实主题文件或 WordPress 站点**；候选补丁仅隔离在检查环境。上传 ZIP 内容与本地 WP 正在运行的精确字节是否相同，仍需要实施前对照。
- 手动定位替换为用户明确要求的默认交付方式：搜索旧段落→核 1 命中→复制新段落→保存→大小/哈希/语法测试→用户确认→下一项。禁止将子主题 ZIP 或整份 PHP/CSS 作为默认替换包。

## 实际模板归属（ZIP 实查，而不是根据旧窗口推断）

- `front-page.php`：前一行用 `get_current_blog_id() != 1` 跳转 `page-templates/journal-hub.php`，其余为商城首页。**逻辑假设 main blog ID = 1 且所有其它 blog 都是 Journal，后续扩展风险**。任何更改必须先核实实际站点 ID/域名和 WP Settings → Reading。
- `page-templates/journal-hub.php`：现有 Journal 首页，已有 Dispatch、Journal Mosaic 与 Search q form。
- `home.php`：现有真正的 Articles Index / All Articles 页面（非 Journal 首页）。
- `archive.php`：通用标签/作者/日期等归档模板。
- `category.php`：真实分类名称、描述和图片，使用 `template-parts/journal-index.php`。
- `single.php`：真实 Post、文章目录、前后文章和相关内容；**未见 Afterword 元数据实现**。
- `search.php`：原生 `?s=` 检索；`page-templates/global-search.php`：WordPress 页面内的 `/search/?q=` 分组检索，已通过 `functions.php` 做 main/journal 数据分流。
- `404.php`：目前为**商城 H01**；没有可供直接覆写的博客 404 分支。
- `template-parts/journal-dispatch-band.php`：已有真实 `admin-ajax.php`、nonce、honeypot、form status；不可把 R3 演示表单原样移植。
- `template-parts/journal-index.php`：自行执行 9 posts/page 的独立 WP_Query，但**未将当前 Date Archive 查询的年月日参数传入新查询**。

## B0-1 手动修复候选：日期归档必须带真实日期限制

目标：`template-parts/journal-index.php`，只在 `is_author()` 与 `is_search()` 间添加 `is_date()` 分支。与商业站点无直接关系；不改变视觉代码与非日期数据路径。

修改前（ZIP 内原文件）：
- 3050 字节，75 行
- SHA256 `ecdf40ba89c62b3ab5d28a13175940c4cc850a3be087c5f8adc040d55547495d`

候选计算结果：
- 3670 字节，88 行
- SHA256 `90ebc8e6f70fe4d463043506762048ff513905be1a45d7b46b665c6f7fd3798b`
- **预期 +620 字节，+13 行**，仅对日期归档加条件分支；大小增长是为已明确识别的日期问题增加 13 行，未触及其它逻辑。
- 已使用 `php -l` 校验候选：PASS。
- 使用 PHP 假 WP_Query / conditional 环境隔离验证：year=2025、year+month=2026/10、year+month+day=2026/10/10、?m=202610 四种归档分别传入相应筛选；category、tag、author、native search 四种现有查询的参数前后完全相同（4/4）；这是 mock 参数测试，**不是实际 WP/数据库/路由端到端 PASS**。
- 生产端尚需：日期归档实际链接及分页 404 检查；函数 `spatial_flow_journal_index_main_query_posts_per_page` 旧版排除 is_date，可能导致主查询与独立查询页码不一致，后续单独负责，不应把当前步骤叫成最终 Date Archive 功能全面验收。

**搜索旧代码：预期且仅允许 1 个命中**

```php
} elseif ( is_author() ) {
    $author_id = absint( get_query_var( 'author' ) );
    if ( $author_id ) {
        $journal_index_args['author'] = $author_id;
    }
} elseif ( is_search() ) {
```

**替换为：**

```php
} elseif ( is_author() ) {
    $author_id = absint( get_query_var( 'author' ) );
    if ( $author_id ) {
        $journal_index_args['author'] = $author_id;
    }
} elseif ( is_date() ) {
    // Journal 日期归档：把当前年月日条件传入独立 WP_Query，避免误显示全部文章。
    foreach ( array( 'year', 'monthnum', 'day' ) as $date_var ) {
        $value = absint( get_query_var( $date_var ) );
        if ( $value ) {
            $journal_index_args[ $date_var ] = $value;
        }
    }
    // 兼容形如 ?m=202610 的日期查询参数。
    $compact_date = (string) get_query_var( 'm' );
    if ( ! isset( $journal_index_args['year'] ) && '' !== $compact_date && ctype_digit( $compact_date ) ) {
        $journal_index_args['m'] = $compact_date;
    }
} elseif ( is_search() ) {
```

禁令：不能替换整份 `journal-index.php`，不能把本说明中 1:1 设计文件直接拷成生产数据，不能自动继续下一步。**本轮创建的是用户可执行手动替换说明，是否已编辑/正式通过须在用户实际操作并验收后再记录**。

## 后续映射顺序

1. B0-1 日期查询条件补齐，用户手动后检查（尚未应用）。
2. 针对旧 `functions.php` 日期主查询 `pre_get_posts` 规则，依据 B0-1 真实运行验证后再决定是否追加独立的小步骤；不得提前认定全部日期归档已修完。
3. 确认现有 `front-page.php` + `journal-hub.php` 与 `home.php` 的博客 Reading settings、真实 blog ID。禁止破坏商业站点主页。
4. Journal Home R3 先做 HTML→WordPress 动态 Owner 映射（文章/分类/图片/菜单），逐段手动替换并与静态设计校验；接着 Archive→Article（Afterword 编辑教学与无正文隐藏）→Category/Empty→Search q→Blog 404。不要跳过此前 R3 未完成的实机视觉关口。
5. 严守 `Completed 1:1 / Not done` 二元验收；后续每页用户明确通过后才记完成。

## 阻断

最新上传 ZIP 不是线上运行字节自动确认，也不是授权自动部署。R3 静态浏览器截图/响应式最终验收未完成；当前只是源审与安全最小修复候选。
