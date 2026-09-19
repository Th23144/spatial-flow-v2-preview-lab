# Shop V2 — Mobile Pagination Compact V3 runtime defect: center tokens hidden by selector specificity

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime evidence

After the accepted Compact V3 five-token phone pagination CSS was applied, the user reported:
- page 2 shows only a single center number (`5`);
- other tested pages do not show the intended center five-token cluster.

The supplied screenshot confirms:
- Previous remains at left;
- Next page remains at right;
- the intended current/neighbor token cluster is missing;
- a stray `5` is visible in the center on page 2.

## Root cause

The Compact V3 hide rule is too specific:

`li:not(:has(> a.prev.page-numbers)):not(:has(> a.next.page-numbers)) { display:none !important; }`

The later reveal rules for current / +/- neighbors also use `display:block !important`, but their selector specificity is lower than the hide rule in several cases.

Because both declarations are `!important`, specificity decides the winner. The hide rule therefore continues to hide the current page and most neighbor page items.

The isolated `5` appears because one of the edge-compensation selectors has enough specificity to win, so that one token is revealed while the normal current/neighbor tokens remain hidden.

This is a CSS selector-specificity defect, not a WooCommerce pagination-data defect.

## Corrective direction

Keep the accepted Compact V3 composition and all existing WooCommerce pagination ownership.

Phone only:
1. replace the high-specificity exclusion hide rule with a simple low-specificity blanket hide for pagination li items;
2. explicitly re-show real Previous and Next items;
3. retain the existing current +/-2 and edge-compensation reveal rules.

No PHP / JS / template change.

Desktop pagination remains unchanged.
Closing Note remains unchanged.

Status:
COMPACT V3 VISUAL DIRECTION RETAINED / CSS SPECIFICITY HOTFIX READY.
