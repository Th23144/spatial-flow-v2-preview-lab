# Step 4F · Product Packaging · Compact Expandable Candidate

Date: 2026-08-08
Status: STATIC CANDIDATE · USER ACCEPTANCE PENDING
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user accepted the package-centric grouping logic but reported that the advanced packaging section still occupied too much vertical space.

The user also clarified two visual preferences that must be preserved:

```text
- boxed presentation is acceptable and should not be removed merely for minimalism
- the three grouping modes have useful compactness when presented as three desktop columns
```

Therefore this pass is not a business-logic rewrite. It is a density / information-hierarchy revision.

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

## Visual / interaction change

### Before

Every generated Package card permanently exposed most of its controls:

```text
Package heading
Standard / Gift controls
item list
Change items controls
name or gift-message field
```

With multiple packages this produced a very tall page.

### Candidate now

Desktop grouping-mode selection remains three compact columns.

Generated packages now default to compact summary rows:

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

For `Keep together`, the advanced area no longer duplicates a full Package 01 editor. It displays a short confirmation that the packaging choice above is sufficient.

## Files changed

```text
preview/spatial-flow-checkout-packaging-v1.js
preview/spatial-flow-checkout-packaging-v3.css
```

Commits in this pass:

```text
22df773  Compact packaging groups into expandable package summaries
996d3d3  Compact packaging candidate visual hierarchy
```

## Intentionally NOT changed

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

## Cache / preview rule

For human review, use a fixed-commit raw.githack URL rather than relying on `main`, because earlier packaging-candidate iterations demonstrated stale asset mixing between HTML and CSS/JS.

## Acceptance focus

User should evaluate:

```text
1. Is the advanced section materially shorter when packages are collapsed?
2. Are the three grouping choices compact enough without becoming unclear?
3. Can Package 01 / 02 / 03 be understood from their collapsed summaries?
4. Does Edit make the detailed controls discoverable without cluttering the default view?
5. In Custom grouping, does moving items remain understandable from the package-centric perspective?
6. Desktop and mobile should remain usable with no clipping / overflow.
```

## Current stop point

```text
Product Packaging business model: provisional direction accepted
Package-centric grouping UX: accepted direction
Compact expandable visual candidate: awaiting user review
Real SAFE5 implementation: NOT STARTED for packaging
Batch 6: PAUSED
Step 04 live implementation: remains deferred to its planned later stage
```

## Exact next action

```text
User reviews fixed-commit Compact candidate.
If rejected: revise static candidate only and record the revision.
If accepted: mark this visual contract accepted, then prepare the bounded live Product Packaging implementation plan before touching SAFE5.
```

## Recording-policy note

This step is also governed by root policy:

```text
PROJECT2_STEP_RECORDING_POLICY.md
```

Every subsequent meaningful Project 2 step must continue to be recorded in GitHub so conversation length or window changes cannot erase the execution line.
