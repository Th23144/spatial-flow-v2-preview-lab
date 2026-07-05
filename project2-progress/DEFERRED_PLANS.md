# Project 2 · Deferred Plans / Backlog

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

This file records deferred or extra plans that should not be forgotten.

When the user asks to search the repository for delayed plans, backlog, or forgotten tasks, include this file.

---

## 1. Single Product long editorial sections

Source static reference:

```text
preview/spatial-flow-product-v1.html
```

The static product page contains several long editorial sections between Product Attributes and Related Products.

Current decision:

```text
Only The Piece will be implemented now.
Other long editorial sections are deferred because they require real content operations and should not force fabricated stories.
```

### 1.1 The Piece — active next step, not deferred

```text
Step 4D-1-F · The Piece 商品正文 editorial 区接入
```

Status:

```text
Planned next.
```

Operational model:

```text
Use WooCommerce product long description / the_content.
Treat it as the real product detail introduction.
No fictional story required.
```

### 1.2 Story Behind — deferred

Potential future step:

```text
Step 4D-LATER-STORY · Story Behind optional editorial module
```

Reason for deferral:

```text
This block is article-like and product-specific. It should not force the user to invent a background story for every product.
```

Future operational model:

```text
Use only for hero products, series-core products, high-ticket products, or products with real origin/selection/design notes.
Do not display on ordinary products unless real content exists.
Do not hardcode fake makers, fake origins, fake stories, or fake locations.
```

Recommended future data source:

```text
Optional per-product fields:
- story heading
- story image
- origin / selection note
- material/design note
- source/location note
- optional meta rows
```

### 1.3 Care Ritual — deferred

Potential future step:

```text
Step 4D-LATER-CARE-RITUAL · Care Ritual optional usage guide module
```

Reason for deferral:

```text
The current page already has Trust Strip and Product Attributes care fields. A separate care ritual block must not duplicate those fields.
```

Future operational model:

```text
Use as a richer usage/ritual guide, not as basic care text.
Recommended structure:
- Daily use
- Seasonal reset
- Storage / repair / recharge
```

Recommended future data source:

```text
Global default template + optional per-product override.
```

### 1.4 Quiet Notes / Reviews — deferred

Potential future step:

```text
Step 4D-LATER-REVIEWS · Verified WooCommerce Reviews editorial display
```

Reason for deferral:

```text
The site is new and does not yet have real reviews. Fake reviews must not be written or displayed.
```

Future operational model:

```text
- Read real WooCommerce approved / verified reviews.
- If no reviews exist, hide the reviews module or show a restrained 'Be the first to leave a note' entry point.
- Do not fabricate customer quotes, names, locations, ratings, or dates.
```

Future review collection idea:

```text
After order completion, ask buyers questions such as:
- Where did you place it?
- Was it a gift or for yourself?
- What made you choose this piece?
- How does it feel in daily use?
```

---

## 2. CSS cleanup plans

### 2.1 Single Product CSS consolidation

Potential future step:

```text
Step 4D-CLEAN1 · Single Product CSS consolidation
```

Purpose:

```text
After the single product page is visually accepted, consolidate overlapping historical single-product CSS blocks.
```

Rules:

```text
- Do not randomly delete old appended blocks during normal feature work.
- Ask the user to upload the latest server `assets/css/spatial-flow.css` first.
- Search for duplicate single-product selectors.
- Replace, merge, and delete only with precise instructions.
```

### 2.2 Global CSS consolidation pass

Potential future step:

```text
Project2-CLEAN-CSS · Global CSS consolidation pass
```

Purpose:

```text
Clean historical append-only patches across Header, Footer, Shop, Product, Cart, Checkout, Blog, and utility pages after visual work stabilizes.
```

Known historical blocks to revisit include:

```text
- Step 4B-R2-B Footer Dark Editorial
- Step 4C-B Shop Hero Editorial
- Product Archive Visual Scope Fix
- Phase Shop Visual 1 / 2 / 2.1 overlap
- Single Product Visual 1 plus old Phase 3.x single-product patches
```

---

## 3. Shop deferred plans

### 3.1 Shop mobile first-screen product exposure

Potential future step:

```text
Step 4C-MOBILE1 · Shop Mobile First Screen 商品露出优化
```

Reason for deferral:

```text
Shop mobile currently does not break, but first-screen product exposure is not ideal because the V2 static visual was not mobile-optimized.
```

---

## 4. General backlog policy

```text
Any future delayed plan, optional enhancement, cleanup pass, or paused idea should be written here or linked from here.
The user wants future repository searches to recover these tasks.
```
