# STEP_SHOP_V2_DETAIL_REMEDIATION_BATCH_B_HERO_EDITOR_PICK_START_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

BATCH B STARTED

This batch begins only after Batch A source validation and runtime confirmation that the Hero lede/signoff font ownership issue is fixed.

## Scope

Batch B intentionally limits edits to:

1. Root Shop Hero title copy/measure, without changing the user-approved wider page width.
2. Editor's Pick data ownership so selected product data is primary and old global Shop copy becomes fallback/override only where appropriate.
3. Editor's Pick controlled italic-word emphasis.

## Protected decisions

- Do not change the current wider Shop page width.
- Do not reopen Header or Footer.
- Do not rewrite WooCommerce product ownership.
- Do not fabricate missing product metadata.
- Preserve mobile two-column products and hidden mobile Editor's Pick as previously accepted production deviations.

## Current verified owners

Hero:
- `sf_shop_v2_hero_title`
- `sf_shop_v2_hero_emphasis`

Editor's Pick selected-product fields:
- `_sf_piece_reference`
- `_sf_material`
- product short description
- `_sf_placement`

Existing Shop Customizer fields remain available as explicit editorial override/fallback controls.

## Execution rule

Use exact OLD -> FULL REPLACEMENT -> NEW CODE instructions from the current uploaded local files. Do not ask the user to infer which duplicate selector/block to edit.
