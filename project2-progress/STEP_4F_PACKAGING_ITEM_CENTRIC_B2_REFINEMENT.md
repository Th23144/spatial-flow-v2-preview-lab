# Step 4F · Product Packaging · Item-Centric B2 Refinement

Date: 2026-08-09
Status: STATIC B2 CANDIDATE · USER REVIEW REQUIRED
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User direction

The user compared the two Custom grouping presentations and stated that the item-centric **B** candidate is better and is broadly satisfactory.

This establishes the current preferred direction as:

```text
Item-centric Custom grouping
> Package-centric Custom grouping
```

However, B is not yet declared the final visual contract. The user asked whether further optimization space remains.

## Refinement boundary

B2 is deliberately a VISUAL DENSITY pass only.

The following accepted/required behavior is unchanged:

```text
- package slots are generated automatically
- customer does not manually add package slots
- one product assignment unit belongs to exactly one package at a time
- choosing another package transfers the product; it never duplicates it
- empty package slots are ignored
- empty package slots do not create fees
- only active/non-empty packages expose Standard / Gift selection
- Gift Packaging remains charged per actual non-empty gift package
- Standard / Gift metadata remains package-specific
```

## B2 changes

The original B candidate remains available at:

```text
preview/spatial-flow-checkout-packaging-itemcentric-v1.html
```

The new refinement is:

```text
preview/spatial-flow-checkout-packaging-itemcentric-b2.html
preview/spatial-flow-checkout-packaging-v9-itemcentric-refined.css
```

B2 keeps the same JavaScript controller as B and changes only presentation density.

### Mobile item assignment

B used:

```text
Product name
metadata
[01] [02] [03]
```

B2 uses a tighter single-row layout when space allows:

```text
Product name / metadata        [01] [02] [03]
```

This reduces Custom vertical height without deleting variant/size/quantity metadata that may be needed to distinguish similar products.

### Package result density

Active package summaries are compressed:

```text
Package id + members + Details
Standard / Gift
```

with lower control heights and tighter spacing.

Only actual non-empty packages continue to appear in the result area.

### Explanatory copy

The Item and active-package section headers are visually compressed on mobile. At <=390px, the secondary active-package explanation is hidden because the interaction has already been explained above.

## Intentionally NOT changed

```text
- item assignment data model
- fixed package-slot behavior
- unique ownership invariant
- Standard / Gift fee logic
- shipping behavior
- real SAFE5 Checkout
- WooCommerce Session / order metadata
- backend settings
- Step 03 Payment
- Step 04 Order Result
- Batch 6
```

## Files / commits

```text
0f7e41c  Refine item-centric packaging candidate density
7f040b4  Add refined item-centric packaging B2 candidate
```

## Review request

Compare B vs B2 on desktop and especially 390 / 360 mobile widths.

Recommended test:

```text
A -> Package 01
B -> Package 01
C -> Package 02
Package 01 -> Gift
Package 02 -> Standard
Move B from 01 -> 02
Open Details on both active packages
```

Check:

```text
1. Is B2 clearly shorter on mobile?
2. Are item names / variant metadata still readable?
3. Are 01 / 02 / 03 assignment targets still easy to tap?
4. Are active Package 01 / 02 summaries still easy to understand?
5. Does B2 feel too compressed compared with B?
```

## Current stop point

```text
Preferred Custom direction: Item-centric B
B2 visual-density refinement: awaiting user review
Package-centric A: retained only for comparison/history
Real SAFE5 Product Packaging: NOT STARTED
Batch 6: PAUSED
```

## Recording policy

This step follows `PROJECT2_STEP_RECORDING_POLICY.md`.
