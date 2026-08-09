# Step 4F · Product Packaging · Item-Centric Custom A/B Candidate

Date: 2026-08-09
Status: STATIC A/B CANDIDATE · USER REVIEW REQUIRED
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The current Package-centric Custom grouping candidate is functionally correct and was considered broadly acceptable by the user, but a remaining UX concern was identified:

```text
Package-centric Custom grouping repeats Package 01 / 02 / 03 as separate cards.
Each card can contain multiple product rows and packaging settings.
On mobile, this becomes vertically expensive and makes Custom significantly longer than necessary.
```

The user reconsidered an earlier rejected item-centric presentation:

```text
Item A -> choose Package 01 / 02 / 03
Item B -> choose Package 01 / 02 / 03
Item C -> choose Package 01 / 02 / 03
```

The original item-centric version was NOT rejected merely because it was item-centric. It was rejected because it had two specific UX defects:

```text
1. The customer had to manually create additional packages before an item could be assigned to them.
2. After assigning items, the customer still had to use a separate large package-settings area to choose Standard / Gift, creating redundant work and visual length.
```

The purpose of this A/B candidate is to test whether the compactness benefits of item-centric grouping can be recovered WITHOUT reintroducing either defect.

## Existing candidate preserved

The current Package-centric candidate remains unchanged:

```text
preview/spatial-flow-checkout-packaging-v1.html
```

The new alternative is a parallel page:

```text
preview/spatial-flow-checkout-packaging-itemcentric-v1.html
```

This is an A/B comparison. No accepted/current candidate was overwritten.

## New hybrid model

The new candidate uses an item-centric Custom grouping surface, but keeps the later smart assignment model.

For three product assignment units, package slots are available automatically:

```text
Package 01
Package 02
Package 03
```

There is no customer-facing `+ Add package` step.

### Item assignment

Custom shows one compact row per item:

```text
Item A    [01] [02] [03]
Item B    [01] [02] [03]
Item C    [01] [02] [03]
```

Core invariant remains:

```text
one product assignment unit
= exactly one Product Packaging Group at a time
```

If B is currently in Package 01 and the customer selects 02:

```text
Package 01 loses B automatically
Package 02 gains B automatically
```

No manual deselection is required and duplication is impossible.

Items sharing the same package number are packed together.

## Packaging style is compact and automatic

The old item-centric candidate forced the user into a second large Package editor after assigning items.

The new candidate instead generates a compact style row ONLY for packages that actually contain items.

Example:

```text
Item A -> 01
Item B -> 01
Item C -> 02
```

The style area becomes:

```text
Package 01 · A + B    [Standard] [Gift +$9] [Details]
Package 02 · C        [Standard] [Gift +$9] [Details]
```

Package 03 is empty, so it does not create a style row and does not add a fee.

This removes the previous redundant full Package editor.

## Personalization / Gift message preserved

No feature is removed.

Each active package has a small `Details` disclosure:

```text
Standard -> optional Name on package
Gift     -> optional Gift card message
```

Only the opened package shows its field.

## Fee behavior preserved

```text
Standard Packaging = free
Gift Packaging = placeholder $9 per non-empty physical gift package
Empty package slot = no fee
```

The base Packaging controller remains authoritative for assignment state, tier state and totals.

The item-centric layer drives the existing base actions instead of introducing a second independent assignment engine.

## Mobile intent

This candidate specifically targets vertical reduction.

Mobile Custom becomes approximately:

```text
3 compact item rows
+
only the active package style rows
```

instead of:

```text
Package 01 card with all products
Package 02 card with all products
Package 03 card with all products
```

Each item row uses three compact package buttons.

Selected package buttons and selected Standard/Gift controls reuse the established Step 02 commerce selected-state language.

## Files added

```text
preview/spatial-flow-checkout-packaging-itemcentric-v1.html
preview/spatial-flow-checkout-packaging-v8-itemcentric.css
preview/spatial-flow-checkout-packaging-itemcentric-v1.js
```

Commits:

```text
26f08e6  Add compact item-centric custom packaging candidate styles
ad817a4  Add smart item-centric custom packaging interactions
a9a64ca  Add item-centric custom packaging A/B preview
108a972  Fix nested mobile hiding in item-centric packaging candidate
```

## Intentionally NOT changed

```text
- current package-centric candidate page
- real SAFE5 Checkout
- WooCommerce Session / order metadata
- production Packaging configuration source
- Step 03 Payment
- Step 04 Order Result
- Batch 6
```

## A/B acceptance focus

Compare the existing Package-centric candidate against the new Item-centric candidate.

Test at desktop and 390 / 360 mobile width.

Required scenarios:

```text
1. Enter Custom grouping.
2. Confirm Package 01 / 02 / 03 are immediately available without creating packages.
3. Assign A+B to 01 and C to 02.
4. Confirm selecting C -> 02 automatically removes C from 01.
5. Confirm only Package 01 and Package 02 appear in the active package-style area.
6. Set Package 01 = Gift and Package 02 = Standard.
7. Confirm Gift fee is charged only for Package 01.
8. Open Details for each active package and verify Name / Gift message remains available.
9. Reassign B from 01 to 02 and confirm both membership summaries update.
10. Compare total vertical length and clarity against the package-centric candidate, especially on mobile.
```

## Decision not yet made

This step does NOT declare the item-centric version superior.

The decision remains open between:

```text
A. Package-centric Custom grouping
B. Smart item-centric Custom grouping
```

The user will choose based on direct visual and interaction comparison.

## Current stop point

```text
Current Package-centric candidate: preserved
Item-centric Custom A/B candidate: READY FOR USER REVIEW
Real SAFE5 Product Packaging: NOT STARTED
Batch 6: PAUSED
```

## Recording policy

This step follows `PROJECT2_STEP_RECORDING_POLICY.md`.
