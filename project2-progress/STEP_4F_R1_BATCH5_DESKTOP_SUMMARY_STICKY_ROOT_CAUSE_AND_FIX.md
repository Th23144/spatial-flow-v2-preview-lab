# Step 4F · R1 Batch-5 Desktop Summary Sticky Root Cause and Fix

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime evidence

User supplied the requested 1365×991 / DPR1 browser diagnostic.

The live Summary itself is correct:

```text
node: aside.sf-safe5-summary
position: sticky
top: 112px
display: grid
align-self: start
overflow-x/y: visible / visible
transform/filter/perspective/contain: none
height: 1006.97px
```

The shell is also neutral:

```text
.sf-safe5-shell
display: grid
overflow-x/y: visible / visible
transform/filter/perspective/contain: none
height: 1718.09px
```

The controlled scroll proves sticky is not engaging:

```text
before scrollY = 0
summary.top = 656.97

after scrollY = 957
summary.top = -300.03

Delta = -957px, exactly matching the page scroll.
```

If sticky were active, once the normal-flow top crossed the inset, `summary.top` would remain near the configured `112px` instead of continuing upward with the page.

## Proven blocking ancestor

The nearest problematic ancestor is `body`:

```text
body
computed overflow-x: hidden
computed overflow-y: auto
clientHeight: 3352
scrollHeight: 3352
```

Therefore `body` is treated as an overflow scrolling mechanism / sticky containing ancestor, but it has no internal scroll range (`clientHeight == scrollHeight`). The actual document scrolling occurs at the root viewport/html layer. The Summary therefore follows the non-scrolling body instead of sticking to the real viewport scroll.

The root `html` also reports `overflow-x:hidden; overflow-y:auto`, but unlike body it is the actual root scroll container (`clientHeight 991`, `scrollHeight 3384`) and is not the blocking non-scrolling ancestor.

This explains why:

```text
- `.sf-safe5-summary { position: sticky; top:112px }` is present and computed correctly
- no shell transform/contain/overflow defect exists
- the Summary nevertheless moves exactly with window scroll
```

The likely source mechanism is a shared/global horizontal-overflow rule on `body` (`overflow-x:hidden`), which computes the other axis to `auto`. The runtime fault is proven even though the upstream shared stylesheet source is outside the current Batch-5 CSS-only scope.

## Bounded correction

Do not alter shared CSS in Batch 5. Add one Checkout-only desktop override immediately after the existing first Checkout body background block in `assets/css/checkout-safe5.css`:

```css
@media (min-width: 1041px) {
  body.woocommerce-checkout:not(.woocommerce-order-received) {
    overflow-x: clip !important;
    overflow-y: visible !important;
  }
}
```

Rationale:

```text
- `clip` preserves horizontal clipping without creating a scroll container
- `overflow-y: visible` removes body as the non-scrolling sticky ancestor
- desktop-only scope preserves the already accepted <=1040px mobile/tablet behavior
- existing Summary sticky/top rules remain unchanged
- no Coupon, Trust, product, totals, Step 01/02/03, PHP or JS logic changes
```

## Exact source target

Pre-change accepted source:

```text
assets/css/checkout-safe5.css
88,536 bytes
2,700 lines
SHA256 c3480532356b13245fd89dff300a04940ac51e60d91557e4d4e16d78e16077d4
CRLF
no final newline
```

Post-change target from exact CRLF-preserving offline construction:

```text
assets/css/checkout-safe5.css
88,711 bytes
2,707 lines
SHA256 8808c8ef99cf48bdde9deb2994f6e5fcd373c603fe32b9d852783ab6ae4d288a
CRLF
no final newline
CSS braces 329 / 329
CSS comments 22 / 22
```

## Runtime acceptance

After source-integrity audit and installation, only one desktop test is required:

```text
1366px / 100% zoom / Step 01
scroll downward past the Summary normal position
Summary should stop near the configured top inset rather than move offscreen
continue toward page bottom and confirm it releases within the shell instead of covering the footer
```

390/360 do not need re-testing for sticky because the correction is `min-width:1041px` only.

## Status

```text
Batch 5 Summary/Coupon/Trust: all other runtime checks passed
Desktop Summary sticky root cause: proven
Fix: defined / not yet installed
Batch 5: open pending sticky repair acceptance
Checkout: Not done
```
