# Project 2 · Step04 Result-side Sticky Runtime Reopen · 2026-08-29

## Trigger

After Step04 strict computed parity, screenshot review, and clean Pending-payment recovery were marked closed, the user reported a concrete runtime presentation regression on the desktop Step04 Order Result page: the right-side Receipt Summary does not actually remain pinned/sticky at the top while scrolling.

## Important correction

The prior closure was too broad. The computed-style audit proved only that `.result-side` had the same declared sticky contract as the static reference; it did **not** prove the sticky behavior under real scrolling and real dynamic Woo/gateway content.

Retained runtime JSON evidence already shows:

```text
.result-side
position: sticky
top: 132px
```

but the production panel height can exceed the usable viewport sticky region. Example retained desktop On-hold capture:

```text
viewport height: 991px
.result-side height: about 1105px
sticky top inset: 132px
```

The static Pending reference itself is also very tall (~984px), and live BACS/gateway content can make the production sidebar taller still. Therefore `position: sticky` being present in computed style is not sufficient proof that the intended top-pinned behavior is usable.

## Status correction

```text
Step04 computed-style parity: remains PASS
Step04 visual geometry/static-style parity: remains PASS
Step04 clean Pending-payment recovery: remains PASS
Step04 desktop result-side sticky runtime behavior: REOPENED / FAIL-PENDING-DIAGNOSIS
Step04 overall closure: REOPENED narrowly for sticky runtime behavior
Checkout binary status: Not done
```

Do not reopen unrelated Step04 styling or business logic.

## Next bounded action

Run one desktop runtime sticky-behavior diagnostic on a real Step04 page to capture:

- viewport dimensions
- `.result-side` height and computed `position/top/bottom`
- result-shell bounds
- ancestor overflow/transform/contain values
- `.result-side` viewport top at several scroll positions
- whether it ever locks to the intended top inset

Then choose the smallest production-safe fix. Do not guess a CSS patch merely from the presence of `position: sticky`.

Potential cause already strongly indicated: sidebar height greater than the usable sticky viewport, especially with dynamic gateway output such as BACS. Any correction must preserve desktop usability and must not create a broken inner-scroll or mobile regression without explicit validation.
