# Project 2 · Step 4D-REOPEN · Section 01 fresh source back-audit PASS / runtime pending · 2026-09-12

## Scope
Fresh strict back-audit of Product Attributes → Section 01 / The Piece → Section 02 transition ownership.

## Evidence re-read
- `preview/spatial-flow-product-v1.html`
- current returned `assets/css/spatial-flow.css` at child version 2.7.46
- latest available post-Gallery `single-product.php` source in the user's File Library
- historical B3/B3.1 final acceptance records
- fresh 390px screenshot showing Product Attributes and the beginning of Section 01 after the 2x2 correction

## Reference contract re-confirmed
Section 01 reference target:
- desktop section vertical padding: 96px;
- two-column composition: 5fr / 7fr;
- gap: 80px;
- left aside: 11px mono, .24em tracking, uppercase, line-height 2, one top hairline, 24px top padding;
- title: italic serif 22px / 1.3;
- metadata semantics: Material / Edition / Made / Studio;
- body: 16px / 1.85;
- first-body drop cap: 88px italic terracotta serif;
- semantic blockquote/pull quote: centered, top/bottom hairlines, no Astra side decoration;
- <=1100px: collapse to one column, 48px gap;
- <=480px: section vertical padding 56px.

## Current source result
Current `spatial-flow.css` matches the reference contract on the audited Section 01 rules:

```text
.sf-product-v2-piece
margin-top: 0
padding: 96px 0
border-top: 0
border-bottom: 1px solid #d9d1c4

.sf-product-v2-piece__grid
5fr / 7fr
80px gap
align-items: start

.sf-product-v2-piece__aside
24px top padding
1px top hairline
11px mono
.24em tracking
line-height 2

aside h2
22px italic serif

body
16px / 1.85

manual dropcap span
88px italic terracotta

blockquote
centered
only top/bottom hairlines
Astra pseudo quote decorations suppressed

<=1100
one column / 48px gap

<=480
56px vertical section padding
```

No later duplicate `.sf-product-v2-piece*` overrides were found in the returned CSS.

## Current template ownership result
Latest available post-Gallery template evidence preserves:
- `$sf_piece_content = trim( get_post_field( 'post_content', product_id ) )` as WooCommerce long-description source;
- Section 01 renders only when long description is non-empty;
- metadata rows are Material / Edition / Made / Studio;
- empty metadata rows are filtered out;
- rendered long description passes through `the_content`;
- first meaningful character receives the controlled Section 01 drop-cap wrapper;
- Section 02 follows directly after Section 01.

## Fresh visual evidence already available
The latest 390px screenshot after Product Attributes correction confirms the top transition into Section 01 is structurally normal:
- Product Attributes ends cleanly;
- Section 01 retains the expected vertical breathing room;
- the Section 01 aside top rule is visible separately from the Product Attributes lower boundary;
- `SECTION · 01` and `The piece, slowly.` are aligned and not horizontally overflowing.

This is only partial runtime evidence because the screenshot does not show the complete Section 01 body / drop cap / blockquote / Section 01→02 transition.

## Classification

```text
SECTION 01 SOURCE / STRUCTURE BACK-AUDIT: PASS
PRODUCT ATTRIBUTES → SECTION 01 TOP TRANSITION: PARTIAL RUNTIME PASS
FULL CURRENT SECTION 01 RUNTIME / VISUAL: PENDING FRESH EVIDENCE
NO SOURCE EDIT AUTHORIZED
```

## Exact next action
Request only two bounded fresh views:
1. desktop Section 01 from its top rule through the beginning of Section 02;
2. 390px Section 01 from its top rule through the beginning of Section 02.

Use those to verify current drop cap, paragraphs, optional blockquote/pull quote, metadata, spacing, no overflow, and Section 01→02 transition before closing Section 01 fresh back-audit.
