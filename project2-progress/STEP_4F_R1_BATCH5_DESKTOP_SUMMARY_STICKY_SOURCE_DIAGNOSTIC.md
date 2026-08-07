# Step 4F · R1 Batch-5 Desktop Summary Sticky Source Diagnostic

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

Batch-5 Summary / Coupon / Trust runtime acceptance passed except for one desktop-only defect: at 1366px the right-side Order Summary does not remain sticky while the page scrolls. Mobile 390/360 intentionally remains non-sticky and passed.

## Source-side findings

The accepted Batch-5 CSS source is intact:

```text
assets/css/checkout-safe5.css
88,536 bytes
2,700 lines
SHA256: c3480532356b13245fd89dff300a04940ac51e60d91557e4d4e16d78e16077d4
```

The desktop sticky declaration still exists before the Batch-5 Summary replacement:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary {
  position: sticky;
  top: 112px;
  align-self: start;
}
```

The later Step-02 block adds only:

```css
.sf-safe5-summary {
  display: grid;
  gap: 14px;
}
```

and does not reset `position`, `top` or `align-self`.

The existing `@media (max-width: 1040px)` intentionally changes `.sf-safe5-summary` to `position: static !important`, so 390/360 non-sticky behavior is expected and is not a defect.

The accepted static Checkout reference explicitly uses desktop sticky Summary behavior (`.order-summary { position: sticky; top: 136px; }`).

## Current root-cause classification

The Batch-5 replacement did not delete the desktop sticky declaration. Therefore a blind `position: sticky !important` patch is not justified.

The remaining likely fault boundary is runtime layout context, especially one of these conditions on `.sf-safe5-summary` or an ancestor:

```text
- computed `position`/`top` overridden by another live stylesheet
- ancestor overflow-x/overflow-y becoming hidden/auto/scroll/clip
- ancestor transform/filter/perspective/contain context
- parent geometry providing no effective sticky travel range
- live Astra/shared Checkout wrapper behavior not represented by the isolated SAFE5 source
```

Historical evidence already shows `assets/css/spatial-flow.css` can override SAFE5 geometry with higher-specificity Checkout rules, so the live computed cascade must be measured before authorizing a fix.

## Required next diagnostic

Run one read-only desktop browser-console diagnostic at 1366px / 100% zoom. It must capture:

```text
- `.sf-safe5-summary` computed position/top/height and bounding rect
- `.sf-safe5-shell` geometry
- every ancestor up to `html`, including overflow-x/y, transform, filter, perspective, contain, position, height, clientHeight and scrollHeight
- nearest ancestor whose computed overflow is not visible/clip-neutral
- summary top before a controlled scroll
- summary top after a controlled scroll
- restore the original scroll position after measurement
```

Do not modify CSS until this output identifies the actual constraint.

## Status

```text
Batch 5 visual/content/coupon/trust acceptance: passed
Desktop Summary sticky: failed / open
Source declaration: present
Root cause: narrowed to live computed layout/cascade; not yet proven
Next action: runtime ancestor/computed-style diagnostic
Batch 5: open
Checkout: Not done
```
