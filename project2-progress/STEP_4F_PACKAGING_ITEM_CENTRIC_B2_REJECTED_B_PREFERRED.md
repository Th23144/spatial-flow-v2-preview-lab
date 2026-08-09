# Step 4F · Product Packaging · B2 Rejected / B Preferred

Date: 2026-08-09
Status: DECISION LOCK · ORIGINAL B PREFERRED
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User verdict

The user reviewed the B2 density-refinement candidate on mobile and rejected that direction.

Reason:

```text
- B2 is too crowded on a phone-sized viewport.
- Mobile width is limited; forcing product information and package selectors into a tighter horizontal composition reduces breathing room.
- The original B candidate is easier to read and operate even though it is slightly taller.
```

User preference:

```text
Original B > B2
```

## Locked current Custom direction

The current preferred Custom grouping candidate is the original item-centric B page:

```text
preview/spatial-flow-checkout-packaging-itemcentric-v1.html
```

Its supporting assets remain:

```text
preview/spatial-flow-checkout-packaging-v8-itemcentric.css
preview/spatial-flow-checkout-packaging-itemcentric-v1.js
```

## B2 disposition

The B2 refinement page remains in the repository only as a historical comparison:

```text
preview/spatial-flow-checkout-packaging-itemcentric-b2.html
```

Status:

```text
REJECTED BY USER
DO NOT USE AS FINAL VISUAL CONTRACT
DO NOT USE AS LIVE IMPLEMENTATION SOURCE
```

Do not delete it solely for this decision; retaining the rejected candidate preserves design history and prevents the same over-compression experiment from being repeated later.

## Why original B is preferred

Original B keeps the useful compact item-centric model without compressing the phone layout too aggressively.

It preserves:

```text
- one product row at a time with adequate vertical breathing room
- automatic Package 01 / 02 / 03 slots
- no customer-facing manual package creation
- exactly one package assignment per product assignment unit
- reassignment transfers the product instead of duplicating it
- only non-empty actual packages appear in the packaging-style result area
- Standard / Gift is chosen once per actual package
- empty package slots do not count as physical packages and add no fee
- Gift Packaging fee is based on actual non-empty Gift packages
- sufficient mobile touch target size and readability
- the established Spatial Flow commerce selected-state feedback
```

## Explicit rejection of B2 density rule

Do not carry forward B2's stronger mobile compression as a default requirement.

In particular, do not assume that fitting product information and all package slot controls onto the same compact horizontal row is an improvement merely because it reduces page height.

For this checkout flow, mobile clarity and comfortable touch spacing take priority over minimizing vertical length.

## Files intentionally NOT changed in this decision step

```text
preview/spatial-flow-checkout-packaging-itemcentric-v1.html
preview/spatial-flow-checkout-packaging-v8-itemcentric.css
preview/spatial-flow-checkout-packaging-itemcentric-v1.js
real SAFE5 Checkout files
WooCommerce Session / order metadata
Step 03 Payment
Step 04 Order Result
```

This step records a design decision only; it does not modify the accepted/preferred B candidate.

## Current project stop point

```text
Package-centric A direction: superseded for current Custom preference
Item-centric B original: CURRENT PREFERRED CUSTOM DIRECTION
Item-centric B2: REJECTED / historical comparison only
Real SAFE5 Product Packaging: NOT STARTED
Batch 6: PAUSED
Step 04: remains in the later planned stage
```

Further Packaging work should start from original B unless the user explicitly reopens another direction.

## Recording policy

This decision is recorded under `PROJECT2_STEP_RECORDING_POLICY.md` so future windows do not mistake B2 for the preferred candidate.
