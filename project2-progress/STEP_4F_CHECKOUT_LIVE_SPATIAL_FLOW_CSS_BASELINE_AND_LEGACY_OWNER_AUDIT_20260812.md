# Project 2 · Checkout live `spatial-flow.css` baseline + legacy owner audit · 2026-08-12

Status: **LIVE BASELINE CAPTURED · LEGACY CHECKOUT VISUAL OWNERS CONFIRMED · NEXT MICRO-PARITY PATCH CAN BE PREPARED**

## Current live shared CSS baseline

User supplied the current live file:

- `assets/css/spatial-flow.css`
- bytes: `703,035`
- logical lines: `23,543`
- newline style: LF
- final newline: yes
- SHA256: `79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd`

This replaces earlier July copies as the only valid baseline for the upcoming shared-CSS cleanup.

## Confirmed legacy Checkout visual stack still present

The live shared CSS still contains one copy each of the historical Checkout visual blocks, including:

- `Checkout Visual Final IMPLEMENTATION`
- `Checkout Visual 1.1 ORDER SUMMARY PRODUCT THUMBNAILS`
- `Checkout Visual 1.2 ORDER SUMMARY ROW LAYOUT HOTFIX`
- `Checkout Visual 1.3 ORDER SUMMARY WIDTH + PAYMENT BADGE HOTFIX`
- `Checkout Visual 1.4 ORDER CARD + PAYMENT NOTICE HOTFIX`
- `Checkout Visual 2` through `2.6.2`
- `Checkout Visual 3.1`
- `Checkout Visual 3 Mobile Refined Preview Alignment`
- Mobile Refined `1.1` through `1.5`

These are pre-SAFE5 visual owners and remain loaded before `checkout-safe5.css`.

## Runtime conflict confirmed by source

The live shared CSS contains legacy selectors such as:

```css
body.woocommerce-checkout:not(.woocommerce-order-received)
  #order_review table.shop_table .product-name .product-quantity {
  display: block !important;
  margin-top: 8px !important;
  font-size: 12px !important;
  font-weight: 850 !important;
}
```

The current SAFE5 owner contains:

```css
body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-summary-card
  #order_review.sf-safe5-order-review
  .product-quantity {
  display: none !important;
}
```

Browser runtime audit showed the legacy rule wins by specificity and produces the visible `× 1` row. This is a confirmed cascade-owner conflict, not a Woo AJAX or cache mystery.

The same legacy stack also retains old ownership for:

- cart-item row borders and spacing;
- product title / meta weights and sizes;
- product thumbnail sizes/radii;
- product-total placement;
- totals alignment;
- earlier summary widths and mobile summary layouts.

## Current SAFE5 DOM authority

The current real checkout template renders:

- `.sf-safe5-checkout`
- `.sf-safe5-summary-card`
- `#order_review.woocommerce-checkout-review-order.sf-safe5-order-review`

The old `sf-checkout-pro-*` / legacy visual shell is no longer the current checkout shell. Therefore future visual ownership for the SAFE5 checkout must be concentrated in `checkout-safe5.css`, while shared `spatial-flow.css` legacy visual rules should be retired or scoped away rather than beaten with further specificity patches.

## Other proven next-patch items

The same upcoming batch may safely include already-proven code-contract corrections:

1. SAFE5 root typography inheritance must explicitly set the reference baseline (`Inter`, weight 400, line-height 1.55, antialiasing) instead of inheriting the current 600-weight root from upstream theme styles.
2. SAFE5 summary sticky target: `112px -> 136px` to match formal Step 02 reference.
3. Packaging boundary-note margin must return from `22px 0` to the locked reference `0 0 22px`.
4. Step 02 editable default copy should match the formal reference while preserving WooCommerce shipping authority:
   - intro text: `Choose how your order will be delivered and how the products inside should be packaged before payment.`
   - shipping note: `Choose one of the delivery methods available for this address and order.`

## Scope discipline for next batch

- Do **not** append another override/fix block to either CSS file.
- Do **not** remove functional Checkout fixes unrelated to visual ownership (terms checkbox, notice visibility, gateway/payment truth, validation, etc.) merely because they live in `spatial-flow.css`.
- Shared CSS cleanup must be bounded to understood obsolete visual owners.
- `checkout-safe5.css` remains the visual authority for current SAFE5 Checkout.
- `functions.php` remains backend-editable copy authority.
- `form-checkout.php` and `checkout-safe5.js` are not expected to change in this batch unless a new dependency is proven.

## Next action

Prepare an offline, byte-audited manual replacement package for:

1. `spatial-flow.css` — retire/scope the conflicting legacy Checkout visual summary ownership without touching unrelated functional fixes;
2. `checkout-safe5.css` — root typography + sticky + boundary reference corrections inside existing owners;
3. `functions.php` — two Step 02 default-copy corrections, preserving Customizer editability.

No further runtime screenshots or Console diagnostics are required before preparing that patch.
