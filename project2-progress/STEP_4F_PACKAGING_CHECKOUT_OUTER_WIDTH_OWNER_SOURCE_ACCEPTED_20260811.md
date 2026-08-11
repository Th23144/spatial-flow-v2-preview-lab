# Step 4F — Checkout outer width owner source accepted — 2026-08-11

Status: ACCEPTED · READY FOR RUNTIME GEOMETRY RECHECK

## Scope

Source-only geometry correction in `assets/css/checkout-safe5.css` to neutralize the legacy WooCommerce wrapper width owner before SAFE5 applies its own frame geometry.

## Accepted source identity

`checkout-safe5.css`

- bytes: 134,135
- logical lines: 4,383
- SHA256: `071147c68c30a9ee5481d9e7d9d5aeabd0ea92f0b9b5139be99bf1d3958c11a2`
- line endings: CRLF
- final newline: none
- braces: 517 / 517
- comments: 24 / 24
- CSS parser errors: 0

## Change owner

Existing SAFE5 top-level geometry ownership was expanded in place with:

```css
body.woocommerce-checkout:not(.woocommerce-order-received)
  .entry-content
  > .woocommerce {
  box-sizing: border-box !important;
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
```

The existing SAFE5 shell geometry remains unchanged:

- max width: 1440px
- desktop horizontal padding: 56px
- grid: 7fr / 5fr
- gap: 80px

## Rationale

Runtime parent-chain diagnostics showed `.entry-content > .woocommerce` was the actual pre-SAFE5 width limiter. The SAFE5 shell itself already matched the static reference geometry. Therefore this correction removes the legacy wrapper constraint instead of changing SAFE5's own 1:1 frame values.

## Next step

Install this accepted CSS on the live local checkout, refresh Step 02, then rerun the same geometry console measurement. Do not resume Packaging micro-visual tuning until the outer frame geometry is confirmed.
