# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

This file consolidates the repository Markdown notes for Project 2 so future windows can understand what each document is for, which parts are current, which parts are stale, and what work remains.

## 1. Current Markdown files

Current important Markdown files include:

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
project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
project2-progress/STEP_4D_SYNC_MANIFEST.md
project2-progress/STEP_4D_CLEAN1_AUDIT.md
project2-progress/DEFERRED_PLANS.md
```

## 2. Recommended read order when resuming

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. project2-progress/README.md
4. project2-progress/PROGRESS_LOG.md
5. project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
6. project2-progress/STEP_4D_SYNC_MANIFEST.md
7. project2-progress/STEP_4D_CLEAN1_AUDIT.md
8. project2-progress/DEFERRED_PLANS.md
9. PROJECT2_CSS_MAINTENANCE_POLICY.md
10. PROJECT2_LOCAL_SYNC_MANIFEST.md
11. PROJECT2_NEXT_WINDOW_PROMPT.md
12. PROJECT2_CURRENT_STATE.md
```

Reason:

```text
The newer progress files reflect the corrected current state more accurately than older root handoff files.
Older files are still useful for background and historical sync paths, but some older Shop status lines are stale.
```

## 3. File-by-file status

| File | Category | Current role | Freshness / status |
|---|---|---|---|
| `README.md` | Repository basic readme | Only contains the repository title. | Very light / not a project memory source. |
| `PROJECT2_RESUME_INDEX.md` | Resume entry point | Top-level entry point for new ChatGPT windows. | Needs later sync after Shop rework correction. |
| `PROJECT2_DOCS_INDEX.md` | Documentation index | This synchronized map of all Markdown files. | Current. |
| `PROJECT2_CURRENT_STATE.md` | Historical/current-state handoff | Records project scope, static references, backend-editability rules, and earlier 4B/4C state. | Partially stale. Do not trust old Shop “Passed” lines without checking progress log. |
| `PROJECT2_NEXT_WINDOW_PROMPT.md` | New-window prompt | Copyable prompt for continuing Project 2. | Broad / partially stale for Shop. |
| `PROJECT2_LOCAL_SYNC_MANIFEST.md` | Local/server sync manifest | Tracks modified files and server paths from older phases. | Useful historical baseline; Step 4D has a dedicated supplemental manifest. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | CSS policy | Records the non-append-only CSS rule. | Current and active. |
| `project2-progress/README.md` | Progress memory hub | Defines `project2-progress/` as the dedicated memory folder. | Current. |
| `project2-progress/PROGRESS_LOG.md` | Live progress log | Records current active step and passed steps. | Current. Update after every important step. |
| `project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md` | Shop rework audit | Corrects Shop status and records full desktop + mobile 1:1 rework audit. | Current. |
| `project2-progress/STEP_4D_SYNC_MANIFEST.md` | Step 4D handoff / sync manifest | Records final Step 4D file set, server paths, and sync responsibilities. | Current. |
| `project2-progress/STEP_4D_CLEAN1_AUDIT.md` | Step 4D CSS cleanup audit | Records accepted single-product CSS cleanup. | Current. |
| `project2-progress/DEFERRED_PLANS.md` | Deferred plans / backlog | Records postponed ideas, cleanup tasks, and later modules. | Current. |

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
Header/Footer mostly passed.
Shop earlier records are now corrected to partial implementation, not final 1:1 visual acceptance.
```

Known completed / accepted items outside corrected Shop visual status:

```text
Step 4B-R1 Header 精确替换：Passed
Step 4B-R1.1 Header 桌面导航可编辑性回补：Passed
Step 4B-R2-A Footer 顶部品牌区：Passed
Step 4B-R2-B Main Footer 深色 editorial 化：Passed
Step 4C-C-BACKEND1 Shop V2 Customizer 字段补齐：Passed as backend fields
Step 4C-D Editor’s Pick 可行性审计：Passed as feasibility audit
Step 4C-D-B Editor’s Pick 动态区块接入：Passed as functional dynamic block
```

Corrected Shop note:

```text
Do not treat earlier Step 4C Shop visual records as final 1:1 acceptance. The user clarified that desktop Shop is also far from 1:1 and the current page is only a lightly reformatted partial implementation.
```

Current Shop active audit:

```text
Step 4C-REWORK1 · Shop desktop + mobile 1:1 rework audit：In progress
project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
```

### 4.3 Single Product / Step 4D

Status:

```text
Step 4D single product body is passed, handed off, and CSS-cleaned.
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
Step 4D-CLEAN1 · Single Product CSS consolidation：Passed
```

Step 4D sync file:

```text
project2-progress/STEP_4D_SYNC_MANIFEST.md
```

Step 4D cleanup audit:

```text
project2-progress/STEP_4D_CLEAN1_AUDIT.md
```

## 5. Current next step

```text
Step 4C-REWORK1 · Shop desktop + mobile 1:1 rework audit：In progress
```

Required next input:

```text
Current desktop Shop screenshots, especially top/hero area and product grid area.
Confirm the intended static Shop reference target, likely `preview/spatial-flow-shop-v1.html`.
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

### 6.2 CSS cleanup

Status:

```text
Partially completed / partially deferred.
```

Items:

```text
Step 4D-CLEAN1 · Single Product CSS consolidation：Passed
Project2-CLEAN-CSS · Global CSS consolidation pass：Deferred
Step 4C-CLEAN1 · CSS 新增块合并整理：Deferred / may be folded into Shop rework
```

### 6.3 Shop mobile first-screen exposure

Status:

```text
Folded into active full Shop rework.
```

Item:

```text
Step 4C-MOBILE1 is superseded by Step 4C-REWORK1.
```

## 7. Current documentation classification

```text
Current / authoritative for next-window resume:
- PROJECT2_DOCS_INDEX.md
- project2-progress/README.md
- project2-progress/PROGRESS_LOG.md
- project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
- project2-progress/STEP_4D_SYNC_MANIFEST.md
- project2-progress/STEP_4D_CLEAN1_AUDIT.md
- project2-progress/DEFERRED_PLANS.md
- PROJECT2_CSS_MAINTENANCE_POLICY.md

Needs later sync:
- PROJECT2_RESUME_INDEX.md

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
- Update project2-progress/DEFERRED_PLANS.md whenever a task is deferred or pulled back into active work.
- Update PROJECT2_DOCS_INDEX.md when a new Markdown planning/status file is created or when a major Step status changes.
- Use dedicated project2-progress handoff files when a root manifest is too stale to safely replace wholesale.
- Do not delete old Markdown files unless the user explicitly asks.
```
