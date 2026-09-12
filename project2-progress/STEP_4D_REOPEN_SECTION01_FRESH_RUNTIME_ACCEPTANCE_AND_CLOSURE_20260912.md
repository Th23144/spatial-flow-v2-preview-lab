# Project 2 · Step 4D-REOPEN · Section 01 fresh runtime acceptance and closure · 2026-09-12

## Trigger

After Product Attributes mobile geometry and 768–1024px Gallery fill were corrected and accepted, the user supplied fresh desktop and 390px screenshots covering Section 01 from its opening through the transition into Section 02.

## Reference / source context

Reference owner:

```text
preview/spatial-flow-product-v1.html
```

Accepted Section 01 target remains:

```text
desktop long-section spacing: 96px vertical
copy grid: 5fr / 7fr
column gap: 80px
left aside: 11px mono, .24em tracking, compact top rule
left title: 22px italic serif
metadata rows: MATERIAL / EDITION / MADE / STUDIO
right body: 16px / 1.85
lede first-letter drop cap: 88px italic serif terracotta
pull quote: centered bilingual editorial interlude with only top/bottom rules
mobile: single-column stack, no horizontal overflow
```

Current data ownership remains:
- Section 01 body: WooCommerce long description / `post_content` via `the_content`;
- Material: `_sf_material`;
- Edition: `_sf_piece_edition`;
- Made: `_sf_piece_made`;
- Studio: `_sf_piece_studio`.

## Fresh desktop evidence

PASS.

Observed:
- Product Attributes bottom boundary transitions cleanly into Section 01;
- Section 01 left/right 5fr / 7fr editorial composition is intact;
- left aside top rule, `SECTION · 01`, italic `The piece, slowly.` title and four metadata rows are aligned correctly;
- first body paragraph retains the large terracotta drop cap;
- body paragraphs remain open editorial copy rather than framed/card content;
- bilingual pull quote is centered with only top/bottom hairlines;
- continuation paragraphs remain coherent;
- no white-frame regression, duplicate rule, or horizontal overflow;
- transition into the Section 02 background block is visually clean and deliberate.

The visible sample values such as `Product Attributes · Material`, `9 of one`, `Section 01 · Made`, and `Section 01 · Studio` are current editable product content and are not treated as styling defects.

## Fresh 390px evidence

PASS.

Observed:
- single-column Section 01 stack is stable;
- left metadata remains legible and aligned;
- large drop cap remains contained inside the viewport;
- paragraph line length / wrapping is coherent;
- pull quote remains centered with only top/bottom rules;
- no horizontal overflow;
- Section 01 bottom spacing into Section 02 is clean;
- Section 02 opening begins without collision or clipped typography.

## Fresh back-audit conclusion

```text
Section 01 / The Piece source structure: PASS
Section 01 desktop runtime / visual: PASS
Section 01 390px runtime / visual: PASS
Product Attributes → Section 01 transition: PASS
Section 01 → Section 02 transition: PASS
Section 01 fresh historical-PASS back-audit: USER / RUNTIME ACCEPTED / CLOSED
```

No new code change is required for Section 01.

## Current stop point

Do not resume Gift CTA / Closing Editor's Note yet.

Exact next action:

```text
fresh strict back-audit of Section 02 / Editorial Reading
→ verify current desktop + 390px runtime composition against the accepted product-level Section 02 direction
→ preserve the explicit decision that Section 02 is Editorial Reading rather than fabricated Maker Biography
→ inspect the Section 02 → Section 03 transition
→ record concrete mismatch before any edit
```

Single Product overall binary page status remains `Not done`.
