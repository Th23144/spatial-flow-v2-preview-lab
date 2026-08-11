# STEP 4F · Packaging geometry parent width owner diagnosis · 2026-08-11

Status: DIAGNOSED · ROOT CAUSE CONFIRMED · PRECISE SAFE5 OWNER CORRECTION PREPARED

## Runtime evidence

User ran ancestor geometry diagnostics on the live SAFE5 Checkout.

At a DevTools-docked client width of 867px:

- html/body/#primary/main/article/.entry-content: 867px wide
- .entry-content > .woocommerce: 810px wide
- .sf-safe5-checkout: 774px wide
- .woocommerce padding-left/right: 18px / 18px
- .woocommerce margin-left/right: 28.5px / 28.5px
- .woocommerce max-width: 1340px

The arithmetic closes exactly: 774 + 18 + 18 = 810. Therefore the live SAFE5 layout is being narrowed before the SAFE5 56px gutter is applied.

Earlier same-viewport-family comparison already showed:

- live SAFE5 shell: 1257px; main 621.25px; summary 443.75px
- static reference shell: 1371px; main 687.75px; summary 491.25px
- both use the same intended internal geometry: 56px gutter, 80px gap, 7fr:5fr columns.

## Root cause

The root cause is the legacy checkout container owner on `.entry-content > .woocommerce`, not the SAFE5 shell and not the outer Astra article/main wrappers.

Historical `spatial-flow.css` still contains checkout-specific `.entry-content > .woocommerce` width/margin ownership (later revisions also carry 1340px-era checkout ownership). This legacy owner remains active around the new SAFE5 wrapper.

## Correction strategy

Do NOT edit the large legacy `spatial-flow.css` as part of this correction.

Do NOT append a `FIX1/FIX2` tail block.

Instead, extend the existing top-level geometry ownership section inside `assets/css/checkout-safe5.css`, immediately before the existing `form.checkout.sf-safe5-form` owner, with a checkout-only reset for `.entry-content > .woocommerce`:

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

The accepted SAFE5 geometry remains unchanged:

- shell max: 1440px
- desktop gutter: 56px
- columns: 7fr / 5fr
- gap: 80px
- SAFE5 intro and shell remain their own geometry owners.

## Current CSS baseline

`checkout-safe5.css`

- 133,885 bytes
- 4,373 logical lines
- SHA256 `5221bfd175a5425cb34eb732b64a67c3d2595d1de1332cf0e02fa7e873a4d6e7`
- CRLF
- no final newline

## Prepared corrected identity

Applying only the precise parent reset above inside the existing geometry owner produces:

- 134,135 bytes
- 4,383 logical lines
- SHA256 `071147c68c30a9ee5481d9e7d9d5aeabd0ea92f0b9b5139be99bf1d3958c11a2`
- `{ / } = 517 / 517`
- comments = 24 / 24
- CSS parser errors = 0
- CRLF
- no final newline

## Validation after install

Re-run geometry diagnostics with DevTools undocked or otherwise keep the live/reference viewport equal.

Expected result after reset:

1. `.entry-content > .woocommerce` no longer contributes horizontal margin/padding/max-width restriction.
2. `.sf-safe5-checkout` receives the full available entry-content width.
3. `.sf-safe5-intro` and `.sf-safe5-shell` become the authoritative 1440px-max containers.
4. Desktop main/summary widths should converge with the static reference at the same viewport.

Only after this geometry correction should Packaging micro-spacing/font/detail parity continue.
