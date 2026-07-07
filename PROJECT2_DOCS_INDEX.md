# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

This file consolidates the repository Markdown notes for Project 2 so future windows can understand what each document is for, which parts are current, which parts are stale, and what work remains.

## 1. Current Markdown files

There are currently 10 Markdown files visible in the repository search UI:

```text
README.md
PROJECT2_RESUME_INDEX.md
PROJECT2_DOCS_INDEX.md
PROJECT2_CURRENT_STATE.md
PROJECT2_NEXT_WINDOW_PROMPT.md
PROJECT2_LOCAL_SYNC_MANIFEST.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/README.md
project2-progress/PROGRESS_LOG.md
project2-progress/STEP_4D_SYNC_MANIFEST.md
project2-progress/DEFERRED_PLANS.md
```

## 2. Recommended read order when resuming

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/README.md
4. project2-progress/PROGRESS_LOG.md
5. project2-progress/STEP_4D_SYNC_MANIFEST.md
6. project2-progress/DEFERRED_PLANS.md
7. PROJECT2_CSS_MAINTENANCE_POLICY.md
8. PROJECT2_LOCAL_SYNC_MANIFEST.md
9. PROJECT2_NEXT_WINDOW_PROMPT.md
10. PROJECT2_CURRENT_STATE.md
```

Reason:

```text
The newer progress files reflect the current Step 4D state more accurately than the older root handoff files.
Older files are still useful for background and historical sync paths, but some of their next-step lines are stale.
```

## 3. File-by-file status

| File | Category | Current role | Freshness / status |
|---|---|---|---|
| `README.md` | Repository basic readme | Only contains the repository title. | Very light / not a project memory source. |
| `PROJECT2_RESUME_INDEX.md` | Resume entry point | Top-level entry point for new ChatGPT windows. | Current. Read first. |
| `PROJECT2_DOCS_INDEX.md` | Documentation index | This synchronized map of all Markdown files. | Current. |
| `PROJECT2_CURRENT_STATE.md` | Historical/current-state handoff | Records project scope, static references, backend-editability rules, and earlier 4B/4C state. | Partially stale. Keep for background; do not trust old “next step” without checking progress log. |
| `PROJECT2_NEXT_WINDOW_PROMPT.md` | New-window prompt | Copyable prompt for continuing Project 2. | Mostly current but broad. |
| `PROJECT2_LOCAL_SYNC_MANIFEST.md` | Local/server sync manifest | Tracks modified files and server paths from older phases. | Useful historical baseline; Step 4D has a dedicated supplemental manifest. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | CSS policy | Records the non-append-only CSS rule. | Current and active. |
| `project2-progress/README.md` | Progress memory hub | Defines `project2-progress/` as the dedicated memory folder. | Current. |
| `project2-progress/PROGRESS_LOG.md` | Live progress log | Records current Step 4D status and passed steps. | Current. Update after every important step. |
| `project2-progress/STEP_4D_SYNC_MANIFEST.md` | Step 4D handoff / sync manifest | Records final Step 4D file set, server paths, and sync responsibilities. | Current. |
| `project2-progress/DEFERRED_PLANS.md` | Deferred plans / backlog | Records postponed ideas, cleanup tasks, and later modules. | Current. Update whenever a plan is deferred. |

## 4. Completed work currently synchronized in the docs

### 4.1 Project 2 scope and principles

Status:

```text
Current / active.
```

Key points:

```text
- Project 2 is a V2 visual re-skin / 换皮工程.
- It is not Project 3, not a rebuild, and not a new system.
- WordPress / WooCommerce functionality must be preserved.
- Backend editability is a hard boundary.
- Static HTML files are visual references, not direct production code.
```

### 4.2 Header / Footer / Shop earlier work

Status:

```text
Mostly passed, but older docs are spread across root files.
```

Known completed items:

```text
Step 4B-R1 Header 精确替换：Passed
Step 4B-R1.1 Header 桌面导航可编辑性回补：Passed
Step 4B-R2-A Footer 顶部品牌区：Passed
Step 4B-R2-B Main Footer 深色 editorial 化：Passed
Step 4C-A Shop Body V2 结构审计：Passed
Step 4C-B Shop Hero Editorial：Passed
Step 4C-B-FIX1 Header Shop hover / Mobile Shop Hero density：Passed
Step 4C-C Product section title / The Quiet Archive：Passed
Step 4C-C-BACKEND1 Shop V2 Customizer 字段补齐：Passed
Step 4C-D Editor’s Pick 可行性审计：Passed
Step 4C-D-B Editor’s Pick 动态区块接入：Passed
```

### 4.3 Single Product / Step 4D

Status:

```text
Step 4D single product body is passed and handed off.
```

Passed items:

```text
Step 4D-Interrupt · Add-to-cart 成功反馈修复：Passed
Step 4D-1-A · 商品详情页桌面 Hero 框架校正：Passed
Step 4D-1-B · 右侧 Summary 字体层级与间距 1:1：Passed
Step 4D-Control-A · 商品详情页后台字段映射审计：Passed
Step 4D-Control-B · 清理 Product Story 残留 + 修复 Product Attributes 字段来源：Passed
Step 4D-Control-C · Product Attributes 标题后台字段化：Passed
Step 4D-1-C · 左侧 Gallery 细节 1:1：Passed
Step 4D-1-C-MOBILE1 · Mobile Gallery 主图填充修复：Passed
Step 4D-1-D · Product Attributes 区视觉 1:1 细修：Passed
Step 4D-1-D-FIX1 · Quantity 小空缺 + Attributes 双分隔线修复：Passed
Step 4D-1-E · Related Products / Complete The Room 区视觉 1:1 细修：Passed
Step 4D-1-F · The Piece 商品正文 editorial 区接入：Passed
Step 4D-1-F-FIX5 · The Piece nested editor markup drop-cap：Passed
Step 4D-1-G-FIX1 · Hide checkout add-to-cart success notice：Passed
Step 4D-1-G · Single Product full-page regression / 商品详情页全页回归检查：Passed
Step 4D-2 · Single Product handoff / sync manifest update：Passed
```

Regression note:

```text
The only issue found during Step 4D-1-G was the WooCommerce add-to-cart success notice carried into SAFE5 Checkout when entering Checkout directly from the product-page add-to-cart mini window.
It was fixed in `checkout-safe5.css`, not global `spatial-flow.css`.
Do not hide SAFE5 validation notices, coupon messages, payment errors, required-field errors, or other blocking checkout notices.
```

Step 4D sync file:

```text
project2-progress/STEP_4D_SYNC_MANIFEST.md
```

Step 4D server sync file set:

```text
woocommerce/single-product.php
assets/css/spatial-flow.css
functions.php
assets/css/checkout-safe5.css
```

## 5. Current next step

```text
User decision needed:
- Continue to the next visual page/module, or
- Run controlled CSS cleanup: Step 4D-CLEAN1 / Project2-CLEAN-CSS.
```

## 6. Deferred / unfinished work currently recorded

### 6.1 Long editorial modules after The Piece

Status:

```text
Deferred.
```

Items:

```text
Step 4D-LATER-STORY · Story Behind optional editorial module
Step 4D-LATER-CARE-RITUAL · Care Ritual optional usage guide module
Step 4D-LATER-REVIEWS · Verified WooCommerce Reviews editorial display
```

Reason:

```text
These are article-like or review-based modules. They require real content operations and should not force fake stories, fake origin notes, or fake reviews on a new site.
```

### 6.2 CSS cleanup

Status:

```text
Deferred.
```

Items:

```text
Step 4D-CLEAN1 · Single Product CSS consolidation
Project2-CLEAN-CSS · Global CSS consolidation pass
Step 4C-CLEAN1 · CSS 新增块合并整理
```

### 6.3 Shop mobile first-screen exposure

Status:

```text
Deferred.
```

Item:

```text
Step 4C-MOBILE1 · Shop Mobile First Screen 商品露出优化
```

Reason:

```text
Shop mobile is not broken, but first-screen product exposure is not ideal.
```

## 7. Current documentation classification

```text
Current / authoritative for next-window resume:
- PROJECT2_RESUME_INDEX.md
- PROJECT2_DOCS_INDEX.md
- project2-progress/README.md
- project2-progress/PROGRESS_LOG.md
- project2-progress/STEP_4D_SYNC_MANIFEST.md
- project2-progress/DEFERRED_PLANS.md
- PROJECT2_CSS_MAINTENANCE_POLICY.md

Useful but partially stale / historical:
- PROJECT2_CURRENT_STATE.md
- PROJECT2_NEXT_WINDOW_PROMPT.md
- PROJECT2_LOCAL_SYNC_MANIFEST.md

Not a memory source:
- README.md
```

## 8. Maintenance rule going forward

```text
- Update project2-progress/PROGRESS_LOG.md after each accepted step.
- Update project2-progress/DEFERRED_PLANS.md whenever a task is deferred.
- Update PROJECT2_DOCS_INDEX.md when a new Markdown planning/status file is created or when a major Step status changes.
- Use dedicated project2-progress handoff files when a root manifest is too stale to safely replace wholesale.
- Do not delete old Markdown files unless the user explicitly asks.
```
