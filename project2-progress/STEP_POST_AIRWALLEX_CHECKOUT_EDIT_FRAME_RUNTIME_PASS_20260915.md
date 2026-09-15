# Post-Airwallex Checkout edit-control frame regression — Runtime PASS — 2026-09-15

## Scope
Bounded visual regression fix only for Checkout Step 03 completed-context edit controls:
- `.sf-safe5-context-address-edit`
- `.sf-safe5-context-section__edit`

The user reported visible translucent/button-like framing around `EDIT ADDRESS →` and `EDIT →` despite the accepted editorial design language.

## Baseline correction
The live `checkout-safe5.css` baseline used for the actual manual patch is the user-supplied current file:
- size: 150,258 bytes
- logical lines: 4,942
- SHA256: `c91ffeda26bd26d7d8a949b0a503fcf032315ea93e08fe49f7bf9e25dcdf2f72`

An earlier proposed generated file was based on the wrong baseline and was explicitly rejected before any replacement occurred.

## Authorized patch
Presentation-only CSS normalization of the two edit controls:
- remove inherited button chrome (`appearance`, background image, box shadow, text shadow, transform, border radius);
- normalize min-size / margin / line-height;
- neutralize hover/focus/active chrome;
- preserve the intentional top divider on `EDIT ADDRESS →`;
- preserve focus-visible accessibility outline.

No checkout structure, state, payment, shipping, packaging, coupon, order, AJAX, or WooCommerce ownership changes are included.

## Runtime result
The user manually applied the patch and confirmed:

`透明框没有了`

Therefore:
- Address edit translucent frame: PASS
- Shipping-method edit translucent frame: PASS
- Bounded Checkout visual regression: CLOSED

Checkout remains `Completed 1:1`; this fix does not reopen the broader Checkout architecture.

## Next active legacy issue
Proceed to the separate Single Product refresh-time first-paint regression where native WooCommerce variation controls briefly appear before the custom visual variation layer takes over.
