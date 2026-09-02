# Step 4F — Checkout BlockUI 2.7.22 source audit + manual patch — 2026-09-02

## User-supplied production file

`assets/css/checkout-safe5.css`

Exact source audit:

```text
bytes: 149798
logical lines: 4878
SHA256: 28b2e89c3fb966e57863a9adfe18edfe2a40559b4ca9b142dedaf0f2d853a499
line endings: CRLF
```

This exactly matches the previously accepted 2.7.22 returned-source baseline.

Current source contains:

```text
blockUI occurrences: 0
blockOverlay occurrences: 0
```

Therefore the white loading wash captured by the 2026-09-02 runtime lifecycle audit is not currently owned by `checkout-safe5.css`; it is the native WooCommerce BlockUI surface.

## Runtime root cause already confirmed

During `update_checkout` / `updated_checkout`, WooCommerce injects `.blockUI.blockOverlay` over at least:

- Step03 native payment area
- Order Summary

The live overlay uses a white background and animates toward approximately 0.6 opacity. The actual SAFE5 payment DOM retains its correct square editorial styling throughout the update.

## Bounded correction decision

Modify CSS only.

Do not modify:

- PHP
- checkout-safe5.js
- WooCommerce payment logic
- gateway DOM
- order calculation
- coupon logic
- Step03 adaptive sticky
- WPCode 1706 (remains disabled for now)

The native WooCommerce blocker must remain present so interaction remains blocked during recalculation. Only its painted white wash is removed and its loader normalized to the same restrained language already accepted on Cart.

## Exact manual insertion point

In the accepted 2.7.22 `checkout-safe5.css`, locate the unique anchor:

```css
/* Processing overlay */
```

Insert the following block immediately **before** that comment:

```css
/* Native WooCommerce Checkout AJAX loading state.
   Preserve native interaction blocking, but do not paint a white wash over SAFE5 surfaces. */
body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-checkout
  .blockUI.blockOverlay,
body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-checkout
  .blockOverlay {
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  opacity: 1 !important;
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-checkout
  .blockUI.blockOverlay::before,
body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-checkout
  .blockOverlay::before {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  width: 18px !important;
  height: 18px !important;
  margin: -9px 0 0 -9px !important;
  border: 1px solid rgba(31, 25, 22, 0.18) !important;
  border-top-color: var(--sf-safe5-ink) !important;
  border-radius: 999px !important;
  background: none !important;
  content: "" !important;
  animation: sf-safe5-block-spin 0.7s linear infinite !important;
}

@keyframes sf-safe5-block-spin {
  to {
    transform: rotate(360deg);
  }
}

```

## Intended behavior

- BlockUI still intercepts interaction during WooCommerce recalculation.
- No white or warm rectangular wash is painted over SAFE5 surfaces.
- The loader becomes a restrained 18px ring.
- Normal Step01/02/03 visual geometry and dynamic WooCommerce content remain unchanged.

## Acceptance after manual edit

1. Re-upload edited `checkout-safe5.css` for exact source validation before broader testing.
2. Hard refresh Checkout.
3. On Step01, trigger a normal WooCommerce checkout recalculation and confirm there is no white flash/wash.
4. On Step03, trigger gateway/order recalculation and confirm there is no white flash/wash over Payment or Order Summary.
5. Confirm the small loader remains visible and interaction is still blocked while recalculation is active.
6. Confirm no layout shift or new overflow on desktop/mobile.

Crypto V0.3.0 typography remains queued until this Checkout loading-state blocker is accepted.
