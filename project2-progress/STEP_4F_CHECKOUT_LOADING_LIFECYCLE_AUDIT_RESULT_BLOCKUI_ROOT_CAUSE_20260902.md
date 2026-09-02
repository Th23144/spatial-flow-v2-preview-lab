# Step 4F — Checkout loading lifecycle audit result / BlockUI root cause — 2026-09-02

## Evidence

User ran `SF_CHECKOUT_LOADING_LIFECYCLE_AUDIT_20260902` on live Checkout Step03 at 1920×991 DPR1 after WPCode 1706 (`收款页`) was disabled.

The diagnostic captured five lifecycle snapshots:

- BEFORE_UPDATE
- UPDATE_CHECKOUT_EVENT
- BLOCKUI_MUTATION
- UPDATED_CHECKOUT_EVENT
- FINAL_AFTER_UPDATED_CHECKOUT

## Critical result

The real SAFE5 payment DOM does **not** revert to the old rounded-white-card presentation during the WooCommerce recalculation.

Across before / during / after snapshots:

- `#payment` remains transparent, borderless, radius 0;
- selected `li.wc_payment_method` remains SAFE5 editorial geometry (`display:grid`, 18px padding, radius 0, selected warm background, dark border);
- `.payment_box` remains SAFE5 geometry/background (`radius 0`, 15px 16px padding, warm soft surface);
- Step01 native source remains hidden and the customer container retains `is-recomposed` throughout this Step03 recalculation.

Therefore the visible loading-time regression is **not** a transient return of WPCode 1706 or a transient SAFE5 DOM de-recomposition.

## Root cause

WooCommerce BlockUI injects overlay elements over the payment host and Order Summary during checkout recalculation.

At the active loading snapshot:

```text
payment overlay:
  class = blockUI blockOverlay
  bounds = 728 × 447.89
  background = rgb(255,255,255)
  opacity ≈ 0.6

summary overlay:
  class = blockUI blockOverlay
  bounds = 448 × 427.95
  background = rgb(255,255,255)
  opacity ≈ 0.6
```

These overlays produce the washed-out rectangular loading surfaces visible in the user's screenshots. Native loader indicators are rendered at the same time.

The user's observation that Step01 also shows the loading-time wash is consistent with this diagnosis: BlockUI is a shared WooCommerce checkout recalculation mechanism, not a Step03-only gateway-style defect.

## Comparison to prior Project 2 Cart issue

Project 2 already solved the same visual class on Cart: native WooCommerce BlockUI painted a rectangular wash over otherwise editorial/transparent surfaces. The accepted Cart solution retained native blocking but made the overlay background transparent and kept only a restrained loader.

Checkout should follow the same principle, scoped to Checkout/SAFE5 and owned by `assets/css/checkout-safe5.css` rather than `spatial-flow.css`.

## Implementation decision

Expected correction scope: CSS-only.

- Preserve WooCommerce native blocking / AJAX behavior.
- Do not alter Checkout JS lifecycle.
- Do not alter payment methods, gateway logic, Terms, Place Order, Order Summary data, or Step01 recomposition.
- Neutralize the visible white BlockUI wash for SAFE5 Checkout.
- Keep a restrained loading indicator consistent with the previously accepted Cart loading treatment.
- Apply to all relevant SAFE5 Checkout update surfaces so Step01/02/03 do not expose the same rectangular wash.

## Source gate before editing

Current accepted 2.7.22 `assets/css/checkout-safe5.css` identity from the returned-source validation:

```text
bytes: 149798
logical lines: 4878
SHA256: 28b2e89c3fb966e57863a9adfe18edfe2a40559b4ca9b142dedaf0f2d853a499
```

The repository does not contain the full current live CSS body. Obtain the user's current `assets/css/checkout-safe5.css`, verify it against this baseline (or account for any later legitimate source change), then issue one bounded canonical loading-state correction. Do not append an unreviewed override blindly.

## Current order of work

1. WPCode 1706 stable-state white-card interference: root cause confirmed; keep disabled during Checkout regression testing.
2. Checkout BlockUI loading wash: CURRENT ACTIVE BLOCKER.
3. Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography-only mismatch: queued immediately after Checkout loading blocker closes.
4. Final consolidated Checkout 01–04 visual/runtime regression.
