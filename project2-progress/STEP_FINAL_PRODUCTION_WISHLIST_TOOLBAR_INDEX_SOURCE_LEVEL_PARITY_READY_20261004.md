# Final Production Wishlist — Toolbar / Index Source-Level Parity Ready

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Authority audit
Static authority: `preview/spatial-flow-wishlist-harmonized-v1.html`.

The current H03 production CSS still contains several declarations that are not present in the final static authority computed desktop cascade.

### Toolbar differences
Static final:
- padding: 8px var(--pad);
- no min-height declaration;
- line-height inherited from body (1.5);
- `.toolbar-actions` = display:flex; gap:22px; no align-items declaration;
- action links inherit toolbar text color (`mute`), while their underline is `ink`;
- action link font = 500 10px/1 sans;
- toolbar border-color = ink.

Current H03 extra/drift:
- min-height: 60px;
- line-height: 1.35;
- toolbar-actions align-items:center;
- action links force color: ink.

### Index differences
Static final index geometry already matches H03:
- padding 18px pad 8px;
- flex-wrap wrap;
- gap 8px 28px;
- button min-height 44px;
- font size 11px;
- letter spacing .09em.

Remaining source-level drift:
- H03 forces button line-height 1.3 through font shorthand;
- static inherits body line-height 1.5;
- static button reset includes appearance:none / -webkit-appearance:none.

Product-title wrapping is content-driven. User will temporarily rename the six products to match the static authority, so no layout hack should be added for the current long bracelet titles.

## Static image recovery
All six authority product images are embedded directly in the static HTML as JPEG data URLs. They have been recovered without regeneration:
01 Vessel No. 04
02 Heavy Linen Throw
03 Travertine Catch Tray
04 Blackened Ash Stool
05 Moss & Vetiver Candle
06 Threadbound Journal

## Exact CSS patch target
Baseline returned CSS:
- bytes: 609,263
- logical lines: 21,675
- SHA256: `8e7b5b3f8e6aee2c614db2fa642560ad8e3ff183772af08fa4079fae21fe9923`

After source-level toolbar/index parity patch:
- bytes: 609,303
- logical lines: 21,676
- SHA256: `d809cea66ca7f32407761335c6522dd00487dd5a7e0ad90de9e0deb237cf1dab`
- CSS brace delta: 0

No PHP / JS / YITH / Woo / item geometry / Header / Footer / palette changes.

Status: SOURCE-LEVEL PARITY PATCH = READY.