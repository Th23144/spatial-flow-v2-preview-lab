# Shop V2 CSS marker clarification and final patch verification — 2026-09-17

## Context
User completed the remaining Shop CSS replacements but noted an ambiguity in prior instructions around the marker comment.

## Clarification
The current marker is intentionally the opening line of a multi-line CSS comment:

```css
/* === Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase START ===
   Scope: WooCommerce product archives using the current .sf-shop-v2 markup.
   Reference: preview/spatial-flow-shop-v1.html.
   Preserves WooCommerce loop, filters, sorting, pagination, product links, wishlist, cart and checkout behavior.
   Replaces older layered Shop Visual 1 / 2 / 2.1 styling instead of adding another tiny patch.
*/
```

Do not replace only the first line with a self-closing one-line comment. Doing so would leave the following descriptive lines outside the comment and break CSS parsing.

## Verification of uploaded current CSS
- START marker: present exactly once.
- END marker: present exactly once.
- Section count typography replacement: present.
- Product card replacement block: present.
- Previous generic controlled-block `.sf-product-card__body p` rule removed from the target Shop block.
- CSS brace counts: 3548 opening / 3548 closing.
- User-approved wider Shop container remains untouched.

## Instruction quality correction
For future manual CSS edits, instructions must provide:
1. exact current source block;
2. exact replacement block;
3. unique surrounding marker/context when selectors repeat;
4. explicit statement when a marker is a multi-line comment and must not be edited.

Status: current Shop CSS patch structurally verified; proceed to runtime visual validation, not further source guessing.
