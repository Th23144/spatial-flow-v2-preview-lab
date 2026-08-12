# Step 4F · Micro 1:1 Code Contract Audit · 2026-08-12

Status: **STRICT 1:1 NOT PASSED · CODE-LEVEL MISMATCHES CONFIRMED · NO NEW LIVE SOURCE EDIT IN THIS RECORD**

## Scope

Audit current live SAFE5 Step 02 against the canonical static reference from source code first, with screenshots used only as runtime confirmation.

Canonical reference owners:
- `preview/spatial-flow-checkout-shipping-v1.html`
- `preview/spatial-flow-checkout-flow-v1.css`
- `preview/spatial-flow-checkout-context-v1.css`
- `preview/spatial-flow-checkout-packaging-v1.css`
- `preview/spatial-flow-checkout-packaging-v3.css`
- `preview/spatial-flow-checkout-packaging-v5.css`
- `preview/spatial-flow-checkout-packaging-v6.css`
- `preview/spatial-flow-checkout-packaging-v8-itemcentric.css`

Current live source identities already accepted for source integrity:
- `functions.php`: 609,481 bytes; SHA256 `5668f5381675a172f751b165abeec81e92c0de7781d1f04a2b95b1513acc9a6c`; version 2.7.11.
- `woocommerce/checkout/form-checkout.php`: 37,311 bytes; SHA256 `88e99eff737a8626dfee557584386a2cd1ca13c88aec9fa3988c20affddab412`.
- `assets/css/checkout-safe5.css`: 136,199 bytes; SHA256 `4c0df0dd8d6c9f9870a361371c1aded2be8e593b5d867472090cdbade64b0128`.
- `assets/js/checkout-safe5.js`: 56,572 bytes; SHA256 `496f5af965939c4f838a64a306761d4f151ab88c1acbe4b3980b884687ef0448`.

Source integrity acceptance does **not** mean visual 1:1 acceptance.

## Confirmed exact / already aligned

### Shared desktop geometry
Live runtime at 1920px viewport:
- shell = 1440px
- left/right gutter = 56px
- main/summary = 728px / 520px
- column gap = 80px

This exactly matches the canonical reference contract `1440 / 56 / 7fr:5fr / 80`.

### Large parts of Summary dimensional contract
Current SAFE5 source intentionally matches reference values including:
- Summary padding 36px
- heading 31px / weight 300
- product thumb 64px desktop
- product title and price 17px
- meta 8px / tracking .14em
- item gap 20px
- totals gap 13px / padding-top 22px
- total value 28px

### Custom B item-centric core
Current SAFE5 source already matches much of accepted v8 item-centric contract including:
- item rows 11px 14px desktop
- item title 15px
- item meta 7px / .07em
- assignment slots nowrap, 56px x 32px desktop
- v8 package-row grid/gap and mobile 3-column assignment layout in the current owner

These aligned values remain protected.

## Confirmed code-level mismatches

### 1. Font asset contract is not identical
Canonical Step 02 imports:
- Cormorant Garamond: normal 300/400/500 and italic 300/400
- Inter: 300/400/500/600
- JetBrains Mono: 400/500
- Noto Serif SC: 400/500

Current live `functions.php` imports:
- Cormorant Garamond normal 300/400/500/600 and italic 400/500/600
- Inter 300/400/500/600
- JetBrains Mono 400/500
- **no Noto Serif SC**

Therefore reference italic 300 is absent in live while many reference italic headings explicitly use weight 300. Browser synthesis can visibly alter stroke/shape. This is a deterministic source mismatch and a likely root cause of the user's font complaint.

### 2. SAFE5 root typography baseline is incomplete
Reference `body` establishes:
- `font-family: var(--sans)`
- `font-weight: 400`
- `line-height: 1.55`
- `-webkit-font-smoothing: antialiased`

Current `.sf-safe5-checkout` root establishes tokens and color but does not establish all four baseline properties. Elements without explicit local ownership can therefore inherit Astra/Woo/parent typography instead of the static reference baseline.

### 3. Step 02 intro copy is not the canonical reference copy
Reference:
`Choose how your order will be delivered and how the products inside should be packaged before payment.`

Current live default:
`Select the delivery pace that fits this order. The final amount updates before payment begins.`

Different content length changes wrapping and vertical rhythm; this is not strict 1:1.

### 4. Shipping panel note copy is not the canonical reference copy
Reference:
`Choose one of the delivery methods available for this address and order.`

Current live default:
`Available delivery methods are calculated by WooCommerce for this address and cart. Final availability and cost remain store-controlled.`

WooCommerce may remain the functional truth owner without requiring this visible copy to differ from the accepted reference.

### 5. Summary sticky top differs
Reference `checkout-side`:
`top: 136px`

Current live `.sf-safe5-summary`:
`top: 112px`

This is a direct geometry mismatch in sticky state.

### 6. Context-card mobile breakpoint differs
Reference context owner switches at `max-width: 720px`.
Current live Step 02 context-card visual rules switch at `max-width: 767px`.
Therefore 721–767px cannot be source-identical to reference.

### 7. Packaging boundary-note margin is currently not the final static-chain value
Canonical `spatial-flow-checkout-packaging-v1.css` defines:
`margin: 0 0 22px`.
Later accepted v3/v5/v6/v8 layers do not replace that boundary-note margin.

Current live owner uses:
`margin: 22px 0`.

The recent live Micro Parity pass therefore introduced a deterministic top-margin divergence and must be corrected rather than judged by eye.

### 8. Breadcrumb surface is missing from live Step 02
Canonical Step 02 contains:
`Home / Your Bag / Checkout · Shipping`
with a dedicated `.woocommerce-breadcrumb` contract.
Current SAFE5 template does not render an equivalent breadcrumb surface.
Strict whole-page 1:1 cannot be declared while this reference DOM surface is absent.

### 9. Product quantity runtime DOM remains unresolved
Current PHP moves `Qty N` into `.sf-cart-item-meta` and current SAFE5 CSS declares `.product-quantity { display:none !important; }`.
However the user's latest desktop and mobile screenshots still visibly show a separate `× 1` line.

This means the runtime DOM/computed-style contract is not actually satisfied despite source intent. Do not guess. Next diagnostic must identify the exact element/class producing `× 1` after Woo/AJAX rendering and the computed winner, including any legacy `spatial-flow.css` rules.

### 10. Legacy checkout CSS remains an active competing layer
`assets/css/spatial-flow.css` still contains older Checkout summary rules, including product row borders/paddings, mobile 52px thumbnail/radius rules and `.sf-cart-item-meta` constraints.
SAFE5 overrides many of them, but strict 1:1 requires checking the **computed winner**, not merely assuming the later SAFE5 source wins every property.

## Current verdict

**NOT STRICT 1:1.**

The current page is functionally correct and substantially closer, but several deterministic source contracts still differ from the accepted reference. Visual screenshots are consistent with these source findings, especially typography and Summary density.

## Next execution order

1. Run one computed-style / runtime-DOM diagnostic on the live Step 02 for:
   - actual loaded font faces and computed fonts on title / italic word / panel title / item title / mono meta;
   - exact element producing the visible `× 1`;
   - computed Summary product-row / thumb / meta / price properties;
   - computed Packaging representative item/package properties.
2. In one bounded correction batch, fix deterministic source mismatches:
   - font import contract;
   - SAFE5 root typography baseline;
   - Step 02 visible copy contract;
   - sticky top;
   - context breakpoint;
   - Packaging boundary-note margin;
   - runtime quantity owner once identified.
3. Handle Breadcrumb / Checkout chrome as a named owner, not an incidental visual patch.
4. Re-run computed-style parity audit before screenshot acceptance.
5. Use same-viewport screenshots only as the final visual verification layer.

Batch 6 remains paused. Product Packaging / Step 02 strict 1:1 acceptance remains open.
