# Project 2 · Step 4F Micro Parity owner cleanup patch prep · 2026-08-12

Status: **PREPARED OFFLINE · BYTE-AUDITED · READY FOR MANUAL INSTALL**

## Purpose

Correct code-proven strict-1:1 differences without adding another specificity patch layer.

This batch addresses:

1. legacy `spatial-flow.css` Checkout Visual ownership competing with SAFE5;
2. SAFE5 root typography inheritance;
3. Step 02 summary sticky offset;
4. Packaging boundary-note margin contract;
5. two Step 02 editable default-copy mismatches.

No JS or template change is required for this batch.

## Source baselines

### `assets/css/spatial-flow.css`
- bytes: 703,035
- logical lines: 23,543
- SHA256: `79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd`
- LF
- final newline: yes

### `assets/css/checkout-safe5.css`
- bytes: 136,199
- logical lines: 4,451
- SHA256: `4c0df0dd8d6c9f9870a361371c1aded2be8e593b5d867472090cdbade64b0128`
- CRLF
- no final newline

### `functions.php`
- bytes: 609,481
- logical lines: 11,657
- SHA256: `5668f5381675a172f751b165abeec81e92c0de7781d1f04a2b95b1513acc9a6c`
- LF
- no final newline
- version: 2.7.11

## A — `spatial-flow.css`: retire obsolete Checkout Visual stack

Delete one contiguous historical visual stack beginning with:

`/* === Checkout Visual Final IMPLEMENTATION START ===`

and ending with:

`/* === Checkout Visual 3 Mobile Refined 1.5: Header Menu + WhatsApp Balance END === */`

including the trailing blank lines immediately after the END marker.

Expected deleted span:
- 125,318 bytes
- 3,258 newline characters

Why this is safe:
- current checkout template uses `.sf-safe5-*` DOM and no `sf-checkout-*` shell classes;
- the deleted stack is a historical visual evolution layer;
- it contains the confirmed competing `product-quantity`, item-row, thumbnail, meta, totals and old summary visual rules;
- later functional Checkout fixes such as terms checkbox, variation-display guard and notice visibility are outside this deletion boundary and remain intact.

Target identity:
- bytes: 577,717
- logical lines: 20,285
- SHA256: `4d54dcfc1bee2f55bbdd93df1e31cc0e155d6b9cdff917f141086bc25a2bb4b3`
- LF
- final newline: yes
- `{` / `}` = 3227 / 3227
- `/*` / `*/` = 275 / 275
- tinycss2 top-level parse errors: 0

After deletion there are no Checkout `product-quantity` visual selectors left in `spatial-flow.css`; remaining `product-quantity` selectors are Cart-only.

## B — `checkout-safe5.css`: correct existing SAFE5 owners

### B1 root typography

Inside the existing `.sf-safe5-checkout` root owner, after `color: var(--sf-safe5-ink);`, add:

```css
font-family: var(--sf-safe5-sans);
font-weight: 400;
line-height: 1.55;
-webkit-font-smoothing: antialiased;
```

This mirrors the formal reference body typography baseline and prevents Astra/upstream 600-weight inheritance.

### B2 summary sticky

Replace the existing SAFE5 summary owner value:

`top: 112px;`

with:

`top: 136px;`

### B3 Packaging boundary margin

Inside the existing `.sf-safe5-packaging-boundary-note` owner replace:

`margin: 22px 0;`

with:

`margin: 0 0 22px;`

Target identity:
- bytes: 136,322
- logical lines: 4,455
- SHA256: `56a2dacaef912c95024ef5a437003178d954731f15218f467b6abcac4b648774`
- CRLF
- no final newline
- `{` / `}` = 527 / 527
- `/*` / `*/` = 24 / 24
- tinycss2 top-level parse errors: 0

## C — `functions.php`: reference copy + version

### C1 version
`2.7.11 -> 2.7.12`

### C2 Step 02 intro text
Replace:

`Select the delivery pace that fits this order. The final amount updates before payment begins.`

with:

`Choose how your order will be delivered and how the products inside should be packaged before payment.`

### C3 Step 02 shipping note
Replace:

`Available delivery methods are calculated by WooCommerce for this address and cart. Final availability and cost remain store-controlled.`

with:

`Choose one of the delivery methods available for this address and order.`

Both keys remain in SAFE5 backend-editable copy ownership / Customizer.

Target identity:
- bytes: 609,425
- logical lines: 11,657
- SHA256: `5899f74e0a4ed6aa9c1579f50b7a5a06c9f9cd68ede6d02b386ca10cdd6ffd54`
- LF
- no final newline
- version: 2.7.12
- PHP syntax: passed

## Files not changed

- `woocommerce/checkout/form-checkout.php` — no change
- `assets/js/checkout-safe5.js` — no change

## Post-install validation

After all three files match target identities, browser QA should confirm:

- standalone Woo `× 1` row disappears while `Qty 1` remains in SAFE5 meta;
- product row / thumbnail / meta styles are controlled by SAFE5 only;
- inherited auxiliary typography moves from 600 to 400 baseline;
- summary sticky starts at 136px on desktop;
- Packaging boundary note returns to formal reference spacing;
- Step 02 intro and Shipping note match formal reference copy;
- Woo shipping/payment/order authority remains unchanged.

Do not add any new tail FIX block if a remaining discrepancy is found. Any next correction must modify the surviving SAFE5 owner or an explicitly identified functional owner in place.
