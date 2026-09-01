# Project 2 · Step03 Gateway Host Live Computed-Style Audit Start · 2026-09-01

## Trigger

Fresh desktop screenshot shows the Step03 native WooCommerce gateway area as rounded bright-white cards, visually inconsistent with the editorial Checkout composition and the current strict 1:1 requirement.

History audit has already reopened this as a Step03 visual-parity blocker.

## Current source observation

The current returned `assets/css/checkout-safe5.css` does not literally specify the desktop appearance seen in the screenshot.

Current Step03 desktop rules intend:

```css
.sf-safe5-payment-mount #payment {
  overflow: visible;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.sf-safe5-payment-mount #payment ul.payment_methods {
  display: grid;
  gap: 12px;
  margin: 24px 0 0;
  padding: 0;
  border: 0;
  background: transparent;
}

.sf-safe5-payment-mount #payment ul.payment_methods > li.wc_payment_method {
  padding: 18px;
  border: 1px solid var(--sf-safe5-line);
  border-radius: 0;
  background: rgba(250, 247, 243, 0.35);
}

.sf-safe5-payment-mount #payment .payment_box {
  margin: 14px 0 0;
  padding: 15px 16px;
  border: 1px solid var(--sf-safe5-line);
  border-radius: 0;
  background: var(--sf-safe5-soft);
}
```

However the supplied live screenshot visibly shows rounded white gateway rows/payment surfaces.

Therefore do not blindly rewrite the intended SAFE5 rules yet. First prove which effective selectors/properties are winning in the live page.

## Required one-pass runtime audit

Capture for the Step03 circled area:

- `#payment`
- `ul.payment_methods`
- every visible `li.wc_payment_method`
- selected gateway row
- selected `.payment_box`
- label/input geometry

For each capture:
- computed background/backgroundColor
- border / borderRadius
- padding / margin
- boxShadow
- display/grid/flex
- width/height
- matching element classes

Also inspect stylesheet rules affecting `border-radius`, `background`, `padding` and `box-shadow` for the selected payment row and payment_box, including whether any winning declaration is `!important`.

No source modification before this live computed-style result.
