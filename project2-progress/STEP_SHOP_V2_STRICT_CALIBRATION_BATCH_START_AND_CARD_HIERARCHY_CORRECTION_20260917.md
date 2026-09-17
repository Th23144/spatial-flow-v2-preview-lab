# STEP_SHOP_V2_STRICT_CALIBRATION_BATCH_START_AND_CARD_HIERARCHY_CORRECTION_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

STRICT CALIBRATION IMPLEMENTATION BATCH STARTED

No production source has been modified by this record. This file records the implementation plan and one source-audit correction before manual local edits.

## Locked user-approved deviation

Keep the current wider Shop frame. Do not reduce the live Shop width to the static reference width formula.

## Correction to prior delta matrix

The actual static card hierarchy in `preview/spatial-flow-shop-v1.html` is:

```text
media
hover View piece →
product title
editorial subline
price
placement note
```

The prior matrix text accidentally listed the editorial subline before the title. The source HTML is authoritative; implementation must follow title first, then editorial subline.

## Implementation batch scope

Files:

```text
woocommerce/archive-product.php
woocommerce/content-product.php
assets/css/spatial-flow.css
functions.php (asset version only)
```

Expected untouched:

```text
assets/js/spatial-flow.js
```

## Planned source changes

### archive-product.php
- eliminate duplicate root Shop breadcrumb semantics while retaining real taxonomy/archive context;
- add the visual `Arrange by` label around native Woo ordering;
- stop rendering the extra product-section kicker without deleting its stored Customizer value;
- add a thin pagination presentation wrapper so native Woo pagination can reproduce reference previous / centered numbers / next composition while preserving native URLs/state;
- stop rendering the extra closing-note kicker without deleting its stored Customizer value.

### content-product.php
- retain real product permalink and YITH Wishlist ownership;
- reuse existing `_sf_material`, `_sf_piece_reference`, `_sf_placement` fields;
- output title -> editorial subline -> price -> optional placement note;
- fall back to real Woo category text only when Material + Piece Reference are empty;
- add a non-fake `View piece →` overlay using the real product link;
- do not fabricate New/Last/stock badges or placement copy.

### spatial-flow.css
- keep the current wider frame rule unchanged;
- calibrate Shop microtype from JetBrains Mono to reference Inter-style sans where the static source uses sans;
- calibrate Hero signoff spacing;
- calibrate toolbar/sort composition;
- calibrate Editor’s Pick labels/buttons and remove extra image zoom;
- calibrate section heading, product-card rhythm, quick action and placement note;
- preserve YITH Wishlist as a production-only extra;
- calibrate native Woo pagination into the reference three-part presentation;
- calibrate closing-note sentence flow/button;
- preserve approved mobile two-column grid, compressed Hero and hidden mobile Editor’s Pick.

## Acceptance rule

Shop remains `Not done` until fresh desktop + mobile runtime screenshots and interaction regression tests pass after this batch.
