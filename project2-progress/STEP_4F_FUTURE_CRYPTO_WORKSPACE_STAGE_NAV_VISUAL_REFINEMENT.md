# Project 2 · Future Crypto Workspace Stage-Navigation Visual Refinement

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User feedback

The standalone future multi-asset Crypto Workspace was generally accepted, but its three internal stage blocks were visually too prominent on both desktop and mobile:

```text
01 Choose payment pair
02 Invoice and transfer
03 Verify payment
```

They competed with the actual payment task and the main Checkout progress indicator.

## Bounded correction

Only the internal three-stage indicator was refined.

Desktop:

```text
- removed the heavy enclosing card treatment
- retained only subtle top and bottom rules
- reduced vertical padding
- reduced number-circle size
- reduced title and helper-text scale
- lowered inactive-state contrast
- reduced active-state background strength
```

Mobile:

```text
- replaced three vertically stacked blocks with one compact three-column row
- hid secondary helper text
- centered the stage number and title
- reduced padding and typography
- preserved clear active-stage distinction without dominating the page
```

## Files

The prior complete stylesheet is preserved as:

```text
preview/spatial-flow-checkout-crypto-workspace-future-v1-base.css
```

The existing public stylesheet path now imports that baseline and applies only the review correction:

```text
preview/spatial-flow-checkout-crypto-workspace-future-v1.css
```

No HTML or JavaScript change was required.

## Commit

```text
87f6deb113bd0ba038bb2d55061dd8a872b01c86
```

## Scope audit

Unchanged:

```text
current Step-03 payment flow
accepted S5 fixed USDT/TRON workspace
S4A selector reference
future Workspace HTML and interaction behavior
payment plugin
live WordPress / WooCommerce
Project 2 version 2.7.8
```

## Status

```text
Future Crypto Workspace stage-navigation refinement: implemented
Future Workspace final visual acceptance: awaiting user review
S6 formal work: not started by this correction
Checkout: Not done
```
