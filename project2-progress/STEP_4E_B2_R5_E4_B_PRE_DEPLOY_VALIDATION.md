# Step 4E-B2-R5-E4-B · Pre-deploy CSS Validation

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
spatial-flow(23).css：Passed / exact intended R5-E4-B artifact.
Deployment：Authorized for R5-E4-C runtime measurement.
Cart page status：Not done.
```

## Exact file result

```text
Size: 695,962 bytes
Logical lines: 23,331
SHA256: b55c854e959ab42026f93c786e62b0c7e6b56e1cbf5307027b45991d39d90531
Braces: 3,625 / 3,625
Comments: 340 / 340
CSS parser errors: 0
Line endings: LF
Ends with final newline: yes
```

## Exact full-file diff proof

The intended media block occurs exactly once.

Removing that block and only its separating blank lines produces the accepted deployed baseline byte-for-byte:

```text
Recovered size: 695,622 bytes
Recovered logical lines: 23,316
Recovered braces: 3,621 / 3,621
Recovered SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
```

That SHA256 is the accepted `spatial-flow(22).css` baseline. Therefore no other CSS difference exists.

## Accepted inserted block

```css
@media (min-width: 1101px) {
  body.woocommerce-cart .entry-content,
  body.woocommerce-cart .entry-content > .woocommerce {
    padding: 0 !important;
  }

  body.woocommerce-cart .sf-cart-v2-heading {
    margin-bottom: 67px !important;
  }

  body.woocommerce-cart .sf-cart-v2-heading__title {
    margin-bottom: 88px !important;
  }
}
```

The block is located inside the existing Canonical Cart presentation owner, immediately after the base count rule and before the old intro/service-grid hide rule.

## Metric correction

The planning document previously predicted `3,624 / 3,624` braces. The correct result is `3,625 / 3,625` because the inserted block adds four rule blocks:

```text
1. @media
2. combined entry-content padding rule
3. heading margin rule
4. heading-title margin rule
```

This was a documentation counting error, not a CSS artifact defect.

## Deployment decision

Deploy `spatial-flow(23).css` as:

```text
assets/css/spatial-flow.css
```

Then run R5-E4-C at the same non-empty desktop Cart, 100% browser zoom and the same window size.

Expected measurements:

```text
wrapper_width: 1204
left_gutter: 48
right_gutter: 48
form_width: approximately 656
summary_width: approximately 468
rendered_column_gap: 80
title_to_count: approximately 88
count_to_main_row: approximately 120
```

Also perform a phone smoke check to confirm the accepted phone Cart and empty-Cart behavior did not change.