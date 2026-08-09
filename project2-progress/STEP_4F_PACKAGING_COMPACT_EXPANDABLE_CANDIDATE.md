# Step 4F · Product Packaging · Compact Expandable Candidate

Date: 2026-08-08
Status: ACCEPTED STATIC VISUAL CONTRACT
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user accepted the package-centric grouping logic but reported that the advanced packaging section still occupied too much vertical space.

The user also clarified two visual preferences that must be preserved:

```text
- boxed presentation is acceptable and should not be removed merely for minimalism
- the three grouping modes have useful compactness when presented as three desktop columns
```

Therefore this pass was a density / information-hierarchy revision, not a business-logic rewrite.

## Preserved business logic

No product-packaging rule changed in this pass.

Still locked provisionally:

```text
Product packaging != courier / transport packaging
Standard Packaging = free
Standard personalized name = enabled by default, admin-switchable later
Gift Packaging = placeholder $9.00 per physical gift package
Gift package supports independent gift-card message
Grouping modes:
- keep everything together
- package every item separately
- custom grouping
Custom grouping is package-centric, not item-to-package-number matrix UX
```

## Accepted visual / interaction contract

Desktop grouping-mode selection remains three compact columns.

Generated packages default to compact summary rows:

```text
Package 01
item names / count
current packaging type
current fee
Edit
```

Only the package whose `Edit` control is opened reveals its detailed settings.

At most one package is expanded at a time.

Expanded package content can include:

```text
Standard / Gift selector
custom item movement controls (Custom grouping only)
personalized name OR gift-card message
remove-empty-package control when applicable
```

For `Keep together`, the advanced area does not duplicate a full Package 01 editor. The packaging choice above remains sufficient.

Custom grouping stays package-centric:

```text
Package -> what is inside it -> Change items / Move here
```

The rejected interaction must not return:

```text
Item -> choose Package 01 / 02 / 03 from a persistent assignment matrix
```

## User acceptance

On 2026-08-08, after reviewing the fixed-commit compact candidate, the user explicitly accepted this version with:

```text
这个可以
```

This acceptance closes the static visual-candidate loop for Product Packaging.

The accepted candidate now becomes the visual / interaction reference for the later live SAFE5 implementation, subject only to narrow adaptations required for real WooCommerce data, accessibility, backend editability and server-authoritative totals.

## Files in accepted candidate

```text
preview/spatial-flow-checkout-packaging-v1.html
preview/spatial-flow-checkout-packaging-v1.js
preview/spatial-flow-checkout-packaging-v3.css
```

Relevant compact-pass commits:

```text
22df773  Compact packaging groups into expandable package summaries
996d3d3  Compact packaging candidate visual hierarchy
```

Acceptance-record commit is the commit that updates this document to `ACCEPTED STATIC VISUAL CONTRACT`.

## Intentionally NOT changed yet

```text
- original accepted Shipping static reference
- real SAFE5 Checkout
- WooCommerce Session / fee calculation
- WooCommerce order metadata
- Gift Packaging production price source
- backend packaging settings
- Step 03 Payment
- Step 04 Order Result
- Batch 6 live order-chain validation
```

## Locked live-implementation boundaries

The live implementation must preserve:

```text
- WooCommerce/server authority for totals and order truth
- backend editability
- no browser-only fake fee or fake success state
- no new fifth Checkout step
- Step 02 remains the Product Packaging entry point
- Step 03 receives the already-finalized payable amount
- Product Packaging remains separate from courier / transport packaging
- accepted compact visual hierarchy is the 1:1 reference for this new module
- live edits must follow the manual anchored replacement and file-size audit policies
```

## Current stop point

```text
Product Packaging business model: provisional direction accepted
Package-centric grouping UX: ACCEPTED
Compact expandable visual candidate: ACCEPTED
Static Product Packaging visual contract: CLOSED
Real SAFE5 Product Packaging implementation: NOT STARTED
Batch 6: PAUSED until Product Packaging live implementation + dedicated acceptance
Step 04 live implementation: remains deferred to its planned later stage
```

## Exact next action

Before touching SAFE5, prepare and record a bounded live Product Packaging implementation plan that identifies:

```text
1. exact live owners / files
2. Step 02 insertion point
3. WooCommerce Session model for grouping / tier / messages
4. server-calculated gift-packaging fee model
5. persistence into real WooCommerce order data
6. backend-editable settings / defaults / price source
7. Order Summary integration
8. Step 03 amount propagation
9. later Step 04 / email readability requirements
10. manual anchored replacement boundaries, expected size deltas and rollback points
```

Only after that plan is reviewed should the live SAFE5 files be modified.

## Recording-policy note

This step is governed by:

```text
PROJECT2_STEP_RECORDING_POLICY.md
```

Every subsequent meaningful Project 2 step must continue to be recorded in GitHub so conversation length or window changes cannot erase the execution line.
