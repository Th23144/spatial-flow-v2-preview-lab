# Project 2 · Deferred Plans / Backlog

Last updated: 2026-09-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

This file records deferred, optional or later-regression work that must not be lost.

Deferred work does **not** reopen a page already marked `Completed 1:1` unless the user explicitly reopens it or new concrete regression evidence appears.

---

## 1. Single Product optional long editorial sections

Source static reference:

```text
preview/spatial-flow-product-v1.html
```

Current accepted model:

```text
The Piece: implemented and accepted
Story Behind: deferred
Care Ritual: deferred
Quiet Notes / Reviews: deferred
```

The page itself remains:

```text
Single Product: Completed 1:1
```

### 1.1 The Piece — implemented, not deferred

```text
Step 4D-1-F · The Piece 商品正文 editorial 区接入：Passed
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

Reason:

```text
This block is article-like and product-specific. It should not force fabricated background stories for every product.
```

Future model:

```text
Use only when real origin/selection/design notes exist.
Do not hardcode fake makers, origins, locations or stories.
```

Recommended optional per-product sources:

```text
story heading
story image
origin / selection note
material/design note
source/location note
optional meta rows
```

### 1.3 Care Ritual — deferred

Potential future step:

```text
Step 4D-LATER-CARE-RITUAL · Care Ritual optional usage guide module
```

Reason:

```text
Current page already has Trust Strip and Product Attributes care fields. A richer ritual module must not merely duplicate those fields.
```

Potential structure:

```text
Daily use
Seasonal reset
Storage / repair / recharge
```

Recommended source:

```text
Global default template + optional per-product override
```

### 1.4 Quiet Notes / Reviews — deferred

Potential future step:

```text
Step 4D-LATER-REVIEWS · Verified WooCommerce Reviews editorial display
```

Reason:

```text
The site does not yet have enough real review content. Fake reviews must never be created.
```

Future model:

```text
Read real approved / verified WooCommerce reviews.
If none exist, hide the module or show a restrained real review-entry path.
Do not fabricate quotes, names, locations, ratings or dates.
```

---

## 2. CSS cleanup backlog

### 2.1 Single Product CSS consolidation — completed

```text
Step 4D-CLEAN1 · Single Product CSS consolidation: Passed
```

Audit:

```text
project2-progress/STEP_4D_CLEAN1_AUDIT.md
```

### 2.2 Global CSS consolidation — deferred

Potential future step:

```text
Project2-CLEAN-CSS · Global CSS consolidation pass
```

Purpose:

```text
Clean historical append-only/overlapping rules across Header, Footer, Shop, Product, Cart, Checkout, Blog and utility pages only after visual work is sufficiently stable.
```

Known historical owners to revisit include:

```text
Step 4B-R2-B Footer Dark Editorial
Step 4C-B Shop Hero Editorial
Product Archive Visual Scope Fix
Phase Shop Visual 1 / 2 / 2.1 overlap
remaining unscoped related-products repair blocks
other historical Project-2 append-only rules found during final audit
```

Do not use the cleanup pass as permission to reopen accepted visuals or change native behavior.

---

## 3. Shop status correction

Historical text in this file previously said:

```text
Step 4C-REWORK1 · Shop desktop + mobile 1:1 rework: In progress
```

That is now stale.

Current authoritative status:

```text
Shop archive: Completed 1:1
```

The full controlled desktop/mobile rework, pagination follow-up and accepted mobile treatment are closed.

Any old note about first-screen product exposure is historical/non-blocking unless the user explicitly reopens it with current evidence.

---

## 4. Checkout / Step04 deferred or later-regression items

Checkout itself is now:

```text
Checkout: Completed 1:1
Thank You / WooCommerce Order Result: Completed 1:1
```

The following remain deferred/non-blocking:

### 4.1 Step04 status-icon micro polish

```text
Deferred explicitly by user.
```

The current Step04 visual/status family remains accepted. Do not reopen it merely to optimize the waiting/failed/cancelled icon family.

### 4.2 Conditional Step02 shipping regressions

```text
No-method case
true multi-rate case
```

Run only when the actual WooCommerce configuration exposes those states. Current absence is not a Checkout blocker.

### 4.3 Crypto production evolution

Outside current Project-2 visual closure:

```text
real-time fiat -> USDT quote / rate lock
QR
countdown / invoice expiry enforcement
replacement-invoice lifecycle
automatic chain/address monitoring
Cron / Worker / Webhook
WalletConnect
multi-asset selection
multi-network selection
```

### 4.4 Crypto Workspace rollout flag

Workspace ON/OFF is a rollout/deployment decision, not a strict 1:1 completion issue.

### 4.5 WPCode 1706 retained rollback material

```text
1706 `收款页`
DISABLED
DO NOT DELETE during current closure/cleanup horizon
```

It is not a feature backlog item, but this state must not be forgotten because enabling it regresses the accepted Step03 gateway-host visual.

---

## 5. Current `Not done` page backlog

These are not optional enhancements; they are still incomplete Project-2 pages/page families:

```text
Home
Wishlist
Track Order
Account
Search
404
About Us
Services
FAQ / Help
Contact
Utility / policy pages
Blog Header/Footer branch
Blog home
Blog issue
Blog article
```

Current recommended next page:

```text
Home
```

First step:

```text
Step 4G-A · Home current live source + ownership audit
```

Reference:

```text
preview/spatial-flow-v1.html
```

---

## 6. Backlog policy

```text
Any future delayed plan, optional enhancement, cleanup pass or paused idea should be written here or linked from here.
A deferred item must not silently become a blocker to a page already formally closed unless the user explicitly reopens it or new concrete evidence requires reopening.
```

Inventory reconciliation:

```text
project2-progress/PROJECT2_POST_CHECKOUT_PAGE_INVENTORY_RECONCILIATION_20260903.md
```
