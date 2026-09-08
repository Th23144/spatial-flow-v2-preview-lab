# Step 4D Reopen B4 — Reads frontend PASS + new findings — 2026-09-08

## Reads frontend verification
PASS.

User confirmed Section 02 third metadata item now renders as:
- `READS`
- `Studio visit →`

The former `CONTEXT / 123` placeholder is gone and the editorial Reads link is visible in the intended reference-style position.

## New finding A — Section 02 long-copy robustness
The Section 02 layout currently behaves correctly with short/medium editorial copy but breaks visually when a full-length story is entered. The user demonstrated:
- very short copy: layout normal;
- full story: right copy becomes much taller and the left media/layout stretches into an undesirable composition;
- manually shortened story: layout normal again.

This should be treated as a layout robustness defect, not as an editorial character-limit requirement. Product-editable narrative copy should not have to be artificially shortened just to preserve layout.

Recommended direction: keep the reference composition for short copy, but stop the media from stretching with long copy. Let long text increase section height naturally while keeping the media at its intended aspect ratio.

## New finding B — Hero reference content missing in live product page
Reference `preview/spatial-flow-product-v1.html` contains two elements that the current live product hero does not currently render:
1. product-specific subtitle directly below the product title (reference example: `A bracelet of weathered smoke and quiet weight.`);
2. shipping/fulfilment note associated with the price (reference example: `Free shipping over $80 · Ships in 3 days from Lisbon`).

These must not be blindly hard-coded from the static reference because the live site's operational shipping truth differs and can change. Recommended ownership:
- subtitle: per-product backend-editable field;
- shipping/fulfilment note: global/backend-editable operational text or dynamically derived store policy, not static reference copy.

No implementation started yet. Await consolidated user decision before modifying source.
