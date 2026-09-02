# Step 4F — Checkout initial/AJAX loading visual leak reopened — 2026-09-02

## Trigger

After WPCode snippet `1706 — 收款页` was disabled, the user supplied fresh Checkout screenshots.

Steady-state Step03 result:

```text
PASS for the previously identified WPCode rounded/bright-white gateway-card override.
```

The final loaded Step03 now shows the intended square/editorial SAFE5 gateway treatment instead of the old WPCode `14px/12px` rounded cards.

However, the user reports and screenshots prove a remaining transient defect:

```text
During page refresh / WooCommerce loading, an old/native-looking visual frame is briefly visible.
The same class of transient defect is also visible on Step01.
```

The loading screenshot contains WooCommerce-style blocking/loading spinners, so this must be treated as an initial/AJAX lifecycle visual-parity issue rather than proof that WPCode 1706 remains active.

## Current status of WPCode 1706

- Keep snippet 1706 disabled.
- Do not delete it yet.
- Its steady-state conflict has been positively validated as removed.
- Permanent cleanup waits until Checkout loading-state regression is closed.

## Cross-step classification

Because Step01 also exhibits the transient flash, this is not classified as a payment-only defect.

Current classification:

`Checkout 01–03 initial/AJAX loading-state visual leak / native-state flash`

Step03 gateway-host work is therefore **not yet fully closed** despite the steady-state WPCode root cause being neutralized.

## Source evidence already available

Current SAFE5 CSS contains a Step01 recomposition contract:

```css
.sf-safe5-address-panels {
  display: none;
}

.sf-safe5-customer-details.is-recomposed .sf-safe5-address-panels {
  display: block;
}

.sf-safe5-customer-details.is-recomposed .sf-safe5-native-customer-source {
  display: none;
}
```

This means the engineered Step01 panel state depends on the `is-recomposed` class. Before that class exists, the native source is not hidden by this contract, which creates a plausible initial-render flash window.

Current Step03 steady-state payment rules are already square/editorial (`border-radius: 0`) and were proven effective after disabling WPCode 1706.

Therefore no blind CSS override should be added yet.

## Next required action

Run one batched, read-only WooCommerce lifecycle diagnostic that records:

- `update_checkout` start
- BlockUI/loading overlay insertion
- `updated_checkout` completion
- current SAFE5 step
- Step01 recomposition class/state
- native source vs recomposed panels visibility
- Step03 payment mount / first gateway row / payment-box geometry and computed surface styles
- active BlockUI overlay count/styles

The diagnostic should trigger one standard WooCommerce `update_checkout` recalculation automatically after instrumentation so the user does not need to time the capture manually.

## Boundary

Until lifecycle evidence is received:

```text
No new source modification.
Do not re-enable WPCode 1706.
Do not edit checkout-safe5.css merely to cover the flash.
Do not start the queued Crypto V0.3.0 transfer-button typography correction yet.
```

After this cross-step loading-state defect is corrected and user-accepted, resume the already-open Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography-only task.
