# Project 2 · Step04 Sticky 2.7.21 Runtime Retest · Activation PASS · 2026-08-29

## User-confirmed environment

Production/current site Step04 order-result page, desktop runtime.

Viewport:

```text
1920 × 991
DPR: 1
visual scale: 1
```

## Runtime result

Body unlock is active exactly as intended:

```text
overflow: clip visible
overflow-x: clip
overflow-y: visible
```

`html` remains unchanged:

```text
overflow: hidden auto
overflow-x: hidden
overflow-y: auto
```

Step04 sticky contract remains intact:

```text
position: sticky
top: 132px
bottom: auto
align-self: auto
side height: 891.75px
usable viewport below top: 859px
```

Observed samples:

```text
scrollY 0    -> sideTop 672.281 -> locked false
scrollY 360  -> sideTop 312.281 -> locked false
scrollY 502  -> sideTop 170.281 -> locked false
scrollY 827  -> sideTop 132     -> locked true
scrollY 1164 -> sideTop 132     -> locked true
scrollY 1464 -> sideTop 132     -> locked true
```

## Conclusion

The 2.7.21 body-only Sticky Ancestor Unlock successfully restores native sticky activation on Step04. This confirms the previously isolated body overflow environment was the zero-stick blocker.

The retest correctly shows the expected pre-threshold flow followed by top lock at exactly 132px through the middle scroll range.

One narrow item is not yet directly sampled by this specific retest: native release at the result-shell bottom boundary. The last sample still has shell bottom at 1117.609px and side bottom at 1023.75px, so the containing-block release threshold has not yet been crossed.

No further source change is justified. If formal closure requires explicit boundary proof, use a single bottom-boundary runtime/manual sanity check only; do not reopen CSS diagnosis.

## State

```text
Step04 sticky activation: PASS
2.7.21 body-only correction: EFFECTIVE
additional source change: NONE
Step04 full sticky closure: pending only bottom-boundary release proof if required
Step03 sticky audit: still deferred by user until Step04 closes
Checkout binary status: Not done
```
