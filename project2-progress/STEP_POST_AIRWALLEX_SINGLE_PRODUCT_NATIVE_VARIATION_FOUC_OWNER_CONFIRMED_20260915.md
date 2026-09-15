# Post-Airwallex — Single Product native variation FOUC owner confirmed — 2026-09-15

## Trigger
Fresh user screenshot shows native WooCommerce variation selects briefly visible during hard refresh before the accepted visual variation controls appear.

## Current owner chain confirmed
Recent current-project source evidence shows:

### `woocommerce/single-product.php`
The Product Options wrapper server-renders:
- `data-sf-variation-swatch-data` JSON when visual variation data exists;
- then native `woocommerce_template_single_add_to_cart()`.

Therefore native WooCommerce variation form is intentionally present in first HTML and remains the transaction/state authority.

### `assets/js/spatial-flow.js`
The visual variation enhancement runs after page parsing. It:
1. reads `data-sf-variation-swatch-data`;
2. creates `.sf-variation-visual` and `.sf-variation-choice` controls;
3. inserts that visual UI before `table.variations`;
4. only after insertion adds `.sf-visual-variations-ready` to the native variation form.

### `assets/css/spatial-flow.css`
Native `table.variations` is visually clipped only under:

```css
.sf-visual-variations-ready table.variations { ... }
```

## Exact root cause
The native table is visible from first HTML paint until external `spatial-flow.js` creates the visual controls and adds `.sf-visual-variations-ready`.

So the current screenshot is a true first-paint FOUC. It is not:
- the previously closed WooCommerce BlockUI white-wash defect;
- broken variation synchronization;
- a reason to replace WooCommerce native variation state.

## Safe fix architecture
Use a bounded pre-paint progressive-enhancement guard, matching the already accepted Checkout Step01 design principle:

1. Inside the server-rendered Product Options wrapper, before native `woocommerce_template_single_add_to_cart()`, synchronously add a preparing class to the wrapper when visual variation JSON exists and JavaScript is available.
2. CSS clips/hides only the native `table.variations` while the preparing class is present.
3. Existing visual enhancement builds `.sf-variation-visual` and adds `.sf-visual-variations-ready`; the existing ready-state CSS then remains authoritative.
4. A bounded timeout removes the preparing class. If the enhancement script fails, the native WooCommerce table therefore returns automatically as fallback.
5. Do not permanently hide `table.variations`; do not duplicate variation state; do not change WooCommerce variation events, price, stock, quantity or Add to Cart ownership.

## Current-live write gate
Before applying the patch, use the exact current live copies of:
- `woocommerce/single-product.php`
- `assets/css/spatial-flow.css`

`assets/js/spatial-flow.js` does not need a business-logic edit for this repair if the current ready-class behavior matches the audited source; it is still part of the post-fix runtime regression gate.

Status: ROOT CAUSE / OWNER CONFIRMED. Current-live two-file write gate pending.
