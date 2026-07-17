# Step 4E-B2-R5-E4-A · Strict Cart Geometry Measurement Audit

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E3 empty-Cart parity：Passed / closed.
R5-E4-A1 first rendered measurement：Complete.
R5-E4-A2 winning ancestor/container trace：Active.
Code change in R5-E4-A：None.
Cart page status：Not done.
```

A1 result record:

```text
project2-progress/STEP_4E_B2_R5_E4_A1_MEASUREMENT_RESULT.md
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

The current Canonical Cart source declares:

```css
--sf-cart-max: 1440px;
--sf-cart-gap: 80px;
width: min(var(--sf-cart-max), calc(100% - 96px));
grid-template-columns: minmax(0, 7fr) minmax(360px, 5fr);
column-gap: var(--sf-cart-gap);
row-gap: 0 !important;
```

## A1 measured result

```text
viewport_css_px: 1315
device_pixel_ratio: 1
wrapper_width: 1164
left_gutter: 68
right_gutter: 83
form_width: 609
summary_width: 435
rendered_column_gap: 80
title_to_count: 8
count_to_main_row: 93
```

## A1 decision

```text
- rendered 80px column gap matches the static source and must be retained
- form/summary widths remain compatible with the intended 7fr / 5fr relationship
- wrapper is narrower than the 1219px expected result at viewport 1315
- normalized side inset is approximately 68px rather than 48px
- likely cause is an ancestor content box already inset by about 20px per side
- title-to-count is short by approximately 80px
- count-to-main-row is short by approximately 27px
```

The source-confirmed vertical mismatch will be corrected in R5-E4-B. The wrapper owner must be traced before changing width or gutters.

## R5-E4-A2 · Winning ancestor trace

Run on the same non-empty desktop Cart at 100% browser zoom.

Paste this into DevTools Console:

```javascript
(() => {
  const target = document.querySelector('body.woocommerce-cart .entry-content > .woocommerce');
  const rows = [];
  let el = target;
  let depth = 0;

  while (el && depth < 10) {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);

    rows.push({
      depth,
      element: `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.classList.length ? '.' + [...el.classList].join('.') : ''}`,
      rect_width: Math.round(r.width),
      left: Math.round(r.left),
      right_gap: Math.round(document.documentElement.clientWidth - r.right),
      css_width: s.width,
      max_width: s.maxWidth,
      padding_left: s.paddingLeft,
      padding_right: s.paddingRight,
      margin_left: s.marginLeft,
      margin_right: s.marginRight,
      display: s.display,
      box_sizing: s.boxSizing
    });

    el = el.parentElement;
    depth += 1;
  }

  console.log({
    window_inner_width: window.innerWidth,
    document_client_width: document.documentElement.clientWidth,
    scrollbar_width: window.innerWidth - document.documentElement.clientWidth
  });
  console.table(rows);
})();
```

## Expected diagnostic

The first ancestor whose content box is approximately 40px narrower than the document client width, or which carries about 20px left/right padding, is the likely owner causing the 68px effective gutters.

## Decision rule

```text
- do not alter --sf-cart-max blindly
- do not change the 80px column gap
- do not change PHP, JS, Header or templates
- identify the exact ancestor owner first
- then prepare one in-place Canonical Cart geometry correction
```

No CSS change is authorized until the A2 trace is recorded.