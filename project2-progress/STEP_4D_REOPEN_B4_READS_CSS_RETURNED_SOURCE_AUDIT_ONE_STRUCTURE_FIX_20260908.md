# Step 4D Reopen B4 — Reads CSS Returned Source Audit: One Structure Fix

Date: 2026-09-08
Branch: main

## Scope
Audit the user-returned B4.1 files after adding the optional Section 02 `READS` editorial link.

## Result
- `functions.php`: PHP syntax PASS. Version is 2.7.32. Section 02 Reads link text field, URL field, save handling, and URL sanitization are present.
- `single-product.php`: PHP syntax PASS. Reads text/URL retrieval and conditional third meta row/link rendering are present.
- `spatial-flow.css`: NOT PASS yet. The newly added `.sf-product-v2-reading__meta a` rule was inserted immediately after the opening line of `.sf-product-v2-reading__meta strong {`, before the strong rule's declarations. Brace counts remain balanced, but the rule structure is malformed and can cause the browser to discard/misparse declarations.

## Required correction
Replace the whole region beginning with `.single-product .sf-product-v2-reading__meta strong {` and ending immediately before `@media (max-width: 1100px)` with one canonical block containing:
1. the complete `strong` rule,
2. then the new `a` rule,
3. then the nested arrow `a span` rule,
4. then hover/focus styling.

No PHP file needs to be resent for this correction unless another change is made. After the CSS is corrected, re-audit the returned CSS before runtime testing.
