# Project 2 · Resume Index

Last updated: 2026-07-04
Repository: `Th23144/spatial-flow-v2-preview-lab`

Use this as the top-level entry point when resuming Project 2 from a new ChatGPT window.

## Read these first

```text
PROJECT2_RESUME_INDEX.md
PROJECT2_DOCS_INDEX.md
project2-progress/README.md
project2-progress/PROGRESS_LOG.md
project2-progress/STEP_4D_SYNC_MANIFEST.md
project2-progress/DEFERRED_PLANS.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
PROJECT2_LOCAL_SYNC_MANIFEST.md
PROJECT2_NEXT_WINDOW_PROMPT.md
PROJECT2_CURRENT_STATE.md
```

## Current status

```text
Step 4D · Single Product / 商品详情页 1:1 换皮主体已完成。
Step 4D-1-G · Single Product full-page regression：Passed。
Step 4D-2 · Single Product handoff / sync manifest update：Passed。
```

## Current next step

```text
User decision needed:
- Continue to the next visual page/module, or
- Run controlled CSS cleanup: Step 4D-CLEAN1 / Project2-CLEAN-CSS.
```

## Current decision on long editorial product sections

```text
Implemented now:
- The Piece / 商品正文 editorial 区

Deferred for later:
- Story Behind optional editorial module
- Care Ritual optional usage guide module
- Quiet Notes / verified WooCommerce Reviews editorial display
```

The deferred long sections are not abandoned. They are recorded in:

```text
project2-progress/DEFERRED_PLANS.md
```

## Step 4D handoff file

A dedicated Step 4D sync / handoff manifest now exists:

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

Important Step 4D notes:

```text
- The Piece data source is WooCommerce product long description / the_content.
- The Piece is hidden when product long description is empty.
- The Piece drop cap uses explicit `.sf-product-v2-piece__dropcap`, not CSS `::first-letter`.
- Checkout SAFE5 add-to-cart carried notice fix belongs in `checkout-safe5.css`, not global `spatial-flow.css`.
```

## Documentation index

A synchronized map of all Markdown documentation files exists:

```text
PROJECT2_DOCS_INDEX.md
```

Use it to understand which documentation files are current, partially stale, historical, or deferred/backlog-oriented.

## Progress memory folder

```text
project2-progress/
```

This folder is the dedicated progress-memory area for Project 2. Future steps, passed states, deferred plans, and cleanup tasks should be synchronized there so repository search can recover the project state.
