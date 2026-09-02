# Step 4F — Step03 full refresh resets to Step01 / test-method correction — 2026-09-02

## Observation
User reported that a full browser refresh while on Checkout Step03 immediately returns the UI to Step01, so Step03 cannot be visually inspected during a hard refresh.

## Source confirmation
Current `assets/js/checkout-safe5.js` explicitly initializes checkout with:

```js
root.setAttribute("data-sf-safe5-current-step", "1");
...
showStep(root, 1);
```

Therefore a hard page reload returning to Step01 is the current implementation, not evidence that Step03 itself is malfunctioning.

The `updated_checkout` WooCommerce event path does **not** call `showStep(root, 1)`; it recomposes/synchronizes dynamic checkout content while preserving the active SAFE5 step.

## Decision
- Do not add step-persistence/session state merely to test Step03; that would expand scope and alter checkout navigation semantics.
- Hard refresh is not a valid Step03 visual-loading test under the current implementation.
- Test Step03 using a normal WooCommerce AJAX checkout recalculation while remaining on Step03.
- A safe manual trigger is `jQuery(document.body).trigger("update_checkout")` from the browser console after navigating normally to Step03. This does not submit/place the order; it requests the same type of recalculation WooCommerce normally performs after checkout changes.
- Observe Payment and Order Summary during that AJAX update. If no unacceptable transient visual appears, close the suspected Step03 refresh-flash item without adding code.

## Existing status preserved
- Step01 native-field FOUC: user visual PASS.
- Order Summary white BlockUI wash: user visual PASS after summary-only transparent overlay styling.
- WPCode snippet 1706 `收款页`: remains disabled, not deleted.
- Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` font parity remains the next queued task after the Step03 transient check.
