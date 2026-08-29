# Project 2 · Step04 Result Side Sticky Runtime Diagnostic Conclusion · 2026-08-29

## Trigger

User reported that the Step04 desktop Receipt Summary sidebar does not actually stick during scroll even though prior computed-style parity showed `position: sticky; top: 132px`.

## Runtime evidence

Diagnostic: `SF_STEP04_RESULT_SIDE_STICKY_RUNTIME_20260829`

Environment:

```text
viewport: 1920 × 991
DPR: 1
visualViewport scale: 1
document height: 3492
```

Sticky contract on `.sf-order-result-v3 .result-side`:

```text
position: sticky
top: 132px
side height: 891.75px
viewport height below top inset: 859px
```

Scroll samples prove sticky never activates:

```text
scrollY 314  -> sideTop 358.281
scrollY 402  -> sideTop 270.281
scrollY 502  -> sideTop 170.281
scrollY 827  -> sideTop -154.719
scrollY 1171 -> sideTop -498.719
scrollY 1466 -> sideTop -793.719
lockedToTop: false for every sample
```

The side moves one-for-one with `.result-shell`; its normal-flow offset remains constant instead of pinning at 132px.

## Ancestor ownership result

All ordinary Step04/Astra ancestors between `.result-side` and `body` are `overflow: visible`, `transform:none`, `contain:none`.

The first non-visible overflow ancestors are:

```text
body -> overflow: hidden auto
html -> overflow: hidden auto
```

Current stylesheet root rule includes:

```css
html,body {
  ...
  overflow-x: hidden;
}
```

Because one overflow axis is non-visible, the other computes to `auto`, creating the exact sticky-ancestor failure mode already handled elsewhere in Project 2.

## Existing repository precedent

`Spatial Flow Step 5O-B SAFE 2 · Sticky Ancestor Unlock` already solves this same project-wide pattern for other page-scoped sticky sidebars by using:

```css
overflow-x: clip !important;
overflow-y: visible !important;
```

on `html/body`, plus `overflow:visible` / `contain:none` on intermediate wrappers.

Therefore this Step04 defect is not a missing `position:sticky` declaration. The declaration exists. The runtime blocker is ancestor overflow ownership.

## Dynamic-height note

The tested Pending sidebar is 891.75px while the viewport space below `top:132px` is 859px. This is a separate usability consideration for long real Woo/gateway content, but it does not explain the complete zero-stick behavior by itself. First correction must unlock ancestor overflow without altering Step04 business logic or typography/layout contract.

## Correction gate

Next bounded source change:

1. Extend the existing SAFE 2 ancestor-unlock system to the Step04 order-result page (`.sf-order-result-v3`).
2. Preserve Step04 canonical `top:132px` ownership.
3. Do not change mobile behavior (`<=1120px` remains static as already defined).
4. Do not touch WooCommerce order state, recovery, gateway output, template logic, Crypto plugin, or Step04 visual typography.
5. After source validation, rerun the same sticky runtime diagnostic on desktop Pending and confirm `.result-side` pins at 132px during the valid middle scroll range.
6. Only after actual sticky behavior passes decide whether long-sidebar max-height/internal-scroll handling is necessary; do not add it speculatively.

## Status

```text
Step04 strict visual/computed parity: previously PASS
Step04 sticky runtime behavior: FAIL, owner isolated
Step04: REOPENED for bounded desktop sticky correction
Checkout: Not done
```
