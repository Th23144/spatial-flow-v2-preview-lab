# Step 4F · Single Product B4 Mobile Disclosure 2.7.36 Source PASS · 2026-09-08

## Scope
Single Product · Section 02 Editorial Reading mobile long-form disclosure only.

This round implements the user-approved interaction preview:
- mobile long-form body collapses to a fixed preview height;
- text ends with a soft fade;
- the fade area exposes `↓ CONTINUE READING` as the disclosure affordance;
- expanding reveals the full article;
- `COLLAPSE ↑` appears after the full article;
- collapsing returns the viewport near the reading block;
- short articles do not receive disclosure controls;
- desktop behavior remains unchanged.

## Returned files audited
- `functions.php`
- `assets/js/spatial-flow.js`
- `assets/css/spatial-flow.css`

## Source validation
### functions.php
- `SPATIAL_FLOW_CHILD_VERSION` = `2.7.36` exactly once.
- PHP syntax: PASS (`php -l`).

### spatial-flow.js
- JavaScript syntax: PASS (`node --check`).
- `setupProductReadingDisclosure()` contains the approved `body-shell`, `continue`, and `collapse` implementation.
- `CONTINUE READING` present once.
- `COLLAPSE` present once.
- old `.sf-product-v2-reading__toggle` implementation count: 0.
- `setupProductReadingDisclosure()` remains called by `init()`.
- disclosure function braces balanced.

### spatial-flow.css
- full-file braces balanced: 3335 `{` / 3335 `}`.
- old `.sf-product-v2-reading__toggle` selectors: 0.
- approved `.sf-product-v2-reading__continue`, `.sf-product-v2-reading__collapse`, and `.sf-product-v2-reading__body-shell` rules present.
- `@media (max-width: 767px)` is properly closed before the `@media (max-width: 480px)` block.
- previously missing media-query closing brace is corrected.
- `Step 4D-B4 Section 02 Editorial Reading END` marker remains present exactly once.

## File metrics
- `functions.php`: 617,930 bytes / 11,808 lines.
- `spatial-flow.css`: 602,230 bytes / 21,229 lines.
- `spatial-flow.js`: 83,454 bytes / 2,409 lines.

## Verdict
**SOURCE PASS.**

No further source edit is required before runtime visual verification.

## Next manual verification
Use a mobile viewport around 390 px and verify one long Section 02 article:
1. initial state starts at the beginning of the article;
2. bottom of the preview fades naturally;
3. `↓ CONTINUE READING` is visible, centered, and clickable;
4. tapping it expands the full article;
5. `COLLAPSE ↑` appears after the full article and does not collide with Reading / Pairing / Reads;
6. tapping collapse returns to the reading block without jumping into the middle of the article;
7. desktop Section 02 remains unchanged.

Do not reopen unrelated Single Product / Checkout work unless new evidence appears.