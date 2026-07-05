# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

This file consolidates the repository Markdown notes for Project 2 so future windows can understand what each document is for, which parts are current, which parts are stale, and what work remains.

## 1. Current Markdown files

There are currently 9 Markdown files visible in the repository search UI:

```text
README.md
PROJECT2_RESUME_INDEX.md
PROJECT2_CURRENT_STATE.md
project2-progress/README.md
PROJECT2_NEXT_WINDOW_PROMPT.md
PROJECT2_LOCAL_SYNC_MANIFEST.md
project2-progress/PROGRESS_LOG.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/DEFERRED_PLANS.md
```

## 2. Recommended read order when resuming

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/README.md
4. project2-progress/PROGRESS_LOG.md
5. project2-progress/DEFERRED_PLANS.md
6. PROJECT2_CSS_MAINTENANCE_POLICY.md
7. PROJECT2_LOCAL_SYNC_MANIFEST.md
8. PROJECT2_NEXT_WINDOW_PROMPT.md
9. PROJECT2_CURRENT_STATE.md
```

Reason:

```text
The newer progress files reflect the current Step 4D state more accurately than the older root handoff files.
Older files are still useful for background and sync paths, but some of their next-step lines are stale.
```

## 3. File-by-file status

| File | Category | Current role | Freshness / status |
|---|---|---|---|
| `README.md` | Repository basic readme | Only contains the repository title. | Very light / not a project memory source. |
| `PROJECT2_RESUME_INDEX.md` | Resume entry point | Top-level entry point for new ChatGPT windows. | Current. Read first. |
| `PROJECT2_DOCS_INDEX.md` | Documentation index | This synchronized map of all Markdown files. | Current. |
| `PROJECT2_CURRENT_STATE.md` | Historical/current-state handoff | Records project scope, static references, backend-editability rules, and earlier 4B/4C state. | Partially stale. Keep for background; do not trust its old “next step” without checking progress log. |
| `PROJECT2_NEXT_WINDOW_PROMPT.md` | New-window prompt | Copyable prompt for continuing Project 2. | Mostly current after recent update; still broad. |
| `PROJECT2_LOCAL_SYNC_MANIFEST.md` | Local/server sync manifest | Tracks modified files and server paths that eventually need synchronization. | Useful but stale after 4D; needs a 4D sync update later. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | CSS policy | Records the non-append-only CSS rule. | Current and active. |
| `project2-progress/README.md` | Progress memory hub | Defines `project2-progress/` as the dedicated memory folder. | Current. |
| `project2-progress/PROGRESS_LOG.md` | Live progress log | Records current Step 4D status and passed steps. | Current. Update after every important step. |
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

Primary files:

```text
PROJECT2_CURRENT_STATE.md
PROJECT2_NEXT_WINDOW_PROMPT.md
PROJECT2_RESUME_INDEX.md
```

### 4.2 Header / Footer / Shop earlier work

Status:

```text
Mostly passed, but older docs are spread across root files.
```

Known completed items:

```text
- Step 4B-R1 Header 精确替换：Passed
- Step 4B-R1.1 Header 桌面导航可编辑性回补：Passed
- Step 4B-R2-A Footer 顶部品牌区：Passed
- Step 4B-R2-B Main Footer 深色 editorial 化：Passed
- Step 4C-A Shop Body V2 结构审计：Passed
- Step 4C-B Shop Hero Editorial：Passed
- Step 4C-B-FIX1 Header Shop hover / Mobile Shop Hero density：Passed
- Step 4C-C Product section title / The Quiet Archive：Passed
- Step 4C-C-BACKEND1 Shop V2 Customizer 字段补齐：Passed
- Step 4C-D Editor’s Pick 可行性审计：Passed
- Step 4C-D-B Editor’s Pick 动态区块接入：Passed
```

Primary files:

```text
PROJECT2_CURRENT_STATE.md
PROJECT2_LOCAL_SYNC_MANIFEST.md
PROJECT2_NEXT_WINDOW_PROMPT.md
```

### 4.3 Single Product / Step 4D current work

Status:

```text
Current active area.
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
```

Primary file:

```text
project2-progress/PROGRESS_LOG.md
```

## 5. Current next step

```text
Step 4D-1-F · The Piece 商品正文 editorial 区接入
```

Decision:

```text
Only The Piece will be implemented now.
It should use WooCommerce product long description / the_content.
It should act like a richer product detail introduction.
It should not force fabricated background stories.
```

Do not implement now:

```text
- Story Behind
- Care Ritual
- Quiet Notes / Reviews
```

These deferred modules are documented in:

```text
project2-progress/DEFERRED_PLANS.md
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

### 6.4 Local/server sync manifest update

Status:

```text
Needed later.
```

Reason:

```text
PROJECT2_LOCAL_SYNC_MANIFEST.md currently records earlier 4B/4C file changes and server paths, but it has not yet been fully synchronized with all Step 4D single-product changes.
```

Recommended later step:

```text
Step DOCS-SYNC1 · Update local/server sync manifest for Step 4D
```

## 7. Current documentation classification

```text
Entry / resume:
- PROJECT2_RESUME_INDEX.md
- PROJECT2_DOCS_INDEX.md

Live progress:
- project2-progress/README.md
- project2-progress/PROGRESS_LOG.md

Deferred plans:
- project2-progress/DEFERRED_PLANS.md

Policy:
- PROJECT2_CSS_MAINTENANCE_POLICY.md

Historical / broad handoff:
- PROJECT2_CURRENT_STATE.md
- PROJECT2_NEXT_WINDOW_PROMPT.md

Sync / deployment tracking:
- PROJECT2_LOCAL_SYNC_MANIFEST.md

Repository placeholder:
- README.md
```

## 8. Documentation maintenance rule

Going forward:

```text
- Update `project2-progress/PROGRESS_LOG.md` after each accepted step.
- Update `project2-progress/DEFERRED_PLANS.md` whenever a task is deferred.
- Update `PROJECT2_DOCS_INDEX.md` when a new Markdown planning/status file is created.
- Update `PROJECT2_LOCAL_SYNC_MANIFEST.md` when a file must be synchronized to server or when a sync status changes.
- Do not delete old Markdown files unless the user explicitly asks.
```
