# Project 2 · Step04 Strict 1:1 Delta Audit START · 2026-08-26

## Status

Step04 runtime semantics are mostly accepted, but strict 1:1 visual acceptance was explicitly reopened after user review.

This record starts the production-vs-static delta audit. No live code is changed by this record.

## Authoritative visual reference

- `preview/spatial-flow-thank-you-v1.html`
- `preview/spatial-flow-thank-you-v1.css`
- shared shell: `preview/spatial-flow-checkout-flow-v1.css`

Reference geometry remains authoritative for Step04 body composition. Existing globally accepted production Header/Footer remain outside this Step04 body delta scope except where page-frame spacing creates a visible transition defect.

## Current evidence under audit

User-provided live captures:
- Confirmed / Processing desktop full page
- Confirmed / Processing mobile full page
- Pending desktop full page
- Pending mobile full page
- Completed / On-hold / Failed / Cancelled / Refunded first-screen captures

## Confirmed Delta 01 — legacy wrapper vertical padding survives

Earlier legacy Thank You CSS still owns:

```css
body.woocommerce-order-received .entry-content > .woocommerce {
  width: min(1180px, calc(100vw - 80px));
  max-width: 1180px;
  margin: 0 auto;
  padding: 58px 0 76px;
}
```

and its mobile branch still owns:

```css
@media (max-width: 900px) {
  body.woocommerce-order-received .entry-content > .woocommerce {
    width: min(100%, calc(100vw - 32px));
    padding: 34px 0 54px;
  }
}
```

The later Step5F strict-reference block resets width/max-width and only left/right padding, but does not reset padding-top / padding-bottom. This explains the visible white band between the accepted production header and the beige Step04 surface, and contributes an extra white band below the Step04 root.

Static reference has no such wrapper band: breadcrumb flows directly into the Step04 result surface.

Classification: CONFIRMED STRICT-1:1 DEFECT.

Expected correction owner: current Step5F canonical block, not a new appended patch layer.

## Confirmed Delta 02 — receipt section surface differs from static reference

In live desktop/mobile captures the main `Your Order Receipt` section presents as a distinct white rectangle/surface. The static Step04 CSS defines `.result-panel` only by spacing and bottom rule; it does not define an opaque white card background for this section.

Classification: CONFIRMED VISUAL DELTA FROM SCREENSHOT + STATIC SOURCE.

Exact computed owner still needs to be isolated before code is issued; do not guess by appending CSS.

## Audit still in progress

Next source/computed-owner pass must cover:
- breadcrumb vertical origin after wrapper correction
- intro padding and two-column ratio
- result shell ratio and gap
- receipt-section inherited Woo/Astra background/padding/margins
- overview geometry
- payment facts
- timeline
- addresses
- receipt summary
- mobile 390px folding/order/spacing
- typography and line-height deltas visible after frame-owner corrections

No code should be delivered until owner isolation is complete enough to issue one coherent manual anchored replacement batch.
