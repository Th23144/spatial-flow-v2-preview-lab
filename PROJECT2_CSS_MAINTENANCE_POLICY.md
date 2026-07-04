# Project 2 · CSS Maintenance Policy

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Core rule

Project 2 is a V2 visual re-skin / 换皮工程, not an append-only patch pile.

From this point forward, CSS work must follow this priority order:

1. Replace the existing selector block in place.
2. Merge overlapping or duplicate patch blocks when the target area is clear.
3. Delete obsolete or invalid old blocks only when the affected scope is understood and verified.
4. Append a new block only when the component is genuinely new, or when temporary append-only validation is explicitly chosen.

Append-only CSS is no longer the default.

## 2. Why this policy exists

The project already contains many historical CSS additions from earlier phases. Some were useful temporary fixes, but continuing to append every new adjustment will make the stylesheet harder to audit, harder to debug, and more likely to create specificity conflicts.

The user explicitly prefers maintainable CSS over endless bottom-of-file patches.

## 3. Current handling rule for old appended blocks

Do not immediately clean all historical appended blocks during normal feature work.

The existing appended blocks are allowed to remain temporarily because many of them are already tested and may still be stabilizing live visual behavior.

Instead, choose a dedicated future cleanup phase to consolidate them.

Recommended cleanup milestone:

```text
Step 4D-CLEAN1 · Single Product CSS consolidation
```

Broader future cleanup milestone:

```text
Project2-CLEAN-CSS · Global CSS consolidation pass
```

These cleanup passes should be done only after the relevant page/section is visually accepted.

## 4. Required workflow for future CSS changes

Before giving CSS changes, the assistant should:

1. Ask for or use the latest uploaded `assets/css/spatial-flow.css` as the only current source of truth.
2. Locate the existing relevant selector block.
3. Prefer a precise replacement instruction:
   - find this selector/block;
   - replace only this block;
   - do not append a duplicate selector at the bottom.
4. Only append when no safe existing block exists.
5. If appending is necessary, label the block as temporary or controlled, and record that it should be merged later.

## 5. Output format expected for CSS tasks

For CSS tasks, prefer this format:

```text
File: assets/css/spatial-flow.css

Find this existing block:
...

Replace it with:
...

Do not append this as a new bottom block.
```

If the file is too large or the exact old block is uncertain, first inspect/search the uploaded CSS and then provide precise replacement steps.

## 6. Current page-specific reminder

Current Project 2 stage:

```text
Step 4D · Single Product / 商品详情页 1:1 换皮进行中
```

Recently completed:

```text
Step 4D-Control-A · 商品详情页后台字段映射审计：Passed
Step 4D-Control-B · 清理 Product Story 残留 + 修复 Product Attributes 字段来源：Passed
Step 4D-Control-C · Product Attributes 标题后台字段化：Passed
```

Current next visual step:

```text
Step 4D-1-C · 左侧 Gallery 细节 1:1
```

For this step, do not append a new Gallery polish block. Replace the existing Gallery rules inside the current single-product visual CSS area instead.

## 7. Hard boundary

Do not sacrifice backend editability for visual cleanliness.

Project 2 must preserve WordPress / WooCommerce / Customizer / product meta / menu / shortcode / option-driven content wherever it already exists.

CSS cleanup must not hide backend-editable content just to make a screenshot look cleaner.
