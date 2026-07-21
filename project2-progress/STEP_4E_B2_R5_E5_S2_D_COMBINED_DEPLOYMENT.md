# Step 4E-B2-R5-E5-S2-D · Combined Deployment

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
S2-A PHP artifact validation: Passed.
S2-B JavaScript artifact validation: Passed.
S2-C CSS artifact validation: Passed.
Combined deployment: Authorized / not yet confirmed complete.
Runtime acceptance: Pending.
Cart page status: Not done.
```

## Purpose

Deploy the three mutually dependent Cart artifacts in the only safe order. The visible Order Summary Coupon renderer and JavaScript lifecycle bridge must exist before CSS removes the native WooCommerce actions owner from visible layout.

## Exact deployment set

### 1. PHP first

```text
Local validated artifact: functions(19).php
Destination: functions.php
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b
Version: 2.7.8
```

### 2. JavaScript second

```text
Local validated artifact: spatial-flow(5).js
Destination: assets/js/spatial-flow.js
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b
```

### 3. CSS last

```text
Local validated artifact: spatial-flow(37).css
Destination: assets/css/spatial-flow.css
SHA256: d3460695ff0e53e79465ac9d13d723b440c69021413e15ff671705ec28b907aa
```

## Mandatory order

```text
functions.php
→ assets/js/spatial-flow.js
→ assets/css/spatial-flow.css
```

Do not deploy CSS first. CSS is the step that visually clips the native actions row; deploying it before the renderer and lifecycle bridge would temporarily hide the native visible controls without their replacement being ready.

## Replacement rules

```text
- overwrite the three existing destination files
- do not leave numbered aliases inside the child-theme directory
- do not create duplicate functions.php, spatial-flow.js or spatial-flow.css files
- do not edit content during deployment
- do not change SPATIAL_FLOW_CHILD_VERSION from 2.7.8
- do not execute cancelled FIX4
```

## Cache gate

Because the child-theme version remains `2.7.8`, purge any active page/cache layer after all three files are replaced, then use a hard browser reload for Cart runtime testing.

Do not validate runtime from a tab that may still hold the old JavaScript or stylesheet.

## Immediate post-deploy smoke gate

Before detailed visual acceptance, confirm:

```text
1. Cart page opens without PHP fatal or blank page.
2. Order Summary contains the new collapsed Have a coupon? control.
3. The native Coupon / Apply Coupon / Update Cart row is not visible beneath the product stack.
4. Product rows and the final product divider remain visible.
5. Changing quantity refreshes native Cart totals and live counts.
6. Coupon Apply uses WooCommerce native response handling.
7. Remove, Undo, shipping, totals and checkout link remain functional.
8. Desktop and phone layouts show no new overflow.
```

## Rollback set

If the page fails structurally or functionally, restore all three prior validated baselines together:

```text
functions.php SHA256:
ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86

assets/js/spatial-flow.js SHA256:
6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css SHA256:
3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
```

Do not mix a new artifact with two rollback artifacts.

## Acceptance boundary

Successful deployment and smoke checks do not mark Cart `Completed 1:1`.

Required sequence remains:

```text
combined deployment confirmation
→ R5-E5 runtime functional and visual acceptance
→ R5-E6 final strict static-reference acceptance
→ binary Cart decision
```
