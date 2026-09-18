# Shop V2 — Mobile 01 Filter / Sort strict audit result

Date: 2026-09-18

## Scope

Non-frozen Shop mobile review item 01: filter toolbar and WooCommerce sort control.

Sources:
- current user-uploaded spatial-flow.css
- preview/spatial-flow-shop-v1.html static Shop reference
- prior Shop strict-delta decisions

## Reference behavior

The static reference toolbar uses:
- toolbar: flex + flex-wrap: wrap;
- filters: flex + flex-wrap: wrap;
- sort: compact inline control;
- mobile breakpoint only reduces horizontal padding; it does not convert filters into a hidden-scroll horizontal rail.

Therefore the current production mobile horizontal-scroll strip is not reference-like.

## Current production mobile behavior

At <= 767px:
- controls become one-column grid;
- filterbar is forced to flex-wrap: nowrap;
- overflow-x: auto;
- scrollbar is hidden;
- each filter label stays nowrap;
- sort becomes a full-width row with label + native Woo select.

Runtime symptom from the user's screenshot:
- right-side filter controls are visually clipped;
- there is no visible affordance that the row is horizontally scrollable;
- the toolbar reads as accidentally cut off rather than intentionally scrollable.

## Decision

Keep:
- native taxonomy/filter ownership;
- details-based filter panels;
- fixed mobile filter panel overlay;
- native WooCommerce sorting;
- current compact mobile controls vertical padding;
- one-row sort label + select.

Change only the mobile filterbar behavior:
- restore wrapping instead of horizontal scrolling;
- remove mobile overflow-x rail behavior;
- keep each individual label nowrap so words themselves do not break;
- reduce mobile filter gap so six live filter controls wrap cleanly into a compact multi-row editorial toolbar.

## Proposed mobile target

- filterbar: flex-wrap: wrap;
- gap: 12px 18px;
- overflow-x: visible;
- padding-bottom: 0;
- scrollbar-specific rule no longer needed.

This follows the static reference interaction model while accommodating longer real Woo taxonomy labels.

## Status

AUDIT PASS / ONE BOUNDED MOBILE CSS DEFECT IDENTIFIED / IMPLEMENTATION READY.