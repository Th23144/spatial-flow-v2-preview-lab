# Step 4E-B2-R5-E4-A · Strict Cart Geometry Measurement Audit

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E3 empty-Cart parity：Passed / closed.
R5-E4-A strict rendered-geometry audit：Active.
Code change in R5-E4-A：None.
Cart page status：Not done.
```

## Strict 1:1 reference geometry

The approved static Cart source defines:

```text
maximum frame: 1440px
reference desktop side gutters: 48px
main columns: 7fr / 5fr
desktop column gap: 80px
Cart page top padding: 56px
Cart page bottom padding: 96px
parent grid row gap: 80px
```

The title and count are separate full-width grid children:

```text
Title margin-bottom: 8px
parent row gap after title: 80px
Count margin-bottom: 40px
Count padding-bottom: 32px
Count bottom border: 1px
parent row gap after count: 80px
```

Therefore the approximate rendered distances are:

```text
title border-box bottom → count border-box top: 88px
count border-box bottom → main Cart row top: 120px
```

The real WooCommerce DOM does not use identical elements, so these distances must be reproduced equivalently rather than by adding arbitrary visual padding.

## Current source audit

Current deployed CSS artifact:

```text
spatial-flow(22).css
Size: 695,622 bytes
Logical lines: 23,316
SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
```

The current Canonical Cart source already declares:

```css
--sf-cart-max: 1440px;
--sf-cart-gap: 80px;
width: min(var(--sf-cart-max), calc(100% - 96px));
grid-template-columns: minmax(0, 7fr) minmax(360px, 5fr);
column-gap: var(--sf-cart-gap);
```

Therefore the screenshot-reported narrow desktop frame must be verified from the real computed/rendered width before changing `max-width` or gutters. A browser zoom or a different winning container owner can make the physical screenshot appear narrower even when the source declaration is correct.

The current source has one confirmed strict mismatch:

```css
row-gap: 0 !important;
```

It also compresses title and count into one `.sf-cart-v2-heading` owner:

```text
heading padding: 56px 0 32px
heading margin-bottom: 40px
title margin-bottom: 8px
count has no padding-bottom or own border
```

This cannot reproduce the static title/count/main-row rhythm.

## Measurement gate

Run only on a non-empty desktop Cart with browser zoom set to 100%. Use a viewport at least 1366 CSS pixels wide.

In DevTools Console, run:

```javascript
(() => {
  const q = (s) => document.querySelector(s);
  const rect = (el) => el ? el.getBoundingClientRect() : null;
  const wrap = rect(q('body.woocommerce-cart .entry-content > .woocommerce'));
  const title = rect(q('.sf-cart-v2-heading__title'));
  const count = rect(q('.sf-cart-v2-heading__count'));
  const form = rect(q('form.woocommerce-cart-form'));
  const totals = rect(q('.cart-collaterals'));
  const mainTop = Math.min(
    form ? form.top : Number.POSITIVE_INFINITY,
    totals ? totals.top : Number.POSITIVE_INFINITY
  );

  console.table({
    viewport_css_px: Math.round(window.innerWidth),
    device_pixel_ratio: window.devicePixelRatio,
    wrapper_width: wrap ? Math.round(wrap.width) : null,
    left_gutter: wrap ? Math.round(wrap.left) : null,
    right_gutter: wrap ? Math.round(window.innerWidth - wrap.right) : null,
    form_width: form ? Math.round(form.width) : null,
    summary_width: totals ? Math.round(totals.width) : null,
    rendered_column_gap: form && totals ? Math.round(totals.left - form.right) : null,
    title_to_count: title && count ? Math.round(count.top - title.bottom) : null,
    count_to_main_row: count && Number.isFinite(mainTop) ? Math.round(mainTop - count.bottom) : null
  });
})();
```

## Expected width formula

At desktop widths above the single-column breakpoint:

```text
expected wrapper width = min(1440, viewport width - 96)
expected left/right gutter = (viewport width - wrapper width) / 2
expected column gap at wide desktop = 80px
```

Examples:

```text
viewport 1366 → wrapper 1270px, gutters 48px
viewport 1440 → wrapper 1344px, gutters 48px
viewport 1536 → wrapper 1440px, gutters 48px
viewport 1728 → wrapper 1440px, gutters 144px
```

## Decision rule

```text
- If computed wrapper width/gutters/column gap match the formula, do not widen the frame blindly.
- If they do not match, identify the winning runtime owner before editing.
- The title/count/main-row rhythm is already source-confirmed as wrong and will require an in-place Canonical Cart correction in R5-E4-B.
- Phone geometry remains protected; the weak static mobile layout is not copied blindly.
```

No CSS change is authorized until the measurement result is recorded.