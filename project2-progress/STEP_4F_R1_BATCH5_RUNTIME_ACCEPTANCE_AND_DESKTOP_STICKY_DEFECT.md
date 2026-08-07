# Step 4F · R1 Batch-5 Runtime Acceptance and Desktop Sticky Defect

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user completed the Batch-5 Order Summary / Coupon / Trust runtime acceptance after installing the accepted CSS source.

Submitted runtime evidence:

```text
1366 desktop Checkout / Order Summary
390 mobile Checkout / Order Summary
360 mobile Checkout / Order Summary
```

The user explicitly reported that every requested Batch-5 check passed except the desktop right-side Order Summary did not remain sticky while the page scrolled.

## Accepted runtime items

The user reports the following as passed:

```text
- 1366 Summary visual surface
- 390 Summary visual surface
- 360 Summary visual surface
- real product image/title/context/quantity/price readability
- real Subtotal / Shipping / Total
- coupon panel open
- empty coupon handling
- invalid coupon handling
- valid coupon path if available during the test
- coupon removal / totals restoration where applicable
- no duplicate coupon control / notice
- Trust content remains present
- no horizontal overflow
```

The supplied screenshots also show the intended Batch-5 editorial Summary migration at all three target widths.

## Single remaining blocker · desktop Summary sticky

Expected desktop behavior at 1366px:

```text
- `.sf-safe5-summary` remains sticky while the main Checkout column scrolls
- sticky offset remains below the site header / admin bar environment
- Summary does not collide with Header
- Summary does not drift abnormally
- Summary releases before Footer / does not overlap Footer
```

Actual user-reported behavior:

```text
The right-side Order Summary does not remain pinned at all when the page scrolls.
```

This is exactly the previously requested `desktop sticky` acceptance item. It therefore fails the first prerequisite of the sticky test; Header/Footer collision cannot be considered accepted until sticky behavior itself works.

## Responsive interpretation

The mobile screenshots are not a sticky failure.

Current Checkout CSS intentionally switches Summary to static at <=1040px:

```css
@media (max-width: 1040px) {
  .sf-safe5-summary {
    position: static !important;
  }
}
```

Therefore:

```text
390px: static Summary is expected
360px: static Summary is expected
1366px: sticky Summary is expected and currently fails
```

## Current source fact

The accepted Batch-5 stylesheet still contains the intended desktop rule:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary {
  position: sticky;
  top: 112px;
  align-self: start;
}
```

So the runtime failure is not because Batch 5 removed the sticky declaration. A parent/ancestor layout or overflow interaction, later cascade conflict, or runtime containing-block condition must be diagnosed before changing source.

Do not guess-fix by increasing specificity or adding another bottom override until runtime ownership is identified.

## Batch-5 status

```text
Summary / Coupon / Trust visual migration: passed
Coupon functional acceptance: passed
Trust acceptance: passed
390 / 360 responsive acceptance: passed
1366 desktop Summary sticky: failed / open
Batch 5: open
Checkout: Not done
```

## Next action

Perform one bounded desktop sticky diagnostic before any CSS repair.

The diagnostic should identify at minimum:

```text
- computed position/top of `.sf-safe5-summary`
- its offsetParent / containing layout chain
- computed overflow-x / overflow-y of ancestors up to body/html
- display/align/height behavior of `.sf-safe5-shell`, form, content wrappers and Astra wrappers
- whether a later rule overrides sticky
- whether Summary height or containing-block height prevents any sticky travel
```

Then issue one narrowly-scoped repair and re-test only:

```text
1366 desktop scroll
Header clearance
sticky travel
Footer release
```

Do not reopen the already-passed mobile Summary, coupon, trust or product/totals acceptance unless the sticky repair changes them.
