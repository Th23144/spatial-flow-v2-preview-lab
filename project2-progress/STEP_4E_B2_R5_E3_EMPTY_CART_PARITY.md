# Step 4E-B2-R5-E3 · Empty-Cart Wrapper and State Parity

Last updated: 2026-07-15  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E2 synchronized live counts：Passed / closed.
R5-E3 manual CSS edit：Passed exact pre-deploy validation.
Current executable step：Deploy spatial-flow(20).css and run browser validation.
Cart page status：Not done.
```

Pre-deploy record:

```text
project2-progress/STEP_4E_B2_R5_E3_PRE_DEPLOY_VALIDATION.md
```

## Purpose

Make these two states use the same stable full-width empty-Cart composition:

```text
A. Cart becomes empty after removing the final product.
B. Browser directly opens a Cart that was already empty.
```

The defect occurred because `.wc-empty-cart-message` is the direct CSS-grid child, while only its nested `.cart-empty` element previously received full-grid ownership.

## Scope

Modified only:

```text
assets/css/spatial-flow.css
```

Not modified:

```text
functions.php
assets/js/spatial-flow.js
header.php
WooCommerce templates
Customizer values
version 2.7.8
Cart Notice block
heading spacing
desktop width
```

## Accepted artifact

```text
Uploaded name: spatial-flow(20).css
Size: 695,392 bytes
Logical lines: 23,306
SHA256: 19701ba3ee9944784939bef50dc94d81ccefba46e4df6be279edabc3c03c22e8
Braces: 3,619 / 3,619
Comments: 340 / 340
Target selector occurrences: 1
```

This matches the predicted R5-E3 artifact exactly.

## Accepted bounded change

Inside the existing Canonical Cart full-grid selector list, this one line was added:

```css
body.woocommerce-cart .wc-empty-cart-message,
```

The resulting selector list now assigns `grid-column: 1 / -1` to the real direct empty-Cart grid child. The nested `.cart-empty` selector remains for compatibility.

No template override, JavaScript state class or late appended patch is used.

## Browser validation after deployment

### State A · transition to empty

```text
1. Begin with at least one product.
2. Remove the final product without manually refreshing.
3. Confirm empty message and Return to Shop form one coherent full-width composition.
4. Confirm Header BAG remains (0).
5. Confirm native notice/Undo remains functional while present.
```

### State B · direct fresh empty load

```text
1. Keep Cart empty.
2. Open the Cart URL in a new tab or force-refresh it.
3. Confirm the empty message has the same width/alignment as State A.
4. Confirm Return to Shop has the same placement as State A.
5. Confirm there is no left-column confinement or unused fake right column.
```

### Required viewports

```text
Desktop at 100% browser zoom.
Phone at the current production test width.
```

### Non-empty smoke check

Re-add one original product and confirm:

```text
- normal Cart layout remains unchanged
- quantity and live counts still work
- Order Summary remains present
- no horizontal overflow
```

## Required report

```text
R5-E3 transition-to-empty desktop：Passed / Failed
R5-E3 direct-empty desktop：Passed / Failed
R5-E3 transition-to-empty phone：Passed / Failed
R5-E3 direct-empty phone：Passed / Failed
Return to Shop：Passed / Failed
Undo during transition：Passed / Failed
Non-empty Cart smoke check：Passed / Failed
Original Cart restored：Yes / No
```

Do not begin R5-E4 until R5-E3 is explicitly accepted.