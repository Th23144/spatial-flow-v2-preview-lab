# Airwallex Checkout Runtime Regression Start — 2026-09-15

## Preconditions
Airwallex database zero-residual audit passed after targeted cleanup. The Airwallex residual cleanup chain is not yet closed until Checkout runtime regression passes.

## Regression scope
This is verification only, not a Checkout redesign or reopen of completed 1:1 work.

Required runtime path:
1. Step01 Address
2. Step02 Shipping + Packaging
3. Step03 Payment
4. Step04 WooCommerce order result

Also verify:
- shipping refresh and selected method persistence;
- Packaging state, price/summary integration, and navigation persistence;
- coupon application/removal and total refresh;
- AJAX refresh behavior;
- active payment methods render without Airwallex;
- `spatial_flow_crypto` remains available where expected;
- Place Order does not duplicate submit;
- real WooCommerce order is created;
- final Thank You/result page reflects the actual WooCommerce order/status truth.

## Safety / status
Do not change Checkout design during this regression. Any failure must first be classified as a real regression versus unrelated/deferred behavior before reopening implementation.

Current state: RUNTIME REGRESSION STARTED / NOT YET PASSED.
