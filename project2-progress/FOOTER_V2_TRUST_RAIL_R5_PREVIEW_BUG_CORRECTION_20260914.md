# Footer V2 — R5 preview bug correction

Date: 2026-09-14
Project: Spatial Flow V2 / 项目二换皮工程
Subsystem: Main-site Footer V2 static prototype
Status: STATIC PREVIEW BUG — CORRECTED DIRECTION

## User report
The R5 preview rendered duplicated trust descriptions. Each trust item contained both the new concise sentence and the older longer paragraph, while the compact grid CSS forced the older paragraph into an extremely narrow track. This produced the vertical one-word/one-character wrapping visible in the user's screenshot.

## Clarification
This was a prototype construction bug, not evidence that R3-width trust columns cannot hold a concise explanatory line.

## Correct direction
Retain the R3 three-column width and lightweight geometry, but keep exactly one concise explanatory sentence per trust item. Remove the older duplicate long paragraph entirely.

Target content density:
- Worldwide Shipping — one short explanatory sentence.
- 30-Day Returns — one short explanatory sentence.
- Authentic Materials — one short explanatory sentence.

The trust rail should remain compact and secondary to the Footer navigation/brand hierarchy.

## Production state
No production Footer code is changed by this correction. Main-site Footer V2 remains in static prototype iteration.
