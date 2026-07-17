# Step 4E-B2-R5-E4-C1 · Partial Runtime Evidence and Measurement Correction

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-B CSS artifact：Passed and deployed.
R5-E4-C1 runtime proof that the new CSS is active：Passed.
R5-E4-C strict geometry acceptance：Pending exact full geometry measurement.
Current executable step：Run the corrected full geometry diagnostic.
Cart page status：Not done.
```

## User evidence

The user reported that the visual result did not appear materially changed and supplied:

```text
- a desktop Cart screenshot after deployment
- the ancestor/container trace output
```

The supplied console code was the earlier A2 ancestor trace, not the R5-E4 full geometry measurement. The prior instruction saying to rerun the “previous measurement code” was ambiguous and is corrected here.

## What the supplied trace proves

Before R5-E4-B:

```text
wrapper outer width: 1164px
left/right gutters: 68px / 68px
wrapper padding: 20px / 20px
entry-content padding: 20px / 20px
```

After deploying `spatial-flow(23).css`:

```text
wrapper outer width: 1200px
left/right gutters: 50px / 50px
wrapper padding: 0px / 0px
entry-content padding: 0px / 0px
```

Therefore the new CSS is loaded and winning. The width increased by 36px and both inherited padding owners were removed.

The screenshot also shows that the title/count whitespace is visibly larger than the pre-R5-E4 state, but the ancestor trace cannot quantify `title_to_count` or `count_to_main_row`.

## Remaining discrepancy

At `documentElement.clientWidth = 1300px`, the theoretical `calc(100% - 96px)` border-box width is 1204px. The supplied trace reports 1200px and 50px outer gutters.

The remaining 4px deficit cannot be attributed safely from the current screenshot because the ancestor trace did not report:

```text
- border-left / border-right
- exact parent content-box width
- exact computed width/max-width without column truncation
- full Cart track widths after deployment
```

Do not change CSS again until the corrected diagnostic is run.

## Corrected R5-E4-C diagnostic

Run on the same non-empty desktop Cart, browser zoom 100%, same window size:

```javascript
(() => {
  const q = (s) => document.querySelector(s);
  const n = (v) => Number.parseFloat(v) || 0;
  const rect = (el) => el ? el.getBoundingClientRect() : null;
  const box = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    const px = (name) => n(s[name]);
    return {
      border_box_width: Math.round(r.width),
      content_box_width: Math.round(
        r.width - px('paddingLeft') - px('paddingRight') - px('borderLeftWidth') - px('borderRightWidth')
      ),
      left: Math.round(r.left),
      right_gap: Math.round(document.documentElement.clientWidth - r.right),
      css_width: s.width,
      max_width: s.maxWidth,
      padding_left: s.paddingLeft,
      padding_right: s.paddingRight,
      border_left: s.borderLeftWidth,
      border_right: s.borderRightWidth,
      margin_left: s.marginLeft,
      margin_right: s.marginRight,
      box_sizing: s.boxSizing
    };
  };

  const wrapEl = q('body.woocommerce-cart .entry-content > .woocommerce');
  const parentEl = wrapEl ? wrapEl.parentElement : null;
  const title = rect(q('.sf-cart-v2-heading__title'));
  const count = rect(q('.sf-cart-v2-heading__count'));
  const form = rect(q('form.woocommerce-cart-form'));
  const totals = rect(q('.cart-collaterals'));
  const mainTop = Math.min(
    form ? form.top : Number.POSITIVE_INFINITY,
    totals ? totals.top : Number.POSITIVE_INFINITY
  );

  console.log({
    window_inner_width: window.innerWidth,
    document_client_width: document.documentElement.clientWidth,
    scrollbar_width: window.innerWidth - document.documentElement.clientWidth
  });

  console.table({
    wrapper: box(wrapEl),
    parent_entry_content: box(parentEl)
  });

  console.table({
    form_width: form ? Math.round(form.width) : null,
    summary_width: totals ? Math.round(totals.width) : null,
    rendered_column_gap: form && totals ? Math.round(totals.left - form.right) : null,
    title_to_count: title && count ? Math.round(count.top - title.bottom) : null,
    count_to_main_row: count && Number.isFinite(mainTop) ? Math.round(mainTop - count.bottom) : null
  });
})();
```

## Decision gate

Expected principal values remain:

```text
rendered column gap: 80px
title_to_count: approximately 88px
count_to_main_row: approximately 120px
```

Width acceptance depends on the corrected border/content-box output:

```text
- 1204px with 48px gutters：exact pass
- 1200px with a confirmed 2px border on each side or a 1296px parent content box：equivalent diagnosis, then correct the responsible owner only
- 1200px caused by a winning 1200px max-width：identify and replace that owner in place
```

No additional CSS change is authorized before this output is recorded.