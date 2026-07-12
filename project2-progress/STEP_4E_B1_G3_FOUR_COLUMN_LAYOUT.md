# Step 4E-B1-G3 · Controlled Four-Column Recommendation Layout

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-G2：Passed exact file validation and four-card browser evidence.
Step 4E-B1-G3 instructions：Issued.
User manual CSS edit：Pending.
Cart page status：Not done.
```

## 1. Purpose

Convert the real Complete Your Space recommendation grid to four equal columns on desktop while preserving the existing responsive fallbacks:

```text
>= 1101px：4 columns
768px–1100px：existing 3 columns
<= 767px：existing 1 column
```

This is an in-place controlled replacement of one existing authoritative selector block. It does not append another Cart patch stack.

## 2. Authoritative baseline

```text
File: assets/css/spatial-flow.css
Uploaded baseline name: spatial-flow(2).css
Size: 767,069 bytes
Lines: 25,742
SHA256: a8db33e2cd3e7886a12a455383fe6769cbd262e7e6d6fac8003aa46fe641a10d
Opening braces: 3,917
Closing braces: 3,917
Opening comments: 397
Closing comments: 397
CSS parse errors: 0
```

Unchanged PHP baseline:

```text
functions.php uploaded name: functions(11).php
Version: 2.7.8
Size: 550,596 bytes
Lines: 10,248
SHA256: 1db56fccbcfaf2a744e631c5da71c14a9be66cec87d99946e906b8f3aa84366f
```

If the local CSS differs from the exact baseline above, stop and supply the newest CSS before editing.

## 3. Exact replacement

Search for this exact complete block:

```css
body.woocommerce-cart .sf-cart-next-steps--products .sf-cart-next-steps__grid {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  gap: 18px !important;
  width: 100% !important;
  max-width: none !important;
  margin: 28px 0 0 !important;
  padding: 0 !important;
  overflow: visible !important;
}
```

This exact block must occur once.

Replace it exactly with:

```css
@media (min-width: 1101px) {
  body.woocommerce-cart .sf-cart-next-steps--products .sf-cart-next-steps__grid {
    display: grid !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    gap: 18px !important;
    width: 100% !important;
    max-width: none !important;
    margin: 28px 0 0 !important;
    padding: 0 !important;
    overflow: visible !important;
  }
}
```

Why the media wrapper is required:

```text
- the earlier historical base block already provides three columns
- the new final block should override it only on desktop
- tablet therefore keeps the existing three-column behavior
- the later <=767px blocks continue to enforce one mobile column
```

## 4. Expected file result

When line endings remain unchanged:

```text
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Opening braces: 3,918
Closing braces: 3,918
Opening comments: 397
Closing comments: 397
CSS parse errors: 0
Delta: +51 bytes / +2 lines
```

The predicted output was generated from the authoritative CSS baseline and parsed with zero CSS errors.

## 5. Expected visible result

At a viewport width of at least 1101px:

```text
- all four real recommendation cards appear in one row
- the cards have equal grid widths
- the fourth card no longer wraps beneath the first card
- the Complete Your Space container remains unchanged
```

At 768px–1100px:

```text
- the existing three-column layout remains
```

At 767px and below:

```text
- the existing one-column mobile stack remains
- no horizontal scrolling or half-card display is introduced
```

Because `SPATIAL_FLOW_CHILD_VERSION` is intentionally unchanged in this CSS-only step, use a hard refresh after saving.

## 6. What must not change

```text
- functions.php
- SPATIAL_FLOW_CHILD_VERSION 2.7.8
- spatial-flow.js
- recommendation PHP count or data priority
- product names, images, descriptions, prices, IDs, or URLs
- Cart totals, quantity, remove, coupon, shipping, checkout, or notices
- SAFE5 Checkout or Thank You
- WooCommerce templates
- plugins or database structure
- mobile grid rules
```

## 7. Independent rollback

Replace only the new media-wrapped block with the original exact three-column block.

No other CSS or PHP needs to be restored.

## 8. Required evidence before the next step

```text
- upload of the edited spatial-flow.css
- exact size, lines, hash, brace/comment balance, and CSS parse validation
- desktop screenshot showing four cards in one row
- mobile screenshot confirming the existing one-column stack and no horizontal overflow
```

Do not begin any later Cart CSS cleanup or visual refinement until this exact replacement is validated.