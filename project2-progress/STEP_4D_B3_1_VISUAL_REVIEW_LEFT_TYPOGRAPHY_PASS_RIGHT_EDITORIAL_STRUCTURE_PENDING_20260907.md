# Step 4D B3.1 — Visual Review: Left Typography Pass / Right Editorial Structure Pending — 2026-09-07

## Scope
Single Product — Section 01 (`The piece, slowly.`), desktop + 390px mobile visual review after B3.1 typography/metadata update.

## Evidence
User supplied current desktop and 390px mobile screenshots.

## Findings
- Left editorial metadata structure is now materially aligned with the reference owner `preview/spatial-flow-product-v1.html`: `SECTION · 01`, unified italic serif title, and unified mono rows `MATERIAL / EDITION / MADE / STUDIO`.
- Desktop and 390px responsive stacking are structurally stable; no overflow or new layout break was observed in Section 01.
- B3.1 is **not** final 1:1 yet because the right-hand editorial content semantics are still not matching the reference.
- The current first long-description word begins `moky quartz...`, so the automatic drop-cap correctly extracts `m`; the reference requires the source content to begin `Smoky quartz...` so the drop-cap becomes `S` and the remaining inline text begins `moky quartz...`.
- The bilingual line (`山有静气，石承之。 / The mountain holds a quiet air; the stone receives it.`) is currently still rendered as ordinary paragraph content rather than the reference's explicit centered pull-quote structure. The theme CSS already styles semantic `<blockquote>` content for this role; the WooCommerce long description must therefore mark that bilingual line as a blockquote rather than hard-coding product prose in the template.

## Ownership decision
No new PHP/CSS patch is justified by these two remaining visual mismatches. They are product-content structure issues in the backend-owned WooCommerce long description:
1. Correct `moky quartz...` to `Smoky quartz...`.
2. Convert the bilingual line into a semantic blockquote, with the English translation emphasized inside the quote.

## Status
**B3.1 = NOT FINAL PASS.**
Left typography = PASS.
Right editorial structure = PENDING backend content correction and one final desktop + 390px verification.
