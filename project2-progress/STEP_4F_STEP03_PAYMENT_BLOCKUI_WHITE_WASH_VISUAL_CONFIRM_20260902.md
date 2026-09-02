# Step 4F — Step03 Payment BlockUI White-Wash Visual Confirm — 2026-09-02

## User runtime result

While remaining on Checkout Step03, the user triggered a native WooCommerce checkout recalculation with:

```js
jQuery(document.body).trigger("update_checkout");
```

The user supplied a screenshot showing that a visible loading wash still appears over the left native Payment region during the AJAX update. A spinner is visible in the payment area. The underlying gateway geometry remains the accepted SAFE5 geometry, so this is not the earlier WPCode 1706 legacy gateway-card override returning.

The right Order Summary still shows its loader feedback, but its previously reported white wash has already been removed by the accepted summary-only BlockUI rule.

## Interpretation

This confirms a separate Step03 native WooCommerce BlockUI visual state on the Payment host. It should be handled narrowly at the SAFE5 payment mount, preserving WooCommerce interaction blocking and loader feedback while removing the white wash.

## Canonical CSS action

Do not append a second unrelated patch. Replace/expand the existing canonical SAFE5 AJAX loading-state block near `/* Processing overlay */` so that the same transparent-overlay treatment applies to both:

- `.sf-safe5-payment-mount`
- `.sf-safe5-summary-card`

No payment/order logic, JS, PHP, gateway behavior, spinner behavior, or Step03 geometry should be changed.

## Current status

- Step01 native-field FOUC: PASS / closed.
- Order Summary white loading wash: PASS / closed.
- Step03 Payment white loading wash: CONFIRMED / active narrow visual fix.
- WPCode 1706 `收款页`: remains disabled, not deleted.
- Crypto V0.3.0 transfer-confirmation button typography remains next after Checkout loading-state cleanup closes.
