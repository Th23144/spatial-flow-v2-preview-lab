# Step 4F · Product Packaging · Custom Assignment Synchronization

Date: 2026-08-08
Status: STATIC CANDIDATE · USER RE-TEST REQUIRED
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

During Custom grouping review, the user clarified the intended assignment behavior more precisely.

The previous candidate still made Package 01 / 02 / 03 feel too independent and used visible `Move from Package XX -> Package YY` controls. This created two problems:

```text
1. Package 01 could appear to own A+B+C while Package 02 / 03 looked like separate repeated selectors.
2. The user could not clearly see that selecting B in Package 02 must remove B from Package 01 automatically.
```

The user also rejected arbitrary manual creation of package groups for this workflow.

## Locked Custom grouping rule

For Custom grouping, package slots are bounded by the number of product-assignment units in the order.

For the current three-item static candidate:

```text
Package 01
Package 02
Package 03
```

are available automatically.

The initial Custom state is:

```text
Package 01 = A + B + C
Package 02 = empty
Package 03 = empty
```

If the user assigns B to Package 02:

```text
Package 01 = A + C
Package 02 = B
Package 03 = empty
```

If the user then assigns C to Package 03:

```text
Package 01 = A
Package 02 = B
Package 03 = C
```

Core invariant:

```text
one product assignment unit
= exactly one Product Packaging Group at a time
```

Selecting an item in another package is a TRANSFER, never a duplicate selection.

## Fixed-slot behavior

Custom grouping no longer exposes arbitrary `+ New package` creation to the customer.

The candidate automatically ensures enough package slots to represent the maximum useful grouping for the current item count.

Empty package slots:

```text
- remain available for assignment
- do not count as an actual physical package
- do not add a Gift Packaging fee
- are ignored if the customer finishes with them empty
```

This allows the user to use only two packages even when three possible slots are displayed.

## Customer-facing selector change

The visible English `Move from Package XX -> Package YY` buttons are removed from the customer-facing Custom UI.

Each expanded package now displays a neutral circular assignment selector beside every product.

```text
selected circle   = product currently belongs to this package
empty circle      = select it here to transfer it to this package
```

The old move action remains hidden in the DOM only as the authoritative hook used by the base Packaging controller. The new selector triggers that existing move action rather than creating a second assignment engine.

Therefore package information remains synchronized from one authoritative assignment map.

## Package style remains a separate concern

Custom grouping still has two different jobs, in this order:

```text
01 Decide which products belong together
02 Choose Standard or Gift Packaging for that resulting package
```

This remains structurally different from `Package separately`, where one item per package is already fixed and the main remaining task is choosing Standard / Gift for each package.

## Browser translation note

Some earlier English fragments were injected dynamically by JavaScript after the browser translation pass. Browser translation does not reliably re-translate every dynamically inserted text node.

This is not the same bug as package-assignment synchronization.

For this revision, the most problematic dynamic English action button was removed from the visible UI and replaced with a language-neutral selector.

Production localization remains a separate concern; customer-facing production strings must ultimately come from a translatable source rather than relying on browser auto-translation.

## Files changed

```text
preview/spatial-flow-checkout-packaging-custom-clarity-v1.js
preview/spatial-flow-checkout-packaging-v6.css
```

Commits:

```text
22db5b5  Synchronize custom package item assignment across fixed package slots
529fde6  Show synchronized custom package assignment selectors
```

## Intentionally NOT changed

```text
- real SAFE5 Checkout
- WooCommerce Session / order metadata
- production Packaging fee source
- backend Packaging settings
- Step 03 Payment
- Step 04 Order Result
- Batch 6
```

## Re-test required

Use three products A/B/C and verify:

```text
1. Enter Custom grouping.
2. Package 01 begins with A+B+C.
3. Package 02 and Package 03 exist as empty usable slots.
4. Open Package 02 and select B.
5. Package 01 must immediately become A+C; Package 02 must become B.
6. Open Package 03 and select C.
7. Package 01 must become A; Package 02 = B; Package 03 = C.
8. Reassign B back to Package 01 and verify it disappears from Package 02.
9. Empty package slots must not add packaging fees.
10. No visible `Move from Package...` customer button should remain.
```

## Current stop point

```text
Desktop Compact packaging direction: accepted earlier
Mobile inline-mode direction: provisional / under refinement
Custom assignment synchronization: implemented in static candidate, awaiting re-test
Real SAFE5 Product Packaging: NOT STARTED
Batch 6: PAUSED
```

## Recording policy

This step follows `PROJECT2_STEP_RECORDING_POLICY.md`.
